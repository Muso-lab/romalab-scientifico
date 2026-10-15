# -*- coding: utf-8 -*-
"""
Builder script to generate target_romance.json containing authentic, professional
culinary translations for Spanish (es), French (fr), and Portuguese (pt) for:
1) The 7 Roman recipes (saltimbocca, coda, abbacchio, carciofigiudia, carciofiromana, suppli, maritozzo)
2) The 11 recipeTips (carbonara, cacioepepe, amatriciana, gricia, saltimbocca, coda, abbacchio, carciofigiudia, carciofiromana, suppli, maritozzo)
3) The 10 SOS troubleshooting scenarios
"""

import json
import os

target_romance = {
    "es": {
        "sosTroubleshooting": {
            "troubleCurdleTitle": "¿El huevo ha empezado a cuajar (efecto tortilla)?",
            "troubleCurdleSol": "Retira de inmediato la sartén de la fuente de calor. Transfiere la pasta a un bol frío, añade 1 cubito de hielo o 2 cucharadas de agua fría y bate enérgicamente. Si ya se aprecian grumos, tritura 5 segundos con la batidora de mano junto con una cucharada de agua con almidón: la lecitina se reemulsionará al instante.",
            "troubleClumpTitle": "¿El pecorino ha formado grumos gomosos?",
            "troubleClumpSol": "La caseína supera los 65°C y expulsa el suero. Aparta la sartén del fuego, añade 2-3 cucharadas de agua de cocción tibia (55°C) rica en almidón y bate rápidamente con unas varillas o batidora en un vaso aparte antes de reintegrarla a la pasta.",
            "troubleGuancialeTitle": "¿El guanciale se ha quemado o ha quedado gomoso?",
            "troubleGuancialeSol": "Si quedó gomoso: fuego demasiado vivo, la grasa interna no fundió (se requieren 8-10 min a fuego suave). Si se quemó: retira los trozos ennegrecidos para evitar el amargor, cuela la grasa limpia y añade pimienta recién tostada para equilibrar los aromas.",
            "troubleSaltyTitle": "¿El plato ha quedado excesivamente salado?",
            "troubleSaltySol": "El Pecorino Romano DOP curado contiene mucha sal natural. Regla de oro: reduce a la mitad la sal en el agua de la pasta (máx. 5 g/l). Para remediarlo en el plato terminado: alarga con agua de cocción sin sal y añade pimienta negra tostada (la piperina disfraza la salinidad aguda).",
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
        "recipeTips": {
            "carbonara": {
                "easyTip": "💡 Modo Fácil: Reserva 2 cucharadas de agua de cocción y déjala enfriar a 50°C para atemperar las yemas y el pecorino antes de incorporar a la pasta. Manteca SIEMPRE fuera del fuego.",
                "proTip": "🏆 Chef Pro: Usa solo yemas frescas de gallinas camperas, grasa de guanciale fundida a 80°C sin quemar y mantecatura en onda entre 62°C y 65°C para maximizar la viscosidad de la lecitina."
            },
            "cacioepepe": {
                "easyTip": "💡 Modo Fácil: Prepara una crema de pecorino con agua tibia a 50°C en un bol aparte batiendo con varillas. Incorpórala a la pasta únicamente cuando la sartén esté retirada del fuego.",
                "proTip": "🏆 Chef Pro: Extracción de almidón mediante risottatura intensa los últimos 3 minutos. Emulsión dinámica a 58°C: la concentración de amilosa debe crear puentes de hidrógeno con la caseína."
            },
            "amatriciana": {
                "easyTip": "💡 Modo Fácil: Retira el guanciale en cuanto esté dorado y resérvalo aparte. Cocina el tomate en su grasa y corona con el guanciale solo al final sobre el plato para mantenerlo crujiente.",
                "proTip": "🏆 Chef Pro: Desglase con vino blanco seco sobre los bordes calientes de la sartén para disolver los azúcares caramelizados. Tomate San Marzano estrujado a mano a fuego vivo para no perder frescura."
            },
            "gricia": {
                "easyTip": "💡 Modo Fácil: Añade el agua de cocción poco a poco sobre el fondo de grasa del guanciale. Jamás viertas el pecorino sobre la sartén caliente: manteca salteando en el aire.",
                "proTip": "🏆 Chef Pro: Emulsión bifásica perfecta entre grasa noble y almidón. Pimienta negra machacada en mortero y tostada en seco a 150°C antes de la risottatura para liberar la piperina."
            },
            "saltimbocca": {
                "easyTip": "💡 Modo Fácil: Enharina únicamente la cara inferior de la carne (nunca el jamón). Cocina tapado a fuego medio durante 60 segundos: la carne quedará tierna y jugosa.",
                "proTip": "🏆 Chef Pro: Desglase con vino blanco a fuego muy vivo (reacción a 160°C) para crear una salsa aterciopelada y brillante montada al final con mantequilla fría de avellana."
            },
            "coda": {
                "easyTip": "💡 Modo Fácil: Si tienes prisa, puedes usar la olla a presión los primeros 45 minutos y luego reducir a fuego lento sin tapa para espesar la salsa.",
                "proTip": "🏆 Chef Pro: Cocción suave a 85°C durante 4 horas para hidrolizar todo el colágeno en gelatina fundente. Toque canónico de cacao amargo y piñones tostados en los últimos 15 minutos."
            },
            "abbacchio": {
                "easyTip": "💡 Modo Fácil: Marina las chuletillas 15 minutos con un hilo de aceite, romero y ajo machacado. Calienta muy bien la plancha antiadherente para que no se peguen.",
                "proTip": "🏆 Chef Pro: Contacto térmico a muy alta temperatura (230°C) durante 90 segundos por lado. Sazonado estricto al retirar con sal en escamas para preservar la presión osmótica de los jugos."
            },
            "carciofigiudia": {
                "easyTip": "💡 Modo Fácil: Limpia bien retirando las primeras 4-5 capas de hojas duras. Sumerge en agua acidulada con limón para evitar la oxidación antes de freír.",
                "proTip": "🏆 Chef Pro: Doble fritura por inmersión: primero a 140°C para confitar el corazón, luego apertura en flor y segundo golpe a 180°C durante 90 segundos para que las hojas queden crujientes como patatas fritas."
            },
            "carciofiromana": {
                "easyTip": "💡 Modo Fácil: Cocina las alcachofas boca abajo en una cacerola estrecha y honda, cubiertas a media altura de agua y aceite con la tapa puesta para una cocción homogénea al vapor.",
                "proTip": "🏆 Chef Pro: Relleno tradicional de menta romana (nepetella), ajo y un velo de pan rallado. Estofado hermético en campana a 92°C para obtener una textura melosa como mantequilla."
            },
            "suppli": {
                "easyTip": "💡 Modo Fácil: Prepara el arroz al ragú la víspera o déjalo en la nevera 2 horas: el arroz frío y compacto se moldea con facilidad sin romperse.",
                "proTip": "🏆 Chef Pro: Doble rebozado fino sin harina. Punto térmico estricto a 175°C en fritura profunda: corazón fundente a 60°C y corteza crocante milimétrica."
            },
            "maritozzo": {
                "easyTip": "💡 Modo Fácil: Pon el bol y las varillas en el congelador 15 minutos antes de montar la nata: montará en la mitad de tiempo y permanecerá firme mucho más tiempo.",
                "proTip": "🏆 Chef Pro: Brioche romano con fermentación biológica controlada a 26°C, glaseado en frío con almíbar de azúcar y nata fresca montada al 38% de grasa con un 10% de azúcar glas."
            }
        },
        "recipes": {
            "saltimbocca": {
                "category": "secondi",
                "name": "Saltimbocca alla Romana",
                "shortDesc": "Finas escalopas de ternera lechal, jamón curado dulce, salvia fresca y mantequilla clarificada desglasadas con vino blanco seco.",
                "origin": "Roma (Rione Regola, finales del siglo XIX)",
                "difficulty": "Fácil (Cocción exprés en 90 segundos)",
                "history": "Documentado por Pellegrino Artusi en 1891 tras probarlos en la histórica trattoria \"Le Venete\" de Roma: una obra maestra instantánea que \"salta en la boca\".",
                "scienceTip": "Reacción de Maillard ultrarrápida a 160°C únicamente en la cara enharinada de la carne. Fuera del fuego, los jugos se emulsionan con mantequilla fría y vino (beurre monté), logrando un glaseado brillante y aterciopelado.",
                "easyTip": "💡 Modo Fácil: Enharina únicamente la cara inferior de la carne (nunca el jamón). Cocina tapado a fuego medio durante 60 segundos: la carne quedará tierna y jugosa.",
                "proTip": "🏆 Chef Pro: Desglase con vino blanco a fuego muy vivo (reacción a 160°C) para crear una salsa aterciopelada y brillante montada al final con mantequilla fría de avellana.",
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
                ]
            },
            "coda": {
                "category": "secondi",
                "name": "Coda alla Vaccinara",
                "shortDesc": "Rabo de toro estofado a fuego lentísimo durante 4 horas con apio crujiente, tomate San Marzano, pasas, piñones y cacao amargo.",
                "origin": "Roma (Rione Testaccio / Quinto Quarto)",
                "difficulty": "Media (Cocción prolongada a baja temperatura)",
                "history": "Reina indiscutible de la cocina del despojo (Quinto Quarto), nacida en las tabernas junto al antiguo matadero de Testaccio, donde los matarifes cocinaban el rabo con abundante apio para enternecerlo.",
                "scienceTip": "El colágeno del rabo se hidroliza convirtiéndose en suculenta gelatina fundente solo entre 80°C y 85°C en un hervor casi imperceptible (\"pipare\"). El cacao puro y las pasas generan el equilibrio agridulce renacentista que limpia el paladar.",
                "easyTip": "💡 Modo Fácil: Si tienes prisa, puedes usar la olla a presión los primeros 45 minutos y luego reducir a fuego lento sin tapa para espesar la salsa.",
                "proTip": "🏆 Chef Pro: Cocción suave a 85°C durante 4 horas para hidrolizar todo el colágeno en gelatina fundente. Toque canónico de cacao amargo y piñones tostados en los últimos 15 minutos.",
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
                ]
            },
            "abbacchio": {
                "category": "secondi",
                "name": "Abbacchio alla Scottadito",
                "shortDesc": "Chuletillas de cordero lechal marinadas con romero fresco, ajo nuevo y manteca, asadas a fuego vivo para comer ardiendo con los dedos.",
                "origin": "Roma y Campo Romano",
                "difficulty": "Fácil (Cocción rápida a alta temperatura)",
                "history": "Llamadas así porque la tradición manda degustar las chuletillas recién sacadas de las brasas, quemándose literalmente los dedos sin esperar a que enfríen.",
                "scienceTip": "La carne tierna del cordero lechal exige calor de contacto extremo (220-250°C) para caramelizar el exterior en 2 minutos por lado, conservando el núcleo rosado a 56-58°C sin perder jugos celulares.",
                "easyTip": "💡 Modo Fácil: Marina las chuletillas 15 minutos con un hilo de aceite, romero y ajo machacado. Calienta muy bien la plancha antiadherente para que no se peguen.",
                "proTip": "🏆 Chef Pro: Contacto térmico a muy alta temperatura (230°C) durante 90 segundos por lado. Sazonado estricto al retirar con sal en escamas para preservar la presión osmótica de los jugos.",
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
                ]
            },
            "carciofigiudia": {
                "category": "contorni",
                "name": "Carciofi alla Giudia",
                "shortDesc": "El icono milenario del Gueto Judío: alcachofa romanesca con doble fritura dorada en forma de rosa crujiente.",
                "origin": "Roma (Gueto Judío, siglo XVI)",
                "difficulty": "Alta (Precisión en el torneado en espiral y control térmico del aceite)",
                "history": "Nacido en las cocinas judeorromanas para celebrar el fin del ayuno del Yom Kipur: las alcachofas enteras florecen en espectaculares rosas doradas crujientes.",
                "scienceTip": "LA DOBLE FRITURA CIENTÍFICA: La 1.ª inmersión a 140°C cocina la pulpa y el tallo hasta dejarlos tiernos como mantequilla. La 2.ª inmersión a 175-180°C con unas gotas de agua fría evapora al instante la humedad de los pétalos exteriores, inflándolos como chips hipercrujientes.",
                "easyTip": "💡 Modo Fácil: Limpia bien retirando las primeras 4-5 capas de hojas duras. Sumerge en agua acidulada con limón para evitar la oxidación antes de freír.",
                "proTip": "🏆 Chef Pro: Doble fritura por inmersión: primero a 140°C para confitar el corazón, luego apertura en flor y segundo golpe a 180°C durante 90 segundos para que las hojas queden crujientes como patatas fritas.",
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
                ]
            },
            "carciofiromana": {
                "category": "contorni",
                "name": "Carciofi alla Romana",
                "shortDesc": "Alcachofas romanescas rellenas de poleo silvestre romano, ajo y perejil, estofadas boca abajo a fuego lento en cazuela tapada.",
                "origin": "Roma y Campo Romano",
                "difficulty": "Media (Limpieza precisa y estofado hermético)",
                "history": "La guarnición primaveral por excelencia del domingo romano. La menta silvestre (nepetella), autóctona de las ruinas romanas, aporta un aroma inigualable.",
                "scienceTip": "Las alcachofas cocidas boca abajo a 90-95°C selladas con papel vegetal húmedo y tapa pesada se cocinan en el vapor aromático de su propia emulsión de aceite y vino, conservando los polifenoles sin oscurecerse.",
                "easyTip": "💡 Modo Fácil: Cocina las alcachofas boca abajo en una cacerola estrecha y honda, cubiertas a media altura de agua y aceite con la tapa puesta para una cocción homogénea al vapor.",
                "proTip": "🏆 Chef Pro: Relleno tradicional de menta romana (nepetella), ajo y un velo de pan rallado. Estofado hermético en campana a 92°C para obtener una textura melosa como mantequilla.",
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
                ]
            },
            "suppli": {
                "category": "contorni",
                "name": "Supplì al Telefono",
                "shortDesc": "La mítica croqueta romana de arroz al ragú concentrado de carne, rebozado crujiente y corazón fundente de fior di latte que forma hilo.",
                "origin": "Roma (Trastevere, finales del siglo XIX)",
                "difficulty": "Media (Moldeado y fritura por inmersión)",
                "history": "Llamado \"al telefono\" porque al partirlo caliente en dos mitades, la mozzarella fundida forma un hilo elástico continuo que recuerda al cable de los teléfonos antiguos de auricular.",
                "scienceTip": "El arroz al dente debe enfriarse a <15°C para favorecer la retrogradación de la amilosa, que cohesiona los granos sin necesidad de huevo en la masa. La fritura a 170-175°C crea una costra protectora instantánea que sella el queso derretido en el centro.",
                "easyTip": "💡 Modo Fácil: Prepara el arroz al ragú la víspera o déjalo en la nevera 2 horas: el arroz frío y compacto se moldea con facilidad sin romperse.",
                "proTip": "🏆 Chef Pro: Doble rebozado fino sin harina. Punto térmico estricto a 175°C en fritura profunda: corazón fundente a 60°C y corteza crocante milimétrica.",
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
                ]
            },
            "maritozzo": {
                "category": "dolci",
                "name": "Maritozzo con la Panna",
                "shortDesc": "El mítico bollito dulce romano perfumado con cítricos y vainilla, cortado longitudinalmente y colmado de fresca nata montada.",
                "origin": "Roma (Época romana y tradición renacentista)",
                "difficulty": "Media (Fermentación biológica controlada)",
                "history": "Antaño el único dulce permitido durante el ayuno de Cuaresma. En el Renacimiento, el prometido (\"maritozzo\") se lo regalaba a su novia con un anillo de compromiso oculto en la nata.",
                "scienceTip": "La red de gluten desarrollada con harina de fuerza (W 300-330) retiene el CO2 durante la fermentación a 26-28°C. El horneado a 180°C dora la corteza por reacción de Maillard mientras el interior queda esponjoso como una nube.",
                "easyTip": "💡 Modo Fácil: Pon el bol y las varillas en el congelador 15 minutos antes de montar la nata: montará en la mitad de tiempo y permanecerá firme mucho más tiempo.",
                "proTip": "🏆 Chef Pro: Brioche romano con fermentación biológica controlada a 26°C, glaseado en frío con almíbar de azúcar y nata fresca montada al 38% de grasa con un 10% de azúcar glas.",
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
                ]
            }
        }
    },
    "fr": {
        "sosTroubleshooting": {
            "troubleCurdleTitle": "L'œuf commence à figer (effet omelette) ?",
            "troubleCurdleSol": "Retirez immédiatement la poêle de la source de chaleur. Transférez les pâtes dans un cul-de-poule froid, ajoutez 1 glaçon ou 2 cuillères à soupe d'eau froide et fouettez énergiquement. Si des grumeaux sont déjà formés, mixez 5 secondes au mixeur plongeant avec une cuillère d'eau amidonnée : la lécithine se réémulsionnera instantanément.",
            "troubleClumpTitle": "Le pecorino forme des grumeaux caoutchouteux ?",
            "troubleClumpSol": "La caséine dépasse 65°C et expulse le lactosérum. Éloignez la poêle du feu, ajoutez 2 à 3 cuillères à soupe d'eau de cuisson tiède (55°C) riche en amidon et fouettez vivement au fouet ou au mixeur plongeant dans un verre à part avant de réunir aux pâtes.",
            "troubleGuancialeTitle": "Le guanciale a brûlé ou est resté caoutchouteux ?",
            "troubleGuancialeSol": "Si caoutchouteux : feu trop vif, le gras profond n'a pas fondu (comptez 8 à 10 min à feu très doux). Si brûlé : jetez les morceaux noircis pour éliminer l'amertume, filtrez la graisse claire et ajoutez du poivre fraîchement torréfié pour rééquilibrer les arômes.",
            "troubleSaltyTitle": "Le plat est excessivement salé ?",
            "troubleSaltySol": "Le Pecorino Romano AOP affiné contient naturellement beaucoup de sel. Règle d'or : réduisez de moitié le sel dans l'eau des pâtes (5 g/l max). Pour rattraper le plat fini : allongez avec un peu d'eau de cuisson non salée et ajoutez du poivre noir torréfié (la pipérine masque l'excès de salinité).",
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
        "recipeTips": {
            "carbonara": {
                "easyTip": "💡 Mode Facile : Prélevez 2 cuillères à soupe d'eau de cuisson et laissez-la tiédir à 50°C pour délayer les jaunes et le pecorino avant de les lier aux pâtes. Mélangez TOUJOURS hors du feu.",
                "proTip": "🏆 Chef Pro : Uniquement des jaunes frais de poules élevées en plein air, gras de guanciale fondu à 80°C sans roussir et émulsion en vague (mantecatura) entre 62°C et 65°C pour sublimer la lécithine."
            },
            "cacioepepe": {
                "easyTip": "💡 Mode Facile : Préparez une pâte onctueuse de pecorino et d'eau tiède à 50°C dans un bol au fouet. Incorporez-la aux pâtes uniquement après avoir retiré la poêle du feu.",
                "proTip": "🏆 Chef Pro : Extraction massive d'amidon par risottatura vive les 3 dernières minutes. Liaison dynamique à 58°C : l'amylose doit créer des ponts hydrogène avec la caséine."
            },
            "amatriciana": {
                "easyTip": "💡 Mode Facile : Retirez le guanciale dès qu'il est bien doré et réservez-le à part. Cuisez la tomate dans son gras et déposez le guanciale croustillant au dernier moment sur l'assiette.",
                "proTip": "🏆 Chef Pro : Déglacage au vin blanc sec sur les parois très chaudes de la poêle pour dissoudre les sucs caramélisés. Tomates San Marzano écrasées à la main cuites à feu vif pour garder leur éclat."
            },
            "gricia": {
                "easyTip": "💡 Mode Facile : Versez l'eau de cuisson par petits filets progressifs sur le gras fondu du guanciale. Ne jetez jamais le pecorino au fond de la poêle chaude : liez en faisant sauter en l'air.",
                "proTip": "🏆 Chef Pro : Émulsion biphasique parfaite entre lipides nobles et eau amidonnée. Poivre noir concassé au mortier et torréfié à sec à 150°C avant la risottatura pour libérer la pipérine."
            },
            "saltimbocca": {
                "easyTip": "💡 Mode Facile : Farinez uniquement la face inférieure de la viande (jamais le jambon). Cuisez à couvert à feu moyen pendant 60 secondes : la viande restera d'un moelleux incomparable.",
                "proTip": "🏆 Chef Pro : Déglacage au vin blanc à feu très vif (160°C) pour former un jus nappant et brillant, monté au dernier instant avec une noix de beurre froid."
            },
            "coda": {
                "easyTip": "💡 Mode Facile : Pour gagner du temps, lancez les 45 premières minutes en autocuiseur puis poursuivez à découvert à feu doux pour faire réduire et épaissir la sauce.",
                "proTip": "🏆 Chef Pro : Mijotage doux à 85°C pendant 4 heures pour transformer tout le collagène en gelatine fondante. Ajout canonique de cacao amer et pignons torréfiés dans les 15 dernières minutes."
            },
            "abbacchio": {
                "easyTip": "💡 Mode Facile : Faites mariner les côtelettes 15 minutes avec un filet d'huile, romarin et ail écrasé. Chauffez vivement votre poêle grill pour éviter qu'elles n'attachent.",
                "proTip": "🏆 Chef Pro : Choc thermique direct à 230°C pendant 90 secondes par face. Assaisonnement strict en fleur de sel à la sortie du gril pour préserver le jus intramusculaire."
            },
            "carciofigiudia": {
                "easyTip": "💡 Mode Facile : Parez soigneusement en ôtant les 4 à 5 premières rangées de feuilles dures. Plongez dans une eau citronnée pour prévenir l'oxydation avant friture.",
                "proTip": "🏆 Chef Pro : Double friture par immersion : d'abord à 140°C pour confire le cœur, puis ouverture en rosace et second plongeon à 180°C pendant 90 secondes pour cristalliser les pétales comme des chips."
            },
            "carciofiromana": {
                "easyTip": "💡 Mode Facile : Disposez les artichauts tête en bas dans une casserole étroite à bords hauts, couverts à mi-hauteur d'eau et d'huile avec un couvercle pour cuire uniformément à l'étouffée.",
                "proTip": "🏆 Chef Pro : Farce traditionnelle de calament népéta (mentuccia), ail et mie de pain. Cuisson à l'étouffée hermétique à 92°C sous cloche pour une texture fondante comme du beurre."
            },
            "suppli": {
                "easyTip": "💡 Mode Facile : Préparez le risotto au ragù la veille ou réservez-le 2 heures au frais : le riz froid et raffermi se façonne facilement sans se désagréger.",
                "proTip": "🏆 Chef Pro : Double panure fine sans farine. Friture calibrée à 175°C en bain profond : cœur de fior di latte filant à 60°C et croûte croustillante millimétrique."
            },
            "maritozzo": {
                "easyTip": "💡 Mode Facile : Placez le cul-de-poule et les fouets 15 minutes au congélateur avant de monter la crème : elle prendra deux fois plus vite et gardera une tenue impeccable.",
                "proTip": "🏆 Chef Pro : Brioche romaine à pousse biologique lente à 26°C, glaçage à froid au sirop de sucre et crème fleurette fouettée à 38% de matière grasse sucrée à 10% de sucre glace."
            }
        },
        "recipes": {
            "saltimbocca": {
                "category": "secondi",
                "name": "Saltimbocca alla Romana",
                "shortDesc": "Fines escalopes de veau de lait, jambon cru doux, sauge fraîche et beurre clarifié déglacées au vin blanc sec.",
                "origin": "Rome (Rione Regola, fin du XIXe siècle)",
                "difficulty": "Facile (Cuisson express en 90 secondes)",
                "history": "Mentionné en 1891 par Pellegrino Artusi après les avoir dégustés dans l'auberge romaine historique \"Le Venete\" : un chef-d'œuvre qui \"saute en bouche\".",
                "scienceTip": "Réaction de Maillard fulgurante à 160°C sur la seule face farinée du veau. Hors du feu, le fond de poêle est monté au beurre froid et au vin blanc (beurre monté), nappant la viande d'un jus soyeux et laqué.",
                "easyTip": "💡 Mode Facile : Farinez uniquement la face inférieure de la viande (jamais le jambon). Cuisez à couvert à feu moyen pendant 60 secondes : la viande restera d'un moelleux incomparable.",
                "proTip": "🏆 Chef Pro : Déglacage au vin blanc à feu très vif (160°C) pour former un jus nappant et brillant, monté au dernier instant avec une noix de beurre froid.",
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
                ]
            },
            "coda": {
                "category": "secondi",
                "name": "Coda alla Vaccinara",
                "shortDesc": "Queue de bœuf mijotée à feu très doux pendant 4 heures avec céleri croquant, tomates San Marzano, raisins secs, pignons et cacao amer.",
                "origin": "Rome (Rione Testaccio / Quinto Quarto)",
                "difficulty": "Moyenne (Mijotage prolongé à basse température)",
                "history": "Reine absolue de la cuisine des abats (Quinto Quarto), née dans les auberges des abattoirs de Testaccio où les écorcheurs préparaient la queue avec beaucoup de céleri pour l'attendrir.",
                "scienceTip": "Le collagène de la queue s'hydrolyse en une succulente gélatine fondante uniquement entre 80°C et 85°C lors d'un léger frémissement (\"pipare\"). Le cacao pur et les raisins composent l'équilibre aigre-doux renaissant qui allège le palais.",
                "easyTip": "💡 Mode Facile : Pour gagner du temps, lancez les 45 premières minutes en autocuiseur puis poursuivez à découvert à feu doux pour faire réduire et épaissir la sauce.",
                "proTip": "🏆 Chef Pro : Mijotage doux à 85°C pendant 4 heures pour transformer tout le collagène en gélatine fondante. Ajout canonique de cacao amer et pignons torréfiés dans les 15 dernières minutes.",
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
                ]
            },
            "abbacchio": {
                "category": "secondi",
                "name": "Abbacchio alla Scottadito",
                "shortDesc": "Côtelettes d'agneau de lait marinées au romarin frais, ail nouveau et saindoux, grillées à feu très vif et dégustées brûlantes avec les doigts.",
                "origin": "Rome et Campagne Romaine",
                "difficulty": "Facile (Cuisson rapide à haute température)",
                "history": "Appelées \"scottadito\" (brûle-doigts) car la coutume romaine exige de croquer les côtelettes à peine retirées de la braise, en se brûlant délicieusement les doigts sans attendre.",
                "scienceTip": "La chair délicate de l'agneau de lait réclame une chaleur de contact intense (220-250°C) pour caraméliser l'extérieur en 2 minutes par face, tout en maintenant le cœur rosé et juteux à 56-58°C.",
                "easyTip": "💡 Mode Facile : Faites mariner les côtelettes 15 minutes avec un filet d'huile, romarin et ail écrasé. Chauffez vivement votre poêle grill pour éviter qu'elles n'attachent.",
                "proTip": "🏆 Chef Pro : Choc thermique direct à 230°C pendant 90 secondes par face. Assaisonnement strict en fleur de sel à la sortie du gril pour préserver le jus intramusculaire.",
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
                ]
            },
            "carciofigiudia": {
                "category": "contorni",
                "name": "Carciofi alla Giudia",
                "shortDesc": "L'icône séculaire du Ghetto Juif : artichaut romain en double friture dorée épanoui comme une rose croustillante.",
                "origin": "Rome (Ghetto Juif, XVIe siècle)",
                "difficulty": "Haute (Tournage précis en spirale et friture à double température)",
                "history": "Né dans les foyers judéo-romains pour marquer la rupture du jeûne du Yom Kippour : les artichauts entiers s'ouvrent en fleurs dorées croustillantes.",
                "scienceTip": "LA DOUBLE FRITURE SCIENTIFIQUE : Le premier bain à 140°C cuit le cœur et la tige jusqu'à une texture fondante comme du beurre. Le second bain flash à 175-180°C vaporise instantanément l'eau des pétales externes, les transformant en chips dorées ultra-craquantes.",
                "easyTip": "💡 Mode Facile : Parez soigneusement en ôtant les 4 à 5 premières rangées de feuilles dures. Plongez dans une eau citronnée pour prévenir l'oxydation avant friture.",
                "proTip": "🏆 Chef Pro : Double friture par immersion : d'abord à 140°C pour confire le cœur, puis ouverture en rosace et second plongeon à 180°C pendant 90 secondes pour cristalliser les pétales comme des chips.",
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
                ]
            },
            "carciofiromana": {
                "category": "contorni",
                "name": "Carciofi alla Romana",
                "shortDesc": "Artichauts romains farcis de calament népéta sauvage, ail et persil, braisés doucement tête en bas en cocotte close.",
                "origin": "Rome et Campagne Romaine",
                "difficulty": "Moyenne (Parage soigné et braisage hermétique)",
                "history": "L'accompagnement printanier roi des dimanches romains. La mentuccia sauvage (calament), typique des ruines antiques, confère une signature aromatique inimitable.",
                "scienceTip": "Braisés tête en bas à 90-95°C scellés sous papier sulfurisé humide et couvercle lourd, les artichauts cuisent dans la vapeur de leur propre émulsion huile-vin, préservant les polyphénols sans noircir.",
                "easyTip": "💡 Mode Facile : Disposez les artichauts tête en bas dans une casserole étroite à bords hauts, couverts à mi-hauteur d'eau et d'huile avec un couvercle pour cuire uniformément à l'étouffée.",
                "proTip": "🏆 Chef Pro : Farce traditionnelle de calament népéta (mentuccia), ail et mie de pain. Cuisson à l'étouffée hermétique à 92°C sous cloche pour une texture fondante comme du beurre.",
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
                ]
            },
            "suppli": {
                "category": "contorni",
                "name": "Supplì al Telefono",
                "shortDesc": "La légendaire croquette romaine de riz au ragù corsé de bœuf, panure croustillante et cœur fondant filant de fior di latte.",
                "origin": "Rome (Trastevere, fin du XIXe siècle)",
                "difficulty": "Moyenne (Façonnage et friture en bain d'huile)",
                "history": "Surnommé \"al telefono\" car lorsqu'on sépare la croquette chaude en deux, la mozzarella fondue s'étire en un fil élastique continu évoquant le cordon torsadé des téléphones anciens.",
                "scienceTip": "Le riz cuit al dente doit refroidir sous 15°C pour induire la rétrogradation de l'amidon, qui soude les grains sans ajout d'œufs dans l'appareil. La friture à 170-175°C saisit la chapelure en une croûte hermétique protégeant le cœur filant.",
                "easyTip": "💡 Mode Facile : Préparez le risotto au ragù la veille ou réservez-le 2 heures au frais : le riz froid et raffermi se façonne facilement sans se désagréger.",
                "proTip": "🏆 Chef Pro : Double panure fine sans farine. Friture calibrée à 175°C en bain profond : cœur de fior di latte filant à 60°C et croûte croustillante millimétrique.",
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
                ]
            },
            "maritozzo": {
                "category": "dolci",
                "name": "Maritozzo con la Panna",
                "shortDesc": "La légendaire petite brioche romaine parfumée aux agrumes et à la vanille, fendue et généreusement garnie de crème fouettée aérienne.",
                "origin": "Rome (Époque romaine et tradition renaissante)",
                "difficulty": "Moyenne (Fermentation biologique contrôlée)",
                "history": "Autrefois la seule douceur tolérée pendant le jeûne de carême. À la Renaissance, le futur marié (\"maritozzo\") l'offrait à sa promise en y dissimulant une bague dans la chantilly.",
                "scienceTip": "Le réseau de gluten d'une farine de force (W 300-330) emprisonne le CO2 durant la pousse à 26-28°C. La cuisson à 180°C caramélise la croûte par réaction de Maillard tout en préservant une mie filante et légère comme un nuage.",
                "easyTip": "💡 Mode Facile : Placez le cul-de-poule et les fouets 15 minutes au congélateur avant de monter la crème : elle prendra deux fois plus vite et gardera une tenue impeccable.",
                "proTip": "🏆 Chef Pro : Brioche romaine à pousse biologique lente à 26°C, glaçage à froid au sirop de sucre et crème fleurette fouettée à 38% de matière grasse sucrée à 10% de sucre glace.",
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
                ]
            }
        }
    },
    "pt": {
        "sosTroubleshooting": {
            "troubleCurdleTitle": "O ovo começou a talhar (efeito omelete)?",
            "troubleCurdleSol": "Retire imediatamente a frigideira do fogo. Transfira a massa para uma tigela fria, adicione 1 pedra de gelo ou 2 colheres de sopa de água fria e bata vigorosamente. Se já houver grumos aparentes, bata por 5 segundos com um mixer de imersão e uma colher de água amilácea: a lecitina voltará a emulsionar na hora.",
            "troubleClumpTitle": "O pecorino formou grumos borrachudos?",
            "troubleClumpSol": "A caseína superou os 65°C e expulsou o soro. Afaste a frigideira do fogo, adicione 2 a 3 colheres de sopa de água de cozimento morna (55°C) rica em amido e bata rapidamente com um batedor de arame ou mixer num copo à parte antes de juntar à massa.",
            "troubleGuancialeTitle": "O guanciale queimou ou ficou borrachudo?",
            "troubleGuancialeSol": "Se ficou borrachudo: fogo alto demais, a gordura interna não derreteu (são necessários 8 a 10 min em fogo brando). Se queimou: descarte as partes queimadas para evitar o amargor, coe a gordura limpa e acrescente pimenta-do-reino tostada na hora para reequilibrar os aromas.",
            "troubleSaltyTitle": "O prato ficou excessivamente salgado?",
            "troubleSaltySol": "O Pecorino Romano DOP curado contém muito sal natural. Regra de ouro: corte o sal da água do macarrão pela metade (máx. 5 g/l). Para corrigir no prato pronto: emulsione com um pouco de água morna sem sal e junte pimenta-do-reino tostada (a piperina ameniza a sensação de salinidade aguda).",
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
        "recipeTips": {
            "carbonara": {
                "easyTip": "💡 Modo Fácil: Reserve 2 colheres de sopa de água do cozimento e deixe amornar a 50°C para temperar as gemas e o pecorino antes de juntar à massa. Misture SEMPRE fora do fogo.",
                "proTip": "🏆 Chef Pro: Use apenas gemas frescas de galinhas caipiras, gordura de guanciale derretida a 80°C sem queimar e emulsão em onda (mantecatura) entre 62°C e 65°C para maximizar a viscosidade da lecitina."
            },
            "cacioepepe": {
                "easyTip": "💡 Modo Fácil: Prepare uma pasta lisa de pecorino com água morna a 50°C numa tigela à parte com um batedor. Adicione à massa apenas depois de retirar a frigideira do fogo.",
                "proTip": "🏆 Chef Pro: Extração intensa de amido na risottatura nos últimos 3 minutos. Emulsão dinâmica a 58°C: a concentração de amilose deve formar pontes de hidrogênio estáveis com a caseína."
            },
            "amatriciana": {
                "easyTip": "💡 Modo Fácil: Retire o guanciale assim que estiver dourado e reserve-o à parte. Cozinhe o tomate na gordura e adicione o guanciale crocante apenas na hora de servir por cima do prato.",
                "proTip": "🏆 Chef Pro: Deglaceie com vinho branco seco nas bordas quentes da frigideira para soltar os açúcares caramelizados. Tomates San Marzano amassados à mão em fogo vivo para manter a acidez fresca."
            },
            "gricia": {
                "easyTip": "💡 Modo Fácil: Adicione a água de cozimento aos poucos sobre o fundo de gordura do guanciale. Nunca jogue o pecorino no fundo quente da panela: emulsione salteando no ar.",
                "proTip": "🏆 Chef Pro: Emulsão bifásica perfeita de gordura nobre e amido. Pimenta-do-reino triturada no pilão e tostada a seco a 150°C antes da risottatura para desprender a piperina."
            },
            "saltimbocca": {
                "easyTip": "💡 Modo Fácil: Enfarinhe apenas a face inferior da carne (nunca o presunto). Cozinhe com a frigideira tampada em fogo médio por 60 segundos: a carne ficará macia e suculenta.",
                "proTip": "🏆 Chef Pro: Deglaçagem com vinho branco em fogo altíssimo (160°C) para criar um molho aveludado e reluzente montado com manteiga gelada ao final."
            },
            "coda": {
                "easyTip": "💡 Modo Fácil: Para economizar tempo, use a panela de pressão nos primeiros 45 minutos e depois finalize em fogo brando destampado para apurar e encorpar o molho.",
                "proTip": "🏆 Chef Pro: Cozimento brando a 85°C por 4 horas para hidrolisar totalmente o colágeno em gelatina suculenta. Toque canônico de cacau amargo e pinoli tostados nos últimos 15 minutos."
            },
            "abbacchio": {
                "easyTip": "💡 Modo Fácil: Marine as costeletas por 15 minutos com um fio de azeite, alecrim e alho amassado. Aqueça muito bem a grelha antiaderente para não grudar.",
                "proTip": "🏆 Chef Pro: Choque térmico a altíssima temperatura (230°C) por 90 segundos de cada lado. Salgue rigorosamente ao retirar da grelha com flor de sal para reter os sucos internos."
            },
            "carciofigiudia": {
                "easyTip": "💡 Modo Fácil: Limpe bem retirando as primeiras 4 a 5 camadas de folhas duras. Mergulhe em água acidulada com limão para evitar a oxidação antes de fritar.",
                "proTip": "🏆 Chef Pro: Fritura dupla por imersão: primeiro a 140°C para cozinhar o coração, depois abertura em flor e segundo mergulho a 180°C por 90 segundos para que as folhas fiquem crocantes como batatas fritas."
            },
            "carciofiromana": {
                "easyTip": "💡 Modo Fácil: Disponha as alcachofras de cabeça para baixo numa panela estreita e funda, cobertas até a metade com água e azeite com a tampa fechada para cozinhar no vapor.",
                "proTip": "🏆 Chef Pro: Recheio clássico de poejo romano silvestre (nepetella), alho e um toque de farinha de rosca. Estufado hermético a 92°C para manter as folhas macias como manteiga."
            },
            "suppli": {
                "easyTip": "💡 Modo Fácil: Prepare o risoto ao ragù na véspera ou deixe na geladeira por 2 horas: o arroz frio e compacto molda com facilidade sem desmanchar.",
                "proTip": "🏆 Chef Pro: Empanamento duplo bem fino sem farinha de trigo. Fritura precisa a 175°C em óleo abundante: coração de fior di latte puxando fio a 60°C e crosta crocante milimétrica."
            },
            "maritozzo": {
                "easyTip": "💡 Modo Fácil: Coloque a tigela e os batedores no congelador por 15 minutos antes de bater o chantilly: ele montará na metade do tempo e ficará firme por muito mais tempo.",
                "proTip": "🏆 Chef Pro: Brioche romana com fermentação biológica lenta a 26°C, calda de açúcar para dar brilho após assar e creme de leite fresco a 38% de gordura batido com 10% de açúcar de confeiteiro."
            }
        },
        "recipes": {
            "saltimbocca": {
                "category": "secondi",
                "name": "Saltimbocca alla Romana",
                "shortDesc": "Fatias finas de vitela de leite, presunto cru suave, sálvia fresca e manteiga clarificada deglaçadas com vinho branco seco.",
                "origin": "Roma (Rione Regola, final do século XIX)",
                "difficulty": "Fácil (Cozimento expresso em 90 segundos)",
                "history": "Documentado por Pellegrino Artusi em 1891 após saboreá-los na histórica taverna \"Le Venete\" em Roma: uma obra-prima instantânea que \"pula na boca\".",
                "scienceTip": "Reação de Maillard ultrarrápida a 160°C apenas no lado enfarinhado da carne. Fora do fogo, o fundo da frigideira emulsiona com manteiga gelada e vinho (beurre monté), formando um molho aveludado e reluzente.",
                "easyTip": "💡 Modo Fácil: Enfarinhe apenas a face inferior da carne (nunca o presunto). Cozinhe com a frigideira tampada em fogo médio por 60 segundos: a carne ficará macia e suculenta.",
                "proTip": "🏆 Chef Pro: Deglaçagem com vinho branco em fogo altíssimo (160°C) para criar um molho aveludado e reluzente montado com manteiga gelada ao final.",
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
                ]
            },
            "coda": {
                "category": "secondi",
                "name": "Coda alla Vaccinara",
                "shortDesc": "Rabada bovina estufada em fogo lentíssimo por 4 horas com aipo crocante, tomate San Marzano, uvas-passas, pinoli e cacau amargo.",
                "origin": "Roma (Rione Testaccio / Quinto Quarto)",
                "difficulty": "Média (Cozimento longo em baixa temperatura)",
                "history": "A rainha da culinária das vísceras (Quinto Quarto), criada nas tavernas ao redor do antigo abatedouro de Testaccio, onde os carniceiros cozinhavam o rabo com muito aipo para amaciá-lo.",
                "scienceTip": "O colágeno da rabada se hidrolisa virando uma gelatina suculenta e fondente apenas entre 80°C e 85°C num borbulhar quase imperceptível (\"pipare\"). O cacau amargo e as passas criam o equilíbrio agridoce renascentista que limpa o paladar.",
                "easyTip": "💡 Modo Fácil: Para economizar tempo, use a panela de pressão nos primeiros 45 minutos e depois finalize em fogo brando destampado para apurar e encorpar o molho.",
                "proTip": "🏆 Chef Pro: Cozimento brando a 85°C por 4 horas para hidrolisar totalmente o colágeno em gelatina suculenta. Toque canônico de cacau amargo e pinoli tostados nos últimos 15 minutos.",
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
                ]
            },
            "abbacchio": {
                "category": "secondi",
                "name": "Abbacchio alla Scottadito",
                "shortDesc": "Costeletas de cordeiro de leite marinadas com alecrim fresco, alho novo e banha, grelhadas na brasa para comer pelando com os dedos.",
                "origin": "Roma e Agro Romano",
                "difficulty": "Fácil (Cozimento rápido em alta temperatura)",
                "history": "Chamado de \"scottadito\" (queima-dedos) porque o costume romano exige saborear as costeletas assim que saem do fogo, queimando literalmente as pontas dos dedos sem esperar esfriar.",
                "scienceTip": "A carne delicada do cordeiro de leite exige calor de contato altíssimo (220-250°C) para caramelizar o exterior em 2 minutos por lado, mantendo o centro rosado a 56-58°C sem perder sucos intracelulares.",
                "easyTip": "💡 Modo Fácil: Marine as costeletas por 15 minutos com um fio de azeite, alecrim e alho amassado. Aqueça muito bem a grelha antiaderente para não grudar.",
                "proTip": "🏆 Chef Pro: Choque térmico a altíssima temperatura (230°C) por 90 segundos de cada lado. Salgue rigorosamente ao retirar da grelha com flor de sal para reter os sucos internos.",
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
                ]
            },
            "carciofigiudia": {
                "category": "contorni",
                "name": "Carciofi alla Giudia",
                "shortDesc": "O ícone milenar do Gueto Judaico: alcachofra romanesca em dupla fritura dourada em formato de rosa crocante.",
                "origin": "Roma (Gueto Judaico, século XVI)",
                "difficulty": "Alta (Precisão no corte em espiral e controle térmico do óleo)",
                "history": "Criado nas cozinhas judaico-romanas para celebrar a quebra do jejum do Yom Kippur: as alcachofras inteiras se transformam em flores douradas e crocantes.",
                "scienceTip": "A DUPLA FRITURA CIENTÍFICA: O primeiro mergulho a 140°C cozinha o miolo e o talo até ficarem macios como manteiga. O segundo mergulho a 175-180°C evapora instantaneamente a umidade das folhas externas, inflando-as como chips supercrocantes.",
                "easyTip": "💡 Modo Fácil: Limpe bem retirando as primeiras 4 a 5 camadas de folhas duras. Mergulhe em água acidulada com limão para evitar a oxidação antes de fritar.",
                "proTip": "🏆 Chef Pro: Fritura dupla por imersão: primeiro a 140°C para cozinhar o coração, depois abertura em flor e segundo mergulho a 180°C por 90 segundos para que as folhas fiquem crocantes como batatas fritas.",
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
                ]
            },
            "carciofiromana": {
                "category": "contorni",
                "name": "Carciofi alla Romana",
                "shortDesc": "Alcachofras romanescas recheadas com poejo romano silvestre, alho e salsinha, cozidas de cabeça para baixo em panela tampada.",
                "origin": "Roma e Campanha Romana",
                "difficulty": "Média (Limpeza cuidadosa e cozimento a vapor hermético)",
                "history": "O acompanhamento primaveril dos almoços de domingo romanos. O poejo silvestre (nepetella), típico das ruínas da Roma Antiga, dá um aroma inconfundível.",
                "scienceTip": "Cozidas de cabeça para baixo a 90-95°C cobertas com papel manteiga umedecido e tampa pesada, as alcachofras cozinham no vapor aromático da própria emulsão de azeite e vinho, mantendo os polifenóis sem escurecer.",
                "easyTip": "💡 Modo Fácil: Disponha as alcachofras de cabeça para baixo numa panela estreita e funda, cobertas até a metade com água e azeite com a tampa fechada para cozinhar no vapor.",
                "proTip": "🏆 Chef Pro: Recheio clássico de poejo romano silvestre (nepetella), alho e um toque de farinha de rosca. Estufado hermético a 92°C para manter as folhas macias como manteiga.",
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
                ]
            },
            "suppli": {
                "category": "contorni",
                "name": "Supplì al Telefono",
                "shortDesc": "O clássico croquete romano de arroz ao ragù encorpado de carne, casquinha crocante e miolo de muçarela fior di latte puxando fio.",
                "origin": "Roma (Trastevere, final do século XIX)",
                "difficulty": "Média (Modelagem e fritura por imersão)",
                "history": "Chamado de \"ao telefone\" porque, ao ser partido ao meio ainda quente, a muçarela derretida forma um fio elástico ininterrupto que lembra o cabo espiral dos telefones antigos.",
                "scienceTip": "O arroz cozido al dente deve resfriar a <15°C para estimular a retrogradação do amido, que une os grãos sem necessidade de ovos na massa. A fritura a 170-175°C cria uma barreira crocante imediata selando o queijo derretido no centro.",
                "easyTip": "💡 Modo Fácil: Prepare o risoto ao ragù na véspera ou deixe na geladeira por 2 horas: o arroz frio e compacto molda com facilidade sem desmanchar.",
                "proTip": "🏆 Chef Pro: Empanamento duplo bem fino sem farinha de trigo. Fritura precisa a 175°C em óleo abundante: coração de fior di latte puxando fio a 60°C e crosta crocante milimétrica.",
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
                ]
            },
            "maritozzo": {
                "category": "dolci",
                "name": "Maritozzo con la Panna",
                "shortDesc": "O clássico pãozinho doce romano macio e aromático com raspas de cítricos e baunilha, aberto ao meio e recheado de chantilly fresco.",
                "origin": "Roma (Época romana e tradição renascentista)",
                "difficulty": "Média (Fermentação biológica controlada)",
                "history": "No passado, o único doce permitido durante o jejum da Quaresma. No Renascimento, o noivo (\"maritozzo\") presenteava sua amada com um anel escondido dentro do chantilly.",
                "scienceTip": "A rede de glúten de uma farinha de força (W 300-330) retém o CO2 na fermentação a 26-28°C. O forno a 180°C doura a casquinha por reação de Maillard enquanto o miolo fica incrivelmente leve e macio como nuvem.",
                "easyTip": "💡 Modo Fácil: Coloque a tigela e os batedores no congelador por 15 minutos antes de bater o chantilly: ele montará na metade do tempo e ficará firme por muito mais tempo.",
                "proTip": "🏆 Chef Pro: Brioche romana com fermentação biológica lenta a 26°C, calda de açúcar para dar brilho após assar e creme de leite fresco a 38% de gordura batido com 10% de açúcar de confeiteiro.",
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
                ]
            }
        }
    }
}

output_path = os.path.join(os.path.dirname(__file__), "..", "target_romance.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(target_romance, f, ensure_ascii=False, indent=2)

print(f"Successfully generated target_romance.json at {output_path}")
