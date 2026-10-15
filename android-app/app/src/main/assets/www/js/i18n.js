/**
 * RomaLab Scientifico - Internationalization (i18n) Engine
 * Multi-language support: 8 World Languages (IT, EN, ES, FR, DE, PT, JA, ZH)
 * Dual unit support: Metric (g, °C) & Imperial (oz, °F)
 * 11 Quintessential Roman Dishes across Primi, Secondi, Contorni & Dolci
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
    "troubleClumpSol": "Causa: l'acqua era troppo calda (>65°C) o è stato versato troppo formaggio in una volta. Soluzione: allontana dal fuoco, aggiungi 2 cucchiai di acqua di cottura tiepida (ricca di amido) e frusta energicamente con un minipimer o una frustina in un bicchiere a parte prima di riunire.",
    "troubleCurdleTitle": "L'uovo ha iniziato a rapprendersi (effetto frittata)?",
    "troubleCurdleSol": "Causa: padella calda o fuoco rimasto acceso. Soluzione: togli IMMEDIATAMENTE dal fornello, versa 1 cucchiaio di acqua fredda per abbassare la temperatura istantaneamente e mescola alla massima velocità.",
    "troubleSaltyTitle": "Il piatto risulta eccessivamente salato?",
    "troubleSaltySol": "Causa: il Pecorino Romano DOP e il guanciale rilasciano molto sale. Regola aurea: NON salare (o salare a metà) l'acqua della pasta! Per rimediare ora, manteca con poca acqua tiepida non salata.",
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
    "servingsHintAbbondante": "🍝 Porzione Abbondante da Trattoria: {amount} di pasta a persona"
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
    "troubleClumpTitle": "Pecorino turned into rubbery chewing gum clumps?",
    "troubleClumpSol": "Cause: Water exceeded 65°C (149°F) or cheese was dumped in all at once. Fix: Move pan off heat, add 2 tbsp lukewarm starchy pasta water, and blitz with an immersion blender in a cup before reuniting.",
    "troubleCurdleTitle": "Egg starting to curdle into scrambled eggs?",
    "troubleCurdleSol": "Cause: Pan too hot or residual burner heat. Fix: Immediately yank pan off the burner, splash 1 tbsp cold water to drop core temperature by 10 degrees, and whisk furiously.",
    "troubleSaltyTitle": "Pasta turned out overly salty?",
    "troubleSaltySol": "Cause: Both Guanciale and Pecorino PDO pack intense salt. Golden rule: Halve pasta boiling salt to 5g/L! To remedy now, emulsify with unsalted warm water.",
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
      },
      "saltimbocca": {
        "category": "secondi",
        "name": "Saltimbocca alla Romana",
        "shortDesc": "Thin milk-fed veal cutlets topped with prosciutto crudo and fresh sage, pan-flashed in butter and deglazed with dry white wine.",
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
            "name": "European butter for searing and finishing",
            "basePerPerson": 25,
            "unit": "g"
          },
          "wine": {
            "name": "Dry Italian white wine (Frascati DOC)",
            "basePerPerson": 30,
            "unit": "ml"
          },
          "flour": {
            "name": "All-purpose flour (for meat side only)",
            "basePerPerson": 10,
            "unit": "g"
          },
          "pepper": {
            "name": "Fresh cracked black pepper (no added salt on prosciutto)",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Pounding and Pinning",
            "desc": "Pound veal cutlets between parchment paper until 3mm thin. Place a slice of prosciutto and a sage leaf on each cutlet. Secure with a wooden toothpick like a pin.",
            "timerMin": 5
          },
          {
            "title": "Flouring Meat Side Only",
            "desc": "Lightly dust ONLY the bottom meat surface with flour, shaking off excess. Never flour the prosciutto or sage.",
            "timerMin": 2
          },
          {
            "title": "High Heat Flash Sear",
            "desc": "Melt 2/3 of the butter over high heat. Lay cutlets meat-side down. Sear undisturbed for 60-80 seconds until a golden crust forms.",
            "timerMin": 2
          },
          {
            "title": "Deglazing and Pan Sauce Emulsion",
            "desc": "Flip cutlets onto prosciutto side for just 15 seconds. Deglaze with white wine, letting alcohol vaporize. Transfer meat to a warm plate. Kill heat, swirl in remaining cold butter to create a silky glossy pan glaze.",
            "timerMin": 1
          }
        ]
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
            "name": "Oxtail cut into thick discs",
            "basePerPerson": 350,
            "unit": "g"
          },
          "celery": {
            "name": "Tender crisp white celery ribs",
            "basePerPerson": 100,
            "unit": "g"
          },
          "pomodoro": {
            "name": "San Marzano PDO tomatoes crushed by hand",
            "basePerPerson": 200,
            "unit": "g"
          },
          "wine": {
            "name": "Full-bodied dry red wine (Cesanese)",
            "basePerPerson": 60,
            "unit": "ml"
          },
          "lard": {
            "name": "Rendered guanciale with diced mirepoix",
            "basePerPerson": 25,
            "unit": "g"
          },
          "cocoa": {
            "name": "Pure unsweetened cocoa powder",
            "basePerPerson": 2,
            "unit": "g"
          },
          "pinenuts": {
            "name": "Toasted pine nuts and soaked raisins",
            "basePerPerson": 10,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "High Heat Searing",
            "desc": "Sizzle the guanciale base in a heavy Dutch oven. Brown oxtail chunks on all sides over high heat for 10 minutes until deeply caramelized.",
            "timerMin": 10
          },
          {
            "title": "Deglazing and Tomato Addition",
            "desc": "Deglaze with rich red wine, letting alcohol boil off completely. Add crushed tomatoes, salt, and coarse black pepper. Bring to a gentle boil.",
            "timerMin": 10
          },
          {
            "title": "Gentle Collagen Hydrolysis Simmer",
            "desc": "Cover tightly and reduce heat to lowest setting (80-85°C / 176-185°F). Simmer undisturbed for 3.5 hours until meat easily falls off the bone.",
            "timerMin": 180
          },
          {
            "title": "Master Finishing Touch: Celery & Cocoa",
            "desc": "Blanch celery ribs for 3 minutes. Add celery, pine nuts, raisins, and cocoa powder dissolved in a ladle of hot sauce to the pot. Simmer gently for 20 minutes before serving.",
            "timerMin": 20
          }
        ]
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
            "name": "Fresh milk-fed lamb chops",
            "basePerPerson": 4,
            "unit": "pz"
          },
          "rosemary": {
            "name": "Minced fresh rosemary and thyme",
            "basePerPerson": 3,
            "unit": "g"
          },
          "garlic": {
            "name": "Crushed garlic cloves in skin",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Extra virgin olive oil or rendered lard",
            "basePerPerson": 15,
            "unit": "ml"
          },
          "lemon": {
            "name": "Fresh lemon wedges for service",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "salt": {
            "name": "Coarse sea salt and cracked pepper",
            "basePerPerson": 3,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Aromatic Herb Marinade",
            "desc": "Massage chops with olive oil or lard, rosemary, crushed garlic, and pepper. Rest at room temperature for 15-20 minutes.",
            "timerMin": 15
          },
          {
            "title": "Cast-Iron or Charcoal Preheating",
            "desc": "Heat cast-iron grill or charcoal grates until smoking hot (230-250°C). Searing surface must be blazing hot.",
            "timerMin": 5
          },
          {
            "title": "Flash Grilling 2 Minutes per Side",
            "desc": "Place chops spaced apart. Sear 2 minutes without moving, flip and sear 2 more minutes. Salt generously upon flipping.",
            "timerMin": 4
          },
          {
            "title": "Burning Hot Finger Service",
            "desc": "Transfer immediately to a warm platter with lemon wedges. Eat strictly with your bare fingers while scorching hot!",
            "timerMin": 1
          }
        ]
      },
      "carciofigiudia": {
        "category": "contorni",
        "name": "Carciofi alla Giudia",
        "shortDesc": "The ancient Roman-Jewish masterpiece: globe artichokes double-fried into crisp golden blooming roses.",
        "origin": "Rome (Jewish Ghetto, 16th century)",
        "difficulty": "Hard (Spiral trimming and dual-temp oil control)",
        "history": "Created in Roman-Jewish kitchens to celebrate breaking the fast after Yom Kippur: whole artichokes blossom into golden edible flowers.",
        "scienceTip": "THE SCIENTIFIC DUAL-FRY: First fry at 140°C (285°F) cooks heart and stem until tender as butter. Second flash fry at 175-180°C (350°F) vaporizes outer moisture, puffing petals into crispy chips.",
        "ingredients": {
          "artichoke": {
            "name": "Roman globe artichokes (Mammole Cimaroli)",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "oil": {
            "name": "Extra virgin olive oil for deep immersion frying",
            "basePerPerson": 250,
            "unit": "ml"
          },
          "lemon": {
            "name": "Fresh lemon for acidulated trimming bath",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "salt": {
            "name": "Fine sea salt and black pepper",
            "basePerPerson": 2,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Spiral Rose Trimming",
            "desc": "Snap off tough outer leaves rotating with a paring knife like peeling an orange. Trim stem and slice off leaf tips to form a neat dome.",
            "timerMin": 10
          },
          {
            "title": "First Low-Heat Fry (140°C / 285°F)",
            "desc": "Submerge artichokes stem-up in 140°C oil for 10-12 minutes until a fork pierces the base effortlessly. Drain and cool 5 minutes.",
            "timerMin": 12
          },
          {
            "title": "Blooming and Heart Seasoning",
            "desc": "Gently press artichokes onto a board or tap together to open petals outward into a blooming rose. Season heart with salt and pepper.",
            "timerMin": 3
          },
          {
            "title": "Second High-Heat Fry (180°C / 350°F)",
            "desc": "Bring oil to 175-180°C. Flick a drop of cold water onto petals and submerge head-down, pressing with tongs for 2 minutes until crackling crisp.",
            "timerMin": 2
          }
        ]
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
            "name": "Roman globe artichokes with long stems",
            "basePerPerson": 1,
            "unit": "pz"
          },
          "mint": {
            "name": "Fresh Roman wild mint (nepetella)",
            "basePerPerson": 3,
            "unit": "g"
          },
          "parsley": {
            "name": "Fresh flat-leaf Italian parsley",
            "basePerPerson": 4,
            "unit": "g"
          },
          "garlic": {
            "name": "Finely minced fresh garlic cloves",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "oil": {
            "name": "Generous extra virgin olive oil",
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
            "title": "Trimming and Core Cavity",
            "desc": "Strip fibrous outer leaves, peel stems and trim thorns. Gently pry open the center petals to make a pocket for the filling.",
            "timerMin": 10
          },
          {
            "title": "Wild Mint Herb Stuffing",
            "desc": "Finely chop wild Roman mint, parsley, garlic, salt, and pepper. Pack the mixture deep into the center cavity of each artichoke.",
            "timerMin": 5
          },
          {
            "title": "Inverted Dutch Oven Packing",
            "desc": "Pack artichokes upside-down snugly in a deep pot. Pour olive oil, white wine, and water halfway up their stems.",
            "timerMin": 5
          },
          {
            "title": "Sealed Steam Braise (90°C / 195°F)",
            "desc": "Tuck wet parchment paper directly over artichokes and cover with a heavy lid. Simmer over low heat for 30 minutes until stems are tender.",
            "timerMin": 30
          }
        ]
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
            "name": "Rich reduced beef & tomato ragù",
            "basePerPerson": 70,
            "unit": "g"
          },
          "mozzarella": {
            "name": "Dry fior di latte mozzarella in batons",
            "basePerPerson": 30,
            "unit": "g"
          },
          "pecorino": {
            "name": "Grated Pecorino Romano and Parmesan",
            "basePerPerson": 15,
            "unit": "g"
          },
          "eggs": {
            "name": "Fresh eggs for dipping",
            "basePerPerson": 0.5,
            "unit": "pz"
          },
          "breadcrumbs": {
            "name": "Fine breadcrumbs for crisp crust",
            "basePerPerson": 35,
            "unit": "g"
          },
          "oil": {
            "name": "High smoke point oil for deep frying",
            "basePerPerson": 200,
            "unit": "ml"
          }
        },
        "steps": [
          {
            "title": "Cooking the Ragù Rice",
            "desc": "Simmer rice directly in meat ragù with broth until al dente. Fold in grated pecorino off heat and spread flat on a tray.",
            "timerMin": 15
          },
          {
            "title": "Starch Retrogradation Chilling",
            "desc": "Cool rice completely for at least 30 minutes until cold and firm to the touch.",
            "timerMin": 30
          },
          {
            "title": "Shaping and Mozzarella Stuffing",
            "desc": "Scoop rice onto palm, push a stick of mozzarella into the center, and shape into an airtight oval croquette.",
            "timerMin": 10
          },
          {
            "title": "Double Breading and Frying (175°C / 350°F)",
            "desc": "Roll in beaten egg then fine breadcrumbs. Deep fry in 175°C oil for 3-4 minutes until golden mahogany. Serve piping hot!",
            "timerMin": 4
          }
        ]
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
            "name": "Strong Manitoba or bread flour (W320)",
            "basePerPerson": 75,
            "unit": "g"
          },
          "milk": {
            "name": "Lukewarm whole milk",
            "basePerPerson": 35,
            "unit": "ml"
          },
          "sugar": {
            "name": "Granulated sugar for dough",
            "basePerPerson": 15,
            "unit": "g"
          },
          "yeast": {
            "name": "Fresh active baker's yeast",
            "basePerPerson": 3,
            "unit": "g"
          },
          "oil": {
            "name": "Light olive oil or melted butter",
            "basePerPerson": 12,
            "unit": "ml"
          },
          "cream": {
            "name": "Heavy whipping cream (35% fat) chilled",
            "basePerPerson": 80,
            "unit": "ml"
          },
          "zest": {
            "name": "Grated fresh orange zest and vanilla",
            "basePerPerson": 1,
            "unit": "g"
          }
        },
        "steps": [
          {
            "title": "Dough Kneading & Gluten Development",
            "desc": "Dissolve yeast in warm milk with a pinch of sugar. Knead with flour, sugar, oil, and zests until smooth, silky and elastic.",
            "timerMin": 15
          },
          {
            "title": "First Rise at 27°C (80°F)",
            "desc": "Proof covered in a warm draft-free spot for 90 minutes until doubled in bulk.",
            "timerMin": 90
          },
          {
            "title": "Oval Buns Shaping & Second Proof",
            "desc": "Divide into elongated football-shaped rolls. Arrange on parchment-lined baking sheet and proof for 60 minutes.",
            "timerMin": 60
          },
          {
            "title": "Baking and Sugar Glaze",
            "desc": "Bake at 180°C (350°F) for 12-14 minutes until shiny golden. Brush with simple sugar syrup right out of the oven.",
            "timerMin": 14
          },
          {
            "title": "Split & Spatula Cream Filling",
            "desc": "Cool completely. Slice lengthwise through the top without cutting in half. Whip cold cream with powdered sugar and smooth flush with a pastry spatula.",
            "timerMin": 5
          }
        ]
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
    "servingsHintAbbondante": "🍝 Hearty Roman Trattoria portion: {amount} dry pasta per person"
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
    "troubleClumpTitle": "¿El pecorino se hizo grumos gomosos?",
    "troubleClumpSol": "Causa: El agua estaba a más de 65°C o se echó el queso todo de golpe. Solución: Retira del fuego, añade 2 cucharadas de agua tibia de cocción y bate enérgicamente con batidor o minipimer en un vaso antes de unir.",
    "troubleCurdleTitle": "¿El huevo empezó a cuajarse como tortilla?",
    "troubleCurdleSol": "Causa: Sartén muy caliente o fuego encendido. Solución: Retira INMEDIATAMENTE de la hornilla, añade 1 cucharada de agua fría para frenar la temperatura y bate a máxima velocidad.",
    "troubleSaltyTitle": "¿El plato ha quedado demasiado salado?",
    "troubleSaltySol": "Causa: El guanciale y el Pecorino DOP ya aportan mucha sal. Regla de oro: Pon solo 5g de sal por litro en el agua de cocción. Para arreglarlo ahora, manteca con agua tibia sin sal.",
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
    "servingsHintAbbondante": "🍝 Ración Abundante de Taberna Romana: {amount} de pasta por persona"
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
    "troubleClumpTitle": "Le pecorino a formé des grumeaux caoutchouteux ?",
    "troubleClumpSol": "Cause : Eau trop chaude (>65°C) ou fromage versé d'un coup. Solution : Retirez du feu, ajoutez 2 c.à.s d'eau de cuisson tiède et fouettez au mixeur dans un verre avant de réunir.",
    "troubleCurdleTitle": "L'œuf commence à coaguler en omelette ?",
    "troubleCurdleSol": "Cause : Poêle trop chaude. Solution : Retirez IMMÉDIATEMENT du feu, versez 1 c.à.s d'eau froide pour faire chuter la température et fouettez à vive allure.",
    "troubleSaltyTitle": "Le plat est trop salé ?",
    "troubleSaltySol": "Cause : Le pecorino et le guanciale sont déjà très salés. Règle d'or : seulement 5g de sel par litre d'eau ! Rattrapez en émulsionnant avec un peu d'eau tiède non salée.",
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
    "servingsHintAbbondante": "🍝 Portion Généreuse d'Osteria : {amount} de pâtes par personne"
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
    "troubleClumpTitle": "Pecorino hat gummiartige Klumpen gebildet?",
    "troubleClumpSol": "Ursache: Wasser war über 65°C oder Käse wurde auf einmal zugegeben. Lösung: Von der Hitze nehmen, 2 EL lauwarmes Stärkewasser zugeben und in einem Glas mit Stabmixer glattpürieren.",
    "troubleCurdleTitle": "Ei stockt zu Rührei?",
    "troubleCurdleSol": "Ursache: Pfanne zu heiß. Lösung: SOFORT von der Platte nehmen, 1 EL kaltes Wasser zugeben und mit Höchstgeschwindigkeit rühren.",
    "troubleSaltyTitle": "Pasta schmeckt zu salzig?",
    "troubleSaltySol": "Ursache: Guanciale und Pecorino sind sehr salzreich. Goldene Regel: Nur 5g Salz pro Liter Wasser! Jetzt mit etwas ungesalzenem warmem Wasser ausgleichen.",
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
    "servingsHintAbbondante": "🍝 Üppige Trattoria-Portion: {amount} Pasta pro Person"
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
    "troubleClumpSol": "Causa: Água acima de 65°C ou queijo adicionado de uma só vez. Solução: Retire do fogo, adicione 2 colheres de sopa de água morna de cozimento e bata com mixer em um copo antes de juntar.",
    "troubleCurdleTitle": "O ovo começou a talhar como omelete?",
    "troubleCurdleSol": "Causa: Frigideira muito quente. Solução: Retire IMEDIATAMENTE da boca do fogão, jogue 1 colher de água fria e mexa na velocidade máxima.",
    "troubleSaltyTitle": "O prato ficou muito salgado?",
    "troubleSaltySol": "Causa: Guanciale e Pecorino já têm muito sal. Regra de ouro: Ponha apenas 5g de sal por litro na água da massa! Corrija emulsionando com água morna sem sal.",
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
    "servingsHintAbbondante": "🍝 Porção Generosa de Cantina Romana: {amount} de massa por pessoa"
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
    "troubleClumpTitle": "チーズがゴム状のダマになってしまった？",
    "troubleClumpSol": "原因: 湯温が65°Cを超えていたか、チーズを一度に入れすぎました。対処法: 火から下ろし、ぬるい茹で汁を大さじ2杯加え、別容器でハンドブレンダーまたはミニ泡立て器で攪拌してから戻します。",
    "troubleCurdleTitle": "卵が固まりかけてスクランブルエッグになりそう？",
    "troubleCurdleSol": "原因: フライパンが熱すぎます。対処法: 即座にコンロから離し、冷水を大さじ1杯注いで温度を急低下させ、全力で混ぜてください。",
    "troubleSaltyTitle": "出来上がりが塩辛すぎる？",
    "troubleSaltySol": "原因: グアンチャーレとチーズ自体に強い塩気があります。原則: パスタを茹でる塩は通常の半分(5g/L)に！真水またはぬるま湯を少し足して乳化し直します。",
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
    "servingsHintAbbondante": "🍝 ローマ下町トラットリアの大盛り: 1人あたりパスタ{amount}"
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
    "troubleClumpTitle": "奶酪结成橡胶状硬块？",
    "troubleClumpSol": "原因：面汤温度超过65°C或奶酪一次性倾倒过多。补救：移开火源，加入2汤匙温面汤，在量杯中用迷你打蛋器或料理棒充分搅打顺滑后再混入。",
    "troubleCurdleTitle": "蛋黄开始凝结变成炒鸡蛋？",
    "troubleCurdleSol": "原因：锅底过热或未关火。补救：立即移开火源！倒入1汤匙冷水快速降低温度，并以最高速度剧烈搅拌。",
    "troubleSaltyTitle": "成品味道过咸？",
    "troubleSaltySol": "原因：Guanciale和羊奶酪本身含盐极高。黄金铁律：煮面水只需放平时一半的盐(5g/L)！若已过咸，用不带咸味的温水乳化稀释。",
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        "category": "primi"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
    "servingsHintAbbondante": "🍝 罗马街头小馆豪爽大份：每人意面 {amount}"
  }
},

  init() {
    const validCodes = this.languages.map(l => l.code);
    const savedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('romalab_lang') : null;
    if (savedLang && validCodes.includes(savedLang)) {
      this.currentLang = savedLang;
    } else {
      const browserLang = (typeof navigator !== 'undefined' ? (navigator.language || navigator.userLanguage || '') : '').toLowerCase();
      const matched = validCodes.find(code => browserLang.startsWith(code));
      this.currentLang = matched || 'it';
    }

    const savedUnit = typeof localStorage !== 'undefined' ? localStorage.getItem('romalab_unit') : null;
    if (savedUnit && (savedUnit === 'metric' || savedUnit === 'imperial')) {
      this.currentUnit = savedUnit;
    } else {
      this.currentUnit = (this.currentLang === 'en' && typeof navigator !== 'undefined' && navigator.language.includes('US')) ? 'imperial' : 'metric';
    }

    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = this.currentLang;
    }
  },

  t(key, params = {}) {
    const keys = key.split('.');
    let val = this.dict[this.currentLang];
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        let fallback = this.dict['it'];
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        val = fallback;
        break;
      }
    }

    if (typeof val === 'string') {
      for (const [pKey, pVal] of Object.entries(params)) {
        val = val.replace(new RegExp(`\\{${pKey}\\}`, 'g'), pVal);
      }
    }

    return val;
  },

  setLanguage(lang) {
    const validCodes = this.languages.map(l => l.code);
    if (!validCodes.includes(lang)) return;
    this.currentLang = lang;
    if (typeof localStorage !== 'undefined') localStorage.setItem('romalab_lang', lang);
    if (typeof document !== 'undefined' && document.documentElement) document.documentElement.lang = lang;
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new CustomEvent('romalab:languageChanged', { detail: { lang } }));
    }
  },

  setUnit(unit) {
    if (unit !== 'metric' && unit !== 'imperial') return;
    this.currentUnit = unit;
    if (typeof localStorage !== 'undefined') localStorage.setItem('romalab_unit', unit);
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new CustomEvent('romalab:unitChanged', { detail: { unit } }));
    }
  },

  formatWeight(grams) {
    if (this.currentUnit === 'imperial') {
      const oz = grams * 0.035274;
      return `${oz.toFixed(1)} oz`;
    }
    return `${Math.round(grams)} g`;
  },

  formatTemp(celsius) {
    if (this.currentUnit === 'imperial') {
      const f = (celsius * 9/5) + 32;
      return `${Math.round(f)}°F`;
    }
    return `${Math.round(celsius)}°C`;
  }
};

if (typeof window !== 'undefined') {
  window.I18N = I18N;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18N;
}

I18N.init();
