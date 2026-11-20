
const API_KEY = "SUA_CHAVE_TMDB";
const API = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w500";

let filmes = [];

let favoritos = JSON.parse(
    localStorage.getItem("cineweekend") || "[]"
);

// Buscar dados na API
async function buscarAPI(url) {
    const resposta = await fetch(
        `${API}${url}${url.includes("?") ? "&" : "?"}api_key=${API_KEY}&language=pt-BR`
    );

    if (!resposta.ok) {
        throw new Error("Erro ao buscar filmes.");
    }

    return resposta.json();
}

// Filmes populares
async function carregarPopulares() {
    try {
        const dados = await buscarAPI("/movie/popular");
        filmes = dados.results;
        mostrarFilmes(filmes);
    } catch (erro) {
        document.getElementById("listaFilmes").textContent =
            "Erro ao carregar. Confira sua chave da API.";
    }
}

// Mostrar filmes
function mostrarFilmes(lista) {
    const area = document.getElementById("listaFilmes");

    area.innerHTML = "";

    lista.forEach(filme => {
        const salvo = favoritos.includes(filme.id);

        area.innerHTML += `
            <div class="card">
                <img
                    src="${filme.poster_path ? IMG + filme.poster_path : ""}"
                    alt="${filme.title}"
                    onclick="abrirDetalhes(${filme.id})"
                >

                <div class="card-info">
                    <h3>${filme.title}</h3>

                    <div class="nota">
                        ⭐ ${filme.vote_average.toFixed(1)}
                    </div>

                    <button onclick="favoritar(${filme.id})">
                        ${salvo ? "❤️ Salvo" : "♡ Favoritar"}
                    </button>

                    <button onclick="abrirDetalhes(${filme.id})">
                        Ver detalhes
                    </button>
                </div>
            </div>
        `;
    });
}

// Pesquisa global
document.getElementById("pesquisa")
.addEventListener("input", async function() {
    const termo = this.value.trim();

    if (termo.length < 2) {
        carregarPopulares();
        return;
    }

    try {
        const dados = await buscarAPI(
            "/search/movie?query=" + encodeURIComponent(termo)
        );

        mostrarFilmes(dados.results);
    } catch (erro) {
        console.error(erro);
    }
});

// Categorias
async function carregarCategorias() {
    const dados = await buscarAPI("/genre/movie/list");
    const area = document.getElementById("categorias");

    area.innerHTML = `
        <button onclick="carregarPopulares()">Todos</button>
    `;

    dados.genres.forEach(genero => {
        area.innerHTML += `
            <button onclick="filtrarCategoria(${genero.id})">
                ${genero.name}
            </button>
        `;
    });
}

async function filtrarCategoria(id) {
    try {
        const dados = await buscarAPI(
            `/discover/movie?with_genres=${id}`
        );

        mostrarFilmes(dados.results);
    } catch (erro) {
        console.error(erro);
    }
}

// Favoritos
function favoritar(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(f => f !== id);
    } else {
        favoritos.push(id);
    }

    localStorage.setItem(
        "cineweekend",
        JSON.stringify(favoritos)
    );

    mostrarFilmes(filmes);
    carregarFavoritos();
}

async function carregarFavoritos() {
    const area = document.getElementById("listaFavoritos");
    area.innerHTML = "";

    for (const id of favoritos) {
        try {
            const filme = await buscarAPI(`/movie/${id}`);

            area.innerHTML += `
                <div class="card">
                    <img src="${IMG + filme.poster_path}">
                    <div class="card-info">
                        <h3>${filme.title}</h3>
                        <button onclick="favoritar(${filme.id})">
                            Remover ❤️
                        </button>
                    </div>
                </div>
            `;
        } catch (erro) {
            console.error(erro);
        }
    }
}

// Detalhes do filme e trailer
async function abrirDetalhes(id) {
    try {
        const filme = await buscarAPI(`/movie/${id}`);
        const videos = await buscarAPI(`/movie/${id}/videos`);

        const trailer = videos.results.find(
            v => v.site === "YouTube" && v.type === "Trailer"
        );

        document.getElementById("detalhes").innerHTML = `
            <h2>${filme.title}</h2>

            <img src="${IMG + filme.poster_path}">

            <p>⭐ Nota: ${filme.vote_average.toFixed(1)}</p>

            <p>${filme.overview || "Sinopse não disponível."}</p>

            <p>Data: ${filme.release_date || "Não informada"}</p>

            <p>Duração: ${filme.runtime || "Não informada"} minutos</p>

            ${trailer ? `
                <a href="https://www.youtube.com/watch?v=${trailer.key}"
                   target="_blank" rel="noopener noreferrer">
                    <button>▶ Assistir trailer</button>
                </a>
            ` : "<p>Trailer não disponível.</p>"}
        `;

        document.getElementById("modal").style.display = "flex";

    } catch (erro) {
        alert("Não foi possível carregar os detalhes.");
    }
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// Iniciar site
async function iniciar() {
    try {
        await carregarCategorias();
        await carregarPopulares();
        await carregarFavoritos();
    } catch (erro) {
        console.error(erro);
    }
}

iniciar();
