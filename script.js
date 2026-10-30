
const botoes = document.querySelectorAll(".galeria button");
const ampliacao = document.querySelector(".ampliacao");
const imagemAmpliada = document.querySelector(".imagem-ampliada");
const botaoFechar = document.querySelector(".fechar");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const imagem = botao.querySelector("img");

    imagemAmpliada.src = imagem.currentSrc || imagem.src;
    imagemAmpliada.alt = imagem.alt;

    ampliacao.showModal();
    document.body.classList.add("imagem-aberta");
  });
});

imagemAmpliada.addEventListener("click", () => {
  ampliacao.close();
});

botaoFechar.addEventListener("click", () => {
  ampliacao.close();
});

ampliacao.addEventListener("click", (evento) => {
  if (evento.target === ampliacao) {
    ampliacao.close();
  }
});

ampliacao.addEventListener("close", () => {
  document.body.classList.remove("imagem-aberta");
});
