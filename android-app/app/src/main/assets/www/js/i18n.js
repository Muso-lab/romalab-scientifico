/**
 * RomaLab Scientifico - Internationalization (i18n) Engine
 * Multi-language support: Italiano (default/tradizione) & English (international)
 * Dual unit support: Metric (g, °C) & Imperial (oz, °F)
 */

const I18N = {
  currentLang: 'it',
  currentUnit: 'metric', // 'metric' (g, °C) or 'imperial' (oz, °F)

  dict: {
    it: {
      appName: 'RomaLab Scientifico',
      appTagline: 'Autentica Cucina Romana & Cinetica dell\'Emulsione Gastronomica',
      splashVersion: 'v1.0.0 Pro • Edizione Internazionale',
      
      // Navigation
      navRecipes: 'Ricette',
      navCalculator: 'Calcolatore',
      navLiveKitchen: 'In Cucina',
      navScience: 'Scienza & Regole',

      // Actions / Header
      btnLanguage: 'Lingua',
      btnUnits: 'Unità',
      btnTheme: 'Tema',
      btnGuide: 'Guida',
      btnMenu: 'Menu',
      btnShare: 'Condividi',
      btnTroubleshoot: 'Pronto Soccorso',

      // Recipe Categories
      catBig4: 'Le 4 Regine della Pasta',
      catSeconds: 'I Secondi Tradizionali',
      catSides: 'Fritti & Contorni Storici',
      catBakery: 'Dolci & Lievitati',

      // Common labels
      servings: 'Numero Persone',
      pastaWeight: 'Peso Pasta Totale',
      ingredientsTitle: 'Dosaggi Scientifici al Grammo',
      emulsionThermodynamics: 'Finestra Termica di Mantecatura',
      startCooking: 'Avvia Preparazione Passo-Passo',
      step: 'Fase',
      timer: 'Timer',
      start: 'Avvia',
      pause: 'Pausa',
      reset: 'Azzera',
      done: 'Completato',
      alertTempDanger: 'ATTENZIONE: Temperatura > 68°C! Rischio frittata! Spegni il fuoco e allontana la padella.',
      alertTempOptimal: 'TEMPERATURA PERFETTA (58-65°C): Procedi all\'emulsione mantecando energicamente.',
      alertTempCold: 'Temperatura troppo bassa (< 50°C): La salsa potrebbe risultare slegata o fredda.',

      // Units
      unitGrams: 'g',
      unitOunces: 'oz',
      unitCelsius: '°C',
      unitFahrenheit: '°F',

      // Troubleshooting
      troubleshootTitle: 'Pronto Soccorso Gastronomico',
      troubleshootDesc: 'Hai sbagliato qualcosa in padella? Ecco come la fisica ti aiuta a salvare il piatto.',
      troubleClumpTitle: 'Il pecorino ha fatto i grumi gommosi?',
      troubleClumpSol: 'Causa: l\'acqua era troppo calda (>65°C) o è stato versato troppo formaggio in una volta. Soluzione: allontana dal fuoco, aggiungi 2 cucchiai di acqua di cottura tiepida (ricca di amido) e frusta energicamente col minipimer o una frustina in un bicchiere a parte prima di riunire.',
      troubleCurdleTitle: 'L\'uovo ha iniziato a rapprendersi (effetto stracciatella/frittata)?',
      troubleCurdleSol: 'Causa: padella calda o fuoco rimasto acceso. Soluzione: togli IMMEDIATAMENTE dal fornello, versa 1 cucchiaio di acqua fredda per abbassare la temperatura istantaneamente e mescola alla massima velocità.',
      troubleSaltyTitle: 'Il piatto risulta eccessivamente salato?',
      troubleSaltySol: 'Causa: il Pecorino Romano DOP e il guanciale rilasciano molto sale. Regola aurea scientifica: NON salare (o salare a metà) l\'acqua della pasta! Per rimediare ora, manteca con acqua non salata o un goccio d\'acqua tiepida non salata.',

      // Substitution Guide
      substitutionsTitle: 'Guida Internazionale agli Ingredienti',
      guancialeNote: 'GUANCIALE (Guancia di maiale stagionata): Fondamentale. Ha un grasso nobile a basso punto di fusione (32-35°C) che crea un\'emulsione vellutata. Alternativa accettabile: Pancetta tesa non affumicata. DA EVITARE: Bacon affumicato americano (altera il profilo aromatico con zuccheri e fumo).',
      pecorinoNote: 'PECORINO ROMANO DOP: Formaggio ovino a pasta dura, sapido e aromatico. Se all\'estero risulta troppo forte, il compromesso gourmet ammesso dai grandi chef è il "Taglio" 70% Pecorino Romano e 30% Parmigiano Reggiano 24 mesi.',
      pastaNote: 'PASTA DI SEMOLA TRAFILATA AL BRONZO: Rilascia un\'elevata quantità di amidi liberi nell\'acqua durante la cottura. Questo amido funge da tensioattivo naturale legando l\'acqua al grasso.',

      // Recipes details
      recipes: {
        carbonara: {
          name: 'Spaghetti alla Carbonara',
          shortDesc: 'Tuorli d\'uovo freschi, guanciale croccante, Pecorino Romano DOP e pepe tostato.',
          origin: 'Roma, Rione Ponte (1944)',
          difficulty: 'Media (Sensibile alla temperatura)',
          history: 'Nata dall\'incontro tra l\'ingegno dei cuochi romani e gli ingredienti dei soldati alleati, perfezionata nei decenni fino a diventare un\'icona dell\'alta cucina mondiale.',
          scienceTip: 'I tuorli contengono lecitina, un potente emulsionante naturale. A 64-66°C le proteine si distendono e intrappolano il grasso fuso del guanciale senza coagulare in solidi.',
          ingredients: {
            pasta: { name: 'Spaghetti o Rigatoni trafilati al bronzo', basePerPerson: 100, unit: 'g' },
            guanciale: { name: 'Guanciale di maiale laziale o amatriciano', basePerPerson: 60, unit: 'g' },
            yolks: { name: 'Tuorli d\'uovo (grandezza L)', basePerPerson: 1, extraPadella: 1, unit: 'pz' },
            pecorino: { name: 'Pecorino Romano DOP grattugiato fine', basePerPerson: 35, unit: 'g' },
            pepper: { name: 'Pepe nero in grani macinato fresco', basePerPerson: 2.5, unit: 'g' },
            salt: { name: 'Sale per l\'acqua (quantità dimezzata: 5g/litro)', basePerPerson: 5, unit: 'g' }
          },
          steps: [
            {
              title: 'Taglio e Rosolatura del Guanciale',
              desc: 'Taglia il guanciale a fiammifero o listarelle spesse 5-7mm (non a cubetti piccoli per non farlo seccare). Mettilo in padella fredda senza olio né burro. Accendi la fiamma a livello medio-basso e lascia sudare il grasso dolcemente per 10-12 minuti finché l\'esterno è dorato e croccante ma il cuore resta morbido.',
              timerMin: 10
            },
            {
              title: 'La "Carbocrema" a Freddo',
              desc: 'In una ciotola di vetro o ceramica, unisci i tuorli d\'uovo con il Pecorino Romano DOP grattugiato finemente e una generosa macinata di pepe nero tostato. Lavora con una frusta o forchetta fino a ottenere una crema pastosa e omogenea. Aggiungi 2 cucchiai del grasso fuso tiepido del guanciale per temperare e avviare l\'emulsione aromatica.',
              timerMin: 3
            },
            {
              title: 'Cottura Pasta & Estrazione Amido',
              desc: 'Cuoci la pasta in abbondante acqua bollente con poco sale (5g per litro d\'acqua, metà del normale, poiché il guanciale e il pecorino sono molto sapidi). Scola la pasta 2 minuti prima del tempo indicato sulla confezione, conservando una tazza di acqua di cottura ricca di amido.',
              timerMin: 8
            },
            {
              title: 'Risottatura in Padella',
              desc: 'Versa la pasta al dente direttamente nella padella col grasso del guanciale (a fuoco vivo per 1 minuto), aggiungendo un mestolino di acqua di cottura. Salta continuamente per creare la prima emulsione liquida tra amido e grasso.',
              timerMin: 1
            },
            {
              title: 'La Mantecatura Scientifica (A Fuoco Spento)',
              desc: 'SPEGNI IL FUOCO E ALLONTANA LA PADELLA dal fornello. Attendi 45-60 secondi che la temperatura della padella scenda a 60-65°C. Versa la pasta nella ciotola con la crema d\'uovo (o versa la crema in padella se la padella si è intiepidita). Mescola rapidamente e salta aggiungendo poca acqua di cottura all\'occorrenza. Impiatta subito con il guanciale croccante in cima e altro pecorino.',
              timerMin: 1
            }
          ]
        },
        cacioepepe: {
          name: 'Tonnarelli Cacio e Pepe',
          shortDesc: 'Solo tre elementi: pasta trafilata ricca d\'amido, Pecorino Romano DOP e pepe nero tostato.',
          origin: 'Roma, Agro Romano (Tradizione pastorale secolare)',
          difficulty: 'Alta (Richiede precisione termica)',
          history: 'Il piatto dei pastori durante la transumanza nei pascoli laziali: ingredienti che si conservavano a lungo nelle bisacce senza andare a male.',
          scienceTip: 'Il Pecorino fonde a 55°C, ma sopra i 65°C le caseine polimerizzano espellendo il siero (formando un pastone elastico). La salvezza è l\'amido sciolto dell\'acqua che stabilizza l\'emulsione impedendo alle proteine di agglutinarsi.',
          ingredients: {
            pasta: { name: 'Tonnarelli freschi all\'uovo o Spaghetti ruvidi', basePerPerson: 100, unit: 'g' },
            pecorino: { name: 'Pecorino Romano DOP grattugiato a velo', basePerPerson: 50, unit: 'g' },
            pepper: { name: 'Pepe nero in grani da tostare', basePerPerson: 3.5, unit: 'g' },
            water: { name: 'Acqua di cottura della pasta concentrata', basePerPerson: 40, unit: 'ml' }
          },
          steps: [
            {
              title: 'Tostatura e Sviluppo Aromi del Pepe',
              desc: 'Pesta i grani di pepe al mortaio (o macina grossa). Metti il pepe in una padella capiente a secco a fiamma media per 1-2 minuti. Quando sprigiona il profumo intenso degli oli essenziali tostati (piperina), sfuma con un mestolino d\'acqua bollente della pasta: si formerà un brodo pepato profumatissimo.',
              timerMin: 2
            },
            {
              title: 'Preparazione della Pastella a Freddo',
              desc: 'In una ciotola versa il Pecorino Romano grattugiato finemente. Aggiungi poco alla volta acqua di cottura della pasta prelevata a metà cottura (fatta intiepidire a circa 55-60°C). Mescola energicamente con una frusta fino a creare una crema densa e senza grumi. Non scaldare mai sul fuoco!',
              timerMin: 3
            },
            {
              title: 'Risottatura Finale',
              desc: 'Scola i tonnarelli al dente direttamente nella padella col brodo di pepe e salta a fuoco vivo per finire la cottura e far concentrare l\'amido in una cremina lucida.',
              timerMin: 2
            },
            {
              title: 'Mantecatura Fuori dal Fuoco',
              desc: 'Sposta la padella fuori dalla fonte di calore. Attendi 30 secondi che la temperatura scenda sotto i 60°C. Aggiungi la pastella di pecorino e salta vigorosamente: l\'amido della pasta e la crema si fonderanno in un\'onda cremosa perfetta.',
              timerMin: 1
            }
          ]
        },
        amatriciana: {
          name: 'Bucatini all\'Amatriciana',
          shortDesc: 'Guanciale croccante, pomodoro San Marzano pelato, Pecorino Romano DOP e sfumata di vino bianco secco.',
          origin: 'Amatrice / Roma (Disciplinare STG)',
          difficulty: 'Facile / Media',
          history: 'Evoluzione della Gricia (l\'Amatriciana bianca) avvenuta a fine Settecento con l\'introduzione del pomodoro nella cucina laziale.',
          scienceTip: 'L\'acidità naturale del pomodoro San Marzano (pH ~4.3) bilancia perfettamente la ricchezza lipidica del guanciale, mentre il pecorino a fine cottura aggiunge umami e sapidità profonda.',
          ingredients: {
            pasta: { name: 'Bucatini o Mezzi Rigatoni trafilati al bronzo', basePerPerson: 100, unit: 'g' },
            guanciale: { name: 'Guanciale di Amatrice a listarelle', basePerPerson: 50, unit: 'g' },
            pomodoro: { name: 'Pomodori pelati San Marzano DOP schiacciati a mano', basePerPerson: 120, unit: 'g' },
            pecorino: { name: 'Pecorino Romano DOP grattugiato', basePerPerson: 30, unit: 'g' },
            vino: { name: 'Vino bianco secco (Castelli Romani) per sfumare', basePerPerson: 15, unit: 'ml' },
            chili: { name: 'Peperoncino rosso fresco o secco (facoltativo)', basePerPerson: 0.5, unit: 'pz' }
          },
          steps: [
            {
              title: 'Doratura del Guanciale',
              desc: 'Rosola il guanciale in padella di ferro o alluminio a fiamma dolce finché diventa dorato e croccante. Preleva i pezzi croccanti e tienili da parte al caldo (rimarranno croccanti e non molli).',
              timerMin: 8
            },
            {
              title: 'Sfumata di Vino & Pomodoro',
              desc: 'Nel fondo di cottura con il grasso fuso rimasto in padella, sfuma col vino bianco e fai evaporare l\'alcol. Aggiungi il peperoncino e i pomodori pelati sfilacciati a mano. Lascia sobbollire a fuoco medio per 12-15 minuti finché la salsa si addensa e lucida.',
              timerMin: 12
            },
            {
              title: 'Unione e Mantecatura',
              desc: 'Cuoci i bucatini al dente, versali nel sugo con qualche pezzo di guanciale e salta per 1 minuto. Spegni la fiamma, manteca con una cascata di Pecorino Romano e impiatta disponendo in cima il guanciale croccante.',
              timerMin: 2
            }
          ]
        },
        gricia: {
          name: 'Mezze Maniche alla Gricia',
          shortDesc: 'La leggendaria "Amatriciana bianca": pasta, guanciale, pecorino e pepe nero.',
          origin: 'Grisciano / Roma antica',
          difficulty: 'Media',
          history: 'La madre di tutte le paste romane: la Carbonara e l\'Amatriciana sono nate come sue varianti arricchite.',
          scienceTip: 'Poiché non c\'è pomodoro né uovo a fare da legante, la cremosità dipende al 100% dalla corretta risottatura della pasta con l\'amido estratto e il grasso fluido.',
          ingredients: {
            pasta: { name: 'Mezze Maniche o Rigatoni rigati', basePerPerson: 100, unit: 'g' },
            guanciale: { name: 'Guanciale stagionato a listarelle', basePerPerson: 55, unit: 'g' },
            pecorino: { name: 'Pecorino Romano DOP media stagionatura', basePerPerson: 40, unit: 'g' },
            pepper: { name: 'Pepe nero macinato', basePerPerson: 2.5, unit: 'g' }
          },
          steps: [
            {
              title: 'Sudorazione Guanciale',
              desc: 'Fai sfrigolare il guanciale a fiamma moderata fino a renderlo croccante fuori e morbido dentro. Tieni da parte 2/3 del guanciale croccante.',
              timerMin: 8
            },
            {
              title: 'Creazione del Fondo d\'Amido',
              desc: 'Aggiungi un mestolo di acqua bollente nella padella col grasso e il pepe: crea un\'emulsione opalescente ricca di sapori.',
              timerMin: 2
            },
            {
              title: 'Mantecatura Finale col Pecorino',
              desc: 'Scola la pasta al dente in padella, salta a fuoco vivo per 60 secondi. Spegni il fuoco, attendi 30 secondi, spolvera con 3/4 del pecorino e manteca formando la vellutata. Guarnisci col guanciale croccante e il pecorino rimasto.',
              timerMin: 2
            }
          ]
        }
      }
    },

    en: {
      appName: 'RomaLab Scientific',
      appTagline: 'Authentic Roman Cuisine & Culinary Emulsion Thermodynamics',
      splashVersion: 'v1.0.0 Pro • International Edition',
      
      // Navigation
      navRecipes: 'Recipes',
      navCalculator: 'Calculator',
      navLiveKitchen: 'In The Kitchen',
      navScience: 'Science & Rules',

      // Actions / Header
      btnLanguage: 'Language',
      btnUnits: 'Units',
      btnTheme: 'Theme',
      btnGuide: 'Guide',
      btnMenu: 'Menu',
      btnShare: 'Share',
      btnTroubleshoot: 'Emergency Aid',

      // Recipe Categories
      catBig4: 'The Big 4 Roman Pastas',
      catSeconds: 'Iconic Second Courses',
      catSides: 'Historic Fried Bites & Sides',
      catBakery: 'Roman Bakery & Sweets',

      // Common labels
      servings: 'Number of Servings',
      pastaWeight: 'Total Pasta Weight',
      ingredientsTitle: 'Scientific Gram & Ounce Weights',
      emulsionThermodynamics: 'Thermal Mantecatura Window',
      startCooking: 'Start Step-by-Step Cooking Guide',
      step: 'Step',
      timer: 'Timer',
      start: 'Start',
      pause: 'Pause',
      reset: 'Reset',
      done: 'Completed',
      alertTempDanger: 'WARNING: Pan temp > 68°C (154°F)! Scramble/omelette danger! Kill the heat immediately.',
      alertTempOptimal: 'OPTIMAL WINDOW (58-65°C / 136-149°F): Perfect temperature for silky, glossy emulsion.',
      alertTempCold: 'Temperature too low (< 50°C / 122°F): Sauce may break or feel cold.',

      // Units
      unitGrams: 'g',
      unitOunces: 'oz',
      unitCelsius: '°C',
      unitFahrenheit: '°F',

      // Troubleshooting
      troubleshootTitle: 'Culinary First Aid & Troubleshooting',
      troubleshootDesc: 'Did something go wrong in the pan? Here is how molecular physics saves your dinner.',
      troubleClumpTitle: 'Cheese clumping into a rubbery mass (chewing gum)?',
      troubleClumpSol: 'Cause: The water was hotter than 65°C (149°F) or too much cheese was added at once. Solution: Take off the heat, add 2 tablespoons of warm, starchy cooking water, and vigorously whisk with a small wire whisk or immersion blender in a separate cup before returning to the pasta.',
      troubleCurdleTitle: 'Egg curdled and turned into scrambled egg flakes?',
      troubleCurdleSol: 'Cause: The pan was too hot or the stove was left on. Solution: REMOVE IMMEDIATELY from burner, splash 1 tablespoon of cold water to drop the temp instantly, and stir with lightning speed.',
      troubleSaltyTitle: 'Is the pasta overpowering and way too salty?',
      troubleSaltySol: 'Cause: Pecorino Romano PDO and cured guanciale already pack heavy natural salt. Scientific golden rule: NEVER over-salt your pasta water (use only 5g per liter / half normal salt)! Fix it now by tossing with unsalted warm water.',

      // Substitution Guide
      substitutionsTitle: 'International Ingredient Guide & Substitutes',
      guancialeNote: 'GUANCIALE (Cured Pork Jowl): Indispensable. Its noble intramuscular fat has a low melting point (32-35°C / 90-95°F) that produces silky, velvet emulsions. Acceptable substitute: Unsmoked Italian Pancetta. STRICTLY AVOID: Smoked American breakfast bacon (ruins the flavor balance with wood smoke & corn syrups).',
      pecorinoNote: 'PECORINO ROMANO PDO: Hard, sharp, salty sheep\'s milk cheese with protected designation of origin. If too pungent for overseas palates, the chef-approved compromise is a 70% Pecorino Romano and 30% aged Parmigiano Reggiano blend.',
      pastaNote: 'BRONZE-DIE EXTRUDED SEMOLINA PASTA: Coarse rough exterior that sheds massive free starches into the boiling water. This dissolved starch is a natural surfactant that locks the liquid water and rendered pork fat into a glossy permanent emulsion.',

      // Recipes details
      recipes: {
        carbonara: {
          name: 'Spaghetti alla Carbonara',
          shortDesc: 'Fresh egg yolks, crispy cured pork jowl, Pecorino Romano PDO, and cracked toasted pepper.',
          origin: 'Rome, Ponte District (circa 1944)',
          difficulty: 'Medium (Thermal Precision Crucial)',
          history: 'Born from the ingenuity of Roman tavern cooks and Allied soldier rations, refined across decades into a global gastronomic masterpiece.',
          scienceTip: 'Egg yolks are rich in lecithin, a potent natural emulsifier. Between 64-66°C (147-151°F), proteins uncoil and encapsulate liquid pork fat without coagulating into solid rubber.',
          ingredients: {
            pasta: { name: 'Bronze-cut Spaghetti or Rigatoni', basePerPerson: 100, unit: 'g' },
            guanciale: { name: 'Cured Italian Pork Jowl (Guanciale)', basePerPerson: 60, unit: 'g' },
            yolks: { name: 'Egg Yolks (Large size)', basePerPerson: 1, extraPadella: 1, unit: 'pcs' },
            pecorino: { name: 'Finely grated Pecorino Romano PDO', basePerPerson: 35, unit: 'g' },
            pepper: { name: 'Freshly crushed whole black peppercorns', basePerPerson: 2.5, unit: 'g' },
            salt: { name: 'Pasta boiling salt (half standard: 5g / quart)', basePerPerson: 5, unit: 'g' }
          },
          steps: [
            {
              title: 'Guanciale Rendering & Crisp Formation',
              desc: 'Cut guanciale into thick matchsticks (5-7mm / 0.25in; avoid small cubes which dry out like rocks). Place into a cold, dry skillet with NO oil or butter. Heat over medium-low and let fat gently render for 10-12 minutes until deeply golden and crispy outside while tender inside.',
              timerMin: 10
            },
            {
              title: 'The Cold "Carbocream" Preparation',
              desc: 'In a glass or ceramic bowl, whisk egg yolks with finely grated Pecorino Romano and cracked toasted black pepper until a thick, golden paste forms. Whisk in 2 tablespoons of warm rendered guanciale fat to temper and kickstart the aromatic lipid emulsion.',
              timerMin: 3
            },
            {
              title: 'Pasta Cooking & Starch Concentration',
              desc: 'Boil pasta in salted water (use only half standard salt: 5g per liter, as cheese and cured meat provide heavy salinity). Drain pasta 2 minutes before package al dente time, reserving 1 cup of cloudy, starch-saturated water.',
              timerMin: 8
            },
            {
              title: 'Skillet Starch Glaze (Risottatura)',
              desc: 'Transfer pasta directly into the skillet with rendered pork fat over medium-high heat. Add a ladle of hot pasta water and toss briskly for 60 seconds until a slippery starch glaze coats every strand.',
              timerMin: 1
            },
            {
              title: 'Off-Heat Scientific Mantecatura',
              desc: 'KILL THE FLAME AND REMOVE THE SKILLET from the stove. Wait 45-60 seconds for skillet temperature to drop to 60-65°C (140-150°F). Pour pasta into the egg cream bowl (or fold egg cream into the lukewarm pan). Stir and toss vigorously, splashing cooking water as needed. Plate immediately with crispy guanciale on top.',
              timerMin: 1
            }
          ]
        },
        cacioepepe: {
          name: 'Tonnarelli Cacio e Pepe',
          shortDesc: 'Only three ingredients: coarse starchy pasta, Pecorino Romano PDO, and toasted black pepper.',
          origin: 'Rome, Roman Countryside (Centuries of shepherd heritage)',
          difficulty: 'High (Demands strict temperature control)',
          history: 'The historic dish of shepherds during transhumance migrations: long-lasting provisions carried easily on horseback without spoiling.',
          scienceTip: 'Pecorino starts melting at 55°C (131°F), but above 65°C (149°F) caseins irreversibly cross-link and expel whey, creating an elastic chewing gum clump. High amylose pasta starch shields the proteins from binding together.',
          ingredients: {
            pasta: { name: 'Fresh egg Tonnarelli or coarse Spaghetti', basePerPerson: 100, unit: 'g' },
            pecorino: { name: 'Microplane-grated Pecorino Romano PDO', basePerPerson: 50, unit: 'g' },
            pepper: { name: 'Whole black peppercorns for toasting', basePerPerson: 3.5, unit: 'g' },
            water: { name: 'Concentrated starchy cooking water', basePerPerson: 40, unit: 'ml' }
          },
          steps: [
            {
              title: 'Pepper Toasting & Aroma Bloom',
              desc: 'Coarsely crush peppercorns with a mortar and pestle. Toast in a dry wide skillet over medium heat for 1-2 minutes until fragrant essential oils bloom. Deglaze with a ladle of boiling pasta water to produce a rich pepper broth.',
              timerMin: 2
            },
            {
              title: 'Cold Starch-Cheese Paste',
              desc: 'In a separate bowl, place finely grated Pecorino. Gradually drizzle warm pasta water cooled to about 55-60°C (130-140°F). Whisk vigorously until a smooth, lump-free cheese paste forms. NEVER place this bowl over a flame!',
              timerMin: 3
            },
            {
              title: 'Finish Cooking in Pepper Broth',
              desc: 'Drain pasta 2 minutes early and transfer into the skillet with the pepper broth. Toss vigorously over heat so the pasta finishes cooking in the liquid and releases maximum surface starch.',
              timerMin: 2
            },
            {
              title: 'Off-Heat Velvety Emulsion',
              desc: 'Pull skillet completely off heat. Allow to rest for 30 seconds until steaming slows down (<60°C). Pour in the cheese paste and toss continuously until transformed into a silky, cohesive sauce that clings to every noodle.',
              timerMin: 1
            }
          ]
        },
        amatriciana: {
          name: 'Bucatini all\'Amatriciana',
          shortDesc: 'Crisp guanciale, peeled San Marzano tomatoes, Pecorino Romano PDO, and dry white wine splash.',
          origin: 'Amatrice / Rome (Traditional Specialty Guaranteed)',
          difficulty: 'Easy / Medium',
          history: 'The historic evolution of Gricia during the late 18th century when sweet Italian plum tomatoes were introduced into Roman cuisine.',
          scienceTip: 'Natural San Marzano tomato acidity (pH ~4.3) effortlessly cuts through the rich pork lipid profile, while finished Pecorino imparts savory umami depth.',
          ingredients: {
            pasta: { name: 'Bronze-die Bucatini or Mezzi Rigatoni', basePerPerson: 100, unit: 'g' },
            guanciale: { name: 'Amatrician cured pork jowl strips', basePerPerson: 50, unit: 'g' },
            pomodoro: { name: 'Hand-crushed San Marzano PDO plum tomatoes', basePerPerson: 120, unit: 'g' },
            pecorino: { name: 'Finely grated Pecorino Romano PDO', basePerPerson: 30, unit: 'g' },
            vino: { name: 'Dry Italian white wine (Castelli Romani)', basePerPerson: 15, unit: 'ml' },
            chili: { name: 'Red pepper flakes or fresh chili (optional)', basePerPerson: 0.5, unit: 'pcs' }
          },
          steps: [
            {
              title: 'Guanciale Rendering & Preservation',
              desc: 'Slowly render guanciale in a wide skillet until crisp outside and tender inside. Remove crispy meat onto a plate, leaving the liquid rendered fat in the pan (this keeps the guanciale crunchy instead of soggy).',
              timerMin: 8
            },
            {
              title: 'Wine Deglaze & Tomato Simmer',
              desc: 'Deglaze the skillet fat with white wine and allow alcohol to evaporate. Add chili and hand-crushed tomatoes. Simmer gently over medium heat for 12-15 minutes until rich and glossy.',
              timerMin: 12
            },
            {
              title: 'Toss & Final Pecorino Fold',
              desc: 'Cook bucatini al dente, drain and toss in the bubbling tomato sauce for 60 seconds with half the guanciale. Kill heat, fold in a snow of Pecorino Romano, and top with reserved crispy guanciale.',
              timerMin: 2
            }
          ]
        },
        gricia: {
          name: 'Mezze Maniche alla Gricia',
          shortDesc: 'The legendary "White Amatriciana": pasta, rendered pork jowl, aged pecorino, and toasted black pepper.',
          origin: 'Grisciano / Ancient Rome',
          difficulty: 'Medium',
          history: 'The undisputed mother of Roman pastas: Carbonara and Amatriciana originated as modern evolutions of this ancient shepherd dish.',
          scienceTip: 'With neither egg nor tomato to aid stability, creaminess is 100% reliant on mechanical emulsion between extracted pasta amylose and rendered pork lard.',
          ingredients: {
            pasta: { name: 'Rigid Mezze Maniche or Rigatoni', basePerPerson: 100, unit: 'g' },
            guanciale: { name: 'Cured pork jowl sliced in 5mm strips', basePerPerson: 55, unit: 'g' },
            pecorino: { name: 'Medium-aged Pecorino Romano PDO', basePerPerson: 40, unit: 'g' },
            pepper: { name: 'Freshly cracked black pepper', basePerPerson: 2.5, unit: 'g' }
          },
          steps: [
            {
              title: 'Rendering Guanciale',
              desc: 'Sizzle guanciale gently until crisp on exterior and tender within. Set aside 2/3 of crispy bits for garnish.',
              timerMin: 8
            },
            {
              title: 'Creating the Liquid Lipid-Starch Base',
              desc: 'Ladle boiling starchy pasta water into the rendered fat with toasted pepper: it will form an opalescent savory broth.',
              timerMin: 2
            },
            {
              title: 'Off-Heat Mantecatura',
              desc: 'Toss al dente pasta in the pan over high heat for 60s. Pull off the flame, wait 30 seconds, shower with pecorino, and toss rapidly into a velvet sauce. Crown with reserved crispy guanciale.',
              timerMin: 2
            }
          ]
        }
      }
    }
  },

  init() {
    // Detect language from localStorage or browser preferences
    const savedLang = localStorage.getItem('romalab_lang');
    if (savedLang && (savedLang === 'it' || savedLang === 'en')) {
      this.currentLang = savedLang;
    } else {
      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      this.currentLang = browserLang.startsWith('it') ? 'it' : 'en';
    }

    const savedUnit = localStorage.getItem('romalab_unit');
    if (savedUnit && (savedUnit === 'metric' || savedUnit === 'imperial')) {
      this.currentUnit = savedUnit;
    } else {
      // Default to imperial for US/GB if English, otherwise metric
      this.currentUnit = (this.currentLang === 'en' && navigator.language.includes('US')) ? 'imperial' : 'metric';
    }

    document.documentElement.lang = this.currentLang;
  },

  t(key) {
    const keys = key.split('.');
    let val = this.dict[this.currentLang];
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        // Fallback to Italian if not found in current language
        let fallback = this.dict['it'];
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return val;
  },

  setLanguage(lang) {
    if (lang !== 'it' && lang !== 'en') return;
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

window.I18N = I18N;
I18N.init();
