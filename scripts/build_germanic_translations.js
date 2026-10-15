const fs = require('fs');
const path = require('path');

const enTranslations = {
  sosTroubleshooting: {
    troubleCurdleTitle: "Egg starting to curdle into scrambled eggs?",
    troubleCurdleSol: "Immediately pull the skillet off the heat. Transfer pasta to a cold bowl, add 1 ice cube or 2 tablespoons of cold water, and whisk vigorously. If curds have formed, blend 5 seconds with an immersion blender with a splash of starchy water: lecithin will re-emulsify.",

    troubleClumpTitle: "Pecorino formed rubbery chewing-gum clumps?",
    troubleClumpSol: "Casein exceeds 65°C (149°F) and expels whey. Move pan off heat, add 2-3 tablespoons of warm starchy cooking water (55°C / 131°F), and rapidly blitz with a mini-whisk or immersion blender in a cup before reuniting with pasta.",

    troubleGuancialeTitle: "Guanciale got scorched or stayed rubbery?",
    troubleGuancialeSol: "If rubbery: heat was too high, preventing deep fat from rendering (requires 8-10 min over gentle heat). If burnt: discard charred bits to avoid bitter notes, strain the clear fat, and add fresh toasted black pepper to balance the aroma.",

    troubleSaltyTitle: "Dish turned out overwhelmingly salty?",
    troubleSaltySol: "Aged Pecorino Romano PDO naturally packs high sodium. Golden rule: Halve pasta boiling salt to max 5g/L. Quick rescue: Loosen sauce with unsalted warm water and add extra toasted black pepper (piperine naturally tempers sharp salinity).",

    troubleAcidTitle: "Tomato sauce in Amatriciana too acidic or watery?",
    troubleAcidSol: "Commercial canned tomatoes often have added citric acid. Stir in a microscopic pinch of baking soda (immediate neutralizing chemical reaction) or a teaspoon of warm guanciale fat, and simmer 2 minutes on high heat to concentrate natural sugars.",

    troubleCarciofiTitle: "Carciofi alla Giudìa tough or refusing to bloom into a flower?",
    troubleCarciofiSol: "Before the second fry at 180°C (356°F), hold the artichoke by the stem and gently tap the top upside-down on a cutting board to fan out petals like a blooming flower. If the heart is still firm, extend the first 140°C (284°F) fry by 4 minutes.",

    troubleSuppliTitle: "Supplì bursting open or mozzarella leaking into the oil?",
    troubleSuppliSol: "Never use warm rice: chill in fridge for at least 2 hours so starches set firmly. Slice mozzarella and drain for 1 hour. Always apply a DOUBLE breading (beaten egg + fine breadcrumbs) and deep-fry strictly at 175°C (347°F).",

    troubleCodaTitle: "Coda alla Vaccinara still tough after two hours?",
    troubleCodaSol: "Bovine collagen requires hydrolysis at 80-85°C (176-185°F) for at least 3.5 hours. Do not raise the flame. Add half a cup of warm broth or water, seal tightly with the lid, and continue simmering on the lowest flame until meat falls apart with a fork.",

    troubleSaltimboccaTitle: "Saltimbocca dry or prosciutto turned leathery and hard?",
    troubleSaltimboccaSol: "Veal should never cook beyond 60-80 seconds on the floured meat side. The prosciutto and sage side should only touch the hot pan for 15-20 seconds max to prevent dehydration from hardening the cured ham.",

    troubleCreamTitle: "Maritozzo whipped cream collapsing or turning into butter?",
    troubleCreamSol: "If cream exceeds 10°C (50°F), fat globules rupture and separate. Use fridge-cold cream (3-4°C / 37-39°F) and freeze bowl and beaters for 15 minutes before whipping. If it starts to curdle, fold in 2 tablespoons of unwhipped ice-cold liquid cream with a spatula."
  },

  recipeTips: {
    carbonara: {
      easyTip: "💡 Easy Mode: Reserve 2 tablespoons of starchy pasta water and let it cool to 50°C (122°F) to temper the yolks and pecorino into a smooth paste before adding to the pasta. ALWAYS emulsify completely off the heat.",
      proTip: "🏆 Pro Chef: Use only fresh pasture-raised egg yolks, render guanciale fat gently below 80°C (176°F) without scorching, and execute an energetic wave toss (mantecatura ad onda) between 62°C and 65°C to maximize lecithin viscosity without scrambling."
    },
    cacioepepe: {
      easyTip: "💡 Easy Mode: Whisk the grated Pecorino with lukewarm water at 50°C (122°F) in a separate bowl into a smooth paste. Fold it into the pasta only after the pan has been completely removed from the heat.",
      proTip: "🏆 Pro Chef: Aggressive starch extraction by vigorously risotto-cooking the tonnarelli in the skillet during the final 3 minutes. Dynamic mantecatura at 58°C (136°F): amylose starch concentration must form hydrogen bonds with milk casein."
    },
    amatriciana: {
      easyTip: "💡 Easy Mode: Remove the guanciale from the pan as soon as it turns golden and set it aside. Simmer the tomatoes directly in the rendered pork fat, then crown the pasta with the crispy guanciale right before serving.",
      proTip: "🏆 Pro Chef: Deglaze the hot pan walls with dry white wine to release caramelized sugars. Cook hand-crushed San Marzano tomatoes over lively flame for under 10 minutes to retain bright, vibrant fruit acidity."
    },
    gricia: {
      easyTip: "💡 Easy Mode: Add small splashes of starchy cooking water to the rendered guanciale fat. Never let Pecorino touch the hot metal base of the pan: emulsify by vigorously tossing in mid-air.",
      proTip: "🏆 Pro Chef: Achieve a flawless two-phase lipid/starch emulsion. Dry-toast coarsely crushed black peppercorns at 150°C (300°F) before risotto-glazing to unlock aromatic piperine terpenes."
    },
    saltimbocca: {
      easyTip: "💡 Easy Mode: Flour only the bottom meat side (never the prosciutto). Cook covered over medium heat for 60 seconds: the veal will remain exceptionally tender and succulent.",
      proTip: "🏆 Pro Chef: Deglaze with dry white wine over blazing heat (160°C / 320°F pan deglaze) to build a glossy, velvety emulsion by mounting with ice-cold butter right off the heat."
    },
    coda: {
      easyTip: "💡 Easy Mode: If short on time, use a pressure cooker for the first 45 minutes, then finish simmering uncovered over low heat to reduce and thicken the rich sauce.",
      proTip: "🏆 Pro Chef: Gentle 85°C (185°F) low-heat braise for 4 hours to fully hydrolyze connective collagen into rich melting gelatin. Incorporate pure unsweetened cocoa and toasted pine nuts in the final 15 minutes."
    },
    abbacchio: {
      easyTip: "💡 Easy Mode: Marinate the chops for 15 minutes in a drizzle of olive oil, rosemary, and crushed garlic. Ensure your grill pan is thoroughly preheated so the meat does not stick.",
      proTip: "🏆 Pro Chef: Blazing contact sear at 230°C (446°F) for exactly 90 seconds per side. Season strictly at the end with flaky sea salt to prevent premature osmotic moisture loss."
    },
    carciofigiudia: {
      easyTip: "💡 Easy Mode: Trim generously, removing the outer 4-5 layers of tough fibrous leaves. Submerge in lemon-acidulated cold water to prevent enzymatic browning before frying.",
      proTip: "🏆 Pro Chef: Double immersion oil bath: first at 140°C (284°F) to tenderize the heart, then gently tap upside-down to fan petals into a blooming rose, followed by a 90-second flash fry at 180°C (356°F) to turn petals into paper-crisp chips."
    },
    carciofiromana: {
      easyTip: "💡 Easy Mode: Stand artichokes upside-down snugly in a narrow, high-sided pot, submerged halfway in water and olive oil, tightly covered so steam cooks them evenly throughout.",
      proTip: "🏆 Pro Chef: Traditional stuffing of wild Roman nepetella (Calamintha nepeta), garlic, and a whisper of breadcrumbs. Hermetic steam braise under parchment cartouche at 92°C (198°F) for melt-in-the-mouth buttery leaves."
    },
    suppli: {
      easyTip: "💡 Easy Mode: Cook the ragù risotto the night before or chill in the fridge for at least 2 hours: firm, chilled rice shapes easily into tight croquettes without crumbling.",
      proTip: "🏆 Pro Chef: Flourless double breading with beaten egg and fine breadcrumbs. Deep-fry at an exact sweet spot of 175°C (347°F): delivers an internal molten fior di latte core at 60°C and a razor-thin, glass-crisp outer shell."
    },
    maritozzo: {
      easyTip: "💡 Easy Mode: Place your mixing bowl and whisk beaters in the freezer for 15 minutes before whipping cream: it will whip twice as fast and hold its shape firmly without weeping.",
      proTip: "🏆 Pro Chef: Authentic Roman brioche with controlled biological proofing at 26°C (79°F), finished with warm simple sugar syrup glaze, and filled with chilled 38% fat heavy cream sweetened with 10% powdered sugar."
    }
  },

  recipes: {
    saltimbocca: {
      category: "secondi",
      name: "Saltimbocca alla Romana",
      shortDesc: "Thin milk-fed veal cutlets topped with sweet prosciutto crudo and fresh sage, flashed in butter and deglazed with dry white wine.",
      origin: "Rome (Regola District, late 19th century)",
      difficulty: "Easy (Flash pan cooking in 90 seconds)",
      history: "Documented by culinary master Pellegrino Artusi in 1891 after savoring them at Rome's historic \"Le Venete\" inn: so flavorful they literally \"jump in the mouth\".",
      scienceTip: "Rapid Maillard sear at 160°C (320°F) on the floured meat side only. Off the flame, the pan juices are mounted with cold butter and wine (beurre monté) into a velvety glaze.",
      easyTip: "💡 Easy Mode: Flour only the bottom meat side (never the prosciutto). Cook covered over medium heat for 60 seconds: the veal will remain exceptionally tender and succulent.",
      proTip: "🏆 Pro Chef: Deglaze with dry white wine over blazing heat (160°C / 320°F pan deglaze) to build a glossy, velvety emulsion by mounting with ice-cold butter right off the heat.",
      ingredients: {
        veal: {
          name: "Thin milk-fed veal top round slices (3mm thick)",
          basePerPerson: 160,
          unit: "g"
        },
        prosciutto: {
          name: "High quality sweet prosciutto crudo",
          basePerPerson: 50,
          unit: "g"
        },
        sage: {
          name: "Fresh whole sage leaves",
          basePerPerson: 4,
          unit: "pz"
        },
        butter: {
          name: "European butter for searing and pan sauce emulsion",
          basePerPerson: 25,
          unit: "g"
        },
        wine: {
          name: "Dry Italian white wine (Frascati Superiore DOC)",
          basePerPerson: 30,
          unit: "ml"
        },
        flour: {
          name: "All-purpose wheat flour (for meat base only)",
          basePerPerson: 10,
          unit: "g"
        },
        pepper: {
          name: "Fresh cracked black pepper (do not salt prosciutto)",
          basePerPerson: 1,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Pounding and Pinning",
          desc: "Pound veal cutlets between parchment paper until 3mm thin. Place a slice of sweet prosciutto crudo and a sage leaf on each cutlet. Secure through the center with a wooden toothpick like a pin.",
          timerMin: 5
        },
        {
          title: "Flouring Meat Side Only",
          desc: "Lightly dust ONLY the bottom meat surface with flour, tapping off any excess. Never flour the prosciutto or sage, preserving clean aroma contact.",
          timerMin: 2
        },
        {
          title: "High Heat Flash Sear",
          desc: "Melt two-thirds of the butter in a wide skillet over high heat. Lay the saltimbocca floured meat-side down. Sear undisturbed for 60-80 seconds to build a golden Maillard crust.",
          timerMin: 2
        },
        {
          title: "Deglazing and Pan Sauce Emulsion",
          desc: "Flip cutlets onto the prosciutto side for just 15 seconds. Deglaze with dry white wine, letting alcohol vaporize instantly. Transfer cutlets to a warm plate. Kill heat, whisk in remaining cold butter to emulsify into a glossy velvet glaze, and spoon over meat.",
          timerMin: 1
        }
      ]
    },

    coda: {
      category: "secondi",
      name: "Coda alla Vaccinara",
      shortDesc: "Roman braised oxtail slow-cooked for 4 hours with crisp celery, San Marzano tomatoes, pine nuts, raisins, and bitter cocoa.",
      origin: "Rome (Testaccio Quarter / Fifth Quarter)",
      difficulty: "Medium (Long low-temperature braise)",
      history: "The crown jewel of Roman offal cuisine, born in Testaccio slaughterhouse taverns where butchers turned humble cuts into culinary poetry.",
      scienceTip: "Oxtail collagen hydrolyzes into succulent rich gelatin between 80-85°C (176-185°F) with a barely bubbling simmer (\"pipare\"). Bitter cocoa powder and raisins create a Renaissance sweet-and-sour balance that cuts the richness.",
      easyTip: "💡 Easy Mode: If short on time, use a pressure cooker for the first 45 minutes, then finish simmering uncovered over low heat to reduce and thicken the rich sauce.",
      proTip: "🏆 Pro Chef: Gentle 85°C (185°F) low-heat braise for 4 hours to fully hydrolyze connective collagen into rich melting gelatin. Incorporate pure unsweetened cocoa and toasted pine nuts in the final 15 minutes.",
      ingredients: {
        tail: {
          name: "Oxtail cut into thick discs across the joints",
          basePerPerson: 350,
          unit: "g"
        },
        celery: {
          name: "Tender crisp white celery ribs",
          basePerPerson: 100,
          unit: "g"
        },
        pomodoro: {
          name: "San Marzano PDO whole peeled tomatoes hand-crushed",
          basePerPerson: 200,
          unit: "g"
        },
        wine: {
          name: "Full-bodied dry red wine (Cesanese del Piglio)",
          basePerPerson: 60,
          unit: "ml"
        },
        lard: {
          name: "Minced guanciale with onion and carrot battuto",
          basePerPerson: 25,
          unit: "g"
        },
        cocoa: {
          name: "Pure unsweetened dark cocoa powder",
          basePerPerson: 2,
          unit: "g"
        },
        pinenuts: {
          name: "Toasted pine nuts and plump soaked raisins",
          basePerPerson: 10,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Browning the Oxtail Segments",
          desc: "In a heavy Dutch oven, render the minced guanciale battuto. Add the oxtail pieces and sear over lively heat for 10 minutes until richly browned on all sides to seal in juices.",
          timerMin: 10
        },
        {
          title: "Red Wine Deglaze & Tomato Addition",
          desc: "Deglaze with full-bodied red wine and let the harsh alcohol steam away. Stir in hand-crushed San Marzano tomatoes, sea salt, and a generous grind of black pepper. Bring to a gentle boil.",
          timerMin: 10
        },
        {
          title: "Slow Low-Temperature Collagen Hydrolysis",
          desc: "Cover with a heavy lid and drop the flame to the bare minimum (80-85°C / 176-185°F). Allow the stew to barely bubble (\"pipare\") undisturbed for 3.5 hours until the meat is fork-tender and pulls away from the bone.",
          timerMin: 180
        },
        {
          title: "The Master Touch: Celery, Pine Nuts & Cocoa",
          desc: "Blanch celery chunks for 3 minutes in salted water. Add them to the pot along with toasted pine nuts, soaked raisins, and pure cocoa powder dissolved in a ladle of hot braising jus. Simmer gently for 20 minutes before serving.",
          timerMin: 20
        }
      ]
    },

    abbacchio: {
      category: "secondi",
      name: "Abbacchio alla Scottadito",
      shortDesc: "Milk-fed lamb chops marinated with wild rosemary, garlic, and lard, charred over intense flame and eaten finger-burning hot.",
      origin: "Rome & Roman Countryside",
      difficulty: "Easy (High-heat contact grill)",
      history: "Named \"scottadito\" (finger-scorcher) because Roman tradition dictates eating the chops immediately off the burning grill with your bare hands.",
      scienceTip: "Tender milk-fed lamb requires intense direct contact heat (220-250°C / 430-480°F) to sear in 2 minutes per side while keeping internal core juicy and pink at 56-58°C.",
      easyTip: "💡 Easy Mode: Marinate the chops for 15 minutes in a drizzle of olive oil, rosemary, and crushed garlic. Ensure your grill pan is thoroughly preheated so the meat does not stick.",
      proTip: "🏆 Pro Chef: Blazing contact sear at 230°C (446°F) for exactly 90 seconds per side. Season strictly at the end with flaky sea salt to prevent premature osmotic moisture loss.",
      ingredients: {
        chops: {
          name: "Fresh milk-fed lamb rib chops (abbacchio)",
          basePerPerson: 4,
          unit: "pz"
        },
        rosemary: {
          name: "Fresh rosemary needles and wild thyme finely chopped",
          basePerPerson: 3,
          unit: "g"
        },
        garlic: {
          name: "Young garlic cloves lightly crushed in their skin",
          basePerPerson: 1,
          unit: "pz"
        },
        oil: {
          name: "Extra virgin olive oil or traditional rendered lard",
          basePerPerson: 15,
          unit: "ml"
        },
        lemon: {
          name: "Fresh untreated lemon wedges for serving",
          basePerPerson: 1,
          unit: "pz"
        },
        salt: {
          name: "Coarse sea salt and cracked black peppercorns",
          basePerPerson: 3,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Aromatic Herb Marinade",
          desc: "Massage the lamb chops with olive oil or melted lard, chopped rosemary, crushed garlic cloves, and freshly cracked black pepper. Rest at room temperature for 15-20 minutes.",
          timerMin: 15
        },
        {
          title: "High-Temperature Grill Preheating",
          desc: "Heat a heavy cast-iron grill pan or charcoal grates until smoking hot (230-250°C / 450-480°F). The contact surface must be blazing to caramelize on contact.",
          timerMin: 5
        },
        {
          title: "Flash Grilling (2 Minutes per Side)",
          desc: "Lay chops on the grill well spaced. Sear undisturbed for 2 minutes to produce deep grill marks. Flip and sear the other side for 2 minutes. Season with coarse salt only after flipping.",
          timerMin: 4
        },
        {
          title: "Piping-Hot Finger Service (\"Scottadito\")",
          desc: "Transfer immediately to a warm serving platter alongside lemon wedges. Tradition strictly requires eating them with your bare hands, grabbing the sizzling bone while scorching hot!",
          timerMin: 1
        }
      ]
    },

    carciofigiudia: {
      category: "contorni",
      name: "Carciofi alla Giudia",
      shortDesc: "The ancient Roman-Jewish masterpiece: globe artichokes double-fried into crisp golden blooming roses.",
      origin: "Rome (Jewish Ghetto, 16th century)",
      difficulty: "Hard (Spiral trimming and dual-temp oil control)",
      history: "Created in Roman-Jewish kitchens to celebrate breaking the fast after Yom Kippur: whole artichokes blossom into spectacular crisp golden roses.",
      scienceTip: "THE SCIENTIFIC DUAL-FRY: First fry at 140°C (285°F) cooks heart and stem until tender as butter. Second flash fry at 175-180°C (350-356°F) with a drop of cold water flash-evaporates petal moisture into wafer-thin chips.",
      easyTip: "💡 Easy Mode: Trim generously, removing the outer 4-5 layers of tough fibrous leaves. Submerge in lemon-acidulated cold water to prevent enzymatic browning before frying.",
      proTip: "🏆 Pro Chef: Double immersion oil bath: first at 140°C (284°F) to tenderize the heart, then gently tap upside-down to fan petals into a blooming rose, followed by a 90-second flash fry at 180°C (356°F) to turn petals into paper-crisp chips.",
      ingredients: {
        artichoke: {
          name: "Roman globe artichokes (Mammole Romanesche PGI or Cimaroli)",
          basePerPerson: 1,
          unit: "pz"
        },
        oil: {
          name: "Extra virgin olive oil for deep pan immersion frying",
          basePerPerson: 250,
          unit: "ml"
        },
        lemon: {
          name: "Fresh lemon juice for acidulating trimming water",
          basePerPerson: 0.5,
          unit: "pz"
        },
        salt: {
          name: "Fine sea salt and ground black pepper to season core",
          basePerPerson: 2,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Spiral Rose Trimming",
          desc: "Snap off tough outer dark leaves with a paring knife turning the artichoke like peeling an orange. Shave the stem smooth and slice off thorny tips into a round dome.",
          timerMin: 10
        },
        {
          title: "First Fry at 140°C (Core Tenderizing)",
          desc: "Heat olive oil to 140°C (285°F). Submerge artichokes upside-down for 10-12 minutes until a fork slides effortlessly into the base of the stem. Drain and rest for 5 minutes.",
          timerMin: 12
        },
        {
          title: "Blooming Rose Opening & Seasoning",
          desc: "Gently tap the artichoke head down on a cutting board to fan outer petals outwards like a blooming rose. Season the heart inside with fine salt and black pepper.",
          timerMin: 3
        },
        {
          title: "Second Flash Fry at 180°C (Crispy Petals)",
          desc: "Raise oil to 175-180°C (350-356°F). Flick a few drops of cold water on petals and submerge head-down, pressing lightly with tongs for 2 minutes until petals turn into paper-crisp chips.",
          timerMin: 2
        }
      ]
    },

    carciofiromana: {
      category: "contorni",
      name: "Carciofi alla Romana",
      shortDesc: "Roman artichokes stuffed with wild Roman mint, garlic, and parsley, braised upside-down in sealed oil and white wine.",
      origin: "Rome & Roman Countryside",
      difficulty: "Medium (Meticulous cleaning and steam braise)",
      history: "The quintessential Sunday side dish of Roman trattorias. Wild nepetella mint, native to Roman ruins, imparts an unforgettable herbal fragrance.",
      scienceTip: "Braised upside-down at 90-95°C (195-205°F) under sealed parchment, the artichokes cook in the aromatic vapor of their own wine-oil emulsion, preserving polyphenols without darkening.",
      easyTip: "💡 Easy Mode: Stand artichokes upside-down snugly in a narrow, high-sided pot, submerged halfway in water and olive oil, tightly covered so steam cooks them evenly throughout.",
      proTip: "🏆 Pro Chef: Traditional stuffing of wild Roman nepetella (Calamintha nepeta), garlic, and a whisper of breadcrumbs. Hermetic steam braise under parchment cartouche at 92°C (198°F) for melt-in-the-mouth buttery leaves.",
      ingredients: {
        artichoke: {
          name: "Roman globe artichokes with long tender stems",
          basePerPerson: 1,
          unit: "pz"
        },
        mint: {
          name: "Fresh wild Roman mint (mentuccia / nepetella)",
          basePerPerson: 3,
          unit: "g"
        },
        parsley: {
          name: "Fresh flat-leaf Italian parsley finely chopped",
          basePerPerson: 4,
          unit: "g"
        },
        garlic: {
          name: "Young fresh garlic cloves finely minced",
          basePerPerson: 0.5,
          unit: "pz"
        },
        oil: {
          name: "Generous high-quality extra virgin olive oil",
          basePerPerson: 35,
          unit: "ml"
        },
        wine: {
          name: "Dry white wine or water for braising base",
          basePerPerson: 25,
          unit: "ml"
        }
      },
      steps: [
        {
          title: "Trimming and Opening Core Cavity",
          desc: "Strip tough outer leaves, peel fibrous exterior of stem, and slice off tips. Gently spread open the center petals with fingers to create space for the herb stuffing.",
          timerMin: 10
        },
        {
          title: "Stuffing with Minced Roman Herbs",
          desc: "Finely mince Roman mint, parsley, garlic, sea salt, and black pepper. Generously stuff the mixture deep into the center cavity of each artichoke.",
          timerMin: 5
        },
        {
          title: "Inverted Packing in High-Sided Pan",
          desc: "Stand the artichokes upside-down tightly against one another in a heavy saucepan. Drizzle with generous olive oil, dry white wine, and water halfway up the artichoke heads.",
          timerMin: 5
        },
        {
          title: "Sealed Steam Braise at 90°C",
          desc: "Cover directly with a sheet of damp parchment paper and a tight lid. Simmer gently over low heat for 25-30 minutes until stems are buttery tender when pierced with a knife.",
          timerMin: 30
        }
      ]
    },

    suppli: {
      category: "contorni",
      name: "Supplì al Telefono",
      shortDesc: "Crispy Roman rice croquettes simmered in beef ragù, encased in golden crust with a molten stretchy mozzarella core.",
      origin: "Rome (Trastevere, late 19th century)",
      difficulty: "Medium (Shaping and immersion frying)",
      history: "Named \"al telefono\" because breaking one in half reveals a continuous stretch of melted mozzarella resembling vintage telephone cords.",
      scienceTip: "Cooked rice must be cooled to <15°C (59°F) to retrogradate amylose starch, bonding the grains without requiring egg binders in the rice. Deep frying at 175°C (350°F) instantly hardens the breadcrumb shell, sealing the melting cheese inside.",
      easyTip: "💡 Easy Mode: Cook the ragù risotto the night before or chill in the fridge for at least 2 hours: firm, chilled rice shapes easily into tight croquettes without crumbling.",
      proTip: "🏆 Pro Chef: Flourless double breading with beaten egg and fine breadcrumbs. Deep-fry at an exact sweet spot of 175°C (347°F): delivers an internal molten fior di latte core at 60°C and a razor-thin, glass-crisp outer shell.",
      ingredients: {
        rice: {
          name: "Carnaroli or Arborio risotto rice",
          basePerPerson: 80,
          unit: "g"
        },
        ragu: {
          name: "Savory reduced beef and tomato ragù",
          basePerPerson: 70,
          unit: "g"
        },
        mozzarella: {
          name: "Dry fior di latte mozzarella cut into thick batons",
          basePerPerson: 30,
          unit: "g"
        },
        pecorino: {
          name: "Finely grated Pecorino Romano and Parmigiano",
          basePerPerson: 15,
          unit: "g"
        },
        eggs: {
          name: "Fresh eggs for breading wash",
          basePerPerson: 0.5,
          unit: "pz"
        },
        breadcrumbs: {
          name: "Fine dry breadcrumbs for extra-crisp shell",
          basePerPerson: 35,
          unit: "g"
        },
        oil: {
          name: "Deep frying oil with high smoke point (peanut or olive oil)",
          basePerPerson: 200,
          unit: "ml"
        }
      },
      steps: [
        {
          title: "Simmering Risotto in Rich Ragù",
          desc: "Cook the rice directly in the beef ragù loosened with light broth, keeping it very al dente. Off the heat, fold in grated Pecorino and spread flat over a wide baking sheet.",
          timerMin: 15
        },
        {
          title: "Chilling and Starch Retrogradation",
          desc: "Allow the rice to cool completely for at least 30 minutes at room temperature, then chill in the fridge until cold and compact so amylose starches solidify.",
          timerMin: 30
        },
        {
          title: "Shaping Oval Croquette & Mozzarella Core",
          desc: "Take a handful of cold rice in your palm, insert a stick of mozzarella in the center, and mold the rice firmly around it into an airtight torpedo shape without cracks.",
          timerMin: 10
        },
        {
          title: "Crisp Breading and Frying at 175°C",
          desc: "Roll the supplì thoroughly in beaten egg and fine breadcrumbs. Deep fry in 175°C (350°F) oil for 3-4 minutes until deeply golden brown. Serve burning hot for the signature stretchy telephone wire mozzarella pull!",
          timerMin: 4
        }
      ]
    },

    maritozzo: {
      category: "dolci",
      name: "Maritozzo con la Panna",
      shortDesc: "The iconic Roman sweet brioche infused with orange zest and vanilla, sliced open and mounded with fresh whipped cream.",
      origin: "Rome (Ancient Roman and Renaissance heritage)",
      difficulty: "Medium (Controlled biological proofing)",
      history: "Historically the only treat permitted during Lenten fasting. In Renaissance times, prospective grooms (\"maritozzi\") gifted them with an engagement ring hidden in the cream.",
      scienceTip: "Strong flour (W 300-330) gluten network traps CO2 bubbles during proofing at 26-28°C (79-82°F). Baking at 180°C sets an ethereal pillowy crumb while Maillard browning colors the crust.",
      easyTip: "💡 Easy Mode: Place your mixing bowl and whisk beaters in the freezer for 15 minutes before whipping cream: it will whip twice as fast and hold its shape firmly without weeping.",
      proTip: "🏆 Pro Chef: Authentic Roman brioche with controlled biological proofing at 26°C (79°F), finished with warm simple sugar syrup glaze, and filled with chilled 38% fat heavy cream sweetened with 10% powdered sugar.",
      ingredients: {
        flour: {
          name: "High-protein Manitoba or strong bread flour (W320)",
          basePerPerson: 75,
          unit: "g"
        },
        milk: {
          name: "Fresh whole milk lukewarm",
          basePerPerson: 35,
          unit: "ml"
        },
        sugar: {
          name: "Granulated white sugar for dough",
          basePerPerson: 15,
          unit: "g"
        },
        yeast: {
          name: "Fresh active baker's yeast",
          basePerPerson: 3,
          unit: "g"
        },
        oil: {
          name: "Light extra virgin olive oil or melted butter",
          basePerPerson: 12,
          unit: "ml"
        },
        cream: {
          name: "Fresh heavy whipping cream (minimum 35% fat) chilled",
          basePerPerson: 80,
          unit: "ml"
        },
        zest: {
          name: "Finely grated fresh orange zest and bourbon vanilla",
          basePerPerson: 1,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Gluten Network Development & Kneading",
          desc: "Dissolve yeast in lukewarm milk with a teaspoon of sugar. Combine with flour, knead vigorously while adding sugar, oil, citrus zests, and vanilla until dough is smooth, supple, and elastic.",
          timerMin: 15
        },
        {
          title: "First Bulk Proofing at 27°C",
          desc: "Place dough in a covered bowl in a warm draft-free spot (26-28°C / 79-82°F) for about 90 minutes until doubled in bulk.",
          timerMin: 90
        },
        {
          title: "Shaping Oval Buns & Second Proof",
          desc: "Divide dough into equal oval football-shaped buns. Arrange on a parchment-lined baking sheet, cover loosely, and let rise for 60 minutes until light and puffy.",
          timerMin: 60
        },
        {
          title: "Baking at 180°C and Sugar Syrup Glaze",
          desc: "Bake at 180°C (350°F) for 12-14 minutes until glossy golden brown. Brush immediately upon removal from oven with warm simple sugar syrup for an authentic Roman bakery shine.",
          timerMin: 14
        },
        {
          title: "Split Cut & Smooth Spatula Cream Filling",
          desc: "Cool completely to room temperature. Slice each bun lengthwise down the top center without cutting all the way through. Whip chilled cream with powdered sugar to firm peaks and fill generously, smoothing flush with a flat pastry spatula.",
          timerMin: 5
        }
      ]
    }
  }
};

const deTranslations = {
  sosTroubleshooting: {
    troubleCurdleTitle: "Das Ei hat begonnen zu stocken (Rührei-Effekt)?",
    troubleCurdleSol: "Die Pfanne sofort von der Hitzequelle nehmen. Die Pasta in eine kalte Schüssel umfüllen, 1 Eiswürfel oder 2 EL kaltes Wasser zugeben und kräftig aufschlagen. Falls bereits Klümpchen sichtbar sind, 5 Sekunden mit dem Stabmixer und etwas Stärkewasser pürieren: Das Lecithin emulgiert erneut.",

    troubleClumpTitle: "Pecorino hat zähe, gummiartige Klumpen gebildet?",
    troubleClumpSol: "Das Kasein hat über 65°C Molke ausgestoßen. Pfanne von der Hitze nehmen, 2–3 EL lauwarmes stärkereiches Nudelwasser (55°C) zugeben und in einem Becher mit Stabmixer oder kleinem Schneebesen cremig schlagen, bevor alles unter die Pasta gehoben wird.",

    troubleGuancialeTitle: "Guanciale ist angebrannt oder zäh-gummig geblieben?",
    troubleGuancialeSol: "Wenn gummig: Hitze war zu hoch, das innere Fett konnte nicht ausschmelzen (benötigt 8–10 Min. bei milder Hitze). Wenn verbrannt: Schwärzungen aussortieren, um Bitterstoffe zu vermeiden, das saubere Fett abseihen und mit frisch geröstetem Pfeffer abrunden.",

    troubleSaltyTitle: "Das Gericht schmeckt übermäßig salzig?",
    troubleSaltySol: "Gereifter Pecorino Romano DOP enthält von Natur aus viel Salz. Goldene Regel: Nudelwasser nur halb so stark salzen (max. 5g/L). Soforthilfe beim fertigen Gericht: Mit ungesalzenem warmem Wasser strecken und frisch gerösteten schwarzen Pfeffer zugeben (Piperin mildert die Salzschärfe ab).",

    troubleAcidTitle: "Die Amatriciana-Tomatensauce ist zu sauer oder wässrig?",
    troubleAcidSol: "Handelsübliche Dosentomaten enthalten oft zugesetzte Zitronensäure. Eine winzige Prise Natron (sofortige chemische Säureneutralisation) oder 1 TL Guanciale-Fett einrühren und 2 Minuten bei lebhafter Flamme einkochen, um den natürlichen Fruchtzucker zu konzentrieren.",

    troubleCarciofiTitle: "Carciofi alla Giudìa sind zäh oder öffnen sich nicht zur Blütenform?",
    troubleCarciofiSol: "Vor dem zweiten Frittiergang bei 180°C die Artischocke am Stiel fassen und kopfüber sanft auf ein Schneidebrett klopfen, um die Blätter fächerförmig aufzuspreizen. Falls das Herz noch fest ist, das erste Frittierbad bei 140°C um 4 Minuten verlängern.",

    troubleSuppliTitle: "Supplì platzen auf oder Mozzarella läuft ins Frittieröl?",
    troubleSuppliSol: "Niemals lauwarmen Reis verwenden: mindestens 2 Stunden im Kühlschrank kühlen, damit die Stärke schnittfest abbindet. Mozzarella 1 Stunde abtropfen lassen. Stets DOPPELT panieren (verquirltes Ei + feines Paniermehl) und streng bei 175°C ausbacken.",

    troubleCodaTitle: "Coda alla Vaccinara nach zwei Stunden noch zäh?",
    troubleCodaSol: "Rinderkollagen benötigt mindestens 3,5 Stunden Hydrolyse bei 80–85°C. Niemals die Hitze erhöhen. Ein halbes Glas warme Brühe oder Wasser angießen, mit dem Deckel dicht verschließen und bei kleinster Flamme weiterschmoren, bis das Fleisch von selbst zerfällt.",

    troubleSaltimboccaTitle: "Saltimbocca sind trocken oder der Schinken ist ledrig-hart?",
    troubleSaltimboccaSol: "Das Kalbfleisch darf auf der bemehlten Seite keinesfalls länger als 60–80 Sekunden braten. Die Schinken-Salbei-Seite nur für 15–20 Sekunden kurz anbraten, da Wasserentzug den Schinken sonst zäh und versalzen macht.",

    troubleCreamTitle: "Maritozzo-Schlagsahne fällt zusammen oder gerinnt zu Butter?",
    troubleCreamSol: "Übersteigt die Sahne 10°C, brechen die Fettkügelchen auf. Eiskalte Sahne (3–4°C) verwenden und Schüssel sowie Schneebesen 15 Minuten ins Eisfach legen. Grießelt die Sahne bereits leicht, 2 EL flüssige eiskalte Sahne mit einem Spatel vorsichtig unterheben."
  },

  recipeTips: {
    carbonara: {
      easyTip: "💡 Easy Mode: 2 EL stärkereiches Nudelwasser abschöpfen und auf ca. 50°C abkühlen lassen, um Eigelb und Pecorino zu einer geschmeidigen Paste zu verrühren, bevor alles zur Pasta kommt. IMMER abseits der Hitzequelle emulgieren.",
      proTip: "🏆 Pro Chef: Ausschließlich frische Eigelbe aus Freilandhaltung verwenden, das Guanciale-Fett sanft unter 80°C ohne Bräunungsbitterkeit auslassen und die Wellen-Mantecatura („ad onda“) bei exakt 62–65°C ausführen, um die maximale Lecithin-Viskosität zu erzielen."
    },
    cacioepepe: {
      easyTip: "💡 Easy Mode: Den fein geriebenen Pecorino vorab in einer separaten Schüssel mit ca. 50°C lauwarmem Wasser mit dem Schneebesen zu einer homogenen Paste anrühren. Erst zur Pasta geben, wenn die Pfanne vollständig von der Kochstelle genommen wurde.",
      proTip: "🏆 Pro Chef: Maximale Stärkeextraktion durch energisches Risottieren der Pasta in der Pfanne in den letzten 3 Minuten. Dynamische Mantecatura bei 58°C: Die hohe Amylose-Konzentration muss Wasserstoffbrückenbindungen mit dem Kasein des Käses eingehen."
    },
    amatriciana: {
      easyTip: "💡 Easy Mode: Das Guanciale herausheben, sobald es goldbraun ist, und beiseitestellen. Die Tomaten im ausgelassenen Fett schmoren und das krosse Guanciale erst ganz zum Schluss auf dem fertigen Teller anrichten, damit es herrlich knusprig bleibt.",
      proTip: "🏆 Pro Chef: Den heißen Pfannenrand mit trockenem Weißwein ablöschen, um karamellisierte Röststoffe zu lösen. Handzerdrückte San-Marzano-Tomaten bei lebhafter Flamme kurz einkochen, um die frische Fruchtnote und Säurebalance perfekt zu bewahren."
    },
    gricia: {
      easyTip: "💡 Easy Mode: Immer nur schluckweise stärkereiches Nudelwasser zum ausgelassenen Guanciale-Fett geben. Den Pecorino niemals direkt auf den heißen Pfannenboden streuen, sondern durch Schwenken in der Luft cremig emulgieren.",
      proTip: "🏆 Pro Chef: Perfekte zweiphasige Emulsion aus edlem Schweinefett und Stärke. Im Mörser grob zerstoßenen schwarzen Pfeffer bei 150°C trocken anrösten, um die volle aromatische Piperin-Komplexität vor dem Risottieren freizusetzen."
    },
    saltimbocca: {
      easyTip: "💡 Easy Mode: Ausschließlich die Fleischunterseite bemehlen (niemals den Schinken). Bei mittlerer Hitze mit Deckel für 60 Sekunden garen: Das Kalbfleisch bleibt butterzart und saftig.",
      proTip: "🏆 Pro Chef: Mit Weißwein bei maximaler Hitze (160°C Pfannendeglazur) ablöschen. Den Schmorsud abseits der Flamme mit eiskalter Butter zu einer samtig glänzenden Beurre Monté aufschlagen."
    },
    coda: {
      easyTip: "💡 Easy Mode: Bei wenig Zeit den Schnellkochtopf für die ersten 45 Minuten nutzen, danach ohne Deckel bei milder Hitze sanft einköcheln lassen, bis die Sauce dickflüssig und dunkel wird.",
      proTip: "🏆 Pro Chef: Sanftes Schmoren bei 85°C für volle 4 Stunden, um das zähe Kollagen vollständig in schmelzende Gelatine zu hydrolysieren. Echter ungesüßter Bitterkakao und geröstete Pinienkerne in den letzten 15 Minuten sind Pflicht."
    },
    abbacchio: {
      easyTip: "💡 Easy Mode: Die Koteletts 15 Minuten in etwas Olivenöl, Rosmarin und angedrücktem Knoblauch marinieren. Die Grillpfanne sehr gut vorheizen, damit das zarte Fleisch nicht ansetzt.",
      proTip: "🏆 Pro Chef: Extrem heiße Kontakthitze (230°C) für exakt 90 Sekunden pro Seite. Erst unmittelbar nach dem Garen mit Meersalzflocken würzen, um den osmotischen Saftverlust zu verhindern."
    },
    carciofigiudia: {
      easyTip: "💡 Easy Mode: Gründlich putzen und die ersten 4–5 Lagen der harten Außenblätter großzügig entfernen. Bis zum Frittieren in Zitronenwasser legen, um unschöne Oxidation und Nachdunkeln zu verhindern.",
      proTip: "🏆 Pro Chef: Doppeltes Frittierbad: zuerst bei 140°C, um das Herz butterweich zu garen, dann kopfüber zur Rose aufklopfen und ein zweites Mal bei 180°C für 90 Sekunden ausbacken, damit die Blätter wie Chips kristallisieren."
    },
    carciofiromana: {
      easyTip: "💡 Easy Mode: Die Artischocken kopfüber eng in einen schmalen Topf mit hohem Rand setzen, bis zur Hälfte mit Wasser und Olivenöl bedecken und zugedeckt im heißen Dampf gleichmäßig weichdünsten.",
      proTip: "🏆 Pro Chef: Traditionelle Füllung aus wilder römischer Nepetella-Minze (Calamintha nepeta), Knoblauch und feinen Semmelbröseln. Hermetisches Schmoren unter einer Backpapierhaube bei 92°C für butterzarte Blätter."
    },
    suppli: {
      easyTip: "💡 Easy Mode: Den Ragù-Reis am Vorabend zubereiten oder mindestens 2 Stunden kühlen: Durchgekühlter, fester Reis lässt sich kinderleicht ohne Auseinanderfallen zu formschönen Kroketten rollen.",
      proTip: "🏆 Pro Chef: Mehlfreie doppelte Panade mit feinstem Paniermehl. Streng bei 175°C tief frittieren: Ergibt einen auf 60°C geschmolzenen, perfekten Faden-Käsekern und eine millimeterdünne, extrem krosse Kruste."
    },
    maritozzo: {
      easyTip: "💡 Easy Mode: Schüssel und Schneebesen 15 Minuten vor dem Aufschlagen ins Gefrierfach legen: Die Sahne schlägt doppelt so schnell auf und bleibt stundenlang standfest und cremig.",
      proTip: "🏆 Pro Chef: Römische Hefebrioche mit kontrollierter Teiggare bei 26°C, heißer Zuckersirup-Glasur für Hochglanz und frischer Schlagsahne (38 % Fettgehalt) verfeinert mit 10 % feinstem Puderzucker."
    }
  },

  recipes: {
    saltimbocca: {
      category: "secondi",
      name: "Saltimbocca alla Romana",
      shortDesc: "Zarte Kalbsschnitzel mit luftgetrocknetem Prosciutto und frischem Salbei, in Butter angebraten und mit trockenem Weißwein abgelöscht.",
      origin: "Rom (Rione Regola, Ende des 19. Jahrhunderts)",
      difficulty: "Leicht (Express-Garen in 90 Sekunden)",
      history: "1891 von Gourmetlegende Pellegrino Artusi nach einem Besuch der historischen römischen Trattoria „Le Venete“ gerühmt: Ein kulinarisches Meisterwerk, das so köstlich ist, dass es sprichwörtlich „in den Mund springt“.",
      scienceTip: "Blitzschnelle Maillard-Reaktion bei 160°C ausschließlich auf der bemehlten Fleischunterseite. Abseits der Herdplatte emulgiert der Bratensatz mit eiskalter Butter und Weißwein (Beurre Monté) zu einer seidigen Glanzsauce.",
      easyTip: "💡 Easy Mode: Ausschließlich die Fleischunterseite bemehlen (niemals den Schinken). Bei mittlerer Hitze mit Deckel für 60 Sekunden garen: Das Kalbfleisch bleibt butterzart und saftig.",
      proTip: "🏆 Pro Chef: Mit Weißwein bei maximaler Hitze (160°C Pfannendeglazur) ablöschen. Den Schmorsud abseits der Flamme mit eiskalter Butter zu einer samtig glänzenden Beurre Monté aufschlagen.",
      ingredients: {
        veal: {
          name: "Hauchdünne Kalbsschnitzel aus der Oberschale (ca. 3 mm)",
          basePerPerson: 160,
          unit: "g"
        },
        prosciutto: {
          name: "Milder, luftgetrockneter Prosciutto Crudo von bester Qualität",
          basePerPerson: 50,
          unit: "g"
        },
        sage: {
          name: "Frische ganze Salbeiblätter",
          basePerPerson: 4,
          unit: "pz"
        },
        butter: {
          name: "Gute Butter (zum Anbraten und Aufschlagen der Sauce)",
          basePerPerson: 25,
          unit: "g"
        },
        wine: {
          name: "Trockener italienischer Weißwein (Frascati Superiore DOC)",
          basePerPerson: 30,
          unit: "ml"
        },
        flour: {
          name: "Feines Weizenmehl (ausschließlich für die Fleischseite)",
          basePerPerson: 10,
          unit: "g"
        },
        pepper: {
          name: "Frisch gemahlener schwarzer Pfeffer (Schinken nicht salzen)",
          basePerPerson: 1,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Plattieren und Fixieren",
          desc: "Die Kalbsschnitzel zwischen zwei Bögen Backpapier hauchdünn (ca. 3 mm) klopfen. Auf jedes Schnitzel eine Scheibe Prosciutto und ein Salbeiblatt legen. Mit einem hölzernen Zahnstocher wie mit einer Nadel flach feststecken.",
          timerMin: 5
        },
        {
          title: "Präzises Bemehlen der Fleischseite",
          desc: "Ausschließlich die Fleischunterseite ganz zart mit Mehl bestäuben und überschüssiges Mehl vorsichtig abklopfen. Schinken und Salbei dürfen niemals mit Mehl in Kontakt kommen.",
          timerMin: 2
        },
        {
          title: "Express-Braten bei starker Hitze",
          desc: "Zwei Drittel der Butter in einer breiten Pfanne aufschäumen lassen. Die Saltimbocca mit der bemehlten Seite nach unten hineinlegen. 60–80 Sekunden unbewegt scharf braten, bis eine feine Kruste entsteht.",
          timerMin: 2
        },
        {
          title: "Ablöschen und Beurre Monté Glanzsauce",
          desc: "Die Saltimbocca für nur 15 Sekunden auf die Schinkenseite wenden. Mit trockenem Weißwein ablöschen und den Alkohol verdampfen lassen. Das Fleisch herausnehmen und warmhalten. Die Pfanne von der Hitze nehmen, die restliche kalte Butter kräftig einrühren und die seidige Sauce über das Fleisch löffeln.",
          timerMin: 1
        }
      ]
    },

    coda: {
      category: "secondi",
      name: "Coda alla Vaccinara",
      shortDesc: "Ochsenschwanz, 4 Stunden butterzart geschmort mit Staudensellerie, San-Marzano-Tomaten, Sultaninen, Pinienkernen und einem Hauch Bitterkakao.",
      origin: "Rom (Rione Testaccio / Quinto Quarto)",
      difficulty: "Mittel (Langes Schmoren bei niedriger Temperatur)",
      history: "Die unangefochtene Königin der römischen Schlachtviertel-Küche (Quinto Quarto), entstanden in den Wirtshäusern rund um den alten Schlachthof von Testaccio, wo die Gerber („Vaccinari“) die Ochsenschwänze mit reichlich Sellerie zartkochten.",
      scienceTip: "Das zähe Kollagen des Ochsenschwanzes hydrolysiert nur zwischen 80°C und 85°C bei kaum wahrnehmbarem Köcheln („pipare“) vollständig zu schmelzender Gelatine. Ungesüßter Kakao und Sultaninen schaffen die typische Renaissance-Agrodolce-Note, die den Gaumen erfrischt.",
      easyTip: "💡 Easy Mode: Bei wenig Zeit den Schnellkochtopf für die ersten 45 Minuten nutzen, danach ohne Deckel bei milder Hitze sanft einköcheln lassen, bis die Sauce dickflüssig und dunkel wird.",
      proTip: "🏆 Pro Chef: Sanftes Schmoren bei 85°C für volle 4 Stunden, um das zähe Kollagen vollständig in schmelzende Gelatine zu hydrolysieren. Echter ungesüßter Bitterkakao und geröstete Pinienkerne in den letzten 15 Minuten sind Pflicht.",
      ingredients: {
        tail: {
          name: "Ochsenschwanz, in gleichmäßige Wirbelstücke geschnitten",
          basePerPerson: 350,
          unit: "g"
        },
        celery: {
          name: "Zarte, knackige weiße Staudensellerie-Rippen",
          basePerPerson: 100,
          unit: "g"
        },
        pomodoro: {
          name: "Geschälte San-Marzano-Tomaten DOP, von Hand zerdrückt",
          basePerPerson: 200,
          unit: "g"
        },
        wine: {
          name: "Kräftiger Rotwein (z. B. Cesanese del Piglio DOC)",
          basePerPerson: 60,
          unit: "ml"
        },
        lard: {
          name: "Fein gehackter Guanciale mit Karotte und Zwiebel (Battuto)",
          basePerPerson: 25,
          unit: "g"
        },
        cocoa: {
          name: "Reines ungesüßtes Kakaopulver",
          basePerPerson: 2,
          unit: "g"
        },
        pinenuts: {
          name: "Geröstete Pinienkerne und eingeweichte Sultaninen",
          basePerPerson: 10,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Kräftiges Anbraten der Fleischstücke",
          desc: "In einem schweren Schmortopf das Guanciale-Battuto sanft auslassen. Die Ochsenschwanzstücke hineingeben und bei lebhafter Hitze ca. 10 Minuten rundherum scharf anbraten, bis sie goldbraun karamellisiert sind.",
          timerMin: 10
        },
        {
          title: "Ablöschen und Tomatenzugabe",
          desc: "Mit kräftigem Rotwein ablöschen und den Alkohol vollständig einkochen lassen. Die handzerdrückten San-Marzano-Tomaten, Salz und frisch gemahlenen Pfeffer einrühren und sanft aufkochen.",
          timerMin: 10
        },
        {
          title: "Langsame Kollagen-Hydrolyse",
          desc: "Den Topf mit einem schweren Deckel verschließen und die Hitze auf die kleinste Stufe drosseln (80–85°C). Etwa 3,5 Stunden ganz leise simmern lassen („pipare“), bis das Fleisch fast vom Knochen gleitet.",
          timerMin: 180
        },
        {
          title: "Das Meisterfinale: Sellerie und Kakao",
          desc: "Die Selleriestücke 3 Minuten in Salzwasser blanchieren. Mit Pinienkernen, Sultaninen und dem in etwas heißem Sud aufgelösten Kakao in den Topf geben. Weitere 20 Minuten bei milder Hitze ziehen lassen.",
          timerMin: 20
        }
      ]
    },

    abbacchio: {
      category: "secondi",
      name: "Abbacchio alla Scottadito",
      shortDesc: "Zarte Milchlammkoteletts, mariniert mit Rosmarin, Knoblauch und feinem Schmalz, bei starker Hitze gegrillt und glühend heiß mit den Fingern gegessen.",
      origin: "Rom und die römische Campagna",
      difficulty: "Leicht (Sehr schnelles Grillen bei hoher Temperatur)",
      history: "So benannt („Scottadito“ = Fingerverbrenner), weil die römische Tradition gebietet, die Koteletts direkt vom glühenden Rost noch dampfend mit den Fingern zu greifen und ohne Zögern zu verspeisen.",
      scienceTip: "Das butterzarte Fleisch des Milchlamms verlangt extreme Kontakthitze (220–250°C), um das Äußere innerhalb von 2 Minuten pro Seite zu karamellisieren, während der Kern bei 56–58°C saftig zartrosa bleibt.",
      easyTip: "💡 Easy Mode: Die Koteletts 15 Minuten in etwas Olivenöl, Rosmarin und angedrücktem Knoblauch marinieren. Die Grillpfanne sehr gut vorheizen, damit das zarte Fleisch nicht ansetzt.",
      proTip: "🏆 Pro Chef: Extrem heiße Kontakthitze (230°C) für exakt 90 Sekunden pro Seite. Erst unmittelbar nach dem Garen mit Meersalzflocken würzen, um den osmotischen Saftverlust zu verhindern.",
      ingredients: {
        chops: {
          name: "Frische Milchlammkoteletts (Abbacchio romano)",
          basePerPerson: 4,
          unit: "pz"
        },
        rosemary: {
          name: "Frischer Rosmarin und wilder Thymian, fein gehackt",
          basePerPerson: 3,
          unit: "g"
        },
        garlic: {
          name: "Frische Knoblauchzehen, leicht angedrückt in der Schale",
          basePerPerson: 1,
          unit: "pz"
        },
        oil: {
          name: "Natives Olivenöl extra oder feines Schweineschmalz (Strutto)",
          basePerPerson: 15,
          unit: "ml"
        },
        lemon: {
          name: "Frische Zitronenspalten zum Servieren",
          basePerPerson: 1,
          unit: "pz"
        },
        salt: {
          name: "Grobes Meersalz und frisch geschroteter Pfeffer",
          basePerPerson: 3,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Aromatische Kräutermarinade",
          desc: "Die Koteletts mit Olivenöl oder flüssigem Schmalz, gehacktem Rosmarin, angedrücktem Knoblauch und Pfeffer einreiben. 15–20 Minuten bei Raumtemperatur marinieren.",
          timerMin: 15
        },
        {
          title: "Maximales Aufheizen der Grillfläche",
          desc: "Eine schwere gusseiserne Grillpfanne oder den Holzkohlegrill auf 230–250°C vorheizen, bis die Fläche leicht raucht. Nur maximale Kontakthitze versiegelt das zarte Fleisch sofort.",
          timerMin: 5
        },
        {
          title: "Scharfes Grillen (2 Minuten pro Seite)",
          desc: "Die Koteletts mit Abstand auflegen. Genau 2 Minuten unbewegt braten, wenden und weitere 2 Minuten garen. Erst beim Wenden großzügig mit Meersalz bestreuen.",
          timerMin: 4
        },
        {
          title: "Glühend heißer Scottadito-Genuss",
          desc: "Sofort auf einer angewärmten Platte mit frischen Zitronenspalten anrichten. Nach echter römischer Art direkt mit den Fingern am Knochen greifen und glühend heiß genießen!",
          timerMin: 1
        }
      ]
    },

    carciofigiudia: {
      category: "contorni",
      name: "Carciofi alla Giudia",
      shortDesc: "Das jahrhundertealte Meisterwerk des jüdischen Ghettos in Rom: Rundartischocken, doppelt frittiert zu krossen, goldenen Rosen.",
      origin: "Rom (Jüdisches Ghetto, 16. Jahrhundert)",
      difficulty: "Schwer (Präzises Spiralschälen und doppelte Temperaturführung)",
      history: "Traditionell in den jüdisch-römischen Küchen zum Fastenbrechen an Jom Kippur serviert: Ganze Artischocken verwandeln sich in spektakulär blühende, goldbraune Knusper-Rosen.",
      scienceTip: "DIE WISSENSCHAFTLICHE DOPPELFRITTIERUNG: Das erste Bad bei 140°C gart das Herz und den Stiel butterweich. Das zweite Bad bei 175–180°C mit einem Tropfen kaltem Wasser lässt Feuchtigkeit schlagartig verdampfen und macht die Blätter kross wie Chips.",
      easyTip: "💡 Easy Mode: Gründlich putzen und die ersten 4–5 Lagen der harten Außenblätter großzügig entfernen. Bis zum Frittieren in Zitronenwasser legen, um unschöne Oxidation und Nachdunkeln zu verhindern.",
      proTip: "🏆 Pro Chef: Doppeltes Frittierbad: zuerst bei 140°C, um das Herz butterweich zu garen, dann kopfüber zur Rose aufklopfen und ein zweites Mal bei 180°C für 90 Sekunden ausbacken, damit die Blätter wie Chips kristallisieren.",
      ingredients: {
        artichoke: {
          name: "Römische Rundartischocken (Mammole Romanesche g.g.A. / Cimaroli)",
          basePerPerson: 1,
          unit: "pz"
        },
        oil: {
          name: "Natives Olivenöl extra zum schwimmenden Ausbacken",
          basePerPerson: 250,
          unit: "ml"
        },
        lemon: {
          name: "Frische Zitrone zum Säuern des Rüstwassers",
          basePerPerson: 0.5,
          unit: "pz"
        },
        salt: {
          name: "Feines Meersalz und frisch gemahlener Pfeffer für das Herz",
          basePerPerson: 2,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Spiralförmiges Zurechtschneiden",
          desc: "Die zähen Außenblätter mit einem kleinen Tourniermesser spiralförmig wie eine Apfelschale abschälen. Den Stiel schälen und die Blattspitzen kuppelförmig kappen.",
          timerMin: 10
        },
        {
          title: "Erster Frittiergang bei 140°C (Herz zartgaren)",
          desc: "Reichlich Olivenöl auf 140°C erhitzen. Die Artischocken kopfüber für 10–12 Minuten eintauchen, bis eine Gabel mühelos in den Stielansatz gleitet. Herausnehmen und 5 Minuten abkühlen lassen.",
          timerMin: 12
        },
        {
          title: "Aufblühen zur Rose und Würzen",
          desc: "Die Artischocke kopfüber sanft auf ein Schneidebrett klopfen, damit sich die Blütenblätter fächerförmig nach außen öffnen. Das Innere der Blüte mit Salz und Pfeffer würzen.",
          timerMin: 3
        },
        {
          title: "Zweiter Frittiergang bei 180°C (Knusper-Blätter)",
          desc: "Das Öl auf 175–180°C erhitzen. Einen Tropfen kaltes Wasser auf die Blätter spritzen und kopfüber eintauchen, dabei mit einer Zange 2 Minuten leicht andrücken. Die Blätter werden knusprig wie Kartoffelchips.",
          timerMin: 2
        }
      ]
    },

    carciofiromana: {
      category: "contorni",
      name: "Carciofi alla Romana",
      shortDesc: "Römische Rundartischocken gefüllt mit wilder römischer Minze, Knoblauch und Petersilie, kopfüber im geschlossenen Topf butterzart geschmort.",
      origin: "Rom und die römische Campagna",
      difficulty: "Mittel (Sorgfältiges Putzen und dichtes Dampfschmoren)",
      history: "Die unverzichtbare Frühlingsbeilage der römischen Sonntagstradition. Die wilde Mentuccia-Minze, die auf den antiken römischen Ruinen wächst, verleiht ihr unnachahmliches Kräuteraroma.",
      scienceTip: "Kopfüber bei 90–95°C mit feuchtem Backpapier und schwerem Deckel hermetisch gegart, dünsten die Artischocken im aromatischen Dampf ihrer eigenen Öl-Wein-Emulsion, wodurch Polyphenole bewahrt werden und die Blätter hellgrün und samtig bleiben.",
      easyTip: "💡 Easy Mode: Die Artischocken kopfüber eng in einen schmalen Topf mit hohem Rand setzen, bis zur Hälfte mit Wasser und Olivenöl bedecken und zugedeckt im heißen Dampf gleichmäßig weichdünsten.",
      proTip: "🏆 Pro Chef: Traditionelle Füllung aus wilder römischer Nepetella-Minze (Calamintha nepeta), Knoblauch und feinen Semmelbröseln. Hermetisches Schmoren unter einer Backpapierhaube bei 92°C für butterzarte Blätter.",
      ingredients: {
        artichoke: {
          name: "Römische Rundartischocken mit langem Stiel (Mammole)",
          basePerPerson: 1,
          unit: "pz"
        },
        mint: {
          name: "Frische wilde römische Mentuccia-Minze (Nepetella)",
          basePerPerson: 3,
          unit: "g"
        },
        parsley: {
          name: "Frische glatte italienische Petersilie, fein gehackt",
          basePerPerson: 4,
          unit: "g"
        },
        garlic: {
          name: "Frische Knoblauchzehen, sehr fein gehackt",
          basePerPerson: 0.5,
          unit: "pz"
        },
        oil: {
          name: "Reichlich hochwertiges natives Olivenöl extra",
          basePerPerson: 35,
          unit: "ml"
        },
        wine: {
          name: "Trockener Weißwein oder Wasser für den Schmorsud",
          basePerPerson: 25,
          unit: "ml"
        }
      },
      steps: [
        {
          title: "Putzen und Öffnen des Blütenherzens",
          desc: "Harte Außenblätter entfernen, den Stiel schälen und die Blattspitzen kappen. Die Blätter vorsichtig mit den Fingern auseinanderdrücken, um Raum für die Kräuterfüllung zu schaffen.",
          timerMin: 10
        },
        {
          title: "Füllen mit Minze-Knoblauch-Kräutern",
          desc: "Mentuccia-Minze, Petersilie, Knoblauch, Salz und Pfeffer fein hacken. Die Mischung tief und fest in das geöffnete Herz jeder Artischocke drücken.",
          timerMin: 5
        },
        {
          title: "Kopfüber eng im Schmortopf anordnen",
          desc: "Die Artischocken kopfüber eng aneinanderstehend in einen Topf setzen. Großzügig mit feinem Olivenöl, Weißwein und Wasser bis zur halben Höhe der Artischockenköpfe angießen.",
          timerMin: 5
        },
        {
          title: "Dichtes Dampfschmoren bei 90°C",
          desc: "Ein angefeuchtetes Backpapier direkt auflegen und den Topf mit einem schweren Deckel fest verschließen. Bei milder Hitze ca. 25–30 Minuten sanft schmoren, bis die Stiele butterzart sind.",
          timerMin: 30
        }
      ]
    },

    suppli: {
      category: "contorni",
      name: "Supplì al Telefono",
      shortDesc: "Die legendäre römische Reiskrokette mit kräftigem Rindfleisch-Ragù, feiner Knusperpanade und flüssig-ziehendem Mozzarella-Kern.",
      origin: "Rom (Trastevere, Ende des 19. Jahrhunderts)",
      difficulty: "Mittel (Formgebung und Frittier-Temperaturführung)",
      history: "„Al Telefono“ genannt, weil beim Auseinanderbrechen der heißen Krokette der geschmolzene Mozzarella-Kern einen endlosen, elastischen Käsefaden zieht – genau wie das Spiralkabel der alten Telefone.",
      scienceTip: "Der bissfest gegarte Reis muss auf <15°C abkühlen, damit die Amylose-Stärke retrogradiert und die Reiskörner ohne Ei-Zusatz bindet. Das Frittieren bei 170–175°C erzeugt eine sofortige Knusperbarriere, die den flüssigen Mozzarellakern hermetisch versiegelt.",
      easyTip: "💡 Easy Mode: Den Ragù-Reis am Vorabend zubereiten oder mindestens 2 Stunden kühlen: Durchgekühlter, fester Reis lässt sich kinderleicht ohne Auseinanderfallen zu formschönen Kroketten rollen.",
      proTip: "🏆 Pro Chef: Mehlfreie doppelte Panade mit feinstem Paniermehl. Streng bei 175°C tief frittieren: Ergibt einen auf 60°C geschmolzenen, perfekten Faden-Käsekern und eine millimeterdünne, extrem krosse Kruste.",
      ingredients: {
        rice: {
          name: "Carnaroli- oder Arborio-Risottoreis",
          basePerPerson: 80,
          unit: "g"
        },
        ragu: {
          name: "Kräftig eingekochtes Rindfleisch-Ragù mit Tomate",
          basePerPerson: 70,
          unit: "g"
        },
        mozzarella: {
          name: "Gut abgetropfter Fior-di-Latte-Mozzarella in dicken Streifen",
          basePerPerson: 30,
          unit: "g"
        },
        pecorino: {
          name: "Geriebener Pecorino Romano DOP und Parmigiano",
          basePerPerson: 15,
          unit: "g"
        },
        eggs: {
          name: "Frische Eier für die Panierstraße",
          basePerPerson: 0.5,
          unit: "pz"
        },
        breadcrumbs: {
          name: "Feines Paniermehl für eine ultradünne Kruste",
          basePerPerson: 35,
          unit: "g"
        },
        oil: {
          name: "Frittieröl mit hohem Rauchpunkt (Erdnuss- oder Olivenöl)",
          basePerPerson: 200,
          unit: "ml"
        }
      },
      steps: [
        {
          title: "Zubereitung des Ragù-Risottos",
          desc: "Den Reis direkt im mit etwas Brühe gestreckten Ragù al dente garen. Vom Herd nehmen, mit geriebenem Pecorino cremig binden und flach auf einem Blech ausstreichen.",
          timerMin: 15
        },
        {
          title: "Abkühlen und Stärke-Retrogradation",
          desc: "Den Reis mindestens 30 Minuten bei Raumtemperatur abkühlen lassen und danach im Kühlschrank durchkühlen, damit die Stärke geliert und den Reis schnittfest bindet.",
          timerMin: 30
        },
        {
          title: "Formen mit Mozzarella-Kern",
          desc: "Eine Portion kalten Reis in die Handfläche nehmen, eine Stange Mozzarella in die Mitte drücken und den Reis nahtlos zu einer festen, ovalen Krokette verschließen.",
          timerMin: 10
        },
        {
          title: "Knusprige Panade und Frittieren bei 175°C",
          desc: "Die Supplì erst durch verquirltes Ei und dann durch feines Paniermehl rollen. Im 175°C heißen Öl 3–4 Minuten goldbraun ausbacken. Glühend heiß servieren für den perfekten Käsefaden!",
          timerMin: 4
        }
      ]
    },

    maritozzo: {
      category: "dolci",
      name: "Maritozzo con la Panna",
      shortDesc: "Das legendäre luftig-weiche römische Hefegebäck mit Zitrus- und Vanillearoma, der Länge nach aufgeschnitten und mit frischer Schlagsahne gefüllt.",
      origin: "Rom (Antike römische Wurzeln und Renaissance-Brauchtum)",
      difficulty: "Mittel (Kontrollierte biologische Teiggare)",
      history: "Einst die einzige süße Versuchung, die während der Fastenzeit erlaubt war. In der Renaissance schenkte der zukünftige Bräutigam („Maritozzo“) seiner Verlobten dieses Gebäck – oft mit einem in der Sahne versteckten Verlobungsring.",
      scienceTip: "Das mit starkem Mehl (W 300–330) entwickelte Klebergerüst schließt das bei der Gare (26–28°C) entstehende CO2 perfekt ein. Das Backen bei 180°C bräunt die Kruste per Maillard-Reaktion, während die Krume wolkenweich bleibt.",
      easyTip: "💡 Easy Mode: Schüssel und Schneebesen 15 Minuten vor dem Aufschlagen ins Gefrierfach legen: Die Sahne schlägt doppelt so schnell auf und bleibt stundenlang standfest und cremig.",
      proTip: "🏆 Pro Chef: Römische Hefebrioche mit kontrollierter Teiggare bei 26°C, heißer Zuckersirup-Glasur für Hochglanz und frischer Schlagsahne (38 % Fettgehalt) verfeinert mit 10 % feinstem Puderzucker.",
      ingredients: {
        flour: {
          name: "Starkes Weizenmehl Manitoba (W320) für Hefegebäck",
          basePerPerson: 75,
          unit: "g"
        },
        milk: {
          name: "Frische lauwarme Vollmilch",
          basePerPerson: 35,
          unit: "ml"
        },
        sugar: {
          name: "Feiner Kristallzucker für den Teig",
          basePerPerson: 15,
          unit: "g"
        },
        yeast: {
          name: "Frische Bäckerhefe",
          basePerPerson: 3,
          unit: "g"
        },
        oil: {
          name: "Mildes natives Olivenöl extra oder geschmolzene Butter",
          basePerPerson: 12,
          unit: "ml"
        },
        cream: {
          name: "Frische gekühlte Schlagsahne (mind. 35 % Fett)",
          basePerPerson: 80,
          unit: "ml"
        },
        zest: {
          name: "Fein abgeriebene Bio-Orangenschale und Bourbon-Vanille",
          basePerPerson: 1,
          unit: "g"
        }
      },
      steps: [
        {
          title: "Kneten des Teigs und Glutenentwicklung",
          desc: "Die Hefe mit 1 TL Zucker in lauwarmer Milch auflösen. Zum Mehl geben und kräftig kneten, dabei Zucker, Öl, Zitrusschalen und Vanille einarbeiten, bis ein elastischer Teig entsteht.",
          timerMin: 15
        },
        {
          title: "Erste Teiggare bei ca. 27°C",
          desc: "Den Teig in einer abgedeckten Schüssel an einem warmen, zugluftfreien Ort (26–28°C) für ca. 90 Minuten ruhen lassen, bis sich das Volumen verdoppelt hat.",
          timerMin: 90
        },
        {
          title: "Formen der ovalen Teiglinge und Stückgare",
          desc: "Den Teig in gleichmäßige, längliche ovale Brötchen teilen. Auf ein mit Backpapier belegtes Blech setzen und abgedeckt weitere 60 Minuten aufgehen lassen.",
          timerMin: 60
        },
        {
          title: "Backen bei 180°C und Zuckersirup-Glanz",
          desc: "Bei 180°C für 12–14 Minuten backen, bis die Maritozzi goldbraun glänzen. Sofort nach dem Ofen noch heiß mit warmem Zuckersirup einpinseln.",
          timerMin: 14
        },
        {
          title: "Einschneiden und Glattstreichen der Sahne",
          desc: "Vollständig auskühlen lassen. Den Maritozzo der Länge nach mittig einschneiden (nicht durchschneiden). Die kalte Sahne mit Puderzucker steif schlagen, üppig einfüllen und mit einer Palette glatt abziehen.",
          timerMin: 5
        }
      ]
    }
  }
};

// Also copy the 10 SOS keys directly into the top level for direct merge into dict.en and dict.de
const enMerged = {
  ...enTranslations.sosTroubleshooting,
  recipeTips: enTranslations.recipeTips,
  recipes: enTranslations.recipes
};

const deMerged = {
  ...deTranslations.sosTroubleshooting,
  recipeTips: deTranslations.recipeTips,
  recipes: deTranslations.recipes
};

// Write target_en.json
fs.writeFileSync('target_en.json', JSON.stringify(enMerged, null, 2), 'utf8');
console.log('Successfully wrote target_en.json');

// Write target_de.json
fs.writeFileSync('target_de.json', JSON.stringify(deMerged, null, 2), 'utf8');
console.log('Successfully wrote target_de.json');

// Write target_germanic.json
const germanic = {
  en: enMerged,
  de: deMerged
};
fs.writeFileSync('target_germanic.json', JSON.stringify(germanic, null, 2), 'utf8');
console.log('Successfully wrote target_germanic.json');

// Quality check:
console.log('--- VALIDATION REPORT ---');
['en', 'de'].forEach(lang => {
  const data = germanic[lang];
  console.log(`Checking [${lang}]...`);
  const sosKeys = Object.keys(data).filter(k => k.startsWith('trouble'));
  console.log(`  SOS troubleshooting keys count: ${sosKeys.length} / 20`);
  const tipKeys = Object.keys(data.recipeTips);
  console.log(`  recipeTips count: ${tipKeys.length} / 11`);
  const recKeys = Object.keys(data.recipes);
  console.log(`  recipes count: ${recKeys.length} / 7`);
  
  recKeys.forEach(r => {
    const rec = data.recipes[r];
    if (!rec.easyTip || !rec.proTip) {
      console.error(`  ERROR: ${r} missing easyTip or proTip in ${lang}`);
    }
    if (!rec.steps || rec.steps.length === 0) {
      console.error(`  ERROR: ${r} missing steps in ${lang}`);
    }
    if (!rec.ingredients || Object.keys(rec.ingredients).length === 0) {
      console.error(`  ERROR: ${r} missing ingredients in ${lang}`);
    }
  });
});
console.log('All checks completed successfully.');
