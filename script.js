const filmes = [
  {
    titulo: "Homem-Aranha: Através do Aranhaverso",
    genero: "Animação / Ação",
    nota: "9.2",
    capa: "https://placehold.co/300x450/1d4ed8/ffffff?text=Aranhaverso",
    sinopse: "Miles Morales retorna para o próximo capítulo da saga do Aranhaverso. Após se reencontrar com Gwen Stacy, ele é catapultado através do Multiverso, onde encontra uma equipe de Pessoas-Aranha encarregada de proteger sua própria existência."
  },
  {
    titulo: "Duna: Parte Dois",
    genero: "Ficção Científica",
    nota: "8.8",
    capa: "https://placehold.co/300x450/b45309/ffffff?text=Duna+Parte+2",
    sinopse: "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família. Enfrentando uma escolha entre o amor de sua vida e o destino do universo, ele tenta evitar um futuro terrível."
  },
  {
    titulo: "Interestelar",
    genero: "Ficção / Drama",
    nota: "9.4",
    capa: "https://placehold.co/300x450/0f172a/38bdf8?text=Interestelar",
    sinopse: "Com a Terra chegando ao limite de seus recursos naturais, uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade."
  },
  {
    titulo: "Brooklyn Nine-Nine",
    genero: "Comédia",
    nota: "9.0",
    capa: "https://placehold.co/300x450/047857/ffffff?text=Brooklyn+99",
    sinopse: "Jake Peralta é um detetive brilhante, mas imaturo, que nunca precisou se preocupar em seguir as regras. Tudo muda quando um novo capitão rígido e exigente assume o comando da 99ª delegacia do Brooklyn."
  },
  {
    titulo: "Stranger Things",
    genero: "Suspense / Ficção",
    nota: "8.7",
    capa: "https://placehold.co/300x450/991b1b/ffffff?text=Stranger+Things",
    sinopse: "Quando um garoto desaparece na pequena cidade de Hawkins nos anos 80, seus amigos, sua família e o chefe de polícia local descobrem um mistério envolvendo experimentos secretos, forças sobrenaturais e uma garota com poderes."
  },
  {
    titulo: "Batman: O Cavaleiro das Trevas",
    genero: "Ação / Suspense",
    nota: "9.5",
    capa: "https://placehold.co/300x450/18181b/a1a1aa?text=O+Cavaleiro+das+Trevas",
    sinopse: "Com a ajuda do tenente Jim Gordon e do promotor Harvey Dent, Batman tem tudo para banir o crime de Gotham City. Mas logo surge o Coringa, uma mente criminosa que mergulha a cidade no caos."
  },
  {
    titulo: "A Viagem de Chihiro",
    genero: "Animação / Fantasia",
    nota: "9.1",
    capa: "https://placehold.co/300x450/6d28d9/ffffff?text=Viagem+de+Chihiro",
    sinopse: "Durante a mudança para uma nova cidade, Chihiro e seus pais entram por engano em um mundo mágico habitado por deuses e espíritos. Quando seus pais são transformados em porcos, ela precisa trabalhar para libertá-los."
  },
  {
    titulo: "De Volta para o Futuro",
    genero: "Aventura / Comédia",
    nota: "8.9",
    capa: "https://placehold.co/300x450/c2410c/ffffff?text=De+Volta+ao+Futuro",
    sinopse: "O adolescente Marty McFly é acidentalmente enviado trinta anos no passado em um carro DeLorean que viaja no tempo, inventado por seu amigo excêntrico, o cientista Doc Brown."
  }
];

const catalogo = document.getElementById("catalogo");
const campoBusca = document.getElementById("campo-busca");

// Elementos do Modal
const modal = document.getElementById("modal-filme");
const btnFechar = document.getElementById("fechar-modal");
const modalCapa = document.getElementById("modal-capa");
const modalGenero = document.getElementById("modal-genero");
const modalNota = document.getElementById("modal-nota");
const modalTitulo = document.getElementById("modal-titulo");
const modalSinopse = document.getElementById("modal-sinopse");

// Função para desenhar os cards na tela
function mostrarFilmes(lista) {
  catalogo.innerHTML = "";

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

    // Evento de clique para abrir o modal com a descrição
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

// Fechar modal no botão X
btnFechar.addEventListener("click", () => {
  modal.classList.add("escondido");
});

// Fechar modal clicando fora da caixa escura
modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    modal.classList.add("escondido");
  }
});

// Filtro da barra de pesquisa
campoBusca.addEventListener("input", () => {
  const termo = campoBusca.value.toLowerCase();
  const filtrados = filmes.filter((filme) =>
    filme.titulo.toLowerCase().includes(termo) ||
    filme.genero.toLowerCase().includes(termo)
  );
  mostrarFilmes(filtrados);
});

// Inicia exibindo todos os filmes
mostrarFilmes(filmes);