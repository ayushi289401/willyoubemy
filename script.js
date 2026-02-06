const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const text = document.getElementById("text");
const container = document.querySelector(".container");
const heartsContainer = document.querySelector(".hearts");

/* ---------- NO BUTTON RUNS AWAY (DESKTOP + MOBILE) ---------- */

function moveNo() {
  const padding = 20;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";   // 🔥 IMPORTANT
  noBtn.style.left = ${x}px;
  noBtn.style.top = ${y}px;

  text.innerText = "Don’t break my heart 😭";
}

/* Desktop */
noBtn.addEventListener("mouseenter", moveNo);

/* Mobile */
noBtn.addEventListener("touchstart", moveNo);

/* Backup */
noBtn.addEventListener("click", moveNo);


/* ---------- YES BUTTON ---------- */

yesBtn.addEventListener("click", () => {
  container.innerHTML = `
    <h1>Ayushi ❤️ Tanmay</h1>
    <p style="font-size:1.1rem; line-height:1.6; color:#444;">
      From being my boyfriend for 10 beautiful years to becoming my husband,<br><br>
      you are my safest place, my forever Valentine,<br>
      and the love I’ll choose in every lifetime 💍💖
    </p>
  `;
});


/* ---------- FLOATING HEARTS ---------- */

function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.position = "fixed";
  heart.style.bottom = "-20px";
  heart.style.fontSize = "18px";
  heart.style.animation = floatUp ${4 + Math.random() * 4}s linear;
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);
