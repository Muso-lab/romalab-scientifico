const fs = require('fs');
const path = require('path');

// 1. Setup minimal DOM mock to load current js/i18n.js
global.window = global;
global.localStorage = { getItem: () => null, setItem: () => {} };
global.document = { documentElement: { lang: 'it' } };
global.navigator = { language: 'en-US' };

require('../js/i18n.js');
const dict = window.I18N.dict;

console.log('--- Initial i18n Dictionary Loaded ---');
console.log('Available languages:', Object.keys(dict));

// 2. Load translation payloads
const canonicalIt = JSON.parse(fs.readFileSync('scripts/canonical_it_extensions.json', 'utf8'));
const germanic = JSON.parse(fs.readFileSync('target_germanic.json', 'utf8'));
const romance = JSON.parse(fs.readFileSync('target_romance.json', 'utf8'));
const asian = JSON.parse(fs.readFileSync('target_asian.json', 'utf8'));

// 3. Update Italian (IT) with canonical tips & troubleshooting
Object.keys(canonicalIt.recipeTips).forEach(recipeId => {
  if (dict.it.recipes[recipeId]) {
    dict.it.recipes[recipeId].easyTip = canonicalIt.recipeTips[recipeId].easyTip;
    dict.it.recipes[recipeId].proTip = canonicalIt.recipeTips[recipeId].proTip;
  }
});
Object.assign(dict.it, canonicalIt.sosTroubleshooting);
console.log('Updated [it] with 11 recipeTips and 10 sosTroubleshooting');

// 4. Update Germanic ('en', 'de')
['en', 'de'].forEach(lang => {
  const src = germanic[lang];
  if (!src) return;

  // Merge top-level trouble keys
  Object.keys(src).forEach(k => {
    if (k.startsWith('trouble')) {
      dict[lang][k] = src[k];
    }
  });

  // Merge recipeTips if present at root
  if (src.recipeTips) {
    Object.keys(src.recipeTips).forEach(rId => {
      if (dict[lang].recipes[rId]) {
        dict[lang].recipes[rId].easyTip = src.recipeTips[rId].easyTip;
        dict[lang].recipes[rId].proTip = src.recipeTips[rId].proTip;
      }
    });
  }

  // Merge recipes
  const srcRecipes = src.recipes || src;
  Object.keys(srcRecipes).forEach(rId => {
    if (dict[lang].recipes[rId] && typeof srcRecipes[rId] === 'object' && srcRecipes[rId].name) {
      Object.assign(dict[lang].recipes[rId], srcRecipes[rId]);
    }
  });
  console.log(`Updated [${lang}] recipes and tips`);
});

// 5. Update Romance ('es', 'fr', 'pt')
['es', 'fr', 'pt'].forEach(lang => {
  const src = romance[lang];
  if (!src) return;

  // Merge top-level trouble keys and nested sosTroubleshooting
  if (src.sosTroubleshooting) {
    Object.assign(dict[lang], src.sosTroubleshooting);
  }
  Object.keys(src).forEach(k => {
    if (k.startsWith('trouble')) {
      dict[lang][k] = src[k];
    }
  });

  // Merge recipeTips if present at root
  if (src.recipeTips) {
    Object.keys(src.recipeTips).forEach(rId => {
      if (dict[lang].recipes[rId]) {
        dict[lang].recipes[rId].easyTip = src.recipeTips[rId].easyTip;
        dict[lang].recipes[rId].proTip = src.recipeTips[rId].proTip;
      }
    });
  }

  // Merge recipes
  const srcRecipes = src.recipes || src;
  Object.keys(srcRecipes).forEach(rId => {
    if (dict[lang].recipes[rId] && typeof srcRecipes[rId] === 'object' && srcRecipes[rId].name) {
      Object.assign(dict[lang].recipes[rId], srcRecipes[rId]);
    }
  });
  console.log(`Updated [${lang}] recipes and tips`);
});

// 6. Update Asian ('ja', 'zh')
['ja', 'zh'].forEach(lang => {
  const src = asian[lang];
  if (!src) return;

  // Merge top-level trouble keys
  Object.keys(src).forEach(k => {
    if (k.startsWith('trouble')) {
      dict[lang][k] = src[k];
    }
  });

  // Merge recipeTips if present at root
  if (src.recipeTips) {
    Object.keys(src.recipeTips).forEach(rId => {
      if (dict[lang].recipes[rId]) {
        dict[lang].recipes[rId].easyTip = src.recipeTips[rId].easyTip;
        dict[lang].recipes[rId].proTip = src.recipeTips[rId].proTip;
      }
    });
  }

  // Merge recipes
  const srcRecipes = src.recipes || src;
  Object.keys(srcRecipes).forEach(rId => {
    if (dict[lang].recipes[rId] && typeof srcRecipes[rId] === 'object' && srcRecipes[rId].name) {
      Object.assign(dict[lang].recipes[rId], srcRecipes[rId]);
    }
  });
  console.log(`Updated [${lang}] recipes and tips`);
});

// 7. Write back updated i18n.js
const i18nCode = `/**
 * RomaLab Scientifico - Internationalization (i18n) Engine
 * Multi-language support: 8 World Languages (IT, EN, ES, FR, DE, PT, JA, ZH)
 * Dual unit support: Metric (g, °C) & Imperial (oz, °F)
 * 11 Quintessential Roman Dishes across Primi, Secondi, Contorni & Dolci
 * 10 SOS Gastronomic Emergency Scenarios & Fail-safe Easy/Pro Guidance
 */

const I18N = {
  currentLang: 'it',
  currentUnit: 'metric',

  languages: ${JSON.stringify(window.I18N.languages, null, 2)},

  dict: ${JSON.stringify(dict, null, 2)},

  init() {
    const savedLang = localStorage.getItem('romalab_lang');
    const savedUnit = localStorage.getItem('romalab_unit');

    if (savedLang && this.dict[savedLang]) {
      this.currentLang = savedLang;
    } else {
      const browserLang = (navigator.language || 'it').slice(0, 2).toLowerCase();
      this.currentLang = this.dict[browserLang] ? browserLang : 'it';
    }

    if (savedUnit && (savedUnit === 'metric' || savedUnit === 'imperial')) {
      this.currentUnit = savedUnit;
    } else if (this.currentLang === 'en') {
      this.currentUnit = 'imperial';
    }

    document.documentElement.lang = this.currentLang;
  },

  setLanguage(langCode) {
    if (this.dict[langCode]) {
      this.currentLang = langCode;
      localStorage.setItem('romalab_lang', langCode);
      document.documentElement.lang = langCode;
    }
  },

  setUnit(unitSystem) {
    if (unitSystem === 'metric' || unitSystem === 'imperial') {
      this.currentUnit = unitSystem;
      localStorage.setItem('romalab_unit', unitSystem);
    }
  },

  t(key, params = {}) {
    const langDict = this.dict[this.currentLang] || this.dict['it'];
    let str = langDict[key] || (this.dict['it'] && this.dict['it'][key]) || key;

    for (const [k, v] of Object.entries(params)) {
      str = str.replace(new RegExp('\\\\{' + k + '\\\\}', 'g'), v);
    }
    return str;
  },

  formatTemp(celsius) {
    if (this.currentUnit === 'imperial') {
      const fahr = Math.round((celsius * 9 / 5) + 32);
      return \`\${fahr}°F\`;
    }
    return \`\${celsius}°C\`;
  },

  formatWeight(grams) {
    if (this.currentUnit === 'imperial') {
      const oz = (grams * 0.035274).toFixed(1);
      return \`\${oz} oz\`;
    }
    return \`\${grams} g\`;
  }
};

if (typeof window !== 'undefined') {
  window.I18N = I18N;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18N;
}
`;

fs.writeFileSync('js/i18n.js', i18nCode, 'utf8');
console.log('Successfully wrote updated js/i18n.js!');
