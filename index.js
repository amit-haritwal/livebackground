const container = document.querySelector(".container");
const amit = [
  "javascript",
  "python",
  "java",
  "c++",
  "c#",
  "react",
  "mongo",
  "express"
];
for (var i = 0; i < 100; i++) {
  const heart = document.createElement("div");
  heart.classList.add("main");
  container.appendChild(heart);
  const text = document.createElement("div");
  text.classList.add("text");
  heart.appendChild(text);
  text.innerHTML = amit[anime.random(0, 7)];
}

function animate() {
  anime({
    targets: ".main",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    rotate: 45,
    scale: function () {
      return anime.random(1, 5);
    },
    easing: "easeInOutBack",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animate
  });
}
animate();
