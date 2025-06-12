const tree = document.getElementById("tree");
const leaves = document.getElementById("leaves");
const leftText = document.getElementById("leftText");
const letterText = document.getElementById("letterText");
const counter = document.getElementById("counter");
const startButton = document.getElementById("startButton");

function startAnimation() {
  tree.classList.remove("hidden");

  const colors = [
    "#ff8fa3", "#f9c0c0", "#ffc6c7", "#ffb3b3", "#fda4af",
    "#fab1a0", "#f9a8d4", "#ffe5ec", "#ec5e5e", "#f973a1",
    "#ff6b81", "#e29578", "#fa9ea0", "#f48fb1", "#ff8c94",
    "#ffa07a", "#fcc2d7", "#ffccd5", "#fca3cc", "#ffc09f",
    "#f6a5c0", "#e9967a", "#fadadd", "#e1bee7", "#ffb347",
    "#b5ead7", "#c7ceea", "#e2f0cb", "#ffdac1", "#ffffb5"
  ];

  for (let i = 0; i < 160; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.background = color;

    const x = Math.random() * 240;
    const y = Math.random() * 160;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.animationDelay = `${i * 0.012}s`;

    leaves.appendChild(heart);
  }

  setTimeout(() => {
    startTextAnimation();
  }, 3000);
}

function startTextAnimation() {
  leftText.classList.remove("hidden");
  const message = "Feliz aniversario, amor ❤️ Este árbol simboliza todo lo lindo que creció entre nosotros. Gracias por cada momento, te amo con el alma. 💖";
  let i = 0;

  letterText.innerHTML = "";
  counter.innerHTML = "";
  counter.classList.add("hidden");

  let writer = setInterval(() => {
    if (i < message.length) {
      letterText.innerHTML += message.charAt(i);
      i++;
    } else {
      clearInterval(writer);
      startCounter();
    }
  }, 50);
}

function startCounter() {
  const startDate = new Date("2024-09-18T00:00:00");
  counter.classList.remove("hidden");
  counter.classList.add("showCounter");

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

startButton.onclick = () => {
  startButton.style.display = "none";
  startAnimation();
};