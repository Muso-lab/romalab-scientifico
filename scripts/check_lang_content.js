global.window = global;
global.localStorage = { getItem: () => null, setItem: () => {} };
global.document = { documentElement: { lang: 'it' } };
global.navigator = { language: 'en-US' };

require('../js/i18n.js');
const dict = window.I18N.dict;

['en', 'es', 'fr', 'de', 'pt', 'ja', 'zh'].forEach(l => {
  const c = dict[l].recipes.carbonara;
  const s = dict[l].recipes.saltimbocca;
  console.log(`=== LANG: ${l} ===`);
  console.log('carbonara step 0:', c.steps ? c.steps[0].title : 'no steps');
  console.log('saltimbocca step 0:', s.steps ? s.steps[0].title : 'no steps');
  console.log('saltimbocca scienceTip:', s.scienceTip ? s.scienceTip.slice(0, 50) : 'none');
  console.log('coda step 0:', dict[l].recipes.coda.steps[0].title);
  console.log('suppli step 0:', dict[l].recipes.suppli.steps[0].title);
});
