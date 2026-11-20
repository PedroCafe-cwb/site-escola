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
    titulo: "Gladiador",
    genero: "Ação",
    nota: "8.5",
    capa: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Um general romano traído busca vingança contra o imperador corrupto que assassinou sua família, abrindo caminho para lutar na arena como gladiador."
  },

  // --- ANIMAÇÃO ---
  {
    titulo: "Homem-Aranha: Através do Aranhaverso",
    genero: "Animação",
    nota: "9.2",
    capa: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDM3LWIxMWQtOWQ4ZTQ5YmJmOWM4XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
    sinopse: "Miles Morales retorna para o próximo capítulo da saga do Aranhaverso. Após se reencontrar com Gwen Stacy, ele é catapultado através do Multiverso, onde encontra uma equipe de Pessoas-Aranha."
  },
  {
    titulo: "A Viagem de Chihiro",
    genero: "Animação",
    nota: "9.1",
    capa: "https://m.media-amazon.com/images/M/MV5BMjlmZmIxMTItZmRjYy00ZjAxLWE5ZjAtZGVjNWFiZTI5NzU2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Durante a mudança para uma nova cidade, Chihiro e seus pais entram por engano em um mundo mágico habitado por espíritos. Quando seus pais viram porcos, ela precisa trabalhar para salvá-los."
  },
  {
    titulo: "Toy Story",
    genero: "Animação",
    nota: "8.3",
    capa: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Os brinquedos de um garoto ganham vida quando os humanos não estão por perto, liderados por Woody, um caubói que sente seu posto ameaçado pela chegada de um novo brinquedo espacial, Buzz Lightyear."
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
    titulo: "Matrix",
    genero: "Ficção",
    nota: "8.7",
    capa: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Um hacker descobre que a realidade cotidiana é uma simulação controlada por máquinas inteligentes, juntando-se a um grupo rebelde para lutar pela liberdade humana."
  },

  // --- COMÉDIA ---
  {
    titulo: "Brooklyn Nine-Nine",
    genero: "Comédia",
    nota: "9.0",
    capa: "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDktNWExYjQzYWJmMWNlXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
    sinopse: "O cotidiano hilário de uma delegacia de polícia no Brooklyn liderada por um detetive talentoso e descontraído que precisa aprender a lidar com as novas regras de um rigoroso capitão."
  },
  {
    titulo: "Se Beber, Não Case!",
    genero: "Comédia",
    nota: "7.7",
    capa: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Três amigos acordam em Las Vegas após uma despedida de solteiro sem lembrar de absolutamente nada e com o noivo desaparecido, precisando refazer os passos da noite anterior."
  },

  // --- TERROR ---
  {
    titulo: "Invocação do Mal",
    genero: "Terror",
    nota: "7.5",
    capa: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjMzMi00OTk4LThlNTMtMzMyOThlYTU0NDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Investigadores paranormais famosos são chamados para ajudar uma família aterrorizada por uma presença sombria e malévola em sua nova fazenda isolada."
  },
  {
    titulo: "Corra!",
    genero: "Terror",
    nota: "7.8",
    capa: "https://m.media-amazon.com/images/M/MV5BMjA3NzQ5NzMxOV5BMl5BanBnXkFtZTgwMDgzNjQ1MTI@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Um jovem visita a propriedade da família de sua namorada e percebe que o comportamento excessivamente educado dos moradores esconde um segredo perturbador."
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

    card.innerHTML = `
      <img src="${filme.capa}" alt="Capa de ${filme.titulo}">
      <div class="info">
        <span class="nota">⭐ ${filme.nota}</span>
        <h3>${filme.titulo}</h3>
      </div>
    `;

    card.addEventListener("click", () => {
      modalCapa.src = filme.capa;
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