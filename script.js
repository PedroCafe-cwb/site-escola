const filmes = [
  {
    titulo: "Homem-Aranha: Através do Aranhaverso",
    genero: "Animação",
    nota: "9.2",
    capa: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDM3LWIxMWQtOWQ4ZTQ5YmJmOWM4XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
    sinopse: "Miles Morales retorna para o próximo capítulo da saga do Aranhaverso. Após se reencontrar com Gwen Stacy, ele é catapultado através do Multiverso, onde encontra uma equipe de Pessoas-Aranha encarregada de proteger sua própria existência."
  },
  {
    titulo: "Duna: Parte Dois",
    genero: "Ficção",
    nota: "8.8",
    capa: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família. Enfrentando uma escolha entre o amor de sua vida e o destino do universo, ele tenta evitar um futuro terrível."
  },
  {
    titulo: "Interestelar",
    genero: "Ficção",
    nota: "9.4",
    capa: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Com a Terra chegando ao limite de seus recursos naturais, uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade."
  },
  {
    titulo: "Brooklyn Nine-Nine",
    genero: "Comédia",
    nota: "9.0",
    capa: "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDktNWExYjQzYWJmMWNlXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Jake Peralta é um detetive brilhante, mas imaturo, que nunca precisou se preocupar em seguir as regras. Tudo muda quando um novo capitão rígido e exigente assume o comando da 99ª delegacia do Brooklyn."
  },
  {
    titulo: "Invocação do Mal",
    genero: "Terror",
    nota: "7.5",
    capa: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjMzMi00OTk4LThlNTMtMzMyOThlYTU0NDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Ed e Lorraine Warren, investigadores paranormais de renome mundial, são chamados para ajudar uma família terrorizada por uma presença somcura em uma fazenda isolada."
  },
  {
    titulo: "Batman: O Cavaleiro das Trevas",
    genero: "Ação",
    nota: "9.5",
    capa: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Com a ajuda do tenente Jim Gordon e do promotor Harvey Dent, Batman tem tudo para banir o crime de Gotham City. Mas logo surge o Coringa, uma mente criminosa que mergulha a cidade no caos."
  },
  {
    titulo: "Corra!",
    genero: "Terror",
    nota: "7.8",
    capa: "https://m.media-amazon.com/images/M/MV5BMjA3NzQ5NzMxOV5BMl5BanBnXkFtZTgwMDgzNjQ1MTI@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Um jovem fotógrafo afro-americano visita a propriedade da família de sua namorada branca no fim de semana, onde descobre um segredo aterrorizante por trás do comportamento estranho dos moradores."
  },
  {
    titulo: "Se Beber, Não Case!",
    genero: "Comédia",
    nota: "7.7",
    capa: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Dois dias antes de seu casamento, Doug e três amigos viajam para Las Vegas para uma despedida de solteiro inesquecível. Na manhã seguinte, os amigos acordam com fortes dores de cabeça e nenhuma memória da noite anterior."
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

// Função para desenhar os cards na tela
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

    // Evento de clique para abrir o modal
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

// Criar botões de filtro dinamicamente
function criarBotoesFiltro() {
  // Extrai os gêneros únicos e adiciona "Todos" no início
  const generos = ["Todos", ...new Set(filmes.map(f => f.genero))];

  containerFiltros.innerHTML = "";

  generos.forEach(genero => {
    const botao = document.createElement("button");
    botao.textContent = genero;
    botao.classList.add("btn-filtro");
    if (genero === "Todos") botao.classList.add("ativo");

    botao.addEventListener("click", () => {
      // Remove a classe ativo de todos os botões e coloca no clicado
      document.querySelectorAll(".btn-filtro").forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");

      categoriaAtual = genero;
      filtrarEExibir();
    });

    containerFiltros.appendChild(botao);
  });
}

// Função combinada de Filtro por Gênero + Busca por Texto
function filtrarEExibir() {
  const termo = campoBusca.value.toLowerCase();

  const filtrados = filmes.filter(filme => {
    const bateGenero = categoriaAtual === "Todos" || filme.genero === categoriaAtual;
    const bateTexto = filme.titulo.toLowerCase().includes(termo) || filme.genero.toLowerCase().includes(termo);
    return bateGenero && bateTexto;
  });

  mostrarFilmes(filtrados);
}

// Evento da barra de busca
campoBusca.addEventListener("input", filtrarEExibir);

// Fechar modal no botão X
btnFechar.addEventListener("click", () => {
  modal.classList.add("escondido");
});

// Fechar modal clicando fora da caixa
modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    modal.classList.add("escondido");
  }
});

// Inicialização
criarBotoesFiltro();
mostrarFilmes(filmes);
