/* ═══════════════════════════════════════════════════════
   AI Strategy & Ethics Presentation Engine
   Author: Stephen Rando PhD — app.js
   ═══════════════════════════════════════════════════════ */

'use strict';

// SVG icons
const ICON = {
  check: `<svg class="bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrow: `<svg class="bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  dot:   `<svg class="bullet-icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/></svg>`,
  star:  `<svg class="bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
};

const ICONS = [ICON.arrow, ICON.check, ICON.dot, ICON.star, ICON.arrow, ICON.check];

// ─── Slide renderers ────────────────────────────────────
function renderOrbs() {
  return `<div class="orb orb-teal"></div><div class="orb orb-blue"></div>`;
}

function renderBullets(bullets, cols = 1) {
  if (!bullets || !bullets.length) return '';
  const colClass = cols === 2 ? 'cols-2' : cols === 3 ? 'cols-3' : '';
  return `<div class="bullets-grid ${colClass}">
    ${bullets.map((b, i) => `
      <div class="bullet-card" data-animate="fade-up" data-delay="${i + 3}">
        ${ICONS[i % ICONS.length]}
        <span class="bullet-text">${b}</span>
      </div>`).join('')}
  </div>`;
}

function renderTitle(slide, idx, total) {
  return `
  <div class="slide slide-title" data-slide="${idx}">
    ${renderOrbs()}
    <div class="orb orb-green"></div>
    <div class="slide-inner" style="text-align:left;max-width:900px;">
      <div class="title-eyebrow" data-animate data-delay="1">
        ${slide.headline.split(':')[0] || 'Presentation'}
      </div>
      <h1 data-animate data-delay="2">
        <span class="grad">${slide.headline}</span>
      </h1>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3">${slide.subheadline}</p>` : ''}
      <div class="title-divider" data-animate="scale" data-delay="4"></div>
      <div data-animate data-delay="5">
        <div class="presenter-badge">
          <div class="presenter-dot"></div>
          ${slide.presenter || 'Presenter'}
        </div>
      </div>
      <div class="nav-hint" data-animate data-delay="6">
        Press <span class="key-badge">Space</span> or <span class="key-badge">→</span> to advance
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderSection(slide, idx, total) {
  return `
  <div class="slide slide-section" data-slide="${idx}">
    ${renderOrbs()}
    <div class="section-number" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</div>
    <div class="slide-inner" style="text-align:center;position:relative;z-index:2;">
      <div class="slide-label" style="justify-content:center;" data-animate data-delay="1">Module</div>
      <h2 data-animate data-delay="2"><span class="grad">${slide.headline}</span></h2>
      <div class="section-line" data-animate="scale" data-delay="3"></div>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="4">${slide.subheadline}</p>` : ''}
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderContent(slide, idx, total) {
  // Matrix slide detection
  if (slide.quadrants) return renderMatrix(slide, idx, total);

  const cols = slide.bullets && slide.bullets.length > 4 ? 2 : 1;
  return `
  <div class="slide" data-slide="${idx}">
    ${renderOrbs()}
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Insight</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3">${slide.subheadline}</p>` : ''}
      ${renderBullets(slide.bullets, cols)}
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderMatrix(slide, idx, total) {
  const cells = slide.quadrants || [];
  const colorMap = ['teal', 'blue', 'emerald', 'muted'];
  return `
  <div class="slide" data-slide="${idx}">
    ${renderOrbs()}
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Framework</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3" style="margin-bottom:4px;">${slide.subheadline}</p>` : ''}
      <div style="position:relative;margin-top:16px;" data-animate="fade-up" data-delay="4">
        <div class="matrix-grid">
          ${cells.map((c, i) => `
            <div class="matrix-cell">
              <div>
                <div class="cell-label">${c.label}</div>
                <div class="cell-sublabel">${c.sublabel}</div>
                <div class="cell-desc">${c.desc}</div>
              </div>
            </div>`).join('')}
        </div>
        <div class="matrix-axes">
          <span>↑ Tacit Knowledge</span>
          <span style="color:var(--divider);">Cost of Error</span>
          <span>↑ High</span>
        </div>
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderBeforeAfter(slide, idx, total) {
  const L = slide.left || {};
  const R = slide.right || {};
  return `
  <div class="slide" data-slide="${idx}">
    ${renderOrbs()}
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Comparison</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3">${slide.subheadline}</p>` : ''}
      <div class="cols-container">
        <div class="col-card col-left" data-animate="fade-left" data-delay="4">
          <h3 class="col-title">${L.title || ''}</h3>
          ${(L.bullets || []).map(b => `<div class="col-bullet">${b}</div>`).join('')}
        </div>
        <div class="col-card col-right" data-animate="fade-right" data-delay="4">
          <h3 class="col-title">${R.title || ''}</h3>
          ${(R.bullets || []).map(b => `<div class="col-bullet">${b}</div>`).join('')}
        </div>
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderClosing(slide, idx, total) {
  return `
  <div class="slide slide-closing" data-slide="${idx}">
    ${renderOrbs()}
    <div class="orb orb-green"></div>
    <div class="slide-inner" style="text-align:center;">
      <div class="slide-label" style="justify-content:center;" data-animate data-delay="1">Closing</div>
      <h2 data-animate data-delay="2"><span class="grad">${slide.headline}</span></h2>
      <div class="closing-line" data-animate="scale" data-delay="3"></div>
      ${slide.subheadline ? `<p class="closing-quote" data-animate data-delay="4">"${slide.subheadline}"</p>` : ''}
      <div data-animate data-delay="5">
        <div class="closing-presenter">
          <div class="closing-presenter-dot"></div>
          ${slide.presenter || 'Stephen Rando PhD'}
          <div class="closing-presenter-dot"></div>
        </div>
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderSlide(slide, idx, total) {
  switch (slide.type) {
    case 'title':       return renderTitle(slide, idx, total);
    case 'section':     return renderSection(slide, idx, total);
    case 'beforeAfter': return renderBeforeAfter(slide, idx, total);
    case 'closing':     return renderClosing(slide, idx, total);
    default:            return renderContent(slide, idx, total);
  }
}

// ─── Main app ─────────────────────────────────────────
let slides = [];
let currentSlide = 0;

async function init() {
  // Compute nav offset
  const nav = document.getElementById('nav');
  const navH = nav ? nav.offsetHeight : 56;
  document.documentElement.style.setProperty('--topOffset', navH + 'px');

  // Load content
  let data;
  try {
    const r = await fetch('./content.json');
    data = await r.json();
  } catch (e) {
    console.error('Failed to load content.json', e);
    return;
  }

  document.title = data.meta?.title || 'AI Presentation';
  const brand = document.querySelector('.nav-brand');
  if (brand) brand.textContent = data.presenter || data.meta?.title || 'AI Strategy & Ethics';

  slides = data.slides || [];
  const deck = document.getElementById('deck');
  deck.innerHTML = slides.map((s, i) => renderSlide(s, i, slides.length)).join('');

  updateCounter();
  setupIntersectionObserver();
  setupKeyboard();
  setupScrollSync();
  setupPdfExport(data);
  
  // Activate first slide immediately
  const firstSlide = deck.querySelector('.slide');
  if (firstSlide) firstSlide.classList.add('is-active');
}

function updateCounter() {
  const el = document.getElementById('slideCounter');
  if (el) el.textContent = `${currentSlide + 1} / ${slides.length}`;
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
}

function goToSlide(n) {
  const deck = document.getElementById('deck');
  const allSlides = deck.querySelectorAll('.slide');
  if (n < 0 || n >= allSlides.length) return;
  currentSlide = n;
  allSlides[n].scrollIntoView({ behavior: 'smooth', block: 'start' });
  updateCounter();
}

function setupKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goToSlide(currentSlide - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(slides.length - 1);
    }
  });
}

function setupScrollSync() {
  const deck = document.getElementById('deck');
  let ticking = false;
  deck.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const allSlides = deck.querySelectorAll('.slide');
        const deckRect = deck.getBoundingClientRect();
        let closest = 0, minDist = Infinity;
        allSlides.forEach((s, i) => {
          const r = s.getBoundingClientRect();
          const d = Math.abs(r.top - deckRect.top);
          if (d < minDist) { minDist = d; closest = i; }
        });
        if (closest !== currentSlide) {
          currentSlide = closest;
          updateCounter();
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

function setupIntersectionObserver() {
  const deck = document.getElementById('deck');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  }, { root: deck, threshold: 0.4 });

  deck.querySelectorAll('.slide').forEach(s => observer.observe(s));
}

// ─── PDF Export ───────────────────────────────────────
function setupPdfExport(data) {
  const btn = document.getElementById('exportPdfBtn');
  if (!btn) return;
  btn.addEventListener('click', () => exportPdf(data));
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function exportPdf(data) {
  const btn = document.getElementById('exportPdfBtn');
  btn.disabled = true;
  btn.textContent = 'Loading libs…';

  try {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
  } catch (e) {
    alert('Could not load PDF export libraries. Please ensure cdnjs.cloudflare.com is accessible.');
    btn.disabled = false; btn.textContent = 'Export PDF'; return;
  }

  btn.textContent = 'Exporting…';
  document.body.classList.add('exportingPdf');

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });

  const allSlides = slides;

  for (let i = 0; i < allSlides.length; i++) {
    btn.textContent = `Exporting ${i + 1}/${allSlides.length}…`;

    // Create off-screen stage
    let stage = document.getElementById('pdfStage');
    if (stage) stage.remove();
    stage = document.createElement('div');
    stage.id = 'pdfStage';
    document.body.appendChild(stage);

    // Render slide into stage
    const slideHTML = renderSlide(allSlides[i], i, allSlides.length);
    stage.innerHTML = slideHTML;

    // Force active state
    const slideEl = stage.querySelector('.slide');
    if (slideEl) slideEl.classList.add('is-active');

    // Add a brief delay for rendering
    await new Promise(r => setTimeout(r, 120));

    try {
      const canvas = await html2canvas(stage, {
        backgroundColor: '#0F172A',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        width: 1920,
        height: 1080,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.93);
      if (i > 0) pdf.addPage([1920, 1080], 'landscape');
      pdf.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
    } catch (err) {
      console.error('Slide capture error:', err);
    }

    stage.remove();
  }

  pdf.save('AI-Strategy-Ethics-Rando.pdf');

  document.body.classList.remove('exportingPdf');
  btn.disabled = false;
  btn.textContent = 'Export PDF';
}

// ─── Boot ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
