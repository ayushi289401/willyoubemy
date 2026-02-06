const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");

let noCount = 0;

const noMessages = [
  "Heyyy 😭 why No?",
  "Ouch 💔 that hurt!",
  "Pleaseee 🥺",
  "Don’t do this to me 😭",
  "My heart can’t take this 💔",
  "Okay now you’re teasing 😤",
  "You can’t escape love 😘"
];

// Create message element once
const msg = document.createElement("div");
msg.style.position = "absolute";
msg.style.top = "70%";
msg.style.left = "50%";
msg.style.transform = "translateX(-50%)";
msg.style.color = "#ff4d88";
msg.style.fontSize = "16px";
msg.style.marginTop = "10px";
document.querySelector(".card").appendChild(msg);

function moveNo() {
  noCount++;

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  question.innerText = "Don’t break my heart 😭";
  msg.innerText = noMessages[noCount % noMessages.length];
}

// Desktop + Mobile
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);
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
