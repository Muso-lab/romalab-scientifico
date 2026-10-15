/**
 * RomaLab Scientifico - UI Application Controller
 * Handles interactive recipes, portion calculators, live timers, design system harmony & multi-language
 */

(function () {
  'use strict';

  // State
  let currentRecipe = 'carbonara';
  let currentCategory = 'all';
  let portionSize = 'standard'; // 'standard' (100g) | 'abbondante' (130g)
  let servings = 4;
  let currentLevel = 'pro'; // 'pro' | 'easy'
  let activeTimers = {};

  // Audio Context for countdown alarm
  let audioCtx = null;
  function playAlarmBeep() {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      
      const now = audioCtx.currentTime;
      // 3 crisp culinary beeps
      [0, 0.25, 0.5].forEach(delay => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now + delay); // A5 note
        gain.gain.setValueAtTime(0.2, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.18);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.2);
      });
    } catch (e) {
      console.warn('Audio not available', e);
    }
  }

  // DOM Elements
  const categoryPills = document.querySelectorAll('.category-pill');
  const recipeChips = document.querySelectorAll('.recipe-chip');
  const portionSizeRow = document.getElementById('portionSizeRow');
  const portionSizeBtns = document.querySelectorAll('.portion-size-btn');

  const servingsDisplay = document.getElementById('servingsDisplay');
  const servingsMinus = document.getElementById('servingsMinus');
  const servingsPlus = document.getElementById('servingsPlus');
  const servingsHint = document.getElementById('servingsHint');
  const ingredientList = document.getElementById('ingredientList');
  const stepsList = document.getElementById('stepsList');
  
  const modeEasyBtn = document.getElementById('modeEasyBtn');
  const modeProBtn = document.getElementById('modeProBtn');
  const modeDescriptionBanner = document.getElementById('modeDescriptionBanner');
  const modeRecipeTipCard = document.getElementById('modeRecipeTipCard');

  const recipeHeroTitle = document.getElementById('recipeHeroTitle');
  const recipeHeroDesc = document.getElementById('recipeHeroDesc');
  const recipeMetaOrigin = document.getElementById('recipeMetaOrigin');
  const recipeMetaDiff = document.getElementById('recipeMetaDiff');
  const recipeMetaEmulsion = document.getElementById('recipeMetaEmulsion');
  const thermalExplanationText = document.getElementById('thermalExplanationText');
  const tempTargetDisplay = document.getElementById('tempTargetDisplay');

  const langToggleBtn = document.getElementById('langToggleBtn');
  const currentLangLabel = document.getElementById('currentLangLabel');
  const langModal = document.getElementById('langModal');
  const closeLangModalBtn = document.getElementById('closeLangModalBtn');
  const langOptionsGrid = document.getElementById('langOptionsGrid');

  const unitToggleBtn = document.getElementById('unitToggleBtn');
  const currentUnitLabel = document.getElementById('currentUnitLabel');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  
  const troubleshootBtn = document.getElementById('troubleshootBtn');
  const troubleshootModal = document.getElementById('troubleshootModal');
  const closeTroubleshootBtn = document.getElementById('closeTroubleshootBtn');

  const bottomNavBtns = document.querySelectorAll('.mobile-nav-btn');

  // --- RENDERING FUNCTIONS ---

  function renderRecipe() {
    const lang = window.I18N.currentLang;
    const dict = window.I18N.dict;
    const recipeData = (dict[lang] && dict[lang].recipes && dict[lang].recipes[currentRecipe]) || (dict['it'] && dict['it'].recipes && dict['it'].recipes[currentRecipe]);
    if (!recipeData) return;

    const isPrimo = (recipeData.category || 'primi') === 'primi';

    // 0. Update Level Mode Banner
    if (modeDescriptionBanner) {
      modeDescriptionBanner.textContent = currentLevel === 'easy' 
        ? window.I18N.t('modeEasyDesc') 
        : window.I18N.t('modeProDesc');
      modeDescriptionBanner.classList.toggle('easy-active', currentLevel === 'easy');
    }

    // 0b. Update Recipe-Specific Mode Tip Card (Easy vs Pro)
    if (modeRecipeTipCard) {
      modeRecipeTipCard.className = `mode-recipe-tip-card ${currentLevel}`;
      const tipText = currentLevel === 'easy'
        ? (recipeData.easyTip || window.I18N.t('modeEasyDesc'))
        : (recipeData.proTip || window.I18N.t('modeProDesc'));
      const icon = currentLevel === 'easy' ? '⭐' : '🏆';
      modeRecipeTipCard.innerHTML = `<span style="font-size:1.25rem; flex-shrink:0;">${icon}</span><div>${tipText}</div>`;
    }

    // 1. Update Hero
    if (recipeHeroTitle) recipeHeroTitle.textContent = recipeData.name;
    if (recipeHeroDesc) recipeHeroDesc.textContent = recipeData.shortDesc;
    if (recipeMetaOrigin) recipeMetaOrigin.textContent = recipeData.origin;
    if (recipeMetaDiff) {
      recipeMetaDiff.textContent = currentLevel === 'easy' 
        ? window.I18N.t('modeEasyLabel') 
        : recipeData.difficulty;
    }

    // 2. Emulsion / Cooking Technique Target Windows
    let tempRangeText = '';
    if (currentRecipe === 'carbonara') {
      tempRangeText = window.I18N.formatTemp(58) + ' - ' + window.I18N.formatTemp(65);
    } else if (currentRecipe === 'cacioepepe') {
      tempRangeText = window.I18N.formatTemp(55) + ' - ' + window.I18N.formatTemp(62);
    } else if (currentRecipe === 'amatriciana' || currentRecipe === 'gricia') {
      tempRangeText = window.I18N.formatTemp(65) + ' - ' + window.I18N.formatTemp(75);
    } else if (currentRecipe === 'saltimbocca') {
      tempRangeText = window.I18N.formatTemp(155) + ' - ' + window.I18N.formatTemp(165);
    } else if (currentRecipe === 'coda') {
      tempRangeText = window.I18N.formatTemp(80) + ' - ' + window.I18N.formatTemp(85);
    } else if (currentRecipe === 'abbacchio') {
      tempRangeText = window.I18N.formatTemp(220) + ' - ' + window.I18N.formatTemp(250);
    } else if (currentRecipe === 'carciofigiudia') {
      tempRangeText = window.I18N.formatTemp(140) + ' & ' + window.I18N.formatTemp(180);
    } else if (currentRecipe === 'carciofiromana') {
      tempRangeText = window.I18N.formatTemp(90) + ' - ' + window.I18N.formatTemp(95);
    } else if (currentRecipe === 'suppli') {
      tempRangeText = window.I18N.formatTemp(170) + ' - ' + window.I18N.formatTemp(175);
    } else if (currentRecipe === 'maritozzo') {
      tempRangeText = window.I18N.formatTemp(26) + '°C Liev. / ' + window.I18N.formatTemp(180) + ' Forno';
    } else {
      tempRangeText = 'Standard Chef';
    }

    if (tempTargetDisplay) tempTargetDisplay.textContent = tempRangeText;
    if (recipeMetaEmulsion) recipeMetaEmulsion.textContent = tempRangeText;
    if (thermalExplanationText) thermalExplanationText.textContent = recipeData.scienceTip;

    // 3. Portion Size Visibility & Calculation
    if (portionSizeRow) {
      portionSizeRow.classList.toggle('hidden', !isPrimo);
    }

    let calc;
    if (isPrimo) {
      const pastaGramsPerPerson = portionSize === 'abbondante' ? 130 : 100;
      const customPastaWeight = servings * pastaGramsPerPerson;
      calc = window.RomaLabEngine.calculate(currentRecipe, servings, customPastaWeight);

      if (servingsHint) {
        const formattedAmount = window.I18N.formatWeight(pastaGramsPerPerson);
        servingsHint.textContent = portionSize === 'abbondante'
          ? window.I18N.t('servingsHintAbbondante', { amount: formattedAmount })
          : window.I18N.t('servingsHint', { amount: formattedAmount });
      }
    } else {
      calc = window.RomaLabEngine.calculate(currentRecipe, servings);
      if (servingsHint) {
        servingsHint.textContent = window.I18N.t('servings') + ': ' + servings + ' porzioni';
      }
    }

    if (servingsDisplay) servingsDisplay.textContent = servings;

    // 4. Render Ingredients
    if (ingredientList) {
      ingredientList.innerHTML = '';
      calc.ingredients.forEach(ing => {
        const item = document.createElement('div');
        item.className = 'ingredient-item';
        
        let icon = '🔸';
        const k = ing.key.toLowerCase();
        if (k.includes('pasta')) icon = '🍝';
        else if (k.includes('guanciale') || k.includes('prosciutto') || k.includes('lard')) icon = '🥓';
        else if (k.includes('yolks') || k.includes('egg')) icon = '🍳';
        else if (k.includes('pecorino') || k.includes('mozzarella') || k.includes('cheese')) icon = '🧀';
        else if (k.includes('pepper') || k.includes('salt')) icon = '🧂';
        else if (k.includes('pomodoro') || k.includes('tomato')) icon = '🍅';
        else if (k.includes('vino') || k.includes('wine')) icon = '🍷';
        else if (k.includes('water')) icon = '💧';
        else if (k.includes('chili')) icon = '🌶️';
        else if (k.includes('veal') || k.includes('meat') || k.includes('tail')) icon = '🥩';
        else if (k.includes('sage') || k.includes('mint') || k.includes('rosemary') || k.includes('parsley')) icon = '🌿';
        else if (k.includes('butter')) icon = '🧈';
        else if (k.includes('celery') || k.includes('artichoke')) icon = '🥬';
        else if (k.includes('cocoa')) icon = '🍫';
        else if (k.includes('pinenuts')) icon = '🌰';
        else if (k.includes('chops')) icon = '🍖';
        else if (k.includes('rice')) icon = '🍚';
        else if (k.includes('flour') || k.includes('breadcrumbs')) icon = '🌾';
        else if (k.includes('cream') || k.includes('milk')) icon = '🥛';
        else if (k.includes('oil')) icon = '🫒';
        else if (k.includes('lemon')) icon = '🍋';

        let easyHint = '';
        if (currentLevel === 'easy') {
          if (ing.key === 'yolks') {
            easyHint = `<div class="ing-easy-hint">${window.I18N.t('hintYolks')}</div>`;
          } else if (ing.key === 'pecorino') {
            easyHint = `<div class="ing-easy-hint">${window.I18N.t('hintPecorino')}</div>`;
          } else if (ing.key === 'water' && currentRecipe === 'cacioepepe') {
            easyHint = `<div class="ing-easy-hint">${window.I18N.t('hintWater')}</div>`;
          } else if (ing.key === 'guanciale') {
            easyHint = `<div class="ing-easy-hint">💡 Easy: Listarelle spesse 5-7mm a fuoco dolce per non seccare</div>`;
          } else if (ing.key === 'flour' && currentRecipe === 'saltimbocca') {
            easyHint = `<div class="ing-easy-hint">💡 Easy: Infarina solo il fondo carne, mai salvia o prosciutto</div>`;
          } else if (ing.key === 'rice' && currentRecipe === 'suppli') {
            easyHint = `<div class="ing-easy-hint">💡 Easy: Usa riso freddo di frigorifero per non farlo aprire</div>`;
          } else if (ing.key === 'cream' && currentRecipe === 'maritozzo') {
            easyHint = `<div class="ing-easy-hint">💡 Easy: Ciotola e fruste fredde di freezer per montare subito</div>`;
          } else if (ing.key === 'artichoke') {
            easyHint = `<div class="ing-easy-hint">💡 Easy: Rimuovi le prime 4-5 file di foglie dure e usa acqua acidulata</div>`;
          }
        }

        item.innerHTML = `
          <div class="ing-name-wrap">
            <span class="ing-icon">${icon}</span>
            <div>
              <div class="ing-name">${ing.name}</div>
              ${easyHint}
            </div>
          </div>
          <span class="ing-amount">${ing.formatted}</span>
        `;
        ingredientList.appendChild(item);
      });
    }

    // 5. Render Steps & Live Timers
    if (stepsList) {
      stepsList.innerHTML = '';
      recipeData.steps.forEach((step, idx) => {
        const stepCard = document.createElement('div');
        stepCard.className = 'step-card';
        stepCard.id = `step_card_${idx}`;

        const timerId = `${currentRecipe}_step_${idx}`;
        const totalSec = (step.timerMin || 5) * 60;
        if (!activeTimers[timerId]) {
          activeTimers[timerId] = {
            totalSec: totalSec,
            remainingSec: totalSec,
            interval: null,
            running: false
          };
        } else if (activeTimers[timerId].running) {
          stepCard.classList.add('running-timer');
        }

        stepCard.innerHTML = `
          <div class="step-header">
            <div class="step-title-wrap">
              <span class="step-badge">${idx + 1}</span>
              <span class="step-title">${step.title}</span>
            </div>
          </div>
          <p class="step-desc">${step.desc}</p>
          <div class="step-timer-row">
            <span class="timer-countdown" id="timer_disp_${timerId}">${formatTimerDisplay(activeTimers[timerId].remainingSec)}</span>
            <div class="timer-btn-group">
              <button type="button" class="timer-btn" data-timer-action="start" data-timer-id="${timerId}">▶ ${window.I18N.t('start')}</button>
              <button type="button" class="timer-btn" data-timer-action="pause" data-timer-id="${timerId}">⏸ ${window.I18N.t('pause')}</button>
              <button type="button" class="timer-btn" data-timer-action="reset" data-timer-id="${timerId}">🔄 ${window.I18N.t('reset')}</button>
            </div>
          </div>
        `;
        stepsList.appendChild(stepCard);
      });

      // Attach timer actions
      stepsList.querySelectorAll('[data-timer-action]').forEach(btn => {
        btn.addEventListener('click', handleTimerAction);
      });
    }
  }

  function formatTimerDisplay(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function handleTimerAction(e) {
    const action = e.target.getAttribute('data-timer-action');
    const timerId = e.target.getAttribute('data-timer-id');
    const tState = activeTimers[timerId];
    if (!tState) return;

    const dispEl = document.getElementById(`timer_disp_${timerId}`);
    const parentCard = e.target.closest('.step-card');

    if (action === 'start') {
      if (tState.running) return;
      tState.running = true;
      if (parentCard) parentCard.classList.add('running-timer');

      tState.interval = setInterval(() => {
        if (tState.remainingSec > 0) {
          tState.remainingSec--;
          if (dispEl) dispEl.textContent = formatTimerDisplay(tState.remainingSec);
        } else {
          clearInterval(tState.interval);
          tState.running = false;
          if (parentCard) parentCard.classList.remove('running-timer');
          playAlarmBeep();
          if (dispEl) dispEl.textContent = `🔔 ${window.I18N.t('done')}`;
        }
      }, 1000);
    } else if (action === 'pause') {
      if (tState.interval) clearInterval(tState.interval);
      tState.running = false;
      if (parentCard) parentCard.classList.remove('running-timer');
    } else if (action === 'reset') {
      if (tState.interval) clearInterval(tState.interval);
      tState.running = false;
      if (parentCard) parentCard.classList.remove('running-timer');
      tState.remainingSec = tState.totalSec;
      if (dispEl) dispEl.textContent = formatTimerDisplay(tState.remainingSec);
    }
  }

  // --- LANGUAGE MODAL RENDERING ---
  function renderLangModal() {
    if (!langOptionsGrid) return;
    langOptionsGrid.innerHTML = '';

    window.I18N.languages.forEach(l => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-card-btn' + (l.code === window.I18N.currentLang ? ' active' : '');
      btn.setAttribute('data-lang-code', l.code);
      btn.innerHTML = `
        <div class="lang-card-left">
          <span class="lang-card-flag">${l.flag}</span>
          <div class="lang-card-names">
            <span class="lang-card-native">${l.nativeName}</span>
            <span class="lang-card-intl">${l.name} (${l.code.toUpperCase()})</span>
          </div>
        </div>
        <span class="lang-card-check">✓</span>
      `;
      btn.addEventListener('click', () => {
        window.I18N.setLanguage(l.code);
        closeLangModal();
        updateAllTexts();
      });
      langOptionsGrid.appendChild(btn);
    });
  }

  function openLangModal() {
    renderLangModal();
    if (langModal) langModal.classList.remove('hidden');
  }

  function closeLangModal() {
    if (langModal) langModal.classList.add('hidden');
  }

  // --- I18N REFRESH ---
  function updateAllTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = window.I18N.t(key);
      if (translation && typeof translation === 'string') {
        el.textContent = translation;
      }
    });

    if (currentLangLabel) {
      currentLangLabel.textContent = window.I18N.currentLang.toUpperCase();
    }
    if (currentUnitLabel) {
      currentUnitLabel.textContent = window.I18N.currentUnit === 'metric' ? '°C / g' : '°F / oz';
    }

    renderRecipe();
  }

  // --- INTERSECTION OBSERVER FOR BOTTOM NAV ---
  function setupScrollSpy() {
    const sections = [
      { id: 'calculatorSection', tab: 'calculatorSection' },
      { id: 'thermalSection', tab: 'thermalSection' },
      { id: 'liveKitchenSection', tab: 'liveKitchenSection' },
      { id: 'scienceSection', tab: 'scienceSection' },
      { id: 'emergencySection', tab: 'scienceSection' }
    ];

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const match = sections.find(s => s.id === entry.target.id);
          if (match) {
            bottomNavBtns.forEach(btn => {
              const tabTarget = btn.getAttribute('data-tab');
              btn.classList.toggle('active', tabTarget === match.tab);
            });
          }
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    });

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  }

  // --- EVENT LISTENERS ---

  // Category Filter Pills
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');

      let firstVisibleRecipe = null;
      recipeChips.forEach(chip => {
        const chipCat = chip.getAttribute('data-category');
        const visible = (currentCategory === 'all' || chipCat === currentCategory);
        chip.classList.toggle('hidden', !visible);
        if (visible && !firstVisibleRecipe) {
          firstVisibleRecipe = chip.getAttribute('data-recipe');
        }
      });

      // If active recipe is now hidden, select first visible
      const activeChip = document.querySelector(`.recipe-chip[data-recipe="${currentRecipe}"]`);
      if (activeChip && activeChip.classList.contains('hidden') && firstVisibleRecipe) {
        recipeChips.forEach(c => c.classList.remove('active'));
        const newActive = document.querySelector(`.recipe-chip[data-recipe="${firstVisibleRecipe}"]`);
        if (newActive) newActive.classList.add('active');
        currentRecipe = firstVisibleRecipe;
        renderRecipe();
      }
    });
  });

  // Recipe Selector Chips
  recipeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      recipeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentRecipe = chip.getAttribute('data-recipe');
      renderRecipe();
    });
  });

  // Portion Size Selector (Standard vs Abbondante)
  portionSizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      portionSizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      portionSize = btn.getAttribute('data-size');
      renderRecipe();
    });
  });

  // Servings Stepper
  if (servingsMinus) {
    servingsMinus.addEventListener('click', () => {
      if (servings > 1) {
        servings--;
        renderRecipe();
      }
    });
  }

  if (servingsPlus) {
    servingsPlus.addEventListener('click', () => {
      if (servings < 24) {
        servings++;
        renderRecipe();
      }
    });
  }

  // Level Mode Toggle (Easy vs Pro)
  if (modeEasyBtn && modeProBtn) {
    modeEasyBtn.addEventListener('click', () => {
      modeEasyBtn.classList.add('active');
      modeProBtn.classList.remove('active');
      currentLevel = 'easy';
      renderRecipe();
    });

    modeProBtn.addEventListener('click', () => {
      modeProBtn.classList.add('active');
      modeEasyBtn.classList.remove('active');
      currentLevel = 'pro';
      renderRecipe();
    });
  }

  // Language Modal Open & Close
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', openLangModal);
  }

  if (closeLangModalBtn) {
    closeLangModalBtn.addEventListener('click', closeLangModal);
  }

  if (langModal) {
    langModal.addEventListener('click', (e) => {
      if (e.target === langModal) closeLangModal();
    });
  }

  // Unit Toggle
  if (unitToggleBtn) {
    unitToggleBtn.addEventListener('click', () => {
      const nextUnit = window.I18N.currentUnit === 'metric' ? 'imperial' : 'metric';
      window.I18N.setUnit(nextUnit);
      updateAllTexts();
    });
  }

  // Theme Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      document.body.classList.toggle('light-mode', nextTheme === 'light');
      localStorage.setItem('romalab_theme', nextTheme);
    });
  }

  // Troubleshoot Modal & Live First Aid Guide
  function renderTroubleshootModal() {
    const list = document.getElementById('troubleshootModalList');
    if (!list || !window.I18N) return;
    const currentLang = window.I18N.currentLang || 'it';
    const dict = window.I18N.dict[currentLang] || window.I18N.dict['it'];
    const itDict = window.I18N.dict['it'];

    const troubleKeys = [
      { q: 'troubleCurdleTitle', a: 'troubleCurdleSol', icon: '🍳', badge: 'Carbonara' },
      { q: 'troubleClumpTitle', a: 'troubleClumpSol', icon: '🧀', badge: 'Cacio e Pepe' },
      { q: 'troubleGuancialeTitle', a: 'troubleGuancialeSol', icon: '🥓', badge: 'Guanciale' },
      { q: 'troubleSaltyTitle', a: 'troubleSaltySol', icon: '🧂', badge: 'Pecorino & Sale' },
      { q: 'troubleAcidTitle', a: 'troubleAcidSol', icon: '🍅', badge: 'Amatriciana' },
      { q: 'troubleSuppliTitle', a: 'troubleSuppliSol', icon: '🍘', badge: 'Supplì' },
      { q: 'troubleCarciofiTitle', a: 'troubleCarciofiSol', icon: '🪻', badge: 'Carciofi' },
      { q: 'troubleCodaTitle', a: 'troubleCodaSol', icon: '🥩', badge: 'Coda Vaccinara' },
      { q: 'troubleSaltimboccaTitle', a: 'troubleSaltimboccaSol', icon: '🌿', badge: 'Saltimbocca' },
      { q: 'troubleCreamTitle', a: 'troubleCreamSol', icon: '🥐', badge: 'Maritozzo Panna' }
    ];

    list.innerHTML = '';
    troubleKeys.forEach(item => {
      const qText = dict[item.q] || itDict[item.q];
      const aText = dict[item.a] || itDict[item.a];
      if (!qText) return;

      const card = document.createElement('div');
      card.className = 'trouble-card';
      card.innerHTML = `
        <div class="trouble-card-header">
          <span>${item.icon}</span>
          <span style="flex:1;">${qText}</span>
          <span style="font-size:0.7rem; font-weight:700; background:rgba(245,158,11,0.15); color:var(--accent); padding:2px 8px; border-radius:12px; white-space:nowrap;">${item.badge}</span>
        </div>
        <div class="trouble-card-body">${aText}</div>
      `;
      list.appendChild(card);
    });
  }

  if (troubleshootBtn && troubleshootModal) {
    troubleshootBtn.addEventListener('click', () => {
      renderTroubleshootModal();
      troubleshootModal.classList.remove('hidden');
    });
  }

  if (closeTroubleshootBtn && troubleshootModal) {
    closeTroubleshootBtn.addEventListener('click', () => {
      troubleshootModal.classList.add('hidden');
    });
  }

  if (troubleshootModal) {
    troubleshootModal.addEventListener('click', (e) => {
      if (e.target === troubleshootModal) troubleshootModal.classList.add('hidden');
    });
  }

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLangModal();
      if (troubleshootModal) troubleshootModal.classList.add('hidden');
    }
  });

  // Bottom Nav Smooth Scroll
  bottomNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bottomNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Initial Load
  window.addEventListener('DOMContentLoaded', () => {
    // Restore theme
    const savedTheme = localStorage.getItem('romalab_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.classList.toggle('light-mode', savedTheme === 'light');

    updateAllTexts();
    setupScrollSpy();

    // Dismiss splash screen smoothly
    setTimeout(() => {
      const splash = document.getElementById('splashScreen');
      if (splash) splash.classList.add('fade-out');
    }, 450);
  });

})();
