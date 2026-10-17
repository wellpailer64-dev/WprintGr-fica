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

// Especificações baseadas no catálogo de mercado (formatos, papéis e acabamentos usuais).
// "Outra" / "Personalizado": o cliente detalha no campo de observações.
const PRODUTOS = [
  {
    id: 'banner', nome: 'Banners', cat: 'visual', tag: 'Mais pedido',
    desc: 'Banner com impressão digital colorida em alta resolução. Ideal para fachadas, eventos, vitrines e pontos de venda.',
    specs: ['Lona 340g ou tecido', 'Impressão colorida (4x0)', 'Uso interno e externo'],
    opcoes: [
      { nome: 'Material', valores: ['Lona Brilho 340g', 'Lona Fosca 340g', 'Tecido Poliéster'] },
      { nome: 'Tamanho', valores: ['40 × 60 cm', '60 × 90 cm', '70 × 100 cm', '80 × 120 cm', '90 × 120 cm', '100 × 150 cm', 'Personalizado'] },
      { nome: 'Acabamento', valores: ['Bastão e cordão', 'Ilhós', 'Sem acabamento (refile)'] },
      { nome: 'Quantidade', valores: ['1', '2', '3', '5', '10', 'Outra'] },
    ],
  },
  {
    id: 'placa', nome: 'Placas', cat: 'visual',
    desc: 'Placas rígidas para sinalização, fachadas, imobiliárias, obras e identificação de ambientes.',
    specs: ['PVC, PS, ACM ou polionda', 'Impressão digital colorida', 'Corte reto ou personalizado'],
    opcoes: [
      { nome: 'Material', valores: ['PVC 2 mm', 'PVC 3 mm', 'PS 2 mm', 'ACM 3 mm', 'Polionda 4 mm', 'Não sei, me ajude'] },
      { nome: 'Tamanho', valores: ['30 × 20 cm', '40 × 30 cm', '60 × 40 cm', '97 × 62 cm', '100 × 50 cm', 'Personalizado'] },
      { nome: 'Acabamento', valores: ['Corte reto', 'Corte personalizado', 'Com furos para fixar', 'Com fita dupla-face'] },
      { nome: 'Quantidade', valores: ['1', '2', '5', '10', '25', 'Outra'] },
    ],
  },
  {
    id: 'faixa', nome: 'Faixas', cat: 'visual',
    desc: 'Faixas para promoções, inaugurações, festas e comunicados. Vista de longe e fácil de instalar.',
    specs: ['Lona 340g ou tecido', 'Impressão colorida (4x0)', 'Pronta para pendurar'],
    opcoes: [
      { nome: 'Material', valores: ['Lona Brilho 340g', 'Lona Fosca 340g', 'Tecido Poliéster'] },
      { nome: 'Tamanho', valores: ['200 × 40 cm', '200 × 70 cm', '300 × 70 cm', '300 × 100 cm', '400 × 60 cm', '500 × 100 cm', 'Personalizado'] },
      { nome: 'Acabamento', valores: ['Bastão, cordão e 4 ilhoses', '4 ilhoses', 'Bastão e cordão'] },
      { nome: 'Quantidade', valores: ['1', '2', '5', '10', 'Outra'] },
    ],
  },
  {
    id: 'pedestal', nome: 'Pedestal com Banner', cat: 'visual',
    desc: 'Banner com estrutura própria, pronto para montar em lojas, feiras, recepções e eventos.',
    specs: ['Estrutura inclusa ou só o refil', 'Lona Brilho 340g', 'Monta em segundos'],
    opcoes: [
      { nome: 'Modelo', valores: ['X-Banner (suporte em X)', 'Roll-up (retrátil)', 'Banner com tripé'] },
      { nome: 'Tamanho', valores: ['60 × 90 cm (tripé)', '60 × 160 cm', '80 × 180 cm', '80 × 200 cm'] },
      { nome: 'Item', valores: ['Banner + estrutura', 'Só o banner (refil)'] },
      { nome: 'Quantidade', valores: ['1', '2', '3', '5', 'Outra'] },
    ],
  },
  {
    id: 'cavalete', nome: 'Cavaletes', cat: 'visual',
    desc: 'Cavalete de calçada para chamar a atenção de quem passa na porta do seu negócio.',
    specs: ['Estrutura de metal ou polionda', 'Uma ou duas faces', 'Refil avulso disponível'],
    opcoes: [
      { nome: 'Modelo', valores: ['Metal com banner (45 × 96 cm)', 'Polionda (60 × 97,5 cm)', 'Personalizado'] },
      { nome: 'Impressão', valores: ['Um lado', 'Dois lados'] },
      { nome: 'Item', valores: ['Cavalete completo', 'Só a impressão (refil)'] },
      { nome: 'Quantidade', valores: ['1', '2', '3', '5', 'Outra'] },
    ],
  },
  {
    id: 'cartao', nome: 'Cartões de Visita', cat: 'papelaria', tag: 'Clássico',
    desc: 'O cartão certo para a primeira impressão da sua marca, do básico ao premium.',
    specs: ['Formato padrão 88 × 48 mm', 'Couché 300g a Premium 600g', 'Vários acabamentos'],
    opcoes: [
      { nome: 'Papel', valores: ['Couché Fosco 300g', 'Couché Brilho 300g', 'Premium 600g', 'Kraft 280g', 'Reciclato 240g', 'Perolizado 250g'] },
      { nome: 'Formato', valores: ['88 × 48 mm (padrão)', '85 × 54 mm', '50 × 50 mm (quadrado)', '88 × 98 mm (duplo, com vinco)'] },
      { nome: 'Impressão', valores: ['Frente (4x0)', 'Frente e verso (4x4)'] },
      { nome: 'Acabamento', valores: ['Sem enobrecimento', 'Verniz total brilho', 'Laminação fosca', 'Laminação fosca + verniz localizado', 'Soft touch', 'Hot stamping'] },
      { nome: 'Cantos', valores: ['Retos', 'Arredondados'] },
      { nome: 'Quantidade', valores: ['100', '250', '500', '1.000', '2.000', '5.000'] },
    ],
  },
  {
    id: 'ima', nome: 'Ímãs de Geladeira', cat: 'promo',
    desc: 'Ímãs personalizados: o jeito certo de ficar na porta da geladeira do seu cliente o ano todo.',
    specs: ['Manta magnética 0,3 mm', 'Impressão colorida (4x0)', 'Opção com calendário'],
    opcoes: [
      { nome: 'Modelo', valores: ['Ímã simples', 'Ímã com bloco de calendário'] },
      { nome: 'Formato', valores: ['50 × 40 mm', '50 × 50 mm', '50 × 80 mm', '74 × 105 mm', 'Personalizado'] },
      { nome: 'Acabamento', valores: ['Verniz total brilho', 'Sem verniz'] },
      { nome: 'Corte', valores: ['Reto', 'Personalizado (formato da arte)'] },
      { nome: 'Quantidade', valores: ['100', '200', '500', '1.000', '2.000', '5.000'] },
    ],
  },
  {
    id: 'folheto-pizzaria', nome: 'Folhetos de Pizzaria', cat: 'promo', tag: 'Delivery',
    desc: 'Cardápios e folhetos para pizzarias, lanchonetes e delivery. Cores vivas que dão fome.',
    specs: ['Couché brilho ou sulfite', 'Frente ou frente e verso', 'Com ou sem dobra'],
    opcoes: [
      { nome: 'Papel', valores: ['Couché Brilho 90g', 'Couché Brilho 115g', 'Couché Brilho 150g', 'Sulfite 75g'] },
      { nome: 'Formato', valores: ['10 × 15 cm', '15 × 21 cm (A5)', '20 × 28 cm', '21 × 29,7 cm (A4)'] },
      { nome: 'Impressão', valores: ['Frente (4x0)', 'Frente e verso (4x4)'] },
      { nome: 'Dobra', valores: ['Sem dobra', '1 dobra', '2 dobras'] },
      { nome: 'Quantidade', valores: ['500', '1.000', '2.500', '5.000', '10.000', '20.000'] },
    ],
  },
  {
    id: 'flyer', nome: 'Flyers', cat: 'promo',
    desc: 'Flyers para divulgar promoções, eventos e serviços. Distribuição rápida, resultado na hora.',
    specs: ['Couché, sulfite, reciclato ou kraft', 'Do A6 ao A4', 'Opção com verniz'],
    opcoes: [
      { nome: 'Papel', valores: ['Couché Brilho 115g', 'Couché Brilho 150g', 'Couché Brilho 250g', 'Couché Fosco 150g', 'Sulfite 90g', 'Reciclato 90g', 'Kraft 125g'] },
      { nome: 'Formato', valores: ['10 × 15 cm (A6)', '10 × 21 cm', '15 × 21 cm (A5)', '21 × 29,7 cm (A4)'] },
      { nome: 'Impressão', valores: ['Frente (4x0)', 'Frente e verso (4x4)'] },
      { nome: 'Acabamento', valores: ['Sem enobrecimento', 'Verniz total brilho', 'Verniz localizado'] },
      { nome: 'Quantidade', valores: ['100', '500', '1.000', '2.500', '5.000', '10.000'] },
    ],
  },
  {
    id: 'nota', nome: 'Notas Fiscais e Talões', cat: 'papelaria',
    desc: 'Blocos de notas, pedidos, recibos, orçamentos e comandas, numerados e com vias autocopiativas.',
    specs: ['1, 2 ou 3 vias', 'Numeração e serrilha', 'Blocos de 50 ou 100 folhas'],
    opcoes: [
      { nome: 'Tipo', valores: ['Nota fiscal', 'Pedido', 'Recibo', 'Orçamento', 'Comanda'] },
      { nome: 'Vias', valores: ['1 via (100 folhas)', '2 vias autocopiativas (50 × 2)', '3 vias autocopiativas (50 × 3)'] },
      { nome: 'Formato', valores: ['10,5 × 14,8 cm (A6)', '14,8 × 21 cm (A5)', '10 × 21 cm (comanda)', '21 × 29,7 cm (A4)'] },
      { nome: 'Impressão', valores: ['1 cor', 'Colorida'] },
      { nome: 'Acabamento', valores: ['Numerado + serrilha', 'Só numerado', 'Sem numeração'] },
      { nome: 'Blocos', valores: ['1', '5', '10', '20', '50', 'Outra'] },
    ],
  },
  {
    id: 'envelope', nome: 'Envelopes em Geral', cat: 'papelaria',
    desc: 'Envelopes personalizados com a sua marca, para correspondência, documentos e entregas.',
    specs: ['Sulfite, kraft ou reciclato', 'Impressão 1 cor ou colorida', 'Do carta ao saco A3'],
    opcoes: [
      { nome: 'Modelo', valores: ['Comercial (11,4 × 16,2 cm)', 'Ofício (11,5 × 23 cm)', 'Saco (20 × 28 cm)', 'Saco A4 (24 × 34 cm)', 'Saco A3 (32 × 40 cm)', 'Outro'] },
      { nome: 'Papel', valores: ['Sulfite 80g', 'Sulfite 90g', 'Kraft 80g', 'Kraft 125g', 'Reciclato 90g'] },
      { nome: 'Impressão', valores: ['1 cor (1x0)', 'Colorida frente (4x0)'] },
      { nome: 'Quantidade', valores: ['100', '250', '500', '1.000', '2.500', '5.000'] },
    ],
  },
  {
    id: 'calendario', nome: 'Calendários de Mesa', cat: 'promo',
    desc: 'Calendário de mesa personalizado: sua marca à vista o ano inteiro. Ótimo brinde de fim de ano.',
    specs: ['Calendário 2027', 'Couché 250g', 'Vários modelos de base'],
    opcoes: [
      { nome: 'Modelo', valores: ['Base rígida com wire-o (15 × 20,5 cm)', 'Pirâmide (16 × 29,4 cm)', 'Porta-cartão', 'Porta-caneta', 'Base em PVC', 'Não sei, me ajude'] },
      { nome: 'Impressão', valores: ['Frente (4x0)', 'Frente e verso (4x4)'] },
      { nome: 'Quantidade', valores: ['10', '25', '50', '100', '250', '500'] },
    ],
  },
  {
    id: 'convite', nome: 'Convites de Casamento', cat: 'eventos', tag: 'Especial',
    desc: 'Convites personalizados para casamento, com papéis especiais e acabamento caprichado.',
    specs: ['Couché, perolizado ou color plus', 'Com envelope', 'Clássico, moderno ou romântico'],
    opcoes: [
      { nome: 'Estilo', valores: ['Clássico', 'Moderno', 'Romântico', 'Especial'] },
      { nome: 'Formato', valores: ['10 × 14,8 cm', '14,2 × 21 cm', '14,8 × 14,8 cm (quadrado)', '19 × 19 cm', '9,9 × 21 cm (tag)'] },
      { nome: 'Papel', valores: ['Couché 250g', 'Perolizado 180g', 'Color Plus 180g', 'Reciclato 240g', 'Diamond telado 180g'] },
      { nome: 'Composição', valores: ['Só o convite', 'Convite + envelope', 'Convite + envelope + tag'] },
      { nome: 'Impressão', valores: ['Frente (4x0)', 'Frente e verso (4x4)'] },
      { nome: 'Quantidade', valores: ['50', '100', '150', '200', '300'] },
    ],
  },
];

/* ---------- Taxa de criação de arte (até 2 alterações) ---------- */
// R$ 50 artes simples · R$ 60 artes complexas/várias páginas · R$ 90 os itens abaixo.
const TAXA_ARTE = { padrao: 50, 'folheto-pizzaria': 90, calendario: 90, convite: 90 };
const taxaArte = (p) => TAXA_ARTE[p.id] ?? TAXA_ARTE.padrao;
const reais = (v) => `R$ ${v}`;

/* ---------- Fotos dos produtos ---------- */
// <id>.webp = horizontal (catálogo) · <id>-v.webp = vertical (galeria da página do produto)
const VERTICAIS = new Set(PRODUTOS.map((p) => p.id));
const fotos = (p) => [
  ...(VERTICAIS.has(p.id) ? [{ src: `assets/img/produtos/${p.id}-v.webp`, w: 880, h: 1100 }] : []),
  { src: `assets/img/produtos/${p.id}.webp`, w: 1200, h: 900 },
];
const foto = (p) => `<img src="assets/img/produtos/${p.id}.webp" alt="${p.nome}" width="1200" height="900" loading="lazy" decoding="async">`;

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
const textoBusca = (p) => norm([p.nome, p.desc, ...p.specs, ...p.opcoes.flatMap((o) => o.valores)].join(' '));

const urlProduto = (p) => `#/produto/${p.id}`;

const cardHTML = (p, i) => `
    <a class="card" href="${urlProduto(p)}" data-id="${p.id}" style="--i:${i}">
      ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ''}
      <div class="card__art">${foto(p)}</div>
      <div class="card__body">
        <span class="card__cat">${nomeCat(p.cat)}</span>
        <span class="card__name">${p.nome}</span>
        <span class="card__desc">${p.desc}</span>
        <span class="card__go">Personalizar <svg class="ic"><use href="#i-arrow"/></svg></span>
      </div>
    </a>`;

function render() {
  const lista = PRODUTOS.filter((p) =>
    (filtro === 'todos' || p.cat === filtro) &&
    (!busca || textoBusca(p).includes(norm(busca)))
  );
  grid.innerHTML = lista.map(cardHTML).join('') + (lista.length ? `
    <a class="card card--custom" style="--i:${lista.length}" target="_blank" rel="noopener"
       href="${waLink(`${saudacao()}, Wagner! Vim pelo site da WPrint e preciso de um material que não encontrei no catálogo. Pode me ajudar?`)}">
      <svg class="card--custom__mark" aria-hidden="true"><use href="#mark"/></svg>
      <span class="card--custom__body">
        <span class="card__name">Não achou o que procura?</span>
        <span class="card--custom__txt">Conta pra gente o que você precisa. A WPrint faz impressos sob medida.</span>
      </span>
      <span class="btn btn--wa btn--sm"><svg class="ic"><use href="#i-wa"/></svg> Pedir sob medida</span>
    </a>` : '');
  $('[data-empty]').hidden = lista.length > 0;
  ajustarCustom();
}

// O card "sob medida" ocupa o espaço que sobra na última linha da grade.
function ajustarCustom() {
  const c = $('.card--custom', grid);
  if (!c) return;
  const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
  const n = grid.children.length - 1;
  const span = cols - (n % cols);
  c.style.gridColumn = `span ${span}`;
  c.classList.toggle('is-wide', span > 1);
}
addEventListener('resize', ajustarCustom);

/* ---------- Página do produto ---------- */
const home = $('[data-home]');
const pagina = $('[data-page]');
const pdForm = $('[data-product-form]');

// Pinta o fundo da moldura com a cor do canto da foto, para a foto "sumir" no fundo.
function fundoDaFoto(img) {
  try {
    const c = document.createElement('canvas');
    c.width = c.height = 1;
    c.getContext('2d').drawImage(img, 4, 4, 1, 1, 0, 0, 1, 1);
    const [r, g, b] = c.getContext('2d').getImageData(0, 0, 1, 1).data;
    img.parentElement.style.background = `rgb(${r} ${g} ${b})`;
  } catch {}
}

function mostrarFoto(f) {
  const box = $('[data-pd-art]');
  box.innerHTML = `<img src="${f.src}" alt="${esc(atual.nome)}" width="${f.w}" height="${f.h}" decoding="async">`;
  const img = box.firstChild;
  img.complete ? fundoDaFoto(img) : img.addEventListener('load', () => fundoDaFoto(img), { once: true });
  $$('[data-pd-thumbs] button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.src === f.src));
}

function abrirProduto(id) {
  atual = PRODUTOS.find((p) => p.id === id);
  if (!atual) return false;
  pdForm.reset();
  document.title = `${atual.nome} — WPrint Artes Gráficas`;
  $$('[data-pd-cat]').forEach((el) => { el.textContent = nomeCat(atual.cat); });
  $('[data-pd-title]').textContent = atual.nome;
  $('[data-pd-desc]').textContent = atual.desc;
  $('[data-pd-specs]').innerHTML = atual.specs.map((s) => `<li>${s}</li>`).join('');

  const lista = fotos(atual);
  $('[data-pd-thumbs]').innerHTML = lista.length > 1 ? lista.map((f, i) => `
    <button type="button" data-src="${f.src}" aria-label="Foto ${i + 1}"><img src="${f.src}" alt="" loading="lazy"></button>`).join('') : '';
  mostrarFoto(lista[0]);

  $('[data-pd-opts]').innerHTML = atual.opcoes.map((o, oi) => `
    <fieldset class="field">
      <span>${o.nome}</span>
      <div class="opts">
        ${o.valores.map((v, vi) => `
          <label><input type="radio" name="op${oi}" value="${esc(v)}" ${vi === 0 ? 'checked' : ''}><span>${v}</span></label>`).join('')}
      </div>
    </fieldset>`).join('') + `
    <fieldset class="field">
      <span>Arte</span>
      <div class="seg seg--arte">
        <label><input type="radio" name="arte" value="" checked><span>Já tenho a arte</span></label>
        <label><input type="radio" name="arte" value="sim"><span>Quero que a WPrint crie <small>+ ${reais(taxaArte(atual))}</small></span></label>
      </div>
      <small class="field__hint">Criação com até 2 alterações incluídas.</small>
    </fieldset>`;

  // Anterior / próximo (em loop) e sugestões da mesma categoria
  const i = PRODUTOS.indexOf(atual);
  const ant = PRODUTOS[(i - 1 + PRODUTOS.length) % PRODUTOS.length];
  const prox = PRODUTOS[(i + 1) % PRODUTOS.length];
  for (const [sel, p] of [['[data-pd-prev]', ant], ['[data-pd-next]', prox]]) {
    $(sel).href = urlProduto(p);
    $(`${sel} b`).textContent = p.nome;
  }
  const outros = PRODUTOS.filter((p) => p !== atual);
  const mais = [...outros.filter((p) => p.cat === atual.cat), ...outros.filter((p) => p.cat !== atual.cat)].slice(0, 4);
  $('[data-pd-more]').innerHTML = mais.map(cardHTML).join('');
  return true;
}

$('[data-pd-thumbs]').addEventListener('click', (e) => {
  const b = e.target.closest('[data-src]');
  if (b) mostrarFoto(fotos(atual).find((f) => f.src === b.dataset.src));
});

function lerProduto() {
  const fd = new FormData(pdForm);
  return {
    uid: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    id: atual.id,
    nome: atual.nome,
    opcoes: atual.opcoes.map((o, oi) => [o.nome, fd.get(`op${oi}`)]),
    taxaArte: fd.get('arte') ? taxaArte(atual) : 0,
    obs: (fd.get('obs') || '').trim(),
  };
}

const textoArte = (it) => it.taxaArte
  ? `Criação pela WPrint (${reais(it.taxaArte)}, até 2 alterações)`
  : 'Já tenho a arte';

pdForm.addEventListener('submit', (e) => {
  e.preventDefault();
  pedido.push(lerProduto());
  salvar();
  toast(`${atual.nome} adicionado ao pedido`);
  $$('[data-cart-count]').forEach((n) => { n.classList.remove('bump'); void n.offsetWidth; n.classList.add('bump'); });
  pdForm.reset();
});
$('[data-pd-now]').addEventListener('click', () => {
  abrirWhats(mensagem([lerProduto()], {}));
});

/* ---------- Navegação (#/produto/<id> abre a página; o resto é a home) ---------- */
let naPagina = false;
function rotear() {
  const m = location.hash.match(/^#\/produto\/([\w-]+)/);
  if (m && abrirProduto(m[1])) {
    home.hidden = true;
    pagina.hidden = false;
    document.body.classList.add('is-pp');
    scrollTo({ top: 0, behavior: naPagina ? 'smooth' : 'instant' });
    naPagina = true;
    return;
  }
  const voltando = naPagina;
  naPagina = false;
  home.hidden = false;
  pagina.hidden = true;
  document.body.classList.remove('is-pp');
  document.title = 'WPrint Artes Gráficas — Gráfica rápida';
  // vindo da página do produto, a âncora só existe depois de mostrar a home
  const alvo = location.hash.length > 1 && document.querySelector(location.hash);
  if (voltando || alvo) (alvo || home).scrollIntoView({ behavior: 'instant' });
}
addEventListener('hashchange', rotear);

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
        <div class="citem__art">${p ? foto(p) : ''}</div>
        <div>
          <b>${esc(it.nome)}</b>
          <ul>
            ${it.opcoes.map(([k, v]) => `<li>${esc(k)}: ${esc(v)}</li>`).join('')}
            <li class="${it.taxaArte ? 'is-arte' : ''}">Arte: ${textoArte(it)}</li>
            ${it.obs ? `<li>Obs.: ${esc(it.obs)}</li>` : ''}
          </ul>
        </div>
        <button class="citem__rm" type="button" data-rm="${it.uid}" aria-label="Remover ${esc(it.nome)}"><svg class="ic"><use href="#i-trash"/></svg></button>
      </li>`;
  }).join('');
  const taxa = totalArte(pedido);
  $('[data-arte-total]').hidden = !taxa;
  $('[data-arte-total] b').textContent = reais(taxa);
}

const totalArte = (itens) => itens.reduce((s, it) => s + (it.taxaArte || 0), 0);
$('[data-cart-list]').addEventListener('click', (e) => {
  const b = e.target.closest('[data-rm]');
  if (!b) return;
  pedido = pedido.filter((it) => it.uid !== b.dataset.rm);
  salvar();
});

const saudacao = () => {
  const h = new Date().getHours();
  return h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
};

function mensagem(itens, { nome, entrega }) {
  const linhas = [
    `${saudacao()}, Wagner! ${nome ? `Aqui é ${nome}. ` : ''}Tudo bem? 😊`,
    `Vim pelo site da *WPrint* e gostaria de um orçamento ${itens.length > 1 ? `destes ${itens.length} itens` : 'deste item'}:`,
    '',
  ];
  itens.forEach((it, i) => {
    linhas.push(`*${i + 1}. ${it.nome}*`);
    it.opcoes.forEach(([k, v]) => linhas.push(`• ${k}: ${v}`));
    linhas.push(`• Arte: ${textoArte(it)}`);
    if (it.obs) linhas.push(`• Obs.: ${it.obs}`);
    linhas.push('');
  });
  const taxa = totalArte(itens);
  if (taxa) linhas.push(`*Criação de arte:* ${reais(taxa)}`);
  if (entrega) linhas.push(`*Entrega:* ${entrega}`);
  if (taxa || entrega) linhas.push('');
  linhas.push('Pode me passar o valor e o prazo? Obrigado!');
  return linhas.join('\n');
}

// Abre o WhatsApp; se o navegador bloquear a nova aba, abre na mesma.
function abrirWhats(texto) {
  const url = waLink(texto);
  const w = window.open(url, '_blank');
  if (!w) location.href = url;
}

$('[data-send]').addEventListener('click', () => {
  if (!checkout.reportValidity()) return;
  const fd = new FormData(checkout);
  abrirWhats(mensagem(pedido, { nome: fd.get('nome').trim(), entrega: fd.get('entrega') }));
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

/* ---------- Leque de cores interativo (hero) ---------- */
const arteHero = $('.hero__art');
const leque = $('.fan', arteHero);
const laminas = $$('span', leque);
const angulos = laminas.map((s) => parseFloat(s.style.getPropertyValue('--r')));

// Só começa a reagir depois da animação de abertura
laminas.at(-1).addEventListener('animationend', () => leque.classList.add('is-ready'), { once: true });
$('.hero__card', arteHero).addEventListener('animationend', () => arteHero.classList.add('is-live'), { once: true });

function mexerLeque(e) {
  if (!leque.classList.contains('is-ready')) return;
  const box = arteHero.getBoundingClientRect();
  const nx = ((e.clientX - box.left) / box.width) * 2 - 1;   // -1 … 1
  const ny = ((e.clientY - box.top) / box.height) * 2 - 1;
  leque.style.setProperty('--tilt', `${nx * 10}deg`);
  leque.style.setProperty('--spread', (1.12 - ny * 0.1).toFixed(3));
  arteHero.style.setProperty('--cx', `${nx * 10}px`);
  arteHero.style.setProperty('--cy', `${ny * 8}px`);

  // Ângulo do cursor em relação ao pivô do leque → lâmina mais próxima sobe
  const piv = leque.getBoundingClientRect();
  const ang = Math.atan2(e.clientX - piv.left, piv.top - e.clientY) * 180 / Math.PI;
  const spread = parseFloat(leque.style.getPropertyValue('--spread'));
  const alvo = angulos.reduce((m, r, i) =>
    Math.abs(r * spread + nx * 10 - ang) < Math.abs(angulos[m] * spread + nx * 10 - ang) ? i : m, 0);
  laminas.forEach((s, i) => {
    const d = Math.abs(i - alvo);
    s.style.setProperty('--lift', d === 0 ? '-34px' : d === 1 ? '-12px' : '0px');
    s.classList.toggle('is-on', d === 0);
  });
}

function soltarLeque() {
  for (const p of ['--tilt', '--spread']) leque.style.removeProperty(p);
  for (const p of ['--cx', '--cy']) arteHero.style.removeProperty(p);
  laminas.forEach((s) => { s.style.removeProperty('--lift'); s.classList.remove('is-on'); });
}

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  arteHero.addEventListener('pointermove', mexerLeque);
  arteHero.addEventListener('pointerleave', soltarLeque);
  arteHero.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') soltarLeque(); });
}

render();
atualizarContador();
renderPedido();
rotear();
