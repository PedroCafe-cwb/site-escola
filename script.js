const filmes = [
  // --- AÇÃO ---
  {
    titulo: "Batman: O Cavaleiro das Trevas",
    genero: "Ação",
    nota: "9.5",
    capa: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Com a ajuda do tenente Jim Gordon e do promotor Harvey Dent, Batman tem tudo para banir o crime de Gotham City. Mas logo surge o Coringa, uma mente criminosa que mergulha a cidade no caos."
  },
  {
    titulo: "Vingadores: Ultimato",
    genero: "Ação",
    nota: "8.4",
    capa: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Após os eventos devastadores de Vingadores: Guerra Infinita, o universo destruído pelos atos de Thanos conta com a ajuda dos Vingadores remanescentes para reverter a situação."
  },
  {
    titulo: "A Origem (Inception)",
    genero: "Ação",
    nota: "8.8",
    capa: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    sinopse: "Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um diretor executivo."
  },
  {
    titulo: "Mad Max: Estrada da Fúria",
    genero: "Ação",
    nota: "8.1",
    capa: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    sinopse: "Em um mundo pós-apocalíptico, Max se junta a Imperatriz Furiosa para fugir de um líder de culto e seu exército em um caminhão-tanque blindado pelo deserto."
  },

  // --- ANIMAÇÃO ---
  {
    titulo: "Toy Story",
    genero: "Animação",
    nota: "8.3",
    capa: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Os brinquedos de um garoto ganham vida quando os humanos não estão por perto, liderados por Woody, um caubói que sente seu posto ameaçado pela chegada de um novo brinquedo espacial, Buzz Lightyear."
  },
  {
    titulo: "O Rei Leão",
    genero: "Animação",
    nota: "8.5",
    capa: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
    sinopse: "O jovem príncipe leão Simba foge de seu reino após a morte de seu pai, mas anos depois precisa retornar para reclamar seu lugar de direito no trono."
  },
  {
    titulo: "WALL·E",
    genero: "Animação",
    nota: "8.4",
    capa: "https://upload.wikimedia.org/wikipedia/en/4/4c/WALL-E_poster.jpg",
    sinopse: "Em um futuro distante, um pequeno robô coletor de lixo embarca inadvertidamente em uma jornada espacial que decidirá o destino da humanidade."
  },

  // --- FICÇÃO CIENTÍFICA ---
  {
    titulo: "Interestelar",
    genero: "Ficção",
    nota: "9.4",
    capa: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Com a Terra chegando ao limite de seus recursos naturais, uma equipe de exploradores viaja através de um buraco de minhoca no espaço em busca de um novo lar para a humanidade."
  },
  {
    titulo: "Duna: Parte Dois",
    genero: "Ficção",
    nota: "8.8",
    capa: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Paul Atreides se une a Chani e aos Fremen em busca de vingança contra os conspiradores que destruíram sua família, enfrentando escolhas cruciais para o futuro do universo."
  },
  {
    titulo: "De Volta para o Futuro",
    genero: "Ficção",
    nota: "8.5",
    capa: "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
    sinopse: "O jovem Marty McFly é acidentalmente enviado trinta anos no passado em um carro DeLorean que viaja no tempo, inventado por seu amigo excêntrico, o cientista Doc Brown."
  },

  // --- COMÉDIA ---
  {
    titulo: "Se Beber, Não Case!",
    genero: "Comédia",
    nota: "7.7",
    capa: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Três amigos acordam em Las Vegas após uma despedida de solteiro sem lembrar de absolutamente nada e com o noivo desaparecido, precisando refazer os passos da noite anterior."
  },
  {
    titulo: "O Show de Truman",
    genero: "Comédia",
    nota: "8.2",
    capa: "https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg",
    sinopse: "Um homem comum começa a desconfiar que sua vida aparentemente perfeita na verdade é um gigantesco reality show transmitido 24 horas por dia para o mundo inteiro."
  },
  {
    titulo: "Superbad: É Hoje",
    genero: "Comédia",
    nota: "7.6",
    capa: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png",
    sinopse: "Dois amigos inseparáveis tentam aproveitar ao máximo os últimos dias antes da formatura do ensino médio em uma noite cheia de imprevistos."
  },

  // --- TERROR ---
  {
    titulo: "O Iluminado",
    genero: "Terror",
    nota: "8.4",
    capa: "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.S._release_poster_-_The_Tide_of_Terror_That_Swept_America_Is_Here.jpg",
    sinopse: "Uma família se muda para um hotel isolado durante o inverno, onde uma presença sinistra influencia o pai à violência enquanto seu filho psíquico vê presságios terríveis."
  },
  {
    titulo: "Um Lugar Silencioso",
    genero: "Terror",
    nota: "7.5",
    capa: "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png",
    sinopse: "Em um mundo pós-apocalíptico, uma família é forçada a viver em completo silêncio enquanto se esconde de monstros com audição ultrassensível."
  },
  {
    titulo: "It: A Coisa",
    genero: "Terror",
    nota: "7.3",
    capa: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
    sinopse: "Na cidade de Derry, sete jovens amigos se unem para enfrentar uma entidade maligna que assume a forma de um palhaço e se alimenta dos medos das crianças."
  }
];

const catalogo = document.getElementById("catalogo");
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

function mostrarFilmes(lista) {
  catalogo.innerHTML = "";

  if (lista.length === 0) {
    catalogo.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 40px;">Nenhum filme encontrado.</p>`;
    return;
  }

  lista.forEach((filme) => {
    const card = document.createElement("article");
    card.classList.add("card");

    // Cria um pôster reserva automático caso algum link falhe no futuro
    const capaReserva = `https://placehold.co/300x450/1e293b/38bdf8?text=${encodeURIComponent(filme.titulo)}`;

    card.innerHTML = `
      <img src="${filme.capa}" alt="Capa de ${filme.titulo}" onerror="this.onerror=null; this.src='${capaReserva}';">
      <div class="info">
        <span class="nota">⭐ ${filme.nota}</span>
        <h3>${filme.titulo}</h3>
      </div>
    `;

    card.addEventListener("click", () => {
      modalCapa.src = filme.capa;
      modalCapa.onerror = () => { modalCapa.src = capaReserva; };
      modalGenero.textContent = filme.genero;
      modalNota.textContent = `⭐ ${filme.nota}`;
      modalTitulo.textContent = filme.titulo;
      modalSinopse.textContent = filme.sinopse;
      modal.classList.remove("escondido");
    });

    catalogo.appendChild(card);
  });
}

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

function filtrarEExibir() {
  const termo = campoBusca.value.toLowerCase();

  const filtrados = filmes.filter(filme => {
    const bateGenero = categoriaAtual === "Todos" || filme.genero === categoriaAtual;
    const bateTexto = filme.titulo.toLowerCase().includes(termo) || filme.genero.toLowerCase().includes(termo);
    return bateGenero && bateTexto;
  });

  mostrarFilmes(filtrados);
}

campoBusca.addEventListener("input", filtrarEExibir);

btnFechar.addEventListener("click", () => {
  modal.classList.add("escondido");
});

modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    modal.classList.add("escondido");
  }
});

criarBotoesFiltro();
mostrarFilmes(filmes);