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

// 1. Test Italian Calculation Standard vs Abbondante
window.I18N.setLanguage('it');
window.I18N.setUnit('metric');

console.log("\n[TEST 1A] Carbonara 4 persone - Standard (100g/testa):");
const carb4_std = window.RomaLabEngine.calculate('carbonara', 4);
console.log(`Ricetta: ${carb4_std.name}`);
carb4_std.ingredients.forEach(ing => {
  console.log(` - ${ing.name}: ${ing.formatted}`);
});
console.log(`Acqua consigliata: ${carb4_std.scienceMetrics.waterLiters} L con ${carb4_std.scienceMetrics.waterSaltGrams} g di sale`);

// Assert standard: pasta = 400g, yolks = 5
const yolkStd = carb4_std.ingredients.find(i => i.key === 'yolks');
const pastaStd = carb4_std.ingredients.find(i => i.key === 'pasta');
if (yolkStd.rawAmount === 5 && pastaStd.rawAmount === 400) {
  console.log(" PASSED: Standard Carbonara 4 persone corretta (400g pasta, 5 tuorli)");
} else {
  console.error(" FAILED: Standard Carbonara errata!", yolkStd, pastaStd);
  process.exit(1);
}

console.log("\n[TEST 1B] Carbonara 4 persone - ABBONDANTE (130g/testa):");
const carb4_abb = window.RomaLabEngine.calculate('carbonara', 4, 4 * 130);
carb4_abb.ingredients.forEach(ing => {
  console.log(` - ${ing.name}: ${ing.formatted}`);
});
const pastaAbb = carb4_abb.ingredients.find(i => i.key === 'pasta');
const guancAbb = carb4_abb.ingredients.find(i => i.key === 'guanciale');
if (pastaAbb.rawAmount === 520 && Math.round(guancAbb.rawAmount) === 312) {
  console.log(" PASSED: Modalità Abbondante calcolata con successo (520g pasta, 312g guanciale)");
} else {
  console.error(" FAILED: Modalità Abbondante errata!", pastaAbb, guancAbb);
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

// 3. Test All 11 Roman Classic Recipes Across All 8 Supported World Languages
console.log("\n[TEST 3] Auditing all 11 classic recipes across 8 languages:");
const languagesToTest = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ja', 'zh'];
const all11Recipes = [
  // Primi
  'carbonara', 'cacioepepe', 'amatriciana', 'gricia',
  // Secondi
  'saltimbocca', 'coda', 'abbacchio',
  // Contorni & Fritti
  'carciofigiudia', 'carciofiromana', 'suppli',
  // Dolci
  'maritozzo'
];

languagesToTest.forEach(langCode => {
  window.I18N.setLanguage(langCode);
  all11Recipes.forEach(rId => {
    const res = window.RomaLabEngine.calculate(rId, 3);
    if (!res || !res.name || res.ingredients.length === 0) {
      console.error(` FAILED: Calculation failed for ${langCode} on recipe ${rId}`);
      process.exit(1);
    }
  });
  console.log(` ✅ ${langCode.toUpperCase()}: All 11 recipes parsed & calculated cleanly (${window.I18N.t('appName')})`);
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

console.log("\n=== ALL 11 RECIPES & ENGINE TESTS PASSED! ===");
