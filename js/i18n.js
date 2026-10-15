/**
 * RomaLab Scientifico - Internationalization (i18n) Engine
 * Multi-language support: 8 World Languages (IT, EN, ES, FR, DE, PT, JA, ZH)
 * Dual unit support: Metric (g, °C) & Imperial (oz, °F)
 * 11 Quintessential Roman Dishes across Primi, Secondi, Contorni & Dolci
 * 10 SOS Gastronomic Emergency Scenarios & Fail-safe Easy/Pro Guidance
 */

const I18N = {
  currentLang: 'it',
  currentUnit: 'metric',

  languages: [
  {
    "code": "it",
    "name": "Italiano",
    "nativeName": "Italiano",
    "flag": "🇮🇹"
  },
  {
    "code": "en",
    "name": "English",
    "nativeName": "English",
    "flag": "🇬🇧"
  },
  {
    "code": "es",
    "name": "Spanish",
    "nativeName": "Español",
    "flag": "🇪🇸"
  },
  {
    "code": "fr",
    "name": "French",
    "nativeName": "Français",
    "flag": "🇫🇷"
  },
  {
    "code": "de",
    "name": "German",
    "nativeName": "Deutsch",
    "flag": "🇩🇪"
  },
  {
    "code": "pt",
    "name": "Portuguese",
    "nativeName": "Português",
    "flag": "🇵🇹"
  },
  {
    "code": "ja",
    "name": "Japanese",
    "nativeName": "日本語",
    "flag": "🇯🇵"
  },
  {
    "code": "zh",
    "name": "Chinese",
    "nativeName": "简体中文",
    "flag": "🇨🇳"
  }
],

  dict: {
  "it": {
    "appName": "RomaLab Scientifico",
    "appTagline": "Autentica Cucina Romana & Cinetica dell'Emulsione Gastronomica",
    "splashVersion": "v1.1.0 Pro • Edizione Globale Multi-Lingua",
    "navRecipes": "Ricette",
    "navCalculator": "Dosi",
    "navLiveKitchen": "Cottura",
    "navThermal": "Termica",
    "navScience": "Scienza",
    "btnLanguage": "Lingua",
    "btnUnits": "Unità",
    "btnTheme": "Tema",
    "btnGuide": "Guida",
    "btnMenu": "Menu",
    "btnShare": "Condividi",
    "btnTroubleshoot": "SOS Guida",
    "selectLanguage": "Seleziona Lingua",
    "close": "Chiudi",
    "servings": "Numero Persone",
    "servingsHint": "Porzione standard: {amount} di pasta a persona",
    "ingredientsTitle": "Dosaggi Scientifici al Grammo",
    "ingredientsSubtitle": "Calcolo proporzionale automatico di uova, grasso nobile e amido d'acqua.",
    "emulsionThermodynamics": "Finestra Termica di Mantecatura",
    "emulsionSubtitle": "La fisica dell'emulsione tra amidi, lipidi del guanciale e proteine.",
    "thermalSafeZone": "Zona Sicura di Mantecatura:",
    "thermalCold": "Troppo Freddo (<50°C)",
    "thermalOptimal": "Zona d'Oro Emulsione (58-65°C)",
    "thermalDanger": "Pericolo Frittata (>68°C)",
    "startCooking": "Preparazione Passo-Passo con Timer",
    "cookingSubtitle": "Segui le fasi in diretta per non sbagliare tempi e temperature.",
    "step": "Fase",
    "timer": "Timer",
    "start": "Avvia",
    "pause": "Pausa",
    "reset": "Azzera",
    "done": "Completato",
    "alertTempDanger": "ATTENZIONE: Temperatura > 68°C! Rischio frittata! Spegni il fuoco e allontana la padella.",
    "alertTempOptimal": "TEMPERATURA PERFETTA (58-65°C): Procedi all'emulsione mantecando energicamente.",
    "alertTempCold": "Temperatura troppo bassa (< 50°C): La salsa potrebbe risultare slegata o fredda.",
    "modeEasy": "⭐ Facile (Zero Rischi)",
    "modePro": "🏆 Pro (Maestro Tradizione)",
    "modeEasyLabel": "⭐ Facile (Assistita)",
    "modeEasyDesc": "Tecniche con cuscinetto di sicurezza, crema stabilizzata e tagli di formaggio più docili.",
    "modeProDesc": "Disciplinare ortodosso: 100% tuorli freschi, Pecorino Romano DOP in purezza e risottatura all'amido.",
    "hintYolks": "💡 Easy: Puoi unire 1 albume per dare massima scorrevolezza alla crema",
    "hintPecorino": "💡 Easy: Taglio consigliato 50% Pecorino + 50% Parmigiano Reggiano",
    "hintWater": "💡 Easy: Frulla acqua tiepida (55°C) e formaggio con una frustina o minipimer",
    "substitutionsTitle": "Guida Internazionale agli Ingredienti",
    "substitutionsSubtitle": "Disciplinari, chimica e sostituti ammessi all'estero.",
    "subGuancialeTitle": "🥓 Guanciale vs Bacon vs Pancetta",
    "guancialeNote": "Il guanciale ha un grasso nobile a basso punto di fusione (32-35°C) che crea un'emulsione vellutata. Alternativa accettabile all'estero: Pancetta tesa artigianale non affumicata. Evitare il bacon americano affumicato con zucchero.",
    "subPecorinoTitle": "🧀 Pecorino Romano DOP & Il Taglio",
    "pecorinoNote": "Formaggio ovino a pasta dura e sapore sapido. Se all'estero risulta troppo pungente, il compromesso gourmet è il taglio 70% Pecorino Romano DOP e 30% Parmigiano Reggiano 24 mesi.",
    "subPastaTitle": "🌾 L'Amido della Pasta Trafilata al Bronzo",
    "pastaNote": "La trafilatura al bronzo crea una superficie rugosa che cede amido libero nell'acqua. L'amido agisce da tensioattivo chimico, legando indissolubilmente l'acqua e il grasso fluido del guanciale.",
    "emergencyTitle": "🚨 Dispensa d'Emergenza & Sostituzioni",
    "emergencySubtitle": "Sei all'estero o manca un ingrediente? I trucchi scientifici per non rinunciare al piatto.",
    "emGuancialeTitle": "🥓 Se manca il Guanciale:",
    "emGuancialeOpt1": "✅ Opzione 1 (Ottima): Pancetta tesa artigianale NON affumicata. Ridurre leggermente il sale nell'acqua.",
    "emGuancialeOpt2": "⚠️ Opzione 2 (Estrema - Estero): Bacon americano. Trucco salvavita: sbollentare le fette in acqua bollente per 2 minuti prima di rosolare, per estrarre fumo e zuccheri.",
    "emPecorinoTitle": "🧀 Se manca il Pecorino Romano:",
    "emPecorinoOpt1": "✅ Opzione 1 (Consigliata Easy): 50% Pecorino (anche toscano/sardo) e 50% Parmigiano Reggiano. Molto più facile da sciogliere senza grumi!",
    "emPecorinoOpt2": "⚠️ Opzione 2: Solo Parmigiano Reggiano o Grana. Aggiungere 1 g di sale e una macinata extra di pepe per compensare la minore sapidità ovina.",
    "emStarchTitle": "🌾 Se la pasta è liscia (poco amido):",
    "emStarchOpt1": "✅ Il Trucco della Pentola Piccola: Cuoci la pasta in metà acqua del solito (es. 1.5L per 300g). L'acqua diventerà un brodo d'amido super-concentrato!",
    "emStarchOpt2": "🔬 Trucco Molecolare di Emergenza: Sciogli 1/2 cucchiaino raso di amido di mais o fecola in una tazzina d'acqua fredda e versalo in padella: creerà l'emulsione cremosa istantaneamente.",
    "troubleshootTitle": "Pronto Soccorso Gastronomico",
    "troubleshootDesc": "Hai sbagliato qualcosa in padella? Ecco come la fisica ti aiuta a salvare il piatto.",
    "troubleClumpTitle": "Il pecorino ha fatto i grumi gommosi?",
    "troubleClumpSol": "La caseina supera i 65°C espellendo il siero. Sposta la padella dal fuoco, aggiungi 2-3 cucchiai di acqua di cottura ricca d'amido tiepida (55°C) e lavora velocemente con una frustina o un minipimer nel bicchiere prima di riunire alla pasta.",
    "troubleCurdleTitle": "L'uovo ha iniziato a rapprendersi (effetto frittata)?",
    "troubleCurdleSol": "Rimuovi subito la padella dalla fonte di calore. Trasferisci la pasta in una ciotola fredda, unisci 1 cubetto di ghiaccio o 2 cucchiai d'acqua fredda e sbatti energicamente. Se i grumi sono già visibili, frulla 5 secondi col minipimer con un cucchiaio di acqua d'amido: la lecitina si ri-emulsionerà.",
    "troubleSaltyTitle": "Il piatto risulta eccessivamente salato?",
    "troubleSaltySol": "Il Pecorino DOP stagionato contiene molto sale naturale. Regola aurea: dimezza il sale nell'acqua della pasta (max 5g/L). Per rimediare a piatto ultimato: allunga con acqua di cottura non salata e aggiungi pepe nero tostato (la piperina maschera la sapidità acuta).",
    "recipes": {
      "carbonara": {
        "name": "Spaghetti alla Carbonara",
        "shortDesc": "Tuorli d'uovo freschi, guanciale croccante, Pecorino Romano DOP e pepe tostato.",
        "origin": "Roma (1944)",
        "difficulty": "Media (Sensibile alla temperatura)",
        "history": "Nata dall'incontro tra l'ingegno dei cuochi romani e gli ingredienti dei soldati alleati, perfezionata nei decenni fino a diventare un'icona dell'alta cucina mondiale.",
        "scienceTip": "I tuorli contengono lecitina, un potente emulsionante naturale. A 64-66°C le proteine si distendono e intrappolano il grasso fuso del guanciale senza coagulare in solidi.",
        "ingredients": {
          "pasta": {
            "name": "Spaghetti o Rigatoni trafilati al bronzo",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale di maiale laziale o amatriciano",
            "basePerPerson": 60,
            "unit": "g"
          },
          "yolks": {
            "name": "Tuorli d'uovo (grandezza L)",
            "basePerPerson": 1,
            "extraPadella": 1,
            "unit": "pz"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP grattugiato fine",
            "basePerPerson": 35,
            "unit": "g"
          },
          "pepper": {
            "name": "Pepe nero in grani macinato fresco",
            "basePerPerson": 2.5,
            "unit": "g"
          },
          "salt": {
            "name": "Sale per l'acqua (quantità dimezzata: 5g/L)",
            "basePerPerson": 5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Taglio e Rosolatura del Guanciale",
            "desc": "Taglia il guanciale a listarelle spesse 5-7mm (non a dadini piccoli). Mettilo in padella fredda senza olio né burro. Accendi la fiamma a livello medio-basso e lascia sudare il grasso dolcemente per 10-12 minuti finché l'esterno è dorato e croccante ma il cuore resta morbido.",
            "timerMin": 10
          },
          {
            "title": "La \"Carbocrema\" a Freddo",
            "desc": "In una ciotola, unisci i tuorli d'uovo con il Pecorino Romano DOP grattugiato finemente e una generosa macinata di pepe nero tostato. Lavora con una frusta fino a ottenere una crema pastosa e omogenea. Aggiungi 2 cucchiai del grasso fuso tiepido del guanciale per temperare e avviare l'emulsione aromatica.",
            "timerMin": 3
          },
          {
            "title": "Cottura Pasta & Estrazione Amido",
            "desc": "Cuoci la pasta in abbondante acqua bollente con poco sale (5g per litro d'acqua). Scola la pasta 2 minuti prima del tempo indicato sulla confezione, conservando una tazza di acqua di cottura ricca di amido.",
            "timerMin": 8
          },
          {
            "title": "Risottatura in Padella",
            "desc": "Versa la pasta al dente direttamente nella padella col grasso del guanciale (a fuoco vivo per 1 minuto), aggiungendo un mestolino di acqua di cottura. Salta continuamente per creare la prima emulsione liquida tra amido e grasso.",
            "timerMin": 1
          },
          {
            "title": "La Mantecatura Scientifica (A Fuoco Spento)",
            "desc": "SPEGNI IL FUOCO E ALLONTANA LA PADELLA dal fornello. Attendi 45-60 secondi che la temperatura della padella scenda a 60-65°C. Versa la pasta nella ciotola con la crema d'uovo. Mescola rapidamente e salta aggiungendo poca acqua di cottura all'occorrenza. Impiatta subito con il guanciale croccante in cima.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Separa 2 cucchiai di acqua di cottura e lasciala raffreddare a 50°C per stemperare i tuorli e il pecorino prima di unire alla pasta. Manteca SEMPRE fuori dal fuoco.",
        "proTip": "🏆 Pro Chef: Usa solo tuorli freschi di galline allevate a terra, grasso di guanciale fuso a 80°C senza bruciare, e mantecatura ad onda tra 62°C e 65°C per massimizzare la viscosità della lecitina."
      },
      "cacioepepe": {
        "name": "Tonnarelli Cacio e Pepe",
        "shortDesc": "Solo tre elementi: pasta trafilata ricca d'amido, Pecorino Romano DOP e pepe nero tostato.",
        "origin": "Roma, Agro Romano",
        "difficulty": "Alta (Richiede precisione termica)",
        "history": "Il piatto secolare dei pastori durante la transumanza nei pascoli laziali: ingredienti che si conservavano a lungo nelle bisacce senza deperire.",
        "scienceTip": "Il Pecorino fonde a 55°C, ma sopra i 65°C le caseine polimerizzano espellendo il siero. La salvezza è l'amido sciolto dell'acqua che stabilizza l'emulsione impedendo alle proteine di agglutinarsi.",
        "ingredients": {
          "pasta": {
            "name": "Tonnarelli freschi all'uovo o Spaghetti ruvidi",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP grattugiato a velo",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pepper": {
            "name": "Pepe nero in grani da tostare",
            "basePerPerson": 3.5,
            "unit": "g"
          },
          "water": {
            "name": "Acqua di cottura della pasta concentrata",
            "basePerPerson": 40,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Tostatura e Sviluppo Aromi del Pepe",
            "desc": "Pesta i grani di pepe al mortaio. Metti il pepe in una padella capiente a secco a fiamma media per 1-2 minuti. Quando sprigiona il profumo intenso della piperina tostata, sfuma con un mestolino d'acqua bollente della pasta: si formerà un infuso pepato profumatissimo.",
            "timerMin": 2
          },
          {
            "title": "Preparazione della Pastella a Freddo",
            "desc": "In una ciotola versa il Pecorino Romano grattugiato finemente. Aggiungi poco alla volta acqua di cottura della pasta prelevata a metà cottura (fatta intiepidire a circa 55-60°C). Mescola energicamente con una frusta fino a creare una crema densa e senza grumi.",
            "timerMin": 3
          },
          {
            "title": "Risottatura Finale",
            "desc": "Scola i tonnarelli al dente direttamente nella padella col brodo di pepe e salta a fuoco vivo per finire la cottura e far concentrare l'amido in una cremina lucida.",
            "timerMin": 2
          },
          {
            "title": "Mantecatura Fuori dal Fuoco",
            "desc": "Sposta la padella fuori dalla fonte di calore. Attendi 30 secondi che la temperatura scenda sotto i 60°C. Aggiungi la pastella di pecorino e salta vigorosamente: l'amido della pasta e la crema si fonderanno in un'onda vellutata perfetta.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Prepara una pastella di pecorino con acqua tiepida a 50°C a parte in una ciotola con una frusta. Aggiungila alla pasta solo quando la padella è allontanata dal fuoco.",
        "proTip": "🏆 Pro Chef: Estrazione dell'amido per risottatura violenta negli ultimi 3 minuti. Mantecatura dinamica a 58°C: la concentrazione di amilosio deve formare ponti di idrogeno con la caseina."
      },
      "amatriciana": {
        "name": "Bucatini all'Amatriciana",
        "shortDesc": "Guanciale croccante, pomodoro San Marzano pelato, Pecorino Romano DOP e sfumata di vino bianco secco.",
        "origin": "Amatrice / Roma (Disciplinare STG)",
        "difficulty": "Media",
        "history": "Evoluzione della Gricia (l'Amatriciana bianca) avvenuta a fine Settecento con l'introduzione del pomodoro nella cucina laziale.",
        "scienceTip": "L'acidità naturale del pomodoro San Marzano (pH ~4.3) bilancia perfettamente la ricchezza lipidica del guanciale, mentre il pecorino a fine cottura aggiunge umami e sapidità profonda.",
        "ingredients": {
          "pasta": {
            "name": "Bucatini o Mezzi Rigatoni trafilati al bronzo",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale di Amatrice a listarelle",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Pomodori pelati San Marzano DOP schiacciati a mano",
            "basePerPerson": 120,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP grattugiato",
            "basePerPerson": 30,
            "unit": "g"
          },
          "vino": {
            "name": "Vino bianco secco dei Castelli per sfumare",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "chili": {
            "name": "Peperoncino rosso fresco o secco (facoltativo)",
            "basePerPerson": 0.5,
            "unit": "pz"
          }
        },
        "steps": [
          {
            "title": "Doratura del Guanciale",
            "desc": "Rosola il guanciale in padella a fiamma dolce finché diventa dorato e croccante. Preleva i pezzi croccanti e tienili da parte al caldo (rimarranno croccanti e non molli).",
            "timerMin": 8
          },
          {
            "title": "Sfumata di Vino & Pomodoro",
            "desc": "Nel fondo con il grasso rimasto in padella, sfuma col vino bianco e fai evaporare l'alcol. Aggiungi il peperoncino e i pomodori pelati sfilacciati. Lascia sobbollire a fuoco medio per 12-15 minuti finché la salsa si addensa e lucida.",
            "timerMin": 12
          },
          {
            "title": "Unione e Mantecatura",
            "desc": "Cuoci i bucatini al dente, versali nel sugo con qualche pezzo di guanciale e salta per 1 minuto. Spegni la fiamma, manteca con una cascata di Pecorino Romano e impiatta disponendo in cima il guanciale croccante.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Togli il guanciale dalla padella non appena è dorato e tienilo da parte. Cuoci il pomodoro nel grasso e unisci il guanciale solo all'ultimo sopra il piatto per mantenerlo croccante.",
        "proTip": "🏆 Pro Chef: Sfumatura con vino bianco secco sui bordi caldi della padella per deglassare gli zuccheri caramellati. Pomodoro San Marzano schiacciato a mano cotto a fiamma viva per non perdere freschezza."
      },
      "gricia": {
        "name": "Mezze Maniche alla Gricia",
        "shortDesc": "La leggendaria \"Amatriciana bianca\": pasta, guanciale, pecorino e pepe nero.",
        "origin": "Grisciano / Roma antica",
        "difficulty": "Media",
        "history": "La madre di tutte le paste romane: la Carbonara e l'Amatriciana sono nate come sue varianti arricchite.",
        "scienceTip": "Poiché non c'è pomodoro né uovo a fare da legante, la cremosità dipende al 100% dalla corretta risottatura della pasta con l'amido estratto e il grasso fluido.",
        "ingredients": {
          "pasta": {
            "name": "Mezze Maniche o Rigatoni rigati",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale stagionato a listarelle",
            "basePerPerson": 55,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP media stagionatura",
            "basePerPerson": 40,
            "unit": "g"
          },
          "pepper": {
            "name": "Pepe nero macinato",
            "basePerPerson": 2.5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Sudorazione Guanciale",
            "desc": "Fai sfrigolare il guanciale a fiamma moderata fino a renderlo croccante fuori e morbido dentro. Tieni da parte 2/3 del guanciale croccante.",
            "timerMin": 8
          },
          {
            "title": "Creazione del Fondo d'Amido",
            "desc": "Aggiungi un mestolo di acqua bollente nella padella col grasso e il pepe: crea un'emulsione opalescente ricca di sapori.",
            "timerMin": 2
          },
          {
            "title": "Mantecatura Finale col Pecorino",
            "desc": "Scola la pasta al dente in padella, salta a fuoco vivo per 60 secondi. Spegni il fuoco, attendi 30 secondi, spolvera con 3/4 del pecorino e manteca formando la vellutata. Guarnisci col guanciale croccante e il pecorino rimasto.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Aggiungi poca acqua di cottura alla volta sul fondo di grasso del guanciale. Non versare mai il pecorino a contatto col fondo caldo della padella: manteca saltando a mezz'aria.",
        "proTip": "🏆 Pro Chef: Emulsione bifasica perfetta grasso nobile/amido. Pepe nero pestato al mortaio tostato a secco a 150°C prima della risottatura per sprigionare la piperina."
      },
      "saltimbocca": {
        "category": "secondi",
        "name": "Saltimbocca alla Romana",
        "shortDesc": "Fettine sottili di vitello da latte, Prosciutto crudo dolce, salvia fresca e burro chiarificato sfumati al vino bianco secco.",
        "origin": "Roma (Rione Regola, fine Ottocento)",
        "difficulty": "Facile (Cottura espressa in 90 secondi)",
        "history": "Citati da Pellegrino Artusi nel 1891 dopo averli assaggiati nella storica trattoria \"Le Venete\" a Roma: un capolavoro immediato che \"salta in bocca\".",
        "scienceTip": "Reazione di Maillard rapidissima a 160°C solo sul lato della carne infarinata. Fuori dal fuoco il fondo di cottura si emulsiona con burro freddo e vino (beurre monté) creando una glassa lucida e vellutata.",
        "ingredients": {
          "veal": {
            "name": "Fettine di noce o fesa di vitello sottili (3mm)",
            "basePerPerson": 160,
            "unit": "g"
          },
          "prosciutto": {
            "name": "Prosciutto crudo dolce stagionato di qualità",
            "basePerPerson": 50,
            "unit": "g"
          },
          "sage": {
            "name": "Foglie di salvia fresca intere",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "butter": {
            "name": "Burro di qualità (per dorare ed emulsionare)",
            "basePerPerson": 25,
            "unit": "g"
          },
          "wine": {
            "name": "Vino bianco secco (Frascati Superiore DOC)",
            "basePerPerson": 30,
            "unit": "ml"
          },
          "flour": {
            "name": "Farina di grano tenero (solo per il fondo carne)",
            "basePerPerson": 10,
            "unit": "g"
          },
          "pepper": {
            "name": "Pepe nero macinato fresco (non salare il prosciutto)",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Battitura e Spillatura",
            "desc": "Batti le fettine tra due fogli di carta forno rendendole sottilissime (3mm). Adagia su ogni fetta una fetta di prosciutto crudo e una foglia di salvia. Fissa al centro con uno stuzzicadenti orizzontale a mo' di spilla.",
            "timerMin": 5
          },
          {
            "title": "Infarinatura Scientifica del Solo Fondo",
            "desc": "Infarina leggermente SOLO la parte inferiore della carne (quella a contatto con la padella), scuotendo l'eccesso. Non toccare mai con la farina né il prosciutto né la salvia.",
            "timerMin": 2
          },
          {
            "title": "Cottura Espressa ad Alta Temperatura",
            "desc": "Fondi 2/3 del burro in padella a fuoco vivo. Adagia i saltimbocca dal lato infarinato. Cuoci senza muoverli per 60-80 secondi per formare la crosticina dorata.",
            "timerMin": 2
          },
          {
            "title": "Sfumata e Montatura \"Beurre Monté\"",
            "desc": "Gira i saltimbocca per soli 15 secondi dal lato del prosciutto. Sfuma col vino bianco e lascia evaporare l'alcol. Togli la carne e tienila al caldo. Spegni il fuoco, aggiungi il restante burro freddo nella padella e agita energicamente per creare una glassa vellutata.",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Easy Mode: Infarina solo il lato inferiore della carne (non il prosciutto). Cuoci con un coperchio a fuoco medio per 60 secondi: la carne rimarrà morbidissima e succulenta.",
        "proTip": "🏆 Pro Chef: Sfumatura con vino bianco a fuoco vivissimo (deglazing a 160°C) per creare una salsa vellutata e lucida col burro nocciola freddo montato all'ultimo."
      },
      "coda": {
        "category": "secondi",
        "name": "Coda alla Vaccinara",
        "shortDesc": "Coda di bue stufata a fuoco lentissimo per 4 ore con sedano croccante, pomodoro San Marzano, uvetta, pinoli e cacao amaro.",
        "origin": "Roma (Rione Testaccio / Quinto Quarto)",
        "difficulty": "Media (Lunga cottura a bassa temperatura)",
        "history": "La regina del Quinto Quarto, nata nelle bettole attorno all'antico Mattatoio di Testaccio dove i \"vaccinari\" (scuoiatori) cucinavano la coda con abbondante sedano per renderla tenerissima.",
        "scienceTip": "Il collagene della coda idrolizza trasformandosi in succulenta gelatina fondente solo tra gli 80°C e gli 85°C con sobbollitura quasi impercettibile (\"pipare\"). Il cacao amaro e l'uvetta creano l'agrodolce rinascimentale che sgrassa il palato.",
        "ingredients": {
          "tail": {
            "name": "Coda di bue tagliata a rocchi regolari",
            "basePerPerson": 350,
            "unit": "g"
          },
          "celery": {
            "name": "Sedano bianco a coste tenere e croccanti",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Pomodori pelati San Marzano DOP schiacciati a mano",
            "basePerPerson": 200,
            "unit": "g"
          },
          "wine": {
            "name": "Vino rosso corposo (Cesanese del Piglio)",
            "basePerPerson": 60,
            "unit": "ml"
          },
          "lard": {
            "name": "Battuto di guanciale con carota e cipolla",
            "basePerPerson": 25,
            "unit": "g"
          },
          "cocoa": {
            "name": "Cacao amaro in polvere puro",
            "basePerPerson": 2,
            "unit": "g"
          },
          "pinenuts": {
            "name": "Pinoli tostati e uvetta sultanina ammollata",
            "basePerPerson": 10,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Rosolatura e Reazione dei Rocchi",
            "desc": "In una casseruola capiente fai soffriggere il battuto di guanciale. Unisci i rocchi di coda e falli dorare su tutti i lati per 10 minuti a fiamma vivace finché sono ben sigillati.",
            "timerMin": 10
          },
          {
            "title": "Sfumata di Vino Rosso e Pomodoro",
            "desc": "Sfuma con il vino rosso corposo lasciando evaporare l'alcol. Aggiungi i pomodori pelati schiacciati, sale e una generosa macinata di pepe. Porta a leggero bollore.",
            "timerMin": 10
          },
          {
            "title": "La Lenta Idrolisi del Collagene",
            "desc": "Copri col coperchio e abbassa la fiamma al minimo: il sugo deve solo sobbollire dolcemente a 80-85°C per circa 3 ore e mezza, finché la carne si stacca spontaneamente dall'osso.",
            "timerMin": 180
          },
          {
            "title": "Il Tocco Maestro: Sedano & Cacao",
            "desc": "Sbollenta le coste di sedano per 3 minuti in acqua salata, poi uniscile alla coda insieme a pinoli, uvetta e il cacao amaro sciolto in un mestolino di sugo. Lascia insaporire per 20 minuti a fuoco dolce prima di servire.",
            "timerMin": 20
          }
        ],
        "easyTip": "💡 Easy Mode: Se hai poco tempo, puoi usare la pentola a pressione per i primi 45 minuti e poi finire a fuoco lento senza coperchio per far addensare il sugo.",
        "proTip": "🏆 Pro Chef: Cottura dolce a 85°C per 4 ore per idrolizzare completamente il collagene in gelatina. Aggiunta canonica di cacao amaro e pinoli tostati negli ultimi 15 minuti."
      },
      "abbacchio": {
        "category": "secondi",
        "name": "Abbacchio alla Scottadito",
        "shortDesc": "Costolette d'agnello da latte marinate con rosmarino fresco, aglio novello e strutto, grigliate a fuoco vivo da mangiare roventi con le dita.",
        "origin": "Roma e Agro Romano",
        "difficulty": "Facile (Cottura rapida ad alta temperatura)",
        "history": "Così chiamato perché la tradizione capitolina impone di gustare le costolette appena sollevate dalla brace, scottandosi letteralmente le dita senza aspettare.",
        "scienceTip": "La carne tenerissima dell'abbacchio richiede un calore di contatto molto elevato (220-250°C) per caramellare rapidamente l'esterno in 2 minuti per lato, mantenendo l'interno rosato a 56-58°C senza perdere liquidi intracellulari.",
        "ingredients": {
          "chops": {
            "name": "Costolette di abbacchio da latte fresche",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "rosemary": {
            "name": "Rosmarino fresco e timo selvatico tritati",
            "basePerPerson": 3,
            "unit": "g"
          },
          "garlic": {
            "name": "Spicchi d'aglio novello schiacciati in camicia",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Olio extravergine d'oliva sabino o strutto",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "lemon": {
            "name": "Spicchi di limone fresco per il servizio",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "salt": {
            "name": "Sale grosso macinato e pepe nero in grani",
            "basePerPerson": 3,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Marinatura Aromatica a Freddo",
            "desc": "Massaggia le costolette con l'olio o lo strutto, il trito di rosmarino, aglio schiacciato e pepe. Lascia riposare a temperatura ambiente per 15-20 minuti.",
            "timerMin": 15
          },
          {
            "title": "Riscaldamento Piastra ad Alta Temperatura",
            "desc": "Fai arroventare la piastra in ghisa o la griglia finché fuma leggermente (230-250°C). La superficie deve essere caldissima per sigillare all'istante.",
            "timerMin": 5
          },
          {
            "title": "Cottura Violenta 2 Minuti per Lato",
            "desc": "Adagia le costolette sulla griglia ben distanziate. Cuoci per 2 minuti senza muoverle, gira e cuoci altri 2 minuti. Sala solo al momento di girare.",
            "timerMin": 4
          },
          {
            "title": "Servizio Rovente \"Scottadito\"",
            "desc": "Disponi subito sul piatto caldo con spicchi di limone. Mangia rigorosamente con le mani afferrando l'osso mentre è ancora bollente!",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Easy Mode: Marina le costolette per 15 minuti in un filo d'olio, rosmarino e aglio schiacciato. Scalda bene la bistecchiera antiaderente per non farle attaccare.",
        "proTip": "🏆 Pro Chef: Contatto ad altissima temperatura (230°C) per 90 secondi per lato. Salatura rigorosamente a fine cottura con sale a scaglie per preservare l'osmosi dei succhi interni."
      },
      "carciofigiudia": {
        "category": "contorni",
        "name": "Carciofi alla Giudia",
        "shortDesc": "L'icona millenaria del Ghetto Ebraico: carciofo mammola romanesca con doppia frittura dorata a forma di rosa croccante.",
        "origin": "Roma (Ghetto Ebraico, XVI secolo)",
        "difficulty": "Alta (Precisione di mondatura a spirale e termica d'olio)",
        "history": "Nato nelle cucine giudaico-romane per celebrare la fine del digiuno di espiazione dello Yom Kippur: i carciofi interi si trasformano in spettacolari rose dorate.",
        "scienceTip": "La DOPPIA FRITTURA SCIENTIFICA: il 1° tuffo a 140°C cuoce la polpa interna e il gambo rendendoli teneri come burro. Il 2° tuffo a 175-180°C con un goccio d'acqua fredda fa evaporare istantaneamente l'umidità dai petali esterni trasformandoli in chips croccantissime.",
        "ingredients": {
          "artichoke": {
            "name": "Carciofi Cimaroli (Mammole Romanesche IGP)",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Olio extravergine d'oliva per friggere ad immersione",
            "basePerPerson": 250,
            "unit": "ml"
          },
          "lemon": {
            "name": "Limone fresco per acidulare l'acqua di mondatura",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "salt": {
            "name": "Sale fino e pepe nero per condire il cuore",
            "basePerPerson": 2,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Mondatura a Spirale della Mammola",
            "desc": "Elimina le foglie esterne coriacee ruotando il carciofo con uno spelucchino come per sbucciare un'arancia. Pela il gambo e taglia via la sommità delle spine formando una cupola perfetta.",
            "timerMin": 10
          },
          {
            "title": "Prima Frittura a 140°C (Cottura Cuore)",
            "desc": "Scalda abbondante olio a 140°C. Immergi i carciofi a testa in giù per 10-12 minuti finché infilando una forchetta alla base del gambo risulta tenero come burro. Scola e lascia intiepidire 5 minuti.",
            "timerMin": 12
          },
          {
            "title": "Apertura a Rosa e Condimento",
            "desc": "Batti dolcemente i carciofi uno contro l'altro o schiacciali sul tagliere per far aprire i petali verso l'esterno come una rosa fiorita. Condisci il cuore con sale e pepe macinato.",
            "timerMin": 3
          },
          {
            "title": "Seconda Frittura a 180°C (Croccantezza Petali)",
            "desc": "Porta l'olio a 175-180°C. Spruzza poche gocce d'acqua sui petali e re-immergi a testa in giù schiacciando leggermente con una pinza per 2 minuti. I petali diventeranno croccanti come patatine.",
            "timerMin": 2
          }
        ],
        "easyTip": "💡 Easy Mode: Pulisci bene togliendo le prime 4-5 file di foglie dure. Immergi in acqua acidulata con limone per evitare l'ossidazione prima di friggere.",
        "proTip": "🏆 Pro Chef: Doppio bagno d'olio a immersione: prima a 140°C per cuocere il cuore, poi battitura a fiore e secondo tuffo a 180°C per 90 secondi per cristallizzare le foglie come patatine."
      },
      "carciofiromana": {
        "category": "contorni",
        "name": "Carciofi alla Romana",
        "shortDesc": "Mammole romanesche farcite con mentuccia selvatica romana, aglio e prezzemolo, stufate dolcemente a testa in giù in tegame.",
        "origin": "Roma e Campagna Romana",
        "difficulty": "Media (Mondatura accurata e stufatura stagna)",
        "history": "Il contorno primaverile per eccellenza della domenica romana. La mentuccia nepeta (nepetella), tipica delle rovine romane, dona un aroma inimitabile.",
        "scienceTip": "I carciofi cotti a testa in giù a 90-95°C sigillati con carta forno bagnata e coperchio pesante cuociono nel vapore aromatizzato del proprio fondo di emulsione olio-vino, preservando i polifenoli e restando morbidi senza annerire.",
        "ingredients": {
          "artichoke": {
            "name": "Carciofi mammole romanesche con gambo lungo",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "mint": {
            "name": "Mentuccia romana fresca selvatica (nepetella)",
            "basePerPerson": 3,
            "unit": "g"
          },
          "parsley": {
            "name": "Prezzemolo fresco a foglia liscia tritato",
            "basePerPerson": 4,
            "unit": "g"
          },
          "garlic": {
            "name": "Spicchi d'aglio novello tritati finemente",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "oil": {
            "name": "Olio extravergine d'oliva generoso",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "wine": {
            "name": "Vino bianco secco o acqua per il fondo",
            "basePerPerson": 25,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Mondatura e Apertura Interna",
            "desc": "Monda le foglie esterne dure, pela il gambo e taglia la punta. Allarga delicatamente le foglie centrali con le dita per fare spazio al ripieno aromatico.",
            "timerMin": 10
          },
          {
            "title": "Farcitura con Tritato di Mentuccia",
            "desc": "Trita finemente mentuccia romana, prezzemolo, aglio, sale e pepe. Riempi il cuore di ciascun carciofo spingendo il trito aromatico in profondità.",
            "timerMin": 5
          },
          {
            "title": "Posizionamento a Testa in Giù nel Tegame",
            "desc": "Disponi i carciofi a testa in giù, ben stretti l'uno contro l'altro in una pentola a bordi alti. Irrora con abbondante olio extravergine, vino bianco e acqua fino a metà altezza dei carciofi.",
            "timerMin": 5
          },
          {
            "title": "Stufatura a Vapore Sigillato a 90°C",
            "desc": "Copri con un foglio di carta forno bagnata a contatto e poi con il coperchio pesante. Cuoci a fuoco dolce per 25-30 minuti finché il gambo si perfora senza resistenza.",
            "timerMin": 30
          }
        ],
        "easyTip": "💡 Easy Mode: Cuoci i carciofi a testa in giù in un pentolino stretto e dai bordi alti, coperti per metà d'acqua e olio con coperchio per cuocere uniformemente col vapore.",
        "proTip": "🏆 Pro Chef: Farcia tradizionale di mentuccia romana (Calamintha nepeta), aglio e poco pangrattato. Stufatura ermetica 'a campana' a 92°C per mantenere le foglie morbide come burro."
      },
      "suppli": {
        "category": "contorni",
        "name": "Supplì al Telefono",
        "shortDesc": "La leggendaria crocchetta romana di riso al ragù ristretto di manzo, panatura asciutta e cuore fondente filante di fior di latte.",
        "origin": "Roma (Trastevere, fine Ottocento)",
        "difficulty": "Media (Formatura e frittura termica)",
        "history": "Chiamato \"al telefono\" perché quando si spezza a caldo in due metà, la mozzarella fusa crea un filo elastico ininterrotto simile al cavo dei telefoni a cornetta del secolo scorso.",
        "scienceTip": "Il riso cotto al dente va raffreddato a <15°C per favorire la retrogradazione dell'amido, che compatta i chicchi permettendo la formatura senza uova nell'impasto. La frittura a 170-175°C crea una barriera di croccantezza istantanea sigillando la mozzarella nel cuore.",
        "ingredients": {
          "rice": {
            "name": "Riso Carnaroli o Arborio",
            "basePerPerson": 80,
            "unit": "g"
          },
          "ragu": {
            "name": "Ragù ristretto di manzo saporito",
            "basePerPerson": 70,
            "unit": "g"
          },
          "mozzarella": {
            "name": "Mozzarella fior di latte ben asciutta a listarelle",
            "basePerPerson": 30,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP e Parmigiano grattugiati",
            "basePerPerson": 15,
            "unit": "g"
          },
          "eggs": {
            "name": "Uova fresche per la panatura",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "breadcrumbs": {
            "name": "Pangrattato fine per panatura croccante",
            "basePerPerson": 35,
            "unit": "g"
          },
          "oil": {
            "name": "Olio per friggere ad immersione (arachide o EVO)",
            "basePerPerson": 200,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Cottura del Risotto al Ragù",
            "desc": "Cuoci il riso direttamente nel ragù allungato con brodo leggero, tenendolo molto al dente. Manteca fuori dal fuoco con pecorino e stendi su un vassoio largo.",
            "timerMin": 15
          },
          {
            "title": "Raffreddamento e Retrogradazione Amido",
            "desc": "Fai raffreddare completamente il riso per almeno 30 minuti a temperatura ambiente o in frigorifero finché è freddo e compatto.",
            "timerMin": 30
          },
          {
            "title": "Formatura Ovale e Cuore di Mozzarella",
            "desc": "Prendi una porzione di riso sul palmo della mano, inserisci al centro un bastoncino di mozzarella e richiudi formando una polpetta allungata a fuso senza fessure.",
            "timerMin": 10
          },
          {
            "title": "Doppia Panatura e Frittura a 175°C",
            "desc": "Passa il supplì nell'uovo sbattuto e poi nel pangrattato fine. Friggi in abbondante olio a 175°C per 3-4 minuti fino a doratura bruna. Servi caldissimo per l'effetto filo!",
            "timerMin": 4
          }
        ],
        "easyTip": "💡 Easy Mode: Prepara il riso al ragù la sera prima o lascialo in frigo per 2 ore: il riso compatto e freddo è facilissimo da appallottolare senza che si sfaldi.",
        "proTip": "🏆 Pro Chef: Doppia panatura fine senza farina. Frying sweet spot rigoroso a 175°C in olio profondo: cuore di fior di latte filante a 60°C e crosta croccante millimetrica."
      },
      "maritozzo": {
        "category": "dolci",
        "name": "Maritozzo con la Panna",
        "shortDesc": "La leggendaria soffice pagnotella romana profumata agli agrumi e vaniglia, tagliata longitudinalmente e ricolma di fresca panna montata.",
        "origin": "Roma (Epoca romana e tradizione rinascimentale)",
        "difficulty": "Media (Lievitazione biologica controllata)",
        "history": "Un tempo l'unico dolce consentito durante il digiuno quaresimale. Nel Rinascimento il futuro sposo (\"maritozzo\") lo donava alla fidanzata con un anello celato nella panna.",
        "scienceTip": "La maglia glutinica sviluppata con farina di forza (W 300-330) trattiene la CO2 prodotta durante la lievitazione a 26-28°C. La cottura a 180°C dora la crosta per effetto Maillard mentre l'interno resta leggero come una nuvola.",
        "ingredients": {
          "flour": {
            "name": "Farina Manitoba di forza per lievitati (W320)",
            "basePerPerson": 75,
            "unit": "g"
          },
          "milk": {
            "name": "Latte intero fresco tiepido",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "sugar": {
            "name": "Zucchero semolato nell'impasto",
            "basePerPerson": 15,
            "unit": "g"
          },
          "yeast": {
            "name": "Lievito di birra fresco",
            "basePerPerson": 3,
            "unit": "g"
          },
          "oil": {
            "name": "Olio extravergine d'oliva leggero o burro fuso",
            "basePerPerson": 12,
            "unit": "ml"
          },
          "cream": {
            "name": "Panna fresca liquida fresca al 35% di grassi da montare",
            "basePerPerson": 80,
            "unit": "ml"
          },
          "zest": {
            "name": "Scorza d'arancia grattugiata fine e vaniglia",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Incordatura della Maglia Glutinica",
            "desc": "Sciogli il lievito nel latte tiepido con un cucchiaino di zucchero. Unisci alla farina e lavora energicamente aggiungendo zucchero, olio e aromi fino a ottenere un impasto liscio ed elastico.",
            "timerMin": 15
          },
          {
            "title": "Prima Lievitazione a Campana a 27°C",
            "desc": "Riponi l'impasto in una ciotola coperta da pellicola in un luogo tiepido (26-28°C) per circa 90 minuti fino al raddoppio del volume.",
            "timerMin": 90
          },
          {
            "title": "Pirlatura dei Panetti Ovali",
            "desc": "Dividi in panetti ovali allungati (a forma di pallone da rugby). Disponi sulla teglia foderata e lascia lievitare coperti per altri 60 minuti.",
            "timerMin": 60
          },
          {
            "title": "Cottura a 180°C e Spennellatura Sciroppo",
            "desc": "Inforna a 180°C per 12-14 minuti fino a doratura lucida. Appena sfornati, spennella con uno sciroppo di acqua e zucchero per dare lucentezza.",
            "timerMin": 14
          },
          {
            "title": "Taglio e Farcitura a Spatola con Panna",
            "desc": "Fai raffreddare completamente. Incidi il maritozzo al centro senza dividerlo in due. Monta la panna ben fredda con poco zucchero a velo e farcisci a colmo lisciando i bordi con una spatola.",
            "timerMin": 5
          }
        ],
        "easyTip": "💡 Easy Mode: Metti ciotola e fruste in freezer per 15 minuti prima di montare la panna: monterà in metà tempo e rimarrà densa e ferma a lungo.",
        "proTip": "🏆 Pro Chef: Brioche romana con lievitazione controllata a 26°C, glassatura a freddo con sciroppo di zucchero e panna fresca montata al 38% di grassi con 10% di zucchero a velo."
      }
    },
    "catAll": "Tutte le Ricette",
    "catPrimi": "🍝 Primi (The Big 4)",
    "catSecondi": "🥩 I Grandi Secondi",
    "catContorni": "🥬 Fritti & Contorni",
    "catDolci": "🥐 Dolci & Lievitati",
    "portionSize": "Dose Pasta:",
    "portionStandard": "Standard (100g)",
    "portionAbbondante": "🍝 Abbondante (130g)",
    "servingsHintAbbondante": "🍝 Porzione Abbondante da Trattoria: {amount} di pasta a persona",
    "troubleGuancialeTitle": "Il guanciale si è bruciato o è rimasto gommoso?",
    "troubleGuancialeSol": "Se gommoso: fiamma troppo alta, il grasso profondo non è fuso (servono 8-10 min a fiamma dolce). Se bruciato: elimina i pezzi anneriti per evitare composti amari, filtra il grasso pulito e aggiungi pepe tostato fresco per riequilibrare l'aroma.",
    "troubleAcidTitle": "Il pomodoro dell'Amatriciana risulta troppo acido o acquoso?",
    "troubleAcidSol": "I pelati commerciali hanno spesso acido citrico aggiunto. Aggiungi una punta microscopica di bicarbonato di sodio (reazione chimica neutralizzante immediata) oppure un cucchiaino di grasso del guanciale, e fai sobbollire 2 minuti a fiamma viva per concentrare gli zuccheri.",
    "troubleCarciofiTitle": "I carciofi alla Giudìa sono duri o non si aprono a fiore?",
    "troubleCarciofiSol": "Prima del secondo tuffo a 180°C, prendi il carciofo per il gambo e batti delicatamente la sommità a testa in giù su un tagliere per divaricare le brattee a corolla. Se il cuore è ancora coriaceo, prolunga di 4 minuti il primo bagno a 140°C.",
    "troubleSuppliTitle": "I supplì si aprono o la mozzarella fuoriesce nell'olio?",
    "troubleSuppliSol": "Non usare riso tiepido: deve riposare in frigo per almeno 2 ore affinché l'amido sia compatto. Taglia la mozzarella e lasciala scolare per 1 ora. Esegui sempre una DOPPIA panatura (pastella o uovo + pangrattato fine) e friggi rigorosamente a 175°C.",
    "troubleCodaTitle": "La coda alla vaccinara è ancora dura dopo due ore?",
    "troubleCodaSol": "Il collagene bovino necessita di idrolisi a 80-85°C per almeno 3 ore e mezza. Non alzare la fiamma. Aggiungi mezzo bicchiere di brodo o acqua calda, sigilla bene col coperchio e prosegui la cottura a fiamma minima finché la carne si stacca da sola con una forchetta.",
    "troubleSaltimboccaTitle": "I saltimbocca sono secchi o il prosciutto è indurito?",
    "troubleSaltimboccaSol": "Il vitello non va mai cotto oltre 60-80 secondi sul lato infarinato. Il lato con salvia e prosciutto va scottato a contatto con la padella per soli 15-20 secondi, per evitare che la disidratazione indurisca il salume.",
    "troubleCreamTitle": "La panna del Maritozzo si smonta o si trasforma in burro?",
    "troubleCreamSol": "Se la panna supera i 10°C, i globuli di grasso si rompono. Usa panna freddissima (3-4°C) e tieni ciotola e fruste in freezer per 15 minuti prima dell'uso. Se inizia a sgranare, unisci 2 cucchiai di panna liquida gelata e mescola delicatamente con una spatola."
  },
  "en": {
    "appName": "RomaLab Scientific",
    "appTagline": "Authentic Roman Cuisine & Culinary Emulsion Thermodynamics",
    "splashVersion": "v1.1.0 Pro • Global Multi-Language Edition",
    "navRecipes": "Recipes",
    "navCalculator": "Portions",
    "navLiveKitchen": "Cooking",
    "navThermal": "Thermodynamics",
    "navScience": "Science",
    "btnLanguage": "Language",
    "btnUnits": "Units",
    "btnTheme": "Theme",
    "btnGuide": "Guide",
    "btnMenu": "Menu",
    "btnShare": "Share",
    "btnTroubleshoot": "Emergency Aid",
    "selectLanguage": "Select Language",
    "close": "Close",
    "servings": "Number of Guests",
    "servingsHint": "Standard portion: {amount} dry pasta per person",
    "ingredientsTitle": "Scientific Gram Dosing",
    "ingredientsSubtitle": "Automatic proportional calculation of eggs, rendered fat, and starch water.",
    "emulsionThermodynamics": "Thermal Mantecatura Window",
    "emulsionSubtitle": "The kitchen physics of amylose starches, pork lipids, and egg yolk proteins.",
    "thermalSafeZone": "Safe Emulsion Zone:",
    "thermalCold": "Too Cold (<50°C / 122°F)",
    "thermalOptimal": "Golden Emulsion Zone (58-65°C / 136-149°F)",
    "thermalDanger": "Frittata Coagulation Danger (>68°C / 154°F)",
    "startCooking": "Step-by-Step Cooking with Timers",
    "cookingSubtitle": "Follow the live phases to guarantee perfect timing and temperature.",
    "step": "Step",
    "timer": "Timer",
    "start": "Start",
    "pause": "Pause",
    "reset": "Reset",
    "done": "Completed",
    "alertTempDanger": "DANGER: Temperature > 68°C (154°F)! Egg proteins coagulating! Kill heat immediately.",
    "alertTempOptimal": "PERFECT EMULSION ZONE (58-65°C / 136-149°F): Whisk vigorously off-heat.",
    "alertTempCold": "Temperature too low (< 50°C / 122°F): Sauce will not bind silky smooth.",
    "modeEasy": "⭐ Easy (Foolproof)",
    "modePro": "🏆 Pro (Master Tradition)",
    "modeEasyLabel": "⭐ Easy (Assisted)",
    "modeEasyDesc": "Techniques with safety buffers, stabilized cream, and forgiving cheese blends.",
    "modeProDesc": "Orthodox Roman code: 100% fresh yolks, pure Pecorino Romano PDO, and starch risottatura.",
    "hintYolks": "💡 Easy: Add 1 whole egg white to maximize smooth emulsion lubrication",
    "hintPecorino": "💡 Easy: Recommended blend 50% Pecorino + 50% Parmigiano Reggiano",
    "hintWater": "💡 Easy: Blend warm starchy water (55°C) and cheese using a handheld whisk or immersion blender",
    "substitutionsTitle": "International Ingredient & Substitution Guide",
    "substitutionsSubtitle": "Traditional rules, chemistry, and culinary compromises abroad.",
    "subGuancialeTitle": "🥓 Guanciale vs Bacon vs Pancetta",
    "guancialeNote": "GUANCIALE (Cured pork jowl): Crucial. Rich in noble fat with a low melting point (32-35°C / 90-95°F) creating silky velvet. Acceptable alternative abroad: Artisanal unsmoked pancetta. AVOID: Smoked American bacon with added brown sugar.",
    "subPecorinoTitle": "🧀 Pecorino Romano PDO & The Blend",
    "pecorinoNote": "PECORINO ROMANO PDO: Aged sheep milk cheese, sharp, savory and salty. If too sharp for foreign palates, Roman chefs endorse the 70% Pecorino Romano / 30% Parmigiano Reggiano 24-month blend.",
    "subPastaTitle": "🌾 Bronze-Drawn Pasta & Amylose Starch",
    "pastaNote": "Rough bronze die extrusion releases abundant amylose starch into boiling water. Starch acts as a natural chemical surfactant, binding hydrophilic water with hydrophobic pork lard.",
    "emergencyTitle": "🚨 Emergency Pantry & Overseas Substitutions",
    "emergencySubtitle": "Abroad without Roman ingredients? Scientific hacks to still enjoy a world-class dish.",
    "emGuancialeTitle": "🥓 If Guanciale is missing:",
    "emGuancialeOpt1": "✅ Option 1 (Great): Artisanal unsmoked flat pancetta. Slightly reduce pasta water salt.",
    "emGuancialeOpt2": "⚠️ Option 2 (Overseas Hack): American bacon. Life-saving trick: blanch slices in boiling water for 2 minutes before frying to extract artificial smoke and nitrates!",
    "emPecorinoTitle": "🧀 If Pecorino Romano is missing:",
    "emPecorinoOpt1": "✅ Option 1 (Recommended Easy): 50% Pecorino (Tuscan/Sardinian) + 50% Parmigiano Reggiano.",
    "emPecorinoOpt2": "⚠️ Option 2: Pure Parmigiano Reggiano or Grana Padano. Add 1g extra salt and a pinch of black pepper to compensate sheep pungency.",
    "emStarchTitle": "🌾 If pasta is smooth (low starch release):",
    "emStarchOpt1": "✅ The Small Pot Trick: Cook pasta in half the usual water (e.g. 1.5L for 300g). Water turns into concentrated milky starch broth!",
    "emStarchOpt2": "🔬 Molecular Kitchen Hack: Dissolve 1/2 tsp cornstarch in cold water and toss into pan fat to create instant emulsifying glue.",
    "troubleshootTitle": "Culinary First Aid & Rescue",
    "troubleshootDesc": "Pan acting up? Here is how kitchen physics rescues your Roman pasta.",
    "troubleClumpTitle": "Pecorino formed rubbery chewing-gum clumps?",
    "troubleClumpSol": "Casein exceeds 65°C (149°F) and expels whey. Move pan off heat, add 2-3 tablespoons of warm starchy cooking water (55°C / 131°F), and rapidly blitz with a mini-whisk or immersion blender in a cup before reuniting with pasta.",
    "troubleCurdleTitle": "Egg starting to curdle into scrambled eggs?",
    "troubleCurdleSol": "Immediately pull the skillet off the heat. Transfer pasta to a cold bowl, add 1 ice cube or 2 tablespoons of cold water, and whisk vigorously. If curds have formed, blend 5 seconds with an immersion blender with a splash of starchy water: lecithin will re-emulsify.",
    "troubleSaltyTitle": "Dish turned out overwhelmingly salty?",
    "troubleSaltySol": "Aged Pecorino Romano PDO naturally packs high sodium. Golden rule: Halve pasta boiling salt to max 5g/L. Quick rescue: Loosen sauce with unsalted warm water and add extra toasted black pepper (piperine naturally tempers sharp salinity).",
    "recipes": {
      "carbonara": {
        "name": "Spaghetti alla Carbonara",
        "shortDesc": "Fresh egg yolks, crispy guanciale, Pecorino Romano PDO, and toasted black pepper.",
        "origin": "Rome (1944)",
        "difficulty": "Medium (Thermal Sensitivity)",
        "history": "Born from Roman culinary creativity and Allied liberation rations, refined across decades into a global masterpiece.",
        "scienceTip": "Egg yolks contain lecithin, an amphiphilic natural emulsifier. At 64-66°C (147-151°F) proteins unfold and trap liquid pork fat into a glossy velouté without scrambling.",
        "ingredients": {
          "pasta": {
            "name": "Bronze-drawn Spaghetti or Rigatoni",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Italian cured pork jowl (Guanciale)",
            "basePerPerson": 60,
            "unit": "g"
          },
          "yolks": {
            "name": "Fresh large egg yolks",
            "basePerPerson": 1,
            "extraPadella": 1,
            "unit": "pz"
          },
          "pecorino": {
            "name": "Finely grated Pecorino Romano PDO",
            "basePerPerson": 35,
            "unit": "g"
          },
          "pepper": {
            "name": "Freshly crushed whole black peppercorns",
            "basePerPerson": 2.5,
            "unit": "g"
          },
          "salt": {
            "name": "Boiling water salt (halved: 5g / quart)",
            "basePerPerson": 5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Slicing & Rendering Guanciale",
            "desc": "Cut guanciale into 6mm thick batons. Place in a cold skillet with no added oil. Turn heat to medium-low and render fat gently for 10-12 minutes until crispy gold on the outside and tender within.",
            "timerMin": 10
          },
          {
            "title": "Cold \"Carbocrema\" Emulsion",
            "desc": "In a ceramic bowl, whisk fresh yolks with finely grated Pecorino Romano and crushed toasted pepper into a thick paste. Whisk in 2 tablespoons of warm rendered pork fat to temper.",
            "timerMin": 3
          },
          {
            "title": "Boiling & Starch Extraction",
            "desc": "Boil pasta in water with only 5g salt per liter (half normal salt). Drain pasta 2 minutes before packaging al dente time, reserving 1 cup of cloudy starchy water.",
            "timerMin": 8
          },
          {
            "title": "Pan Risottatura",
            "desc": "Transfer pasta directly into the pan with the hot rendered fat over high heat for 60 seconds with a ladle of pasta water, tossing to create a base emulsion.",
            "timerMin": 1
          },
          {
            "title": "Off-Heat Scientific Mantecatura",
            "desc": "KILL THE FLAME AND REMOVE PAN FROM BURNER. Wait 45 seconds for pan temperature to drop to 60-65°C (140-150°F). Pour pasta into yolk bowl, toss rapidly with splashes of pasta water. Serve immediately crowned with crispy guanciale.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Reserve 2 tablespoons of starchy pasta water and let it cool to 50°C (122°F) to temper the yolks and pecorino into a smooth paste before adding to the pasta. ALWAYS emulsify completely off the heat.",
        "proTip": "🏆 Pro Chef: Use only fresh pasture-raised egg yolks, render guanciale fat gently below 80°C (176°F) without scorching, and execute an energetic wave toss (mantecatura ad onda) between 62°C and 65°C to maximize lecithin viscosity without scrambling."
      },
      "cacioepepe": {
        "name": "Tonnarelli Cacio e Pepe",
        "shortDesc": "Only three components: high-starch extruded pasta, aged Pecorino Romano PDO, and cracked black pepper.",
        "origin": "Roman Countryside",
        "difficulty": "Hard (Thermal Precision)",
        "history": "The timeless shepherd staple during seasonal livestock migrations through Apennine hills.",
        "scienceTip": "Pecorino starts melting at 55°C, but above 65°C casein proteins coagulate into rubber. Extracted pasta amylose forms a protective protective colloidal shield.",
        "ingredients": {
          "pasta": {
            "name": "Fresh egg Tonnarelli or bronze Spaghetti",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pecorino": {
            "name": "Powder-fine grated Pecorino Romano PDO",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pepper": {
            "name": "Whole black peppercorns for toasting",
            "basePerPerson": 3.5,
            "unit": "g"
          },
          "water": {
            "name": "Concentrated starchy cooking water",
            "basePerPerson": 40,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Toasting Peppercorns",
            "desc": "Crush peppercorns coarsely in a mortar. Toast dry in a large skillet over medium heat for 2 minutes until fragrant with piperine oils, then deglaze with a ladle of boiling pasta water.",
            "timerMin": 2
          },
          {
            "title": "Cold Cheese Paste Formulation",
            "desc": "In a bowl, mix Pecorino with warm pasta water (approx 55-60°C). Whisk vigorously until a dense, lump-free paste forms. Never place cheese paste directly over a flame!",
            "timerMin": 3
          },
          {
            "title": "Final Risottatura",
            "desc": "Transfer al dente pasta into pepper broth skillet, finishing cooking over high flame for 2 minutes to concentrate starches into a glossy sheen.",
            "timerMin": 2
          },
          {
            "title": "Off-Heat Mantecatura",
            "desc": "Remove skillet completely off heat. Allow pan to drop under 60°C (30 seconds). Fold in pecorino paste and toss vigorously into a silky cream wave.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Whisk the grated Pecorino with lukewarm water at 50°C (122°F) in a separate bowl into a smooth paste. Fold it into the pasta only after the pan has been completely removed from the heat.",
        "proTip": "🏆 Pro Chef: Aggressive starch extraction by vigorously risotto-cooking the tonnarelli in the skillet during the final 3 minutes. Dynamic mantecatura at 58°C (136°F): amylose starch concentration must form hydrogen bonds with milk casein."
      },
      "amatriciana": {
        "name": "Bucatini all'Amatriciana",
        "shortDesc": "Crisp guanciale, sweet San Marzano plum tomatoes, Pecorino Romano PDO, and dry white wine.",
        "origin": "Amatrice / Rome",
        "difficulty": "Medium",
        "history": "The historic tomato evolution of white Gricia dating to the late 18th century.",
        "scienceTip": "The bright acidity of San Marzano tomatoes (pH ~4.3) harmonizes with rendered pork lard, creating unmatched depth and umami.",
        "ingredients": {
          "pasta": {
            "name": "Bronze-drawn Bucatini or Mezzi Rigatoni",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Amatrice cured pork jowl in strips",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Hand-crushed San Marzano PDO tomatoes",
            "basePerPerson": 120,
            "unit": "g"
          },
          "pecorino": {
            "name": "Finely grated Pecorino Romano PDO",
            "basePerPerson": 30,
            "unit": "g"
          },
          "vino": {
            "name": "Crisp dry white wine for deglazing",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "chili": {
            "name": "Fresh or dried red chili (optional)",
            "basePerPerson": 0.5,
            "unit": "pz"
          }
        },
        "steps": [
          {
            "title": "Crisping Guanciale",
            "desc": "Slowly render guanciale strips until golden and crackling. Remove crispy pork bits and set aside in a warm bowl to maintain crunch.",
            "timerMin": 8
          },
          {
            "title": "Deglazing & Tomato Simmer",
            "desc": "Deglaze hot pan lard with dry white wine, letting alcohol boil off completely. Add chili and hand-crushed tomatoes. Simmer gently for 12-15 minutes until rich and shiny.",
            "timerMin": 12
          },
          {
            "title": "Tossing & Cheese Shower",
            "desc": "Toss al dente bucatini in bubbling tomato sauce for 60 seconds. Remove from heat, fold in a snow of Pecorino Romano, and crown with crispy guanciale.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Remove the guanciale from the pan as soon as it turns golden and set it aside. Simmer the tomatoes directly in the rendered pork fat, then crown the pasta with the crispy guanciale right before serving.",
        "proTip": "🏆 Pro Chef: Deglaze the hot pan walls with dry white wine to release caramelized sugars. Cook hand-crushed San Marzano tomatoes over lively flame for under 10 minutes to retain bright, vibrant fruit acidity."
      },
      "gricia": {
        "name": "Mezze Maniche alla Gricia",
        "shortDesc": "The legendary \"White Amatriciana\": pasta, rendered pork jowl, aged pecorino, and toasted black pepper.",
        "origin": "Grisciano / Ancient Rome",
        "difficulty": "Medium",
        "history": "The undisputed mother of Roman pastas: Carbonara and Amatriciana originated as modern descendants.",
        "scienceTip": "With neither egg nor tomato, velvet creaminess relies 100% on mechanical emulsion between extracted amylose and rendered pork lipids.",
        "ingredients": {
          "pasta": {
            "name": "Rigid bronze Mezze Maniche or Rigatoni",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Cured pork jowl sliced in strips",
            "basePerPerson": 55,
            "unit": "g"
          },
          "pecorino": {
            "name": "Medium-aged Pecorino Romano PDO",
            "basePerPerson": 40,
            "unit": "g"
          },
          "pepper": {
            "name": "Freshly cracked black pepper",
            "basePerPerson": 2.5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Rendering Guanciale",
            "desc": "Sizzle guanciale gently until crisp outside and tender inside. Reserve 2/3 of crispy bits for garnish.",
            "timerMin": 8
          },
          {
            "title": "Creating Liquid Starch Base",
            "desc": "Ladle boiling starchy pasta water into the rendered fat with pepper to build a rich opalescent emulsion.",
            "timerMin": 2
          },
          {
            "title": "Off-Heat Mantecatura",
            "desc": "Toss al dente pasta in pan for 60s. Pull off the flame, wait 30 seconds, shower with pecorino, and toss into a velvet sauce. Crown with reserved crispy guanciale.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Add small splashes of starchy cooking water to the rendered guanciale fat. Never let Pecorino touch the hot metal base of the pan: emulsify by vigorously tossing in mid-air.",
        "proTip": "🏆 Pro Chef: Achieve a flawless two-phase lipid/starch emulsion. Dry-toast coarsely crushed black peppercorns at 150°C (300°F) before risotto-glazing to unlock aromatic piperine terpenes."
      },
      "saltimbocca": {
        "category": "secondi",
        "name": "Saltimbocca alla Romana",
        "shortDesc": "Thin milk-fed veal cutlets topped with sweet prosciutto crudo and fresh sage, flashed in butter and deglazed with dry white wine.",
        "origin": "Rome (Regola District, late 19th century)",
        "difficulty": "Easy (Flash pan cooking in 90 seconds)",
        "history": "Documented by culinary master Pellegrino Artusi in 1891 after savoring them at Rome's historic \"Le Venete\" inn: so flavorful they literally \"jump in the mouth\".",
        "scienceTip": "Rapid Maillard sear at 160°C (320°F) on the floured meat side only. Off the flame, the pan juices are mounted with cold butter and wine (beurre monté) into a velvety glaze.",
        "ingredients": {
          "veal": {
            "name": "Thin milk-fed veal top round slices (3mm thick)",
            "basePerPerson": 160,
            "unit": "g"
          },
          "prosciutto": {
            "name": "High quality sweet prosciutto crudo",
            "basePerPerson": 50,
            "unit": "g"
          },
          "sage": {
            "name": "Fresh whole sage leaves",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "butter": {
            "name": "European butter for searing and pan sauce emulsion",
            "basePerPerson": 25,
            "unit": "g"
          },
          "wine": {
            "name": "Dry Italian white wine (Frascati Superiore DOC)",
            "basePerPerson": 30,
            "unit": "ml"
          },
          "flour": {
            "name": "All-purpose wheat flour (for meat base only)",
            "basePerPerson": 10,
            "unit": "g"
          },
          "pepper": {
            "name": "Fresh cracked black pepper (do not salt prosciutto)",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Pounding and Pinning",
            "desc": "Pound veal cutlets between parchment paper until 3mm thin. Place a slice of sweet prosciutto crudo and a sage leaf on each cutlet. Secure through the center with a wooden toothpick like a pin.",
            "timerMin": 5
          },
          {
            "title": "Flouring Meat Side Only",
            "desc": "Lightly dust ONLY the bottom meat surface with flour, tapping off any excess. Never flour the prosciutto or sage, preserving clean aroma contact.",
            "timerMin": 2
          },
          {
            "title": "High Heat Flash Sear",
            "desc": "Melt two-thirds of the butter in a wide skillet over high heat. Lay the saltimbocca floured meat-side down. Sear undisturbed for 60-80 seconds to build a golden Maillard crust.",
            "timerMin": 2
          },
          {
            "title": "Deglazing and Pan Sauce Emulsion",
            "desc": "Flip cutlets onto the prosciutto side for just 15 seconds. Deglaze with dry white wine, letting alcohol vaporize instantly. Transfer cutlets to a warm plate. Kill heat, whisk in remaining cold butter to emulsify into a glossy velvet glaze, and spoon over meat.",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Easy Mode: Flour only the bottom meat side (never the prosciutto). Cook covered over medium heat for 60 seconds: the veal will remain exceptionally tender and succulent.",
        "proTip": "🏆 Pro Chef: Deglaze with dry white wine over blazing heat (160°C / 320°F pan deglaze) to build a glossy, velvety emulsion by mounting with ice-cold butter right off the heat."
      },
      "coda": {
        "category": "secondi",
        "name": "Coda alla Vaccinara",
        "shortDesc": "Roman braised oxtail slow-cooked for 4 hours with crisp celery, San Marzano tomatoes, pine nuts, raisins, and bitter cocoa.",
        "origin": "Rome (Testaccio Quarter / Fifth Quarter)",
        "difficulty": "Medium (Long low-temperature braise)",
        "history": "The crown jewel of Roman offal cuisine, born in Testaccio slaughterhouse taverns where butchers turned humble cuts into culinary poetry.",
        "scienceTip": "Oxtail collagen hydrolyzes into succulent rich gelatin between 80-85°C (176-185°F) with a barely bubbling simmer (\"pipare\"). Bitter cocoa powder and raisins create a Renaissance sweet-and-sour balance that cuts the richness.",
        "ingredients": {
          "tail": {
            "name": "Oxtail cut into thick discs across the joints",
            "basePerPerson": 350,
            "unit": "g"
          },
          "celery": {
            "name": "Tender crisp white celery ribs",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pomodoro": {
            "name": "San Marzano PDO whole peeled tomatoes hand-crushed",
            "basePerPerson": 200,
            "unit": "g"
          },
          "wine": {
            "name": "Full-bodied dry red wine (Cesanese del Piglio)",
            "basePerPerson": 60,
            "unit": "ml"
          },
          "lard": {
            "name": "Minced guanciale with onion and carrot battuto",
            "basePerPerson": 25,
            "unit": "g"
          },
          "cocoa": {
            "name": "Pure unsweetened dark cocoa powder",
            "basePerPerson": 2,
            "unit": "g"
          },
          "pinenuts": {
            "name": "Toasted pine nuts and plump soaked raisins",
            "basePerPerson": 10,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Browning the Oxtail Segments",
            "desc": "In a heavy Dutch oven, render the minced guanciale battuto. Add the oxtail pieces and sear over lively heat for 10 minutes until richly browned on all sides to seal in juices.",
            "timerMin": 10
          },
          {
            "title": "Red Wine Deglaze & Tomato Addition",
            "desc": "Deglaze with full-bodied red wine and let the harsh alcohol steam away. Stir in hand-crushed San Marzano tomatoes, sea salt, and a generous grind of black pepper. Bring to a gentle boil.",
            "timerMin": 10
          },
          {
            "title": "Slow Low-Temperature Collagen Hydrolysis",
            "desc": "Cover with a heavy lid and drop the flame to the bare minimum (80-85°C / 176-185°F). Allow the stew to barely bubble (\"pipare\") undisturbed for 3.5 hours until the meat is fork-tender and pulls away from the bone.",
            "timerMin": 180
          },
          {
            "title": "The Master Touch: Celery, Pine Nuts & Cocoa",
            "desc": "Blanch celery chunks for 3 minutes in salted water. Add them to the pot along with toasted pine nuts, soaked raisins, and pure cocoa powder dissolved in a ladle of hot braising jus. Simmer gently for 20 minutes before serving.",
            "timerMin": 20
          }
        ],
        "easyTip": "💡 Easy Mode: If short on time, use a pressure cooker for the first 45 minutes, then finish simmering uncovered over low heat to reduce and thicken the rich sauce.",
        "proTip": "🏆 Pro Chef: Gentle 85°C (185°F) low-heat braise for 4 hours to fully hydrolyze connective collagen into rich melting gelatin. Incorporate pure unsweetened cocoa and toasted pine nuts in the final 15 minutes."
      },
      "abbacchio": {
        "category": "secondi",
        "name": "Abbacchio alla Scottadito",
        "shortDesc": "Milk-fed lamb chops marinated with wild rosemary, garlic, and lard, charred over intense flame and eaten finger-burning hot.",
        "origin": "Rome & Roman Countryside",
        "difficulty": "Easy (High-heat contact grill)",
        "history": "Named \"scottadito\" (finger-scorcher) because Roman tradition dictates eating the chops immediately off the burning grill with your bare hands.",
        "scienceTip": "Tender milk-fed lamb requires intense direct contact heat (220-250°C / 430-480°F) to sear in 2 minutes per side while keeping internal core juicy and pink at 56-58°C.",
        "ingredients": {
          "chops": {
            "name": "Fresh milk-fed lamb rib chops (abbacchio)",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "rosemary": {
            "name": "Fresh rosemary needles and wild thyme finely chopped",
            "basePerPerson": 3,
            "unit": "g"
          },
          "garlic": {
            "name": "Young garlic cloves lightly crushed in their skin",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Extra virgin olive oil or traditional rendered lard",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "lemon": {
            "name": "Fresh untreated lemon wedges for serving",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "salt": {
            "name": "Coarse sea salt and cracked black peppercorns",
            "basePerPerson": 3,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Aromatic Herb Marinade",
            "desc": "Massage the lamb chops with olive oil or melted lard, chopped rosemary, crushed garlic cloves, and freshly cracked black pepper. Rest at room temperature for 15-20 minutes.",
            "timerMin": 15
          },
          {
            "title": "High-Temperature Grill Preheating",
            "desc": "Heat a heavy cast-iron grill pan or charcoal grates until smoking hot (230-250°C / 450-480°F). The contact surface must be blazing to caramelize on contact.",
            "timerMin": 5
          },
          {
            "title": "Flash Grilling (2 Minutes per Side)",
            "desc": "Lay chops on the grill well spaced. Sear undisturbed for 2 minutes to produce deep grill marks. Flip and sear the other side for 2 minutes. Season with coarse salt only after flipping.",
            "timerMin": 4
          },
          {
            "title": "Piping-Hot Finger Service (\"Scottadito\")",
            "desc": "Transfer immediately to a warm serving platter alongside lemon wedges. Tradition strictly requires eating them with your bare hands, grabbing the sizzling bone while scorching hot!",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Easy Mode: Marinate the chops for 15 minutes in a drizzle of olive oil, rosemary, and crushed garlic. Ensure your grill pan is thoroughly preheated so the meat does not stick.",
        "proTip": "🏆 Pro Chef: Blazing contact sear at 230°C (446°F) for exactly 90 seconds per side. Season strictly at the end with flaky sea salt to prevent premature osmotic moisture loss."
      },
      "carciofigiudia": {
        "category": "contorni",
        "name": "Carciofi alla Giudia",
        "shortDesc": "The ancient Roman-Jewish masterpiece: globe artichokes double-fried into crisp golden blooming roses.",
        "origin": "Rome (Jewish Ghetto, 16th century)",
        "difficulty": "Hard (Spiral trimming and dual-temp oil control)",
        "history": "Created in Roman-Jewish kitchens to celebrate breaking the fast after Yom Kippur: whole artichokes blossom into spectacular crisp golden roses.",
        "scienceTip": "THE SCIENTIFIC DUAL-FRY: First fry at 140°C (285°F) cooks heart and stem until tender as butter. Second flash fry at 175-180°C (350-356°F) with a drop of cold water flash-evaporates petal moisture into wafer-thin chips.",
        "ingredients": {
          "artichoke": {
            "name": "Roman globe artichokes (Mammole Romanesche PGI or Cimaroli)",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Extra virgin olive oil for deep pan immersion frying",
            "basePerPerson": 250,
            "unit": "ml"
          },
          "lemon": {
            "name": "Fresh lemon juice for acidulating trimming water",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "salt": {
            "name": "Fine sea salt and ground black pepper to season core",
            "basePerPerson": 2,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Spiral Rose Trimming",
            "desc": "Snap off tough outer dark leaves with a paring knife turning the artichoke like peeling an orange. Shave the stem smooth and slice off thorny tips into a round dome.",
            "timerMin": 10
          },
          {
            "title": "First Fry at 140°C (Core Tenderizing)",
            "desc": "Heat olive oil to 140°C (285°F). Submerge artichokes upside-down for 10-12 minutes until a fork slides effortlessly into the base of the stem. Drain and rest for 5 minutes.",
            "timerMin": 12
          },
          {
            "title": "Blooming Rose Opening & Seasoning",
            "desc": "Gently tap the artichoke head down on a cutting board to fan outer petals outwards like a blooming rose. Season the heart inside with fine salt and black pepper.",
            "timerMin": 3
          },
          {
            "title": "Second Flash Fry at 180°C (Crispy Petals)",
            "desc": "Raise oil to 175-180°C (350-356°F). Flick a few drops of cold water on petals and submerge head-down, pressing lightly with tongs for 2 minutes until petals turn into paper-crisp chips.",
            "timerMin": 2
          }
        ],
        "easyTip": "💡 Easy Mode: Trim generously, removing the outer 4-5 layers of tough fibrous leaves. Submerge in lemon-acidulated cold water to prevent enzymatic browning before frying.",
        "proTip": "🏆 Pro Chef: Double immersion oil bath: first at 140°C (284°F) to tenderize the heart, then gently tap upside-down to fan petals into a blooming rose, followed by a 90-second flash fry at 180°C (356°F) to turn petals into paper-crisp chips."
      },
      "carciofiromana": {
        "category": "contorni",
        "name": "Carciofi alla Romana",
        "shortDesc": "Roman artichokes stuffed with wild Roman mint, garlic, and parsley, braised upside-down in sealed oil and white wine.",
        "origin": "Rome & Roman Countryside",
        "difficulty": "Medium (Meticulous cleaning and steam braise)",
        "history": "The quintessential Sunday side dish of Roman trattorias. Wild nepetella mint, native to Roman ruins, imparts an unforgettable herbal fragrance.",
        "scienceTip": "Braised upside-down at 90-95°C (195-205°F) under sealed parchment, the artichokes cook in the aromatic vapor of their own wine-oil emulsion, preserving polyphenols without darkening.",
        "ingredients": {
          "artichoke": {
            "name": "Roman globe artichokes with long tender stems",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "mint": {
            "name": "Fresh wild Roman mint (mentuccia / nepetella)",
            "basePerPerson": 3,
            "unit": "g"
          },
          "parsley": {
            "name": "Fresh flat-leaf Italian parsley finely chopped",
            "basePerPerson": 4,
            "unit": "g"
          },
          "garlic": {
            "name": "Young fresh garlic cloves finely minced",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "oil": {
            "name": "Generous high-quality extra virgin olive oil",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "wine": {
            "name": "Dry white wine or water for braising base",
            "basePerPerson": 25,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Trimming and Opening Core Cavity",
            "desc": "Strip tough outer leaves, peel fibrous exterior of stem, and slice off tips. Gently spread open the center petals with fingers to create space for the herb stuffing.",
            "timerMin": 10
          },
          {
            "title": "Stuffing with Minced Roman Herbs",
            "desc": "Finely mince Roman mint, parsley, garlic, sea salt, and black pepper. Generously stuff the mixture deep into the center cavity of each artichoke.",
            "timerMin": 5
          },
          {
            "title": "Inverted Packing in High-Sided Pan",
            "desc": "Stand the artichokes upside-down tightly against one another in a heavy saucepan. Drizzle with generous olive oil, dry white wine, and water halfway up the artichoke heads.",
            "timerMin": 5
          },
          {
            "title": "Sealed Steam Braise at 90°C",
            "desc": "Cover directly with a sheet of damp parchment paper and a tight lid. Simmer gently over low heat for 25-30 minutes until stems are buttery tender when pierced with a knife.",
            "timerMin": 30
          }
        ],
        "easyTip": "💡 Easy Mode: Stand artichokes upside-down snugly in a narrow, high-sided pot, submerged halfway in water and olive oil, tightly covered so steam cooks them evenly throughout.",
        "proTip": "🏆 Pro Chef: Traditional stuffing of wild Roman nepetella (Calamintha nepeta), garlic, and a whisper of breadcrumbs. Hermetic steam braise under parchment cartouche at 92°C (198°F) for melt-in-the-mouth buttery leaves."
      },
      "suppli": {
        "category": "contorni",
        "name": "Supplì al Telefono",
        "shortDesc": "Crispy Roman rice croquettes simmered in beef ragù, encased in golden crust with a molten stretchy mozzarella core.",
        "origin": "Rome (Trastevere, late 19th century)",
        "difficulty": "Medium (Shaping and immersion frying)",
        "history": "Named \"al telefono\" because breaking one in half reveals a continuous stretch of melted mozzarella resembling vintage telephone cords.",
        "scienceTip": "Cooked rice must be cooled to <15°C (59°F) to retrogradate amylose starch, bonding the grains without requiring egg binders in the rice. Deep frying at 175°C (350°F) instantly hardens the breadcrumb shell, sealing the melting cheese inside.",
        "ingredients": {
          "rice": {
            "name": "Carnaroli or Arborio risotto rice",
            "basePerPerson": 80,
            "unit": "g"
          },
          "ragu": {
            "name": "Savory reduced beef and tomato ragù",
            "basePerPerson": 70,
            "unit": "g"
          },
          "mozzarella": {
            "name": "Dry fior di latte mozzarella cut into thick batons",
            "basePerPerson": 30,
            "unit": "g"
          },
          "pecorino": {
            "name": "Finely grated Pecorino Romano and Parmigiano",
            "basePerPerson": 15,
            "unit": "g"
          },
          "eggs": {
            "name": "Fresh eggs for breading wash",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "breadcrumbs": {
            "name": "Fine dry breadcrumbs for extra-crisp shell",
            "basePerPerson": 35,
            "unit": "g"
          },
          "oil": {
            "name": "Deep frying oil with high smoke point (peanut or olive oil)",
            "basePerPerson": 200,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Simmering Risotto in Rich Ragù",
            "desc": "Cook the rice directly in the beef ragù loosened with light broth, keeping it very al dente. Off the heat, fold in grated Pecorino and spread flat over a wide baking sheet.",
            "timerMin": 15
          },
          {
            "title": "Chilling and Starch Retrogradation",
            "desc": "Allow the rice to cool completely for at least 30 minutes at room temperature, then chill in the fridge until cold and compact so amylose starches solidify.",
            "timerMin": 30
          },
          {
            "title": "Shaping Oval Croquette & Mozzarella Core",
            "desc": "Take a handful of cold rice in your palm, insert a stick of mozzarella in the center, and mold the rice firmly around it into an airtight torpedo shape without cracks.",
            "timerMin": 10
          },
          {
            "title": "Crisp Breading and Frying at 175°C",
            "desc": "Roll the supplì thoroughly in beaten egg and fine breadcrumbs. Deep fry in 175°C (350°F) oil for 3-4 minutes until deeply golden brown. Serve burning hot for the signature stretchy telephone wire mozzarella pull!",
            "timerMin": 4
          }
        ],
        "easyTip": "💡 Easy Mode: Cook the ragù risotto the night before or chill in the fridge for at least 2 hours: firm, chilled rice shapes easily into tight croquettes without crumbling.",
        "proTip": "🏆 Pro Chef: Flourless double breading with beaten egg and fine breadcrumbs. Deep-fry at an exact sweet spot of 175°C (347°F): delivers an internal molten fior di latte core at 60°C and a razor-thin, glass-crisp outer shell."
      },
      "maritozzo": {
        "category": "dolci",
        "name": "Maritozzo con la Panna",
        "shortDesc": "The iconic Roman sweet brioche infused with orange zest and vanilla, sliced open and mounded with fresh whipped cream.",
        "origin": "Rome (Ancient Roman and Renaissance heritage)",
        "difficulty": "Medium (Controlled biological proofing)",
        "history": "Historically the only treat permitted during Lenten fasting. In Renaissance times, prospective grooms (\"maritozzi\") gifted them with an engagement ring hidden in the cream.",
        "scienceTip": "Strong flour (W 300-330) gluten network traps CO2 bubbles during proofing at 26-28°C (79-82°F). Baking at 180°C sets an ethereal pillowy crumb while Maillard browning colors the crust.",
        "ingredients": {
          "flour": {
            "name": "High-protein Manitoba or strong bread flour (W320)",
            "basePerPerson": 75,
            "unit": "g"
          },
          "milk": {
            "name": "Fresh whole milk lukewarm",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "sugar": {
            "name": "Granulated white sugar for dough",
            "basePerPerson": 15,
            "unit": "g"
          },
          "yeast": {
            "name": "Fresh active baker's yeast",
            "basePerPerson": 3,
            "unit": "g"
          },
          "oil": {
            "name": "Light extra virgin olive oil or melted butter",
            "basePerPerson": 12,
            "unit": "ml"
          },
          "cream": {
            "name": "Fresh heavy whipping cream (minimum 35% fat) chilled",
            "basePerPerson": 80,
            "unit": "ml"
          },
          "zest": {
            "name": "Finely grated fresh orange zest and bourbon vanilla",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Gluten Network Development & Kneading",
            "desc": "Dissolve yeast in lukewarm milk with a teaspoon of sugar. Combine with flour, knead vigorously while adding sugar, oil, citrus zests, and vanilla until dough is smooth, supple, and elastic.",
            "timerMin": 15
          },
          {
            "title": "First Bulk Proofing at 27°C",
            "desc": "Place dough in a covered bowl in a warm draft-free spot (26-28°C / 79-82°F) for about 90 minutes until doubled in bulk.",
            "timerMin": 90
          },
          {
            "title": "Shaping Oval Buns & Second Proof",
            "desc": "Divide dough into equal oval football-shaped buns. Arrange on a parchment-lined baking sheet, cover loosely, and let rise for 60 minutes until light and puffy.",
            "timerMin": 60
          },
          {
            "title": "Baking at 180°C and Sugar Syrup Glaze",
            "desc": "Bake at 180°C (350°F) for 12-14 minutes until glossy golden brown. Brush immediately upon removal from oven with warm simple sugar syrup for an authentic Roman bakery shine.",
            "timerMin": 14
          },
          {
            "title": "Split Cut & Smooth Spatula Cream Filling",
            "desc": "Cool completely to room temperature. Slice each bun lengthwise down the top center without cutting all the way through. Whip chilled cream with powdered sugar to firm peaks and fill generously, smoothing flush with a flat pastry spatula.",
            "timerMin": 5
          }
        ],
        "easyTip": "💡 Easy Mode: Place your mixing bowl and whisk beaters in the freezer for 15 minutes before whipping cream: it will whip twice as fast and hold its shape firmly without weeping.",
        "proTip": "🏆 Pro Chef: Authentic Roman brioche with controlled biological proofing at 26°C (79°F), finished with warm simple sugar syrup glaze, and filled with chilled 38% fat heavy cream sweetened with 10% powdered sugar."
      }
    },
    "catAll": "All Recipes",
    "catPrimi": "🍝 Pastas (The Big 4)",
    "catSecondi": "🥩 Iconic Mains",
    "catContorni": "🥬 Fried Bites & Sides",
    "catDolci": "🥐 Sweets & Bakery",
    "portionSize": "Pasta Portion:",
    "portionStandard": "Standard (100g)",
    "portionAbbondante": "🍝 Hearty Roman (130g)",
    "servingsHintAbbondante": "🍝 Hearty Roman Trattoria portion: {amount} dry pasta per person",
    "troubleGuancialeTitle": "Guanciale got scorched or stayed rubbery?",
    "troubleGuancialeSol": "If rubbery: heat was too high, preventing deep fat from rendering (requires 8-10 min over gentle heat). If burnt: discard charred bits to avoid bitter notes, strain the clear fat, and add fresh toasted black pepper to balance the aroma.",
    "troubleAcidTitle": "Tomato sauce in Amatriciana too acidic or watery?",
    "troubleAcidSol": "Commercial canned tomatoes often have added citric acid. Stir in a microscopic pinch of baking soda (immediate neutralizing chemical reaction) or a teaspoon of warm guanciale fat, and simmer 2 minutes on high heat to concentrate natural sugars.",
    "troubleCarciofiTitle": "Carciofi alla Giudìa tough or refusing to bloom into a flower?",
    "troubleCarciofiSol": "Before the second fry at 180°C (356°F), hold the artichoke by the stem and gently tap the top upside-down on a cutting board to fan out petals like a blooming flower. If the heart is still firm, extend the first 140°C (284°F) fry by 4 minutes.",
    "troubleSuppliTitle": "Supplì bursting open or mozzarella leaking into the oil?",
    "troubleSuppliSol": "Never use warm rice: chill in fridge for at least 2 hours so starches set firmly. Slice mozzarella and drain for 1 hour. Always apply a DOUBLE breading (beaten egg + fine breadcrumbs) and deep-fry strictly at 175°C (347°F).",
    "troubleCodaTitle": "Coda alla Vaccinara still tough after two hours?",
    "troubleCodaSol": "Bovine collagen requires hydrolysis at 80-85°C (176-185°F) for at least 3.5 hours. Do not raise the flame. Add half a cup of warm broth or water, seal tightly with the lid, and continue simmering on the lowest flame until meat falls apart with a fork.",
    "troubleSaltimboccaTitle": "Saltimbocca dry or prosciutto turned leathery and hard?",
    "troubleSaltimboccaSol": "Veal should never cook beyond 60-80 seconds on the floured meat side. The prosciutto and sage side should only touch the hot pan for 15-20 seconds max to prevent dehydration from hardening the cured ham.",
    "troubleCreamTitle": "Maritozzo whipped cream collapsing or turning into butter?",
    "troubleCreamSol": "If cream exceeds 10°C (50°F), fat globules rupture and separate. Use fridge-cold cream (3-4°C / 37-39°F) and freeze bowl and beaters for 15 minutes before whipping. If it starts to curdle, fold in 2 tablespoons of unwhipped ice-cold liquid cream with a spatula."
  },
  "es": {
    "appName": "RomaLab Científico",
    "appTagline": "Auténtica Cocina Romana y Cinética de la Emulsión Gastronómica",
    "splashVersion": "v1.1.0 Pro • Edición Global Multilingüe",
    "navRecipes": "Recetas",
    "navCalculator": "Dosis",
    "navLiveKitchen": "Cocina",
    "navThermal": "Térmica",
    "navScience": "Ciencia",
    "btnLanguage": "Idioma",
    "btnUnits": "Unidades",
    "btnTheme": "Tema",
    "btnGuide": "Guía",
    "btnMenu": "Menú",
    "btnShare": "Compartir",
    "btnTroubleshoot": "Guía SOS",
    "selectLanguage": "Seleccionar Idioma",
    "close": "Cerrar",
    "servings": "Número de Personas",
    "servingsHint": "Porción estándar: {amount} de pasta por persona",
    "ingredientsTitle": "Dosificación Científica al Gramo",
    "ingredientsSubtitle": "Cálculo proporcional automático de huevos, grasa noble y almidón de cocción.",
    "emulsionThermodynamics": "Ventana Térmica de Emulsión",
    "emulsionSubtitle": "La física de la emulsión entre almidones, lípidos del guanciale y proteínas.",
    "thermalSafeZone": "Zona Segura de Emulsión:",
    "thermalCold": "Demasiado Frío (<50°C)",
    "thermalOptimal": "Zona Dorada de Emulsión (58-65°C)",
    "thermalDanger": "Peligro Tortilla Cuajada (>68°C)",
    "startCooking": "Preparación Paso a Paso con Temporizador",
    "cookingSubtitle": "Sigue las fases en vivo para no fallar en tiempos ni temperaturas.",
    "step": "Fase",
    "timer": "Temporizador",
    "start": "Iniciar",
    "pause": "Pausa",
    "reset": "Reiniciar",
    "done": "¡Completado!",
    "alertTempDanger": "¡ATENCIÓN: Temperatura > 68°C! ¡Riesgo de tortilla! Apaga el fuego y retira la sartén.",
    "alertTempOptimal": "TEMPERATURA PERFECTA (58-65°C): Procede a emulsionar batiendo enérgicamente.",
    "alertTempCold": "Temperatura muy baja (< 50°C): La salsa puede quedar desligada o fría.",
    "modeEasy": "⭐ Fácil (Cero Riesgos)",
    "modePro": "🏆 Pro (Maestro Tradición)",
    "modeEasyLabel": "⭐ Fácil (Asistida)",
    "modeEasyDesc": "Técnicas con margen de seguridad, crema estabilizada y mezclas de queso más dóciles.",
    "modeProDesc": "Código ortodoxo: 100% yemas frescas, Pecorino Romano DOP puro y risottatura con almidón.",
    "hintYolks": "💡 Easy: Puedes añadir 1 clara para dar máxima fluidez a la crema",
    "hintPecorino": "💡 Easy: Mezcla recomendada 50% Pecorino + 50% Parmigiano Reggiano",
    "hintWater": "💡 Easy: Bate agua tibia (55°C) y queso con un batidor pequeño o minipimer",
    "substitutionsTitle": "Guía Internacional de Ingredientes",
    "substitutionsSubtitle": "Tradición, química y sustitutos aceptables en el extranjero.",
    "subGuancialeTitle": "🥓 Guanciale vs Bacon vs Panceta",
    "guancialeNote": "El guanciale posee una grasa noble con bajo punto de fusión (32-35°C) que crea una crema aterciopelada. Alternativa en el extranjero: Panceta curada sin ahumar. Evitar el bacon ahumado con azúcar.",
    "subPecorinoTitle": "🧀 Pecorino Romano DOP y Mezcla",
    "pecorinoNote": "Queso de oveja curado, potente y salado. Si resulta demasiado fuerte, la solución gourmet aceptada es mezclar 70% Pecorino Romano DOP y 30% Parmigiano Reggiano 24 meses.",
    "subPastaTitle": "🌾 Almidón de la Pasta Trefilada al Bronce",
    "pastaNote": "La trefilatura al bronce libera abundante amilosa en el agua de cocción. El almidón actúa como tensioactivo natural que emulsiona el agua y la grasa fluida del guanciale.",
    "emergencyTitle": "🚨 Despensa de Emergencia y Sustitutos",
    "emergencySubtitle": "¿Estás fuera de Italia y falta algún ingrediente? Trucos científicos para salvar el plato.",
    "emGuancialeTitle": "🥓 Si falta el Guanciale:",
    "emGuancialeOpt1": "✅ Opción 1 (Excelente): Panceta curada artesanal SIN ahumar. Reduce un poco la sal del agua.",
    "emGuancialeOpt2": "⚠️ Opción 2 (Extrema): Bacon ahumado. Truco salvavidas: escalfar las tiras en agua hirviendo durante 2 minutos para extraer humo y azúcares antes de dorar.",
    "emPecorinoTitle": "🧀 Si falta el Pecorino Romano:",
    "emPecorinoOpt1": "✅ Opción 1 (Recomendada Easy): 50% Pecorino (toscanos/sardos) y 50% Parmigiano Reggiano.",
    "emPecorinoOpt2": "⚠️ Opción 2: Solo Parmigiano Reggiano o Grana Padano. Añade 1g extra de sal y pimienta negra para compensar la potencia ovina.",
    "emStarchTitle": "🌾 Si la pasta es lisa (poco almidón):",
    "emStarchOpt1": "✅ El Truco de la Olla Pequeña: Cuece la pasta en la mitad de agua habitual (ej. 1.5L para 300g). ¡El agua se transformará en un caldo denso de almidón!",
    "emStarchOpt2": "🔬 Truco Molecular de Emergencia: Disuelve 1/2 cucharadita de maicena en agua fría y échala a la sartén: formará la crema al instante.",
    "troubleshootTitle": "Primeros Auxilios Gastronómicos",
    "troubleshootDesc": "¿Algo salió mal en la sartén? Así te ayuda la física a rescatar el plato.",
    "troubleClumpTitle": "¿El pecorino ha formado grumos gomosos?",
    "troubleClumpSol": "La caseína supera los 65°C y expulsa el suero. Aparta la sartén del fuego, añade 2-3 cucharadas de agua de cocción tibia (55°C) rica en almidón y bate rápidamente con unas varillas o batidora en un vaso aparte antes de reintegrarla a la pasta.",
    "troubleCurdleTitle": "¿El huevo ha empezado a cuajar (efecto tortilla)?",
    "troubleCurdleSol": "Retira de inmediato la sartén de la fuente de calor. Transfiere la pasta a un bol frío, añade 1 cubito de hielo o 2 cucharadas de agua fría y bate enérgicamente. Si ya se aprecian grumos, tritura 5 segundos con la batidora de mano junto con una cucharada de agua con almidón: la lecitina se reemulsionará al instante.",
    "troubleSaltyTitle": "¿El plato ha quedado excesivamente salado?",
    "troubleSaltySol": "El Pecorino Romano DOP curado contiene mucha sal natural. Regla de oro: reduce a la mitad la sal en el agua de la pasta (máx. 5 g/l). Para remediarlo en el plato terminado: alarga con agua de cocción sin sal y añade pimienta negra tostada (la piperina disfraza la salinidad aguda).",
    "recipes": {
      "carbonara": {
        "name": "Spaghetti alla Carbonara",
        "shortDesc": "Yemas frescas, guanciale crujiente, Pecorino Romano DOP y pimienta tostada.",
        "origin": "Roma (1944)",
        "difficulty": "Media (Sensible a la temperatura)",
        "history": "Nacida del ingenio de los cocineros romanos con las raciones de los aliados, perfeccionada hasta ser icono mundial.",
        "scienceTip": "La lecitina de las yemas es un potente emulsionante. A 64-66°C las proteínas atrapan la grasa del cerdo sin cuajar en sólidos.",
        "ingredients": {
          "pasta": {
            "name": "Spaghetti o Rigatoni al bronce",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale de cerdo curado",
            "basePerPerson": 60,
            "unit": "g"
          },
          "yolks": {
            "name": "Yemas de huevo fresco (talla L)",
            "basePerPerson": 1,
            "extraPadella": 1,
            "unit": "pz"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP rallado fino",
            "basePerPerson": 35,
            "unit": "g"
          },
          "pepper": {
            "name": "Pimienta negra en grano recién molida",
            "basePerPerson": 2.5,
            "unit": "g"
          },
          "salt": {
            "name": "Sal para el agua (mitad de dosis: 5g/L)",
            "basePerPerson": 5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Corte y Dorado del Guanciale",
            "desc": "Corta el guanciale en tiras de 6mm. Ponlo en sartén fría sin aceite. Enciende a fuego medio-bajo 10-12 min hasta que esté dorado crujiente por fuera y tierno dentro.",
            "timerMin": 10
          },
          {
            "title": "La \"Carbocrema\" en Frío",
            "desc": "En un bol, mezcla las yemas con el Pecorino Romano rallado y abundante pimienta negra. Bate hasta formar una pasta cremosa. Añade 2 cucharadas de la grasa tibia para atemperar.",
            "timerMin": 3
          },
          {
            "title": "Cocción de Pasta y Almidón",
            "desc": "Cuece la pasta en agua con solo 5g de sal por litro. Escurre 2 minutos antes del tiempo indicado, reservando una taza de agua de cocción.",
            "timerMin": 8
          },
          {
            "title": "Salteado en Sartén",
            "desc": "Vierte la pasta al dente directamente en la sartén con la grasa a fuego vivo durante 1 minuto con un cucharón de agua de cocción, salteando para crear la emulsión.",
            "timerMin": 1
          },
          {
            "title": "Mantecatura Fuera del Fuego",
            "desc": "APAGA EL FUEGO Y RETIRA LA SARTÉN. Espera 45 segundos a que baje a 60-65°C. Añade la pasta al bol de yemas, mezcla con gotas de agua caliente y sirve con el guanciale crujiente encima.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Modo Fácil: Reserva 2 cucharadas de agua de cocción y déjala enfriar a 50°C para atemperar las yemas y el pecorino antes de incorporar a la pasta. Manteca SIEMPRE fuera del fuego.",
        "proTip": "🏆 Chef Pro: Usa solo yemas frescas de gallinas camperas, grasa de guanciale fundida a 80°C sin quemar y mantecatura en onda entre 62°C y 65°C para maximizar la viscosidad de la lecitina."
      },
      "cacioepepe": {
        "name": "Tonnarelli Cacio e Pepe",
        "shortDesc": "Solo tres elementos: pasta al bronce rica en almidón, Pecorino Romano DOP y pimienta tostada.",
        "origin": "Roma y Campiña Romana",
        "difficulty": "Alta (Precisión térmica)",
        "history": "Plato milenario de los pastores trashumantes del Lacio: alimentos duraderos para transportar en alforjas.",
        "scienceTip": "El Pecorino funde a 55°C, pero sobre 65°C las caseínas se aglutinan en goma. El almidón soluble del agua estabiliza la emulsión.",
        "ingredients": {
          "pasta": {
            "name": "Tonnarelli frescos o Spaghetti rugosos",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP rallado muy fino",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pepper": {
            "name": "Pimienta negra en grano para tostar",
            "basePerPerson": 3.5,
            "unit": "g"
          },
          "water": {
            "name": "Agua de cocción concentrada en almidón",
            "basePerPerson": 40,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Tostado de la Pimienta",
            "desc": "Muele la pimienta en mortero. Tuesta en sartén seca a fuego medio 2 minutos y desglasa con un cucharón de agua hirviendo de la pasta para crear un caldo aromático.",
            "timerMin": 2
          },
          {
            "title": "Pasta de Queso en Frío",
            "desc": "En un bol pon el Pecorino fino. Agrega poco a poco agua de cocción a 55-60°C batiendo con varilla hasta lograr una crema densa sin grumos.",
            "timerMin": 3
          },
          {
            "title": "Salteado Final",
            "desc": "Escurre los tonnarelli al dente en la sartén con el caldo de pimienta y saltea a fuego fuerte para concentrar el almidón.",
            "timerMin": 2
          },
          {
            "title": "Mantecatura Fuera del Fuego",
            "desc": "Retira la sartén del calor. Espera 30 segundos (menos de 60°C). Incorpora la crema de pecorino y saltea con fuerza formando una crema sedosa.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Modo Fácil: Prepara una crema de pecorino con agua tibia a 50°C en un bol aparte batiendo con varillas. Incorpórala a la pasta únicamente cuando la sartén esté retirada del fuego.",
        "proTip": "🏆 Chef Pro: Extracción de almidón mediante risottatura intensa los últimos 3 minutos. Emulsión dinámica a 58°C: la concentración de amilosa debe crear puentes de hidrógeno con la caseína."
      },
      "amatriciana": {
        "name": "Bucatini all'Amatriciana",
        "shortDesc": "Guanciale crujiente, tomate San Marzano, Pecorino Romano DOP y vino blanco seco.",
        "origin": "Amatrice / Roma",
        "difficulty": "Media",
        "history": "Evolución dieciochesca de la Gricia blanca tras la popularización del tomate en el Lacio.",
        "scienceTip": "La acidez del tomate San Marzano equilibra la riqueza grasa del guanciale, aportando umami natural.",
        "ingredients": {
          "pasta": {
            "name": "Bucatini o Mezzi Rigatoni al bronce",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale en tiras",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Tomates pelados San Marzano DOP triturados a mano",
            "basePerPerson": 120,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP rallado",
            "basePerPerson": 30,
            "unit": "g"
          },
          "vino": {
            "name": "Vino blanco seco para desglasar",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "chili": {
            "name": "Guindilla roja picante (opcional)",
            "basePerPerson": 0.5,
            "unit": "pz"
          }
        },
        "steps": [
          {
            "title": "Dorado del Guanciale",
            "desc": "Dora el guanciale a fuego suave hasta que quede crujiente. Reserva los trozos crujientes en un bol caliente.",
            "timerMin": 8
          },
          {
            "title": "Desglase y Tomate",
            "desc": "En la grasa de la sartén, desglasa con vino blanco evaporando el alcohol. Añade el tomate triturado y guindilla. Cuece 12-15 min hasta espesar.",
            "timerMin": 12
          },
          {
            "title": "Unión y Queso",
            "desc": "Mezcla los bucatini al dente en la salsa 1 minuto. Apaga el fuego, incorpora abundante Pecorino Romano y corona con el guanciale crujiente.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Modo Fácil: Retira el guanciale en cuanto esté dorado y resérvalo aparte. Cocina el tomate en su grasa y corona con el guanciale solo al final sobre el plato para mantenerlo crujiente.",
        "proTip": "🏆 Chef Pro: Desglase con vino blanco seco sobre los bordes calientes de la sartén para disolver los azúcares caramelizados. Tomate San Marzano estrujado a mano a fuego vivo para no perder frescura."
      },
      "gricia": {
        "name": "Mezze Maniche alla Gricia",
        "shortDesc": "La célebre \"Amatriciana blanca\": pasta, guanciale crujiente, pecorino y pimienta negra.",
        "origin": "Grisciano / Roma",
        "difficulty": "Media",
        "history": "El origen de las pastas romanas: la Carbonara y la Amatriciana son sus hijas directas.",
        "scienceTip": "Sin tomate ni huevo, la cremosidad surge enteramente de emulsionar la grasa fundida con el almidón de la pasta.",
        "ingredients": {
          "pasta": {
            "name": "Mezze Maniche o Rigatoni rayados",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale curado en tiras",
            "basePerPerson": 55,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP madurado",
            "basePerPerson": 40,
            "unit": "g"
          },
          "pepper": {
            "name": "Pimienta negra molida",
            "basePerPerson": 2.5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Dorado del Guanciale",
            "desc": "Saltea el guanciale hasta dejarlo crocante por fuera y tierno dentro. Reserva 2/3 crujientes.",
            "timerMin": 8
          },
          {
            "title": "Fondo de Almidón",
            "desc": "Vierte un cucharón de agua hirviendo con la pimienta en la grasa de la sartén: creará un caldo opalescente.",
            "timerMin": 2
          },
          {
            "title": "Mantecatura Final",
            "desc": "Saltea la pasta al dente 60 segundos en la sartén. Apaga el fuego, espera 30 segundos, espolvorea pecorino y bate hasta lograr la crema sedosa. Corona con el guanciale.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Modo Fácil: Añade el agua de cocción poco a poco sobre el fondo de grasa del guanciale. Jamás viertas el pecorino sobre la sartén caliente: manteca salteando en el aire.",
        "proTip": "🏆 Chef Pro: Emulsión bifásica perfecta entre grasa noble y almidón. Pimienta negra machacada en mortero y tostada en seco a 150°C antes de la risottatura para liberar la piperina."
      },
      "saltimbocca": {
        "category": "secondi",
        "name": "Saltimbocca alla Romana",
        "shortDesc": "Finas escalopas de ternera lechal, jamón curado dulce, salvia fresca y mantequilla clarificada desglasadas con vino blanco seco.",
        "origin": "Roma (Rione Regola, finales del siglo XIX)",
        "difficulty": "Fácil (Cocción exprés en 90 segundos)",
        "history": "Documentado por Pellegrino Artusi en 1891 tras probarlos en la histórica trattoria \"Le Venete\" de Roma: una obra maestra instantánea que \"salta en la boca\".",
        "scienceTip": "Reacción de Maillard ultrarrápida a 160°C únicamente en la cara enharinada de la carne. Fuera del fuego, los jugos se emulsionan con mantequilla fría y vino (beurre monté), logrando un glaseado brillante y aterciopelado.",
        "ingredients": {
          "veal": {
            "name": "Escalopas finas de babilla o cadera de ternera lechal (3 mm)",
            "basePerPerson": 160,
            "unit": "g"
          },
          "prosciutto": {
            "name": "Jamón curado dulce artesanal de calidad",
            "basePerPerson": 50,
            "unit": "g"
          },
          "sage": {
            "name": "Hojas enteras de salvia fresca",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "butter": {
            "name": "Mantequilla de calidad (para dorar y emulsionar)",
            "basePerPerson": 25,
            "unit": "g"
          },
          "wine": {
            "name": "Vino blanco seco (Frascati Superiore DOC)",
            "basePerPerson": 30,
            "unit": "ml"
          },
          "flour": {
            "name": "Harina de trigo (solo para la base de la carne)",
            "basePerPerson": 10,
            "unit": "g"
          },
          "pepper": {
            "name": "Pimienta negra recién molida (no salar el jamón)",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Espalmado y Ensartado",
            "desc": "Espalma los filetes entre dos hojas de papel de horno hasta dejarlos muy finos (3 mm). Coloca sobre cada filete una loncha de jamón y una hoja de salvia. Sujeta en el centro con un palillo de forma horizontal a modo de alfiler.",
            "timerMin": 5
          },
          {
            "title": "Enharinado Científico de la Base",
            "desc": "Enharina ligeramente SOLO la cara inferior de la carne (la que irá en contacto con la sartén), sacudiendo el exceso. Jamás toques con la harina el jamón ni la salvia.",
            "timerMin": 2
          },
          {
            "title": "Cocción Exprés a Fuego Vivo",
            "desc": "Funde 2/3 de la mantequilla en la sartén a fuego vivo. Deposita los saltimbocca por el lado enharinado. Cocina sin moverlos durante 60-80 segundos hasta obtener una costra dorada.",
            "timerMin": 2
          },
          {
            "title": "Desglase y Montado \"Beurre Monté\"",
            "desc": "Voltea los saltimbocca durante apenas 15 segundos por el lado del jamón. Desglasa con el vino blanco y deja evaporar el alcohol. Retira la carne a un plato caliente. Apaga el fuego, incorpora la mantequilla fría restante a la sartén y agita enérgicamente para lograr una salsa brillante y sedosa.",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Modo Fácil: Enharina únicamente la cara inferior de la carne (nunca el jamón). Cocina tapado a fuego medio durante 60 segundos: la carne quedará tierna y jugosa.",
        "proTip": "🏆 Chef Pro: Desglase con vino blanco a fuego muy vivo (reacción a 160°C) para crear una salsa aterciopelada y brillante montada al final con mantequilla fría de avellana."
      },
      "coda": {
        "category": "secondi",
        "name": "Coda alla Vaccinara",
        "shortDesc": "Rabo de toro estofado a fuego lentísimo durante 4 horas con apio crujiente, tomate San Marzano, pasas, piñones y cacao amargo.",
        "origin": "Roma (Rione Testaccio / Quinto Quarto)",
        "difficulty": "Media (Cocción prolongada a baja temperatura)",
        "history": "Reina indiscutible de la cocina del despojo (Quinto Quarto), nacida en las tabernas junto al antiguo matadero de Testaccio, donde los matarifes cocinaban el rabo con abundante apio para enternecerlo.",
        "scienceTip": "El colágeno del rabo se hidroliza convirtiéndose en suculenta gelatina fundente solo entre 80°C y 85°C en un hervor casi imperceptible (\"pipare\"). El cacao puro y las pasas generan el equilibrio agridulce renacentista que limpia el paladar.",
        "ingredients": {
          "tail": {
            "name": "Rabo de buey o toro cortado en rodajas regulares",
            "basePerPerson": 350,
            "unit": "g"
          },
          "celery": {
            "name": "Ramas de apio blanco tiernas y crujientes",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Tomates pelados San Marzano DOP estrujados a mano",
            "basePerPerson": 200,
            "unit": "g"
          },
          "wine": {
            "name": "Vino tinto con cuerpo (Cesanese del Piglio)",
            "basePerPerson": 60,
            "unit": "ml"
          },
          "lard": {
            "name": "Picadillo de guanciale con zanahoria y cebolla",
            "basePerPerson": 25,
            "unit": "g"
          },
          "cocoa": {
            "name": "Cacao puro amargo en polvo",
            "basePerPerson": 2,
            "unit": "g"
          },
          "pinenuts": {
            "name": "Piñones tostados y pasas sultanas hidratadas",
            "basePerPerson": 10,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Dorado y Sellado de los Trozos",
            "desc": "En una cazuela amplia sofríe el picadillo de guanciale. Añade los trozos de rabo y dóralos por todos lados a fuego vivo durante 10 minutos hasta que queden bien sellados.",
            "timerMin": 10
          },
          {
            "title": "Desglase con Vino Tinto y Tomate",
            "desc": "Desglasa con el vino tinto con cuerpo dejando evaporar el alcohol. Agrega los tomates pelados machacados, sal y una generosa molienda de pimienta. Lleva a hervor suave.",
            "timerMin": 10
          },
          {
            "title": "Lenta Hidrólisis del Colágeno",
            "desc": "Cubre con la tapa y baja el fuego al mínimo: la salsa debe borbotear muy suavemente a 80-85°C durante unas 3 horas y media, hasta que la carne se separe sola del hueso.",
            "timerMin": 180
          },
          {
            "title": "El Toque Maestro: Apio y Cacao",
            "desc": "Escalda las pencas de apio 3 minutos en agua salada y añádelas al rabo junto con los piñones, las pasas y el cacao disuelto en un cucharón de salsa. Deja cocinar a fuego suave 20 minutos antes de servir.",
            "timerMin": 20
          }
        ],
        "easyTip": "💡 Modo Fácil: Si tienes prisa, puedes usar la olla a presión los primeros 45 minutos y luego reducir a fuego lento sin tapa para espesar la salsa.",
        "proTip": "🏆 Chef Pro: Cocción suave a 85°C durante 4 horas para hidrolizar todo el colágeno en gelatina fundente. Toque canónico de cacao amargo y piñones tostados en los últimos 15 minutos."
      },
      "abbacchio": {
        "category": "secondi",
        "name": "Abbacchio alla Scottadito",
        "shortDesc": "Chuletillas de cordero lechal marinadas con romero fresco, ajo nuevo y manteca, asadas a fuego vivo para comer ardiendo con los dedos.",
        "origin": "Roma y Campo Romano",
        "difficulty": "Fácil (Cocción rápida a alta temperatura)",
        "history": "Llamadas así porque la tradición manda degustar las chuletillas recién sacadas de las brasas, quemándose literalmente los dedos sin esperar a que enfríen.",
        "scienceTip": "La carne tierna del cordero lechal exige calor de contacto extremo (220-250°C) para caramelizar el exterior en 2 minutos por lado, conservando el núcleo rosado a 56-58°C sin perder jugos celulares.",
        "ingredients": {
          "chops": {
            "name": "Chuletillas frescas de cordero lechal",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "rosemary": {
            "name": "Romero fresco y tomillo silvestre picados",
            "basePerPerson": 3,
            "unit": "g"
          },
          "garlic": {
            "name": "Dientes de ajo nuevo machacados con piel",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Aceite de oliva virgen extra o manteca de cerdo",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "lemon": {
            "name": "Gajos de limón fresco para acompañar",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "salt": {
            "name": "Sal gruesa marina molida y pimienta negra",
            "basePerPerson": 3,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Marinado Aromático en Frío",
            "desc": "Masajea las chuletillas con el aceite o manteca, el picadillo de romero, ajo machacado y pimienta. Deja reposar a temperatura ambiente durante 15-20 minutos.",
            "timerMin": 15
          },
          {
            "title": "Calentamiento de la Plancha a Fuego Vivo",
            "desc": "Pon al rojo vivo la plancha de hierro fundido o parrilla hasta que humee levemente (230-250°C). La superficie debe estar abrasadora para sellar al instante.",
            "timerMin": 5
          },
          {
            "title": "Asado Exprés 2 Minutos por Lado",
            "desc": "Coloca las chuletillas espaciadas sobre la parrilla. Cocina 2 minutos sin moverlas, dales la vuelta y cocina otros 2 minutos. Sala solo al momento de girar.",
            "timerMin": 4
          },
          {
            "title": "Servicio Hirviendo \"Scottadito\"",
            "desc": "Pasa de inmediato a una fuente caliente con gajos de limón. ¡Se come con las manos sujetando el hueso mientras aún quema!",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Modo Fácil: Marina las chuletillas 15 minutos con un hilo de aceite, romero y ajo machacado. Calienta muy bien la plancha antiadherente para que no se peguen.",
        "proTip": "🏆 Chef Pro: Contacto térmico a muy alta temperatura (230°C) durante 90 segundos por lado. Sazonado estricto al retirar con sal en escamas para preservar la presión osmótica de los jugos."
      },
      "carciofigiudia": {
        "category": "contorni",
        "name": "Carciofi alla Giudia",
        "shortDesc": "El icono milenario del Gueto Judío: alcachofa romanesca con doble fritura dorada en forma de rosa crujiente.",
        "origin": "Roma (Gueto Judío, siglo XVI)",
        "difficulty": "Alta (Precisión en el torneado en espiral y control térmico del aceite)",
        "history": "Nacido en las cocinas judeorromanas para celebrar el fin del ayuno del Yom Kipur: las alcachofas enteras florecen en espectaculares rosas doradas crujientes.",
        "scienceTip": "LA DOBLE FRITURA CIENTÍFICA: La 1.ª inmersión a 140°C cocina la pulpa y el tallo hasta dejarlos tiernos como mantequilla. La 2.ª inmersión a 175-180°C con unas gotas de agua fría evapora al instante la humedad de los pétalos exteriores, inflándolos como chips hipercrujientes.",
        "ingredients": {
          "artichoke": {
            "name": "Alcachofas romanescas sin espinas (Mammole Cimaroli)",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Aceite de oliva virgen extra para fritura profunda",
            "basePerPerson": 250,
            "unit": "ml"
          },
          "lemon": {
            "name": "Limón fresco para acidular el agua de limpieza",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "salt": {
            "name": "Sal marina fina y pimienta para condimentar el corazón",
            "basePerPerson": 2,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Torneado en Espiral de la Alcachofa",
            "desc": "Retira las hojas duras exteriores girando la alcachofa con una puntilla como pelando una naranja. Pela el tallo y recorta las puntas formando una cúpula limpia y redonda.",
            "timerMin": 10
          },
          {
            "title": "Primera Fritura a 140°C (Cocción del Corazón)",
            "desc": "Calienta abundante aceite a 140°C. Sumerge las alcachofas boca abajo durante 10-12 minutos hasta que un tenedor penetre la base del tallo sin resistencia. Escurre y deja templar 5 minutos.",
            "timerMin": 12
          },
          {
            "title": "Apertura en Rosa y Aderezo",
            "desc": "Golpea con delicadeza las alcachofas entre sí o presiónalas contra la tabla para abrir los pétalos hacia fuera en forma de flor abierta. Sazona el corazón con sal y pimienta molida.",
            "timerMin": 3
          },
          {
            "title": "Segunda Fritura a 180°C (Crujiente de Pétalos)",
            "desc": "Lleva el aceite a 175-180°C. Salpica unas gotas de agua fría sobre las hojas y sumerge boca abajo, presionando ligeramente con unas pinzas durante 2 minutos hasta que chisporrotee y quede crujiente.",
            "timerMin": 2
          }
        ],
        "easyTip": "💡 Modo Fácil: Limpia bien retirando las primeras 4-5 capas de hojas duras. Sumerge en agua acidulada con limón para evitar la oxidación antes de freír.",
        "proTip": "🏆 Chef Pro: Doble fritura por inmersión: primero a 140°C para confitar el corazón, luego apertura en flor y segundo golpe a 180°C durante 90 segundos para que las hojas queden crujientes como patatas fritas."
      },
      "carciofiromana": {
        "category": "contorni",
        "name": "Carciofi alla Romana",
        "shortDesc": "Alcachofas romanescas rellenas de poleo silvestre romano, ajo y perejil, estofadas boca abajo a fuego lento en cazuela tapada.",
        "origin": "Roma y Campo Romano",
        "difficulty": "Media (Limpieza precisa y estofado hermético)",
        "history": "La guarnición primaveral por excelencia del domingo romano. La menta silvestre (nepetella), autóctona de las ruinas romanas, aporta un aroma inigualable.",
        "scienceTip": "Las alcachofas cocidas boca abajo a 90-95°C selladas con papel vegetal húmedo y tapa pesada se cocinan en el vapor aromático de su propia emulsión de aceite y vino, conservando los polifenoles sin oscurecerse.",
        "ingredients": {
          "artichoke": {
            "name": "Alcachofas romanescas con tallo largo",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "mint": {
            "name": "Poleo silvestre romano fresco (nepetella)",
            "basePerPerson": 3,
            "unit": "g"
          },
          "parsley": {
            "name": "Perejil fresco de hoja lisa picado",
            "basePerPerson": 4,
            "unit": "g"
          },
          "garlic": {
            "name": "Dientes de ajo nuevo finamente picados",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "oil": {
            "name": "Aceite de oliva virgen extra generoso",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "wine": {
            "name": "Vino blanco seco o agua para el fondo de cocción",
            "basePerPerson": 25,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Limpieza y Apertura Interior",
            "desc": "Retira las hojas exteriores leñosas, pela el tallo y despunta. Abre con cuidado las hojas centrales con los dedos para crear espacio para el relleno de hierbas.",
            "timerMin": 10
          },
          {
            "title": "Relleno Aromático de Nepetella",
            "desc": "Pica finamente la hierba menta romana, el perejil, el ajo, sal y pimienta. Rellena el corazón de cada alcachofa introduciendo la mezcla hacia el fondo.",
            "timerMin": 5
          },
          {
            "title": "Acomodación Boca Abajo en Cazuela",
            "desc": "Coloca las alcachofas boca abajo, bien apretadas entre sí en una olla de bordes altos. Riega con abundante aceite de oliva virgen extra, vino blanco y agua hasta la mitad del tallo.",
            "timerMin": 5
          },
          {
            "title": "Estofado al Vapor Hermético a 90°C",
            "desc": "Cubre con papel de horno húmedo en contacto directo y encaja una tapa pesada. Cocina a fuego lento durante 25-30 minutos hasta que el tallo se perfore con suavidad.",
            "timerMin": 30
          }
        ],
        "easyTip": "💡 Modo Fácil: Cocina las alcachofas boca abajo en una cacerola estrecha y honda, cubiertas a media altura de agua y aceite con la tapa puesta para una cocción homogénea al vapor.",
        "proTip": "🏆 Chef Pro: Relleno tradicional de menta romana (nepetella), ajo y un velo de pan rallado. Estofado hermético en campana a 92°C para obtener una textura melosa como mantequilla."
      },
      "suppli": {
        "category": "contorni",
        "name": "Supplì al Telefono",
        "shortDesc": "La mítica croqueta romana de arroz al ragú concentrado de carne, rebozado crujiente y corazón fundente de fior di latte que forma hilo.",
        "origin": "Roma (Trastevere, finales del siglo XIX)",
        "difficulty": "Media (Moldeado y fritura por inmersión)",
        "history": "Llamado \"al telefono\" porque al partirlo caliente en dos mitades, la mozzarella fundida forma un hilo elástico continuo que recuerda al cable de los teléfonos antiguos de auricular.",
        "scienceTip": "El arroz al dente debe enfriarse a <15°C para favorecer la retrogradación de la amilosa, que cohesiona los granos sin necesidad de huevo en la masa. La fritura a 170-175°C crea una costra protectora instantánea que sella el queso derretido en el centro.",
        "ingredients": {
          "rice": {
            "name": "Arroz Carnaroli o Arborio para risotto",
            "basePerPerson": 80,
            "unit": "g"
          },
          "ragu": {
            "name": "Ragú concentrado y sabroso de ternera con tomate",
            "basePerPerson": 70,
            "unit": "g"
          },
          "mozzarella": {
            "name": "Mozzarella fior di latte bien seca en bastones",
            "basePerPerson": 30,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP y Parmigiano rallados",
            "basePerPerson": 15,
            "unit": "g"
          },
          "eggs": {
            "name": "Huevos frescos para el rebozado",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "breadcrumbs": {
            "name": "Pan rallado fino para rebozado crocante",
            "basePerPerson": 35,
            "unit": "g"
          },
          "oil": {
            "name": "Aceite para freír por inmersión (cacahuete o AOVE)",
            "basePerPerson": 200,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Cocción del Risotto al Ragú",
            "desc": "Cuece el arroz directamente en el ragú alargado con caldo ligero, dejándolo muy al dente. Fuera del fuego manteca con el pecorino y extiéndelo sobre una bandeja ancha.",
            "timerMin": 15
          },
          {
            "title": "Enfriamiento y Retrogradación del Almidón",
            "desc": "Deja enfriar el arroz por completo durante al menos 30 minutos a temperatura ambiente o en la nevera hasta que esté frío y firme.",
            "timerMin": 30
          },
          {
            "title": "Moldeado Oval y Relleno de Mozzarella",
            "desc": "Toma una porción de arroz en la palma de la mano, inserta en el centro un bastón de mozzarella y cierra moldeando una croqueta ovalada sin grietas.",
            "timerMin": 10
          },
          {
            "title": "Doble Rebozado y Fritura a 175°C",
            "desc": "Pasa el supplì por huevo batido y luego por pan rallado fino. Fríe en abundante aceite a 175°C durante 3-4 minutos hasta que adquiera un tono dorado oscuro. ¡Sirve bien caliente para disfrutar del efecto hilo!",
            "timerMin": 4
          }
        ],
        "easyTip": "💡 Modo Fácil: Prepara el arroz al ragú la víspera o déjalo en la nevera 2 horas: el arroz frío y compacto se moldea con facilidad sin romperse.",
        "proTip": "🏆 Chef Pro: Doble rebozado fino sin harina. Punto térmico estricto a 175°C en fritura profunda: corazón fundente a 60°C y corteza crocante milimétrica."
      },
      "maritozzo": {
        "category": "dolci",
        "name": "Maritozzo con la Panna",
        "shortDesc": "El mítico bollito dulce romano perfumado con cítricos y vainilla, cortado longitudinalmente y colmado de fresca nata montada.",
        "origin": "Roma (Época romana y tradición renacentista)",
        "difficulty": "Media (Fermentación biológica controlada)",
        "history": "Antaño el único dulce permitido durante el ayuno de Cuaresma. En el Renacimiento, el prometido (\"maritozzo\") se lo regalaba a su novia con un anillo de compromiso oculto en la nata.",
        "scienceTip": "La red de gluten desarrollada con harina de fuerza (W 300-330) retiene el CO2 durante la fermentación a 26-28°C. El horneado a 180°C dora la corteza por reacción de Maillard mientras el interior queda esponjoso como una nube.",
        "ingredients": {
          "flour": {
            "name": "Harina de fuerza Manitoba para masas fermentadas (W320)",
            "basePerPerson": 75,
            "unit": "g"
          },
          "milk": {
            "name": "Leche entera fresca tibia",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "sugar": {
            "name": "Azúcar granulado para la masa",
            "basePerPerson": 15,
            "unit": "g"
          },
          "yeast": {
            "name": "Levadura fresca de panadería",
            "basePerPerson": 3,
            "unit": "g"
          },
          "oil": {
            "name": "Aceite de oliva virgen extra suave o mantequilla fundida",
            "basePerPerson": 12,
            "unit": "ml"
          },
          "cream": {
            "name": "Nata líquida fresca para montar (mínimo 35% M.G.)",
            "basePerPerson": 80,
            "unit": "ml"
          },
          "zest": {
            "name": "Ralladura fina de naranja fresca y vainilla",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Amasado y Desarrollo del Gluten",
            "desc": "Disuelve la levadura en la leche tibia con una cucharadita de azúcar. Une a la harina y amasa con energía añadiendo el azúcar, el aceite y los aromas hasta lograr una masa lisa y elástica.",
            "timerMin": 15
          },
          {
            "title": "Primera Fermentación a 27°C",
            "desc": "Coloca la masa en un bol cubierto con film transparente en un lugar cálido (26-28°C) durante unos 90 minutos hasta que doble su volumen.",
            "timerMin": 90
          },
          {
            "title": "Boleado Ovalado y Segunda Fermentación",
            "desc": "Divide en porciones ovaladas alargadas (en forma de balón de rugby). Dispón en la bandeja de horno y deja fermentar cubiertas otros 60 minutos.",
            "timerMin": 60
          },
          {
            "title": "Horneado a 180°C y Glaseado de Almíbar",
            "desc": "Hornea a 180°C durante 12-14 minutos hasta que tomen un dorado brillante. Nada más salir del horno, pincela con un almíbar ligero de agua y azúcar para aportar brillo.",
            "timerMin": 14
          },
          {
            "title": "Corte y Relleno a Espátula con Nata",
            "desc": "Deja enfriar por completo. Haz un corte longitudinal en la parte superior sin separar las dos mitades. Monta la nata bien fría con azúcar glas y rellena a ras alisando los bordes con una espátula de pastelería.",
            "timerMin": 5
          }
        ],
        "easyTip": "💡 Modo Fácil: Pon el bol y las varillas en el congelador 15 minutos antes de montar la nata: montará en la mitad de tiempo y permanecerá firme mucho más tiempo.",
        "proTip": "🏆 Chef Pro: Brioche romano con fermentación biológica controlada a 26°C, glaseado en frío con almíbar de azúcar y nata fresca montada al 38% de grasa con un 10% de azúcar glas."
      }
    },
    "catAll": "Todas las Recetas",
    "catPrimi": "🍝 Pastas (The Big 4)",
    "catSecondi": "🥩 Segundos Platos",
    "catContorni": "🥬 Fritos y Guarniciones",
    "catDolci": "🥐 Dulces Tradicionales",
    "portionSize": "Ración de Pasta:",
    "portionStandard": "Estándar (100g)",
    "portionAbbondante": "🍝 Abundante (130g)",
    "servingsHintAbbondante": "🍝 Ración Abundante de Taberna Romana: {amount} de pasta por persona",
    "troubleGuancialeTitle": "¿El guanciale se ha quemado o ha quedado gomoso?",
    "troubleGuancialeSol": "Si quedó gomoso: fuego demasiado vivo, la grasa interna no fundió (se requieren 8-10 min a fuego suave). Si se quemó: retira los trozos ennegrecidos para evitar el amargor, cuela la grasa limpia y añade pimienta recién tostada para equilibrar los aromas.",
    "troubleAcidTitle": "¿El tomate de la Amatriciana resulta demasiado ácido o acuoso?",
    "troubleAcidSol": "Los tomates pelados comerciales suelen llevar ácido cítrico añadido. Añade una punta microscópica de bicarbonato sódico (reacción química neutralizadora inmediata) o una cucharadita de grasa de guanciale, y deja reducir 2 minutos a fuego vivo para concentrar los azúcares naturales.",
    "troubleCarciofiTitle": "¿Las alcachofas a la judía están duras o no se abren en flor?",
    "troubleCarciofiSol": "Antes de la segunda fritura a 180°C, toma la alcachofa por el tallo y golpea con suavidad la parte superior boca abajo contra una tabla para abrir las hojas en corola. Si el corazón sigue correoso, prolonga 4 minutos la primera cocción en aceite a 140°C.",
    "troubleSuppliTitle": "¿Los supplì se abren o la mozzarella se escapa en el aceite?",
    "troubleSuppliSol": "No utilices arroz tibio: debe reposar en la nevera al menos 2 horas para que el almidón se compacte por retrogradación. Corta la mozzarella y déjala escurrir 1 hora. Realiza siempre un DOBLE empanado (huevo batido + pan rallado fino) y fríe con rigor a 175°C.",
    "troubleCodaTitle": "¿El rabo a la vaccinara sigue duro tras dos horas de cocción?",
    "troubleCodaSol": "El colágeno vacuno requiere hidrólisis a 80-85°C durante al menos 3 horas y media. No subas el fuego. Añade medio vaso de caldo o agua caliente, tapa herméticamente y prosigue la cocción a fuego mínimo hasta que la carne se desprenda sola con el tenedor.",
    "troubleSaltimboccaTitle": "¿Los saltimbocca quedan secos o el jamón se ha endurecido?",
    "troubleSaltimboccaSol": "La ternera nunca debe cocinarse más de 60-80 segundos por el lado enharinado. El lado del jamón y la salvia solo debe sellarse en contacto con la sartén durante 15-20 segundos para evitar que la deshidratación endurezca el jamón.",
    "troubleCreamTitle": "¿La nata del Maritozzo se corta o se transforma en mantequilla?",
    "troubleCreamSol": "Si la nata supera los 10°C, los glóbulos grasos colapsan. Utiliza nata muy fría (3-4°C) y enfría el bol y las varillas en el congelador 15 minutos antes de montar. Si empieza a granularse, incorpora 2 cucharadas de nata líquida helada y mezcla con suavidad con una espátula."
  },
  "fr": {
    "appName": "RomaLab Scientifique",
    "appTagline": "Cuisine Romaine Authentique & Thermodynamique de l'Émulsion",
    "splashVersion": "v1.1.0 Pro • Édition Mondiale Multilingue",
    "navRecipes": "Recettes",
    "navCalculator": "Dosages",
    "navLiveKitchen": "En Cuisine",
    "navThermal": "Thermique",
    "navScience": "Science",
    "btnLanguage": "Langue",
    "btnUnits": "Unités",
    "btnTheme": "Thème",
    "btnGuide": "Guide",
    "btnMenu": "Menu",
    "btnShare": "Partager",
    "btnTroubleshoot": "Guide SOS",
    "selectLanguage": "Choisir la Langue",
    "close": "Fermer",
    "servings": "Nombre de Personnes",
    "servingsHint": "Portion standard: {amount} de pâtes par personne",
    "ingredientsTitle": "Dosages Scientifiques au Gramme",
    "ingredientsSubtitle": "Calcul proportionnel automatique d'œufs, graisse noble et amidon de cuisson.",
    "emulsionThermodynamics": "Fenêtre Thermique d'Émulsion",
    "emulsionSubtitle": "La physique moléculaire entre amidon, lipides du guanciale et protéines.",
    "thermalSafeZone": "Zone Sécurisée d'Émulsion:",
    "thermalCold": "Trop Froid (<50°C)",
    "thermalOptimal": "Zone d'Or de l'Émulsion (58-65°C)",
    "thermalDanger": "Danger Omelette Coagulée (>68°C)",
    "startCooking": "Préparation Pas-à-Pas avec Minuteur",
    "cookingSubtitle": "Suivez chaque étape en direct pour maîtriser temps et température.",
    "step": "Étape",
    "timer": "Chrono",
    "start": "Démarrer",
    "pause": "Pause",
    "reset": "Zéro",
    "done": "Terminé !",
    "alertTempDanger": "ATTENTION: Température > 68°C ! Risque d'omelette ! Éteignez le feu immédiatement.",
    "alertTempOptimal": "TEMPÉRATURE IDÉALE (58-65°C): Émulsionnez énergiquement hors du feu.",
    "alertTempCold": "Température trop basse (< 50°C): La sauce risque de trancher.",
    "modeEasy": "⭐ Facile (Zéro Risque)",
    "modePro": "🏆 Pro (Maître Tradition)",
    "modeEasyLabel": "⭐ Facile (Assistée)",
    "modeEasyDesc": "Techniques avec marge de sécurité, crème stabilisée et fromage plus docile.",
    "modeProDesc": "Règle orthodoxe : 100% jaunes frais, pur Pecorino Romano AOP et liaison à l'amidon.",
    "hintYolks": "💡 Astuce : Ajoutez 1 blanc d'œuf pour assouplir la texture de la crème",
    "hintPecorino": "💡 Astuce : Mélange recommandé 50% Pecorino + 50% Parmigiano Reggiano",
    "hintWater": "💡 Astuce : Fouettez l'eau tiède (55°C) et le fromage au mixeur plongeant",
    "substitutionsTitle": "Guide International des Ingrédients",
    "substitutionsSubtitle": "Règles traditionnelles, chimie culinaire et substituts acceptables.",
    "subGuancialeTitle": "🥓 Guanciale vs Bacon vs Pancetta",
    "guancialeNote": "Le guanciale offre un gras noble à bas point de fusion (32-35°C), clé de l'onctuosité. Alternative acceptable : Pancetta plate non fumée. À BANNIR : Bacon fumé américain sucré.",
    "subPecorinoTitle": "🧀 Pecorino Romano AOP & Assemblage",
    "pecorinoNote": "Fromage de brebis affiné, piquant et salé. Si trop corsé, le compromis gastronomique consiste en 70% Pecorino Romano AOP et 30% Parmigiano Reggiano 24 mois.",
    "subPastaTitle": "🌾 Pâtes Tréfilées au Bronze et Amidon",
    "pastaNote": "Le tréfilage au bronze libère une abondante quantité d'amylose dans l'eau, agissant comme émulsifiant naturel liant eau et lipides du porc.",
    "emergencyTitle": "🚨 Placard d'Urgence & Substituts",
    "emergencySubtitle": "À l'étranger sans ingrédients romains ? Les astuces physiques pour sauver le plat.",
    "emGuancialeTitle": "🥓 Si vous manquez de Guanciale :",
    "emGuancialeOpt1": "✅ Option 1 (Excellente) : Pancetta artisanale NON fumée. Réduisez le sel de l'eau.",
    "emGuancialeOpt2": "⚠️ Option 2 (Dépannage) : Bacon. Astuce de survie : blanchir 2 min dans l'eau bouillante avant de poêler pour extraire sucre et fumée artificielle.",
    "emPecorinoTitle": "🧀 Si vous manquez de Pecorino Romano :",
    "emPecorinoOpt1": "✅ Option 1 (Recommandée) : 50% Pecorino (sarde/toscan) + 50% Parmigiano Reggiano.",
    "emPecorinoOpt2": "⚠️ Option 2 : Pur Parmesan ou Grana. Ajoutez 1 pincée de sel et poivre supplémentaire.",
    "emStarchTitle": "🌾 Si vos pâtes sont lisses (peu d'amidon) :",
    "emStarchOpt1": "✅ L'Astuce de la Petite Casserole : Cuire dans moitié moins d'eau que d'habitude. L'eau devient un concentré d'amidon laiteux !",
    "emStarchOpt2": "🔬 Astuce Moléculaire : Diluez 1/2 c.à.thé de fécule de maïs dans un peu d'eau froide et versez dans la poêle pour créer l'émulsion instantanée.",
    "troubleshootTitle": "Premiers Secours Gastronomiques",
    "troubleshootDesc": "Un incident en poêle ? Voici comment la physique rattrape votre plat.",
    "troubleClumpTitle": "Le pecorino forme des grumeaux caoutchouteux ?",
    "troubleClumpSol": "La caséine dépasse 65°C et expulse le lactosérum. Éloignez la poêle du feu, ajoutez 2 à 3 cuillères à soupe d'eau de cuisson tiède (55°C) riche en amidon et fouettez vivement au fouet ou au mixeur plongeant dans un verre à part avant de réunir aux pâtes.",
    "troubleCurdleTitle": "L'œuf commence à figer (effet omelette) ?",
    "troubleCurdleSol": "Retirez immédiatement la poêle de la source de chaleur. Transférez les pâtes dans un cul-de-poule froid, ajoutez 1 glaçon ou 2 cuillères à soupe d'eau froide et fouettez énergiquement. Si des grumeaux sont déjà formés, mixez 5 secondes au mixeur plongeant avec une cuillère d'eau amidonnée : la lécithine se réémulsionnera instantanément.",
    "troubleSaltyTitle": "Le plat est excessivement salé ?",
    "troubleSaltySol": "Le Pecorino Romano AOP affiné contient naturellement beaucoup de sel. Règle d'or : réduisez de moitié le sel dans l'eau des pâtes (5 g/l max). Pour rattraper le plat fini : allongez avec un peu d'eau de cuisson non salée et ajoutez du poivre noir torréfié (la pipérine masque l'excès de salinité).",
    "recipes": {
      "carbonara": {
        "name": "Spaghetti alla Carbonara",
        "shortDesc": "Jaunes d'œufs frais, guanciale croustillant, Pecorino Romano AOP et poivre noir torréfié.",
        "origin": "Rome (1944)",
        "difficulty": "Moyenne (Sensible à la chaleur)",
        "history": "Née de la créativité des cuisiniers romains et des rations alliées, devenue joyau de la cuisine internationale.",
        "scienceTip": "La lécithine des jaunes est un émulsifiant puissant. À 64-66°C, les protéines emprisonnent le gras sans coaguler.",
        "ingredients": {
          "pasta": {
            "name": "Spaghetti ou Rigatoni au bronze",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale de porc affiné",
            "basePerPerson": 60,
            "unit": "g"
          },
          "yolks": {
            "name": "Jaunes d'œufs très frais (L)",
            "basePerPerson": 1,
            "extraPadella": 1,
            "unit": "pz"
          },
          "pecorino": {
            "name": "Pecorino Romano AOP râpé fin",
            "basePerPerson": 35,
            "unit": "g"
          },
          "pepper": {
            "name": "Poivre noir en grains fraîchement concassé",
            "basePerPerson": 2.5,
            "unit": "g"
          },
          "salt": {
            "name": "Sel pour l'eau (quantité réduite : 5g/L)",
            "basePerPerson": 5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Découpe et Dorure du Guanciale",
            "desc": "Tailler en lardons épais de 6mm. Poêler à froid à feu moyen-doux pendant 10-12 min jusqu'à obtenir un extérieur croustillant et un cœur tendre.",
            "timerMin": 10
          },
          {
            "title": "La \"Carbocrème\" à Froid",
            "desc": "Dans un cul-de-poule, battre les jaunes avec le Pecorino et le poivre torréfié. Ajouter 2 c.à.s de gras tiède pour tempérer la crème.",
            "timerMin": 3
          },
          {
            "title": "Cuisson et Extraction d'Amidon",
            "desc": "Cuire les pâtes dans l'eau avec 5g de sel/L. Égoutter 2 min avant le temps indiqué en conservant une tasse d'eau chargée d'amidon.",
            "timerMin": 8
          },
          {
            "title": "Risottage en Poêle",
            "desc": "Sauter les pâtes à feu vif pendant 1 min avec le gras du guanciale et une louche d'eau de cuisson pour amorcer la liaison.",
            "timerMin": 1
          },
          {
            "title": "Mantecatura Hors du Feu",
            "desc": "COUPER LE FEU ET DÉPLACER LA POÊLE. Attendre 45 secondes (60-65°C). Verser les pâtes dans le bol aux œufs, fouetter vivement et dresser avec le guanciale croustillant.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Mode Facile : Prélevez 2 cuillères à soupe d'eau de cuisson et laissez-la tiédir à 50°C pour délayer les jaunes et le pecorino avant de les lier aux pâtes. Mélangez TOUJOURS hors du feu.",
        "proTip": "🏆 Chef Pro : Uniquement des jaunes frais de poules élevées en plein air, gras de guanciale fondu à 80°C sans roussir et émulsion en vague (mantecatura) entre 62°C et 65°C pour sublimer la lécithine."
      },
      "cacioepepe": {
        "name": "Tonnarelli Cacio e Pepe",
        "shortDesc": "Trois ingrédients purs : pâtes riches en amidon, Pecorino Romano AOP et poivre noir torréfié.",
        "origin": "Campagne Romaine",
        "difficulty": "Élevée (Précision thermique)",
        "history": "Plat millénaire des bergers en transhumance dans les collines du Latium.",
        "scienceTip": "Le Pecorino fond à 55°C, mais au-delà de 65°C la caséine durcit. L'amidon de l'eau agit comme bouclier protecteur.",
        "ingredients": {
          "pasta": {
            "name": "Tonnarelli frais ou Spaghetti rugueux",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano AOP râpé en voile",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pepper": {
            "name": "Poivre noir en grains à torréfier",
            "basePerPerson": 3.5,
            "unit": "g"
          },
          "water": {
            "name": "Eau de cuisson très riche en amidon",
            "basePerPerson": 40,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Torréfaction du Poivre",
            "desc": "Concasser le poivre au mortier. Chauffer à sec en poêle 2 min puis déglacer avec une louche d'eau bouillante.",
            "timerMin": 2
          },
          {
            "title": "Pâte de Fromage à Froid",
            "desc": "Dans un bol, mélanger le Pecorino et l'eau de cuisson tiédie (55-60°C) au fouet jusqu'à consistance lisse.",
            "timerMin": 3
          },
          {
            "title": "Risottage Final",
            "desc": "Terminer la cuisson des tonnarelli dans le bouillon poivré à feu vif pour concentrer l'amidon.",
            "timerMin": 2
          },
          {
            "title": "Émulsion Hors du Feu",
            "desc": "Hors de la source de chaleur (<60°C), incorporer la pâte de pecorino et faire sauter vigoureusement jusqu'à la nappe veloutée.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Mode Facile : Préparez une pâte onctueuse de pecorino et d'eau tiède à 50°C dans un bol au fouet. Incorporez-la aux pâtes uniquement après avoir retiré la poêle du feu.",
        "proTip": "🏆 Chef Pro : Extraction massive d'amidon par risottatura vive les 3 dernières minutes. Liaison dynamique à 58°C : l'amylose doit créer des ponts hydrogène avec la caséine."
      },
      "amatriciana": {
        "name": "Bucatini all'Amatriciana",
        "shortDesc": "Guanciale croustillant, tomates San Marzano AOP, Pecorino Romano et vin blanc sec.",
        "origin": "Amatrice / Rome",
        "difficulty": "Moyenne",
        "history": "Évolution rouge de la Gricia au XVIIIe siècle avec l'arrivée de la tomate en Italie centrale.",
        "scienceTip": "L'acidité naturelle de la tomate équilibre la richesse lipidique du guanciale pour une harmonie parfaite.",
        "ingredients": {
          "pasta": {
            "name": "Bucatini ou Rigatoni au bronze",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale en lamelles",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Tomates San Marzano pelées et écrasées à la main",
            "basePerPerson": 120,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano AOP râpé",
            "basePerPerson": 30,
            "unit": "g"
          },
          "vino": {
            "name": "Vin blanc sec pour déglacer",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "chili": {
            "name": "Piment rouge (facultatif)",
            "basePerPerson": 0.5,
            "unit": "pz"
          }
        },
        "steps": [
          {
            "title": "Dorure du Guanciale",
            "desc": "Dorer doucement les lardons de guanciale. Réserver les morceaux croustillants au chaud.",
            "timerMin": 8
          },
          {
            "title": "Délaçage et Mijotage",
            "desc": "Déglacer le gras avec le vin blanc, évaporer l'alcool, puis ajouter tomates et piment. Laisser mijoter 12-15 min.",
            "timerMin": 12
          },
          {
            "title": "Assemblage et Pecorino",
            "desc": "Mélanger les bucatini al dente dans la sauce, couper le feu, incorporer le pecorino et surmonter de guanciale croustillant.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Mode Facile : Retirez le guanciale dès qu'il est bien doré et réservez-le à part. Cuisez la tomate dans son gras et déposez le guanciale croustillant au dernier moment sur l'assiette.",
        "proTip": "🏆 Chef Pro : Déglacage au vin blanc sec sur les parois très chaudes de la poêle pour dissoudre les sucs caramélisés. Tomates San Marzano écrasées à la main cuites à feu vif pour garder leur éclat."
      },
      "gricia": {
        "name": "Mezze Maniche alla Gricia",
        "shortDesc": "L'authentique \"Amatriciana blanche\" : pâtes, guanciale, pecorino et poivre noir.",
        "origin": "Grisciano / Rome antique",
        "difficulty": "Moyenne",
        "history": "La mère ancestrale des pâtes romaines : la Carbonara et l'Amatriciana en sont directement issues.",
        "scienceTip": "L'onctuosité repose intégralement sur l'émulsion mécanique du gras de porc avec l'eau d'amidon.",
        "ingredients": {
          "pasta": {
            "name": "Mezze Maniche rayées au bronze",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale affiné en bâtonnets",
            "basePerPerson": 55,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano AOP moyennement affiné",
            "basePerPerson": 40,
            "unit": "g"
          },
          "pepper": {
            "name": "Poivre noir concassé",
            "basePerPerson": 2.5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Friture Douce du Guanciale",
            "desc": "Colorer le guanciale jusqu'à ce qu'il soit croustillant à l'extérieur et fondant au cœur. Réserver 2/3 des lardons.",
            "timerMin": 8
          },
          {
            "title": "Liaison à l'Eau Amylacée",
            "desc": "Verser une louche d'eau de cuisson bouillante avec le poivre dans la graisse pour créer un bouillon laiteux.",
            "timerMin": 2
          },
          {
            "title": "Mantecatura Hors du Feu",
            "desc": "Sauter les pâtes 60s, éteindre le feu, attendre 30s, saupoudrer de pecorino et fouetter pour obtenir une crème brillante.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Mode Facile : Versez l'eau de cuisson par petits filets progressifs sur le gras fondu du guanciale. Ne jetez jamais le pecorino au fond de la poêle chaude : liez en faisant sauter en l'air.",
        "proTip": "🏆 Chef Pro : Émulsion biphasique parfaite entre lipides nobles et eau amidonnée. Poivre noir concassé au mortier et torréfié à sec à 150°C avant la risottatura pour libérer la pipérine."
      },
      "saltimbocca": {
        "category": "secondi",
        "name": "Saltimbocca alla Romana",
        "shortDesc": "Fines escalopes de veau de lait, jambon cru doux, sauge fraîche et beurre clarifié déglacées au vin blanc sec.",
        "origin": "Rome (Rione Regola, fin du XIXe siècle)",
        "difficulty": "Facile (Cuisson express en 90 secondes)",
        "history": "Mentionné en 1891 par Pellegrino Artusi après les avoir dégustés dans l'auberge romaine historique \"Le Venete\" : un chef-d'œuvre qui \"saute en bouche\".",
        "scienceTip": "Réaction de Maillard fulgurante à 160°C sur la seule face farinée du veau. Hors du feu, le fond de poêle est monté au beurre froid et au vin blanc (beurre monté), nappant la viande d'un jus soyeux et laqué.",
        "ingredients": {
          "veal": {
            "name": "Fines escalopes de noix de veau de lait (3 mm d'épaisseur)",
            "basePerPerson": 160,
            "unit": "g"
          },
          "prosciutto": {
            "name": "Jambon cru doux affiné de qualité supérieure",
            "basePerPerson": 50,
            "unit": "g"
          },
          "sage": {
            "name": "Feuilles entières de sauge fraîche",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "butter": {
            "name": "Beurre doux de qualité (pour dorer et monter la sauce)",
            "basePerPerson": 25,
            "unit": "g"
          },
          "wine": {
            "name": "Vin blanc sec italien (Frascati Superiore DOC)",
            "basePerPerson": 30,
            "unit": "ml"
          },
          "flour": {
            "name": "Farine de blé (uniquement pour la face inférieure de la viande)",
            "basePerPerson": 10,
            "unit": "g"
          },
          "pepper": {
            "name": "Poivre noir fraîchement moulu (ne pas saler le jambon)",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Aplatissage et Épinglage",
            "desc": "Aplatissez les escalopes entre deux feuilles de papier sulfurisé pour les rendre très fines (3 mm). Disposez sur chaque tranche une fine tranche de jambon et une feuille de sauge. Fixez au centre avec un cure-dent à plat comme une épingle.",
            "timerMin": 5
          },
          {
            "title": "Farinage Scientifique de la Base",
            "desc": "Farinez légèrement UNIQUEMENT la face inférieure de la viande (celle au contact de la poêle), en tapotant l'excédent. Ne touchez jamais le jambon ni la sauge avec la farine.",
            "timerMin": 2
          },
          {
            "title": "Saisie Express à Feu Vif",
            "desc": "Faites fondre les 2/3 du beurre dans la poêle à feu vif. Déposez les saltimbocca côté fariné. Laissez saisir sans y toucher pendant 60 à 80 secondes pour former une croûte dorée.",
            "timerMin": 2
          },
          {
            "title": "Déglacage et Montage au Beurre Monté",
            "desc": "Retournez les saltimbocca 15 secondes seulement côté jambon. Déglacez au vin blanc en laissant l'alcool s'évaporer. Réservez la viande au chaud. Hors du feu, ajoutez le reste de beurre bien froid dans la poêle et agitez vivement pour émulsionner un jus laqué et velouté.",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Mode Facile : Farinez uniquement la face inférieure de la viande (jamais le jambon). Cuisez à couvert à feu moyen pendant 60 secondes : la viande restera d'un moelleux incomparable.",
        "proTip": "🏆 Chef Pro : Déglacage au vin blanc à feu très vif (160°C) pour former un jus nappant et brillant, monté au dernier instant avec une noix de beurre froid."
      },
      "coda": {
        "category": "secondi",
        "name": "Coda alla Vaccinara",
        "shortDesc": "Queue de bœuf mijotée à feu très doux pendant 4 heures avec céleri croquant, tomates San Marzano, raisins secs, pignons et cacao amer.",
        "origin": "Rome (Rione Testaccio / Quinto Quarto)",
        "difficulty": "Moyenne (Mijotage prolongé à basse température)",
        "history": "Reine absolue de la cuisine des abats (Quinto Quarto), née dans les auberges des abattoirs de Testaccio où les écorcheurs préparaient la queue avec beaucoup de céleri pour l'attendrir.",
        "scienceTip": "Le collagène de la queue s'hydrolyse en une succulente gélatine fondante uniquement entre 80°C et 85°C lors d'un léger frémissement (\"pipare\"). Le cacao pur et les raisins composent l'équilibre aigre-doux renaissant qui allège le palais.",
        "ingredients": {
          "tail": {
            "name": "Queue de bœuf coupée en tronçons réguliers",
            "basePerPerson": 350,
            "unit": "g"
          },
          "celery": {
            "name": "Côtes de céleri blanc tendres et croquantes",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Tomates pelées San Marzano AOP écrasées à la main",
            "basePerPerson": 200,
            "unit": "g"
          },
          "wine": {
            "name": "Vin rouge charpenté (Cesanese del Piglio)",
            "basePerPerson": 60,
            "unit": "ml"
          },
          "lard": {
            "name": "Hachis de guanciale avec carotte et oignon",
            "basePerPerson": 25,
            "unit": "g"
          },
          "cocoa": {
            "name": "Cacao pur amer en poudre",
            "basePerPerson": 2,
            "unit": "g"
          },
          "pinenuts": {
            "name": "Pignons torréfiés et raisins de Corinthe réhydratés",
            "basePerPerson": 10,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Saisie et Coloration des Tronçons",
            "desc": "Dans une cocotte en fonte, faites fondre le hachis de guanciale. Ajoutez les morceaux de queue et faites-les dorer sur toutes les faces à feu vif pendant 10 minutes pour bien les caraméliser.",
            "timerMin": 10
          },
          {
            "title": "Déglacage au Vin Rouge et Tomate",
            "desc": "Déglacez avec le vin rouge corsé en laissant l'alcool s'évaporer complètement. Ajoutez les tomates concassées, du sel et un tour généreux de moulin à poivre. Portez à doux frémissement.",
            "timerMin": 10
          },
          {
            "title": "Hydrolyse Lente du Collagène",
            "desc": "Couvrez hermétiquement et baissez le feu au minimum : la sauce doit juste frémir doucement à 80-85°C pendant 3 heures et demie, jusqu'à ce que la viande se détache spontanément de l'os.",
            "timerMin": 180
          },
          {
            "title": "La Touche Maître : Céleri & Cacao",
            "desc": "Blanchissez les branches de céleri 3 minutes dans de l'eau bouillante salée, puis ajoutez-les à la queue avec les pignons, les raisins et le cacao délayé dans une louche de sauce. Laissez mijoter 20 minutes avant de servir.",
            "timerMin": 20
          }
        ],
        "easyTip": "💡 Mode Facile : Pour gagner du temps, lancez les 45 premières minutes en autocuiseur puis poursuivez à découvert à feu doux pour faire réduire et épaissir la sauce.",
        "proTip": "🏆 Chef Pro : Mijotage doux à 85°C pendant 4 heures pour transformer tout le collagène en gélatine fondante. Ajout canonique de cacao amer et pignons torréfiés dans les 15 dernières minutes."
      },
      "abbacchio": {
        "category": "secondi",
        "name": "Abbacchio alla Scottadito",
        "shortDesc": "Côtelettes d'agneau de lait marinées au romarin frais, ail nouveau et saindoux, grillées à feu très vif et dégustées brûlantes avec les doigts.",
        "origin": "Rome et Campagne Romaine",
        "difficulty": "Facile (Cuisson rapide à haute température)",
        "history": "Appelées \"scottadito\" (brûle-doigts) car la coutume romaine exige de croquer les côtelettes à peine retirées de la braise, en se brûlant délicieusement les doigts sans attendre.",
        "scienceTip": "La chair délicate de l'agneau de lait réclame une chaleur de contact intense (220-250°C) pour caraméliser l'extérieur en 2 minutes par face, tout en maintenant le cœur rosé et juteux à 56-58°C.",
        "ingredients": {
          "chops": {
            "name": "Côtelettes fraîches d'agneau de lait",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "rosemary": {
            "name": "Romarin frais et thym sauvage hachés",
            "basePerPerson": 3,
            "unit": "g"
          },
          "garlic": {
            "name": "Gousses d'ail nouveau écrasées en chemise",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Huile d'olive vierge extra ou saindoux artisanal",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "lemon": {
            "name": "Quartiers de citron frais pour le service",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "salt": {
            "name": "Gros sel concassé et poivre noir moulu",
            "basePerPerson": 3,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Marinade Aromatique à Froid",
            "desc": "Massez les côtelettes avec l'huile ou le saindoux, le hachis de romarin, l'ail écrasé et le poivre. Laissez reposer à température ambiante pendant 15 à 20 minutes.",
            "timerMin": 15
          },
          {
            "title": "Chauffe Intense du Gril en Fonte",
            "desc": "Chauffez votre poêle gril en fonte ou grille de braise jusqu'à ce qu'elle fume légèrement (230-250°C). La surface doit être brûlante pour saisir instantanément.",
            "timerMin": 5
          },
          {
            "title": "Grillade Éclair 2 Minutes par Face",
            "desc": "Disposez les côtelettes espacées sur la grille. Cuisez 2 minutes sans les bouger, retournez et cuisez encore 2 minutes. Salez uniquement au moment de retourner.",
            "timerMin": 4
          },
          {
            "title": "Service Brûlant \"Scottadito\"",
            "desc": "Dressez sans attendre sur un plat chaud avec des quartiers de citron. Savourez impérativement avec les doigts en tenant l'os encore brûlant !",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Mode Facile : Faites mariner les côtelettes 15 minutes avec un filet d'huile, romarin et ail écrasé. Chauffez vivement votre poêle grill pour éviter qu'elles n'attachent.",
        "proTip": "🏆 Chef Pro : Choc thermique direct à 230°C pendant 90 secondes par face. Assaisonnement strict en fleur de sel à la sortie du gril pour préserver le jus intramusculaire."
      },
      "carciofigiudia": {
        "category": "contorni",
        "name": "Carciofi alla Giudia",
        "shortDesc": "L'icône séculaire du Ghetto Juif : artichaut romain en double friture dorée épanoui comme une rose croustillante.",
        "origin": "Rome (Ghetto Juif, XVIe siècle)",
        "difficulty": "Haute (Tournage précis en spirale et friture à double température)",
        "history": "Né dans les foyers judéo-romains pour marquer la rupture du jeûne du Yom Kippour : les artichauts entiers s'ouvrent en fleurs dorées croustillantes.",
        "scienceTip": "LA DOUBLE FRITURE SCIENTIFIQUE : Le premier bain à 140°C cuit le cœur et la tige jusqu'à une texture fondante comme du beurre. Le second bain flash à 175-180°C vaporise instantanément l'eau des pétales externes, les transformant en chips dorées ultra-craquantes.",
        "ingredients": {
          "artichoke": {
            "name": "Artichauts romanesques sans épines (Mammole Romanesche)",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Huile d'olive vierge extra pour friture en immersion",
            "basePerPerson": 250,
            "unit": "ml"
          },
          "lemon": {
            "name": "Citron frais pour aciduler l'eau de parage",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "salt": {
            "name": "Sel fin et poivre noir pour assaisonner le cœur",
            "basePerPerson": 2,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Parage en Spirale de l'Artichaut",
            "desc": "Éliminez les feuilles extérieures coriaces en tournant l'artichaut avec un couteau d'office comme pour peler une orange. Pelez la tige et coupez la pointe des feuilles pour former un dôme parfait.",
            "timerMin": 10
          },
          {
            "title": "Première Friture à 140°C (Cuisson du Cœur)",
            "desc": "Chauffez un bain d'huile à 140°C. Immergez les artichauts tête en bas pendant 10 à 12 minutes jusqu'à ce qu'une fourchette pénètre la base sans résistance. Égouttez et laissez tiédir 5 minutes.",
            "timerMin": 12
          },
          {
            "title": "Ouverture en Rosace et Assaisonnement",
            "desc": "Tapotez délicatement les artichauts l'un contre l'autre ou pressez-les sur une planche pour ouvrir les pétales vers l'extérieur comme une rose. Assaisonnez le cœur de sel et de poivre moulu.",
            "timerMin": 3
          },
          {
            "title": "Seconde Friture à 180°C (Pétales Croustillants)",
            "desc": "Montez l'huile à 175-180°C. Projetez quelques gouttes d'eau froide sur les pétales et replongez tête en bas en appuyant légèrement avec une pince pendant 2 minutes. Les pétales deviennent croustillants comme des chips.",
            "timerMin": 2
          }
        ],
        "easyTip": "💡 Mode Facile : Parez soigneusement en ôtant les 4 à 5 premières rangées de feuilles dures. Plongez dans une eau citronnée pour prévenir l'oxydation avant friture.",
        "proTip": "🏆 Chef Pro : Double friture par immersion : d'abord à 140°C pour confire le cœur, puis ouverture en rosace et second plongeon à 180°C pendant 90 secondes pour cristalliser les pétales comme des chips."
      },
      "carciofiromana": {
        "category": "contorni",
        "name": "Carciofi alla Romana",
        "shortDesc": "Artichauts romains farcis de calament népéta sauvage, ail et persil, braisés doucement tête en bas en cocotte close.",
        "origin": "Rome et Campagne Romaine",
        "difficulty": "Moyenne (Parage soigné et braisage hermétique)",
        "history": "L'accompagnement printanier roi des dimanches romains. La mentuccia sauvage (calament), typique des ruines antiques, confère une signature aromatique inimitable.",
        "scienceTip": "Braisés tête en bas à 90-95°C scellés sous papier sulfurisé humide et couvercle lourd, les artichauts cuisent dans la vapeur de leur propre émulsion huile-vin, préservant les polyphénols sans noircir.",
        "ingredients": {
          "artichoke": {
            "name": "Artichauts romanesques à longue tige",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "mint": {
            "name": "Mentuccia sauvage romaine fraîche (calament népéta)",
            "basePerPerson": 3,
            "unit": "g"
          },
          "parsley": {
            "name": "Persil plat frais finement haché",
            "basePerPerson": 4,
            "unit": "g"
          },
          "garlic": {
            "name": "Gousses d'ail nouveau finement émincées",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "oil": {
            "name": "Huile d'olive vierge extra généreuse",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "wine": {
            "name": "Vin blanc sec ou eau pour le fond de braisage",
            "basePerPerson": 25,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Parage et Évidage Central",
            "desc": "Retirez les feuilles extérieures dures, pelez la tige et éboutez la pointe. Écartez délicatement les feuilles du centre avec les doigts pour ménager un puits pour la farce aromatique.",
            "timerMin": 10
          },
          {
            "title": "Farce à la Mentuccia Sauvage",
            "desc": "Hachez finement la menthe sauvage romaine, le persil, l'ail, le sel et le poivre. Garnissez généreusement le cœur de chaque artichaut en tassant les herbes en profondeur.",
            "timerMin": 5
          },
          {
            "title": "Disposition Tête en Bas dans la Cocotte",
            "desc": "Disposez les artichauts tête en bas, bien serrés les uns contre les autres dans une casserole haute. Arrosez d'huile d'olive vierge extra, de vin blanc et d'eau jusqu'à mi-hauteur des tiges.",
            "timerMin": 5
          },
          {
            "title": "Braisage à l'Étouffée à 90°C",
            "desc": "Appliquez un disque de papier sulfurisé mouillé directement sur les artichauts puis fermez avec le couvercle. Laissez mijoter à feu doux pendant 25 à 30 minutes jusqu'à ce que la tige soit tendre.",
            "timerMin": 30
          }
        ],
        "easyTip": "💡 Mode Facile : Disposez les artichauts tête en bas dans une casserole étroite à bords hauts, couverts à mi-hauteur d'eau et d'huile avec un couvercle pour cuire uniformément à l'étouffée.",
        "proTip": "🏆 Chef Pro : Farce traditionnelle de calament népéta (mentuccia), ail et mie de pain. Cuisson à l'étouffée hermétique à 92°C sous cloche pour une texture fondante comme du beurre."
      },
      "suppli": {
        "category": "contorni",
        "name": "Supplì al Telefono",
        "shortDesc": "La légendaire croquette romaine de riz au ragù corsé de bœuf, panure croustillante et cœur fondant filant de fior di latte.",
        "origin": "Rome (Trastevere, fin du XIXe siècle)",
        "difficulty": "Moyenne (Façonnage et friture en bain d'huile)",
        "history": "Surnommé \"al telefono\" car lorsqu'on sépare la croquette chaude en deux, la mozzarella fondue s'étire en un fil élastique continu évoquant le cordon torsadé des téléphones anciens.",
        "scienceTip": "Le riz cuit al dente doit refroidir sous 15°C pour induire la rétrogradation de l'amidon, qui soude les grains sans ajout d'œufs dans l'appareil. La friture à 170-175°C saisit la chapelure en une croûte hermétique protégeant le cœur filant.",
        "ingredients": {
          "rice": {
            "name": "Riz Carnaroli ou Arborio pour risotto",
            "basePerPerson": 80,
            "unit": "g"
          },
          "ragu": {
            "name": "Ragù concentré et savoureux de bœuf mijoté",
            "basePerPerson": 70,
            "unit": "g"
          },
          "mozzarella": {
            "name": "Mozzarella fior di latte bien égouttée en bâtonnets",
            "basePerPerson": 30,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano AOP et parmesan râpés",
            "basePerPerson": 15,
            "unit": "g"
          },
          "eggs": {
            "name": "Œufs frais pour l'anglaise (panure)",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "breadcrumbs": {
            "name": "Chapelure fine pour une croûte ultra-croustillante",
            "basePerPerson": 35,
            "unit": "g"
          },
          "oil": {
            "name": "Huile de friture haute température (arachide ou olive)",
            "basePerPerson": 200,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Cuisson du Risotto au Ragù",
            "desc": "Cuisez le riz directement dans le ragù détendu de bouillon léger, en le gardant très al dente. Liez hors du feu avec le pecorino et étalez sur une large plaque.",
            "timerMin": 15
          },
          {
            "title": "Refroidissement et Rétrogradation de l'Amidon",
            "desc": "Laissez refroidir entièrement le riz pendant au moins 30 minutes au frais jusqu'à ce qu'il soit ferme et compact sous la main.",
            "timerMin": 30
          },
          {
            "title": "Façonnage Ovale et Cœur de Mozzarella",
            "desc": "Déposez une portion de riz dans la paume de la main, insérez au centre un bâtonnet de mozzarella et refermez en façonnant une croquette ovoïde bien hermétique.",
            "timerMin": 10
          },
          {
            "title": "Double Panure et Friture à 175°C",
            "desc": "Passez le supplì dans l'œuf battu puis dans la chapelure fine. Plongez dans l'huile à 175°C pendant 3 à 4 minutes jusqu'à une belle robe ambrée. Servez brûlant pour l'effet de fil !",
            "timerMin": 4
          }
        ],
        "easyTip": "💡 Mode Facile : Préparez le risotto au ragù la veille ou réservez-le 2 heures au frais : le riz froid et raffermi se façonne facilement sans se désagréger.",
        "proTip": "🏆 Chef Pro : Double panure fine sans farine. Friture calibrée à 175°C en bain profond : cœur de fior di latte filant à 60°C et croûte croustillante millimétrique."
      },
      "maritozzo": {
        "category": "dolci",
        "name": "Maritozzo con la Panna",
        "shortDesc": "La légendaire petite brioche romaine parfumée aux agrumes et à la vanille, fendue et généreusement garnie de crème fouettée aérienne.",
        "origin": "Rome (Époque romaine et tradition renaissante)",
        "difficulty": "Moyenne (Fermentation biologique contrôlée)",
        "history": "Autrefois la seule douceur tolérée pendant le jeûne de carême. À la Renaissance, le futur marié (\"maritozzo\") l'offrait à sa promise en y dissimulant une bague dans la chantilly.",
        "scienceTip": "Le réseau de gluten d'une farine de force (W 300-330) emprisonne le CO2 durant la pousse à 26-28°C. La cuisson à 180°C caramélise la croûte par réaction de Maillard tout en préservant une mie filante et légère comme un nuage.",
        "ingredients": {
          "flour": {
            "name": "Farine de gruau ou Manitoba de force (W320)",
            "basePerPerson": 75,
            "unit": "g"
          },
          "milk": {
            "name": "Lait entier frais tiède",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "sugar": {
            "name": "Sucre semoule pour la pâte briochée",
            "basePerPerson": 15,
            "unit": "g"
          },
          "yeast": {
            "name": "Levure fraîche de boulanger",
            "basePerPerson": 3,
            "unit": "g"
          },
          "oil": {
            "name": "Huile d'olive vierge extra douce ou beurre fondu",
            "basePerPerson": 12,
            "unit": "ml"
          },
          "cream": {
            "name": "Crème liquide entière fraîche à 35% de M.G. bien froide",
            "basePerPerson": 80,
            "unit": "ml"
          },
          "zest": {
            "name": "Zeste d'orange fraîchement râpé et vanille",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Pétrissage et Développement du Réseau Glutineux",
            "desc": "Délayez la levure dans le lait tiède avec une cuillère de sucre. Incorporez à la farine et pétrissez vigoureusement avec le sucre, l'huile et les zestes jusqu'à obtenir une pâte souple, lisse et élastique.",
            "timerMin": 15
          },
          {
            "title": "Première Pousse à 27°C",
            "desc": "Déposez le pâton dans un bol couvert de film alimentaire dans un endroit tiède (26-28°C) pendant 90 minutes jusqu'à ce qu'il double de volume.",
            "timerMin": 90
          },
          {
            "title": "Façonnage des Petits Pains Ovales",
            "desc": "Divisez en pâtons ovales allongés (en forme de ballon de rugby). Déposez sur plaque chemisée et laissez lever à couvert pendant encore 60 minutes.",
            "timerMin": 60
          },
          {
            "title": "Cuisson à 180°C et Lustrage au Sirop",
            "desc": "Enfournez à 180°C pendant 12 à 14 minutes jusqu'à dorure brillante. Dès la sortie du four, lustrez au pinceau avec un sirop de sucre pour donner un fini laqué.",
            "timerMin": 14
          },
          {
            "title": "Fente et Garnissage à la Spatule",
            "desc": "Laissez refroidir totalement. Fendez le dessus de la brioche dans la longueur sans la séparer. Montez la crème très froide avec un voile de sucre glace et garnissez généreusement en lissant les bords à la spatule.",
            "timerMin": 5
          }
        ],
        "easyTip": "💡 Mode Facile : Placez le cul-de-poule et les fouets 15 minutes au congélateur avant de monter la crème : elle prendra deux fois plus vite et gardera une tenue impeccable.",
        "proTip": "🏆 Chef Pro : Brioche romaine à pousse biologique lente à 26°C, glaçage à froid au sirop de sucre et crème fleurette fouettée à 38% de matière grasse sucrée à 10% de sucre glace."
      }
    },
    "catAll": "Toutes les Recettes",
    "catPrimi": "🍝 Pâtes (The Big 4)",
    "catSecondi": "🥩 Plats Principaux",
    "catContorni": "🥬 Frits & Garnitures",
    "catDolci": "🥐 Desserts Romains",
    "portionSize": "Portion de Pâtes :",
    "portionStandard": "Standard (100g)",
    "portionAbbondante": "🍝 Généreuse (130g)",
    "servingsHintAbbondante": "🍝 Portion Généreuse d'Osteria : {amount} de pâtes par personne",
    "troubleGuancialeTitle": "Le guanciale a brûlé ou est resté caoutchouteux ?",
    "troubleGuancialeSol": "Si caoutchouteux : feu trop vif, le gras profond n'a pas fondu (comptez 8 à 10 min à feu très doux). Si brûlé : jetez les morceaux noircis pour éliminer l'amertume, filtrez la graisse claire et ajoutez du poivre fraîchement torréfié pour rééquilibrer les arômes.",
    "troubleAcidTitle": "La sauce tomate de l'Amatriciana est trop acide ou aqueuse ?",
    "troubleAcidSol": "Les tomates pelées du commerce contiennent souvent de l'acide citrique. Ajoutez une pointe infinitésimale de bicarbonate de soude (réaction chimique neutralisante immédiate) ou une cuillère à café de gras de guanciale, puis laissez réduire 2 minutes à feu vif pour concentrer les sucres.",
    "troubleCarciofiTitle": "Les artichauts à la juive sont durs ou ne s'ouvrent pas en fleur ?",
    "troubleCarciofiSol": "Avant le second bain à 180°C, saisissez l'artichaut par la tige et tapotez doucement la tête à l'envers sur une planche pour écarter les bractées en corolle. Si le cœur est encore ferme, prolongez de 4 minutes la première cuisson à 140°C.",
    "troubleSuppliTitle": "Les supplì s'ouvrent ou la mozzarella s'échappe dans l'huile ?",
    "troubleSuppliSol": "N'utilisez jamais de riz tiède : laissez-le reposer au réfrigérateur au moins 2 heures pour que l'amidon se fige par rétrogradation. Égouttez la mozzarella en bâtonnets pendant 1 heure. Réalisez toujours une DOUBLE panure (œuf battu + chapelure fine) et faites frire strictement à 175°C.",
    "troubleCodaTitle": "La queue de bœuf est encore dure après deux heures de cuisson ?",
    "troubleCodaSol": "Le collagène bovin nécessite une hydrolyse à 80-85°C pendant au moins 3 heures et demie. N'augmentez surtout pas le feu. Ajoutez un demi-verre de bouillon ou d'eau chaude, couvrez hermétiquement et poursuivez à feu très doux jusqu'à ce que la chair s'effiloche à la fourchette.",
    "troubleSaltimboccaTitle": "Les saltimbocca sont secs ou le jambon a durci ?",
    "troubleSaltimboccaSol": "Le veau ne doit jamais cuire plus de 60 à 80 secondes côté farine. Le côté jambon et sauge ne doit toucher la poêle que 15 à 20 secondes, afin d'éviter que la déshydratation ne racornisse la charcuterie.",
    "troubleCreamTitle": "La crème du Maritozzo retombe ou tourne en beurre ?",
    "troubleCreamSol": "Si la crème dépasse 10°C, la membrane des globules gras se rompt. Utilisez une crème liquide glacée (3-4°C) et placez le bol et les fouets au congélateur 15 minutes avant de battre. Si elle commence à grainer, ajoutez 2 cuillères à soupe de crème liquide très froide et incorporez délicatement à la spatule."
  },
  "de": {
    "appName": "RomaLab Wissenschaftlich",
    "appTagline": "Authentische Römische Küche & Kinetik der Kulinarischen Emulsion",
    "splashVersion": "v1.1.0 Pro • Globale Mehrsprachige Ausgabe",
    "navRecipes": "Rezepte",
    "navCalculator": "Portionen",
    "navLiveKitchen": "Küche",
    "navThermal": "Thermik",
    "navScience": "Wissenschaft",
    "btnLanguage": "Sprache",
    "btnUnits": "Einheiten",
    "btnTheme": "Design",
    "btnGuide": "Anleitung",
    "btnMenu": "Menü",
    "btnShare": "Teilen",
    "btnTroubleshoot": "SOS-Hilfe",
    "selectLanguage": "Sprache Wählen",
    "close": "Schließen",
    "servings": "Personenanzahl",
    "servingsHint": "Standardportion: {amount} Pasta pro Person",
    "ingredientsTitle": "Wissenschaftliche Grammdosierung",
    "ingredientsSubtitle": "Automatische Verhältnisberechnung von Eiern, Edelfett und Stärkewasser.",
    "emulsionThermodynamics": "Thermisches Emulsionsfenster",
    "emulsionSubtitle": "Die Küchenphysik zwischen Stärke, Schweinebacken-Lipiden und Eigelbproteinen.",
    "thermalSafeZone": "Sicherer Emulsionsbereich:",
    "thermalCold": "Zu Kalt (<50°C)",
    "thermalOptimal": "Goldene Emulsionszone (58-65°C)",
    "thermalDanger": "Rührei-Gefahr (>68°C)",
    "startCooking": "Schritt-für-Schritt mit Küchentimer",
    "cookingSubtitle": "Folgen Sie den Phasen live für perfekte Zeiten und Temperaturen.",
    "step": "Schritt",
    "timer": "Timer",
    "start": "Starten",
    "pause": "Pause",
    "reset": "Zurücksetzen",
    "done": "Fertig!",
    "alertTempDanger": "ACHTUNG: Temperatur > 68°C! Rühreigefahr! Hitze sofort abschalten.",
    "alertTempOptimal": "PERFEKTE TEMPERATUR (58-65°C): Abseits der Hitze energisch emulgieren.",
    "alertTempCold": "Temperatur zu niedrig (< 50°C): Sauce bindet nicht seidig ab.",
    "modeEasy": "⭐ Leicht (Sicherheitsnetz)",
    "modePro": "🏆 Pro (Traditionsmeister)",
    "modeEasyLabel": "⭐ Leicht (Geführt)",
    "modeEasyDesc": "Techniken mit Sicherheitspuffer, stabiler Creme und milderer Käsemischung.",
    "modeProDesc": "Orthodoxe Vorschrift: 100% frisches Eigelb, reiner Pecorino Romano DOP und Stärke-Risottatura.",
    "hintYolks": "💡 Tipp: 1 Eiweiß zugeben für maximale Geschmeidigkeit der Emulsion",
    "hintPecorino": "💡 Tipp: Empfohlene Mischung 50% Pecorino + 50% Parmigiano Reggiano",
    "hintWater": "💡 Tipp: Warmes Kochwasser (55°C) und Käse mit einem Schneebesen glatt rühren",
    "substitutionsTitle": "Internationaler Zutaten- & Ersatzratgeber",
    "substitutionsSubtitle": "Klassische Regeln, Chemie und kulinarische Kompromisse im Ausland.",
    "subGuancialeTitle": "🥓 Guanciale vs Bacon vs Pancetta",
    "guancialeNote": "GUANCIALE (Luftgetrocknete Schweinebacke): Entscheidend. Besitzt ein Edelfett mit niedrigem Schmelzpunkt (32-35°C). Akzeptable Alternative: Ungeräucherte italienische Pancetta. VERMEIDEN: Stark geräucherter US-Bacon mit Zuckerzusatz.",
    "subPecorinoTitle": "🧀 Pecorino Romano DOP & Käseschnitt",
    "pecorinoNote": "Würziger, salziger Schafskäse. Wenn er zu intensiv ist, empfehlen römische Spitzenköche den Gourmet-Schnitt: 70% Pecorino Romano DOP und 30% Parmigiano Reggiano 24 Monate.",
    "subPastaTitle": "🌾 Bronzegezogene Pasta & Amylose-Stärke",
    "pastaNote": "Die raue Bronze-Oberfläche gibt viel Amylose ins Kochwasser ab. Diese Stärke wirkt als natürlicher Emulgator, der Wasser und Fett unlösbar verbindet.",
    "emergencyTitle": "🚨 Notfall-Vorratskammer & Ersatztricks",
    "emergencySubtitle": "Im Ausland ohne Originalzutaten? Physikalische Kniffe für ein erstklassiges Ergebnis.",
    "emGuancialeTitle": "🥓 Wenn Guanciale fehlt:",
    "emGuancialeOpt1": "✅ Option 1 (Sehr gut): Hochwertige ungeräucherte Pancetta. Salzen des Kochwassers leicht reduzieren.",
    "emGuancialeOpt2": "⚠️ Option 2 (Notfall): Frühstücksspeck / Bacon. Rettungstrick: Scheiben 2 Min. in kochendem Wasser blanchieren, um Raucharoma und Zucker zu entziehen!",
    "emPecorinoTitle": "🧀 Wenn Pecorino Romano fehlt:",
    "emPecorinoOpt1": "✅ Option 1 (Empfohlen): 50% Pecorino (auch sardo/toscano) + 50% Parmesan.",
    "emPecorinoOpt2": "⚠️ Option 2: Reiner Parmigiano Reggiano. 1g Salz und etwas extra Pfeffer zugeben.",
    "emStarchTitle": "🌾 Bei glatter Pasta (wenig Stärkeabgabe):",
    "emStarchOpt1": "✅ Der Kleine-Topf-Trick: Pasta in nur halber Wassermenge kochen (z.B. 1.5L für 300g). Das Wasser wird zu milchiger Stärkeessenz!",
    "emStarchOpt2": "🔬 Molekularer Küchenkniff: 1/2 TL Speisestärke in kaltem Wasser auflösen und in die Pfanne geben: emulgiert sekundenschnell.",
    "troubleshootTitle": "Kulinarische Erste Hilfe",
    "troubleshootDesc": "Ging etwas in der Pfanne schief? So rettet die Physik das Gericht.",
    "troubleClumpTitle": "Pecorino hat zähe, gummiartige Klumpen gebildet?",
    "troubleClumpSol": "Das Kasein hat über 65°C Molke ausgestoßen. Pfanne von der Hitze nehmen, 2–3 EL lauwarmes stärkereiches Nudelwasser (55°C) zugeben und in einem Becher mit Stabmixer oder kleinem Schneebesen cremig schlagen, bevor alles unter die Pasta gehoben wird.",
    "troubleCurdleTitle": "Das Ei hat begonnen zu stocken (Rührei-Effekt)?",
    "troubleCurdleSol": "Die Pfanne sofort von der Hitzequelle nehmen. Die Pasta in eine kalte Schüssel umfüllen, 1 Eiswürfel oder 2 EL kaltes Wasser zugeben und kräftig aufschlagen. Falls bereits Klümpchen sichtbar sind, 5 Sekunden mit dem Stabmixer und etwas Stärkewasser pürieren: Das Lecithin emulgiert erneut.",
    "troubleSaltyTitle": "Das Gericht schmeckt übermäßig salzig?",
    "troubleSaltySol": "Gereifter Pecorino Romano DOP enthält von Natur aus viel Salz. Goldene Regel: Nudelwasser nur halb so stark salzen (max. 5g/L). Soforthilfe beim fertigen Gericht: Mit ungesalzenem warmem Wasser strecken und frisch gerösteten schwarzen Pfeffer zugeben (Piperin mildert die Salzschärfe ab).",
    "recipes": {
      "carbonara": {
        "name": "Spaghetti alla Carbonara",
        "shortDesc": "Frisches Eigelb, knusprige Guanciale, Pecorino Romano DOP und gerösteter Pfeffer.",
        "origin": "Rom (1944)",
        "difficulty": "Mittel (Temperaturempfindlich)",
        "history": "Aus der Begegnung römischer Kochkunst und alliierten Rationen entstanden, heute weltweites Kulturgut.",
        "scienceTip": "Eigelb enthält Lecithin, einen starken natürlichen Emulgator. Bei 64-66°C hüllt das Eiweiß das Fett seidig ein.",
        "ingredients": {
          "pasta": {
            "name": "Bronzegezogene Spaghetti oder Rigatoni",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Luftgetrocknete Schweinebacke (Guanciale)",
            "basePerPerson": 60,
            "unit": "g"
          },
          "yolks": {
            "name": "Frische Eidotter (Größe L)",
            "basePerPerson": 1,
            "extraPadella": 1,
            "unit": "pz"
          },
          "pecorino": {
            "name": "Fein geriebener Pecorino Romano DOP",
            "basePerPerson": 35,
            "unit": "g"
          },
          "pepper": {
            "name": "Frisch gemahlener schwarzer Pfeffer",
            "basePerPerson": 2.5,
            "unit": "g"
          },
          "salt": {
            "name": "Salz für Nudelwasser (halbiert: 5g/L)",
            "basePerPerson": 5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Guanciale schneiden & anbraten",
            "desc": "In 6mm dicke Streifen schneiden. In kalte Pfanne ohne Öl geben, bei milder Hitze 10-12 Min. sanft auslassen, bis außen goldbraun-kross und innen zart.",
            "timerMin": 10
          },
          {
            "title": "Kalte \"Carbocrema\" anrühren",
            "desc": "Eigelbe mit Pecorino und frisch gemahlenem Pfeffer cremig rühren. 2 EL lauwarmes Schweinefett unterschlagen zur schonenden Temperierung.",
            "timerMin": 3
          },
          {
            "title": "Nudeln kochen & Stärke gewinnen",
            "desc": "In sparsam gesalzenem Wasser (5g/L) kochen. 2 Min. vor Packungszeit abgießen, 1 Tasse stärkereiches Wasser auffangen.",
            "timerMin": 8
          },
          {
            "title": "Risottieren in der Pfanne",
            "desc": "Pasta direkt in die Pfanne zum heißen Fett geben, mit etwas Kochwasser 1 Min. kräftig schwenken.",
            "timerMin": 1
          },
          {
            "title": "Mantecatura abseits der Hitze",
            "desc": "HITZE ABSCHALTEN & PFANNE WEGSTELLEN. 45 Sek. warten bis 60-65°C erreicht sind. Pasta in die Eigelbcreme geben, rasch schwenken und mit krossem Guanciale krönen.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: 2 EL stärkereiches Nudelwasser abschöpfen und auf ca. 50°C abkühlen lassen, um Eigelb und Pecorino zu einer geschmeidigen Paste zu verrühren, bevor alles zur Pasta kommt. IMMER abseits der Hitzequelle emulgieren.",
        "proTip": "🏆 Pro Chef: Ausschließlich frische Eigelbe aus Freilandhaltung verwenden, das Guanciale-Fett sanft unter 80°C ohne Bräunungsbitterkeit auslassen und die Wellen-Mantecatura („ad onda“) bei exakt 62–65°C ausführen, um die maximale Lecithin-Viskosität zu erzielen."
      },
      "cacioepepe": {
        "name": "Tonnarelli Cacio e Pepe",
        "shortDesc": "Nur drei Zutaten: stärkereiche Pasta, Pecorino Romano DOP und gerösteter Pfeffer.",
        "origin": "Römisches Umland",
        "difficulty": "Hoch (Präzise Hitze)",
        "history": "Jahrhundertealtes Hirtenessen auf den Weiden Latiums: nahrhafte, haltbare Zutaten.",
        "scienceTip": "Pecorino schmilzt ab 55°C, klumpt jedoch über 65°C irreversibel. Stärke bildet das schützende Emulsionsnetz.",
        "ingredients": {
          "pasta": {
            "name": "Frische Tonnarelli oder raue Spaghetti",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pecorino": {
            "name": "Puderfein geriebener Pecorino Romano DOP",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pepper": {
            "name": "Schwarze Pfefferkörner zum Rösten",
            "basePerPerson": 3.5,
            "unit": "g"
          },
          "water": {
            "name": "Konzentriertes Nudelstärkewasser",
            "basePerPerson": 40,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Pfeffer anrösten",
            "desc": "Pfeffer grob mörsern. Trocken in der Pfanne 2 Min. rösten, dann mit einer Kelle kochendem Nudelwasser ablöschen.",
            "timerMin": 2
          },
          {
            "title": "Kalte Käsepaste anrühren",
            "desc": "Pecorino mit warmem Nudelwasser (ca. 55-60°C) schluckweise mit Schneebesen zu einer dichten, klumpenfreien Paste verrühren.",
            "timerMin": 3
          },
          {
            "title": "Fertiggaren in der Pfanne",
            "desc": "Tonnarelli al dente in die Pfanne mit Pfefferfond geben und unter starkem Schwenken Stärke konzentrieren.",
            "timerMin": 2
          },
          {
            "title": "Mantecatura ohne Hitze",
            "desc": "Pfanne von der Herdplatte nehmen (<60°C). Käsepaste unterziehen und schwungvoll zu einer seidigen Welle emulgieren.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Den fein geriebenen Pecorino vorab in einer separaten Schüssel mit ca. 50°C lauwarmem Wasser mit dem Schneebesen zu einer homogenen Paste anrühren. Erst zur Pasta geben, wenn die Pfanne vollständig von der Kochstelle genommen wurde.",
        "proTip": "🏆 Pro Chef: Maximale Stärkeextraktion durch energisches Risottieren der Pasta in der Pfanne in den letzten 3 Minuten. Dynamische Mantecatura bei 58°C: Die hohe Amylose-Konzentration muss Wasserstoffbrückenbindungen mit dem Kasein des Käses eingehen."
      },
      "amatriciana": {
        "name": "Bucatini all'Amatriciana",
        "shortDesc": "Krosser Guanciale, San-Marzano-Tomaten, Pecorino Romano DOP und trockener Weißwein.",
        "origin": "Amatrice / Rom",
        "difficulty": "Mittel",
        "history": "Rote Evolution der weißen Gricia nach Einführung der Tomate in Mittelitalien.",
        "scienceTip": "Die feine Fruchtsäure der San-Marzano-Tomaten balanciert den Fettgehalt des Guanciale perfekt aus.",
        "ingredients": {
          "pasta": {
            "name": "Bucatini oder Mezzi Rigatoni al bronzo",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale in Streifen",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pomodoro": {
            "name": "San-Marzano-Tomaten handzerdrückt",
            "basePerPerson": 120,
            "unit": "g"
          },
          "pecorino": {
            "name": "Geriebener Pecorino Romano DOP",
            "basePerPerson": 30,
            "unit": "g"
          },
          "vino": {
            "name": "Trockener Weißwein zum Ablöschen",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "chili": {
            "name": "Rote Peperoncino-Chili (optional)",
            "basePerPerson": 0.5,
            "unit": "pz"
          }
        },
        "steps": [
          {
            "title": "Guanciale anbraten",
            "desc": "Guanciale sanft bräunen. Knusprige Stücke entnehmen und warm beiseitestellen.",
            "timerMin": 8
          },
          {
            "title": "Ablöschen & Tomatensugo",
            "desc": "Bratfett mit Weißwein ablöschen, Alkohol einkochen, Tomaten und Peperoncino zugeben. 12-15 Min. einköcheln.",
            "timerMin": 12
          },
          {
            "title": "Mischen & vollenden",
            "desc": "Bucatini 1 Min. in der Sauce schwenken. Herd ausschalten, reichlich Pecorino einrühren und mit krossem Guanciale servieren.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Das Guanciale herausheben, sobald es goldbraun ist, und beiseitestellen. Die Tomaten im ausgelassenen Fett schmoren und das krosse Guanciale erst ganz zum Schluss auf dem fertigen Teller anrichten, damit es herrlich knusprig bleibt.",
        "proTip": "🏆 Pro Chef: Den heißen Pfannenrand mit trockenem Weißwein ablöschen, um karamellisierte Röststoffe zu lösen. Handzerdrückte San-Marzano-Tomaten bei lebhafter Flamme kurz einkochen, um die frische Fruchtnote und Säurebalance perfekt zu bewahren."
      },
      "gricia": {
        "name": "Mezze Maniche alla Gricia",
        "shortDesc": "Die legendäre \"weiße Amatriciana\": Pasta, Guanciale, Pecorino und schwarzer Pfeffer.",
        "origin": "Grisciano / Antikes Rom",
        "difficulty": "Mittel",
        "history": "Die Ur-Mutter aller römischen Nudelgerichte: Carbonara und Amatriciana sind direkte Nachfahren.",
        "scienceTip": "Ohne Ei oder Tomate beruht die Cremigkeit ausschließlich auf der Emulsion von Stärke und reinem Schweinefett.",
        "ingredients": {
          "pasta": {
            "name": "Gerillte Mezze Maniche al bronzo",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale in Streifen",
            "basePerPerson": 55,
            "unit": "g"
          },
          "pecorino": {
            "name": "Mittelfeiner Pecorino Romano DOP",
            "basePerPerson": 40,
            "unit": "g"
          },
          "pepper": {
            "name": "Frisch gemahlener Pfeffer",
            "basePerPerson": 2.5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Guanciale auslassen",
            "desc": "Guanciale anbraten, bis er außen kross und innen zart ist. 2/3 kross beiseitestellen.",
            "timerMin": 8
          },
          {
            "title": "Stärkefond ansetzen",
            "desc": "Eine Kelle heißes Nudelwasser und Pfeffer zum Fett geben: bildet eine milchige Emulsion.",
            "timerMin": 2
          },
          {
            "title": "Mantecatura Finale",
            "desc": "Pasta 60 Sek. schwenken, Hitze aus, 30 Sek. ruhen lassen, Pecorino einrieseln lassen und zur Samtsauce aufschlagen.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: Immer nur schluckweise stärkereiches Nudelwasser zum ausgelassenen Guanciale-Fett geben. Den Pecorino niemals direkt auf den heißen Pfannenboden streuen, sondern durch Schwenken in der Luft cremig emulgieren.",
        "proTip": "🏆 Pro Chef: Perfekte zweiphasige Emulsion aus edlem Schweinefett und Stärke. Im Mörser grob zerstoßenen schwarzen Pfeffer bei 150°C trocken anrösten, um die volle aromatische Piperin-Komplexität vor dem Risottieren freizusetzen."
      },
      "saltimbocca": {
        "category": "secondi",
        "name": "Saltimbocca alla Romana",
        "shortDesc": "Zarte Kalbsschnitzel mit luftgetrocknetem Prosciutto und frischem Salbei, in Butter angebraten und mit trockenem Weißwein abgelöscht.",
        "origin": "Rom (Rione Regola, Ende des 19. Jahrhunderts)",
        "difficulty": "Leicht (Express-Garen in 90 Sekunden)",
        "history": "1891 von Gourmetlegende Pellegrino Artusi nach einem Besuch der historischen römischen Trattoria „Le Venete“ gerühmt: Ein kulinarisches Meisterwerk, das so köstlich ist, dass es sprichwörtlich „in den Mund springt“.",
        "scienceTip": "Blitzschnelle Maillard-Reaktion bei 160°C ausschließlich auf der bemehlten Fleischunterseite. Abseits der Herdplatte emulgiert der Bratensatz mit eiskalter Butter und Weißwein (Beurre Monté) zu einer seidigen Glanzsauce.",
        "ingredients": {
          "veal": {
            "name": "Hauchdünne Kalbsschnitzel aus der Oberschale (ca. 3 mm)",
            "basePerPerson": 160,
            "unit": "g"
          },
          "prosciutto": {
            "name": "Milder, luftgetrockneter Prosciutto Crudo von bester Qualität",
            "basePerPerson": 50,
            "unit": "g"
          },
          "sage": {
            "name": "Frische ganze Salbeiblätter",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "butter": {
            "name": "Gute Butter (zum Anbraten und Aufschlagen der Sauce)",
            "basePerPerson": 25,
            "unit": "g"
          },
          "wine": {
            "name": "Trockener italienischer Weißwein (Frascati Superiore DOC)",
            "basePerPerson": 30,
            "unit": "ml"
          },
          "flour": {
            "name": "Feines Weizenmehl (ausschließlich für die Fleischseite)",
            "basePerPerson": 10,
            "unit": "g"
          },
          "pepper": {
            "name": "Frisch gemahlener schwarzer Pfeffer (Schinken nicht salzen)",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Plattieren und Fixieren",
            "desc": "Die Kalbsschnitzel zwischen zwei Bögen Backpapier hauchdünn (ca. 3 mm) klopfen. Auf jedes Schnitzel eine Scheibe Prosciutto und ein Salbeiblatt legen. Mit einem hölzernen Zahnstocher wie mit einer Nadel flach feststecken.",
            "timerMin": 5
          },
          {
            "title": "Präzises Bemehlen der Fleischseite",
            "desc": "Ausschließlich die Fleischunterseite ganz zart mit Mehl bestäuben und überschüssiges Mehl vorsichtig abklopfen. Schinken und Salbei dürfen niemals mit Mehl in Kontakt kommen.",
            "timerMin": 2
          },
          {
            "title": "Express-Braten bei starker Hitze",
            "desc": "Zwei Drittel der Butter in einer breiten Pfanne aufschäumen lassen. Die Saltimbocca mit der bemehlten Seite nach unten hineinlegen. 60–80 Sekunden unbewegt scharf braten, bis eine feine Kruste entsteht.",
            "timerMin": 2
          },
          {
            "title": "Ablöschen und Beurre Monté Glanzsauce",
            "desc": "Die Saltimbocca für nur 15 Sekunden auf die Schinkenseite wenden. Mit trockenem Weißwein ablöschen und den Alkohol verdampfen lassen. Das Fleisch herausnehmen und warmhalten. Die Pfanne von der Hitze nehmen, die restliche kalte Butter kräftig einrühren und die seidige Sauce über das Fleisch löffeln.",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Easy Mode: Ausschließlich die Fleischunterseite bemehlen (niemals den Schinken). Bei mittlerer Hitze mit Deckel für 60 Sekunden garen: Das Kalbfleisch bleibt butterzart und saftig.",
        "proTip": "🏆 Pro Chef: Mit Weißwein bei maximaler Hitze (160°C Pfannendeglazur) ablöschen. Den Schmorsud abseits der Flamme mit eiskalter Butter zu einer samtig glänzenden Beurre Monté aufschlagen."
      },
      "coda": {
        "category": "secondi",
        "name": "Coda alla Vaccinara",
        "shortDesc": "Ochsenschwanz, 4 Stunden butterzart geschmort mit Staudensellerie, San-Marzano-Tomaten, Sultaninen, Pinienkernen und einem Hauch Bitterkakao.",
        "origin": "Rom (Rione Testaccio / Quinto Quarto)",
        "difficulty": "Mittel (Langes Schmoren bei niedriger Temperatur)",
        "history": "Die unangefochtene Königin der römischen Schlachtviertel-Küche (Quinto Quarto), entstanden in den Wirtshäusern rund um den alten Schlachthof von Testaccio, wo die Gerber („Vaccinari“) die Ochsenschwänze mit reichlich Sellerie zartkochten.",
        "scienceTip": "Das zähe Kollagen des Ochsenschwanzes hydrolysiert nur zwischen 80°C und 85°C bei kaum wahrnehmbarem Köcheln („pipare“) vollständig zu schmelzender Gelatine. Ungesüßter Kakao und Sultaninen schaffen die typische Renaissance-Agrodolce-Note, die den Gaumen erfrischt.",
        "ingredients": {
          "tail": {
            "name": "Ochsenschwanz, in gleichmäßige Wirbelstücke geschnitten",
            "basePerPerson": 350,
            "unit": "g"
          },
          "celery": {
            "name": "Zarte, knackige weiße Staudensellerie-Rippen",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Geschälte San-Marzano-Tomaten DOP, von Hand zerdrückt",
            "basePerPerson": 200,
            "unit": "g"
          },
          "wine": {
            "name": "Kräftiger Rotwein (z. B. Cesanese del Piglio DOC)",
            "basePerPerson": 60,
            "unit": "ml"
          },
          "lard": {
            "name": "Fein gehackter Guanciale mit Karotte und Zwiebel (Battuto)",
            "basePerPerson": 25,
            "unit": "g"
          },
          "cocoa": {
            "name": "Reines ungesüßtes Kakaopulver",
            "basePerPerson": 2,
            "unit": "g"
          },
          "pinenuts": {
            "name": "Geröstete Pinienkerne und eingeweichte Sultaninen",
            "basePerPerson": 10,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Kräftiges Anbraten der Fleischstücke",
            "desc": "In einem schweren Schmortopf das Guanciale-Battuto sanft auslassen. Die Ochsenschwanzstücke hineingeben und bei lebhafter Hitze ca. 10 Minuten rundherum scharf anbraten, bis sie goldbraun karamellisiert sind.",
            "timerMin": 10
          },
          {
            "title": "Ablöschen und Tomatenzugabe",
            "desc": "Mit kräftigem Rotwein ablöschen und den Alkohol vollständig einkochen lassen. Die handzerdrückten San-Marzano-Tomaten, Salz und frisch gemahlenen Pfeffer einrühren und sanft aufkochen.",
            "timerMin": 10
          },
          {
            "title": "Langsame Kollagen-Hydrolyse",
            "desc": "Den Topf mit einem schweren Deckel verschließen und die Hitze auf die kleinste Stufe drosseln (80–85°C). Etwa 3,5 Stunden ganz leise simmern lassen („pipare“), bis das Fleisch fast vom Knochen gleitet.",
            "timerMin": 180
          },
          {
            "title": "Das Meisterfinale: Sellerie und Kakao",
            "desc": "Die Selleriestücke 3 Minuten in Salzwasser blanchieren. Mit Pinienkernen, Sultaninen und dem in etwas heißem Sud aufgelösten Kakao in den Topf geben. Weitere 20 Minuten bei milder Hitze ziehen lassen.",
            "timerMin": 20
          }
        ],
        "easyTip": "💡 Easy Mode: Bei wenig Zeit den Schnellkochtopf für die ersten 45 Minuten nutzen, danach ohne Deckel bei milder Hitze sanft einköcheln lassen, bis die Sauce dickflüssig und dunkel wird.",
        "proTip": "🏆 Pro Chef: Sanftes Schmoren bei 85°C für volle 4 Stunden, um das zähe Kollagen vollständig in schmelzende Gelatine zu hydrolysieren. Echter ungesüßter Bitterkakao und geröstete Pinienkerne in den letzten 15 Minuten sind Pflicht."
      },
      "abbacchio": {
        "category": "secondi",
        "name": "Abbacchio alla Scottadito",
        "shortDesc": "Zarte Milchlammkoteletts, mariniert mit Rosmarin, Knoblauch und feinem Schmalz, bei starker Hitze gegrillt und glühend heiß mit den Fingern gegessen.",
        "origin": "Rom und die römische Campagna",
        "difficulty": "Leicht (Sehr schnelles Grillen bei hoher Temperatur)",
        "history": "So benannt („Scottadito“ = Fingerverbrenner), weil die römische Tradition gebietet, die Koteletts direkt vom glühenden Rost noch dampfend mit den Fingern zu greifen und ohne Zögern zu verspeisen.",
        "scienceTip": "Das butterzarte Fleisch des Milchlamms verlangt extreme Kontakthitze (220–250°C), um das Äußere innerhalb von 2 Minuten pro Seite zu karamellisieren, während der Kern bei 56–58°C saftig zartrosa bleibt.",
        "ingredients": {
          "chops": {
            "name": "Frische Milchlammkoteletts (Abbacchio romano)",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "rosemary": {
            "name": "Frischer Rosmarin und wilder Thymian, fein gehackt",
            "basePerPerson": 3,
            "unit": "g"
          },
          "garlic": {
            "name": "Frische Knoblauchzehen, leicht angedrückt in der Schale",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Natives Olivenöl extra oder feines Schweineschmalz (Strutto)",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "lemon": {
            "name": "Frische Zitronenspalten zum Servieren",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "salt": {
            "name": "Grobes Meersalz und frisch geschroteter Pfeffer",
            "basePerPerson": 3,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Aromatische Kräutermarinade",
            "desc": "Die Koteletts mit Olivenöl oder flüssigem Schmalz, gehacktem Rosmarin, angedrücktem Knoblauch und Pfeffer einreiben. 15–20 Minuten bei Raumtemperatur marinieren.",
            "timerMin": 15
          },
          {
            "title": "Maximales Aufheizen der Grillfläche",
            "desc": "Eine schwere gusseiserne Grillpfanne oder den Holzkohlegrill auf 230–250°C vorheizen, bis die Fläche leicht raucht. Nur maximale Kontakthitze versiegelt das zarte Fleisch sofort.",
            "timerMin": 5
          },
          {
            "title": "Scharfes Grillen (2 Minuten pro Seite)",
            "desc": "Die Koteletts mit Abstand auflegen. Genau 2 Minuten unbewegt braten, wenden und weitere 2 Minuten garen. Erst beim Wenden großzügig mit Meersalz bestreuen.",
            "timerMin": 4
          },
          {
            "title": "Glühend heißer Scottadito-Genuss",
            "desc": "Sofort auf einer angewärmten Platte mit frischen Zitronenspalten anrichten. Nach echter römischer Art direkt mit den Fingern am Knochen greifen und glühend heiß genießen!",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Easy Mode: Die Koteletts 15 Minuten in etwas Olivenöl, Rosmarin und angedrücktem Knoblauch marinieren. Die Grillpfanne sehr gut vorheizen, damit das zarte Fleisch nicht ansetzt.",
        "proTip": "🏆 Pro Chef: Extrem heiße Kontakthitze (230°C) für exakt 90 Sekunden pro Seite. Erst unmittelbar nach dem Garen mit Meersalzflocken würzen, um den osmotischen Saftverlust zu verhindern."
      },
      "carciofigiudia": {
        "category": "contorni",
        "name": "Carciofi alla Giudia",
        "shortDesc": "Das jahrhundertealte Meisterwerk des jüdischen Ghettos in Rom: Rundartischocken, doppelt frittiert zu krossen, goldenen Rosen.",
        "origin": "Rom (Jüdisches Ghetto, 16. Jahrhundert)",
        "difficulty": "Schwer (Präzises Spiralschälen und doppelte Temperaturführung)",
        "history": "Traditionell in den jüdisch-römischen Küchen zum Fastenbrechen an Jom Kippur serviert: Ganze Artischocken verwandeln sich in spektakulär blühende, goldbraune Knusper-Rosen.",
        "scienceTip": "DIE WISSENSCHAFTLICHE DOPPELFRITTIERUNG: Das erste Bad bei 140°C gart das Herz und den Stiel butterweich. Das zweite Bad bei 175–180°C mit einem Tropfen kaltem Wasser lässt Feuchtigkeit schlagartig verdampfen und macht die Blätter kross wie Chips.",
        "ingredients": {
          "artichoke": {
            "name": "Römische Rundartischocken (Mammole Romanesche g.g.A. / Cimaroli)",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Natives Olivenöl extra zum schwimmenden Ausbacken",
            "basePerPerson": 250,
            "unit": "ml"
          },
          "lemon": {
            "name": "Frische Zitrone zum Säuern des Rüstwassers",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "salt": {
            "name": "Feines Meersalz und frisch gemahlener Pfeffer für das Herz",
            "basePerPerson": 2,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Spiralförmiges Zurechtschneiden",
            "desc": "Die zähen Außenblätter mit einem kleinen Tourniermesser spiralförmig wie eine Apfelschale abschälen. Den Stiel schälen und die Blattspitzen kuppelförmig kappen.",
            "timerMin": 10
          },
          {
            "title": "Erster Frittiergang bei 140°C (Herz zartgaren)",
            "desc": "Reichlich Olivenöl auf 140°C erhitzen. Die Artischocken kopfüber für 10–12 Minuten eintauchen, bis eine Gabel mühelos in den Stielansatz gleitet. Herausnehmen und 5 Minuten abkühlen lassen.",
            "timerMin": 12
          },
          {
            "title": "Aufblühen zur Rose und Würzen",
            "desc": "Die Artischocke kopfüber sanft auf ein Schneidebrett klopfen, damit sich die Blütenblätter fächerförmig nach außen öffnen. Das Innere der Blüte mit Salz und Pfeffer würzen.",
            "timerMin": 3
          },
          {
            "title": "Zweiter Frittiergang bei 180°C (Knusper-Blätter)",
            "desc": "Das Öl auf 175–180°C erhitzen. Einen Tropfen kaltes Wasser auf die Blätter spritzen und kopfüber eintauchen, dabei mit einer Zange 2 Minuten leicht andrücken. Die Blätter werden knusprig wie Kartoffelchips.",
            "timerMin": 2
          }
        ],
        "easyTip": "💡 Easy Mode: Gründlich putzen und die ersten 4–5 Lagen der harten Außenblätter großzügig entfernen. Bis zum Frittieren in Zitronenwasser legen, um unschöne Oxidation und Nachdunkeln zu verhindern.",
        "proTip": "🏆 Pro Chef: Doppeltes Frittierbad: zuerst bei 140°C, um das Herz butterweich zu garen, dann kopfüber zur Rose aufklopfen und ein zweites Mal bei 180°C für 90 Sekunden ausbacken, damit die Blätter wie Chips kristallisieren."
      },
      "carciofiromana": {
        "category": "contorni",
        "name": "Carciofi alla Romana",
        "shortDesc": "Römische Rundartischocken gefüllt mit wilder römischer Minze, Knoblauch und Petersilie, kopfüber im geschlossenen Topf butterzart geschmort.",
        "origin": "Rom und die römische Campagna",
        "difficulty": "Mittel (Sorgfältiges Putzen und dichtes Dampfschmoren)",
        "history": "Die unverzichtbare Frühlingsbeilage der römischen Sonntagstradition. Die wilde Mentuccia-Minze, die auf den antiken römischen Ruinen wächst, verleiht ihr unnachahmliches Kräuteraroma.",
        "scienceTip": "Kopfüber bei 90–95°C mit feuchtem Backpapier und schwerem Deckel hermetisch gegart, dünsten die Artischocken im aromatischen Dampf ihrer eigenen Öl-Wein-Emulsion, wodurch Polyphenole bewahrt werden und die Blätter hellgrün und samtig bleiben.",
        "ingredients": {
          "artichoke": {
            "name": "Römische Rundartischocken mit langem Stiel (Mammole)",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "mint": {
            "name": "Frische wilde römische Mentuccia-Minze (Nepetella)",
            "basePerPerson": 3,
            "unit": "g"
          },
          "parsley": {
            "name": "Frische glatte italienische Petersilie, fein gehackt",
            "basePerPerson": 4,
            "unit": "g"
          },
          "garlic": {
            "name": "Frische Knoblauchzehen, sehr fein gehackt",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "oil": {
            "name": "Reichlich hochwertiges natives Olivenöl extra",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "wine": {
            "name": "Trockener Weißwein oder Wasser für den Schmorsud",
            "basePerPerson": 25,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Putzen und Öffnen des Blütenherzens",
            "desc": "Harte Außenblätter entfernen, den Stiel schälen und die Blattspitzen kappen. Die Blätter vorsichtig mit den Fingern auseinanderdrücken, um Raum für die Kräuterfüllung zu schaffen.",
            "timerMin": 10
          },
          {
            "title": "Füllen mit Minze-Knoblauch-Kräutern",
            "desc": "Mentuccia-Minze, Petersilie, Knoblauch, Salz und Pfeffer fein hacken. Die Mischung tief und fest in das geöffnete Herz jeder Artischocke drücken.",
            "timerMin": 5
          },
          {
            "title": "Kopfüber eng im Schmortopf anordnen",
            "desc": "Die Artischocken kopfüber eng aneinanderstehend in einen Topf setzen. Großzügig mit feinem Olivenöl, Weißwein und Wasser bis zur halben Höhe der Artischockenköpfe angießen.",
            "timerMin": 5
          },
          {
            "title": "Dichtes Dampfschmoren bei 90°C",
            "desc": "Ein angefeuchtetes Backpapier direkt auflegen und den Topf mit einem schweren Deckel fest verschließen. Bei milder Hitze ca. 25–30 Minuten sanft schmoren, bis die Stiele butterzart sind.",
            "timerMin": 30
          }
        ],
        "easyTip": "💡 Easy Mode: Die Artischocken kopfüber eng in einen schmalen Topf mit hohem Rand setzen, bis zur Hälfte mit Wasser und Olivenöl bedecken und zugedeckt im heißen Dampf gleichmäßig weichdünsten.",
        "proTip": "🏆 Pro Chef: Traditionelle Füllung aus wilder römischer Nepetella-Minze (Calamintha nepeta), Knoblauch und feinen Semmelbröseln. Hermetisches Schmoren unter einer Backpapierhaube bei 92°C für butterzarte Blätter."
      },
      "suppli": {
        "category": "contorni",
        "name": "Supplì al Telefono",
        "shortDesc": "Die legendäre römische Reiskrokette mit kräftigem Rindfleisch-Ragù, feiner Knusperpanade und flüssig-ziehendem Mozzarella-Kern.",
        "origin": "Rom (Trastevere, Ende des 19. Jahrhunderts)",
        "difficulty": "Mittel (Formgebung und Frittier-Temperaturführung)",
        "history": "„Al Telefono“ genannt, weil beim Auseinanderbrechen der heißen Krokette der geschmolzene Mozzarella-Kern einen endlosen, elastischen Käsefaden zieht – genau wie das Spiralkabel der alten Telefone.",
        "scienceTip": "Der bissfest gegarte Reis muss auf <15°C abkühlen, damit die Amylose-Stärke retrogradiert und die Reiskörner ohne Ei-Zusatz bindet. Das Frittieren bei 170–175°C erzeugt eine sofortige Knusperbarriere, die den flüssigen Mozzarellakern hermetisch versiegelt.",
        "ingredients": {
          "rice": {
            "name": "Carnaroli- oder Arborio-Risottoreis",
            "basePerPerson": 80,
            "unit": "g"
          },
          "ragu": {
            "name": "Kräftig eingekochtes Rindfleisch-Ragù mit Tomate",
            "basePerPerson": 70,
            "unit": "g"
          },
          "mozzarella": {
            "name": "Gut abgetropfter Fior-di-Latte-Mozzarella in dicken Streifen",
            "basePerPerson": 30,
            "unit": "g"
          },
          "pecorino": {
            "name": "Geriebener Pecorino Romano DOP und Parmigiano",
            "basePerPerson": 15,
            "unit": "g"
          },
          "eggs": {
            "name": "Frische Eier für die Panierstraße",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "breadcrumbs": {
            "name": "Feines Paniermehl für eine ultradünne Kruste",
            "basePerPerson": 35,
            "unit": "g"
          },
          "oil": {
            "name": "Frittieröl mit hohem Rauchpunkt (Erdnuss- oder Olivenöl)",
            "basePerPerson": 200,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Zubereitung des Ragù-Risottos",
            "desc": "Den Reis direkt im mit etwas Brühe gestreckten Ragù al dente garen. Vom Herd nehmen, mit geriebenem Pecorino cremig binden und flach auf einem Blech ausstreichen.",
            "timerMin": 15
          },
          {
            "title": "Abkühlen und Stärke-Retrogradation",
            "desc": "Den Reis mindestens 30 Minuten bei Raumtemperatur abkühlen lassen und danach im Kühlschrank durchkühlen, damit die Stärke geliert und den Reis schnittfest bindet.",
            "timerMin": 30
          },
          {
            "title": "Formen mit Mozzarella-Kern",
            "desc": "Eine Portion kalten Reis in die Handfläche nehmen, eine Stange Mozzarella in die Mitte drücken und den Reis nahtlos zu einer festen, ovalen Krokette verschließen.",
            "timerMin": 10
          },
          {
            "title": "Knusprige Panade und Frittieren bei 175°C",
            "desc": "Die Supplì erst durch verquirltes Ei und dann durch feines Paniermehl rollen. Im 175°C heißen Öl 3–4 Minuten goldbraun ausbacken. Glühend heiß servieren für den perfekten Käsefaden!",
            "timerMin": 4
          }
        ],
        "easyTip": "💡 Easy Mode: Den Ragù-Reis am Vorabend zubereiten oder mindestens 2 Stunden kühlen: Durchgekühlter, fester Reis lässt sich kinderleicht ohne Auseinanderfallen zu formschönen Kroketten rollen.",
        "proTip": "🏆 Pro Chef: Mehlfreie doppelte Panade mit feinstem Paniermehl. Streng bei 175°C tief frittieren: Ergibt einen auf 60°C geschmolzenen, perfekten Faden-Käsekern und eine millimeterdünne, extrem krosse Kruste."
      },
      "maritozzo": {
        "category": "dolci",
        "name": "Maritozzo con la Panna",
        "shortDesc": "Das legendäre luftig-weiche römische Hefegebäck mit Zitrus- und Vanillearoma, der Länge nach aufgeschnitten und mit frischer Schlagsahne gefüllt.",
        "origin": "Rom (Antike römische Wurzeln und Renaissance-Brauchtum)",
        "difficulty": "Mittel (Kontrollierte biologische Teiggare)",
        "history": "Einst die einzige süße Versuchung, die während der Fastenzeit erlaubt war. In der Renaissance schenkte der zukünftige Bräutigam („Maritozzo“) seiner Verlobten dieses Gebäck – oft mit einem in der Sahne versteckten Verlobungsring.",
        "scienceTip": "Das mit starkem Mehl (W 300–330) entwickelte Klebergerüst schließt das bei der Gare (26–28°C) entstehende CO2 perfekt ein. Das Backen bei 180°C bräunt die Kruste per Maillard-Reaktion, während die Krume wolkenweich bleibt.",
        "ingredients": {
          "flour": {
            "name": "Starkes Weizenmehl Manitoba (W320) für Hefegebäck",
            "basePerPerson": 75,
            "unit": "g"
          },
          "milk": {
            "name": "Frische lauwarme Vollmilch",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "sugar": {
            "name": "Feiner Kristallzucker für den Teig",
            "basePerPerson": 15,
            "unit": "g"
          },
          "yeast": {
            "name": "Frische Bäckerhefe",
            "basePerPerson": 3,
            "unit": "g"
          },
          "oil": {
            "name": "Mildes natives Olivenöl extra oder geschmolzene Butter",
            "basePerPerson": 12,
            "unit": "ml"
          },
          "cream": {
            "name": "Frische gekühlte Schlagsahne (mind. 35 % Fett)",
            "basePerPerson": 80,
            "unit": "ml"
          },
          "zest": {
            "name": "Fein abgeriebene Bio-Orangenschale und Bourbon-Vanille",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Kneten des Teigs und Glutenentwicklung",
            "desc": "Die Hefe mit 1 TL Zucker in lauwarmer Milch auflösen. Zum Mehl geben und kräftig kneten, dabei Zucker, Öl, Zitrusschalen und Vanille einarbeiten, bis ein elastischer Teig entsteht.",
            "timerMin": 15
          },
          {
            "title": "Erste Teiggare bei ca. 27°C",
            "desc": "Den Teig in einer abgedeckten Schüssel an einem warmen, zugluftfreien Ort (26–28°C) für ca. 90 Minuten ruhen lassen, bis sich das Volumen verdoppelt hat.",
            "timerMin": 90
          },
          {
            "title": "Formen der ovalen Teiglinge und Stückgare",
            "desc": "Den Teig in gleichmäßige, längliche ovale Brötchen teilen. Auf ein mit Backpapier belegtes Blech setzen und abgedeckt weitere 60 Minuten aufgehen lassen.",
            "timerMin": 60
          },
          {
            "title": "Backen bei 180°C und Zuckersirup-Glanz",
            "desc": "Bei 180°C für 12–14 Minuten backen, bis die Maritozzi goldbraun glänzen. Sofort nach dem Ofen noch heiß mit warmem Zuckersirup einpinseln.",
            "timerMin": 14
          },
          {
            "title": "Einschneiden und Glattstreichen der Sahne",
            "desc": "Vollständig auskühlen lassen. Den Maritozzo der Länge nach mittig einschneiden (nicht durchschneiden). Die kalte Sahne mit Puderzucker steif schlagen, üppig einfüllen und mit einer Palette glatt abziehen.",
            "timerMin": 5
          }
        ],
        "easyTip": "💡 Easy Mode: Schüssel und Schneebesen 15 Minuten vor dem Aufschlagen ins Gefrierfach legen: Die Sahne schlägt doppelt so schnell auf und bleibt stundenlang standfest und cremig.",
        "proTip": "🏆 Pro Chef: Römische Hefebrioche mit kontrollierter Teiggare bei 26°C, heißer Zuckersirup-Glasur für Hochglanz und frischer Schlagsahne (38 % Fettgehalt) verfeinert mit 10 % feinstem Puderzucker."
      }
    },
    "catAll": "Alle Rezepte",
    "catPrimi": "🍝 Pasta (The Big 4)",
    "catSecondi": "🥩 Hauptgerichte",
    "catContorni": "🥬 Frittiertes & Beilagen",
    "catDolci": "🥐 Süßes & Gebäck",
    "portionSize": "Pastaportion:",
    "portionStandard": "Standard (100g)",
    "portionAbbondante": "🍝 Römisch Satt (130g)",
    "servingsHintAbbondante": "🍝 Üppige Trattoria-Portion: {amount} Pasta pro Person",
    "troubleGuancialeTitle": "Guanciale ist angebrannt oder zäh-gummig geblieben?",
    "troubleGuancialeSol": "Wenn gummig: Hitze war zu hoch, das innere Fett konnte nicht ausschmelzen (benötigt 8–10 Min. bei milder Hitze). Wenn verbrannt: Schwärzungen aussortieren, um Bitterstoffe zu vermeiden, das saubere Fett abseihen und mit frisch geröstetem Pfeffer abrunden.",
    "troubleAcidTitle": "Die Amatriciana-Tomatensauce ist zu sauer oder wässrig?",
    "troubleAcidSol": "Handelsübliche Dosentomaten enthalten oft zugesetzte Zitronensäure. Eine winzige Prise Natron (sofortige chemische Säureneutralisation) oder 1 TL Guanciale-Fett einrühren und 2 Minuten bei lebhafter Flamme einkochen, um den natürlichen Fruchtzucker zu konzentrieren.",
    "troubleCarciofiTitle": "Carciofi alla Giudìa sind zäh oder öffnen sich nicht zur Blütenform?",
    "troubleCarciofiSol": "Vor dem zweiten Frittiergang bei 180°C die Artischocke am Stiel fassen und kopfüber sanft auf ein Schneidebrett klopfen, um die Blätter fächerförmig aufzuspreizen. Falls das Herz noch fest ist, das erste Frittierbad bei 140°C um 4 Minuten verlängern.",
    "troubleSuppliTitle": "Supplì platzen auf oder Mozzarella läuft ins Frittieröl?",
    "troubleSuppliSol": "Niemals lauwarmen Reis verwenden: mindestens 2 Stunden im Kühlschrank kühlen, damit die Stärke schnittfest abbindet. Mozzarella 1 Stunde abtropfen lassen. Stets DOPPELT panieren (verquirltes Ei + feines Paniermehl) und streng bei 175°C ausbacken.",
    "troubleCodaTitle": "Coda alla Vaccinara nach zwei Stunden noch zäh?",
    "troubleCodaSol": "Rinderkollagen benötigt mindestens 3,5 Stunden Hydrolyse bei 80–85°C. Niemals die Hitze erhöhen. Ein halbes Glas warme Brühe oder Wasser angießen, mit dem Deckel dicht verschließen und bei kleinster Flamme weiterschmoren, bis das Fleisch von selbst zerfällt.",
    "troubleSaltimboccaTitle": "Saltimbocca sind trocken oder der Schinken ist ledrig-hart?",
    "troubleSaltimboccaSol": "Das Kalbfleisch darf auf der bemehlten Seite keinesfalls länger als 60–80 Sekunden braten. Die Schinken-Salbei-Seite nur für 15–20 Sekunden kurz anbraten, da Wasserentzug den Schinken sonst zäh und versalzen macht.",
    "troubleCreamTitle": "Maritozzo-Schlagsahne fällt zusammen oder gerinnt zu Butter?",
    "troubleCreamSol": "Übersteigt die Sahne 10°C, brechen die Fettkügelchen auf. Eiskalte Sahne (3–4°C) verwenden und Schüssel sowie Schneebesen 15 Minuten ins Eisfach legen. Grießelt die Sahne bereits leicht, 2 EL flüssige eiskalte Sahne mit einem Spatel vorsichtig unterheben."
  },
  "pt": {
    "appName": "RomaLab Científico",
    "appTagline": "Autêntica Culinária Romana & Cinética da Emulsão Gastronômica",
    "splashVersion": "v1.1.0 Pro • Edição Global Multilíngue",
    "navRecipes": "Receitas",
    "navCalculator": "Porções",
    "navLiveKitchen": "Cozinha",
    "navThermal": "Térmica",
    "navScience": "Ciência",
    "btnLanguage": "Idioma",
    "btnUnits": "Unidades",
    "btnTheme": "Tema",
    "btnGuide": "Guia",
    "btnMenu": "Menu",
    "btnShare": "Compartilhar",
    "btnTroubleshoot": "Guia SOS",
    "selectLanguage": "Selecionar Idioma",
    "close": "Fechar",
    "servings": "Número de Pessoas",
    "servingsHint": "Porção padrão: {amount} de massa por pessoa",
    "ingredientsTitle": "Dosagem Científica ao Grama",
    "ingredientsSubtitle": "Cálculo proporcional automático de gemas, gordura nobre e amido de cozimento.",
    "emulsionThermodynamics": "Janela Térmica de Emulsão",
    "emulsionSubtitle": "A física gastronômica entre amidos, lipídios do guanciale e proteínas.",
    "thermalSafeZone": "Zona Segura de Emulsão:",
    "thermalCold": "Muito Frio (<50°C)",
    "thermalOptimal": "Zona Dourada de Emulsão (58-65°C)",
    "thermalDanger": "Perigo de Omelete Coagulada (>68°C)",
    "startCooking": "Preparo Passo a Passo com Timer",
    "cookingSubtitle": "Acompanhe as fases ao vivo para não errar tempos e temperaturas.",
    "step": "Fase",
    "timer": "Timer",
    "start": "Iniciar",
    "pause": "Pausa",
    "reset": "Zerar",
    "done": "Concluído!",
    "alertTempDanger": "ATENÇÃO: Temperatura > 68°C! Risco de omelete! Desligue o fogo imediatamente.",
    "alertTempOptimal": "TEMPERATURA PERFEITA (58-65°C): Emulsione vigorosamente fora do fogo.",
    "alertTempCold": "Temperatura muito baixa (< 50°C): O molho pode não emulsionar direito.",
    "modeEasy": "⭐ Fácil (Sem Riscos)",
    "modePro": "🏆 Pro (Mestre Tradição)",
    "modeEasyLabel": "⭐ Fácil (Assistida)",
    "modeEasyDesc": "Técnicas com margem de segurança, creme estabilizado e corte de queijo mais dócil.",
    "modeProDesc": "Código ortodoxo: 100% gemas frescas, Pecorino Romano DOP puro e risottatura com amido.",
    "hintYolks": "💡 Dica: Você pode juntar 1 clara para conferir máxima fluidez ao creme",
    "hintPecorino": "💡 Dica: Corte recomendado 50% Pecorino + 50% Parmigiano Reggiano",
    "hintWater": "💡 Dica: Bata água morna (55°C) e queijo com fouet ou mixer de imersão",
    "substitutionsTitle": "Guia Internacional de Ingredientes",
    "substitutionsSubtitle": "Regras canônicas, química culinária e substitutos aceitáveis.",
    "subGuancialeTitle": "🥓 Guanciale vs Bacon vs Pancetta",
    "guancialeNote": "O guanciale possui gordura nobre com baixo ponto de fusão (32-35°C), criando textura aveludada. Substituto aceitável: Pancetta curada artesanal não defumada. EVITAR: Bacon americano defumado com açúcar.",
    "subPecorinoTitle": "🧀 Pecorino Romano DOP & Corte",
    "pecorinoNote": "Queijo de ovelha curado, aromático e salgado. Se for picante demais ao paladar, os grandes chefs recomendam o corte: 70% Pecorino Romano DOP e 30% Parmigiano Reggiano 24 meses.",
    "subPastaTitle": "🌾 Amido da Massa Trefilada no Bronze",
    "pastaNote": "A trefilação ao bronze confere superfície porosa que libera amilose na água. O amido age como tensoativo ligando a água à gordura do guanciale.",
    "emergencyTitle": "🚨 Despensa de Emergência & Substitutos",
    "emergencySubtitle": "Está no exterior sem ingredientes romanos? Truques físicos para salvar seu prato.",
    "emGuancialeTitle": "🥓 Se faltar Guanciale:",
    "emGuancialeOpt1": "✅ Opção 1 (Excelente): Pancetta artesanal NÃO defumada. Reduza o sal da água.",
    "emGuancialeOpt2": "⚠️ Opção 2 (Emergência): Bacon. Truque salvador: escaldar as fatias em água fervente por 2 minutos antes de fritar para extrair fumaça e açúcar.",
    "emPecorinoTitle": "🧀 Se faltar Pecorino Romano:",
    "emPecorinoOpt1": "✅ Opção 1 (Recomendada): 50% Pecorino + 50% Parmesão.",
    "emPecorinoOpt2": "⚠️ Opção 2: Apenas Parmigiano Reggiano ou Grana Padano. Adicione 1g de sal e pimenta extra.",
    "emStarchTitle": "🌾 Se a massa for lisa (pouco amido):",
    "emStarchOpt1": "✅ O Truque da Panela Pequena: Cozinhe em metade da água de costume. A água vira um caldo de amido concentrado!",
    "emStarchOpt2": "🔬 Truque Molecular: Dissolva 1/2 colher de chá de amido de milho em água fria e adicione na frigideira: emulsão instantânea.",
    "troubleshootTitle": "Pronto-Socorro Gastronômico",
    "troubleshootDesc": "Algo deu errado na frigideira? Veja como a física recupera seu prato.",
    "troubleClumpTitle": "O pecorino formou grumos borrachudos?",
    "troubleClumpSol": "A caseína superou os 65°C e expulsou o soro. Afaste a frigideira do fogo, adicione 2 a 3 colheres de sopa de água de cozimento morna (55°C) rica em amido e bata rapidamente com um batedor de arame ou mixer num copo à parte antes de juntar à massa.",
    "troubleCurdleTitle": "O ovo começou a talhar (efeito omelete)?",
    "troubleCurdleSol": "Retire imediatamente a frigideira do fogo. Transfira a massa para uma tigela fria, adicione 1 pedra de gelo ou 2 colheres de sopa de água fria e bata vigorosamente. Se já houver grumos aparentes, bata por 5 segundos com um mixer de imersão e uma colher de água amilácea: a lecitina voltará a emulsionar na hora.",
    "troubleSaltyTitle": "O prato ficou excessivamente salgado?",
    "troubleSaltySol": "O Pecorino Romano DOP curado contém muito sal natural. Regra de ouro: corte o sal da água do macarrão pela metade (máx. 5 g/l). Para corrigir no prato pronto: emulsione com um pouco de água morna sem sal e junte pimenta-do-reino tostada (a piperina ameniza a sensação de salinidade aguda).",
    "recipes": {
      "carbonara": {
        "name": "Spaghetti alla Carbonara",
        "shortDesc": "Gemas frescas, guanciale crocante, Pecorino Romano DOP e pimenta tostada.",
        "origin": "Roma (1944)",
        "difficulty": "Média (Sensível à temperatura)",
        "history": "Nascida da criatividade dos cozinheiros romanos com as rações aliadas, transformada em patrimônio mundial.",
        "scienceTip": "As gemas contêm lecitina, potente emulsificante natural. A 64-66°C as proteínas envolvem a gordura sem talhar.",
        "ingredients": {
          "pasta": {
            "name": "Spaghetti ou Rigatoni no bronze",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale suíno curado",
            "basePerPerson": 60,
            "unit": "g"
          },
          "yolks": {
            "name": "Gemas frescas de ovo (tamanho L)",
            "basePerPerson": 1,
            "extraPadella": 1,
            "unit": "pz"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP ralado fino",
            "basePerPerson": 35,
            "unit": "g"
          },
          "pepper": {
            "name": "Pimenta-do-reino moída na hora",
            "basePerPerson": 2.5,
            "unit": "g"
          },
          "salt": {
            "name": "Sal para a água (reduzido: 5g/L)",
            "basePerPerson": 5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Corte e Douradura do Guanciale",
            "desc": "Corte em tiras de 6mm. Coloque na frigideira fria sem óleo. Fogo médio-baixo por 10-12 min até dourar crocante por fora e macio por dentro.",
            "timerMin": 10
          },
          {
            "title": "A \"Carbocrema\" a Frio",
            "desc": "Em uma tigela, misture as gemas com o Pecorino e pimenta. Bata até virar pasta homogênea. Adicione 2 colheres da gordura morna para temperar.",
            "timerMin": 3
          },
          {
            "title": "Cozimento da Massa & Amido",
            "desc": "Cozinhe a massa com 5g de sal por litro. Escorra 2 min antes do tempo de embalagem, guardando 1 xícara de água rica em amido.",
            "timerMin": 8
          },
          {
            "title": "Risottatura na Frigideira",
            "desc": "Junte a massa al dente na frigideira com a gordura quente e uma concha de água por 1 min em fogo alto para criar a primeira emulsão.",
            "timerMin": 1
          },
          {
            "title": "Mantecatura Fora do Fogo",
            "desc": "DESLIGUE O FOGO E AFASTE A FRIGIDEIRA. Espere 45s até baixar para 60-65°C. Despeje a massa na tigela de ovos, mexa vigorosamente e sirva com o guanciale crocante.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Modo Fácil: Reserve 2 colheres de sopa de água do cozimento e deixe amornar a 50°C para temperar as gemas e o pecorino antes de juntar à massa. Misture SEMPRE fora do fogo.",
        "proTip": "🏆 Chef Pro: Use apenas gemas frescas de galinhas caipiras, gordura de guanciale derretida a 80°C sem queimar e emulsão em onda (mantecatura) entre 62°C e 65°C para maximizar a viscosidade da lecitina."
      },
      "cacioepepe": {
        "name": "Tonnarelli Cacio e Pepe",
        "shortDesc": "Apenas três elementos: massa no bronze rica em amido, Pecorino Romano DOP e pimenta preta.",
        "origin": "Interior de Roma",
        "difficulty": "Alta (Precisão térmica)",
        "history": "Prato secular dos pastores na transumância dos campos do Lácio.",
        "scienceTip": "O Pecorino derrete a 55°C, mas acima de 65°C a caseína vira borracha. O amido atua como escudo protetor.",
        "ingredients": {
          "pasta": {
            "name": "Tonnarelli frescos ou Spaghetti rugosos",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP ralado em pó",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pepper": {
            "name": "Pimenta preta em grãos para tostar",
            "basePerPerson": 3.5,
            "unit": "g"
          },
          "water": {
            "name": "Água concentrada de amido",
            "basePerPerson": 40,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Tostagem da Pimenta",
            "desc": "Esmague os grãos de pimenta. Toste na frigideira seca por 2 min e deglace com uma concha de água fervente da massa.",
            "timerMin": 2
          },
          {
            "title": "Pasta de Queijo a Frio",
            "desc": "Em uma tigela coloque o Pecorino fino. Adicione aos poucos água morna de cozimento (55-60°C) batendo com fouet até formar creme liso.",
            "timerMin": 3
          },
          {
            "title": "Finalização na Frigideira",
            "desc": "Termine o cozimento da massa no caldo de pimenta em fogo alto para concentrar o amido.",
            "timerMin": 2
          },
          {
            "title": "Mantecatura Fora do Fogo",
            "desc": "Tire do fogo (<60°C). Junte a pasta de pecorino e salteie com energia criando uma onda aveludada.",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Modo Fácil: Prepare uma pasta lisa de pecorino com água morna a 50°C numa tigela à parte com um batedor. Adicione à massa apenas depois de retirar a frigideira do fogo.",
        "proTip": "🏆 Chef Pro: Extração intensa de amido na risottatura nos últimos 3 minutos. Emulsão dinâmica a 58°C: a concentração de amilose deve formar pontes de hidrogênio estáveis com a caseína."
      },
      "amatriciana": {
        "name": "Bucatini all'Amatriciana",
        "shortDesc": "Guanciale crocante, tomate San Marzano DOP, Pecorino Romano e vinho branco seco.",
        "origin": "Amatrice / Roma",
        "difficulty": "Média",
        "history": "Evolução histórica da Gricia no final do século XVIII com a chegada do tomate ao Lácio.",
        "scienceTip": "A acidez límpida do tomate San Marzano contrabalança a suntuosidade lipídica do guanciale.",
        "ingredients": {
          "pasta": {
            "name": "Bucatini ou Rigatoni no bronze",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale em tiras",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Tomate pelado San Marzano DOP esmagado à mão",
            "basePerPerson": 120,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP ralado",
            "basePerPerson": 30,
            "unit": "g"
          },
          "vino": {
            "name": "Vinho branco seco para deglaçar",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "chili": {
            "name": "Pimenta vermelha picante (opcional)",
            "basePerPerson": 0.5,
            "unit": "pz"
          }
        },
        "steps": [
          {
            "title": "Dourar o Guanciale",
            "desc": "Frite o guanciale em fogo baixo até dourar. Reserve os pedaços crocantes aquecidos.",
            "timerMin": 8
          },
          {
            "title": "Deglaçagem & Molho",
            "desc": "Deglace a gordura com vinho branco, evapore o álcool e adicione tomate e pimenta. Cozinhe 12-15 min até encorpar.",
            "timerMin": 12
          },
          {
            "title": "Mistura e Finalização",
            "desc": "Salteie a massa al dente no molho por 1 min. Apague o fogo, misture o pecorino e cubra com o guanciale crocante.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Modo Fácil: Retire o guanciale assim que estiver dourado e reserve-o à parte. Cozinhe o tomate na gordura e adicione o guanciale crocante apenas na hora de servir por cima do prato.",
        "proTip": "🏆 Chef Pro: Deglaceie com vinho branco seco nas bordas quentes da frigideira para soltar os açúcares caramelizados. Tomates San Marzano amassados à mão em fogo vivo para manter a acidez fresca."
      },
      "gricia": {
        "name": "Mezze Maniche alla Gricia",
        "shortDesc": "A célebre \"Amatriciana branca\": massa, guanciale crocante, pecorino e pimenta.",
        "origin": "Grisciano / Roma antiga",
        "difficulty": "Média",
        "history": "A matriarca das massas romanas: Carbonara e Amatriciana derivam diretamente dela.",
        "scienceTip": "A cremosidade resulta unicamente da emulsão mecânica entre a gordura do porco e a água com amido.",
        "ingredients": {
          "pasta": {
            "name": "Mezze Maniche raiadas no bronze",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "Guanciale em tiras",
            "basePerPerson": 55,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP meia cura",
            "basePerPerson": 40,
            "unit": "g"
          },
          "pepper": {
            "name": "Pimenta preta moída",
            "basePerPerson": 2.5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Dourar o Guanciale",
            "desc": "Frite até ficar crocante fora e macio por dentro. Reserve 2/3 crocantes.",
            "timerMin": 8
          },
          {
            "title": "Caldo de Amido",
            "desc": "Junte uma concha de água fervente e pimenta na gordura quente: cria emulsão leitosa e perfumada.",
            "timerMin": 2
          },
          {
            "title": "Mantecatura Fora do Fogo",
            "desc": "Salteie a massa 60s, desligue o fogo, aguarde 30s, polvilhe pecorino e bata até atingir o creme aveludado.",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Modo Fácil: Adicione a água de cozimento aos poucos sobre o fundo de gordura do guanciale. Nunca jogue o pecorino no fundo quente da panela: emulsione salteando no ar.",
        "proTip": "🏆 Chef Pro: Emulsão bifásica perfeita de gordura nobre e amido. Pimenta-do-reino triturada no pilão e tostada a seco a 150°C antes da risottatura para desprender a piperina."
      },
      "saltimbocca": {
        "category": "secondi",
        "name": "Saltimbocca alla Romana",
        "shortDesc": "Fatias finas de vitela de leite, presunto cru suave, sálvia fresca e manteiga clarificada deglaçadas com vinho branco seco.",
        "origin": "Roma (Rione Regola, final do século XIX)",
        "difficulty": "Fácil (Cozimento expresso em 90 segundos)",
        "history": "Documentado por Pellegrino Artusi em 1891 após saboreá-los na histórica taverna \"Le Venete\" em Roma: uma obra-prima instantânea que \"pula na boca\".",
        "scienceTip": "Reação de Maillard ultrarrápida a 160°C apenas no lado enfarinhado da carne. Fora do fogo, o fundo da frigideira emulsiona com manteiga gelada e vinho (beurre monté), formando um molho aveludado e reluzente.",
        "ingredients": {
          "veal": {
            "name": "Escalopes bem finos de vitela de leite (3 mm de espessura)",
            "basePerPerson": 160,
            "unit": "g"
          },
          "prosciutto": {
            "name": "Presunto cru curado suave artesanal de qualidade",
            "basePerPerson": 50,
            "unit": "g"
          },
          "sage": {
            "name": "Folhas inteiras de sálvia fresca",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "butter": {
            "name": "Manteiga de qualidade (para dourar e emulsionar)",
            "basePerPerson": 25,
            "unit": "g"
          },
          "wine": {
            "name": "Vinho branco seco (Frascati Superiore DOC)",
            "basePerPerson": 30,
            "unit": "ml"
          },
          "flour": {
            "name": "Farinha de trigo (apenas para a parte inferior da carne)",
            "basePerPerson": 10,
            "unit": "g"
          },
          "pepper": {
            "name": "Pimenta-do-reino moída na hora (não salgar o presunto)",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Bater e Fixar com Palito",
            "desc": "Bata os bifes entre duas folhas de papel manteiga até ficarem bem finos (3 mm). Coloque sobre cada filé uma fatia de presunto cru e uma folha de sálvia. Prenda no centro com um palito de dente na horizontal como um alfinete.",
            "timerMin": 5
          },
          {
            "title": "Enfarinhamento Científico da Base",
            "desc": "Passe levemente farinha de trigo APENAS no lado inferior da carne (o que vai em contato com a frigideira), sacudindo o excesso. Nunca encoste a farinha no presunto ou na sálvia.",
            "timerMin": 2
          },
          {
            "title": "Selagem Expressa em Fogo Vivo",
            "desc": "Derreta 2/3 da manteiga na frigideira em fogo alto. Acomode os saltimbocca com o lado enfarinhado para baixo. Cozinhe sem mexer por 60 a 80 segundos até criar uma crosta dourada.",
            "timerMin": 2
          },
          {
            "title": "Deglaçagem e Molho \"Beurre Monté\"",
            "desc": "Vire os saltimbocca por apenas 15 segundos do lado do presunto. Deglaceie com o vinho branco deixando o álcool evaporar. Retire a carne para um prato aquecido. Desligue o fogo, adicione a manteiga gelada restante e agite vigorosamente para criar um molho brilhante e aveludado.",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Modo Fácil: Enfarinhe apenas a face inferior da carne (nunca o presunto). Cozinhe com a frigideira tampada em fogo médio por 60 segundos: a carne ficará macia e suculenta.",
        "proTip": "🏆 Chef Pro: Deglaçagem com vinho branco em fogo altíssimo (160°C) para criar um molho aveludado e reluzente montado com manteiga gelada ao final."
      },
      "coda": {
        "category": "secondi",
        "name": "Coda alla Vaccinara",
        "shortDesc": "Rabada bovina estufada em fogo lentíssimo por 4 horas com aipo crocante, tomate San Marzano, uvas-passas, pinoli e cacau amargo.",
        "origin": "Roma (Rione Testaccio / Quinto Quarto)",
        "difficulty": "Média (Cozimento longo em baixa temperatura)",
        "history": "A rainha da culinária das vísceras (Quinto Quarto), criada nas tavernas ao redor do antigo abatedouro de Testaccio, onde os carniceiros cozinhavam o rabo com muito aipo para amaciá-lo.",
        "scienceTip": "O colágeno da rabada se hidrolisa virando uma gelatina suculenta e fondente apenas entre 80°C e 85°C num borbulhar quase imperceptível (\"pipare\"). O cacau amargo e as passas criam o equilíbrio agridoce renascentista que limpa o paladar.",
        "ingredients": {
          "tail": {
            "name": "Rabo de boi cortado em pedaços regulares",
            "basePerPerson": 350,
            "unit": "g"
          },
          "celery": {
            "name": "Talos de aipo branco tenros e crocantes",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pomodoro": {
            "name": "Tomates pelados San Marzano DOP amassados à mão",
            "basePerPerson": 200,
            "unit": "g"
          },
          "wine": {
            "name": "Vinho tinto encorpado (Cesanese del Piglio)",
            "basePerPerson": 60,
            "unit": "ml"
          },
          "lard": {
            "name": "Pancetta ou guanciale picadinho com cenoura e cebola",
            "basePerPerson": 25,
            "unit": "g"
          },
          "cocoa": {
            "name": "Cacau em pó 100% puro e amargo",
            "basePerPerson": 2,
            "unit": "g"
          },
          "pinenuts": {
            "name": "Pinoli tostados e uvas-passas hidratadas",
            "basePerPerson": 10,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Dourar e Selar os Pedaços",
            "desc": "Numa caçarola funda, refogue o picadinho de guanciale. Adicione os pedaços de rabada e doure de todos os lados em fogo alto por 10 minutos até ficarem bem selados.",
            "timerMin": 10
          },
          {
            "title": "Deglaçagem com Vinho Tinto e Tomate",
            "desc": "Deglaceie com o vinho tinto encorpado, deixando o álcool evaporar totalmente. Junte os tomates pelados amassados, sal e pimenta moída na hora. Deixe levantar fervura suave.",
            "timerMin": 10
          },
          {
            "title": "Lenta Hidrólise do Colágeno",
            "desc": "Tampe a caçarola e reduza a chama ao mínimo: o molho deve apenas borbulhar suavemente a 80-85°C por cerca de 3 horas e meia, até a carne soltar facilmente do osso.",
            "timerMin": 180
          },
          {
            "title": "O Toque Mestre: Aipo e Cacau",
            "desc": "Afervente os talos de aipo por 3 minutos em água salgada e adicione à rabada junto com os pinoli, as passas e o cacau dissolvido numa concha de molho. Deixe apurar por 20 minutos em fogo baixo antes de servir.",
            "timerMin": 20
          }
        ],
        "easyTip": "💡 Modo Fácil: Para economizar tempo, use a panela de pressão nos primeiros 45 minutos e depois finalize em fogo brando destampado para apurar e encorpar o molho.",
        "proTip": "🏆 Chef Pro: Cozimento brando a 85°C por 4 horas para hidrolisar totalmente o colágeno em gelatina suculenta. Toque canônico de cacau amargo e pinoli tostados nos últimos 15 minutos."
      },
      "abbacchio": {
        "category": "secondi",
        "name": "Abbacchio alla Scottadito",
        "shortDesc": "Costeletas de cordeiro de leite marinadas com alecrim fresco, alho novo e banha, grelhadas na brasa para comer pelando com os dedos.",
        "origin": "Roma e Agro Romano",
        "difficulty": "Fácil (Cozimento rápido em alta temperatura)",
        "history": "Chamado de \"scottadito\" (queima-dedos) porque o costume romano exige saborear as costeletas assim que saem do fogo, queimando literalmente as pontas dos dedos sem esperar esfriar.",
        "scienceTip": "A carne delicada do cordeiro de leite exige calor de contato altíssimo (220-250°C) para caramelizar o exterior em 2 minutos por lado, mantendo o centro rosado a 56-58°C sem perder sucos intracelulares.",
        "ingredients": {
          "chops": {
            "name": "Costeletas frescas de cordeiro de leite",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "rosemary": {
            "name": "Alecrim fresco e tomilho silvestre picados",
            "basePerPerson": 3,
            "unit": "g"
          },
          "garlic": {
            "name": "Dentes de alho novo amassados com casca",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Azeite de oliva extravirgem ou banha de porco",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "lemon": {
            "name": "Gomos de limão fresco para acompanhar",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "salt": {
            "name": "Sal grosso moído e pimenta-do-reino em grãos",
            "basePerPerson": 3,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Marinada Aromática a Frio",
            "desc": "Massageie as costeletas com o azeite ou banha, o picadinho de alecrim, o alho amassado e pimenta. Deixe descansar em temperatura ambiente por 15 a 20 minutos.",
            "timerMin": 15
          },
          {
            "title": "Aquecimento Extremo da Grelha",
            "desc": "Aqueça a grelha de ferro fundido ou braseiro até começar a soltar fumaça leve (230-250°C). A superfície precisa estar incandescente para selar na hora.",
            "timerMin": 5
          },
          {
            "title": "Grelhar Rápido 2 Minutos de Cada Lado",
            "desc": "Disponha as costeletas espaçadas na grelha. Cozinhe por 2 minutos sem mexer, vire e cozinhe por mais 2 minutos. Tempere com sal apenas ao virar.",
            "timerMin": 4
          },
          {
            "title": "Serviço Pelando \"Scottadito\"",
            "desc": "Transfira imediatamente para uma travessa quente com fatias de limão. Coma estritamente com as mãos segurando pelo osso enquanto ainda está fervendo!",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Modo Fácil: Marine as costeletas por 15 minutos com um fio de azeite, alecrim e alho amassado. Aqueça muito bem a grelha antiaderente para não grudar.",
        "proTip": "🏆 Chef Pro: Choque térmico a altíssima temperatura (230°C) por 90 segundos de cada lado. Salgue rigorosamente ao retirar da grelha com flor de sal para reter os sucos internos."
      },
      "carciofigiudia": {
        "category": "contorni",
        "name": "Carciofi alla Giudia",
        "shortDesc": "O ícone milenar do Gueto Judaico: alcachofra romanesca em dupla fritura dourada em formato de rosa crocante.",
        "origin": "Roma (Gueto Judaico, século XVI)",
        "difficulty": "Alta (Precisão no corte em espiral e controle térmico do óleo)",
        "history": "Criado nas cozinhas judaico-romanas para celebrar a quebra do jejum do Yom Kippur: as alcachofras inteiras se transformam em flores douradas e crocantes.",
        "scienceTip": "A DUPLA FRITURA CIENTÍFICA: O primeiro mergulho a 140°C cozinha o miolo e o talo até ficarem macios como manteiga. O segundo mergulho a 175-180°C evapora instantaneamente a umidade das folhas externas, inflando-as como chips supercrocantes.",
        "ingredients": {
          "artichoke": {
            "name": "Alcachofras romanescas sem espinhos (Mammole Romanesche)",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Azeite de oliva extravirgem para fritura profunda",
            "basePerPerson": 250,
            "unit": "ml"
          },
          "lemon": {
            "name": "Limão fresco para acidular a água de preparo",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "salt": {
            "name": "Sal fino e pimenta-do-reino para temperar o coração",
            "basePerPerson": 2,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Torneamento em Espiral da Alcachofra",
            "desc": "Remova as folhas externas duras girando a alcachofra com uma faquinha de ponta como se estivesse descascando uma laranja. Descasque o talo e apare as pontas formando um domo arredondado.",
            "timerMin": 10
          },
          {
            "title": "Primeira Fritura a 140°C (Cozimento do Miolo)",
            "desc": "Aqueça o azeite a 140°C. Mergulhe as alcachofras de cabeça para baixo por 10 a 12 minutos até que um garfo espete a base sem resistência. Escorra e deixe amornar por 5 minutos.",
            "timerMin": 12
          },
          {
            "title": "Abertura em Rosa e Tempero",
            "desc": "Bata com cuidado as alcachofras uma contra a outra ou aperte sobre a tábua para entreabrir as pétalas como uma flor desabrochando. Tempere o miolo com sal e pimenta moída.",
            "timerMin": 3
          },
          {
            "title": "Segunda Fritura a 180°C (Pétalas Crocantes)",
            "desc": "Aqueça o óleo a 175-180°C. Salpique gotas de água fria sobre as pétalas e mergulhe de cabeça para baixo pressionando levemente com uma pinça por 2 minutos até ficarem bem crocantes.",
            "timerMin": 2
          }
        ],
        "easyTip": "💡 Modo Fácil: Limpe bem retirando as primeiras 4 a 5 camadas de folhas duras. Mergulhe em água acidulada com limão para evitar a oxidação antes de fritar.",
        "proTip": "🏆 Chef Pro: Fritura dupla por imersão: primeiro a 140°C para cozinhar o coração, depois abertura em flor e segundo mergulho a 180°C por 90 segundos para que as folhas fiquem crocantes como batatas fritas."
      },
      "carciofiromana": {
        "category": "contorni",
        "name": "Carciofi alla Romana",
        "shortDesc": "Alcachofras romanescas recheadas com poejo romano silvestre, alho e salsinha, cozidas de cabeça para baixo em panela tampada.",
        "origin": "Roma e Campanha Romana",
        "difficulty": "Média (Limpeza cuidadosa e cozimento a vapor hermético)",
        "history": "O acompanhamento primaveril dos almoços de domingo romanos. O poejo silvestre (nepetella), típico das ruínas da Roma Antiga, dá um aroma inconfundível.",
        "scienceTip": "Cozidas de cabeça para baixo a 90-95°C cobertas com papel manteiga umedecido e tampa pesada, as alcachofras cozinham no vapor aromático da própria emulsão de azeite e vinho, mantendo os polifenóis sem escurecer.",
        "ingredients": {
          "artichoke": {
            "name": "Alcachofras romanescas de talo longo",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "mint": {
            "name": "Poejo romano silvestre fresco (mentuccia / nepetella)",
            "basePerPerson": 3,
            "unit": "g"
          },
          "parsley": {
            "name": "Salsinha fresca de folha lisa picadinha",
            "basePerPerson": 4,
            "unit": "g"
          },
          "garlic": {
            "name": "Dentes de alho novo picadinhos finamente",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "oil": {
            "name": "Azeite de oliva extravirgem generoso",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "wine": {
            "name": "Vinho branco seco ou água para o fundo de cozimento",
            "basePerPerson": 25,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Limpeza e Abertura do Miolo",
            "desc": "Retire as folhas externas fibrosas, descasque o talo e corte as pontas. Abra delicadamente as folhas do centro com os dedos para abrir espaço para o recheio de ervas.",
            "timerMin": 10
          },
          {
            "title": "Recheio Aromático de Nepetella",
            "desc": "Pique finamente a mentuccia romana, a salsinha, o alho, sal e pimenta. Preencha o centro de cada alcachofa pressionando as ervas para o fundo.",
            "timerMin": 5
          },
          {
            "title": "Acomodação de Cabeça para Baixo na Panela",
            "desc": "Coloque as alcachofras de cabeça para baixo, bem juntinhas numa panela de bordas altas. Regue com bastante azeite extravirgem, vinho branco e água até a metade da altura dos talos.",
            "timerMin": 5
          },
          {
            "title": "Cozimento Hermético a Vapor a 90°C",
            "desc": "Cubra com uma folha de papel manteiga molhada diretamente sobre as alcachofras e feche com uma tampa pesada. Cozinhe em fogo brando por 25 a 30 minutos até o talo ficar macio ao espetar.",
            "timerMin": 30
          }
        ],
        "easyTip": "💡 Modo Fácil: Disponha as alcachofras de cabeça para baixo numa panela estreita e funda, cobertas até a metade com água e azeite com a tampa fechada para cozinhar no vapor.",
        "proTip": "🏆 Chef Pro: Recheio clássico de poejo romano silvestre (nepetella), alho e um toque de farinha de rosca. Estufado hermético a 92°C para manter as folhas macias como manteiga."
      },
      "suppli": {
        "category": "contorni",
        "name": "Supplì al Telefono",
        "shortDesc": "O clássico croquete romano de arroz ao ragù encorpado de carne, casquinha crocante e miolo de muçarela fior di latte puxando fio.",
        "origin": "Roma (Trastevere, final do século XIX)",
        "difficulty": "Média (Modelagem e fritura por imersão)",
        "history": "Chamado de \"ao telefone\" porque, ao ser partido ao meio ainda quente, a muçarela derretida forma um fio elástico ininterrupto que lembra o cabo espiral dos telefones antigos.",
        "scienceTip": "O arroz cozido al dente deve resfriar a <15°C para estimular a retrogradação do amido, que une os grãos sem necessidade de ovos na massa. A fritura a 170-175°C cria uma barreira crocante imediata selando o queijo derretido no centro.",
        "ingredients": {
          "rice": {
            "name": "Arroz Carnaroli ou Arbório para risoto",
            "basePerPerson": 80,
            "unit": "g"
          },
          "ragu": {
            "name": "Ragù encorpado e saboroso de carne moída com tomate",
            "basePerPerson": 70,
            "unit": "g"
          },
          "mozzarella": {
            "name": "Muçarela fior di latte bem seca em palitos",
            "basePerPerson": 30,
            "unit": "g"
          },
          "pecorino": {
            "name": "Pecorino Romano DOP e Parmigiano ralados",
            "basePerPerson": 15,
            "unit": "g"
          },
          "eggs": {
            "name": "Ovos frescos para empanar",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "breadcrumbs": {
            "name": "Farinha de rosca fina para crosta bem crocante",
            "basePerPerson": 35,
            "unit": "g"
          },
          "oil": {
            "name": "Óleo para fritura por imersão (amendoim ou azeite)",
            "basePerPerson": 200,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Cozimento do Risoto ao Ragù",
            "desc": "Cozinhe o arroz diretamente no ragù com um pouco de caldo leve, deixando bem al dente. Fora do fogo, incorpore o pecorino e espalhe sobre uma assadeira grande.",
            "timerMin": 15
          },
          {
            "title": "Resfriamento e Retrogradação do Amido",
            "desc": "Deixe o arroz esfriar completamente por pelo menos 30 minutos na geladeira até ficar firme e compacto ao toque.",
            "timerMin": 30
          },
          {
            "title": "Moldagem Oval e Recheio de Muçarela",
            "desc": "Pegue uma porção de arroz na palma da mão, coloque um bastão de muçarela no meio e feche moldando um croquete oval bem vedado.",
            "timerMin": 10
          },
          {
            "title": "Empanamento Duplo e Fritura a 175°C",
            "desc": "Passe o supplì no ovo batido e depois na farinha de rosca fina. Frite em óleo abundante a 175°C por 3 a 4 minutos até dourar intensamente. Sirva pelando para o efeito do queijo esticando!",
            "timerMin": 4
          }
        ],
        "easyTip": "💡 Modo Fácil: Prepare o risoto ao ragù na véspera ou deixe na geladeira por 2 horas: o arroz frio e compacto molda com facilidade sem desmanchar.",
        "proTip": "🏆 Chef Pro: Empanamento duplo bem fino sem farinha de trigo. Fritura precisa a 175°C em óleo abundante: coração de fior di latte puxando fio a 60°C e crosta crocante milimétrica."
      },
      "maritozzo": {
        "category": "dolci",
        "name": "Maritozzo con la Panna",
        "shortDesc": "O clássico pãozinho doce romano macio e aromático com raspas de cítricos e baunilha, aberto ao meio e recheado de chantilly fresco.",
        "origin": "Roma (Época romana e tradição renascentista)",
        "difficulty": "Média (Fermentação biológica controlada)",
        "history": "No passado, o único doce permitido durante o jejum da Quaresma. No Renascimento, o noivo (\"maritozzo\") presenteava sua amada com um anel escondido dentro do chantilly.",
        "scienceTip": "A rede de glúten de uma farinha de força (W 300-330) retém o CO2 na fermentação a 26-28°C. O forno a 180°C doura a casquinha por reação de Maillard enquanto o miolo fica incrivelmente leve e macio como nuvem.",
        "ingredients": {
          "flour": {
            "name": "Farinha de trigo de força Manitoba (W320)",
            "basePerPerson": 75,
            "unit": "g"
          },
          "milk": {
            "name": "Leite integral fresco morno",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "sugar": {
            "name": "Açúcar refinado para a massa",
            "basePerPerson": 15,
            "unit": "g"
          },
          "yeast": {
            "name": "Fermento biológico fresco",
            "basePerPerson": 3,
            "unit": "g"
          },
          "oil": {
            "name": "Azeite de oliva extravirgem suave ou manteiga derretida",
            "basePerPerson": 12,
            "unit": "ml"
          },
          "cream": {
            "name": "Creme de leite fresco para bater chantilly (35% de gordura)",
            "basePerPerson": 80,
            "unit": "ml"
          },
          "zest": {
            "name": "Raspas finas de laranja fresca e baunilha",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Sova e Desenvolvimento do Glúten",
            "desc": "Dissolva o fermento no leite morno com uma colherzinha de açúcar. Misture à farinha e sove vigorosamente juntando açúcar, azeite e as raspas aromáticas até formar uma massa lisa e elástica.",
            "timerMin": 15
          },
          {
            "title": "Primeira Fermentação a 27°C",
            "desc": "Coloque a massa numa tigela coberta com filme plástico em local morno (26-28°C) por 90 minutos até dobrar de tamanho.",
            "timerMin": 90
          },
          {
            "title": "Modelagem dos Pãezinhos Ovais",
            "desc": "Divida em porções em formato oval alongado (como bolas de futebol americano). Arrume na assadeira forrada e deixe fermentar cobertos por mais 60 minutos.",
            "timerMin": 60
          },
          {
            "title": "Forno a 180°C e Pincelada de Calda",
            "desc": "Asse a 180°C por 12 a 14 minutos até dourarem de forma brilhante. Ao retirar do forno, pincele imediatamente uma calda de água e açúcar para dar acabamento reluzente.",
            "timerMin": 14
          },
          {
            "title": "Corte e Recheio de Chantilly com Espátula",
            "desc": "Deixe esfriar completamente. Faça um corte longitudinal no topo sem separar as duas partes. Bata o creme de leite bem gelado com um pouco de açúcar de confeiteiro e recheie fartamente, alisando a superfície com uma espátula.",
            "timerMin": 5
          }
        ],
        "easyTip": "💡 Modo Fácil: Coloque a tigela e os batedores no congelador por 15 minutos antes de bater o chantilly: ele montará na metade do tempo e ficará firme por muito mais tempo.",
        "proTip": "🏆 Chef Pro: Brioche romana com fermentação biológica lenta a 26°C, calda de açúcar para dar brilho após assar e creme de leite fresco a 38% de gordura batido com 10% de açúcar de confeiteiro."
      }
    },
    "catAll": "Todas as Receitas",
    "catPrimi": "🍝 Massas (The Big 4)",
    "catSecondi": "🥩 Pratos Principais",
    "catContorni": "🥬 Fritos e Acompanhamentos",
    "catDolci": "🥐 Doces Tradicionais",
    "portionSize": "Porção de Massa:",
    "portionStandard": "Padrão (100g)",
    "portionAbbondante": "🍝 Generosa (130g)",
    "servingsHintAbbondante": "🍝 Porção Generosa de Cantina Romana: {amount} de massa por pessoa",
    "troubleGuancialeTitle": "O guanciale queimou ou ficou borrachudo?",
    "troubleGuancialeSol": "Se ficou borrachudo: fogo alto demais, a gordura interna não derreteu (são necessários 8 a 10 min em fogo brando). Se queimou: descarte as partes queimadas para evitar o amargor, coe a gordura limpa e acrescente pimenta-do-reino tostada na hora para reequilibrar os aromas.",
    "troubleAcidTitle": "O molho de tomate da Amatriciana ficou muito ácido ou aguado?",
    "troubleAcidSol": "Os tomates pelados comerciais costumam ter ácido cítrico adicionado. Adicione uma pitadinha microscópica de bicarbonato de sódio (reação química neutralizante imediata) ou uma colherzinha de gordura do guanciale e deixe apurar 2 minutos em fogo vivo para concentrar os açúcares naturais.",
    "troubleCarciofiTitle": "As alcachofras à judaica ficaram duras ou não abriram em flor?",
    "troubleCarciofiSol": "Antes da segunda fritura a 180°C, segure a alcachofra pelo talo e bata suavemente o topo de cabeça para baixo sobre uma tábua para entreabrir as pétalas em corola. Se o miolo ainda estiver firme, aumente em 4 minutos a primeira imersão a 140°C.",
    "troubleSuppliTitle": "Os supplì abriram ou a muçarela vazou no óleo?",
    "troubleSuppliSol": "Nunca use arroz morno: ele deve descansar na geladeira por pelo menos 2 horas para que o amido fique compacto por retrogradação. Pique a muçarela e deixe escorrer por 1 hora. Faça sempre EMPANAMENTO DUPLO (ovo batido + farinha de rosca fina) e frite rigorosamente a 175°C.",
    "troubleCodaTitle": "A rabada à vaccinara ainda está dura após duas horas?",
    "troubleCodaSol": "O colágeno bovino requer hidrólise a 80-85°C por pelo menos 3 horas e meia. Não aumente a chama. Adicione meio copo de caldo ou água quente, tampe bem e mantenha o cozimento em fogo mínimo até que a carne se solte sozinha com um garfo.",
    "troubleSaltimboccaTitle": "Os saltimbocca ficaram secos ou o presunto endureceu?",
    "troubleSaltimboccaSol": "A vitela nunca deve cozinhar por mais de 60 a 80 segundos no lado enfarinhado. O lado com o presunto e a sálvia deve tocar a frigideira por meros 15 a 20 segundos, para impedir que a desidratação resseque o presunto cru.",
    "troubleCreamTitle": "O creme chantilly do Maritozzo desandou ou virou manteiga?",
    "troubleCreamSol": "Se o creme ultrapassar 10°C, os glóbulos de gordura se rompem. Use creme de leite fresco muito gelado (3-4°C) e mantenha a tigela e os batedores no congelador por 15 minutos antes do preparo. Se começar a talhar, adicione 2 colheres de sopa de creme líquido gelado e misture suavemente com uma espátula."
  },
  "ja": {
    "appName": "RomaLab 科学的ローマ料理",
    "appTagline": "本場ローマ伝統パスタ & ガストロノミー乳化動力学",
    "splashVersion": "v1.1.0 Pro • グローバル多言語エディション",
    "navRecipes": "レシピ",
    "navCalculator": "分量計算",
    "navLiveKitchen": "調理ガイド",
    "navThermal": "温度科学",
    "navScience": "理論と規則",
    "btnLanguage": "言語",
    "btnUnits": "単位",
    "btnTheme": "テーマ",
    "btnGuide": "ガイド",
    "btnMenu": "メニュー",
    "btnShare": "共有",
    "btnTroubleshoot": "SOS救急",
    "selectLanguage": "言語を選択",
    "close": "閉じる",
    "servings": "人数",
    "servingsHint": "基本分量: 1人あたりパスタ{amount}",
    "ingredientsTitle": "1g単位の科学的配合計算",
    "ingredientsSubtitle": "卵黄、グアンチャーレの脂、茹で汁のデンプンを自動比例計算。",
    "emulsionThermodynamics": "マンテカトゥーラ熱力学ウィンドウ",
    "emulsionSubtitle": "アミロースデンプン、豚脂、卵黄タンパク質による乳化の科学。",
    "thermalSafeZone": "安全乳化温度帯:",
    "thermalCold": "温度不足 (<50°C)",
    "thermalOptimal": "黄金の乳化ゾーン (58-65°C)",
    "thermalDanger": "凝固・いり卵の危険 (>68°C)",
    "startCooking": "タイマー連動ステップバイステップ調理",
    "cookingSubtitle": "リアルタイムで完璧なタイミングと火加減をナビゲート。",
    "step": "工程",
    "timer": "タイマー",
    "start": "開始",
    "pause": "一時停止",
    "reset": "リセット",
    "done": "完了！",
    "alertTempDanger": "【警告】温度68°C超過！いり卵化の危険！直ちに火を止めて鍋を離してください。",
    "alertTempOptimal": "【最適温度 (58-65°C)】火から下ろして素早く乳化させてください。",
    "alertTempCold": "温度が低すぎます (<50°C): ソースがうまく絡みません。",
    "modeEasy": "⭐ イージー (失敗ゼロ)",
    "modePro": "🏆 プロ (伝統の極み)",
    "modeEasyLabel": "⭐ イージー (アシスト)",
    "modeEasyDesc": "安全マージンを取り、卵白やマイルドなチーズブレンドで失敗を防ぐ処方。",
    "modeProDesc": "正統派ローマ規約: 100%新鮮卵黄、純ペコリーノ・ロマーノDOP、濃縮デンプン乳化。",
    "hintYolks": "💡 イージー: 卵白を1個分加えるとソースが分離せず滑らかに仕上がります",
    "hintPecorino": "💡 イージー: ペコリーノ50% + パルミジャーノ50%のブレンドが溶けやすくおすすめ",
    "hintWater": "💡 イージー: ぬるめの茹で汁(55°C)とチーズを小型泡立て器かブレンダーで混ぜるとダマになりません",
    "substitutionsTitle": "国際食材ガイド & 代替指針",
    "substitutionsSubtitle": "伝統規約、食品科学、海外での調達のコツ。",
    "subGuancialeTitle": "🥓 グアンチャーレ vs ベーコン vs パンチェッタ",
    "guancialeNote": "豚ホホ肉の塩漬け（グアンチャーレ）は融点が低く(32-35°C)、シルキーな乳化に不可欠です。代替案: スモークしていない生パンチェッタ。避けるべきもの: 砂糖や強い燻製香のあるアメリカンベーコン。",
    "subPecorinoTitle": "🧀 ペコリーノ・ロマーノDOPとブレンド",
    "pecorinoNote": "濃厚で塩気のある羊乳チーズ。塩味が強すぎると感じる場合、本場シェフも認める黄金比「ペコリーノ70% + パルミジャーノ30%」が最適です。",
    "subPastaTitle": "🌾 ブロンズダイス抽出パスタとデンプン",
    "pastaNote": "表面がザラザラしたブロンズダイス製法のパスタは、茹で汁に豊富にアミロースを放出します。これが天然の乳化剤となり、油分と水分を一体化させます。",
    "emergencyTitle": "🚨 緊急代替パントリー",
    "emergencySubtitle": "本場の食材が揃わない時でも、科学の力で最高の一皿を作るテクニック。",
    "emGuancialeTitle": "🥓 グアンチャーレがない場合:",
    "emGuancialeOpt1": "✅ 最適案: 無塩せき・無燻製のブロックパンチェッタまたは豚バラ。茹で塩を少し控えめに。",
    "emGuancialeOpt2": "⚠️ ベーコンを使う裏技: 炒める前に熱湯で2分間下茹ですると、人工的な燻製香と糖分が抜けて本物に近づきます！",
    "emPecorinoTitle": "🧀 ペコリーノ・ロマーノがない場合:",
    "emPecorinoOpt1": "✅ 推奨案: ペコリーノ50% + パルミジャーノ・レッジャーノ50%。非常に溶けやすくなります。",
    "emPecorinoOpt2": "⚠️ パルミジャーノのみの場合: 塩をひとつまみ、黒胡椒を多めに加えて羊乳のパンチを補います。",
    "emStarchTitle": "🌾 パスタがつるつるしてデンプンが出ない場合:",
    "emStarchOpt1": "✅ 少なめのお湯で茹でる裏技: 通常の半分の湯量で茹でると、茹で汁が濃厚なデンプン水になります！",
    "emStarchOpt2": "🔬 分子ガストロノミー裏技: 水溶きコーンスターチまたは片栗粉小さじ半分をフライパンの油に加えると、一瞬でツヤツヤの乳化が完成します。",
    "troubleshootTitle": "ガストロノミー救急箱",
    "troubleshootDesc": "フライパンで失敗しかけた時の物理的リカバリー法。",
    "troubleClumpTitle": "ペコリーノがゴム状のダマになってしまった？",
    "troubleClumpSol": "カゼインが65℃を超えて水分を排出し凝固した状態です。鍋を火から下ろし、澱粉が豊富なぬるめの茹で汁（約55℃）を大さじ2〜3杯加え、計量カップ等で泡立て器やハンドブレンダーで素早く滑らかになるまで撹拌してからパスタに戻してください。",
    "troubleCurdleTitle": "卵が固まり始めて炒り卵（スクランブルエッグ）状態に？",
    "troubleCurdleSol": "直ちにフライパンを熱源から遠ざけてください。パスタを冷たいボウルに移し、氷1個または冷水大さじ2杯を加えて猛スピードでかき混ぜます。もしすでにダマが見える場合は、澱粉を含んだ茹で汁大さじ1を加えハンドブレンダーで5秒間攪拌すれば、レシチンが再び乳化を再生します。",
    "troubleSaltyTitle": "出来上がりが塩辛くなりすぎてしまった？",
    "troubleSaltySol": "熟成ペコリーノDOPとグアンチャーレには天然の塩分が多く含まれます。鉄則：パスタの茹で湯の塩分は通常の半分（最大でも湯1Lに対し5g）に抑えること。完成後に直すには、塩の入っていないぬるま湯を加えて伸ばし、トーストした黒胡椒を加えます（ピペリンが鋭い塩気を和らげます）。",
    "recipes": {
      "carbonara": {
        "name": "スパゲッティ・アッラ・カルボナーラ",
        "shortDesc": "新鮮卵黄、カリカリのグアンチャーレ、ペコリーノ・ロマーノDOP、煎り黒胡椒。",
        "origin": "ローマ (1944年)",
        "difficulty": "中級 (温度管理が命)",
        "history": "連合軍のレーションとローマ料理人の創造性が出会って誕生し、世界最高峰のパスタへと洗練されました。",
        "scienceTip": "卵黄中のレシチンが強力な乳化剤となります。64〜66°Cでタンパク質が熱変性せずに油分を抱き込み、ベルベットのような艶やかなクリームを作ります。",
        "ingredients": {
          "pasta": {
            "name": "ブロンズダイス スパゲッティまたはリガトーニ",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "豚ホホ肉の塩漬け (グアンチャーレ)",
            "basePerPerson": 60,
            "unit": "g"
          },
          "yolks": {
            "name": "新鮮な卵黄 (Lサイズ)",
            "basePerPerson": 1,
            "extraPadella": 1,
            "unit": "pz"
          },
          "pecorino": {
            "name": "すりおろしたペコリーノ・ロマーノDOP",
            "basePerPerson": 35,
            "unit": "g"
          },
          "pepper": {
            "name": "挽きたて黒胡椒（粒）",
            "basePerPerson": 2.5,
            "unit": "g"
          },
          "salt": {
            "name": "パスタ用塩 (通常の半分: 1Lあたり5g)",
            "basePerPerson": 5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "グアンチャーレのカットと加熱",
            "desc": "6mm厚の拍子木切りにし、冷たいフライパンに入れます。中弱火で10〜12分、外側が黄金色でカリッと、中はジューシーに脂を抽出します。",
            "timerMin": 10
          },
          {
            "title": "冷製カルボクリームの調合",
            "desc": "ボウルに卵黄、すりおろしたペコリーノ、粗挽き黒胡椒を合わせ、ペースト状になるまで混ぜます。温かい溶け出た豚脂を大さじ2杯加えて温度慣らしをします。",
            "timerMin": 3
          },
          {
            "title": "パスタ茹で上げとデンプン抽出",
            "desc": "1Lあたり5gの塩を加えた湯で茹でます。袋の表示時間の2分前に引き上げ、デンプンが溶け出た茹で汁を1カップ取っておきます。",
            "timerMin": 8
          },
          {
            "title": "フライパンでのリゾッタータ",
            "desc": "アルデンテのパスタをグアンチャーレの脂が残るフライパンに移し、強火で茹で汁を注ぎながら1分間激しくあおり、下地乳化を作ります。",
            "timerMin": 1
          },
          {
            "title": "火を止めて科学的マンテカトゥーラ",
            "desc": "【必ず火を止め、フライパンをコンロから離します】45秒待ち、60〜65°Cに下がったら卵液のボウルにパスタを投入。手早く混ぜて乳化させ、カリカリのグアンチャーレをトッピングします。",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: 茹で汁を大さじ2杯取り分け、50℃程度まで冷ましてから卵黄とペコリーノに混ぜて伸ばしておきます。パスタと和えるマンテカトゥーラは必ず完全に火から下ろして行ってください。",
        "proTip": "🏆 Pro Chef: 平飼い卵の新鮮な卵黄のみを使用し、グアンチャーレの脂は焦がさず80℃で抽出。62〜65℃の温度帯でフライパンを波打つようにあおり（オ・オンダ）、レシチンの乳化粘度を極限まで引き出します。"
      },
      "cacioepepe": {
        "name": "トンナレッリ・カチョ・エ・ペペ",
        "shortDesc": "極上ブロンズパスタ、ペコリーノ・ロマーノDOP、煎り黒胡椒の3要素。",
        "origin": "ローマ農村部",
        "difficulty": "上級 (精密な温度制御)",
        "history": "アペニン山脈の牧畜民が旅路に携えた、保存性の高い伝統の羊飼い料理。",
        "scienceTip": "ペコリーノは55°Cで溶け始めますが、65°Cを超えるとカゼインが凝固しゴム化します。茹で汁のアミロースデンプンが保護コロイドとなって凝固を防ぎます。",
        "ingredients": {
          "pasta": {
            "name": "生トンナレッリまたは太めのブロンズパスタ",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pecorino": {
            "name": "粉雪状にすりおろしたペコリーノ・ロマーノ",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pepper": {
            "name": "黒胡椒粒 (煎り用)",
            "basePerPerson": 3.5,
            "unit": "g"
          },
          "water": {
            "name": "濃縮パスタ茹で汁",
            "basePerPerson": 40,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "胡椒の乾煎りと香り抽出",
            "desc": "粒胡椒を粗く潰し、油を引かずにフライパンで2分間乾煎りします。香りが立ったら熱い茹で汁をおたま1杯注ぎ、芳醇な胡椒スープを作ります。",
            "timerMin": 2
          },
          {
            "title": "冷製チーズペースト作り",
            "desc": "ボウルにペコリーノを入れ、55〜60°C程度に冷ました茹で汁を少しずつ加えながら泡立て器でダマのない滑らかなペーストを作ります。絶対に直接火にかけないでください！",
            "timerMin": 3
          },
          {
            "title": "仕上げのリゾッタータ",
            "desc": "アルデンテの麺を胡椒のスープに移し、強火であおりながらデンプンを煮詰めてツヤを出します。",
            "timerMin": 2
          },
          {
            "title": "火から下ろしてマンテカトゥーラ",
            "desc": "フライパンをコンロから下ろし、60°C以下に冷めるのを待ってチーズペーストを加えます。激しくあおると完璧なシルキーソースになります。",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: ボウルにすりおろしたペコリーノと50℃のぬるま湯を入れ、泡立て器でダマのないペースト状に練り上げておきます。フライパンを火から完全に下ろしてからパスタに加えます。",
        "proTip": "🏆 Pro Chef: 最後の3分間、フライパンで強火で激しくリゾッタータ（煮絡め）して澱粉を大量抽出。58℃でのダイナミックなマンテカトゥーラにより、濃縮アミロースとカゼインの間で水素結合を形成させ完璧な乳化を達成します。"
      },
      "amatriciana": {
        "name": "ブカティーニ・アッラ・アマトリチャーナ",
        "shortDesc": "グアンチャーレ、サンマルツァーノトマト、ペコリーノ・ロマーノDOP、白ワイン。",
        "origin": "アマトリーチェ / ローマ",
        "difficulty": "中級",
        "history": "18世紀末、グリーチャにトマトが加わって誕生したラツィオ州を代表する赤の傑作。",
        "scienceTip": "サンマルツァーノトマトの自然な酸味 (pH約4.3) がグアンチャーレの濃厚な脂と完璧な調和を生み出します。",
        "ingredients": {
          "pasta": {
            "name": "ブロンズダイス ブカティーニ",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "拍子木切りのグアンチャーレ",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pomodoro": {
            "name": "手で潰したサンマルツァーノホールトマト",
            "basePerPerson": 120,
            "unit": "g"
          },
          "pecorino": {
            "name": "すりおろしたペコリーノ・ロマーノDOP",
            "basePerPerson": 30,
            "unit": "g"
          },
          "vino": {
            "name": "辛口白ワイン (風味付け)",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "chili": {
            "name": "赤唐辛子 (お好みで)",
            "basePerPerson": 0.5,
            "unit": "pz"
          }
        },
        "steps": [
          {
            "title": "グアンチャーレの加熱",
            "desc": "弱火でじっくり脂を引き出しながらカリッと焼き上げます。カリカリ部分は温めた小皿に取り分けておきます。",
            "timerMin": 8
          },
          {
            "title": "白ワインとトマトの煮込み",
            "desc": "残った脂に白ワインを加えてアルコールを飛ばし、唐辛子と潰したトマトを加えます。中火で12〜15分、ツヤが出るまで煮詰めます。",
            "timerMin": 12
          },
          {
            "title": "和えと仕上げ",
            "desc": "茹で上がったブカティーニをソースに投入し1分間絡めます。火を止め、ペコリーノをたっぷり振り入れ、取り分けたグアンチャーレを乗せます。",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: グアンチャーレがカリッと黄金色になったら一度取り出しておきます。残った脂でトマトソースを煮込み、盛り付けの直前にグアンチャーレを上に乗せることで最高のクリスピー感を保てます。",
        "proTip": "🏆 Pro Chef: 熱したフライパンの縁に辛口白ワインを回し入れ、キャラメリゼされた旨味成分をデグラッセ。手で潰したサンマルツァーノトマトを強火で短時間煮込み、フレッシュな果実味と酸味を活かします。"
      },
      "gricia": {
        "name": "メッツェ・マニケ・アッラ・グリーチャ",
        "shortDesc": "元祖「白いアマトリチャーナ」: パスタ、グアンチャーレ、ペコリーノ、黒胡椒。",
        "origin": "グリッシャーノ / 古代ローマ",
        "difficulty": "中級",
        "history": "すべてのローマパスタの母。カルボナーラもアマトリチャーナもこの料理の発展形です。",
        "scienceTip": "卵もトマトも使わないため、パスタのデンプンと豚の脂を物理的にあおり合わせる乳化技術がすべてを決します。",
        "ingredients": {
          "pasta": {
            "name": "筋入りメッツェ・マニケまたはリガトーニ",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "グアンチャーレ (細切り)",
            "basePerPerson": 55,
            "unit": "g"
          },
          "pecorino": {
            "name": "ペコリーノ・ロマーノDOP",
            "basePerPerson": 40,
            "unit": "g"
          },
          "pepper": {
            "name": "挽きたて黒胡椒",
            "basePerPerson": 2.5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "グアンチャーレの調理",
            "desc": "中火でじっくり火を通し、外側サクサク、内側ジューシーに仕上げます。2/3を取り分けておきます。",
            "timerMin": 8
          },
          {
            "title": "デンプンエマルションの形成",
            "desc": "フライパンの脂に熱いパスタの茹で汁と胡椒を投入し、乳白色の香り高いエマルションベースを作ります。",
            "timerMin": 2
          },
          {
            "title": "火を止めてマンテカトゥーラ",
            "desc": "茹でたてパスタをフライパンで60秒あおり、火を止めて30秒待ちます。ペコリーノを振り入れて激しく混ぜ合わせ、クリーミーに仕上げます。",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 Easy Mode: グアンチャーレの脂にパスタの茹で汁をごく少量ずつ加えて伸ばします。熱い鍋肌に直接ペコリーノが触れるとダマになるため、パスタを空中で激しくあおりながら和えてください。",
        "proTip": "🏆 Pro Chef: 高貴な脂と澱粉による完全な二相エマルジョン。乳鉢で粗く砕いた黒胡椒をリゾッタータの前に150℃の乾煎りでトーストし、ピペリンの芳醇なアロマを解き放ちます。"
      },
      "saltimbocca": {
        "category": "secondi",
        "name": "サルティンボッカ・アッラ・ロマーナ",
        "shortDesc": "仔牛の薄切り肉に上質な生ハムとフレッシュセージを重ね、バターで香ばしくソテーし辛口白ワインで仕上げた伝統の肉料理。",
        "origin": "ローマ（レーゴラ地区、19世紀末）",
        "difficulty": "初級（90秒の瞬間ソテー）",
        "history": "1891年に美食家ペッレグリーノ・アルトゥージがローマの老舗居酒屋『レ・ヴェネテ』で食し記録した名作。「口に飛び込むほど美味」という意味を持ちます。",
        "scienceTip": "粉をはたいた肉の底面のみに160℃のメイラード反応を起こします。火を止めた後、フライパンに残った旨味エキスに冷たいバターと白ワインを乳化（ブール・モンテ）させ、艶やかでシルキーなソースを形成します。",
        "ingredients": {
          "veal": {
            "name": "仔牛の内モモ肉またはロース肉の薄切り（厚さ3mm）",
            "basePerPerson": 160,
            "unit": "g"
          },
          "prosciutto": {
            "name": "上質な熟成プロシュート・クルード（生ハム）",
            "basePerPerson": 50,
            "unit": "g"
          },
          "sage": {
            "name": "新鮮な生セージの葉（丸ごと）",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "butter": {
            "name": "風味豊かな発酵バター（焼き色用と乳化仕上げ用）",
            "basePerPerson": 25,
            "unit": "g"
          },
          "wine": {
            "name": "辛口白ワイン（フラスカーティ・スペリオーレDOC推奨）",
            "basePerPerson": 30,
            "unit": "ml"
          },
          "flour": {
            "name": "薄力粉（肉の裏面のみに軽く塗布）",
            "basePerPerson": 10,
            "unit": "g"
          },
          "pepper": {
            "name": "挽きたての黒胡椒（生ハムの塩気があるため塩は不要）",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "肉の叩き伸ばしとセージの留め付け",
            "desc": "仔牛肉をクッキングシートに挟み、肉たたきで均一に薄く（厚さ3mm）伸ばします。各肉片の上にプロシュート1枚とセージの葉1枚を重ね、楊枝を横向きに波縫いのように刺して固定します。",
            "timerMin": 5
          },
          {
            "title": "肉の底面のみへの粉付け",
            "desc": "フライパンと接する肉の底面だけに薄力粉を薄くまぶし、余分な粉をしっかり叩き落とします。生ハムやセージの面には絶対に粉を付けないでください。",
            "timerMin": 2
          },
          {
            "title": "強火での瞬間焼き入れ",
            "desc": "フライパンにバターの2/3量を入れ強火で溶かします。泡立ったら粉をつけた肉の面を下にして並べます。動かさずに60〜80秒間ソテーし、黄金色の香ばしい焼き目をつけます。",
            "timerMin": 2
          },
          {
            "title": "白ワインのフランベとブール・モンテ乳化",
            "desc": "肉を裏返して生ハム側をわずか15秒だけ火に当てます。白ワインを一気に注ぎアルコールを飛ばします。肉を温めた皿に取り出します。火を止め、フライパンの残汁に冷たいバターの残りを加えて素早く揺すり混ぜ、艶やかなエマルジョンソースを作って肉に回しかけます。",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Easy Mode: 肉の底面（生ハムが乗っていない側）のみに薄力粉を薄くまぶします。蓋をして中火で60秒ほど蒸し焼きにすると、肉がパサつかずジューシーに仕上がります。",
        "proTip": "🏆 Pro Chef: 160℃の超強火で白ワインを一気に注ぎ入れてデグラッセ。仕上げに冷たい発酵バターを素早く振り混ぜ、ブール・モンテで艶やかなベルベット状の極上ソースを作ります。"
      },
      "coda": {
        "category": "secondi",
        "name": "コーダ・アッラ・ヴァッキナーラ",
        "shortDesc": "牛テールをセロリ、サンマルツァーノトマト、松の実、レーズン、無糖ココアとともに極弱火で4時間煮込んだローマ伝統の最高峰煮込み料理。",
        "origin": "ローマ（テスタッチョ地区 / 第五の四分円）",
        "difficulty": "中級（低温での長時間の煮込み）",
        "history": "牛の内臓や端肉を扱う『クイント・クアルト（第五の四分円）』の代表格。旧テスタッチョ屠殺場の皮剥ぎ職人（ヴァッキナーリ）たちが安価な牛テールを美味しく食べるために考案しました。",
        "scienceTip": "牛テールのコラーゲンは、80〜85℃の微小沸騰状態（ピパーレ / pipare）を保つことで豊潤なゼラチンへと加水分解されます。無糖ココアとレーズンがルネサンス期発祥のアグロドルチェ（甘酸っぱさ）を生み出し、脂っこさを巧みに抑えます。",
        "ingredients": {
          "tail": {
            "name": "牛テール（関節ごとに均一な輪切りにしたもの）",
            "basePerPerson": 350,
            "unit": "g"
          },
          "celery": {
            "name": "白セロリの茎（筋を取りシャキッとしたもの）",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pomodoro": {
            "name": "サンマルツァーノDOPホールトマト（手で丁寧に潰したもの）",
            "basePerPerson": 200,
            "unit": "g"
          },
          "wine": {
            "name": "コクのある重口赤ワイン（チェザネーゼなど）",
            "basePerPerson": 60,
            "unit": "ml"
          },
          "lard": {
            "name": "グアンチャーレと香味野菜（人参・玉ねぎ）のソフリット",
            "basePerPerson": 25,
            "unit": "g"
          },
          "cocoa": {
            "name": "無糖ピュアココアパウダー",
            "basePerPerson": 2,
            "unit": "g"
          },
          "pinenuts": {
            "name": "軽く煎った松の実とぬるま湯で戻したレーズン",
            "basePerPerson": 10,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "テールの強火焼き付けとメイラード反応",
            "desc": "厚手の煮込み鍋でグアンチャーレのソフリットを弱火で炒め脂を出します。牛テールを加え、強火で表面全体を返しながら約10分間、しっかりとした焼き色がつくまで焼き付けます。",
            "timerMin": 10
          },
          {
            "title": "赤ワインでのデグラッセとトマト投入",
            "desc": "赤ワインを注ぎ入れ、鍋底の旨味を木べらでこそぎ落としながらアルコール分を完全に蒸発させます。手で潰したトマト、塩、挽きたて黒胡椒を加え、静かに沸騰させます。",
            "timerMin": 10
          },
          {
            "title": "コラーゲンの穏やかな加水分解（極弱火）",
            "desc": "ぴったりと蓋をし、極弱火（80〜85℃）に落とします。表面がかすかに揺れる程度（ピパーレ）で約3時間半、肉が骨から自然に外れる柔らかさになるまでじっくり煮込みます。",
            "timerMin": 180
          },
          {
            "title": "秘伝の仕上げ：セロリと無糖ココア",
            "desc": "セロリを塩茹でして3分加熱しザルに上げます。鍋にセロリ、松の実、レーズン、そして煮汁少量で溶いたココアパウダーを加えます。弱火で20分間馴染ませて味を調え完成です。",
            "timerMin": 20
          }
        ],
        "easyTip": "💡 Easy Mode: 時間がない場合は、最初の45分間を圧力鍋で加圧調理し、その後蓋を取って弱火で煮詰めることでソースにとろみをつけ時短が可能です。",
        "proTip": "🏆 Pro Chef: 85℃の微小沸騰で4時間じっくり煮込み、コラーゲンをトロトロのゼラチン質へ完全加水分解。仕上げの15分前に無糖ココアとロースト松の実を加えるのが正統なローマの技法です。"
      },
      "abbacchio": {
        "category": "secondi",
        "name": "アッバッキオ・アッラ・スコッタディート",
        "shortDesc": "フレッシュローズマリー、ニンニク、オリーブオイルでマリネした乳飲み仔羊の骨付き肉を、指が火傷するほど熱々で頬張る直火グリル。",
        "origin": "ローマおよびアグロ・ロマーノ（ローマ近郊）",
        "difficulty": "初級（高温短時間グリル）",
        "history": "炭火から下ろしたばかりの骨付き肉を手づかみで食べると『指を火傷する（scottadito）』ことから名付けられた、ローマの春の復活祭に欠かせない伝統料理。",
        "scienceTip": "乳飲み仔羊の非常に柔らかな肉質には、220〜250℃の強力な直接接触熱が必要です。片面2分ずつ急激にメイラード反応を起こし、内部温度を56〜58℃のジューシーなロゼに保つことで肉汁の流出を防ぎます。",
        "ingredients": {
          "chops": {
            "name": "新鮮な乳飲み仔羊（アッバッキオ）の骨付きロース肉",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "rosemary": {
            "name": "刻んだフレッシュローズマリーとタイム",
            "basePerPerson": 3,
            "unit": "g"
          },
          "garlic": {
            "name": "皮付きのまま包丁の腹で潰した新ニンニク",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "上質なエクストラバージンオリーブオイルまたはラード",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "lemon": {
            "name": "添え用の新鮮なカットレモン",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "salt": {
            "name": "挽き粗塩と挽きたて黒胡椒",
            "basePerPerson": 3,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "常温でのアロマハーブマリネ",
            "desc": "仔羊肉にオリーブオイル（またはラード）、刻みローズマリー、潰しニンニク、黒胡椒を手で揉み込みます。肉の芯まで冷えを取るため、室温で15〜20分休ませます。",
            "timerMin": 15
          },
          {
            "title": "グリルパンまたは鉄板の超高温予熱",
            "desc": "鋳鉄製グリルパンまたは網を強火で煙がうっすら立ち上るまで（230〜250℃）予熱します。瞬時に肉の表面を焼き固めるために極めて高い温度が不可欠です。",
            "timerMin": 5
          },
          {
            "title": "片面2分間の強火焼き",
            "desc": "間隔を空けて仔羊肉を並べます。肉を動かさずに2分間焼き付け、きれいな焼き目がついたら裏返してさらに2分間焼きます。塩は裏返した直後に表面に振ります。",
            "timerMin": 4
          },
          {
            "title": "熱々手づかみでの提供",
            "desc": "温めた皿に盛り付け、レモンを添えて直ちに出します。冷めないうちに骨を手で直接掴み、熱々の肉汁を堪能するのが本場ローマ流の食べ方です！",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 Easy Mode: 焼く前にオリーブオイル、ローズマリー、潰しニンニクで15分ほど常温マリネします。テフロン加工のグリルパンをしっかり予熱しておけば焦げ付きません。",
        "proTip": "🏆 Pro Chef: 230℃の超高温接触で片面わずか90秒ずつ強火で焼き付けます。浸透圧による肉汁の流出を防ぐため、塩は焼き上がりの直前に大粒のフレーク塩を振ります。"
      },
      "carciofigiudia": {
        "category": "contorni",
        "name": "カルチョーフィ・アッラ・ジュディア",
        "shortDesc": "ローマ・ゲットー発祥の至宝。大輪のアーティチョークを丸ごと2段階で素揚げし、満開の黄金の薔薇のように仕上げた名物料理。",
        "origin": "ローマ（ユダヤ人街 / ゲットー、16世紀）",
        "difficulty": "上級（螺旋状の飾り包丁と2段階の温度管理）",
        "history": "ヨム・キプールの断食明けを祝うためにローマ・ユダヤ人街の家庭で生まれた伝統料理。丸ごとのアーティチョークが黄金の花びらとなって咲き誇ります。",
        "scienceTip": "科学的な二段階揚げ（デュアル・フライ）：第1段階の140℃の低温油で茎と花芯をバターのように柔らかく火を通し、第2段階の175〜180℃の高温油で外側の花弁の水分を一瞬で蒸発させ、ポテトチップスのような軽快なクリスピー食感を生み出します。",
        "ingredients": {
          "artichoke": {
            "name": "ローマ産マンモレ種アーティチョーク（丸型・トゲなし）",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "揚げ用エクストラバージンオリーブオイル",
            "basePerPerson": 250,
            "unit": "ml"
          },
          "lemon": {
            "name": "変色防止のレモン水用新鮮なレモン",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "salt": {
            "name": "天然海塩と挽きたて黒胡椒",
            "basePerPerson": 2,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "螺旋状の薔薇剥き（トリミング）",
            "desc": "ペティナイフをリンゴの皮を剥くように回しながら外側の硬い濃緑のガクを削ぎ落とします。茎の外皮を薄く剥き、先端を切り落として丸く整え、レモン水に漬けてアクと変色を防ぎます。",
            "timerMin": 10
          },
          {
            "title": "第1揚げ：140℃での芯の加熱",
            "desc": "水気を拭き取り、140℃に熱したオリーブオイルに茎を上にして沈めます。10〜12分間揚げ、フォークが茎の付け根に抵抗なくスッと通るまで柔らかくします。引き上げて5分休ませます。",
            "timerMin": 12
          },
          {
            "title": "花弁の開花と花芯の味付け",
            "desc": "アーティチョーク同士を軽く打ち合わせるか、まな板の上で優しく押し付け、花びらを外側に向かって満開の薔薇のように放射状に開かせます。花芯に塩と黒胡椒を振ります。",
            "timerMin": 3
          },
          {
            "title": "第2揚げ：180℃での花弁のクリスピー揚げ",
            "desc": "油を175〜180℃まで温度を上げます。花弁に冷水を数滴振りかけ、花弁を下にしてトングで軽く押さえつけながら約2分間揚げます。花びらがサクサクのチップス状になったら引き上げて油を切ります。",
            "timerMin": 2
          }
        ],
        "easyTip": "💡 Easy Mode: 外側の硬い葉を4〜5列しっかり取り除きます。揚げる直前までレモン水に漬けておくことで、アクによる黒ずみ酸化を綺麗に防げます。",
        "proTip": "🏆 Pro Chef: 厳密な二段階浸漬揚げ：まず140℃で芯まで柔らかく火を通し、まな板で優しく叩いて花弁を開かせ、180℃で90秒間二度揚げして花びらをポテトチップスのようにパリパリに結晶化させます。"
      },
      "carciofiromana": {
        "category": "contorni",
        "name": "カルチョーフィ・アッラ・ロマーナ",
        "shortDesc": "野生ミント（メントゥッチャ）、ニンニク、パセリを花芯に詰め、鍋に逆さまに立てて白ワインとオリーブオイルで密閉蒸し煮にした春のローマの味覚。",
        "origin": "ローマおよびローマ近郊田園地帯",
        "difficulty": "中級（丁寧な下処理と密閉蒸し煮）",
        "history": "ローマのトラットリアの日曜日の食卓に欠かせない春の風物詩。古代ローマ遺跡周辺に自生するメントゥッチャ（カラミント）が放つ爽快な香りが身上です。",
        "scienceTip": "90〜95℃の密閉環境で水で濡らしたクッキングシートを落とし蓋にし、厚手の鍋蓋で蒸気を逃さず調理。白ワインとオリーブオイルのエマルジョン蒸気で蒸し煮にすることで、ポリフェノールの酸化・黒変を防ぎ、とろけるような食感を維持します。",
        "ingredients": {
          "artichoke": {
            "name": "長い茎付きのローマ産マンモレ種アーティチョーク",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "mint": {
            "name": "ローマ自生の野生フレッシュミント（メントゥッチャ / ネペテッラ）",
            "basePerPerson": 3,
            "unit": "g"
          },
          "parsley": {
            "name": "刻んだフレッシュイタリアンパセリ",
            "basePerPerson": 4,
            "unit": "g"
          },
          "garlic": {
            "name": "みじん切りにした新ニンニク",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "oil": {
            "name": "上質なエクストラバージンオリーブオイル",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "wine": {
            "name": "辛口白ワイン（または蒸し煮用ブイヨン）",
            "basePerPerson": 25,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "下処理と花芯のポケット作り",
            "desc": "外側の硬い葉を剥き、茎の皮をピーラーで剥いて先端を切り落とします。指先で中央の花びらを優しく押し広げ、ハーブを詰めるためのポケットを作ります。",
            "timerMin": 10
          },
          {
            "title": "メントゥッチャハーブ餡の詰め込み",
            "desc": "メントゥッチャ、イタリアンパセリ、ニンニク、塩、黒胡椒を細かく刻んで混ぜ合わせます。各アーティチョークの中心奥深くまで指でぎゅっと詰め込みます。",
            "timerMin": 5
          },
          {
            "title": "深鍋への逆さま密着配置",
            "desc": "深さのある鍋にアーティチョークを頭を下にして隙間なくきっちりと並べます。エクストラバージンオリーブオイル、白ワイン、水を茎の半分程度の高さまで注ぎ入れます。",
            "timerMin": 5
          },
          {
            "title": "濡れペーパー密閉による90℃スチーム蒸し煮",
            "desc": "水で濡らしたクッキングシートをアーティチョークに密着させ、重い鍋蓋を閉めます。ごく弱火で25〜30分間蒸し煮にし、茎の付け根に竹串がスッと通れば出来上がりです。",
            "timerMin": 30
          }
        ],
        "easyTip": "💡 Easy Mode: 径が狭く深さのある小鍋にアーティチョークを逆さまに隙間なく並べ、半分の高さまで水とオリーブオイルを注ぎ、蓋をして蒸気で均一に火を通します。",
        "proTip": "🏆 Pro Chef: 野生のローマミント（カラミント / メントゥッチャ）、ニンニク、少量のパン粉による伝統の詰め物。92℃での密閉『釣り鐘型』スチーム蒸し煮により、花弁をバターのようにとろける食感に仕上げます。"
      },
      "suppli": {
        "category": "contorni",
        "name": "スップリ・アル・テレフォノ",
        "shortDesc": "濃厚な牛挽肉のラグーで炊いたリゾットにモッツァレラを包み、衣をつけてカリッと黄金色に揚げた、割るとチーズが電話線のように伸びる名物ライスコロッケ。",
        "origin": "ローマ（トラステヴェレ地区、19世紀末）",
        "difficulty": "中級（成形と適切な油温管理）",
        "history": "二つに割ったときに溶け出たモッツァレラが古い黒電話の受話器の螺旋コードのように長く伸びることから『アル・テレフォノ（電話風）』と呼ばれています。",
        "scienceTip": "炊いたリゾットを15℃以下に冷却することでアミロース澱粉の老化（レトログラデーション）を起こし、卵などの結着剤を使わずに米粒同士を強固にまとめます。175℃の揚げ油がパン粉の殻を瞬時にガラス化させ、溶けたチーズを完璧に内包します。",
        "ingredients": {
          "rice": {
            "name": "カルナローリ米またはアルボリオ米",
            "basePerPerson": 80,
            "unit": "g"
          },
          "ragu": {
            "name": "牛肉とトマトをじっくり煮詰めた濃厚ミートラグー",
            "basePerPerson": 70,
            "unit": "g"
          },
          "mozzarella": {
            "name": "水気をしっかり切った棒状のフィオール・ディ・ラッテ（モッツァレラ）",
            "basePerPerson": 30,
            "unit": "g"
          },
          "pecorino": {
            "name": "すりおろしたペコリーノ・ロマーノとパルミジャーノ",
            "basePerPerson": 15,
            "unit": "g"
          },
          "eggs": {
            "name": "衣付け用の新鮮な溶き卵",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "breadcrumbs": {
            "name": "カリカリに揚がるきめ細かなパン粉",
            "basePerPerson": 35,
            "unit": "g"
          },
          "oil": {
            "name": "揚げ用オイル（落花生油または高発煙点油）",
            "basePerPerson": 200,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "ラグーリゾットの炊き上げ",
            "desc": "ブイヨンを足しながらラグーソースで米をアルデンテに煮含めます。火から下ろしてすりおろしたチーズを加えて混ぜ合わせ、バットに平らに広げます。",
            "timerMin": 15
          },
          {
            "title": "澱粉の老化冷却（レトログラデーション）",
            "desc": "広げたリゾットを冷蔵庫で最低30分冷やします。しっかり冷えて米粒が引き締まり、手で触っても崩れない状態にします。",
            "timerMin": 30
          },
          {
            "title": "紡錘形の成形とモッツァレラの包み込み",
            "desc": "適量のリゾットを手のひらに取り、中央にモッツァレラを押し込みます。空気が入らないよう隙間なく包み、ラグビーボールのような紡錘形に整えます。",
            "timerMin": 10
          },
          {
            "title": "二重衣付けと175℃での揚げ調理",
            "desc": "溶き卵にくぐらせてから細かいパン粉を全体にまぶします。175℃に熱した油で3〜4分、美しい濃いキツネ色になるまで揚げます。チーズが伸びる熱々のうちにどうぞ！",
            "timerMin": 4
          }
        ],
        "easyTip": "💡 Easy Mode: ラグーリゾットを前夜に作っておくか、冷蔵庫で2時間以上冷やしておきます。冷えて引き締まったご飯は崩れず簡単に成形できます。",
        "proTip": "🏆 Pro Chef: 小麦粉を使わない極細パン粉の二度衣付け。175℃ジャストの深油揚げにより、中心のモッツァレラが60℃でトロリと伸び、外側はわずか1ミリの極薄クリスピー殻に仕上がります。"
      },
      "maritozzo": {
        "category": "dolci",
        "name": "マリトッツォ・コン・ラ・パンナ",
        "shortDesc": "オレンジピールとバニラが香る軽やかな発酵ブリオッシュ生地に、あふれんばかりの新鮮なホイップクリームを挟んだローマ伝統のドルチェ。",
        "origin": "ローマ（古代ローマ時代およびルネサンス期）",
        "difficulty": "中級（定温での生物学的パン発酵）",
        "history": "かつて四旬節の断食期間中に唯一許された伝統菓子。ルネサンス期には未来の夫（マリトッツォ）が中に婚約指輪を忍ばせて婚約者に贈る風習がありました。",
        "scienceTip": "強力粉（マニトバ粉 W300〜330）が形成する強固なグルテン網が、26〜28℃の発酵中に発生する炭酸ガスを逃さず保持。180℃での焼成時にメイラード反応で黄金の焼き色をつけつつ、内部は雲のように軽い食感に焼き上がります。",
        "ingredients": {
          "flour": {
            "name": "マニトバ強力小麦粉（製パン用 W320）",
            "basePerPerson": 75,
            "unit": "g"
          },
          "milk": {
            "name": "人肌程度に温めた新鮮な全乳",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "sugar": {
            "name": "生地用の上白糖またはグラニュー糖",
            "basePerPerson": 15,
            "unit": "g"
          },
          "yeast": {
            "name": "新鮮な生イースト（またはドライイースト）",
            "basePerPerson": 3,
            "unit": "g"
          },
          "oil": {
            "name": "軽やかなオリーブオイルまたは溶かしバター",
            "basePerPerson": 12,
            "unit": "ml"
          },
          "cream": {
            "name": "乳脂肪分35%以上のしっかり冷やした生クリーム",
            "basePerPerson": 80,
            "unit": "ml"
          },
          "zest": {
            "name": "すりおろしたオレンジの皮と天然バニラ",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "ミキシングとグルテン組織の形成",
            "desc": "温めた牛乳に砂糖少々とイーストを溶かします。小麦粉に加え、残りの砂糖、油、柑橘ピール、バニラを加えながら滑らかで弾力のある薄い膜が張るまでしっかりと捏ね上げます。",
            "timerMin": 15
          },
          {
            "title": "27℃での一次発酵",
            "desc": "生地を丸めてボウルに入れ、ラップをして温かい場所（26〜28℃）で約90分、体積が2倍になるまで一次発酵させます。",
            "timerMin": 90
          },
          {
            "title": "楕円成形と二次発酵",
            "desc": "生地をラグビーボール型の楕円形に丸めて天板に並べます。乾燥しないように覆い、さらに約60分二次発酵させます。",
            "timerMin": 60
          },
          {
            "title": "180℃焼成と艶出しシロップの刷毛塗り",
            "desc": "180℃に予熱したオーブンで12〜14分、艶やかなキツネ色になるまで焼きます。焼き上がったらすぐに砂糖水で作ったシロップを刷毛で塗り、美しい光沢を出します。",
            "timerMin": 14
          },
          {
            "title": "パンの切り込みとスパチュラでのクリーム充填",
            "desc": "パンを完全に冷まします。上部に縦に切り込みを入れ（完全に二分割しない）、冷やして粉糖と泡立てた生クリームを山盛りに挟み、パレットナイフで縁を平らにならします。",
            "timerMin": 5
          }
        ],
        "easyTip": "💡 Easy Mode: 生クリームを泡立てる15分前にボウルと泡立て器の先端を冷凍庫で冷やしておきます。半分の時間で泡立ち、長時間しっかりとした固さを保ちます。",
        "proTip": "🏆 Pro Chef: 26℃で定温管理された発酵によるローマ伝統ブリオッシュ。焼き上がりにシロップで冷温グラサージュし、乳脂肪分38%のフレッシュクリームに10%の粉糖を合わせた極上ホイップを挟みます。"
      }
    },
    "catAll": "全レシピ",
    "catPrimi": "🍝 パスタ (BIG 4)",
    "catSecondi": "🥩 メイン肉料理",
    "catContorni": "🥬 揚げ物・前菜",
    "catDolci": "🥐 伝統菓子・パン",
    "portionSize": "パスタの量:",
    "portionStandard": "標準 (100g)",
    "portionAbbondante": "🍝 本場大盛り (130g)",
    "servingsHintAbbondante": "🍝 ローマ下町トラットリアの大盛り: 1人あたりパスタ{amount}",
    "troubleGuancialeTitle": "グアンチャーレが焦げてしまった、またはゴムのように硬い？",
    "troubleGuancialeSol": "ゴム状の場合：火が強すぎ、内部の脂が溶け出していません（弱火で8〜10分じっくり汗をかかせる必要があります）。焦げた場合：苦味を防ぐため焦げた小片を取り除き、油を漉して綺麗な脂のみを残し、挽きたてのトースト黒胡椒を加えて香りを整えてください。",
    "troubleAcidTitle": "アマトリチャーナのトマトソースが酸っぱすぎる、または水っぽい？",
    "troubleAcidSol": "市販のトマト缶にはクエン酸が添加されていることがよくあります。重曹（ベーキングソーダ）を耳かき1杯ほど加える（化学中和反応により瞬時に酸味が和らぎます）か、グアンチャーレの脂を小さじ1杯加え、強火で2分間沸騰させて果糖の甘みを濃縮させてください。",
    "troubleCarciofiTitle": "ユダヤ風アーティチョークが硬い、または花のように開かない？",
    "troubleCarciofiSol": "180℃での二度揚げの前に、茎を持ってアーティチョークの頭を下にし、まな板の上で優しくトントンと叩いて花びらを放射状に開かせます。もし芯がまだ硬い場合は、140℃の低温揚げ時間をさらに4分延長してください。",
    "troubleSuppliTitle": "スップリを揚げている最中に破裂してモッツァレラが油に漏れ出る？",
    "troubleSuppliSol": "温かいご飯は使わないでください。澱粉を安定・凝固させるため最低2時間は冷蔵庫で冷やす必要があります。モッツァレラは切って1時間しっかり水切りしてください。必ず溶き卵と極細パン粉の『二度衣付け』を行い、厳密に175℃の油で揚げてください。",
    "troubleCodaTitle": "牛テールが2時間煮込んでもまだ硬い？",
    "troubleCodaSol": "牛テールの強靭なコラーゲンを加水分解するには、80〜85℃で最低3時間半の加熱が必要です。絶対に火を強めないでください。温かいブイヨンや湯を半カップ足し、蓋をきっちり閉めて極弱火で煮込みを続けます。フォークを刺すだけで肉が骨から自然に崩れるまでじっくり待ちましょう。",
    "troubleSaltimboccaTitle": "サルティンボッカの肉がパサつく、または生ハムが硬くなってしまった？",
    "troubleSaltimboccaSol": "仔牛肉に粉をまぶした面は絶対に60〜80秒以上焼いてはいけません。セージと生ハムの面は、乾燥による硬化を防ぐためフライパンに触れさせる時間をわずか15〜20秒だけに留めてください。",
    "troubleCreamTitle": "マリトッツォの生クリームがダレてしまう、または泡立てすぎてボソボソ（バター化）になった？",
    "troubleCreamSol": "生クリームの温度が10℃を超えると乳脂肪球の膜が壊れてしまいます。3〜4℃のキンキンに冷えたクリームを使用し、ボウルと泡立て器も15分間冷凍庫で冷やしておきます。もしボソボソし始めたら、冷たい液状の生クリーム大さじ2杯を加え、ゴムベラで優しく馴染ませてください。"
  },
  "zh": {
    "appName": "RomaLab 科学罗马料理",
    "appTagline": "地道罗马传统烹饪 & 美食乳化动力学",
    "splashVersion": "v1.1.0 Pro • 全球多语言尊享版",
    "navRecipes": "食谱",
    "navCalculator": "配量计算",
    "navLiveKitchen": "实战烹饪",
    "navThermal": "热力学",
    "navScience": "科学与规则",
    "btnLanguage": "语言",
    "btnUnits": "单位",
    "btnTheme": "主题",
    "btnGuide": "指南",
    "btnMenu": "菜单",
    "btnShare": "分享",
    "btnTroubleshoot": "应急急救",
    "selectLanguage": "选择语言",
    "close": "关闭",
    "servings": "就餐人数",
    "servingsHint": "标准份量：每人干意面 {amount}",
    "ingredientsTitle": "精确至克的科学配比",
    "ingredientsSubtitle": "全自动等比例计算蛋黄、风味豚脂与淀粉水比例。",
    "emulsionThermodynamics": "乳化热力学窗口",
    "emulsionSubtitle": "直链淀粉、猪面颊肉脂质与蛋黄蛋白质的厨房物理学。",
    "thermalSafeZone": "安全乳化温度区:",
    "thermalCold": "温度不足 (<50°C)",
    "thermalOptimal": "黄金乳化区 (58-65°C)",
    "thermalDanger": "蛋液凝固变炒蛋危险 (>68°C)",
    "startCooking": "智能计时分步烹饪指南",
    "cookingSubtitle": "全程实时跟随，精准掌控火候与时间。",
    "step": "步骤",
    "timer": "计时器",
    "start": "开始",
    "pause": "暂停",
    "reset": "重置",
    "done": "烹饪完成！",
    "alertTempDanger": "【警告】温度超过 68°C！蛋液即将凝固成炒蛋！请立即关火并移开炒锅。",
    "alertTempOptimal": "【黄金温度 58-65°C】离火并迅速搅拌进行完美乳化。",
    "alertTempCold": "温度过低 (< 50°C)：酱汁可能无法粘附且口感不佳。",
    "modeEasy": "⭐ 简易入门 (零失误)",
    "modePro": "🏆 大师进阶 (正统传承)",
    "modeEasyLabel": "⭐ 简易入门 (辅助)",
    "modeEasyDesc": "具备容错机制，利用蛋白增加流动性，采用更温和的奶酪拼配。",
    "modeProDesc": "严格遵循罗马传统教条：100%纯新鲜蛋黄、纯佩科里诺DOP羊奶酪、浓淀粉收汁。",
    "hintYolks": "💡 简易窍门：可加入1个蛋清，使酱汁具备更出色的流动性与顺滑度",
    "hintPecorino": "💡 简易窍门：推荐 50% 佩科里诺 + 50% 帕玛森拼配，更易融化无颗粒",
    "hintWater": "💡 简易窍门：用温热面汤(55°C)与奶酪用打蛋器或手持搅拌棒打匀，可防结块",
    "substitutionsTitle": "国际食材指南与替代方案",
    "substitutionsSubtitle": "传统准则、化学原理与海外采购妥协方案。",
    "subGuancialeTitle": "🥓 意式风干猪面颊 (Guanciale) vs 培根 vs 潘切塔",
    "guancialeNote": "风干猪面颊肉熔点极低 (32-35°C)，能形成丝绸般温润乳化。海外优质替代品：手工无烟熏潘切塔(Pancetta)。切忌使用：含糖及人工浓烟熏味的普通美式培根。",
    "subPecorinoTitle": "🧀 佩科里诺罗马羊奶酪 (Pecorino Romano DOP)",
    "pecorinoNote": "陈年硬质羊奶酪，风味浓郁咸鲜。若海外食客觉得过于刺激，名厨推荐方案为：70% 佩科里诺羊奶酪 + 30% 24个月帕玛森干酪。",
    "subPastaTitle": "🌾 铜模压制意面与直链淀粉",
    "pastaNote": "粗糙的铜模压制意面在煮制时会释放大量直链淀粉。淀粉充当天然表面活性剂，将亲水的水与疏水的猪油紧密结合。",
    "emergencyTitle": "🚨 紧急储藏室与海外代用秘籍",
    "emergencySubtitle": "在海外买不齐罗马正统原料？用科学厨房秘籍完美拯救大作。",
    "emGuancialeTitle": "🥓 缺少风干猪面颊肉时：",
    "emGuancialeOpt1": "✅ 优质方案：未烟熏的风干五花肉 (Pancetta)。略微减少煮面水中的盐分。",
    "emGuancialeOpt2": "⚠️ 培根急救绝技：若只能买到美式培根，下锅煎前先在沸水中焯烫2分钟，可去除多余人工烟熏味与糖分！",
    "emPecorinoTitle": "🧀 缺少佩科里诺羊奶酪时：",
    "emPecorinoOpt1": "✅ 推荐方案：50% 普通羊奶酪 + 50% 帕玛森奶酪，质地更顺滑不易结块。",
    "emPecorinoOpt2": "⚠️ 仅有帕玛森时：补充1克盐和现磨黑胡椒，以弥补羊奶酪的咸度与穿透力。",
    "emStarchTitle": "🌾 意面太滑不脱淀粉时：",
    "emStarchOpt1": "✅ 小锅少水秘诀：用通常一半的水量煮面（如300克面用1.5升水），煮面水会化为高浓度奶白淀粉浓汤！",
    "emStarchOpt2": "🔬 分子厨房应急法：在冷水中化开半茶匙玉米淀粉倒入锅中脂油内，瞬间形成光亮稠滑乳化层。",
    "troubleshootTitle": "美食急诊室",
    "troubleshootDesc": "锅里出现意外？用厨房物理学现场拯救。",
    "troubleClumpTitle": "佩科里诺羊乳酪在锅里结成了橡胶状硬疙瘩？",
    "troubleClumpSol": "锅温超过65°C导致酪蛋白脱水团聚析出。立刻移锅离火，加入2至3汤匙温热的富含淀粉的面汤水（约55°C），在量杯中用迷你打蛋器或手持搅拌棒高速搅打成细腻乳液后再倒回意面中。",
    "troubleCurdleTitle": "蛋液下锅受热过度凝固成了炒鸡蛋？",
    "troubleCurdleSol": "十万火急将平底锅彻底移离火源。迅速将意面转移到冷碗中，投入1块冰块或泼入2汤匙冷水疯狂搅拌降温。若已明显出现凝固蛋块，加入1勺淀粉面汤水，用手持搅拌棒高速搅打5秒：卵磷脂将奇迹般重新乳化恢复杂质丝滑。",
    "troubleSaltyTitle": "整盘意面咸度过高，无法下咽？",
    "troubleSaltySol": "优质陈年佩科里诺DOP干酪与猪面颊肉自带极高天然盐分。黄金法则：煮面水加盐量减半（最高每升水5克盐）。若已成盘过咸：加入少量未加盐的温水稀释晃锅，并撒入烘烤黑胡椒（胡椒碱能有效中和并掩盖过锐的咸味冲击）。",
    "recipes": {
      "carbonara": {
        "name": "卡博纳拉培根蛋酱面 (Carbonara)",
        "shortDesc": "新鲜蛋黄、酥脆风干面颊肉、佩科里诺罗马奶酪与现焙黑胡椒。",
        "origin": "罗马 (1944年)",
        "difficulty": "中等 (需精准温控)",
        "history": "由罗马厨师的灵感与盟军口粮碰撞诞生，历经数十年锤炼成为世界美食传奇。",
        "scienceTip": "蛋黄含有卵磷脂，是极佳的天然乳化剂。在64-66°C下蛋白质适度舒展锁住融化豚脂，形成顺滑蛋奶酱而绝不凝固成块。",
        "ingredients": {
          "pasta": {
            "name": "铜模压制直面或通心粉",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "意大利风干猪面颊肉 (Guanciale)",
            "basePerPerson": 60,
            "unit": "g"
          },
          "yolks": {
            "name": "新鲜大号蛋黄",
            "basePerPerson": 1,
            "extraPadella": 1,
            "unit": "pz"
          },
          "pecorino": {
            "name": "细磨佩科里诺罗马羊奶酪 DOP",
            "basePerPerson": 35,
            "unit": "g"
          },
          "pepper": {
            "name": "现磨黑胡椒粒",
            "basePerPerson": 2.5,
            "unit": "g"
          },
          "salt": {
            "name": "煮面盐 (减半量：5克/升)",
            "basePerPerson": 5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "切配与慢煸猪面颊肉",
            "desc": "切成6毫米厚的粗条。冷锅下锅，不加油，中小火慢煎10-12分钟，逼出丰盈油脂，直到表面金黄酥脆、内里柔嫩。",
            "timerMin": 10
          },
          {
            "title": "冷调经典蛋黄糊 (Carbocrema)",
            "desc": "在瓷碗中加入蛋黄、细磨佩科里诺奶酪和大量现焙黑胡椒，搅打成浓稠均匀膏状。加入2汤匙温热的煸肉油脂拌匀温化。",
            "timerMin": 3
          },
          {
            "title": "煮面与提取淀粉水",
            "desc": "水开后加盐（每升水仅5克盐）。比包装建议时间提前2分钟捞出，保留一小碗浓郁的淀粉面汤。",
            "timerMin": 8
          },
          {
            "title": "锅内二次烩炒 (Risottatura)",
            "desc": "将意面直接捞入盛有热油的平底锅，大火翻炒1分钟，加入适量面汤剧烈颠锅，形成初级乳化底层。",
            "timerMin": 1
          },
          {
            "title": "离火科学收汁乳化 (Mantecatura)",
            "desc": "【彻底关火并移开炒锅】静置45秒待温度降至60-65°C。将意面与蛋黄糊快速拌匀颠锅，视情况补充微量面汤，装盘并铺上酥脆肉条。",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 简易模式: 提前盛出2汤匙面汤水并放凉至50°C，先与蛋黄和佩科里诺羊乳酪拌匀温和化开，再倒入意面中。离火晃锅乳化（Mantecatura）必须百分之百在无火源状态下进行。",
        "proTip": "🏆 顶厨秘诀: 甄选散养鸡蛋新鲜纯蛋黄，猪面颊肉油脂在80°C下温和慢熬而不焦糊，并在62°C至65°C的黄金温度带快速波浪翻锅晃动，使卵磷脂的天然乳化黏性发挥到极致。"
      },
      "cacioepepe": {
        "name": "传统黑胡椒羊奶酪面 (Cacio e Pepe)",
        "shortDesc": "仅需三味纯粹食材：高淀粉意面、佩科里诺罗马羊奶酪、现焙黑胡椒。",
        "origin": "罗马近郊乡村",
        "difficulty": "极高 (热力学分毫不差)",
        "history": "千百年来亚平宁山脉牧羊人在迁徙放牧时携带的经典耐储存军粮。",
        "scienceTip": "佩科里诺奶酪在55°C开始融化，但超过65°C酪蛋白会脱水聚合成硬块。面汤中的直链淀粉充当胶体保护层避免沉淀。",
        "ingredients": {
          "pasta": {
            "name": "传统新鲜粗面 (Tonnarelli) 或粗直面",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pecorino": {
            "name": "粉末状细磨佩科里诺羊奶酪",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pepper": {
            "name": "优质黑胡椒整粒",
            "basePerPerson": 3.5,
            "unit": "g"
          },
          "water": {
            "name": "高浓度煮面淀粉水",
            "basePerPerson": 40,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "现焙胡椒与激发出香气",
            "desc": "用石臼捣碎黑胡椒。放入干锅中火焙炒2分钟释放胡椒碱芳香，倒入一勺滚烫面汤激发出浓郁胡椒高汤。",
            "timerMin": 2
          },
          {
            "title": "调制低温奶酪膏",
            "desc": "碗中倒入细羊奶酪粉，分次加入晾至55-60°C的温面汤，用打蛋器快速搅打成柔滑无颗粒的厚乳酪膏。切勿上火加热！",
            "timerMin": 3
          },
          {
            "title": "锅内高汤收汁",
            "desc": "将弹牙意面捞入胡椒高汤锅中，大火颠锅2分钟让直链淀粉充分浓缩，形成光亮浆汁。",
            "timerMin": 2
          },
          {
            "title": "离火飞速乳化",
            "desc": "将锅完全端离灶台，待温度降至60°C以下。倒入奶酪膏极速翻锅颠炒，淀粉与奶酪瞬间融为天鹅绒般的乳霜。",
            "timerMin": 1
          }
        ],
        "category": "primi",
        "easyTip": "💡 简易模式: 单独在一个碗中用打蛋器将佩科里诺羊乳酪与50°C温水搅打成细腻顺滑的奶酪糊。仅在平底锅彻底移离火源冷却后，再倒入意面中拌匀。",
        "proTip": "🏆 顶厨秘诀: 最后3分钟大火剧烈翻炒收汁（Risottatura）以最大限度析出小麦淀粉。在58°C临界点进行动态晃锅乳化：浓缩的直链淀粉必须与酪蛋白形成稳定的氢键网络。"
      },
      "amatriciana": {
        "name": "阿马特里切番茄培根面 (Amatriciana)",
        "shortDesc": "酥脆风干面颊肉、圣马扎诺去皮番茄、佩科里诺羊奶酪、干白葡萄酒。",
        "origin": "阿马特里切 / 罗马",
        "difficulty": "中等",
        "history": "18世纪末番茄引入意中后，从白色格里恰面(Gricia)演变而来的红色经典。",
        "scienceTip": "圣马扎诺番茄明亮纯净的天然酸度 (pH约4.3) 完美平衡了猪油脂的厚重，激发出多层次鲜味。",
        "ingredients": {
          "pasta": {
            "name": "铜模布卡蒂尼空心面 (Bucatini)",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "面颊肉切细条",
            "basePerPerson": 50,
            "unit": "g"
          },
          "pomodoro": {
            "name": "手撕圣马扎诺DOP去皮整番茄",
            "basePerPerson": 120,
            "unit": "g"
          },
          "pecorino": {
            "name": "细磨佩科里诺罗马羊奶酪",
            "basePerPerson": 30,
            "unit": "g"
          },
          "vino": {
            "name": "干白葡萄酒 (炝锅去腻)",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "chili": {
            "name": "红辣椒 (可选)",
            "basePerPerson": 0.5,
            "unit": "pz"
          }
        },
        "steps": [
          {
            "title": "煸煎猪面颊肉",
            "desc": "温和中小火慢煸至肉条金黄松脆。沥油捞出肉条，放在温盘中保持酥脆。",
            "timerMin": 8
          },
          {
            "title": "白酒炝锅与慢熬番茄",
            "desc": "锅中余油烹入干白挥发酒精，加入辣椒和手捏碎的圣马扎诺番茄。中火慢熬12-15分钟至酱汁浓稠油亮。",
            "timerMin": 12
          },
          {
            "title": "裹酱与撒芝士装盘",
            "desc": "捞入八分熟空心面翻炒1分钟入味。关火，撒入如雪花般的佩科里诺羊奶酪，顶端铺上酥脆面颊肉。",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 简易模式: 猪面颊肉一旦煸至金黄酥脆立即捞出备用。用锅中留存的纯净猪油熬煮番茄酱，出锅装盘时再将酥脆肉块撒在顶层，以保持极致的咔脆口感。",
        "proTip": "🏆 顶厨秘诀: 沿滚烫锅边淋入干白葡萄酒炝锅，充分溶解焦糖化果糖与肉香。选用手捏圣马扎诺DOP整番茄，猛火快熬以锁住新鲜明亮的番茄本味。"
      },
      "gricia": {
        "name": "格里恰白酱意面 (Mezze Maniche alla Gricia)",
        "shortDesc": "传奇“白色阿马特里切”：意面、脆面颊肉、羊奶酪与现磨黑胡椒。",
        "origin": "格里夏诺 / 古罗马",
        "difficulty": "中等",
        "history": "罗马意面无可争议的始祖母亲：卡博纳拉与阿马特里切皆由此衍生进化而来。",
        "scienceTip": "在无鸡蛋和番茄助攻的前提下，全靠翻锅时面汤直链淀粉与纯猪油碰撞发生的物理乳化。",
        "ingredients": {
          "pasta": {
            "name": "带楞短通心粉 (Mezze Maniche)",
            "basePerPerson": 100,
            "unit": "g"
          },
          "guanciale": {
            "name": "风干面颊肉条",
            "basePerPerson": 55,
            "unit": "g"
          },
          "pecorino": {
            "name": "中度陈年佩科里诺罗马奶酪",
            "basePerPerson": 40,
            "unit": "g"
          },
          "pepper": {
            "name": "现磨黑胡椒",
            "basePerPerson": 2.5,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "慢煸面颊肉",
            "desc": "中小火煸至外脆内软。盛出2/3的香脆肉条备用。",
            "timerMin": 8
          },
          {
            "title": "熬制乳化底汤",
            "desc": "往锅内猪油中舀入滚烫面汤并加入黑胡椒，剧烈搅动形成奶白色胡椒浓油汤。",
            "timerMin": 2
          },
          {
            "title": "关火起锅乳化",
            "desc": "意面入锅翻炒60秒，关火静置30秒，扬入羊奶酪粉并急速翻锅颠炒形成挂盘滑顺白酱，撒肉条出锅。",
            "timerMin": 2
          }
        ],
        "category": "primi",
        "easyTip": "💡 简易模式: 向析出的猪面颊油脂中分次少量淋入面汤水。切勿让佩科里诺羊乳酪直接接触滚烫的锅底，应通过空中抛锅翻动让蒸汽与余温轻柔化开乳酪。",
        "proTip": "🏆 顶厨秘诀: 促成高纯度猪油与小麦淀粉之间的完美双相物理乳化。黑胡椒于研钵中现捣，在150°C干锅中预先烘烤，以彻底激发胡椒碱的爆发性香气。"
      },
      "saltimbocca": {
        "category": "secondi",
        "name": "罗马跳入嘴中嫩小牛肉卷",
        "shortDesc": "极薄嫩小牛肉片覆盖甜香意大利生火腿与鲜鼠尾草叶，黄油快煎并以干白葡萄酒激发出温润细腻的镜面酱汁。",
        "origin": "罗马（雷戈拉区，19世纪末）",
        "difficulty": "初级（90秒极速香煎）",
        "history": "1891年被意大利现代烹饪之父佩莱格里诺·阿尔图西在罗马历史名店“Le Venete”品尝并载入史册：美味浓郁至极，顾名思义仿佛“跳入嘴中”。",
        "scienceTip": "仅在拍粉的牛肉底面发生160°C高速美拉德反应。离火后锅底浓缩肉汁与冷黄油块、白葡萄酒迅速涡旋乳化（法式蒙特黄油工艺 beurre monté），形成温润丝滑的镜面酱汁。",
        "ingredients": {
          "veal": {
            "name": "极薄小牛后腿肉或牛柳切片（厚度约3毫米）",
            "basePerPerson": 160,
            "unit": "g"
          },
          "prosciutto": {
            "name": "优质甜香风干生火腿片 (Prosciutto Crudo)",
            "basePerPerson": 50,
            "unit": "g"
          },
          "sage": {
            "name": "新鲜整片鼠尾草叶",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "butter": {
            "name": "高品质发酵黄油（煎制与乳化用）",
            "basePerPerson": 25,
            "unit": "g"
          },
          "wine": {
            "name": "意大利干白葡萄酒（弗拉斯卡蒂DOC等）",
            "basePerPerson": 30,
            "unit": "ml"
          },
          "flour": {
            "name": "小麦低筋面粉（仅扑肉片底面）",
            "basePerPerson": 10,
            "unit": "g"
          },
          "pepper": {
            "name": "现磨黑胡椒碎（生火腿已有咸度，切勿加盐）",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "肉片捶打与鼠尾草穿针固定",
            "desc": "将小牛肉片置于两张烘焙纸之间，用肉锤轻轻敲打至约3毫米薄度。在每片肉上铺一片生火腿和一片鼠尾草叶，用牙签像别针一样水平穿针固定。",
            "timerMin": 5
          },
          {
            "title": "仅在肉片底面科学扑粉",
            "desc": "仅在牛肉背面（与锅底接触的面）薄薄扑上一层低筋面粉，抖落所有多余浮粉。绝对不可让面粉粘到生火腿或鼠尾草叶上。",
            "timerMin": 2
          },
          {
            "title": "猛火极速高温煎制",
            "desc": "平底锅中放入2/3分量的黄油大火融化。将扑粉肉面朝下入锅，保持大火静置煎制60至80秒，直至肉底形成诱人的金黄焦脆外壳。",
            "timerMin": 2
          },
          {
            "title": "白葡萄酒炝锅与离火黄油乳化",
            "desc": "将肉卷翻面使生火腿面接触锅底仅仅15秒。淋入干白葡萄酒大火激发出醇香并蒸发酒精。迅速夹出肉卷置于保温盘中。彻底关火，投入剩余的冰冷黄油块用力晃锅涡旋乳化成镜面浓汁，淋在肉卷上即可。",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 简易模式: 仅在小牛肉底面薄拍一层面粉（切勿拍在火腿上）。盖上锅盖用中火焖煎60秒，小牛肉将保持极致的软嫩与饱满肉汁。",
        "proTip": "🏆 顶厨秘诀: 保持160°C极高锅温淋入白葡萄酒瞬间炝锅去焦去腥，出锅前离火投入冰镇黄油块快速晃锅（法式蒙特黄油工艺），形成晶莹透亮的镜面丝滑浓汁。"
      },
      "coda": {
        "category": "secondi",
        "name": "罗马屠夫风格慢炖牛尾",
        "shortDesc": "牛尾段在芹菜、圣马扎诺番茄、松子、提子干与无糖纯黑可可粉中慢火轻沸煨炖整整4小时，肉质酥烂入味脱骨。",
        "origin": "罗马（特斯塔乔区 / 第五分部 Quinto Quarto）",
        "difficulty": "中级（长达4小时的低温慢煨）",
        "history": "罗马“第五分部（下水碎肉）”烹饪文化的皇冠明珠。诞生于特斯塔乔屠宰场周边小酒馆，屠宰剥皮工（Vaccinari）用大量芹菜与香料赋予廉价牛尾以绝妙风味。",
        "scienceTip": "牛尾所含丰富胶原蛋白仅在80至85°C临界微沸状态（意语称之为“pipare”，近乎微弱冒泡）下历经长时水解转化为温润丰腴的明胶。源自文艺复兴时期的无糖纯黑可可粉与提子干搭配，构筑出经典的糖醋（Agrodolce）味觉平衡，化解油腻。",
        "ingredients": {
          "tail": {
            "name": "牛尾（顺骨节斩成均匀厚圆段）",
            "basePerPerson": 350,
            "unit": "g"
          },
          "celery": {
            "name": "鲜脆多汁的白芹菜嫩茎（去老筋）",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pomodoro": {
            "name": "圣马扎诺DOP去皮整番茄（手工捏碎）",
            "basePerPerson": 200,
            "unit": "g"
          },
          "wine": {
            "name": "醇厚干红葡萄酒（皮廖切萨内塞红酒等）",
            "basePerPerson": 60,
            "unit": "ml"
          },
          "lard": {
            "name": "风干猪面颊肉沫配胡萝卜洋葱底料",
            "basePerPerson": 25,
            "unit": "g"
          },
          "cocoa": {
            "name": "特级纯无糖纯黑可可粉",
            "basePerPerson": 2,
            "unit": "g"
          },
          "pinenuts": {
            "name": "微焙松子仁与温水泡软的无核提子干",
            "basePerPerson": 10,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "牛尾段大火焦香封边",
            "desc": "在厚底炖锅中慢煸猪面颊肉蔬菜底料出油。放入牛尾段，调至大火不断翻转煎烤约10分钟，使每段牛尾表面均匀形成焦香封边。",
            "timerMin": 10
          },
          {
            "title": "干红炝锅去腥与番茄加入",
            "desc": "倒入浓郁红葡萄酒，刮起锅底焦香残留物，待酒精彻底挥发。加入手捏番茄碎、细盐与粗碎黑胡椒，加热至轻微沸腾。",
            "timerMin": 10
          },
          {
            "title": "胶原蛋白微沸水解慢煨",
            "desc": "盖严厚锅盖，将火力调至最低（80至85°C）。保持汤面仅微弱冒小泡（pipare）慢煨约3小时半，直至肉质松软脱骨、胶质彻底融化。",
            "timerMin": 180
          },
          {
            "title": "大师点睛之笔：芹菜段与黑可可",
            "desc": "将芹菜段在沸盐水中焯烫3分钟后捞出。连同松子仁、提子干以及用一勺热汤化开的无糖黑可可粉一同加入锅中，微火再煨炖20分钟让风味彻底融合。",
            "timerMin": 20
          }
        ],
        "easyTip": "💡 简易模式: 若时间有限，前45分钟可用高压锅加压压烂牛尾，随后开盖慢火收汁，直至汤汁自然浓稠浓郁。",
        "proTip": "🏆 顶厨秘诀: 严格维持85°C微沸慢炖4小时，使牛尾结缔组织中的胶原蛋白完全水解为明胶。出锅前15分钟按古法调入无糖黑可可粉与烤香松子仁，达到正宗风味平衡。"
      },
      "abbacchio": {
        "category": "secondi",
        "name": "罗马炙烤焦香乳羊排",
        "shortDesc": "鲜迷迭香、嫩蒜与特级初榨橄榄油常温腌渍的嫩乳羊排，烈火炽烤焦香多汁，趁热手抓骨头烫手吮指品尝。",
        "origin": "罗马及罗马乡村田园地带",
        "difficulty": "初级（超高温极速炙烤）",
        "history": "因刚出炉炭火羊排需立即用手抓着吃、甚至会“烫伤手指（scottadito）”而得名，是罗马市民欢度复活节与春季聚会不可替代的硬菜。",
        "scienceTip": "鲜嫩乳羊肉质细腻，需要在220至250°C极高接触温度下快速美拉德焦化，每面仅需精准灼烤2分钟，瞬间锁住肌红蛋白与汁水，令中心核心温度稳固在56至58°C的饱满粉红五分熟状态。",
        "ingredients": {
          "chops": {
            "name": "新鲜意式带骨吮指乳羊小排 (Abbacchio)",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "rosemary": {
            "name": "现斩鲜迷迭香与野生百里香碎",
            "basePerPerson": 3,
            "unit": "g"
          },
          "garlic": {
            "name": "拍碎带皮新蒜瓣",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "萨比纳特级初榨橄榄油或精炼白猪油",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "lemon": {
            "name": "多汁鲜柠檬角（佐餐去腻）",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "salt": {
            "name": "研磨天然粗海盐与现磨纯黑胡椒",
            "basePerPerson": 3,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "常温草本香料精油腌渍",
            "desc": "用橄榄油（或猪油）、迷迭香碎、拍碎大蒜与黑胡椒充分按摩羊排。在室温下静置腌制15至20分钟，使肉块回温至室温以便受热均匀。",
            "timerMin": 15
          },
          {
            "title": "铸铁烤盘或炭火超高温预热",
            "desc": "将铸铁牛排煎锅或烤网烧至微冒青烟的极高温度（230至250°C）。表面必须保持炽热，以确保接触瞬间即刻封锁肉汁。",
            "timerMin": 5
          },
          {
            "title": "两分钟单面暴火极速炙烤",
            "desc": "将羊排相互留出空隙排入锅中。保持大火静置烤制2分钟形成深色焦香菱形条纹，翻面再烤2分钟。翻面后立即在烤面上撒上粗海盐。",
            "timerMin": 4
          },
          {
            "title": "滚烫出锅与手抓吮指品尝",
            "desc": "迅速夹入预热好的餐盘，配以新鲜柠檬角。趁着肉汁沸腾、骨头烫手的极致时刻直接用手指抓取大快朵颐，这才是地道的罗马风情！",
            "timerMin": 1
          }
        ],
        "easyTip": "💡 简易模式: 将羊排用少许橄榄油、迷迭香与拍碎大蒜常温腌制15分钟。充分烧热不粘条纹煎锅，可有效防止羊肉粘锅。",
        "proTip": "🏆 顶厨秘诀: 230°C极致高温接触烙烤，每面精准灼烤90秒。出锅关火瞬间方可撒上天然片状海盐，以防渗透压破坏肉汁锁水结构。"
      },
      "carciofigiudia": {
        "category": "contorni",
        "name": "罗马犹太区金黄酥炸洋蓟花",
        "shortDesc": "古罗马犹太区传承五百年的绝技：特级初榨橄榄油双温精炸，整颗洋蓟如黄金玫瑰般层层盛开，外壳酥脆内芯如奶油般化口。",
        "origin": "罗马（犹太人聚居区，16世纪）",
        "difficulty": "高级（螺旋旋刀削叶法与双温精准油控）",
        "history": "由罗马犹太主妇为庆祝赎罪日破斋而发明的传世佳肴。整颗洋蓟在橄榄油中宛如魔术般绽放为金灿灿的盛开鲜花，整朵皆可酥脆食用。",
        "scienceTip": "科学双温深炸法：第一阶段在140°C中温油中将坚实的心部与茎肉慢煨至如黄油般软糯；第二阶段升温至175至180°C，外层花瓣在微量水汽急剧蒸发下发生物理膨胀，绽放成如薯片般酥脆的金黄玫瑰。",
        "ingredients": {
          "artichoke": {
            "name": "罗马特产无刺圆形曼莫莱洋蓟 (Mammole Cimaroli)",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "浸润深炸专用特级初榨橄榄油",
            "basePerPerson": 250,
            "unit": "ml"
          },
          "lemon": {
            "name": "柠檬酸抗氧化冷水浴专用鲜柠檬",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "salt": {
            "name": "精细海盐与现磨纯黑胡椒",
            "basePerPerson": 2,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "螺旋旋刀去硬叶与柠檬水浴",
            "desc": "手持削皮小刀如削苹果般螺旋旋削，切除外围墨绿色纤维老叶。削去茎部外皮并削圆顶端，迅速投入柠檬冰水中防止酶促褐变发黑。",
            "timerMin": 10
          },
          {
            "title": "首轮140°C中温慢炸熟芯",
            "desc": "用厨房纸吸净水分，花冠朝下投入140°C的橄榄油中浸炸10至12分钟，直至用叉子轻刺茎部根底毫无阻力。捞出沥油并稍微冷却5分钟。",
            "timerMin": 12
          },
          {
            "title": "手工压瓣盛开如玫瑰与内部调味",
            "desc": "将洋蓟在案板上轻轻按压或两朵互相轻击，使花瓣像盛开的玫瑰花一样自然向外舒展展开。向花心深处撒入细海盐和黑胡椒粉调味。",
            "timerMin": 3
          },
          {
            "title": "次轮180°C高温极速激炸花瓣",
            "desc": "将油温提升至175至180°C。向花瓣弹入几滴冷水，花冠朝下浸入油中，用烹饪夹轻按约2分钟，使花瓣瞬间水分气化膨化至如薯片般金黄轻脆。",
            "timerMin": 2
          }
        ],
        "easyTip": "💡 简易模式: 彻底修剪剔除外围最坚硬的4至5层外叶。油炸前务必浸泡在柠檬冷酸水中，以彻底杜绝酶促褐变氧化发黑。",
        "proTip": "🏆 顶厨秘诀: 严谨双温深油浸炸工艺：首轮140°C慢炸煨熟花芯，轻敲案板使其绽放如盛开花朵，次轮180°C高温急炸90秒，使外层花瓣脆化如薯片般酥香。"
      },
      "carciofiromana": {
        "category": "contorni",
        "name": "罗马传统薄荷蒜香焖洋蓟",
        "shortDesc": "整颗罗马洋蓟内酿罗马野生卡拉薄荷、大蒜与欧芹碎，倒扣于锅中以白葡萄酒与特级初榨橄榄油密封微火柔和焖炖入味。",
        "origin": "罗马及罗马乡村丘陵地带",
        "difficulty": "中级（细致剔除老叶与蒸汽密封慢焖）",
        "history": "罗马传统小酒馆春季周日家宴的标志性经典配菜。生长在古罗马遗迹断壁残垣间的野生卡拉薄荷（Nepetella）赋予其独一无二的草本清香。",
        "scienceTip": "倒扣密封微压焖炖法：在90至95°C低温环境下，用湿烘焙纸紧贴洋蓟做内盖并合上重锅盖，洋蓟在自身油水酒汽乳化回流中熟透，彻底避免多酚化合物氧化变黑，口感嫩滑如豆腐。",
        "ingredients": {
          "artichoke": {
            "name": "带长茎罗马圆形曼莫莱洋蓟",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "mint": {
            "name": "罗马野生新鲜小薄荷叶 (Mentuccia / Nepetella)",
            "basePerPerson": 3,
            "unit": "g"
          },
          "parsley": {
            "name": "意大利平叶鲜欧芹碎",
            "basePerPerson": 4,
            "unit": "g"
          },
          "garlic": {
            "name": "细腻鲜蒜末",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "oil": {
            "name": "丰盈特级初榨橄榄油",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "wine": {
            "name": "意大利干白葡萄酒（或少许清汤底水）",
            "basePerPerson": 25,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "剥离老叶与花心空腔扩开",
            "desc": "撕去外层坚韧木质化老叶，用刮刀削去茎杆粗纤维并切除刺尖。用手指轻轻拨开中央花瓣，为酿入香草调料开辟出深邃的内腔。",
            "timerMin": 10
          },
          {
            "title": "野生薄荷香草馅料深层酿入",
            "desc": "将新鲜罗马小薄荷叶、欧芹、大蒜碎、食盐与黑胡椒细致切剁混合均匀。用手指将香草馅料深深塞入每颗洋蓟的花心空腔中。",
            "timerMin": 5
          },
          {
            "title": "深锅内倒扣紧密排列",
            "desc": "在深口汤锅中将洋蓟花冠朝下倒扣、一颗挨一颗紧密码放。倒入充足的橄榄油、白葡萄酒与少量清水，液面高度达到洋蓟茎部一半。",
            "timerMin": 5
          },
          {
            "title": "湿烘焙纸密封与90°C微温慢焖",
            "desc": "覆上一张打湿攥干的烘焙纸直接贴在洋蓟上，再盖严沉重锅盖。保持极小火（90至95°C）慢炖25至30分钟，直至用竹签轻刺茎部无任何阻力。",
            "timerMin": 30
          }
        ],
        "easyTip": "💡 简易模式: 将洋蓟头朝下倒扣在口径窄而深的厚底锅中，加入没过半截茎秆的水和橄榄油，盖严锅盖利用循环水汽均匀蒸熟。",
        "proTip": "🏆 顶厨秘诀: 酿入地道罗马野生卡拉薄荷（Nepetella）、大蒜与微量细面包糠调成的馅料。92°C全密闭钟罩式慢火蒸焖，令洋蓟每一片花瓣均化为如黄油般温润融化的质感。"
      },
      "suppli": {
        "category": "contorni",
        "name": "罗马经典拉丝肉酱炸米团",
        "shortDesc": "慢熬牛肉番茄肉酱烩饭包裹大块马苏里拉奶酪棒，滚上蛋液与细面包糠炸至金褐酥脆，掰开时奶酪拉出长长的电话线丝。",
        "origin": "罗马（特拉斯提弗列区，19世纪末）",
        "difficulty": "中级（紧密成形与恒温深炸技巧）",
        "history": "因掰开时热融拉出的马苏里拉奶酪酷似老式电话机机身与听筒之间的螺旋伸缩电话线，故得名“电话风味（al Telefono）”，是罗马国民街头小吃。",
        "scienceTip": "肉酱烩饭需降温至15°C以下以促发直链淀粉老化回生（Retrogradation），无需掺入面粉黏着剂即可使米粒牢固抱团互锁。175°C高温油炸能在数秒内将面包糠外壳玻璃化硬结，完全封印内部融化的马苏里拉奶酪。",
        "ingredients": {
          "rice": {
            "name": "意式卡纳罗利 (Carnaroli) 或阿波里奥烩饭米",
            "basePerPerson": 80,
            "unit": "g"
          },
          "ragu": {
            "name": "慢火收汁浓缩意式牛肉番茄肉酱",
            "basePerPerson": 70,
            "unit": "g"
          },
          "mozzarella": {
            "name": "充分沥干乳清的棒状鲜马苏里拉奶酪 (Fior di latte)",
            "basePerPerson": 30,
            "unit": "g"
          },
          "pecorino": {
            "name": "现磨佩科里诺羊乳酪与帕玛森干酪混和粉",
            "basePerPerson": 15,
            "unit": "g"
          },
          "eggs": {
            "name": "挂糊用新鲜全蛋液",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "breadcrumbs": {
            "name": "超细金黄酥脆面包糠",
            "basePerPerson": 35,
            "unit": "g"
          },
          "oil": {
            "name": "高发烟点深炸油（花生油或优质调和油）",
            "basePerPerson": 200,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "肉酱烩饭的慢熬入味",
            "desc": "将大米直接在肉酱中翻炒，分次加入清高汤慢煨至略带嚼劲的阿尔丹特（Al dente）状态。离火拌入现磨干酪粉，平铺在大托盘上散开。",
            "timerMin": 15
          },
          {
            "title": "米饭淀粉老化冷却固化",
            "desc": "将托盘中的烩饭放入冰箱冷藏至少30分钟，直至米饭彻底变凉且质地紧实，触碰不易松散变形。",
            "timerMin": 30
          },
          {
            "title": "梭形捏制与马苏里拉奶酪核心封存",
            "desc": "手掌取一份冰凉米饭，在正中心塞入一根马苏里拉奶酪棒。双手紧密合拢捏实成两端微尖的橄榄球梭形，确保外表严丝合缝无任何裂痕与空气囊。",
            "timerMin": 10
          },
          {
            "title": "蛋液面包糠裹糊与175°C黄金深炸",
            "desc": "将米团先滚上一层均匀的全蛋液，再紧密裹上一层细面包糠。放入175°C油锅中炸3至4分钟至红木金褐色。必须趁着滚烫即刻开吃，享受惊艳的拉丝效果！",
            "timerMin": 4
          }
        ],
        "easyTip": "💡 简易模式: 提前一夜煮好肉酱烩饭或在冰箱冷藏至少2小时：冰冷紧结的米饭极易揉捏成团，包裹奶酪时绝不散架脱落。",
        "proTip": "🏆 顶厨秘诀: 纯全蛋液配超细面包糠进行双重严密包裹（不裹干面粉）。严格在175°C恒温深油中炸制：确保芯部马苏里拉奶酪升温至60°C澎湃拉丝，同时外壳达成毫米级的极致轻脆。"
      },
      "maritozzo": {
        "category": "dolci",
        "name": "罗马传统甜奶油鲜奶面包",
        "shortDesc": "古罗马传承的柔软松泡小圆面包，蕴含柑橘与香草芬芳，纵向斜切一刀填入丰厚饱满如云朵般的冰凉打发鲜奶油。",
        "origin": "罗马（古罗马时代及文艺复兴时期传统）",
        "difficulty": "中级（受控生物酵母两次发酵）",
        "history": "历史上曾是大斋戒期间教廷唯一准许享用的甜点。文艺复兴时期，准新郎（意语Maritozzo）常将一枚订婚戒指悄悄藏入丰厚的奶油中赠予未婚妻作为定情信物。",
        "scienceTip": "由W300至330高筋马尼托巴面粉构建的致密面筋网络在26至28°C定温发酵中牢牢锁死CO2微孔。180°C烘烤时通过表面美拉德反应与焦糖化着色，内部呈现如云朵般轻盈舒展的气孔组织。",
        "ingredients": {
          "flour": {
            "name": "意式高筋马尼托巴面包小麦粉 (W320)",
            "basePerPerson": 75,
            "unit": "g"
          },
          "milk": {
            "name": "温热全脂新鲜牛奶（人肌温）",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "sugar": {
            "name": "面团调味精细细砂糖",
            "basePerPerson": 15,
            "unit": "g"
          },
          "yeast": {
            "name": "新鲜活性鲜酵母（或耐高糖干酵母）",
            "basePerPerson": 3,
            "unit": "g"
          },
          "oil": {
            "name": "清淡特级初榨橄榄油或融化高品质黄油",
            "basePerPerson": 12,
            "unit": "ml"
          },
          "cream": {
            "name": "35%乳脂含量充分冷藏鲜稀奶油",
            "basePerPerson": 80,
            "unit": "ml"
          },
          "zest": {
            "name": "现磨鲜橙皮屑与天然马达加斯加香草籽",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "面筋网络揉打与扩展手套膜",
            "desc": "将酵母在温牛奶中与少许糖融化。加入面粉、剩余细砂糖、油脂、橙皮屑与香草籽，大力揉搓摔打直至面团表面光滑、能拉出半透明薄膜。",
            "timerMin": 15
          },
          {
            "title": "27°C恒温初次密封发酵",
            "desc": "将面团滚圆置于抹油盆中，封好保鲜膜在温润处（26至28°C）发酵约90分钟，直至体积膨胀至原本两倍大。",
            "timerMin": 90
          },
          {
            "title": "梭形小圆面包分剂与二次发酵",
            "desc": "将面团排气并分割为橄榄球般的微长梭形小面剂。排放在垫有烘焙纸的烤盘上，覆上保鲜膜二次发酵约60分钟。",
            "timerMin": 60
          },
          {
            "title": "180°C金黄烘烤与亮光糖浆涂刷",
            "desc": "放入预热至180°C的烤箱烘烤12至14分钟至表皮金黄油亮。刚出炉时立刻趁热在表面刷上一层薄薄的白糖香草水糖浆增添晶亮色泽。",
            "timerMin": 14
          },
          {
            "title": "顶部斜切剖开与抹刀奶油填抹",
            "desc": "面包彻底晾凉。在顶部纵向斜切一刀（切勿完全切断）。将充分冷藏的淡奶油加少许糖粉打发至硬挺，大方填满面包，用抹刀将奶油表面刮拭得如镜面般平齐光滑。",
            "timerMin": 5
          }
        ],
        "easyTip": "💡 简易模式: 打发鲜奶油前，将打蛋盆与打蛋头放入冷冻室冷冻15分钟：打发时间缩短一半，且奶油质地细腻硬挺、不易化水塌陷。",
        "proTip": "🏆 顶厨秘诀: 26°C恒温精控生物发酵的意式罗马布里欧修面包，出炉刷糖浆镜面亮光，搭配38%高乳脂冷打鲜奶油与10%比例细幼糖粉，浓郁而不腻。"
      }
    },
    "catAll": "全部食谱",
    "catPrimi": "🍝 经典意面 (BIG 4)",
    "catSecondi": "🥩 经典大菜",
    "catContorni": "🥬 炸物与配菜",
    "catDolci": "🥐 传统甜点",
    "portionSize": "意面分量:",
    "portionStandard": "标准量 (100g)",
    "portionAbbondante": "🍝 豪爽加量 (130g)",
    "servingsHintAbbondante": "🍝 罗马街头小馆豪爽大份：每人意面 {amount}",
    "troubleGuancialeTitle": "猪面颊肉煸糊变焦，或者口感如橡胶般绵韧？",
    "troubleGuancialeSol": "若变韧：说明火力过大未将内部深层油脂析出（需中小火慢煸8至10分钟）。若煸糊：立刻剔除发黑焦块以免产生苦味杂质，将澄清猪油过滤，并补入现磨烘烤黑胡椒以平衡香气。",
    "troubleAcidTitle": "阿玛特里切意面的番茄酱口感过酸或汤汁寡淡水汽重？",
    "troubleAcidSol": "市售罐装去皮番茄常额外添加柠檬酸。加入一丁点微量食用小苏打（碳酸氢钠即刻发生酸碱中和反应）或一小勺煸出的猪面颊油脂，随后猛火沸煮收汁2分钟，加速糖分浓缩焦糖化以化解酸涩。",
    "troubleCarciofiTitle": "犹太风味炸洋蓟口感生硬发苦，或者无法像花朵一样盛开？",
    "troubleCarciofiSol": "入180°C油锅复炸前，手握茎秆将洋蓟头朝下在案板上轻柔磕碰敲击，使层层花瓣自然如花冠般舒展盛开。若此时花芯依然坚硬生涩，需放回140°C中温油锅中继续补炸4分钟使其完全煨透。",
    "troubleSuppliTitle": "炸米团（Supplì）在油锅中爆裂、马苏里拉奶酪外溢？",
    "troubleSuppliSol": "绝不可使用温热米饭：必须在冰箱冷藏至少2小时使淀粉充分老化抱团结实。奶酪条提前切好沥干乳清1小时。务必遵循“双重挂糊裹粉法”（全蛋液+超细面包糠反复裹两遍），并严格在175°C油温下快炸。",
    "troubleCodaTitle": "罗马慢炖牛尾煨炖两小时后肉质依然紧硬顽固？",
    "troubleCodaSol": "牛尾密集的结缔组织胶原蛋白在80至85°C下需至少3.5小时方能充分水解为明胶。切勿急躁开大火！加入半杯温热清高汤或热水，严密封好锅盖，继续保持微火煨炖，直至用叉子轻触肉块即自然脱骨。",
    "troubleSaltimboccaTitle": "小牛肉卷口感发柴干涩，或者生火腿脱水变硬？",
    "troubleSaltimboccaSol": "小牛肉拍粉底面在锅中煎烤绝对严禁超过60至80秒。带有鼠尾草与生火腿的正面贴锅仅可极速灼烤15至20秒，接触时间过长会令生火腿剧烈脱水硬化变质。",
    "troubleCreamTitle": "罗马面包的打发鲜奶油化水塌陷，或者过度打发结块变成了黄油？",
    "troubleCreamSol": "稀奶油温度一旦超过10°C，脂肪球膜便会破裂发生水油分离。务必使用3至4°C冰透的淡奶油，并将搅拌盆与打蛋头提前冷冻15分钟。若已开始起渣粗糙，立刻加入2汤匙未打发的冰镇液体淡奶油，用硅胶刮刀轻柔翻拌即可抚平恢复细腻。"
  }
},

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
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), v);
    }
    return str;
  },

  formatTemp(celsius) {
    if (this.currentUnit === 'imperial') {
      const fahr = Math.round((celsius * 9 / 5) + 32);
      return `${fahr}°F`;
    }
    return `${celsius}°C`;
  },

  formatWeight(grams) {
    if (this.currentUnit === 'imperial') {
      const oz = (grams * 0.035274).toFixed(1);
      return `${oz} oz`;
    }
    return `${grams} g`;
  }
};

if (typeof window !== 'undefined') {
  window.I18N = I18N;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18N;
}
