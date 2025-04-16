
const bigHeart = document.getElementById("bigHeart");

bigHeart.addEventListener("click", () => {
  for (let i = 0; i < 20; i++) {
    createFallingHeart();
  }
});

function createFallingHeart() {
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.classList.add("falling-heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
