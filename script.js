const API_KEY = "SUA_CHAVE_TMDB";
const BASE = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w500";

const lista = document.getElementById("lista-filmes");
const generos = document.getElementById("lista-generos");
const pesquisa = document.getElementById("pesquisa");
const modal = document.getElementById("modal");

let generoSelecionado = null;
let filmesAtuais = [];

async function buscar(url) {
  const resposta = await fetch(url);
  if (!resposta.ok) throw new Error("Erro ao carregar filmes");
  return resposta.json();
}

async function carregarGeneros() {
  const dados = await buscar(
    `${BASE}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
  );

  generos.innerHTML = "";

  criarBotaoGenero("Todos", null);

  dados.genres.forEach(genero => {
    criarBotaoGenero(genero.name, genero.id);
  });
}

function criarBotaoGenero(nome, id) {
  const botao = document.createElement("button");
  botao.className = "genero";
  botao.textContent = nome;

  if (id === generoSelecionado) {
    botao.classList.add("ativo");
  }

  botao.onclick = () => {
    generoSelecionado = id;
    carregarFilmes();
  };

  generos.appendChild(botao);
}

async function carregarFilmes() {
  try {
    let url;

    if (generoSelecionado) {
      url = `${BASE}/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&with_genres=${generoSelecionado}`;
    } else {
      url = `${BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR`;
    }

    const dados = await buscar(url);
    filmesAtuais = dados.results;

    mostrarFilmes(filmesAtuais);
    atualizarGeneros();
  } catch (erro) {
    lista.textContent = "Não foi possível carregar os filmes.";
  }
}

function atualizarGeneros() {
  generos.innerHTML = "";
  criarBotaoGenero("Todos", null);

  buscar(`${BASE}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
    .then(dados => {
      dados.genres.forEach(genero => {
        criarBotaoGenero(genero.name, genero.id);
      });
    });
}

function mostrarFilmes(filmes) {
  lista.innerHTML = "";

  if (!filmes.length) {
    lista.textContent = "Nenhum filme encontrado.";
    return;
  }

  filmes.forEach(filme => {
    const card = document.createElement("article");
    card.className = "filme";

    const imagem = document.createElement("img");
    imagem.src = filme.poster_path
      ? IMG + filme.poster_path
      : "https://placehold.co/300x450/222/fff?text=Sem+poster";
    imagem.alt = filme.title || "Filme";

    const titulo = document.createElement("h3");
    titulo.textContent = filme.title || "Sem título";

    const nota = document.createElement("p");
    nota.textContent = "★ " + (filme.vote_average || 0).toFixed(1);

    card.append(imagem, titulo, nota);
    card.onclick = () => abrirDetalhes(filme.id);

    lista.appendChild(card);
  });
}

async function abrirDetalhes(id) {
  try {
    const filme = await buscar(
      `${BASE}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
    );

    const titulo = document.createElement("h2");
    titulo.textContent = filme.title;

    const imagem = document.createElement("img");
    imagem.src = filme.poster_path
      ? IMG + filme.poster_path
      : "https://placehold.co/300x450/222/fff?text=Sem+poster";

    const descricao = document.createElement("p");
    descricao.textContent = filme.overview || "Sinopse não disponível.";

    const nota = document.createElement("p");
    nota.textContent = "Nota: ★ " + filme.vote_average.toFixed(1);

    const trailer = document.createElement("a");
    trailer.textContent = "Ver trailer";
    trailer.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(filme.title + " trailer")}`;
    trailer.target = "_blank";
    trailer.rel = "noopener noreferrer";

    const detalhes = document.getElementById("detalhes");
    detalhes.replaceChildren(titulo, imagem, descricao, nota, trailer);

    modal.style.display = "flex";
  } catch (erro) {
    alert("Não foi possível abrir os detalhes do filme.");
  }
}

document.getElementById("fechar-modal").onclick = () => {
  modal.style.display = "none";
};

modal.onclick = evento => {
  if (evento.target === modal) {
    modal.style.display = "none";
  }
};

let temporizador;

pesquisa.addEventListener("input", () => {
  clearTimeout(temporizador);

  temporizador = setTimeout(async () => {
    const termo = pesquisa.value.trim();

    if (termo.length < 2) {
      carregarFilmes();
      return;
    }

    try {
      const dados = await buscar(
        `${BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(termo)}`
      );

      mostrarFilmes(dados.results);
    } catch (erro) {
      lista.textContent = "Erro ao pesquisar filmes.";
    }
  }, 350);
});

async function iniciar() {
  if (API_KEY === "SUA_CHAVE_TMDB") {
    lista.textContent = "Adicione sua chave da API do TMDB no arquivo app.js.";
    return;
  }

  await carregarGeneros();
  await carregarFilmes();
}

iniciar();