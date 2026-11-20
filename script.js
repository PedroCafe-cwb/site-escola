// Lista de filmes e séries (mantendo os garantidos da Wikipédia/IMDb)
const filmes = [
  {
    titulo: "Batman: O Cavaleiro das Trevas",
    genero: "Ação",
    nota: "9.5",
    capa: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Com a ajuda do tenente Jim Gordon e do promotor Harvey Dent, Batman tem tudo para banir o crime de Gotham City. Mas logo surge o Coringa, uma mente criminosa que mergulha a cidade no caos."
  },
  {
    titulo: "A Origem (Inception)",
    genero: "Ação",
    nota: "8.8",
    capa: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    sinopse: "Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um diretor executivo."
  },
  {
    titulo: "Toy Story",
    genero: "Animação",
    nota: "8.3",
    capa: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Os brinquedos de um garoto ganham vida quando os humanos não estão por perto, liderados por Woody, um caubói que sente seu posto ameaçado pela chegada de um novo brinquedo espacial, Buzz Lightyear."
  },
  {
    titulo: "WALL·E",
    genero: "Animação",
    nota: "8.4",
    capa: "https://upload.wikimedia.org/wikipedia/en/4/4c/WALL-E_poster.jpg",
    sinopse: "Em um futuro distante, um pequeno robô coletor de lixo embarca inadvertidamente em uma jornada espacial que decidirá o destino da humanidade."
  },
  {
    titulo: "Interestelar",
    genero: "Ficção",
    nota: "9.4",
    capa: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Com a Terra chegando ao limite de seus recursos naturais, uma equipe de exploradores viaja através de um buraco de minhoca no espaço em busca de um novo lar para a humanidade."
  },
  {
    titulo: "De Volta para o Futuro",
    genero: "Ficção",
    nota: "8.5",
    capa: "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
    sinopse: "O jovem Marty McFly é acidentalmente enviado trinta anos no passado em um carro DeLorean que viaja no tempo, inventado por seu amigo excêntrico, o cientista Doc Brown."
  },
  {
    titulo: "O Show de Truman",
    genero: "Comédia",
    nota: "8.2",
    capa: "https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg",
    sinopse: "Um homem comum começa a desconfiar que sua vida aparentemente perfeita na verdade é um gigantesco reality show transmitido 24 horas por dia para o mundo inteiro."
  },
  {
    titulo: "It: A Coisa",
    genero: "Terror",
    nota: "7.3",
    capa: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
    sinopse: "Na cidade de Derry, sete jovens amigos se unem para enfrentar uma entidade maligna que assume a forma de um palhaço e se alimenta dos medos das crianças."
  }
];

// Seleção de elementos
const heroSection = document.getElementById("hero-destaque");
const catalogoGrid = document.getElementById("catalogo");
const campoBusca = document.getElementById("campo-busca");
const containerFiltros = document.getElementById("botoes-filtro");

// Elementos do Modal
const modal = document.getElementById("modal-filme");
const btnFechar = document.getElementById("fechar-modal");
const modalCapa = document.getElementById("modal-capa");
const modalGenero = document.getElementById("modal-genero");
const modalNota = document.getElementById("modal-nota");
const modalTitulo = document.getElementById("modal-titulo");
const modalSinopse = document.getElementById("modal-sinopse");

let categoriaAtual = "Todos";

// 1. Gera o Banner Hero (usando o primeiro filme como destaque)
function gerarHero(filme) {
    if (!filme) return;
    
    heroSection.style.backgroundImage = `url(${filme.capa})`;
    
    heroSection.innerHTML = `
        <div class="hero-conteudo">
            <div class="hero-meta">
                <span class="tag-genero">${filme.genero}</span>
                <span class="hero-nota">⭐ ${filme.nota}</span>
            </div>
            <h2>${filme.titulo}</h2>
            <p>${filme.sinopse.substring(0, 150)}...</p>
        </div>
    `;
}

// 2. Gera a Grade de Cards (Layout Moderno com Overlay)
function mostrarFilmes(lista) {
  catalogoGrid.innerHTML = "";

  if (lista.length === 0) {
    catalogoGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 60px;">Nenhum filme encontrado.</p>`;
    return;
  }

  lista.forEach((filme) => {
    const card = document.createElement("article");
    card.classList.add("card");

    // Lógica onerror simplificada: se a imagem quebrar, usa o gerador do Hero como fundo do card
    const capaReserva = `https://placehold.co/300x450/1e293b/38bdf8?text=${encodeURIComponent(filme.titulo)}`;

    // Novo HTML do card: info sobreposta (overlay) na imagem
    card.innerHTML = `
      <img src="${filme.capa}" alt="Capa de ${filme.titulo}" onerror="this.onerror=null; this.src='${capaReserva}';">
      <div class="card-info-overlay">
        <div class="card-meta">
            <span class="nota-pequena">⭐ ${filme.nota}</span>
            <span class="tag-genero-card">${filme.genero}</span>
        </div>
        <h3>${filme.titulo}</h3>
      </div>
    `;

    // Evento de clique para abrir o modal
    card.addEventListener("click", () => {
      modalCapa.src = filme.capa;
      // Trata erro no modal também
      modalCapa.onerror = () => { modalCapa.src = capaReserva; };
      modalGenero.textContent = filme.genero;
      modalNota.textContent = `⭐ ${filme.nota}`;
      modalTitulo.textContent = filme.titulo;
      modalSinopse.textContent = filme.sinopse;
      modal.classList.remove("escondido");
    });

    catalogoGrid.appendChild(card);
  });
}

// 3. Lógica de Filtros (Botões)
function criarBotoesFiltro() {
  const generos = ["Todos", ...new Set(filmes.map(f => f.genero))];
  containerFiltros.innerHTML = "";

  generos.forEach(genero => {
    const botao = document.createElement("button");
    botao.textContent = genero;
    botao.classList.add("btn-filtro");
    if (genero === "Todos") botao.classList.add("ativo");

    botao.addEventListener("click", () => {
      document.querySelectorAll(".btn-filtro").forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");

      categoriaAtual = genero;
      filtrarEExibir();
    });

    containerFiltros.appendChild(botao);
  });
}

// 4. Lógica de Busca Combinada
function filtrarEExibir() {
  const termo = campoBusca.value.toLowerCase();

  const filtrados = filmes.filter(filme => {
    const bateGenero = categoriaAtual === "Todos" || filme.genero === categoriaAtual;
    const bateTexto = filme.titulo.toLowerCase().includes(termo) || filme.genero.toLowerCase().includes(termo);
    return bateGenero && bateTexto;
  });

  mostrarFilmes(filtrados);
}

// Eventos
campoBusca.addEventListener("input", filtrarEExibir);

btnFechar.addEventListener("click", () => {
  modal.classList.add("escondido");
});

modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    modal.classList.add("escondido");
  }
});

// Inicialização
gerarHero(filmes[0]); // Usa o primeiro filme como destaque
criarBotoesFiltro();
mostrarFilmes(filmes);