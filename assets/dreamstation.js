/**
 * DREAMSTATION ESPORTS — KINETIC APEX CORE JS
 * assets/dreamstation.js · v2.0 · March 2026
 *
 * Rules:
 * - Vanilla ES6+ only. No libraries.
 * - No window.addEventListener('scroll') — IntersectionObserver only.
 * - Max single animation: 400ms.
 * - Target bundle: < 50KB gzipped.
 * - All initialisers called on DOMContentLoaded.
 */

'use strict';

/* ── 1. NAV SCROLL BEHAVIOUR ─────────────────────────────────────────────── */
/**
 * Toggles .is-scrolled on .ds-nav when user scrolls past the sentinel element.
 * Uses IntersectionObserver — no scroll event listeners.
 */
function initNavScrollBehaviour() {
  const nav = document.querySelector('.ds-nav');
  if (!nav) return;

  // Sentinel element — a zero-height div at the very top of the page
  let sentinel = document.getElementById('ds-nav-sentinel');
  if (!sentinel) {
    sentinel = document.createElement('div');
    sentinel.id = 'ds-nav-sentinel';
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:80px;pointer-events:none;';
    document.body.prepend(sentinel);
  }

  const observer = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('is-scrolled', !entry.isIntersecting),
    { threshold: 0 }
  );
  observer.observe(sentinel);
}


/* ── 2. MOBILE NAV OVERLAY ───────────────────────────────────────────────── */
/**
 * Opens/closes the full-screen mobile nav overlay.
 * - Toggles aria-expanded on hamburger button.
 * - Traps focus within the overlay when open.
 * - Closes on Escape key.
 * - Returns focus to hamburger on close.
 */
function initMobileNav() {
  const hamburger = document.querySelector('.ds-nav__hamburger');
  const overlay   = document.querySelector('.ds-nav__overlay');
  if (!hamburger || !overlay) return;

  const focusableSelectors = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled])',
    'select:not([disabled])', 'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(', ');

  function getFocusable() {
    return Array.from(overlay.querySelectorAll(focusableSelectors));
  }

  function openOverlay() {
    overlay.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus first focusable element inside overlay
    const focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closeOverlay() {
    overlay.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    isOpen ? closeOverlay() : openOverlay();
  });

  // Escape key closes overlay
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeOverlay();
    }
  });

  // Focus trap inside overlay
  overlay.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Close on overlay link click (navigation)
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeOverlay);
  });
}


/* ── 3. SCROLL ANIMATIONS ───────────────────────────────────────────────── */
/**
 * Adds .is-visible to .ds-animate-in elements when they enter the viewport.
 * Fires once per element, then unobserves.
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.ds-animate-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}


/* ── 4. TICKER PAUSE-ON-HOVER ───────────────────────────────────────────── */
/**
 * CSS handles the pause via animation-play-state: paused on :hover.
 * This JS block handles touch-start/end for mobile users.
 */
function initTickerPause() {
  const tracks = document.querySelectorAll('.ds-ticker__track');
  tracks.forEach(track => {
    track.addEventListener('touchstart', () => {
      track.style.animationPlayState = 'paused';
    }, { passive: true });
    track.addEventListener('touchend', () => {
      track.style.animationPlayState = 'running';
    }, { passive: true });
  });
}


/* ── 5. FORM VALIDATION ──────────────────────────────────────────────────── */
/**
 * Adds .is-error class and aria-describedby on DS form fields when invalid.
 * Works on any form with data-ds-validate attribute.
 */
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-ds-validate]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      let hasErrors = false;
      const fields = form.querySelectorAll('.ds-input[required], .ds-textarea[required], .ds-select[required]');

      fields.forEach(field => {
        const errorEl = form.querySelector(`[data-error-for="${field.id}"]`);
        if (!field.value.trim()) {
          field.classList.add('is-error');
          if (errorEl) {
            errorEl.textContent = 'This field is required.';
            field.setAttribute('aria-describedby', errorEl.id);
          }
          hasErrors = true;
        } else {
          field.classList.remove('is-error');
          if (errorEl) errorEl.textContent = '';
        }

        // Email validation
        if (field.type === 'email' && field.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(field.value.trim())) {
            field.classList.add('is-error');
            if (errorEl) errorEl.textContent = 'Enter a valid email address.';
            hasErrors = true;
          }
        }
      });

      if (hasErrors) {
        e.preventDefault();
        // Focus the first error field
        const firstError = form.querySelector('.ds-input.is-error, .ds-textarea.is-error');
        if (firstError) firstError.focus();
      }
    });

    // Clear error on input
    form.querySelectorAll('.ds-input, .ds-textarea, .ds-select').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('is-error');
      });
    });
  });
}


/* ── 6. INIT ─────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initNavScrollBehaviour();
  initMobileNav();
  initScrollAnimations();
  initTickerPause();
  initFormValidation();
});


/* ── 7. MERCH AJAX ADD-TO-CART ───────────────────────────────────────────── */
/**
 * Delegated click handler for .ds-merch-entry__tile-atc buttons.
 * Uses native Shopify /cart/add.js endpoint.
 * Dispatches cart:refresh for native cart drawer/icon update.
 * No window.scroll — no external libraries.
 */
document.addEventListener('click', function(e) {
  const btn = e.target.closest('[data-variant-id]');
  if (!btn) return;
  e.preventDefault();
  const variantId = btn.dataset.variantId;
  if (!variantId) return;

  btn.setAttribute('aria-busy', 'true');
  btn.textContent = 'ADDING\u2026';

  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({ id: variantId, quantity: 1 })
  })
  .then(function(r) { return r.json(); })
  .then(function() {
    btn.textContent = 'ADDED \u2713';
    btn.removeAttribute('aria-busy');
    // Dispatch Shopify cart:refresh event for native cart drawer/icon update
    document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
    setTimeout(function() { btn.textContent = 'ADD TO CART'; }, 2000);
  })
  .catch(function() {
    btn.textContent = 'ERROR \u2014 TRY AGAIN';
    btn.removeAttribute('aria-busy');
    setTimeout(function() { btn.textContent = 'ADD TO CART'; }, 2000);
  });
});


/* === T23 ADDITIONS TO dreamstation.js ===
 * Results Page — ds-results-page.liquid · T23
 *
 * 1. initResultsYearFilter — Year tab click → show/hide tbody rows by data-year.
 * 2. initResultsSort       — Sort button click → reorder tbody rows by data-date (ISO).
 *
 * Rules:
 * - No window.addEventListener. No scroll listeners.
 * - Click events only.
 * - Vanilla ES6+ — no libraries.
 * - IntersectionObserver for .ds-animate-in handled by existing initScrollAnimations().
 */

/* ── T23-1. YEAR FILTER TABS ── */
/**
 * Attaches click handlers to all .ds-results-tabs__tab buttons.
 * Active tab receives is-active class and aria-selected="true".
 * Rows with matching data-year are shown; non-matching rows are hidden via aria-hidden.
 * "all" tab restores all rows.
 */
function initResultsYearFilter() {
  const tabList = document.querySelector('.ds-results-tabs');
  if (!tabList) return;

  const tabs  = tabList.querySelectorAll('.ds-results-tabs__tab');
  const tbody = document.getElementById('results-tbody');
  if (!tabs.length || !tbody) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedYear = tab.dataset.filterYear;

      // Update tab active state
      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      // Show / hide rows
      const rows = tbody.querySelectorAll('.ds-results-table__row');
      rows.forEach(row => {
        if (selectedYear === 'all' || row.dataset.year === selectedYear) {
          row.removeAttribute('aria-hidden');
        } else {
          row.setAttribute('aria-hidden', 'true');
        }
      });
    });
  });
}


/* ── T23-2. SORT TOGGLE ── */
/**
 * Attaches a click handler to .ds-results-table-section__sort-btn.
 * Toggles data-sort-dir between "desc" (newest first) and "asc" (oldest first).
 * Reorders all <tr> rows in #results-tbody by their data-date attribute (ISO date string).
 * Uses DocumentFragment for a single reflow.
 */
function initResultsSort() {
  const sortBtn = document.querySelector('.ds-results-table-section__sort-btn[data-sort="date"]');
  if (!sortBtn) return;

  const tbody = document.getElementById('results-tbody');
  if (!tbody) return;

  sortBtn.addEventListener('click', () => {
    const currentDir = sortBtn.dataset.sortDir || 'desc';
    const nextDir    = currentDir === 'desc' ? 'asc' : 'desc';

    sortBtn.dataset.sortDir = nextDir;
    sortBtn.textContent     = nextDir === 'desc' ? 'NEWEST FIRST' : 'OLDEST FIRST';

    // Collect all rows (including hidden ones — filter state is preserved via aria-hidden)
    const rows = Array.from(tbody.querySelectorAll('.ds-results-table__row'));

    rows.sort((a, b) => {
      const dateA = a.dataset.date || '';
      const dateB = b.dataset.date || '';
      if (nextDir === 'asc') {
        return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
      }
      return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
    });

    // Reattach in sorted order using a fragment (single reflow)
    const fragment = document.createDocumentFragment();
    rows.forEach(row => fragment.appendChild(row));
    tbody.appendChild(fragment);
  });
}


/* ── T23 DOMContentLoaded BOOTSTRAP ── */
document.addEventListener('DOMContentLoaded', () => {
  initResultsYearFilter();
  initResultsSort();
});
