const tree = document.getElementById("tree");
const leaves = document.getElementById("leaves");
const leftText = document.getElementById("leftText");
const letterText = document.getElementById("letterText");
const counter = document.getElementById("counter");

function startAnimation() {
  tree.classList.remove("hidden");

  const colors = [
    "#ff8fa3", "#f9c0c0", "#ffc6c7", "#ffb3b3", "#fda4af",
    "#fab1a0", "#f9a8d4", "#ffe5ec", "#ec5e5e", "#f973a1"
  ];

  for (let i = 0; i < 160; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];
    heart.style.left = `${Math.random() * 380}px`;
    heart.style.top = `${Math.random() * 230}px`;
    heart.style.animationDelay = `${i * 0.012}s`;
    leaves.appendChild(heart);
  }

  setTimeout(() => {
    startTextAnimation();
  }, 3000);
}

function startTextAnimation() {
  leftText.classList.remove("hidden");
  const message = "Este es un texto de ejemplo.\nSe va escribiendo línea por línea.\nAsí se ve mejor en el celu.";
  let i = 0;
  letterText.innerHTML = "";
  counter.innerHTML = "";

  let writer = setInterval(() => {
    if (i < message.length) {
      const char = message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
      letterText.innerHTML += char;
      i++;
    } else {
      clearInterval(writer);
      setTimeout(() => {
        startCounter();
      }, 300);
    }
  }, 50);
}

function startCounter() {
  const startDate = new Date("2024-09-18T00:00:00");
  counter.innerHTML = "Cargando..."; // le ponemos algo para forzar que aparezca
  counter.style.opacity = "0";      // aseguramos que arranque en 0
  counter.style.display = "block";  // por si estaba en display: none

  setTimeout(() => {
    counter.style.opacity = "1";
  }, 100);  // leve delay para que la transición se vea bien

  setInterval(() => {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    counter.innerHTML = `Juntos hace: ${days} días, ${hours} hs, ${minutes} min, ${seconds} seg`;
  }, 1000);
}

startAnimation();
