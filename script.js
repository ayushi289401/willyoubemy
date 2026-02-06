const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const text = document.getElementById("text");
const container = document.querySelector(".container");
const heartsContainer = document.querySelector(".hearts");

// NO button runs away
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.position = "absolute";
  noBtn.style.left = ${x}px;
  noBtn.style.top = ${y}px;

  text.innerText = "Don’t break my heart 😭";
}

// YES button clicked
yesBtn.addEventListener("click", () => {
  container.innerHTML = `
    <h1>Ayushi ❤️ Tanmay</h1>
    <p>
      From being my boyfriend for 10 beautiful years to becoming my husband,
      you are my safest place, my forever Valentine,
      and the love I’ll choose in every lifetime 💍💖
    </p>
  `;
});

// Floating hearts animation
function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);
