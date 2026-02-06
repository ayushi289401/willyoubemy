const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");

function moveNo() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  question.innerText = "Don’t break my heart 😭";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("touchstart", moveNo);

yesBtn.addEventListener("click", () => {
  document.querySelector(".card").innerHTML = `
    <h1>Ayushi ❤️ Tanmay</h1>
    <p>
      From being my boyfriend for 10 beautiful years<br>
      to becoming my husband 💍<br><br>
      You are my safest place, my forever Valentine,<br>
      and the love I’ll choose in every lifetime 💖
    </p>
  `;
});
