/* ═══════════════════════════════════════════════════════
   AI Strategy & Ethics — Presentation Engine v3
   Forest Executive palette | Stephen Rando PhD
   Forest #1F3B2F  Navy #1D3557  Sand #EFE8DC
   Taupe #7A746B   Brass #9C8B6E  Ivory #FAF8F3
   ═══════════════════════════════════════════════════════ */
'use strict';

/* ── Palette tokens (mirrors CSS vars for use in SVG) ── */
const C = {
  forest:  '#1F3B2F',
  navy:    '#1D3557',
  sand:    '#EFE8DC',
  sandMid: '#E4DAC8',
  taupe:   '#7A746B',
  brass:   '#9C8B6E',
  ivory:   '#FAF8F3',
  divider: '#DDD8CF',
  ink:     '#1A1A18',
  surface: '#FFFFFF',
};

/* ── Inline SVG illustrations ─────────────────────────── */
const ILLUS = {

  /* Inputs ↔ Outputs: abstraction / computation */
  'inputs-outputs': `
<svg class="slide-illustration" viewBox="0 0 540 290" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Left panel: Inputs -->
  <rect x="8" y="70" width="150" height="148" rx="4" fill="${C.surface}" stroke="${C.divider}"/>
  <rect x="8" y="70" width="150" height="4" rx="2" fill="${C.forest}"/>
  <text x="83" y="96" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="${C.forest}">INPUTS</text>
  <text x="83" y="110" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="${C.taupe}">Simplifying interface</text>
  <text x="83" y="122" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="${C.brass}" font-style="italic">abstraction</text>
  <!-- Person icons -->
  <circle cx="42"  cy="160" r="10" fill="${C.forest}" opacity="0.75"/>
  <rect   x="34"   y="173" width="16" height="18" rx="3" fill="${C.forest}" opacity="0.75"/>
  <circle cx="83"  cy="160" r="10" fill="${C.forest}" opacity="0.45"/>
  <rect   x="75"   y="173" width="16" height="18" rx="3" fill="${C.forest}" opacity="0.45"/>
  <circle cx="124" cy="160" r="10" fill="${C.forest}" opacity="0.22"/>
  <rect   x="116"  y="173" width="16" height="18" rx="3" fill="${C.forest}" opacity="0.22"/>
  <text x="83" y="206" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" fill="${C.taupe}">Anyone can access</text>

  <!-- Arrow left to centre -->
  <line x1="162" y1="145" x2="196" y2="145" stroke="${C.forest}" stroke-width="1.5" marker-end="url(#af)"/>
  <text x="179" y="160" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" fill="${C.forest}" opacity="0.65">natural language</text>

  <!-- Centre: AI box -->
  <rect x="200" y="50" width="140" height="190" rx="4" fill="${C.sand}" stroke="${C.divider}" stroke-width="1.5"/>
  <text x="270" y="82" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="${C.ink}">Generative AI</text>
  <rect x="220" y="92"  width="100" height="10" rx="2" fill="${C.forest}" opacity="0.14"/>
  <rect x="220" y="108" width="80"  height="10" rx="2" fill="${C.brass}"  opacity="0.22"/>
  <rect x="220" y="124" width="90"  height="10" rx="2" fill="${C.forest}" opacity="0.09"/>
  <rect x="220" y="140" width="72"  height="10" rx="2" fill="${C.brass}"  opacity="0.15"/>
  <rect x="220" y="156" width="84"  height="10" rx="2" fill="${C.forest}" opacity="0.11"/>
  <text x="270" y="195" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">Transformer model</text>
  <text x="270" y="208" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">processing prompts</text>
  <text x="270" y="228" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" fill="${C.brass}" opacity="0.7">Deep Learning → LLM</text>

  <!-- Arrow centre to right -->
  <line x1="344" y1="145" x2="376" y2="145" stroke="${C.brass}" stroke-width="1.5" marker-end="url(#af2)"/>
  <text x="360" y="160" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" fill="${C.brass}" opacity="0.8">computation</text>

  <!-- Right panel: Outputs -->
  <rect x="380" y="70" width="150" height="148" rx="4" fill="${C.surface}" stroke="${C.divider}"/>
  <rect x="380" y="70" width="150" height="4" rx="2" fill="${C.brass}"/>
  <text x="455" y="96" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="${C.brass}">OUTPUTS</text>
  <text x="455" y="110" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="${C.taupe}">Expanding capabilities</text>
  <!-- Output chips -->
  <rect x="395" y="126" width="52" height="18" rx="3" fill="${C.forest}" opacity="0.1"/>
  <text x="421" y="139" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="${C.forest}">Text</text>
  <rect x="455" y="126" width="52" height="18" rx="3" fill="${C.brass}"  opacity="0.15"/>
  <text x="481" y="139" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="${C.brass}">Code</text>
  <rect x="395" y="152" width="52" height="18" rx="3" fill="${C.forest}" opacity="0.08"/>
  <text x="421" y="165" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="${C.forest}">Images</text>
  <rect x="455" y="152" width="52" height="18" rx="3" fill="${C.brass}"  opacity="0.1"/>
  <text x="481" y="165" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="${C.brass}">Decisions</text>
  <text x="455" y="203" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" fill="${C.taupe}">Specialised at scale</text>

  <defs>
    <marker id="af"  markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="${C.forest}"/></marker>
    <marker id="af2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="${C.brass}"/></marker>
  </defs>
</svg>`,

  /* Value stick */
  'value-stick': `
<svg class="slide-illustration" viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Status quo column -->
  <text x="120" y="20" text-anchor="middle" font-family="Inter,sans-serif" font-size="9.5" font-weight="600" fill="${C.taupe}">Status Quo</text>
  <line x1="120" y1="28" x2="120" y2="252" stroke="${C.divider}" stroke-width="1.5"/>
  <line x1="76"  y1="54"  x2="164" y2="54"  stroke="${C.divider}" stroke-width="1.5"/>
  <line x1="76"  y1="122" x2="164" y2="122" stroke="${C.divider}" stroke-width="1.5"/>
  <line x1="76"  y1="192" x2="164" y2="192" stroke="${C.divider}" stroke-width="1.5"/>
  <text x="174" y="59"  font-family="Inter,sans-serif" font-size="8.5" fill="${C.taupe}">Worth to Customer</text>
  <text x="174" y="127" font-family="Inter,sans-serif" font-size="8.5" fill="${C.taupe}">Price</text>
  <text x="174" y="197" font-family="Inter,sans-serif" font-size="8.5" fill="${C.taupe}">Cost to Supplier</text>
  <!-- margin brace area labels -->
  <text x="54" y="92"  text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="${C.forest}" opacity="0.5">Margin</text>
  <text x="54" y="162" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}"  opacity="0.5">Profit</text>

  <!-- AI-enabled column -->
  <text x="370" y="20" text-anchor="middle" font-family="Inter,sans-serif" font-size="9.5" font-weight="600" fill="${C.forest}">With AI</text>
  <line x1="370" y1="28" x2="370" y2="252" stroke="${C.divider}" stroke-width="1.5"/>

  <!-- Worth UP (forest) -->
  <line x1="326" y1="40"  x2="414" y2="40"  stroke="${C.forest}" stroke-width="1.5"/>
  <line x1="370" y1="54"  x2="370" y2="41"  stroke="${C.forest}" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#upF)"/>
  <rect x="316" y="32" width="108" height="14" rx="2" fill="${C.forest}" opacity="0.08"/>
  <text x="370" y="43" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" font-weight="600" fill="${C.forest}">Better quality ↑</text>

  <!-- Cost DOWN (brass) -->
  <line x1="326" y1="214" x2="414" y2="214" stroke="${C.brass}" stroke-width="1.5"/>
  <line x1="370" y1="192" x2="370" y2="212" stroke="${C.brass}" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#downB)"/>
  <rect x="316" y="205" width="108" height="14" rx="2" fill="${C.brass}" opacity="0.1"/>
  <text x="370" y="216" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" font-weight="600" fill="${C.brass}">Lower cost ↓</text>

  <!-- Expanded value callout -->
  <text x="436" y="128" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="${C.forest}">More value</text>
  <text x="436" y="140" font-family="Inter,sans-serif" font-size="8" fill="${C.taupe}">created</text>

  <defs>
    <marker id="upF"   markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,5 L2.5,0 L5,5 Z" fill="${C.forest}"/></marker>
    <marker id="downB" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L2.5,5 L5,0 Z" fill="${C.brass}"/></marker>
  </defs>
</svg>`,

  /* Disruption S-curve */
  'disruption': `
<svg class="slide-illustration" viewBox="0 0 500 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Axes -->
  <line x1="48" y1="220" x2="462" y2="220" stroke="${C.divider}" stroke-width="1.5"/>
  <line x1="48" y1="18"  x2="48"  y2="220" stroke="${C.divider}" stroke-width="1.5"/>
  <text x="255" y="240" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" fill="${C.taupe}">Time</text>
  <text x="22"  y="125" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" fill="${C.taupe}" transform="rotate(-90,22,125)">Market Share</text>
  <!-- Y tick labels -->
  <text x="40" y="222" text-anchor="end" font-family="Inter,sans-serif" font-size="7" fill="${C.taupe}">0</text>
  <text x="40" y="170" text-anchor="end" font-family="Inter,sans-serif" font-size="7" fill="${C.taupe}">25%</text>
  <text x="40" y="118" text-anchor="end" font-family="Inter,sans-serif" font-size="7" fill="${C.taupe}">50%</text>
  <line x1="48" y1="170" x2="54" y2="170" stroke="${C.divider}"/>
  <line x1="48" y1="118" x2="54" y2="118" stroke="${C.divider}"/>

  <!-- Incumbent curve – stalls at mid (taupe/sand) -->
  <path d="M52,214 C76,210 116,196 158,156 C200,116 224,94 248,86 C272,78 294,76 412,76"
        stroke="${C.divider}" stroke-width="2" fill="none"/>
  <text x="416" y="80" font-family="Inter,sans-serif" font-size="8" fill="${C.taupe}">Incumbent</text>
  <text x="390" y="96" font-family="Inter,sans-serif" font-size="7" fill="${C.taupe}" opacity="0.7">stalls</text>

  <!-- Disruptor curve – overtakes (forest) -->
  <path d="M52,218 C70,217 102,215 144,210 C196,204 240,188 290,150 C340,110 382,72 440,42"
        stroke="${C.forest}" stroke-width="2.5" fill="none"/>
  <text x="444" y="46" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="${C.forest}">Disruptor</text>

  <!-- Crossover point -->
  <circle cx="300" cy="146" r="5" fill="none" stroke="${C.brass}" stroke-width="1.5"/>
  <line x1="300" y1="146" x2="300" y2="220" stroke="${C.brass}" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="300" y="232" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="${C.brass}">Crossover</text>

  <!-- Blockbuster bankruptcy tag -->
  <rect x="316" y="60" width="88" height="20" rx="3" fill="${C.sand}"/>
  <text x="360" y="74" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">Bankruptcy 2010</text>
  <line x1="360" y1="80" x2="360" y2="93" stroke="${C.divider}" stroke-width="1"/>

  <!-- Netflix vs Blockbuster size note -->
  <text x="72" y="200" font-family="Inter,sans-serif" font-size="7" fill="${C.taupe}" opacity="0.8">Blockbuster (2001)</text>
  <text x="200" y="236" font-family="Inter,sans-serif" font-size="7" fill="${C.forest}" opacity="0.7">Netflix = 1.5% of Blockbuster's size</text>
</svg>`,

  /* Ethics cases */
  'ethics-cases': `
<svg class="slide-illustration" viewBox="0 0 510 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Card 1: Judicial -->
  <rect x="6"   y="12" width="154" height="108" rx="4" fill="${C.surface}" stroke="${C.divider}"/>
  <rect x="6"   y="12" width="154" height="4"   rx="2" fill="${C.forest}"/>
  <!-- Gavel outline -->
  <rect x="20" y="36" width="24" height="8" rx="2" fill="${C.forest}" opacity="0.18" transform="rotate(-35,32,40)"/>
  <rect x="32" y="44" width="10" height="28" rx="2" fill="${C.forest}" opacity="0.22" transform="rotate(-35,37,58)"/>
  <text x="68" y="42"  font-family="Inter,sans-serif" font-size="8.5" font-weight="600" fill="${C.ink}">Judicial AI Use</text>
  <text x="18" y="70"  font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">Judge used ChatGPT to advise</text>
  <text x="18" y="82"  font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">on child's medical rights.</text>
  <text x="18" y="94"  font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">Ruled unethical.</text>
  <rect x="18" y="104" width="62" height="12" rx="3" fill="${C.forest}" opacity="0.08"/>
  <text x="49" y="114" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="${C.forest}">Accountability</text>

  <!-- Card 2: Hallucination -->
  <rect x="178" y="12" width="154" height="108" rx="4" fill="${C.surface}" stroke="${C.divider}"/>
  <rect x="178" y="12" width="154" height="4"   rx="2" fill="${C.brass}"/>
  <!-- Doc icon -->
  <rect x="192" y="36" width="22" height="28" rx="2" fill="${C.brass}" opacity="0.18"/>
  <line x1="196" y1="46" x2="210" y2="46" stroke="${C.brass}" stroke-width="1.5"/>
  <line x1="196" y1="52" x2="208" y2="52" stroke="${C.brass}" stroke-width="1.5"/>
  <line x1="196" y1="58" x2="206" y2="58" stroke="${C.brass}" stroke-width="1.5"/>
  <text x="222" y="42"  font-family="Inter,sans-serif" font-size="8.5" font-weight="600" fill="${C.ink}">AI Hallucination</text>
  <text x="190" y="70"  font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">Lawyer submitted AI-generated</text>
  <text x="190" y="82"  font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">fake case citations to court.</text>
  <text x="190" y="94"  font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">Faced court sanctions.</text>
  <rect x="190" y="104" width="58" height="12" rx="3" fill="${C.brass}" opacity="0.12"/>
  <text x="219" y="114" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="${C.brass}">Transparency</text>

  <!-- Card 3: Environment -->
  <rect x="350" y="12" width="154" height="108" rx="4" fill="${C.surface}" stroke="${C.divider}"/>
  <rect x="350" y="12" width="154" height="4"   rx="2" fill="${C.forest}"/>
  <!-- Server stack -->
  <rect x="364" y="36" width="26" height="7" rx="2" fill="${C.forest}" opacity="0.2"/>
  <rect x="364" y="46" width="26" height="7" rx="2" fill="${C.forest}" opacity="0.14"/>
  <rect x="364" y="56" width="26" height="7" rx="2" fill="${C.forest}" opacity="0.09"/>
  <text x="398" y="44"  font-family="Inter,sans-serif" font-size="8.5" font-weight="600" fill="${C.ink}">Energy &amp; Water</text>
  <text x="362" y="72"  font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">Data centres = 22% of</text>
  <text x="362" y="84"  font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">Ireland's energy (2024).</text>
  <text x="362" y="96"  font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">0.5L water / 50 prompts.</text>
  <rect x="362" y="104" width="65" height="12" rx="3" fill="${C.forest}" opacity="0.08"/>
  <text x="395" y="114" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="${C.forest}">Societal Wellbeing</text>

  <!-- Bottom: Social Credit banner -->
  <rect x="80" y="140" width="350" height="82" rx="4" fill="${C.sand}" stroke="${C.divider}"/>
  <rect x="80" y="140" width="350" height="4"  rx="2" fill="${C.taupe}" opacity="0.5"/>
  <text x="255" y="162" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" font-weight="600" fill="${C.ink}">China's Social Credit System</text>
  <text x="255" y="178" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">1,000 points per citizen — AI monitors behaviour and rates accordingly.</text>
  <text x="255" y="192" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="${C.taupe}">14 million opted in within months of the 2014 pilot launch.</text>
  <rect x="100" y="200" width="72" height="13" rx="3" fill="${C.taupe}" opacity="0.14"/>
  <text x="136" y="210" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="${C.taupe}">Human Agency</text>
  <rect x="184" y="200" width="55" height="13" rx="3" fill="${C.taupe}" opacity="0.14"/>
  <text x="211" y="210" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="${C.taupe}">Privacy</text>
  <rect x="252" y="200" width="72" height="13" rx="3" fill="${C.taupe}" opacity="0.14"/>
  <text x="288" y="210" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="${C.taupe}">Fairness</text>
</svg>`
};

/* ── Slide renderers ──────────────────────────────────── */

function renderTitle(slide, idx, total) {
  return `
  <div class="slide slide-title" data-slide="${idx}">
    <div class="title-accent-bar"></div>
    <div class="slide-inner" style="max-width:820px;">
      <div class="title-eyebrow" data-animate data-delay="1">Stephen Rando PhD · 2026</div>
      <h1 data-animate data-delay="2">${slide.headline}</h1>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3">${slide.subheadline}</p>` : ''}
      <div class="title-rule" data-animate="scale" data-delay="4"></div>
      <div data-animate data-delay="5"><div class="presenter-badge">${slide.presenter}</div></div>
      <div class="nav-hint" data-animate data-delay="6">
        Press <span class="key-badge">Space</span> or <span class="key-badge">→</span> to advance
        &nbsp;·&nbsp; <span class="key-badge">←</span> to go back
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderSection(slide, idx, total) {
  return `
  <div class="slide slide-section" data-slide="${idx}">
    <div class="slide-inner" style="max-width:700px;">
      <div class="slide-label" data-animate data-delay="1">Section</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      <div class="section-rule" data-animate="scale" data-delay="3"></div>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="4">${slide.subheadline}</p>` : ''}
    </div>
    <div class="slide-index-badge" style="color:rgba(239,232,220,0.25);">${idx + 1} / ${total}</div>
  </div>`;
}

function renderBullets(bullets) {
  if (!bullets || !bullets.length) return '';
  const cols = bullets.length > 4 ? 'cols-2' : '';
  return `<div class="bullets-grid ${cols}">
    ${bullets.map((b, i) => `
      <div class="bullet-card" data-animate="fade-up" data-delay="${Math.min(i + 3, 8)}">
        <span class="bullet-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="bullet-text">${b}</span>
      </div>`).join('')}
  </div>`;
}

function renderContent(slide, idx, total) {
  return `
  <div class="slide" data-slide="${idx}">
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Insight</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3">${slide.subheadline}</p>` : ''}
      ${renderBullets(slide.bullets)}
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderBeforeAfter(slide, idx, total) {
  const L = slide.left || {}, R = slide.right || {};
  return `
  <div class="slide" data-slide="${idx}">
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Framework</div>
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

function renderMatrix(slide, idx, total) {
  const cells = slide.quadrants || [];
  return `
  <div class="slide" data-slide="${idx}">
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Decision Framework</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3">${slide.subheadline}</p>` : ''}
      <div data-animate="fade-up" data-delay="4">
        <div class="matrix-grid">
          ${cells.map(c => `
            <div class="matrix-cell">
              <div class="cell-label">${c.label}</div>
              <div class="cell-sublabel">${c.sublabel}</div>
              <div class="cell-desc">${c.desc}</div>
            </div>`).join('')}
        </div>
        <div class="matrix-axes">
          <span>↑ Tacit Knowledge · · · Explicit Data ↓</span>
          <span>Low Error Cost · · · High Error Cost →</span>
        </div>
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderAdoptionChart(slide, idx, total) {
  const bars = slide.bars || [];
  return `
  <div class="slide" data-slide="${idx}">
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Market Context</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3">${slide.subheadline}</p>` : ''}
      <div data-animate="fade-up" data-delay="4">
        ${slide.chartNote ? `<p style="font-size:0.69rem;color:var(--muted);margin-top:14px;margin-bottom:8px;font-weight:600;text-transform:uppercase;letter-spacing:0.09em;">${slide.chartNote}</p>` : ''}
        <div class="bar-chart">
          ${bars.map(b => `
            <div class="bar-row">
              <span class="bar-label">${b.label}</span>
              <div class="bar-track"><div class="bar-fill" style="--bar-pct:${b.pct}%"></div></div>
              <span class="bar-val">${b.val}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderStats(slide, idx, total) {
  const stats = slide.stats || [];
  return `
  <div class="slide" data-slide="${idx}">
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Data</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3">${slide.subheadline}</p>` : ''}
      <div class="stat-row" data-animate="fade-up" data-delay="4">
        ${stats.map(s => `
          <div class="stat-block">
            <div class="stat-num">${s.num}</div>
            <div class="stat-label">${s.label}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderIllustration(slide, idx, total) {
  const svg = ILLUS[slide.illus] || '';
  const bullets = slide.bullets || [];
  return `
  <div class="slide" data-slide="${idx}">
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Analysis</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3" style="margin-bottom:0;">${slide.subheadline}</p>` : ''}
      <div class="img-text-row">
        <div class="img-panel" data-animate="fade-left" data-delay="4">${svg}</div>
        <div class="text-panel">
          ${bullets.map((b, i) => `
            <div class="bullet-card" data-animate="fade-right" data-delay="${Math.min(i + 4, 8)}" style="margin-bottom:7px;">
              <span class="bullet-num">${String(i + 1).padStart(2, '0')}</span>
              <span class="bullet-text">${b}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderClosing(slide, idx, total) {
  return `
  <div class="slide slide-closing" data-slide="${idx}">
    <div class="title-accent-bar"></div>
    <div class="slide-inner" style="max-width:720px;">
      <div class="slide-label" data-animate data-delay="1">Closing</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      <div class="closing-rule" data-animate="scale" data-delay="3"></div>
      ${slide.subheadline ? `<p class="closing-quote" data-animate data-delay="4">"${slide.subheadline}"</p>` : ''}
      <div class="closing-presenter" data-animate data-delay="5">
        <div class="closing-presenter-line"></div>
        ${slide.presenter || 'Stephen Rando PhD'}
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderSlide(slide, idx, total) {
  switch (slide.type) {
    case 'title':          return renderTitle(slide, idx, total);
    case 'section':        return renderSection(slide, idx, total);
    case 'beforeAfter':    return renderBeforeAfter(slide, idx, total);
    case 'matrix':         return renderMatrix(slide, idx, total);
    case 'adoption-chart': return renderAdoptionChart(slide, idx, total);
    case 'stats':          return renderStats(slide, idx, total);
    case 'illustration':   return renderIllustration(slide, idx, total);
    case 'closing':        return renderClosing(slide, idx, total);
    default:               return renderContent(slide, idx, total);
  }
}

/* ── App ──────────────────────────────────────────────── */
let slides = [];
let currentSlide = 0;

async function init() {
  const nav = document.getElementById('nav');
  const navH = nav ? nav.offsetHeight : 52;
  document.documentElement.style.setProperty('--topOffset', navH + 'px');

  let data;
  try {
    const r = await fetch('./content.json');
    data = await r.json();
  } catch(e) { console.error('Failed to load content.json', e); return; }

  document.title = data.meta?.title || 'AI Presentation';
  const brand = document.querySelector('.nav-brand');
  if (brand) brand.textContent = 'AI Strategy & Ethics — Stephen Rando PhD';

  slides = data.slides || [];
  const deck = document.getElementById('deck');
  deck.innerHTML = slides.map((s, i) => renderSlide(s, i, slides.length)).join('');

  updateCounter();
  setupObserver();
  setupKeyboard();
  setupScrollSync();
  setupPdfExport(data);

  const first = deck.querySelector('.slide');
  if (first) first.classList.add('is-active');
}

function updateCounter() {
  const el = document.getElementById('slideCounter');
  if (el) el.textContent = `${currentSlide + 1} / ${slides.length}`;
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
}

function goToSlide(n) {
  const deck = document.getElementById('deck');
  const all = deck.querySelectorAll('.slide');
  if (n < 0 || n >= all.length) return;
  currentSlide = n;
  all[n].scrollIntoView({ behavior: 'smooth', block: 'start' });
  updateCounter();
}

function setupKeyboard() {
  document.addEventListener('keydown', e => {
    if      (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goToSlide(currentSlide + 1); }
    else if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')                    { e.preventDefault(); goToSlide(currentSlide - 1); }
    else if (e.key === 'Home')                                                  { e.preventDefault(); goToSlide(0); }
    else if (e.key === 'End')                                                   { e.preventDefault(); goToSlide(slides.length - 1); }
  });
}

function setupScrollSync() {
  const deck = document.getElementById('deck');
  let ticking = false;
  deck.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const all = deck.querySelectorAll('.slide');
        const dr  = deck.getBoundingClientRect();
        let closest = 0, minD = Infinity;
        all.forEach((s, i) => {
          const d = Math.abs(s.getBoundingClientRect().top - dr.top);
          if (d < minD) { minD = d; closest = i; }
        });
        if (closest !== currentSlide) { currentSlide = closest; updateCounter(); }
        ticking = false;
      });
      ticking = true;
    }
  });
}

function setupObserver() {
  const deck = document.getElementById('deck');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-active'); });
  }, { root: deck, threshold: 0.38 });
  deck.querySelectorAll('.slide').forEach(s => obs.observe(s));
}

/* ── PDF export ────────────────────────────────────────── */
function setupPdfExport(data) {
  const btn = document.getElementById('exportPdfBtn');
  if (!btn) return;
  btn.addEventListener('click', () => exportPdf(data));
}

function loadScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

async function exportPdf(data) {
  const btn = document.getElementById('exportPdfBtn');
  btn.disabled = true; btn.textContent = 'Loading…';
  try {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
  } catch(e) {
    alert('Could not load PDF libraries. Ensure cdnjs.cloudflare.com is accessible.');
    btn.disabled = false; btn.textContent = 'Export PDF'; return;
  }

  document.body.classList.add('exportingPdf');
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });

  for (let i = 0; i < slides.length; i++) {
    btn.textContent = `Exporting ${i + 1}/${slides.length}…`;
    let stage = document.getElementById('pdfStage');
    if (stage) stage.remove();
    stage = document.createElement('div'); stage.id = 'pdfStage';
    document.body.appendChild(stage);
    stage.innerHTML = renderSlide(slides[i], i, slides.length);
    const el = stage.querySelector('.slide');
    if (el) el.classList.add('is-active');
    await new Promise(r => setTimeout(r, 130));
    try {
      const canvas = await html2canvas(stage, {
        backgroundColor: '#FAF8F3', scale: 2, useCORS: true,
        allowTaint: true, logging: false, width: 1920, height: 1080
      });
      const img = canvas.toDataURL('image/jpeg', 0.94);
      if (i > 0) pdf.addPage([1920, 1080], 'landscape');
      pdf.addImage(img, 'JPEG', 0, 0, 1920, 1080);
    } catch(err) { console.error('Capture error slide', i, err); }
    stage.remove();
  }

  pdf.save('AI-Strategy-Ethics-Rando.pdf');
  document.body.classList.remove('exportingPdf');
  btn.disabled = false; btn.textContent = 'Export PDF';
}

document.addEventListener('DOMContentLoaded', init);
