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
  "You’re breaking my heart 😢",
  "Okay okay 😘"
];

// MUST be global for inline hover
function moveNo() {
  count++;

  // show message FIRST
  message.textContent = messages[count % messages.length];
  question.textContent = "Don’t break my heart 😭";

  // calculate safe random position
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // move button
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// YES click
yesBtn.onclick = () => {
  document.querySelector(".card").innerHTML = `
    <h1>I Love You ❤️</h1>
    <p>
      Congratulation 🎉 For confirming your lifetime subscription to Love 💖 <br>
      You are my forever Valentine💍<br><br>
      No refunds, No exchanges. Happy Valentine's Day 💖
    </p>
  `;
};
