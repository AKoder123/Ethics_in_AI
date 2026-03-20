/* ═══════════════════════════════════════════════════════
   AI Strategy & Ethics — Presentation Engine v2
   Light editorial theme | Stephen Rando PhD
   ═══════════════════════════════════════════════════════ */
'use strict';

// ─── SVG Illustrations ─────────────────────────────────

const ILLUS = {

  /* Inputs ↔ Outputs abstraction diagram */
  'inputs-outputs': `
<svg class="slide-illustration" viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Left: human side -->
  <rect x="10" y="80" width="130" height="120" rx="5" fill="#FFFFFF" stroke="#D6D3D1"/>
  <text x="75" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#1E3A5F">INPUTS</text>
  <text x="75" y="122" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" fill="#6B7280">Simplifying interface</text>
  <text x="75" y="134" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" fill="#7C8F7A" font-style="italic">abstraction</text>
  <!-- People icons -->
  <circle cx="45" cy="165" r="9" fill="#1E3A5F" opacity="0.7"/>
  <rect x="38" y="176" width="14" height="14" rx="3" fill="#1E3A5F" opacity="0.7"/>
  <circle cx="75" cy="165" r="9" fill="#1E3A5F" opacity="0.5"/>
  <rect x="68" y="176" width="14" height="14" rx="3" fill="#1E3A5F" opacity="0.5"/>
  <circle cx="105" cy="165" r="9" fill="#1E3A5F" opacity="0.3"/>
  <rect x="98" y="176" width="14" height="14" rx="3" fill="#1E3A5F" opacity="0.3"/>

  <!-- Centre: computer box -->
  <rect x="195" y="60" width="130" height="160" rx="5" fill="#F2EFE9" stroke="#D6D3D1" stroke-width="1.5"/>
  <rect x="215" y="80" width="90" height="55" rx="3" fill="#FFFFFF" stroke="#D6D3D1"/>
  <text x="260" y="102" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">Natural Language</text>
  <text x="260" y="115" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">→ Software</text>
  <rect x="215" y="148" width="90" height="8" rx="2" fill="#1E3A5F" opacity="0.12"/>
  <rect x="215" y="160" width="70" height="8" rx="2" fill="#7C8F7A" opacity="0.2"/>
  <rect x="215" y="172" width="80" height="8" rx="2" fill="#1E3A5F" opacity="0.08"/>
  <text x="260" y="210" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#1F2937">Generative AI</text>

  <!-- Right: outputs -->
  <rect x="380" y="80" width="130" height="120" rx="5" fill="#FFFFFF" stroke="#D6D3D1"/>
  <text x="445" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#7C8F7A">OUTPUTS</text>
  <text x="445" y="122" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" fill="#6B7280">Expanding capabilities</text>
  <text x="445" y="134" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" fill="#7C8F7A" font-style="italic">computation</text>
  <!-- Output chips -->
  <rect x="395" y="148" width="45" height="16" rx="3" fill="#7C8F7A" opacity="0.18"/>
  <text x="417" y="160" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#7C8F7A">Text</text>
  <rect x="448" y="148" width="48" height="16" rx="3" fill="#1E3A5F" opacity="0.1"/>
  <text x="472" y="160" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#1E3A5F">Code</text>
  <rect x="395" y="170" width="45" height="16" rx="3" fill="#7C8F7A" opacity="0.12"/>
  <text x="417" y="182" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#7C8F7A">Images</text>
  <rect x="448" y="170" width="48" height="16" rx="3" fill="#1E3A5F" opacity="0.08"/>
  <text x="472" y="182" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#1E3A5F">Decisions</text>

  <!-- Arrows -->
  <line x1="143" y1="140" x2="192" y2="140" stroke="#1E3A5F" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="328" y1="140" x2="377" y2="140" stroke="#7C8F7A" stroke-width="1.5" marker-end="url(#arr2)"/>
  <defs>
    <marker id="arr"  markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#1E3A5F"/></marker>
    <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 Z" fill="#7C8F7A"/></marker>
  </defs>
  <!-- Labels below arrows -->
  <text x="167" y="158" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#1E3A5F" opacity="0.7">abstraction</text>
  <text x="352" y="158" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#7C8F7A">computation</text>
</svg>`,

  /* Value stick: Worth to Customer / Price / Cost */
  'value-stick': `
<svg class="slide-illustration" viewBox="0 0 480 280" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- BA column -->
  <text x="130" y="22" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#6B7280">Status Quo</text>
  <line x1="130" y1="32" x2="130" y2="250" stroke="#D6D3D1" stroke-width="1.5"/>
  <line x1="90" y1="55"  x2="170" y2="55"  stroke="#D6D3D1" stroke-width="1.5"/>
  <text x="180" y="60" font-family="Inter,sans-serif" font-size="8.5" fill="#6B7280">Worth to Customer</text>
  <line x1="90" y1="120" x2="170" y2="120" stroke="#D6D3D1" stroke-width="1.5"/>
  <text x="180" y="125" font-family="Inter,sans-serif" font-size="8.5" fill="#6B7280">Price</text>
  <line x1="90" y1="185" x2="170" y2="185" stroke="#D6D3D1" stroke-width="1.5"/>
  <text x="180" y="190" font-family="Inter,sans-serif" font-size="8.5" fill="#6B7280">Cost to Supplier</text>
  <!-- Brace labels -->
  <text x="60"  y="92"  text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#1E3A5F" opacity="0.5">Margin</text>
  <text x="60"  y="158" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280" opacity="0.5">Profit</text>

  <!-- AI-enabled column -->
  <text x="360" y="22" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#1E3A5F">With AI</text>
  <line x1="360" y1="32" x2="360" y2="250" stroke="#D6D3D1" stroke-width="1.5"/>
  <!-- Worth UP -->
  <line x1="320" y1="42" x2="400" y2="42" stroke="#1E3A5F" stroke-width="1.5"/>
  <line x1="360" y1="55" x2="360" y2="43" stroke="#1E3A5F" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#upArr)"/>
  <!-- Cost DOWN -->
  <line x1="320" y1="210" x2="400" y2="210" stroke="#7C8F7A" stroke-width="1.5"/>
  <line x1="360" y1="185" x2="360" y2="208" stroke="#7C8F7A" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#downArr)"/>
  <!-- Labels -->
  <rect x="310" y="34" width="100" height="14" rx="2" fill="rgba(30,58,95,0.08)"/>
  <text x="360" y="45" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" font-weight="600" fill="#1E3A5F">AI improves quality ↑</text>
  <rect x="310" y="202" width="100" height="14" rx="2" fill="rgba(124,143,122,0.12)"/>
  <text x="360" y="213" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" font-weight="600" fill="#7C8F7A">AI cuts cost ↓</text>
  <!-- Bigger profit bracket -->
  <text x="420" y="130" text-anchor="start" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#1E3A5F">More value</text>
  <text x="420" y="142" text-anchor="start" font-family="Inter,sans-serif" font-size="8" fill="#6B7280">created</text>
  <defs>
    <marker id="upArr"   markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,5 L2.5,0 L5,5 Z" fill="#1E3A5F"/></marker>
    <marker id="downArr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L2.5,5 L5,0 Z" fill="#7C8F7A"/></marker>
  </defs>
</svg>`,

  /* Disruption / S-curve illustration */
  'disruption': `
<svg class="slide-illustration" viewBox="0 0 500 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Axes -->
  <line x1="50" y1="220" x2="460" y2="220" stroke="#D6D3D1" stroke-width="1.5"/>
  <line x1="50" y1="20"  x2="50"  y2="220" stroke="#D6D3D1" stroke-width="1.5"/>
  <text x="255" y="240" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#6B7280">Time</text>
  <text x="25"  y="125" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#6B7280" transform="rotate(-90,25,125)">Market Share</text>

  <!-- Incumbent S-curve (grey, stalls) -->
  <path d="M55,210 C80,205 120,190 160,150 C200,110 220,90 240,82 C260,74 280,74 400,74"
        stroke="#D6D3D1" stroke-width="2" fill="none"/>
  <text x="405" y="78" font-family="Inter,sans-serif" font-size="8.5" fill="#9CA3AF">Incumbent</text>

  <!-- Disruptor S-curve (navy) — starts low, overtakes -->
  <path d="M55,218 C70,217 100,215 140,210 C190,203 230,185 280,145 C330,105 370,72 430,45"
        stroke="#1E3A5F" stroke-width="2" fill="none"/>
  <text x="432" y="50" font-family="Inter,sans-serif" font-size="8.5" font-weight="600" fill="#1E3A5F">Disruptor</text>

  <!-- Crossover marker -->
  <circle cx="295" cy="143" r="5" fill="none" stroke="#7C8F7A" stroke-width="1.5"/>
  <line x1="295" y1="143" x2="295" y2="220" stroke="#7C8F7A" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="295" y="232" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="#7C8F7A">Crossover</text>

  <!-- Blockbuster label with X -->
  <text x="88" y="198" font-family="Inter,sans-serif" font-size="7.5" fill="#9CA3AF">Blockbuster</text>
  <text x="360" y="98" font-family="Inter,sans-serif" font-size="7.5" fill="#9CA3AF">Stalls</text>

  <!-- Bankruptcy annotation -->
  <rect x="310" y="62" width="80" height="20" rx="3" fill="rgba(214,211,209,0.5)"/>
  <text x="350" y="76" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">Bankruptcy 2010</text>
  <line x1="350" y1="82" x2="350" y2="97" stroke="#D6D3D1" stroke-width="1"/>
</svg>`,

  /* Ethics cases — simple icon grid */
  'ethics-cases': `
<svg class="slide-illustration" viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 3 case cards -->
  <!-- Card 1: Judge -->
  <rect x="10" y="20" width="145" height="110" rx="5" fill="#FFFFFF" stroke="#D6D3D1"/>
  <rect x="10" y="20" width="145" height="5" rx="3" fill="#1E3A5F"/>
  <!-- Gavel icon -->
  <rect x="40" y="42" width="28" height="8" rx="2" fill="#1E3A5F" opacity="0.2" transform="rotate(-35,54,46)"/>
  <rect x="55" y="48" width="12" height="32" rx="2" fill="#1E3A5F" opacity="0.25" transform="rotate(-35,61,64)"/>
  <text x="82" y="45" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#1F2937">Judicial AI Use</text>
  <text x="22" y="75" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">Judge used ChatGPT to</text>
  <text x="22" y="87" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">advise on child's medical</text>
  <text x="22" y="99" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">rights — ruled unethical.</text>
  <rect x="22" y="108" width="50" height="12" rx="3" fill="rgba(30,58,95,0.08)"/>
  <text x="47" y="118" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="#1E3A5F">Accountability</text>

  <!-- Card 2: Lawyer -->
  <rect x="178" y="20" width="145" height="110" rx="5" fill="#FFFFFF" stroke="#D6D3D1"/>
  <rect x="178" y="20" width="145" height="5" rx="3" fill="#7C8F7A"/>
  <!-- Document icon -->
  <rect x="195" y="40" width="22" height="28" rx="2" fill="#7C8F7A" opacity="0.2"/>
  <line x1="199" y1="50" x2="213" y2="50" stroke="#7C8F7A" stroke-width="1.5"/>
  <line x1="199" y1="56" x2="211" y2="56" stroke="#7C8F7A" stroke-width="1.5"/>
  <line x1="199" y1="62" x2="209" y2="62" stroke="#7C8F7A" stroke-width="1.5"/>
  <text x="225" y="45" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#1F2937">AI Hallucination</text>
  <text x="190" y="76" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">Lawyer submitted fake</text>
  <text x="190" y="88" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">case citations generated</text>
  <text x="190" y="100" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">by AI — court sanctions.</text>
  <rect x="190" y="108" width="55" height="12" rx="3" fill="rgba(124,143,122,0.12)"/>
  <text x="218" y="118" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="#7C8F7A">Transparency</text>

  <!-- Card 3: Environment -->
  <rect x="346" y="20" width="145" height="110" rx="5" fill="#FFFFFF" stroke="#D6D3D1"/>
  <rect x="346" y="20" width="145" height="5" rx="3" fill="#1E3A5F"/>
  <!-- Server stack icon -->
  <rect x="360" y="40" width="26" height="7" rx="2" fill="#1E3A5F" opacity="0.2"/>
  <rect x="360" y="50" width="26" height="7" rx="2" fill="#1E3A5F" opacity="0.15"/>
  <rect x="360" y="60" width="26" height="7" rx="2" fill="#1E3A5F" opacity="0.1"/>
  <text x="394" y="49" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#1F2937">Environmental Cost</text>
  <text x="358" y="76" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">Data centres = 22% of</text>
  <text x="358" y="88" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">Ireland's energy (2024).</text>
  <text x="358" y="100" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">0.5L water per 50 prompts.</text>
  <rect x="358" y="108" width="60" height="12" rx="3" fill="rgba(30,58,95,0.08)"/>
  <text x="388" y="118" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="#1E3A5F">Societal Wellbeing</text>

  <!-- Social Credit card, bottom -->
  <rect x="100" y="148" width="300" height="80" rx="5" fill="#FFFFFF" stroke="#D6D3D1"/>
  <rect x="100" y="148" width="300" height="4" rx="2" fill="#D6D3D1"/>
  <text x="130" y="172" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#1F2937">China Social Credit System</text>
  <text x="130" y="186" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">1,000 points per citizen — AI monitors behaviour and rates accordingly.</text>
  <text x="130" y="198" font-family="Inter,sans-serif" font-size="7.5" fill="#6B7280">14 million opted in within months of 2014 pilot launch.</text>
  <rect x="130" y="207" width="75" height="12" rx="3" fill="rgba(214,211,209,0.6)"/>
  <text x="167" y="217" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="#6B7280">Human Agency</text>
  <rect x="215" y="207" width="75" height="12" rx="3" fill="rgba(214,211,209,0.6)"/>
  <text x="252" y="217" text-anchor="middle" font-family="Inter,sans-serif" font-size="7" font-weight="600" fill="#6B7280">Privacy</text>
</svg>`
};

// ─── Renderers ─────────────────────────────────────────

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
        Press <span class="key-badge">Space</span> or <span class="key-badge">→</span> to advance &nbsp;·&nbsp; <span class="key-badge">←</span> to go back
      </div>
    </div>
    <div class="slide-index-badge">${idx + 1} / ${total}</div>
  </div>`;
}

function renderSection(slide, idx, total) {
  return `
  <div class="slide slide-section" data-slide="${idx}">
    <div class="slide-inner" style="max-width:700px;">
      <div class="slide-label" data-animate data-delay="1">Section ${idx + 1}</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      <div class="section-rule" data-animate="scale" data-delay="3"></div>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="4">${slide.subheadline}</p>` : ''}
    </div>
    <div class="slide-index-badge" style="color:rgba(255,255,255,0.3);">${idx + 1} / ${total}</div>
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
        ${slide.chartNote ? `<p style="font-size:0.72rem;color:var(--muted);margin-top:16px;margin-bottom:8px;font-weight:500;text-transform:uppercase;letter-spacing:0.08em;">${slide.chartNote}</p>` : ''}
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
  const illustSVG = ILLUS[slide.illus] || '';
  const bullets = slide.bullets || [];
  return `
  <div class="slide" data-slide="${idx}">
    <div class="slide-inner">
      <div class="slide-label" data-animate data-delay="1">Analysis</div>
      <h2 data-animate data-delay="2">${slide.headline}</h2>
      ${slide.subheadline ? `<p class="subheadline" data-animate data-delay="3" style="margin-bottom:0;">${slide.subheadline}</p>` : ''}
      <div class="img-text-row">
        <div class="img-panel" data-animate="fade-left" data-delay="4">${illustSVG}</div>
        <div class="text-panel">
          ${bullets.map((b, i) => `
            <div class="bullet-card" data-animate="fade-right" data-delay="${i + 4}" style="margin-bottom:7px;">
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

// ─── App state ─────────────────────────────────────────
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
  } catch(e) {
    console.error('Failed to load content.json', e);
    return;
  }

  document.title = data.meta?.title || 'AI Presentation';
  const brand = document.querySelector('.nav-brand');
  if (brand) brand.textContent = data.meta?.presenter || data.meta?.title || '';

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
    if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goToSlide(currentSlide + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goToSlide(currentSlide - 1); }
    else if (e.key === 'Home') { e.preventDefault(); goToSlide(0); }
    else if (e.key === 'End') { e.preventDefault(); goToSlide(slides.length - 1); }
  });
}

function setupScrollSync() {
  const deck = document.getElementById('deck');
  let ticking = false;
  deck.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const all = deck.querySelectorAll('.slide');
        const dr = deck.getBoundingClientRect();
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

// ─── PDF Export ─────────────────────────────────────────
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
    alert('Could not load PDF libraries. Please allow access to cdnjs.cloudflare.com.');
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
        backgroundColor: '#F7F5F2', scale: 2, useCORS: true, allowTaint: true, logging: false,
        width: 1920, height: 1080
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
