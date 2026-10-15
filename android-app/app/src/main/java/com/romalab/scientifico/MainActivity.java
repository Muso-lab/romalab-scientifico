package com.romalab.scientifico;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = "RomaLabAdMob";
    // Banner ID di test ufficiale Google AdMob per fallback garantito su dispositivi di collaudo
    private static final String GOOGLE_TEST_BANNER_ID = "ca-app-pub-3940256099942544/6300978111";

    private WebView webView;
    private AdView adView;
    private FrameLayout adBannerFrame;
    private InterstitialAd mInterstitialAd;
    private long lastInterstitialTime = 0;
    private static final long INTERSTITIAL_COOLDOWN_MS = 180_000;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Posizionamento chirurgico della WebView sotto la barra notifiche/status bar
        // e sollevamento banner AdMob sopra la barra gesti/navigazione di sistema
        View root = findViewById(R.id.rootLayout);
        if (root != null) {
            ViewCompat.setOnApplyWindowInsetsListener(root, (v, windowInsets) -> {
                Insets statusInsets = windowInsets.getInsets(
                    WindowInsetsCompat.Type.statusBars() | WindowInsetsCompat.Type.displayCutout()
                );
                Insets navInsets = windowInsets.getInsets(
                    WindowInsetsCompat.Type.navigationBars()
                );

                int topPadding = statusInsets.top;
                if (topPadding == 0) {
                    int resourceId = getResources().getIdentifier("status_bar_height", "dimen", "android");
                    if (resourceId > 0) {
                        topPadding = getResources().getDimensionPixelSize(resourceId);
                    }
                }

                v.setPadding(0, topPadding, 0, navInsets.bottom);
                return WindowInsetsCompat.CONSUMED;
            });
            ViewCompat.requestApplyInsets(root);
        }

        // Assicura icone chiare sulla barra di stato con sfondo scuro (#1c1917)
        WindowInsetsControllerCompat insetsController =
            WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        if (insetsController != null) {
            insetsController.setAppearanceLightStatusBars(false);
        }

        webView = findViewById(R.id.webView);
        adBannerFrame = findViewById(R.id.adBannerFrame);
        adView = findViewById(R.id.adView);

        // Inizializzazione SDK Google Mobile Ads
        MobileAds.initialize(this, initializationStatus -> {
            runOnUiThread(() -> {
                loadBannerAd();
                loadInterstitialAd();
            });
        });

        // Configurazione WebView
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);

        // Bridge JavaScript nativo
        webView.addJavascriptInterface(new WebAppInterface(this), "RomaLabNative");
        webView.setWebViewClient(new WebViewClient());

        // Caricamento dell'applicazione dagli asset locali (100% offline ready)
        webView.loadUrl("file:///android_asset/www/index.html");
    }

    private void loadBannerAd() {
        if (adView == null) return;
        AdRequest adRequest = new AdRequest.Builder().build();
        adView.setAdListener(new AdListener() {
            @Override
            public void onAdLoaded() {
                super.onAdLoaded();
                adView.setVisibility(View.VISIBLE);
                Log.d(TAG, "AdMob Banner primario caricato con successo!");
            }

            @Override
            public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                super.onAdFailedToLoad(loadAdError);
                Log.w(TAG, "AdMob Banner primario fallback a test: " + loadAdError.getMessage());
                runOnUiThread(() -> loadFallbackTestBanner());
            }
        });
        adView.loadAd(adRequest);
    }

    private void loadFallbackTestBanner() {
        if (isFinishing() || isDestroyed()) return;
        if (adBannerFrame == null) return;

        try {
            AdView testAdView = new AdView(this);
            testAdView.setAdUnitId(GOOGLE_TEST_BANNER_ID);
            testAdView.setAdSize(AdSize.BANNER);
            FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.WRAP_CONTENT,
                FrameLayout.LayoutParams.WRAP_CONTENT,
                Gravity.CENTER
            );
            testAdView.setLayoutParams(lp);

            testAdView.setAdListener(new AdListener() {
                @Override
                public void onAdLoaded() {
                    super.onAdLoaded();
                    adBannerFrame.removeAllViews();
                    adBannerFrame.addView(testAdView);
                    adView = testAdView;
                }

                @Override
                public void onAdFailedToLoad(@NonNull LoadAdError err) {
                    super.onAdFailedToLoad(err);
                }
            });

            AdRequest testRequest = new AdRequest.Builder().build();
            testAdView.loadAd(testRequest);
        } catch (Exception e) {
            Log.e(TAG, "Errore fallback banner", e);
        }
    }

    private void loadInterstitialAd() {
        AdRequest adRequest = new AdRequest.Builder().build();
        InterstitialAd.load(this, getString(R.string.admob_interstitial_ad_unit_id), adRequest,
            new InterstitialAdLoadCallback() {
                @Override
                public void onAdLoaded(@NonNull InterstitialAd interstitialAd) {
                    mInterstitialAd = interstitialAd;
                    mInterstitialAd.setFullScreenContentCallback(new FullScreenContentCallback() {
                        @Override
                        public void onAdDismissedFullScreenContent() {
                            mInterstitialAd = null;
                            loadInterstitialAd();
                        }

                        @Override
                        public void onAdFailedToShowFullScreenContent(@NonNull AdError adError) {
                            mInterstitialAd = null;
                        }
                    });
                }

                @Override
                public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                    mInterstitialAd = null;
                }
            });
    }

    public void showInterstitialAd() {
        long now = System.currentTimeMillis();
        if (now - lastInterstitialTime >= INTERSTITIAL_COOLDOWN_MS) {
            if (mInterstitialAd != null) {
                lastInterstitialTime = now;
                mInterstitialAd.show(this);
            }
        }
    }

    public static class WebAppInterface {
        private final MainActivity activity;

        public WebAppInterface(MainActivity activity) {
            this.activity = activity;
        }

        @JavascriptInterface
        public void triggerInterstitial() {
            activity.runOnUiThread(activity::showInterstitialAd);
        }

        @JavascriptInterface
        public boolean isNativeApp() {
            return true;
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (adView != null) adView.resume();
    }

    @Override
    protected void onPause() {
        if (adView != null) adView.pause();
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        if (adView != null) adView.destroy();
        super.onDestroy();
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
