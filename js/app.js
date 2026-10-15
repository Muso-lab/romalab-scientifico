/**
 * RomaLab Scientifico - UI Application Controller
 * Handles interactive recipes, portion calculators, live timers, and i18n
 */

(function () {
  'use strict';

  // State
  let currentRecipe = 'carbonara';
  let servings = 4;
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
  const recipeChips = document.querySelectorAll('.recipe-chip');
  const servingsDisplay = document.getElementById('servingsDisplay');
  const servingsMinus = document.getElementById('servingsMinus');
  const servingsPlus = document.getElementById('servingsPlus');
  const ingredientList = document.getElementById('ingredientList');
  const stepsList = document.getElementById('stepsList');
  
  const recipeHeroTitle = document.getElementById('recipeHeroTitle');
  const recipeHeroDesc = document.getElementById('recipeHeroDesc');
  const recipeMetaOrigin = document.getElementById('recipeMetaOrigin');
  const recipeMetaDiff = document.getElementById('recipeMetaDiff');
  const thermalExplanationText = document.getElementById('thermalExplanationText');
  const tempTargetDisplay = document.getElementById('tempTargetDisplay');

  const langToggleBtn = document.getElementById('langToggleBtn');
  const currentLangLabel = document.getElementById('currentLangLabel');
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
    const recipeData = window.I18N.dict[lang].recipes[currentRecipe];
    if (!recipeData) return;

    // 1. Update Hero
    recipeHeroTitle.textContent = recipeData.name;
    recipeHeroDesc.textContent = recipeData.shortDesc;
    recipeMetaOrigin.textContent = recipeData.origin;
    recipeMetaDiff.textContent = recipeData.difficulty;

    if (currentRecipe === 'carbonara') {
      tempTargetDisplay.textContent = window.I18N.formatTemp(58) + ' - ' + window.I18N.formatTemp(65);
      thermalExplanationText.textContent = window.I18N.dict[lang].recipes.carbonara.scienceTip;
    } else if (currentRecipe === 'cacioepepe') {
      tempTargetDisplay.textContent = window.I18N.formatTemp(55) + ' - ' + window.I18N.formatTemp(62);
      thermalExplanationText.textContent = window.I18N.dict[lang].recipes.cacioepepe.scienceTip;
    } else {
      tempTargetDisplay.textContent = window.I18N.formatTemp(65) + ' - ' + window.I18N.formatTemp(75);
      thermalExplanationText.textContent = recipeData.scienceTip;
    }

    // 2. Calculate and render ingredients
    const calc = window.RomaLabEngine.calculate(currentRecipe, servings);
    servingsDisplay.textContent = servings;

    ingredientList.innerHTML = '';
    calc.ingredients.forEach(ing => {
      const item = document.createElement('div');
      item.className = 'ingredient-item';
      
      let icon = '🔸';
      if (ing.key.includes('pasta')) icon = '🍝';
      else if (ing.key.includes('guanciale')) icon = '🥓';
      else if (ing.key.includes('yolks')) icon = '🍳';
      else if (ing.key.includes('pecorino')) icon = '🧀';
      else if (ing.key.includes('pepper')) icon = '🧂';
      else if (ing.key.includes('pomodoro')) icon = '🍅';
      else if (ing.key.includes('vino')) icon = '🍷';
      else if (ing.key.includes('water')) icon = '💧';

      item.innerHTML = `
        <div class="ing-name-wrap">
          <span class="ing-icon">${icon}</span>
          <span class="ing-name">${ing.name}</span>
        </div>
        <span class="ing-amount">${ing.formatted}</span>
      `;
      ingredientList.appendChild(item);
    });

    // 3. Render Steps & Live Timers
    stepsList.innerHTML = '';
    recipeData.steps.forEach((step, idx) => {
      const stepCard = document.createElement('div');
      stepCard.className = 'step-card';
      stepCard.id = `step_${idx}`;

      const timerId = `${currentRecipe}_step_${idx}`;
      const totalSec = (step.timerMin || 5) * 60;
      if (!activeTimers[timerId]) {
        activeTimers[timerId] = {
          totalSec: totalSec,
          remainingSec: totalSec,
          interval: null,
          running: false
        };
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
            <button class="timer-btn" data-timer-action="start" data-timer-id="${timerId}">▶ ${window.I18N.t('start')}</button>
            <button class="timer-btn" data-timer-action="pause" data-timer-id="${timerId}">⏸ ${window.I18N.t('pause')}</button>
            <button class="timer-btn" data-timer-action="reset" data-timer-id="${timerId}">🔄 ${window.I18N.t('reset')}</button>
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

    if (action === 'start') {
      if (tState.running) return;
      tState.running = true;
      tState.interval = setInterval(() => {
        if (tState.remainingSec > 0) {
          tState.remainingSec--;
          if (dispEl) dispEl.textContent = formatTimerDisplay(tState.remainingSec);
        } else {
          clearInterval(tState.interval);
          tState.running = false;
          playAlarmBeep();
          if (dispEl) dispEl.textContent = `🔔 ${window.I18N.t('done')}!`;
        }
      }, 1000);
    } else if (action === 'pause') {
      if (tState.interval) clearInterval(tState.interval);
      tState.running = false;
    } else if (action === 'reset') {
      if (tState.interval) clearInterval(tState.interval);
      tState.running = false;
      tState.remainingSec = tState.totalSec;
      if (dispEl) dispEl.textContent = formatTimerDisplay(tState.remainingSec);
    }
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

    currentLangLabel.textContent = window.I18N.currentLang.toUpperCase();
    currentUnitLabel.textContent = window.I18N.currentUnit === 'metric' ? 'Metric (°C/g)' : 'Imperial (°F/oz)';

    renderRecipe();
  }

  // --- EVENT LISTENERS ---

  // Recipe Selector
  recipeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      recipeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentRecipe = chip.getAttribute('data-recipe');
      renderRecipe();
    });
  });

  // Servings Stepper
  servingsMinus.addEventListener('click', () => {
    if (servings > 1) {
      servings--;
      renderRecipe();
    }
  });

  servingsPlus.addEventListener('click', () => {
    if (servings < 24) {
      servings++;
      renderRecipe();
    }
  });

  // Language Toggle
  langToggleBtn.addEventListener('click', () => {
    const nextLang = window.I18N.currentLang === 'it' ? 'en' : 'it';
    window.I18N.setLanguage(nextLang);
    updateAllTexts();
  });

  // Unit Toggle
  unitToggleBtn.addEventListener('click', () => {
    const nextUnit = window.I18N.currentUnit === 'metric' ? 'imperial' : 'metric';
    window.I18N.setUnit(nextUnit);
    updateAllTexts();
  });

  // Theme Toggle
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.body.classList.toggle('light-mode', nextTheme === 'light');
    localStorage.setItem('romalab_theme', nextTheme);
  });

  // Troubleshoot Modal
  troubleshootBtn.addEventListener('click', () => {
    troubleshootModal.classList.remove('hidden');
  });

  closeTroubleshootBtn.addEventListener('click', () => {
    troubleshootModal.classList.add('hidden');
  });

  troubleshootModal.addEventListener('click', (e) => {
    if (e.target === troubleshootModal) troubleshootModal.classList.add('hidden');
  });

  // Bottom Nav
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

    // Dismiss splash screen
    setTimeout(() => {
      const splash = document.getElementById('splashScreen');
      if (splash) splash.classList.add('fade-out');
    }, 450);
  });

})();
