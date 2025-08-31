const text = document.querySelector(".animated-text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

// Animate letters one by one
anime.timeline({ loop: false }).add({
  targets: ".animated-text span",
  opacity: [0, 1],
  translateY: [50, 0],
  easing: "easeOutExpo",
  duration: 800,
  delay: (el, i) => 50 * i,
});
// .add({
//   targets: ".text span",
//   opacity: [1, 0],
//   translateY: [0, -50],
//   easing: "easeInExpo",
//   duration: 800,
//   delay: (el, i) => 50 * i,
// });
