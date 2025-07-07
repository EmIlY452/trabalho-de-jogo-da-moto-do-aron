const moto = document.getElementById("moto");
const vidasSpan = document.getElementById("vidas");
const pontosSpan = document.getElementById("pontos");

let motoPos = 125;
let vidas = 4;
let pontos = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && motoPos > 0) {
    motoPos -= 25;
    moto.style.left = motoPos + "px";
  } else if (e.key === "ArrowRight" && motoPos < 250) {
    motoPos += 25;
    moto.style.left = motoPos + "px";
  }
});

// Essa função ainda não será usada se não houver um "carro" no jogo.
function colisao(moto) {
  const m = moto.getBoundingClientRect();
  const c = carro.getBoundingClientRect();
  return !(c.bottom < m.top || c.top > m.bottom || c.right < m.left || c.left > m.right);
}
