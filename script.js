
const botoes = document.querySelectorAll(".galeria button");

const ampliacao = document.querySelector(".ampliacao");

const imagemAmpliada = document.querySelector(".imagem-ampliada");

const botaoFechar = document.querySelector(".fechar");

// Abre a imagem ao clicar nela
botoes.forEach((botao) => {

  botao.addEventListener("click", () => {

    const imagem = botao.querySelector("img");

    imagemAmpliada.src = imagem.currentSrc || imagem.src;

    imagemAmpliada.alt = imagem.alt;

    ampliacao.showModal();

    document.body.classList.add("imagem-aberta");

  });

});

// Fecha ao clicar na imagem ampliada
imagemAmpliada.addEventListener("click", () => {

  ampliacao.close();

});

// Fecha pelo botão X
botaoFechar.addEventListener("click", () => {

  ampliacao.close();

});

// Fecha ao clicar fora da imagem
ampliacao.addEventListener("click", (evento) => {

  if (evento.target === ampliacao) {

    ampliacao.close();

  }

});

// Remove a classe ao fechar, inclusive com ESC
ampliacao.addEventListener("close", () => {

  document.body.classList.remove("imagem-aberta");

});
