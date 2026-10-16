/* ==========================================================
   WPrint — catálogo, pedido e envio pelo WhatsApp
   Para editar produtos/opções, mexa só no array PRODUTOS.
   ========================================================== */
const WHATSAPP = '5511983294003';

const C = '#00A6D6', M = '#E5197A', Y = '#FFC21A', K = '#0E0E14', P = '#FFFFFF';

const CATEGORIAS = [
  { id: 'todos', nome: 'Todos' },
  { id: 'visual', nome: 'Comunicação visual' },
  { id: 'papelaria', nome: 'Papelaria' },
  { id: 'promo', nome: 'Promocionais' },
  { id: 'eventos', nome: 'Eventos' },
];

const PRODUTOS = [
  {
    id: 'banner', nome: 'Banners', cat: 'visual', tag: 'Mais pedido', bg: '#E3F4FA',
    desc: 'Banner em lona com impressão digital em alta resolução. Ideal para fachadas, eventos e pontos de venda.',
    opcoes: [
      { nome: 'Tamanho', valores: ['60 × 90 cm', '80 × 120 cm', '90 × 150 cm', '100 × 200 cm', 'Personalizado'] },
      { nome: 'Acabamento', valores: ['Bastão e cordão', 'Ilhós', 'Sem acabamento'] },
      { nome: 'Quantidade', valores: ['1', '2', '5', '10', 'Outra'] },
    ],
  },
  {
    id: 'placa', nome: 'Placas', cat: 'visual', bg: '#FFF4D6',
    desc: 'Placas de sinalização e identificação para comércios, obras, imóveis e empresas.',
    opcoes: [
      { nome: 'Material', valores: ['PVC', 'PS', 'ACM', 'Não sei, me ajude'] },
      { nome: 'Tamanho', valores: ['30 × 20 cm', '50 × 30 cm', '100 × 50 cm', 'Personalizado'] },
      { nome: 'Quantidade', valores: ['1', '2', '5', '10', 'Outra'] },
    ],
  },
  {
    id: 'faixa', nome: 'Faixas', cat: 'visual', bg: '#FDE4EF',
    desc: 'Faixas em lona para promoções, inaugurações, festas e comunicados.',
    opcoes: [
      { nome: 'Tamanho', valores: ['2 × 0,7 m', '3 × 0,7 m', '4 × 1 m', '5 × 1 m', 'Personalizado'] },
      { nome: 'Acabamento', valores: ['Ilhós', 'Bastão e cordão', 'Sem acabamento'] },
      { nome: 'Quantidade', valores: ['1', '2', '5', 'Outra'] },
    ],
  },
  {
    id: 'pedestal', nome: 'Pedestal com Banner', cat: 'visual', bg: '#E8E6F7',
    desc: 'Banner com pedestal (estrutura) pronto para montar em lojas, feiras e recepções.',
    opcoes: [
      { nome: 'Modelo', valores: ['X-Banner', 'Roll-up', 'Não sei, me ajude'] },
      { nome: 'Tamanho', valores: ['60 × 160 cm', '80 × 180 cm', '80 × 200 cm'] },
      { nome: 'Quantidade', valores: ['1', '2', '3', 'Outra'] },
    ],
  },
  {
    id: 'cavalete', nome: 'Cavaletes', cat: 'visual', bg: '#E3F4FA',
    desc: 'Cavalete de calçada com banner dupla face para chamar atenção na porta do seu negócio.',
    opcoes: [
      { nome: 'Impressão', valores: ['Um lado', 'Dois lados'] },
      { nome: 'Item', valores: ['Cavalete + banner', 'Só o banner (refil)'] },
      { nome: 'Quantidade', valores: ['1', '2', '3', 'Outra'] },
    ],
  },
  {
    id: 'cartao', nome: 'Cartões de Visita', cat: 'papelaria', tag: 'Clássico', bg: '#FDE4EF',
    desc: 'Cartões de visita em papel couché com impressão colorida. A primeira impressão da sua marca.',
    opcoes: [
      { nome: 'Quantidade', valores: ['100', '250', '500', '1.000', '2.000'] },
      { nome: 'Impressão', valores: ['Frente', 'Frente e verso'] },
      { nome: 'Acabamento', valores: ['Sem verniz', 'Verniz total', 'Laminação fosca'] },
    ],
  },
  {
    id: 'ima', nome: 'Ímãs de Geladeira', cat: 'promo', bg: '#FFF4D6',
    desc: 'Ímãs personalizados: o jeito certo de ficar na porta da geladeira do seu cliente.',
    opcoes: [
      { nome: 'Tamanho', valores: ['5 × 5 cm', '7 × 5 cm', '9 × 5 cm', 'Personalizado'] },
      { nome: 'Quantidade', valores: ['100', '250', '500', '1.000', '2.000'] },
    ],
  },
  {
    id: 'folheto-pizzaria', nome: 'Folhetos de Pizzaria', cat: 'promo', tag: 'Delivery', bg: '#FFE9D9',
    desc: 'Cardápios e folhetos para pizzarias, lanchonetes e delivery. Cores vivas que dão fome.',
    opcoes: [
      { nome: 'Tamanho', valores: ['10 × 15 cm', '15 × 21 cm (A5)', '21 × 30 cm (A4)'] },
      { nome: 'Impressão', valores: ['Frente', 'Frente e verso'] },
      { nome: 'Quantidade', valores: ['500', '1.000', '2.500', '5.000', '10.000'] },
    ],
  },
  {
    id: 'flyer', nome: 'Flyers', cat: 'promo', bg: '#E8E6F7',
    desc: 'Flyers para divulgar promoções, eventos e serviços. Distribuição rápida, resultado na hora.',
    opcoes: [
      { nome: 'Tamanho', valores: ['10 × 15 cm', '15 × 21 cm (A5)', '21 × 30 cm (A4)'] },
      { nome: 'Impressão', valores: ['Frente', 'Frente e verso'] },
      { nome: 'Quantidade', valores: ['500', '1.000', '2.500', '5.000', '10.000'] },
    ],
  },
  {
    id: 'nota', nome: 'Notas Fiscais', cat: 'papelaria', bg: '#E6EEF2',
    desc: 'Blocos de notas fiscais, pedidos e recibos numerados, com vias em papel carbonado.',
    opcoes: [
      { nome: 'Tipo', valores: ['Nota fiscal', 'Pedido', 'Recibo', 'Orçamento'] },
      { nome: 'Vias', valores: ['1 via', '2 vias', '3 vias'] },
      { nome: 'Blocos', valores: ['5', '10', '20', '50'] },
    ],
  },
  {
    id: 'envelope', nome: 'Envelopes em Geral', cat: 'papelaria', bg: '#FFF4D6',
    desc: 'Envelopes personalizados com a sua marca: carta, ofício, saco e outros formatos.',
    opcoes: [
      { nome: 'Modelo', valores: ['Carta', 'Ofício', 'Saco A4', 'Saco A3', 'Outro'] },
      { nome: 'Quantidade', valores: ['100', '250', '500', '1.000'] },
    ],
  },
  {
    id: 'calendario', nome: 'Calendários de Mesa', cat: 'promo', bg: '#E3F4FA',
    desc: 'Calendário de mesa personalizado: sua marca à vista o ano inteiro. Ótimo brinde de fim de ano.',
    opcoes: [
      { nome: 'Modelo', valores: ['12 páginas (1 mês por folha)', '6 páginas (2 meses por folha)'] },
      { nome: 'Quantidade', valores: ['25', '50', '100', '250', 'Outra'] },
    ],
  },
  {
    id: 'convite', nome: 'Convites de Casamento', cat: 'eventos', tag: 'Especial', bg: '#F6E9EE',
    desc: 'Convites personalizados para casamento, com papel especial e acabamento caprichado.',
    opcoes: [
      { nome: 'Formato', valores: ['Cartão simples', 'Com envelope', 'Cartão + envelope + tag'] },
      { nome: 'Quantidade', valores: ['50', '100', '150', '200', '300'] },
    ],
  },
];

/* ---------- Ilustrações (SVG) ---------- */
const sombra = (cx, cy, rx) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="6" fill="${K}" opacity=".12"/>`;
const ARTE = {
  banner: () => `
    ${sombra(120, 162, 46)}
    <rect x="116" y="18" width="8" height="142" rx="2" fill="#2A2A36"/>
    <rect x="84" y="16" width="72" height="6" rx="3" fill="#2A2A36"/>
    <rect x="88" y="22" width="64" height="118" rx="3" fill="${P}"/>
    <rect x="88" y="22" width="64" height="46" fill="${C}"/>
    <path d="M88 68 L152 50 V68 Z" fill="${M}"/>
    <rect x="96" y="80" width="40" height="7" rx="3" fill="${K}"/>
    <rect x="96" y="93" width="48" height="4" rx="2" fill="#C9C9D3"/>
    <rect x="96" y="101" width="34" height="4" rx="2" fill="#C9C9D3"/>
    <rect x="96" y="118" width="26" height="12" rx="6" fill="${Y}"/>
    <rect x="96" y="158" width="48" height="5" rx="2.5" fill="#2A2A36"/>`,
  placa: () => `
    ${sombra(120, 162, 60)}
    <rect x="72" y="104" width="6" height="58" fill="#8A8A96"/><rect x="162" y="104" width="6" height="58" fill="#8A8A96"/>
    <g transform="rotate(-3 120 80)">
      <rect x="50" y="40" width="140" height="74" rx="8" fill="${K}"/>
      <rect x="56" y="46" width="128" height="62" rx="5" fill="none" stroke="${Y}" stroke-width="2"/>
      <rect x="68" y="62" width="70" height="10" rx="4" fill="${P}"/>
      <rect x="68" y="80" width="48" height="6" rx="3" fill="${Y}"/>
      <circle cx="160" cy="77" r="14" fill="${M}"/>
      <path d="M154 77 l4 4 8-8" stroke="${P}" stroke-width="3" fill="none" stroke-linecap="round"/>
    </g>`,
  faixa: () => `
    <path d="M18 64 L40 70 M222 64 L200 70" stroke="#8A8A96" stroke-width="2"/>
    <path d="M18 116 L40 110 M222 116 L200 110" stroke="#8A8A96" stroke-width="2"/>
    <path d="M40 68 Q120 76 200 68 V112 Q120 120 40 112 Z" fill="${M}"/>
    <path d="M40 68 Q120 76 200 68 V80 Q120 88 40 80 Z" fill="${K}" opacity=".15"/>
    <rect x="64" y="84" width="88" height="11" rx="4" fill="${P}"/>
    <rect x="160" y="84" width="24" height="11" rx="4" fill="${Y}"/>
    <rect x="80" y="100" width="72" height="5" rx="2.5" fill="${P}" opacity=".7"/>
    <circle cx="44" cy="72" r="3" fill="${P}"/><circle cx="196" cy="72" r="3" fill="${P}"/>
    <circle cx="44" cy="108" r="3" fill="${P}"/><circle cx="196" cy="108" r="3" fill="${P}"/>`,
  pedestal: () => `
    ${sombra(120, 164, 50)}
    <path d="M86 160 L120 92 L154 160" stroke="#2A2A36" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M92 14 L148 14 M92 150 L148 150" stroke="#2A2A36" stroke-width="3" stroke-linecap="round"/>
    <rect x="94" y="16" width="52" height="132" rx="2" fill="${P}"/>
    <rect x="94" y="16" width="52" height="58" fill="#3B2A8C"/>
    <circle cx="120" cy="45" r="16" fill="${Y}"/>
    <rect x="102" y="86" width="36" height="7" rx="3" fill="${K}"/>
    <rect x="102" y="99" width="30" height="4" rx="2" fill="#C9C9D3"/>
    <rect x="102" y="107" width="34" height="4" rx="2" fill="#C9C9D3"/>
    <rect x="102" y="126" width="36" height="12" rx="6" fill="${M}"/>`,
  cavalete: () => `
    ${sombra(120, 164, 60)}
    <path d="M78 160 L108 22 L138 22 L168 160" fill="none" stroke="#2A2A36" stroke-width="5" stroke-linejoin="round"/>
    <path d="M100 30 L146 30 L160 140 L86 140 Z" fill="${P}"/>
    <path d="M100 30 L146 30 L150 64 L95 64 Z" fill="${C}"/>
    <rect x="104" y="76" width="38" height="8" rx="3" fill="${K}"/>
    <rect x="100" y="92" width="46" height="5" rx="2.5" fill="#C9C9D3"/>
    <rect x="98" y="102" width="50" height="5" rx="2.5" fill="#C9C9D3"/>
    <circle cx="123" cy="124" r="9" fill="${M}"/>`,
  cartao: () => `
    <g transform="rotate(-14 110 100)">
      <rect x="44" y="64" width="128" height="74" rx="7" fill="${K}"/>
      <path d="M58 82 l8 20 8-14 8 14 8-20" stroke="${M}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g transform="rotate(6 140 90)">
      ${sombra(140, 146, 60)}
      <rect x="76" y="52" width="128" height="74" rx="7" fill="${P}"/>
      <rect x="88" y="66" width="56" height="8" rx="3" fill="${K}"/>
      <rect x="88" y="79" width="36" height="5" rx="2.5" fill="${M}"/>
      <rect x="88" y="100" width="64" height="4" rx="2" fill="#C9C9D3"/>
      <rect x="88" y="108" width="50" height="4" rx="2" fill="#C9C9D3"/>
      <circle cx="184" cy="72" r="4" fill="${C}"/><circle cx="184" cy="84" r="4" fill="${M}"/><circle cx="184" cy="96" r="4" fill="${Y}"/>
    </g>`,
  ima: () => `
    <rect x="186" y="50" width="8" height="80" rx="4" fill="${K}" opacity=".12"/>
    <g transform="rotate(-6 100 80)">
      <rect x="62" y="44" width="96" height="62" rx="8" fill="${Y}"/>
      <circle cx="88" cy="75" r="16" fill="${M}"/>
      <path d="M82 70 a6 6 0 0 1 12 0 c0 6 -6 9 -6 13 c0-4-6-7-6-13Z" fill="${P}"/>
      <rect x="112" y="62" width="34" height="7" rx="3" fill="${K}"/>
      <rect x="112" y="74" width="28" height="4" rx="2" fill="${K}" opacity=".5"/>
      <rect x="112" y="84" width="22" height="9" rx="4.5" fill="${K}"/>
    </g>
    <g transform="rotate(5 110 130)">
      <rect x="78" y="114" width="70" height="44" rx="7" fill="${C}"/>
      <rect x="88" y="126" width="38" height="6" rx="3" fill="${P}"/>
      <rect x="88" y="138" width="26" height="4" rx="2" fill="${P}" opacity=".7"/>
    </g>`,
  'folheto-pizzaria': () => `
    ${sombra(120, 164, 50)}
    <g transform="rotate(-5 120 90)">
      <rect x="74" y="16" width="96" height="140" rx="4" fill="${K}"/>
      <circle cx="122" cy="70" r="36" fill="#E8A33A"/>
      <circle cx="122" cy="70" r="30" fill="#F6C451"/>
      <circle cx="110" cy="58" r="6" fill="#D2381E"/><circle cx="134" cy="62" r="6" fill="#D2381E"/>
      <circle cx="118" cy="82" r="6" fill="#D2381E"/><circle cx="138" cy="80" r="5" fill="#D2381E"/>
      <circle cx="104" cy="74" r="3" fill="#3C8C3C"/><circle cx="126" cy="70" r="3" fill="#3C8C3C"/>
      <path d="M122 70 L158 54 A36 36 0 0 1 158 86 Z" fill="${K}"/>
      <rect x="86" y="116" width="54" height="9" rx="3" fill="${Y}"/>
      <rect x="86" y="130" width="70" height="4" rx="2" fill="${P}" opacity=".6"/>
      <rect x="86" y="139" width="40" height="8" rx="4" fill="${M}"/>
    </g>`,
  flyer: () => `
    <g transform="rotate(8 150 90)">
      <rect x="112" y="24" width="84" height="120" rx="4" fill="${Y}"/>
    </g>
    ${sombra(108, 164, 46)}
    <g transform="rotate(-6 100 90)">
      <rect x="58" y="20" width="88" height="128" rx="4" fill="${P}"/>
      <path d="M58 20 h88 v62 L58 100 Z" fill="${M}"/>
      <text x="68" y="62" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="26" fill="${P}">50%</text>
      <rect x="68" y="70" width="40" height="5" rx="2.5" fill="${P}" opacity=".8"/>
      <rect x="68" y="108" width="60" height="6" rx="3" fill="${K}"/>
      <rect x="68" y="120" width="44" height="4" rx="2" fill="#C9C9D3"/>
      <rect x="68" y="130" width="28" height="9" rx="4.5" fill="${C}"/>
    </g>`,
  nota: () => `
    ${sombra(120, 162, 54)}
    <rect x="72" y="32" width="100" height="126" rx="3" fill="#F2B8CF"/>
    <rect x="70" y="28" width="100" height="126" rx="3" fill="#BDE6F4"/>
    <rect x="68" y="24" width="100" height="126" rx="3" fill="${P}"/>
    <rect x="68" y="24" width="100" height="12" rx="3" fill="${K}"/>
    <g fill="#E9E9EE">${[0,1,2,3,4,5,6,7].map(i=>`<circle cx="${76+i*12}" cy="30" r="2.5"/>`).join('')}</g>
    <rect x="78" y="46" width="44" height="7" rx="3" fill="${K}"/>
    <text x="134" y="53" font-family="Inter, sans-serif" font-weight="700" font-size="9" fill="${M}">Nº 0001</text>
    <g fill="#D9D9E0">${[0,1,2,3,4,5].map(i=>`<rect x="78" y="${66+i*12}" width="80" height="1.5"/>`).join('')}</g>
    <rect x="78" y="134" width="50" height="5" rx="2.5" fill="${C}"/>`,
  envelope: () => `
    ${sombra(120, 150, 68)}
    <g transform="rotate(-4 120 95)">
      <rect x="44" y="50" width="152" height="94" rx="6" fill="${P}"/>
      <path d="M44 56 L120 104 L196 56" fill="none" stroke="#E2E2E8" stroke-width="2"/>
      <path d="M44 56 a6 6 0 0 1 6-6 h140 a6 6 0 0 1 6 6 L120 100 Z" fill="#F4F4F7"/>
      <circle cx="120" cy="96" r="12" fill="${M}"/>
      <path d="M114 92 l6 6 6-10" stroke="${P}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <rect x="56" y="122" width="40" height="5" rx="2.5" fill="${K}"/>
      <rect x="56" y="131" width="28" height="4" rx="2" fill="#C9C9D3"/>
      <rect x="168" y="118" width="18" height="18" rx="2" fill="${C}"/>
    </g>`,
  calendario: () => `
    ${sombra(120, 160, 66)}
    <path d="M58 156 L84 40 L156 40 L182 156 Z" fill="#2A2A36"/>
    <g>
      <rect x="66" y="44" width="108" height="112" rx="4" fill="${P}"/>
      <g fill="${K}">${[0,1,2,3,4,5,6,7,8,9].map(i=>`<rect x="${76+i*9.5}" y="38" width="3" height="12" rx="1.5"/>`).join('')}</g>
      <rect x="66" y="52" width="108" height="26" fill="${C}"/>
      <text x="76" y="71" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="14" fill="${P}">JANEIRO</text>
      <g fill="#E1E1E7">${Array.from({length:21}).map((_,i)=>`<rect x="${76+(i%7)*13}" y="${86+Math.floor(i/7)*14}" width="9" height="9" rx="2"/>`).join('')}</g>
      <rect x="115" y="100" width="9" height="9" rx="2" fill="${M}"/>
      <rect x="76" y="132" width="36" height="5" rx="2.5" fill="${Y}"/>
      <rect x="76" y="141" width="56" height="4" rx="2" fill="#C9C9D3"/>
    </g>`,
  convite: () => `
    ${sombra(120, 160, 64)}
    <g transform="rotate(-8 100 110)">
      <rect x="46" y="70" width="132" height="84" rx="4" fill="#E9D3DC"/>
      <path d="M46 74 L112 118 L178 74" fill="none" stroke="#D9BCC8" stroke-width="2"/>
    </g>
    <g transform="rotate(5 130 80)">
      <rect x="86" y="18" width="92" height="124" rx="4" fill="${P}"/>
      <rect x="92" y="24" width="80" height="112" rx="2" fill="none" stroke="#C8A96A" stroke-width="1.2"/>
      <path d="M132 50 c-5-8-17-4-14 5 c2 6 14 13 14 13 s12-7 14-13 c3-9-9-13-14-5Z" fill="${M}"/>
      <text x="132" y="88" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="${K}">Ana &amp; João</text>
      <rect x="112" y="98" width="40" height="3" rx="1.5" fill="#C8A96A"/>
      <rect x="106" y="108" width="52" height="3" rx="1.5" fill="#D9D9E0"/>
      <rect x="114" y="116" width="36" height="3" rx="1.5" fill="#D9D9E0"/>
    </g>`,
};
const arte = (p) => `<svg viewBox="0 0 240 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${ARTE[p.id]()}</svg>`;

/* ---------- Utilidades ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nomeCat = (id) => CATEGORIAS.find((c) => c.id === id)?.nome ?? '';
const waLink = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

const store = {
  get() { try { return JSON.parse(localStorage.getItem('wprint-pedido')) || []; } catch { return []; } },
  set(v) { try { localStorage.setItem('wprint-pedido', JSON.stringify(v)); } catch {} },
};

let pedido = store.get();
let filtro = 'todos';
let busca = '';
let atual = null;

/* ---------- Catálogo ---------- */
const grid = $('[data-grid]');
const filtros = $('[data-filters]');

filtros.innerHTML = CATEGORIAS.map((c) =>
  `<button class="chip" role="tab" type="button" data-cat="${c.id}" aria-selected="${c.id === filtro}">${c.nome}</button>`
).join('');
filtros.addEventListener('click', (e) => {
  const b = e.target.closest('[data-cat]');
  if (!b) return;
  filtro = b.dataset.cat;
  $$('.chip', filtros).forEach((x) => x.setAttribute('aria-selected', x === b));
  render();
});
$('[data-search]').addEventListener('input', (e) => { busca = e.target.value.trim().toLowerCase(); render(); });

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function render() {
  const lista = PRODUTOS.filter((p) =>
    (filtro === 'todos' || p.cat === filtro) &&
    (!busca || norm(p.nome + ' ' + p.desc).includes(norm(busca)))
  );
  grid.innerHTML = lista.map((p, i) => `
    <button class="card" type="button" data-id="${p.id}" style="--i:${i};--bg:${p.bg}">
      ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ''}
      <div class="card__art">${arte(p)}</div>
      <div class="card__body">
        <span class="card__cat">${nomeCat(p.cat)}</span>
        <span class="card__name">${p.nome}</span>
        <span class="card__desc">${p.desc}</span>
        <span class="card__go">Personalizar <svg class="ic"><use href="#i-arrow"/></svg></span>
      </div>
    </button>`).join('');
  $('[data-empty]').hidden = lista.length > 0;
}
grid.addEventListener('click', (e) => {
  const c = e.target.closest('[data-id]');
  if (c) abrirProduto(c.dataset.id);
});

/* ---------- Produto ---------- */
const pd = $('[data-product-dialog]');
const pdForm = $('[data-product-form]');

function abrirProduto(id) {
  atual = PRODUTOS.find((p) => p.id === id);
  if (!atual) return;
  pdForm.reset();
  $('[data-pd-art]').style.setProperty('--bg', atual.bg);
  $('[data-pd-art]').innerHTML = arte(atual);
  $('[data-pd-cat]').textContent = nomeCat(atual.cat);
  $('[data-pd-title]').textContent = atual.nome;
  $('[data-pd-desc]').textContent = atual.desc;
  $('[data-pd-opts]').innerHTML = atual.opcoes.map((o, oi) => `
    <fieldset class="field">
      <span>${o.nome}</span>
      <div class="opts">
        ${o.valores.map((v, vi) => `
          <label><input type="radio" name="op${oi}" value="${esc(v)}" ${vi === 0 ? 'checked' : ''}><span>${v}</span></label>`).join('')}
      </div>
    </fieldset>`).join('');
  pd.showModal();
  pd.querySelector('.sheet__in').scrollTop = 0;
}

function lerProduto() {
  const fd = new FormData(pdForm);
  return {
    uid: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    id: atual.id,
    nome: atual.nome,
    opcoes: atual.opcoes.map((o, oi) => [o.nome, fd.get(`op${oi}`)]),
    obs: (fd.get('obs') || '').trim(),
  };
}

pdForm.addEventListener('submit', (e) => {
  if (e.submitter?.value !== 'add') return;
  e.preventDefault();
  pedido.push(lerProduto());
  salvar();
  pd.close();
  toast(`${atual.nome} adicionado ao pedido`);
  $$('[data-cart-count]').forEach((n) => { n.classList.remove('bump'); void n.offsetWidth; n.classList.add('bump'); });
});
$('[data-pd-now]').addEventListener('click', () => {
  const item = lerProduto();
  window.open(waLink(mensagem([item], {})), '_blank', 'noopener');
});
pd.addEventListener('click', (e) => { if (e.target === pd) pd.close(); }); // clique fora fecha

/* ---------- Pedido ---------- */
const cart = $('[data-cart-dialog]');
const checkout = $('[data-checkout]');

$$('[data-open-cart]').forEach((b) => b.addEventListener('click', () => { renderPedido(); cart.showModal(); }));
$$('[data-close-cart]').forEach((b) => b.addEventListener('click', () => {
  cart.close();
  if (b.dataset.goto) document.querySelector(b.dataset.goto)?.scrollIntoView();
}));
cart.addEventListener('click', (e) => { if (e.target === cart) cart.close(); });

function salvar() { store.set(pedido); atualizarContador(); renderPedido(); }

function atualizarContador() {
  const n = pedido.length;
  $$('[data-cart-count]').forEach((el) => { el.textContent = n; el.hidden = n === 0; });
  $('[data-dock-label]').textContent = n ? `Ver pedido · ${n} ${n === 1 ? 'item' : 'itens'}` : 'Seu pedido está vazio';
  $('.dock__cart').classList.toggle('has-items', n > 0);
}

function renderPedido() {
  const vazio = pedido.length === 0;
  $('[data-cart-empty]').hidden = !vazio;
  checkout.hidden = vazio;
  $('[data-cart-foot]').hidden = vazio;
  $('[data-cart-list]').innerHTML = pedido.map((it) => {
    const p = PRODUTOS.find((x) => x.id === it.id);
    return `
      <li class="citem">
        <div class="citem__art" style="--bg:${p?.bg ?? ''}">${p ? arte(p) : ''}</div>
        <div>
          <b>${esc(it.nome)}</b>
          <ul>
            ${it.opcoes.map(([k, v]) => `<li>${esc(k)}: ${esc(v)}</li>`).join('')}
            ${it.obs ? `<li>Obs.: ${esc(it.obs)}</li>` : ''}
          </ul>
        </div>
        <button class="citem__rm" type="button" data-rm="${it.uid}" aria-label="Remover ${esc(it.nome)}"><svg class="ic"><use href="#i-trash"/></svg></button>
      </li>`;
  }).join('');
}
$('[data-cart-list]').addEventListener('click', (e) => {
  const b = e.target.closest('[data-rm]');
  if (!b) return;
  pedido = pedido.filter((it) => it.uid !== b.dataset.rm);
  salvar();
});

function mensagem(itens, { nome, arte, entrega }) {
  const linhas = [
    `Olá, Wagner! Vim pelo site da *WPrint* e gostaria de um orçamento:`,
    '',
  ];
  itens.forEach((it, i) => {
    linhas.push(`*${i + 1}. ${it.nome}*`);
    it.opcoes.forEach(([k, v]) => linhas.push(`• ${k}: ${v}`));
    if (it.obs) linhas.push(`• Obs.: ${it.obs}`);
    linhas.push('');
  });
  if (nome) linhas.push(`*Nome:* ${nome}`);
  if (arte) linhas.push(`*Arte:* ${arte}`);
  if (entrega) linhas.push(`*Entrega:* ${entrega}`);
  if (nome || arte || entrega) linhas.push('');
  linhas.push('Aguardo o retorno. Obrigado!');
  return linhas.join('\n');
}

$('[data-send]').addEventListener('click', () => {
  if (!checkout.reportValidity()) return;
  const fd = new FormData(checkout);
  const texto = mensagem(pedido, { nome: fd.get('nome').trim(), arte: fd.get('arte'), entrega: fd.get('entrega') });
  window.open(waLink(texto), '_blank', 'noopener');
});

/* ---------- Extras ---------- */
let toastT;
function toast(msg) {
  const t = $('[data-toast]');
  t.textContent = msg;
  t.classList.add('is-on');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('is-on'), 2200);
}

$$('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); toast('Chave PIX copiada!'); }
  catch { toast('Chave PIX: ' + b.dataset.copy); }
}));

const topbar = $('.topbar');
const dock = $('[data-dock]');
let ultimoY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  topbar.classList.toggle('is-scrolled', y > 8);
  dock.classList.toggle('is-hidden', y > ultimoY && y > 300 && pedido.length === 0);
  ultimoY = y;
}, { passive: true });

$('[data-year]').textContent = new Date().getFullYear();

render();
atualizarContador();
renderPedido();
