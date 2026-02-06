const noBtn = document.getElementById("no");
const text = document.getElementById("text");
const yesBtn = document.getElementById("yes");

const messages = [
  "Don’t break my heart 😭",
  "Pleaseee 🥺",
  "Think again 💔",
  "My heart is crying 😢",
  "You know you love me ❤️"
];

let msgIndex = 0;

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = ${x}px;
  noBtn.style.top = ${y}px;

  text.innerText = messages[msgIndex % messages.length];
  msgIndex++;
}

// YES CLICK
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      background:linear-gradient(#ffdee9,#b5fffc);
      font-family:Arial;
    ">
      <div>
        <h1>Ayushi ❤️ Tanmay</h1>
        <p style="font-size:18px; max-width:500px;">
          From being my boyfriend for 10 beautiful years  
          to becoming my husband,  
          you are my safest place, my forever Valentine,  
          and the love I’ll choose every lifetime 💍💖
        </p>
      </div>
    </div>
  `;
});
