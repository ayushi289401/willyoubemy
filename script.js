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
  "You’re breaking me 😭",
  "Okay okay I give up 😘"
];

noBtn.addEventListener("click", () => {
  count++;

  message.textContent = messages[count % messages.length];
  question.textContent = "Don’t break my heart 😭";

  const x = Math.random() * (window.innerWidth - 140);
  const y = Math.random() * (window.innerHeight - 80);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".card").innerHTML = `
    <h1>Ayushi ❤️ Tanmay</h1>
    <p>
      From being my boyfriend for 10 beautiful years<br>
      to becoming my husband 💍<br><br>
      You are my forever Valentine,<br>
      my safest place,<br>
      and my greatest love 💖
    </p>
  `;
});
