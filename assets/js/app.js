/* ==========================================================
   WPrint — catálogo, pedido e envio pelo WhatsApp
   Para editar produtos/opções, mexa só no array PRODUTOS.
   ========================================================== */
const WHATSAPP = '5511983294003';

const CATEGORIAS = [
  { id: 'todos', nome: 'Todos' },
  { id: 'visual', nome: 'Comunicação visual' },
  { id: 'papelaria', nome: 'Papelaria' },
  { id: 'promo', nome: 'Promocionais' },
  { id: 'eventos', nome: 'Eventos' },
];

const PRODUTOS = [
  {
    id: 'banner', nome: 'Banners', cat: 'visual', tag: 'Mais pedido',
    desc: 'Banner em lona com impressão digital em alta resolução. Ideal para fachadas, eventos e pontos de venda.',
    opcoes: [
      { nome: 'Tamanho', valores: ['60 × 90 cm', '80 × 120 cm', '90 × 150 cm', '100 × 200 cm', 'Personalizado'] },
      { nome: 'Acabamento', valores: ['Bastão e cordão', 'Ilhós', 'Sem acabamento'] },
      { nome: 'Quantidade', valores: ['1', '2', '5', '10', 'Outra'] },
    ],
  },
  {
    id: 'placa', nome: 'Placas', cat: 'visual',
    desc: 'Placas de sinalização e identificação para comércios, obras, imóveis e empresas.',
    opcoes: [
      { nome: 'Material', valores: ['PVC', 'PS', 'ACM', 'Não sei, me ajude'] },
      { nome: 'Tamanho', valores: ['30 × 20 cm', '50 × 30 cm', '100 × 50 cm', 'Personalizado'] },
      { nome: 'Quantidade', valores: ['1', '2', '5', '10', 'Outra'] },
    ],
  },
  {
    id: 'faixa', nome: 'Faixas', cat: 'visual',
    desc: 'Faixas em lona para promoções, inaugurações, festas e comunicados.',
    opcoes: [
      { nome: 'Tamanho', valores: ['2 × 0,7 m', '3 × 0,7 m', '4 × 1 m', '5 × 1 m', 'Personalizado'] },
      { nome: 'Acabamento', valores: ['Ilhós', 'Bastão e cordão', 'Sem acabamento'] },
      { nome: 'Quantidade', valores: ['1', '2', '5', 'Outra'] },
    ],
  },
  {
    id: 'pedestal', nome: 'Pedestal com Banner', cat: 'visual',
    desc: 'Banner com pedestal (estrutura) pronto para montar em lojas, feiras e recepções.',
    opcoes: [
      { nome: 'Modelo', valores: ['X-Banner', 'Roll-up', 'Não sei, me ajude'] },
      { nome: 'Tamanho', valores: ['60 × 160 cm', '80 × 180 cm', '80 × 200 cm'] },
      { nome: 'Quantidade', valores: ['1', '2', '3', 'Outra'] },
    ],
  },
  {
    id: 'cavalete', nome: 'Cavaletes', cat: 'visual',
    desc: 'Cavalete de calçada com banner dupla face para chamar atenção na porta do seu negócio.',
    opcoes: [
      { nome: 'Impressão', valores: ['Um lado', 'Dois lados'] },
      { nome: 'Item', valores: ['Cavalete + banner', 'Só o banner (refil)'] },
      { nome: 'Quantidade', valores: ['1', '2', '3', 'Outra'] },
    ],
  },
  {
    id: 'cartao', nome: 'Cartões de Visita', cat: 'papelaria', tag: 'Clássico',
    desc: 'Cartões de visita em papel couché com impressão colorida. A primeira impressão da sua marca.',
    opcoes: [
      { nome: 'Quantidade', valores: ['100', '250', '500', '1.000', '2.000'] },
      { nome: 'Impressão', valores: ['Frente', 'Frente e verso'] },
      { nome: 'Acabamento', valores: ['Sem verniz', 'Verniz total', 'Laminação fosca'] },
    ],
  },
  {
    id: 'ima', nome: 'Ímãs de Geladeira', cat: 'promo',
    desc: 'Ímãs personalizados: o jeito certo de ficar na porta da geladeira do seu cliente.',
    opcoes: [
      { nome: 'Tamanho', valores: ['5 × 5 cm', '7 × 5 cm', '9 × 5 cm', 'Personalizado'] },
      { nome: 'Quantidade', valores: ['100', '250', '500', '1.000', '2.000'] },
    ],
  },
  {
    id: 'folheto-pizzaria', nome: 'Folhetos de Pizzaria', cat: 'promo', tag: 'Delivery',
    desc: 'Cardápios e folhetos para pizzarias, lanchonetes e delivery. Cores vivas que dão fome.',
    opcoes: [
      { nome: 'Tamanho', valores: ['10 × 15 cm', '15 × 21 cm (A5)', '21 × 30 cm (A4)'] },
      { nome: 'Impressão', valores: ['Frente', 'Frente e verso'] },
      { nome: 'Quantidade', valores: ['500', '1.000', '2.500', '5.000', '10.000'] },
    ],
  },
  {
    id: 'flyer', nome: 'Flyers', cat: 'promo',
    desc: 'Flyers para divulgar promoções, eventos e serviços. Distribuição rápida, resultado na hora.',
    opcoes: [
      { nome: 'Tamanho', valores: ['10 × 15 cm', '15 × 21 cm (A5)', '21 × 30 cm (A4)'] },
      { nome: 'Impressão', valores: ['Frente', 'Frente e verso'] },
      { nome: 'Quantidade', valores: ['500', '1.000', '2.500', '5.000', '10.000'] },
    ],
  },
  {
    id: 'nota', nome: 'Notas Fiscais', cat: 'papelaria',
    desc: 'Blocos de notas fiscais, pedidos e recibos numerados, com vias em papel carbonado.',
    opcoes: [
      { nome: 'Tipo', valores: ['Nota fiscal', 'Pedido', 'Recibo', 'Orçamento'] },
      { nome: 'Vias', valores: ['1 via', '2 vias', '3 vias'] },
      { nome: 'Blocos', valores: ['5', '10', '20', '50'] },
    ],
  },
  {
    id: 'envelope', nome: 'Envelopes em Geral', cat: 'papelaria',
    desc: 'Envelopes personalizados com a sua marca: carta, ofício, saco e outros formatos.',
    opcoes: [
      { nome: 'Modelo', valores: ['Carta', 'Ofício', 'Saco A4', 'Saco A3', 'Outro'] },
      { nome: 'Quantidade', valores: ['100', '250', '500', '1.000'] },
    ],
  },
  {
    id: 'calendario', nome: 'Calendários de Mesa', cat: 'promo',
    desc: 'Calendário de mesa personalizado: sua marca à vista o ano inteiro. Ótimo brinde de fim de ano.',
    opcoes: [
      { nome: 'Modelo', valores: ['12 páginas (1 mês por folha)', '6 páginas (2 meses por folha)'] },
      { nome: 'Quantidade', valores: ['25', '50', '100', '250', 'Outra'] },
    ],
  },
  {
    id: 'convite', nome: 'Convites de Casamento', cat: 'eventos', tag: 'Especial',
    desc: 'Convites personalizados para casamento, com papel especial e acabamento caprichado.',
    opcoes: [
      { nome: 'Formato', valores: ['Cartão simples', 'Com envelope', 'Cartão + envelope + tag'] },
      { nome: 'Quantidade', valores: ['50', '100', '150', '200', '300'] },
    ],
  },
];

/* ---------- Fotos dos produtos (assets/img/produtos/<id>.webp) ---------- */
const arte = (p) => `<img src="assets/img/produtos/${p.id}.webp" alt="${p.nome}" width="1200" height="900" loading="lazy" decoding="async">`;

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
    <button class="card" type="button" data-id="${p.id}" style="--i:${i}">
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
        <div class="citem__art">${p ? arte(p) : ''}</div>
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
