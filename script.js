const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("no-message");
const question = document.getElementById("question");

let count = 0;

const messages = [
  "Pleaseee 🥺",
  "Ouch 💔",
  "Don’t do this 😭",
  "My heart can’t take it",
  "Okay you’re teasing 😤",
  "You can’t say no 😘"
];

function moveNo() {
  count++;

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  question.innerText = "Don’t break my heart 😭";
  message.innerText = messages[count % messages.length];
}

// desktop
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

// mobile
noBtn.addEventListener("touchstart", moveNo);

yesBtn.addEventListener("click", () => {
  document.querySelector(".card").innerHTML = `
    <h1>Ayushi ❤️ Tanmay</h1>
    <p>
      From being my boyfriend for 10 beautiful years<br>
      to becoming my husband 💍<br><br>
      You are my safest place,<br>
      my forever Valentine,<br>
      and the love I’ll choose in every lifetime 💖
    </p>
  `;
});
