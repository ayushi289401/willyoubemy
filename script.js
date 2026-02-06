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

  const x = Math.random() * 200 - 100; // move left/right
  const y = Math.random() * 150 - 75;  // move up/down

  noBtn.style.transform = translate(${x}px, ${y}px);

  question.innerText = "Don’t break my heart 😭";
  noMessage.innerText = noMessages[noCount % noMessages.length];
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

const heartContainer = document.getElementById("floating-hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 12 + "px";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Create hearts gently
setInterval(createHeart, 800);
