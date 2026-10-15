global.window = global;
global.localStorage = {
  data: {},
  getItem(k) { return this.data[k] || null; },
  setItem(k, v) { this.data[k] = String(v); }
};
global.document = { documentElement: { lang: 'it' } };
global.navigator = { language: 'en-US' };

require('../js/i18n.js');
const dict = window.I18N.dict;
const langs = Object.keys(dict);

console.log('Registered languages:', langs);

const itKeys = Object.keys(dict.it);
const itRecipes = Object.keys(dict.it.recipes);

langs.forEach(lang => {
  const missingKeys = itKeys.filter(k => k !== 'recipes' && (dict[lang][k] === undefined || dict[lang][k] === ''));
  const missingRecipes = itRecipes.filter(r => !dict[lang].recipes || !dict[lang].recipes[r]);
  
  let untranslatedRecipes = [];
  if (lang !== 'it' && dict[lang].recipes) {
    itRecipes.forEach(r => {
      const rec = dict[lang].recipes[r];
      if (!rec) return;
      if (rec.shortDesc === dict.it.recipes[r].shortDesc || rec.scienceTip === dict.it.recipes[r].scienceTip) {
        untranslatedRecipes.push(r);
      }
    });
  }
  
  console.log(`Lang [${lang}]: missingKeys=${missingKeys.length}, missingRecipes=${missingRecipes.length}, untranslatedRecipes=${untranslatedRecipes.length} (${untranslatedRecipes.join(',')})`);
});
