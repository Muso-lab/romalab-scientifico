/**
 * RomaLab Scientifico - Culinary Science & Mathematical Kinetic Engine
 * Scientific formulas for authentic Roman culinary emulsions, thermodynamic thresholds & portions
 */

const RomaLabEngine = {
  // Constants for thermal thermodynamics
  TEMPS: {
    EGG_COAGULATION_START: 62, // °C - Ovotransferrin starts to denature
    EGG_COAGULATION_MAX: 68,   // °C - Above this = irreversibly scrambled eggs
    EGG_EMULSION_SWEETSPOT: { min: 58, max: 65 }, // °C
    
    PECORINO_MELT_START: 54,   // °C - Lipids soften
    PECORINO_PROTEIN_CLUMP: 65, // °C - Casein micelle aggregation without starch protection
    PECORINO_SWEETSPOT: { min: 55, max: 62 }, // °C

    GUANCIALE_RENDER_TEMP: 85  // °C - Gentle rendering without smoking fat
  },

  /**
   * Calculates precise ingredient breakdown for any recipe
   * @param {string} recipeId - 'carbonara' | 'cacioepepe' | 'amatriciana' | 'gricia'
   * @param {number} servings - Number of people (1-20)
   * @param {number} customPastaWeight - Optional custom pasta weight in grams
   */
  calculate(recipeId, servings = 4, customPastaWeight = null) {
    const s = Math.max(1, Math.min(24, parseInt(servings, 10) || 4));
    const lang = (window.I18N && window.I18N.currentLang) || 'it';
    const recipeData = window.I18N ? window.I18N.dict[lang].recipes[recipeId] : null;

    if (!recipeData) {
      throw new Error(`Recipe ${recipeId} not found in dictionary.`);
    }

    const baseIngs = recipeData.ingredients;
    const computed = {
      servings: s,
      recipeId: recipeId,
      name: recipeData.name,
      ingredients: []
    };

    // Calculate base pasta weight (default 100g/person or custom)
    const pastaWeight = customPastaWeight && customPastaWeight > 0 ? customPastaWeight : (baseIngs.pasta ? baseIngs.pasta.basePerPerson * s : 0);

    for (const [key, ing] of Object.entries(baseIngs)) {
      let weightOrCount = 0;
      let unit = ing.unit;

      if (key === 'pasta') {
        weightOrCount = pastaWeight;
      } else if (key === 'yolks') {
        // Authentic Roman formula: 1 yolk per person + 1 extra yolk for the skillet ("uno a testa più uno pe' la padella")
        weightOrCount = (s * (ing.basePerPerson || 1)) + (ing.extraPadella || 0);
      } else if (ing.basePerPerson) {
        // Proportional to pasta weight ratio if custom, or direct per person
        const ratio = pastaWeight > 0 && baseIngs.pasta ? (pastaWeight / (baseIngs.pasta.basePerPerson * s)) : 1;
        weightOrCount = ing.basePerPerson * s * ratio;
      }

      computed.ingredients.push({
        key: key,
        name: ing.name,
        rawAmount: weightOrCount,
        unit: unit,
        formatted: this.formatAmount(weightOrCount, unit)
      });
    }

    // Additional thermodynamic & water calculations
    computed.scienceMetrics = this.computeScienceMetrics(recipeId, s, pastaWeight);

    return computed;
  },

  /**
   * Formats an amount with international unit conversion
   */
  formatAmount(amount, unit) {
    const isImperial = window.I18N && window.I18N.currentUnit === 'imperial';

    if (unit === 'g') {
      if (isImperial) {
        const oz = amount * 0.035274;
        return `${oz.toFixed(1)} oz`;
      }
      return `${Math.round(amount)} g`;
    }

    if (unit === 'ml') {
      if (isImperial) {
        const floz = amount * 0.033814;
        return `${floz.toFixed(1)} fl oz`;
      }
      return `${Math.round(amount)} ml`;
    }

    if (unit === 'pz' || unit === 'pcs') {
      return `${Math.round(amount)}`;
    }

    return `${amount} ${unit}`;
  },

  /**
   * Computes scientific parameters: starch extraction, water salinity, fat rendering
   */
  computeScienceMetrics(recipeId, servings, pastaGrams) {
    // Starch release: Bronze-drawn pasta sheds approx 2.5g of starch per 100g into cooking water
    const estimatedStarchExtractedGrams = (pastaGrams / 100) * 2.8;

    // Recommended concentrated cooking water volume for maximum starch density:
    // Traditional: 1L per 100g (diluted starch).
    // Scientific Concentrated: 0.65L per 100g (dense, milky starch water)
    const recommendedWaterLiters = Math.max(1.2, ((pastaGrams / 100) * 0.65)).toFixed(1);

    // Salt in water: 5g/L (half standard 10g/L because Pecorino and Guanciale have high natural salinity)
    const recommendedWaterSaltGrams = Math.round(recommendedWaterLiters * 5);

    // Fat rendering estimate: Guanciale is ~65% noble fat; about 40% melts into golden cooking oil
    let guancialeGrams = 0;
    if (recipeId === 'carbonara') guancialeGrams = servings * 60;
    else if (recipeId === 'amatriciana') guancialeGrams = servings * 50;
    else if (recipeId === 'gricia') guancialeGrams = servings * 55;

    const renderedLiquidLardGrams = Math.round(guancialeGrams * 0.42);

    return {
      waterLiters: recommendedWaterLiters,
      waterSaltGrams: recommendedWaterSaltGrams,
      starchGrams: estimatedStarchExtractedGrams.toFixed(1),
      renderedFatGrams: renderedLiquidLardGrams,
      tempWindow: (recipeId === 'carbonara' || recipeId === 'cacioepepe') 
        ? { min: 58, max: 65, unit: '°C' } 
        : { min: 65, max: 75, unit: '°C' }
    };
  },

  /**
   * Evaluates pan status based on simulated or measured temperature
   */
  evaluatePanTemp(celsius, recipeId = 'carbonara') {
    if (recipeId === 'carbonara') {
      if (celsius > this.TEMPS.EGG_COAGULATION_MAX) {
        return {
          status: 'danger',
          label: 'DANGER_COAGULATION',
          message: window.I18N ? window.I18N.t('alertTempDanger') : 'Pericolo frittata!'
        };
      }
      if (celsius >= this.TEMPS.EGG_EMULSION_SWEETSPOT.min && celsius <= this.TEMPS.EGG_EMULSION_SWEETSPOT.max) {
        return {
          status: 'optimal',
          label: 'OPTIMAL_EMULSION',
          message: window.I18N ? window.I18N.t('alertTempOptimal') : 'Finestra termica perfetta!'
        };
      }
      return {
        status: 'cold',
        label: 'COLD_RISK',
        message: window.I18N ? window.I18N.t('alertTempCold') : 'Temperatura troppo bassa.'
      };
    }

    if (recipeId === 'cacioepepe') {
      if (celsius > this.TEMPS.PECORINO_PROTEIN_CLUMP) {
        return {
          status: 'danger',
          label: 'DANGER_CHEESE_CLUMP',
          message: 'Attenzione: T > 65°C! Il pecorino rischia di formare un blocco gommoso!'
        };
      }
      if (celsius >= this.TEMPS.PECORINO_SWEETSPOT.min && celsius <= this.TEMPS.PECORINO_SWEETSPOT.max) {
        return {
          status: 'optimal',
          label: 'OPTIMAL_EMULSION',
          message: 'Cremosità vellutata: l\'amido protegge le caseine da coagulazione!'
        };
      }
      return {
        status: 'cold',
        label: 'COLD_RISK',
        message: 'Intiepidisci la padella per far sciogliere dolcemente i grassi del formaggio.'
      };
    }

    return { status: 'optimal', label: 'OK', message: 'Temperatura idonea.' };
  }
};

window.RomaLabEngine = RomaLabEngine;
