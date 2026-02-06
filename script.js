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
  "You’re too cruel 😭",
  "Okay okay 😘"
];

// IMPORTANT: must be global for inline onclick
function moveNo() {
  count++;

  // update text
  message.textContent = messages[count % messages.length];
  question.textContent = "Don’t break my heart 😭";

  // move NO button
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// YES button
yesBtn.onclick = function () {
  document.querySelector(".card").innerHTML = `
    <h1>Ayushi ❤️ Tanmay</h1>
    <p>
      From being my boyfriend for 10 beautiful years<br>
      to becoming my husband 💍<br><br>
      You are my forever Valentine,<br>
      my safest place,<br>
      and the love I will choose in every lifetime 💖
    </p>
  `;
};
