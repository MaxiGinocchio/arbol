// Lista de mensajes románticos que aparecerán en burbujas
const messages = [
  "Te amo muchito",
  "Sos lo mejor que me paso",
  "Un añito",
  "El primero de muchos",
  "Siempre juntitos",
  "Para siempre",
  "El amor de mi vida",
  "Sos unica",
  "La mas hermosa",
  "La mejor novia del mundo",
];

// Función que crea una burbuja de texto con un mensaje aleatorio
function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];
  const left = Math.random() * 80 + 10;
  const top = Math.random() * 80 + 10;
  bubble.style.position = "absolute";
  bubble.style.left = left + "vw";
  bubble.style.top = top + "vh";
  document.getElementById("bubbles-text").appendChild(bubble);

  setTimeout(() => {
    const rect = bubble.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      bubble.style.left = `${window.innerWidth - rect.width - 10}px`;
    }
    if (rect.bottom > window.innerHeight) {
      bubble.style.top = `${window.innerHeight - rect.height - 10}px`;
    }
    if (rect.left < 0) {
      bubble.style.left = "10px";
    }
    if (rect.top < 0) {
      bubble.style.top = "10px";
    }
  }, 10);

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(createTextBubble, 500);

// Corazones cayendo verticalmente
for (let i = 0; i < 35; i++) {
  const heart = document.createElement("div");
  heart.className = "falling-heart";
  heart.innerText = "🤎";

  // Posiciones aleatorias arriba de la pantalla
  const leftPos = Math.random() * 100;
  const topPos = Math.random() * -20;

  heart.style.left = leftPos + "vw";
  heart.style.top = topPos + "vh";

  heart.style.animationDelay = (Math.random() * 6) + "s";
  document.body.appendChild(heart);
}