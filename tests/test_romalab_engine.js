// Unit & Logic test for RomaLab Scientifico Engine
const fs = require('fs');

// Mock window and localStorage for node environment
global.window = global;
global.localStorage = {
  data: {},
  getItem(k) { return this.data[k] || null; },
  setItem(k, v) { this.data[k] = String(v); }
};
global.document = {
  documentElement: { lang: 'it' }
};
global.navigator = { language: 'en-US' };

// Load i18n and engine
require('../js/i18n.js');
require('../js/engine.js');

console.log("=== ROMALAB SCIENTIFICO - ENGINE AUDIT ===");

// 1. Test Italian Calculation
window.I18N.setLanguage('it');
window.I18N.setUnit('metric');

console.log("\n[TEST 1] Carbonara 4 persone (Metric - IT):");
const carb4_it = window.RomaLabEngine.calculate('carbonara', 4);
console.log(`Ricetta: ${carb4_it.name}`);
carb4_it.ingredients.forEach(ing => {
  console.log(` - ${ing.name}: ${ing.formatted}`);
});
console.log(`Acqua consigliata: ${carb4_it.scienceMetrics.waterLiters} L con ${carb4_it.scienceMetrics.waterSaltGrams} g di sale`);
console.log(`Grasso fuso stimato: ${carb4_it.scienceMetrics.renderedFatGrams} g`);

// Assert: Yolks for 4 people should be 4 + 1 = 5
const yolkIng = carb4_it.ingredients.find(i => i.key === 'yolks');
if (yolkIng && yolkIng.rawAmount === 5) {
  console.log(" PASSED: Regola '1 a testa + 1 pe la padella' corretta (5 tuorli per 4 persone)");
} else {
  console.error(" FAILED: Regola tuorli errata!", yolkIng);
  process.exit(1);
}

// 2. Test English & Imperial Calculation
window.I18N.setLanguage('en');
window.I18N.setUnit('imperial');

console.log("\n[TEST 2] Carbonara 2 servings (Imperial - EN):");
const carb2_en = window.RomaLabEngine.calculate('carbonara', 2);
console.log(`Recipe: ${carb2_en.name}`);
carb2_en.ingredients.forEach(ing => {
  console.log(` - ${ing.name}: ${ing.formatted}`);
});

// Yolks for 2 should be 2 + 1 = 3
const yolk2 = carb2_en.ingredients.find(i => i.key === 'yolks');
if (yolk2 && yolk2.rawAmount === 3) {
  console.log(" PASSED: 3 egg yolks for 2 servings");
} else {
  console.error(" FAILED: Yolks calculation incorrect!", yolk2);
  process.exit(1);
}

// 3. Test Cacio e Pepe, Amatriciana, Gricia
['cacioepepe', 'amatriciana', 'gricia'].forEach(rId => {
  const res = window.RomaLabEngine.calculate(rId, 3);
  console.log(`\n[TEST 3] ${rId.toUpperCase()} for 3 servings: OK (${res.ingredients.length} ingredients computed)`);
});

// 4. Test Thermal Evaluator
const danger = window.RomaLabEngine.evaluatePanTemp(72, 'carbonara');
const optimal = window.RomaLabEngine.evaluatePanTemp(62, 'carbonara');
console.log("\n[TEST 4] Thermal Analyzer:");
console.log(`72°C -> Status: ${danger.status} (${danger.label})`);
console.log(`62°C -> Status: ${optimal.status} (${optimal.label})`);

if (danger.status === 'danger' && optimal.status === 'optimal') {
  console.log(" PASSED: Thermal thresholds validated!");
} else {
  console.error(" FAILED: Thermal evaluation failed!");
  process.exit(1);
}

console.log("\n=== ALL ENGINE TESTS PASSED! ===");
