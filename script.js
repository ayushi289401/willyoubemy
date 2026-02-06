const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");

let noCount = 0;

const noAlerts = [
  "Heyyy 😭 why are you clicking No?",
  "Ouch 💔 that hurt!",
  "Pleaseee don’t do this 🥺",
  "My heart is crying 😭",
  "You can’t say No to me 😤",
  "Stop breaking my heart 💔💔",
  "Okay now you’re just teasing 😭"
];

function moveNo() {
  noCount++;

  // Random position
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Change text
  question.innerText = "Don’t break my heart 😭";

  // Show alert (cycle through messages)
  alert(noAlerts[noCount % noAlerts.length]);
}

// Desktop
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

// Mobile
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
