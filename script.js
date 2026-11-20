
const filmes = [
  {
    id: 1,
    titulo: "Interestelar",
    ano: 2014,
    genero: "Ficção científica",
    nota: 8.7,
    duracao: "2h 49min",
    imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    descricao: "Em um futuro em que a Terra está ficando inabitável, um grupo de astronautas parte em uma missão pelo espaço para encontrar um novo lar para a humanidade."
  },
  {
    id: 2,
    titulo: "A Origem",
    ano: 2010,
    genero: "Ação",
    nota: 8.4,
    duracao: "2h 28min",
    imagem: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    descricao: "Dom Cobb é um especialista em invadir sonhos e roubar segredos. Ele recebe uma missão diferente: implantar uma ideia na mente de uma pessoa."
  },
  {
    id: 3,
    titulo: "Matrix",
    ano: 1999,
    genero: "Ficção científica",
    nota: 8.2,
    duracao: "2h 16min",
    imagem: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    descricao: "Um programador descobre que a realidade em que vive é uma simulação criada por máquinas e precisa lutar para libertar a humanidade."
  },
  {
    id: 4,
    titulo: "Titanic",
    ano: 1997,
    genero: "Romance",
    nota: 7.9,
    duracao: "3h 14min",
    imagem: "https://www.impawards.com/1997/titanic_ver1_xlg.jpg",
    descricao: "Durante a viagem inaugural do Titanic, Jack e Rose, de mundos diferentes, vivem uma intensa história de amor a bordo do famoso navio."
  },
  {
    id: 5,
    titulo: "Batman: O Cavaleiro das Trevas",
    ano: 2008,
    genero: "Ação",
    nota: 9.0,
    duracao: "2h 32min",
    imagem: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    descricao: "Batman enfrenta o Coringa, um criminoso imprevisível que espalha o caos por Gotham e coloca a cidade diante de escolhas difíceis."
  },
  {
    id: 6,
    titulo: "Jurassic Park",
    ano: 1993,
    genero: "Aventura",
    nota: 8.2,
    duracao: "2h 7min",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e7/Jurassic_Park_poster.jpg",
    descricao: "Cientistas conseguem trazer dinossauros de volta à vida em um parque temático. Porém, uma falha de segurança transforma a visita em uma luta pela sobrevivência."
  },
  {
    id: 7,
    titulo: "Harry Potter e a Pedra Filosofal",
    ano: 2001,
    genero: "Fantasia",
    nota: 7.9,
    duracao: "2h 32min",
    imagem: "https://image.tmdb.org/t/p/w500/1go2A3gdQjaMuHWquybgoJlQRcX.jpg",
    descricao: "Harry Potter descobre que é um bruxo e começa a estudar em Hogwarts, uma escola de magia onde faz amigos e descobre segredos sobre seu passado."
  },
  {
    id: 8,
    titulo: "Toy Story",
    ano: 1995,
    genero: "Animação",
    nota: 8.0,
    duracao: "1h 21min",
    imagem: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    descricao: "Woody, um boneco cowboy, precisa lidar com a chegada de Buzz Lightyear, um novo brinquedo que conquista a atenção de seu dono."
  },
  {
    id: 9,
    titulo: "Parasita",
    ano: 2019,
    genero: "Drama",
    nota: 8.5,
    duracao: "2h 12min",
    imagem: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    descricao: "Uma família que enfrenta dificuldades financeiras consegue se aproximar de uma família rica. Aos poucos, uma situação inesperada começa a se desenvolver."
  },
  {
    id: 10,
    titulo: "Vingadores: Ultimato",
    ano: 2019,
    genero: "Ação",
    nota: 8.3,
    duracao: "3h 1min",
    imagem: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    descricao: "Após uma grande derrota, os Vingadores restantes tentam encontrar uma maneira de reverter os acontecimentos e salvar o universo."
  }
];

let generoSelecionado = "Todos";
let favoritos = JSON.parse(localStorage.getItem("cineweekend-favoritos")) || [];

// Elementos da página
const listaFilmes = document.getElementById("lista-filmes");
const listaGeneros = document.getElementById("lista-generos");
const listaFavoritos = document.getElementById("lista-favoritos");
const pesquisa = document.getElementById("pesquisa");
const modal = document.getElementById("modal");
const detalhes = document.getElementById("detalhes");

// Mostra os filmes na tela
function mostrarFilmes() {
  if (!listaFilmes) return;

  const termo = pesquisa ? pesquisa.value.toLowerCase() : "";

  const filtrados = filmes.filter(filme => {
    const combinaGenero =
      generoSelecionado === "Todos" ||
      filme.genero === generoSelecionado;

    const combinaPesquisa =
      filme.titulo.toLowerCase().includes(termo);

    return combinaGenero && combinaPesquisa;
  });

  listaFilmes.innerHTML = "";

  if (filtrados.length === 0) {
    listaFilmes.innerHTML = "<p>Nenhum filme encontrado.</p>";
    return;
  }

  filtrados.forEach(filme => {
    const card = document.createElement("div");
    card.className = "filme-card";

    card.innerHTML = `
      <div class="filme-poster" onclick="abrirDetalhes(${filme.id})">
        <img src="${filme.imagem}" alt="${filme.titulo}"
             onerror="this.src='https://placehold.co/300x450/171717/ffffff?text=Poster+indisponivel'">
        <span class="filme-nota">★ ${filme.nota.toFixed(1)}</span>
      </div>

      <div class="filme-info">
        <h3>${filme.titulo}</h3>
        <p>${filme.ano} • ${filme.genero}</p>
        <button onclick="alternarFavorito(${filme.id})">
          ${favoritos.includes(filme.id) ? "♥ Favorito" : "♡ Favoritar"}
        </button>
      </div>
    `;

    listaFilmes.appendChild(card);
  });
}

// Cria os filtros de gênero
function carregarGeneros() {
  if (!listaGeneros) return;

  const generos = [
    "Todos",
    ...new Set(filmes.map(filme => filme.genero))
  ];

  listaGeneros.innerHTML = "";

  generos.forEach(genero => {
    const botao = document.createElement("button");

    botao.textContent = genero;
    botao.className =
      genero === generoSelecionado ? "genero-ativo" : "";

    botao.onclick = () => {
      generoSelecionado = genero;
      carregarGeneros();
      mostrarFilmes();
    };

    listaGeneros.appendChild(botao);
  });
}

// Abre os detalhes ao clicar no pôster
function abrirDetalhes(id) {
  const filme = filmes.find(item => item.id === id);

  if (!filme || !modal || !detalhes) return;

  detalhes.innerHTML = `
    <div class="detalhe-filme">
      <img src="${filme.imagem}" alt="${filme.titulo}"
           onerror="this.src='https://placehold.co/300x450/171717/ffffff?text=Poster+indisponivel'">

      <div>
        <h2>${filme.titulo}</h2>
        <p><strong>Ano:</strong> ${filme.ano}</p>
        <p><strong>Gênero:</strong> ${filme.genero}</p>
        <p><strong>Duração:</strong> ${filme.duracao}</p>
        <p class="nota-detalhe">★ ${filme.nota.toFixed(1)} / 10</p>

        <h3>Sinopse</h3>
        <p>${filme.descricao}</p>

        <button onclick="alternarFavorito(${filme.id})">
          ${favoritos.includes(filme.id) ? "♥ Remover dos favoritos" : "♡ Adicionar aos favoritos"}
        </button>
      </div>
    </div>
  `;

  modal.style.display = "flex";
}

// Fecha a janela de detalhes
function fecharModal() {
  if (modal) modal.style.display = "none";
}

// Adiciona ou remove favoritos
function alternarFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(item => item !== id);
  } else {
    favoritos.push(id);
  }

  localStorage.setItem(
    "cineweekend-favoritos",
    JSON.stringify(favoritos)
  );

  mostrarFilmes();
  mostrarFavoritos();

  if (modal && modal.style.display === "flex") {
    abrirDetalhes(id);
  }
}

// Mostra a lista de favoritos
function mostrarFavoritos() {
  if (!listaFavoritos) return;

  const filmesFavoritos = filmes.filter(
    filme => favoritos.includes(filme.id)
  );

  listaFavoritos.innerHTML = "";

  filmesFavoritos.forEach(filme => {
    const card = document.createElement("div");
    card.className = "filme-card";

    card.innerHTML = `
      <div class="filme-poster" onclick="abrirDetalhes(${filme.id})">
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <span class="filme-nota">★ ${filme.nota.toFixed(1)}</span>
      </div>
      <div class="filme-info">
        <h3>${filme.titulo}</h3>
        <p>${filme.ano} • ${filme.genero}</p>
        <button onclick="alternarFavorito(${filme.id})">
          ♥ Remover
        </button>
      </div>
    `;

    listaFavoritos.appendChild(card);
  });
}

// Pesquisa de filmes
if (pesquisa) {
  pesquisa.addEventListener("input", mostrarFilmes);
}

// Fecha o modal ao clicar fora dele
if (modal) {
  modal.addEventListener("click", evento => {
    if (evento.target === modal) {
      fecharModal();
    }
  });
}

// Inicialização do catálogo
carregarGeneros();
mostrarFilmes();
mostrarFavoritos();

