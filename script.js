
const API_KEY = "SUA_CHAVE_TMDB";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const listaFilmes = document.getElementById("lista-filmes");
const listaGeneros = document.getElementById("lista-generos");
const listaFavoritos = document.getElementById("lista-favoritos");
const pesquisa = document.getElementById("pesquisa");
const modal = document.getElementById("modal");

let generoSelecionado = null;
let tipoAtual = "popular";
let paginaAtual = 1;
let ultimaBusca = "";
let filmesExibidos = [];
let favoritos = carregarFavoritos();
let numeroRequisicao = 0;

// REQUISIÇÕES À API

async function requisitar(endpoint) {
    const separador = endpoint.includes("?") ? "&" : "?";

    const resposta = await fetch(
        `${BASE_URL}${endpoint}${separador}api_key=${API_KEY}&language=pt-BR`
    );

    if (!resposta.ok) {
        throw new Error("Erro ao carregar dados do TMDB.");
    }

    return resposta.json();
}

// CARREGAR FILMES

async function carregarFilmes() {
    const requisicaoAtual = ++numeroRequisicao;

    try {
        let endpoint;

        if (generoSelecionado) {
            endpoint =
                `/discover/movie?sort_by=popularity.desc&with_genres=${generoSelecionado}&page=${paginaAtual}`;
        } else if (tipoAtual === "top") {
            endpoint = `/movie/top_rated?page=${paginaAtual}`;
        } else if (tipoAtual === "upcoming") {
            endpoint = `/movie/upcoming?page=${paginaAtual}`;
        } else {
            endpoint = `/movie/popular?page=${paginaAtual}`;
        }

        const dados = await requisitar(endpoint);

        if (requisicaoAtual !== numeroRequisicao) return;

        if (paginaAtual === 1) {
            filmesExibidos = dados.results || [];
        } else {
            filmesExibidos = [
                ...filmesExibidos,
                ...(dados.results || [])
            ];
        }

        mostrarFilmes(filmesExibidos);
        atualizarContador(dados.total_results);

        document.getElementById("carregar-mais").style.display =
            paginaAtual < dados.total_pages ? "block" : "none";

    } catch (erro) {
        console.error(erro);
        if (requisicaoAtual === numeroRequisicao) {
            listaFilmes.textContent =
                "Não foi possível carregar os filmes. Verifique sua chave da API.";
        }
    }
}

// MOSTRAR FILMES

function mostrarFilmes(filmes, destino = listaFilmes) {
    destino.replaceChildren();

    if (!filmes.length) {
        const mensagem = document.createElement("p");
        mensagem.className = "empty";
        mensagem.textContent = "Nenhum filme encontrado.";
        destino.appendChild(mensagem);
        return;
    }

    filmes.forEach(filme => {
        const card = document.createElement("article");
        card.className = "movie-card";

        const posterWrap = document.createElement("div");
        posterWrap.className = "poster-wrap";

        const imagem = document.createElement("img");
        imagem.src = filme.poster_path
            ? IMAGE_URL + filme.poster_path
            : "https://placehold.co/400x600/202024/ffffff?text=Sem+poster";

        imagem.alt = filme.title || "Pôster do filme";
        imagem.loading = "lazy";

        const nota = document.createElement("span");
        nota.className = "rating";
        nota.textContent =
            `★ ${Number(filme.vote_average || 0).toFixed(1)}`;

        const botaoFavorito = document.createElement("button");
        botaoFavorito.className = "favorite-btn";
        botaoFavorito.textContent = "♥";
        botaoFavorito.setAttribute("aria-label", "Favoritar filme");

        const salvo = favoritos.some(item => item.id === filme.id);

        if (salvo) {
            botaoFavorito.classList.add("saved");
        }

        botaoFavorito.addEventListener("click", evento => {
            evento.stopPropagation();
            alternarFavorito(filme);

            botaoFavorito.classList.toggle(
                "saved",
                favoritos.some(item => item.id === filme.id)
            );
        });

        posterWrap.append(imagem, nota, botaoFavorito);

        const titulo = document.createElement("h3");
        titulo.textContent = filme.title || "Filme sem título";

        const ano = document.createElement("p");
        ano.className = "year";
        ano.textContent = filme.release_date
            ? filme.release_date.slice(0, 4)
            : "Ano não informado";

        card.append(posterWrap, titulo, ano);

        card.addEventListener("click", () => {
            abrirDetalhes(filme.id);
        });

        destino.appendChild(card);
    });
}

// CARREGAR GÊNEROS

async function carregarGeneros() {
    try {
        const dados = await requisitar("/genre/movie/list");

        listaGeneros.replaceChildren();

        criarBotaoGenero("Todos os filmes", null);

        dados.genres.forEach(genero => {
            criarBotaoGenero(genero.name, genero.id);
        });

    } catch (erro) {
        console.error(erro);
        listaGeneros.textContent = "Erro ao carregar gêneros.";
    }
}

function criarBotaoGenero(nome, id) {
    const botao = document.createElement("button");
    botao.className = "genre-btn";
    botao.textContent = nome;

    if (generoSelecionado === id) {
        botao.classList.add("active");
    }

    const seta = document.createElement("span");
    seta.className = "genre-arrow";
    seta.textContent = "›";

    botao.appendChild(seta);

    botao.addEventListener("click", () => {
        generoSelecionado = id;
        tipoAtual = "popular";
        paginaAtual = 1;

        atualizarBotoesRapidos();
        carregarGeneros();
        carregarFilmes();

        document.getElementById("catalogo").scrollIntoView({
            behavior: "smooth"
        });
    });

    listaGeneros.appendChild(botao);
}

// CATEGORIAS RÁPIDAS

function atualizarBotoesRapidos() {
    document.querySelectorAll(".quick").forEach(botao => {
        botao.classList.toggle(
            "active",
            botao.dataset.type === tipoAtual && !generoSelecionado
        );
    });
}

document.querySelectorAll(".quick").forEach(botao => {
    botao.addEventListener("click", () => {
        tipoAtual = botao.dataset.type;
        generoSelecionado = null;
        paginaAtual = 1;

        atualizarBotoesRapidos();
        carregarGeneros();
        carregarFilmes();
    });
});

// PESQUISA

let temporizadorBusca;

pesquisa.addEventListener("input", () => {
    clearTimeout(temporizadorBusca);

    temporizadorBusca = setTimeout(async () => {
        const termo = pesquisa.value.trim();

        if (termo.length < 2) {
            ultimaBusca = "";
            paginaAtual = 1;
            carregarFilmes();
            return;
        }

        ultimaBusca = termo;
        const requisicaoAtual = ++numeroRequisicao;

        try {
            const dados = await requisitar(
                `/search/movie?query=${encodeURIComponent(termo)}`
            );

            if (
                requisicaoAtual !== numeroRequisicao ||
                termo !== ultimaBusca
            ) return;

            filmesExibidos = dados.results || [];

            mostrarFilmes(filmesExibidos);
            atualizarContador(dados.total_results);

            document.getElementById("carregar-mais").style.display = "none";

        } catch (erro) {
            console.error(erro);
            listaFilmes.textContent = "Erro ao pesquisar filmes.";
        }

    }, 400);
});

// CARREGAR MAIS

document.getElementById("carregar-mais").addEventListener("click", () => {
    if (ultimaBusca) return;

    paginaAtual++;
    carregarFilmes();
});

// DETALHES E TRAILER

async function abrirDetalhes(id) {
    try {
        const [filme, videos] = await Promise.all([
            requisitar(`/movie/${id}`),
            requisitar(`/movie/${id}/videos`)
        ]);

        const detalhes = document.getElementById("detalhes");
        detalhes.replaceChildren();

        const layout = document.createElement("div");
        layout.className = "detail-layout";

        const imagem = document.createElement("img");
        imagem.className = "detail-poster";
        imagem.src = filme.poster_path
            ? IMAGE_URL + filme.poster_path
            : "https://placehold.co/400x600/202024/ffffff?text=Sem+poster";

        imagem.alt = filme.title;

        const informacoes = document.createElement("div");
        informacoes.className = "detail-info";

        const titulo = document.createElement("h2");
        titulo.textContent = filme.title;

        const meta = document.createElement("div");
        meta.className = "detail-meta";
        meta.textContent =
            `★ ${Number(filme.vote_average || 0).toFixed(1)} | ` +
            `${filme.release_date || "Sem data"} | ` +
            `${filme.runtime || "?"} min`;

        const sinopse = document.createElement("p");
        sinopse.className = "detail-overview";
        sinopse.textContent =
            filme.overview || "Sinopse não disponível.";

        const generos = document.createElement("p");
        generos.className = "detail-genres";
        generos.textContent =
            "Gêneros: " +
            (filme.genres || []).map(g => g.name).join(", ");

        informacoes.append(titulo, meta, sinopse, generos);

        const trailer = videos.results.find(video =>
            video.site === "YouTube" &&
            video.type === "Trailer"
        );

        if (trailer) {
            const link = document.createElement("a");
            link.className = "trailer-link";
            link.href = `https://www.youtube.com/watch?v=${trailer.key}`;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "▶ ASSISTIR TRAILER";

            informacoes.appendChild(link);
        }

        layout.append(imagem, informacoes);
        detalhes.appendChild(layout);

        modal.classList.add("open");

    } catch (erro) {
        console.error(erro);
        alert("Não foi possível abrir os detalhes deste filme.");
    }
}

// FECHAR MODAL

function fecharModal() {
    modal.classList.remove("open");
}

document.getElementById("fechar-modal").addEventListener(
    "click",
    fecharModal
);

modal.addEventListener("click", evento => {
    if (evento.target === modal) {
        fecharModal();
    }
});

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
        fecharModal();
    }
});

// FAVORITOS

function carregarFavoritos() {
    try {
        return JSON.parse(
            localStorage.getItem("cineweekend-favoritos")
        ) || [];
    } catch {
        return [];
    }
}

function salvarFavoritos() {
    localStorage.setItem(
        "cineweekend-favoritos",
        JSON.stringify(favoritos)
    );
}

function alternarFavorito(filme) {
    const existe = favoritos.some(item => item.id === filme.id);

    if (existe) {
        favoritos = favoritos.filter(item => item.id !== filme.id);
    } else {
        favoritos.push(filme);
    }

    salvarFavoritos();
    mostrarFilmes(favoritos, listaFavoritos);
}

// CONTADOR

function atualizarContador(total) {
    document.getElementById("contador").textContent =
        total
            ? `${Number(total).toLocaleString("pt-BR")} filmes`
            : "";
}

// BOTÃO DO BANNER

document.getElementById("explorar").addEventListener("click", () => {
    document.getElementById("catalogo").scrollIntoView({
        behavior: "smooth"
    });
});

// INICIAR

async function iniciarSite() {
    mostrarFilmes(favoritos, listaFavoritos);

    if (API_KEY === "SUA_CHAVE_TMDB") {
        listaFilmes.textContent =
            "Adicione sua chave da API TMDB no arquivo script.js para carregar os filmes.";
        return;
    }

    await Promise.all([
        carregarGeneros(),
        carregarFilmes()
    ]);
}

iniciarSite();
