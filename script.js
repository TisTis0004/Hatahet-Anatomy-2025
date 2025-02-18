const contactIcons = document.querySelectorAll(".contact-icon");
document.addEventListener("DOMContentLoaded", function () {
  const engTitle = document.querySelector(".fade-in-left");
  const arTitle = document.querySelector(".fade-in-right");
  engTitle.classList.add("is-visible");
  arTitle.classList.add("is-visible");
  window.scrollTo({
    top: 0,
  });
});
const videosBtn = document.querySelector("#videosBtn");
const sheetsBtn = document.querySelector("#sheetsBtn");
const boxTitle = document.querySelectorAll(".box-title-container");
videosBtn.addEventListener("click", function () {
  boxTitle[0].style.transition = "transform 0.1s 0s ease";
  boxTitle[0].style.transform = "scaleY(0)";
  setTimeout(function () {
    boxTitle[0].style.transform = "scaleY(1)";
    boxTitle[0].style.transition = "transform 0.2s 0.1s ease";
  }, 200);
});
sheetsBtn.addEventListener("click", function () {
  boxTitle[1].style.transition = "transform 0.1s 0s ease";
  boxTitle[1].style.transform = "scaleY(0)";
  setTimeout(function () {
    boxTitle[1].style.transform = "scaleY(1)";
    boxTitle[1].style.transition = "transform 0.3s 0.1s ease";
  }, 295);
});
const year = document.querySelector("#year");
const d = new Date();
year.innerText = d.getFullYear();
const contactIconsBackground = document.getElementById(
  "contact-icons-background"
);
function showContact() {
  contactIconsBackground.style.transform = "rotateY(0)";
  setTimeout(() => {
    contactIconsBackground.style.transformOrigin = "right";
    contactIconsBackground.style.transform = "rotateY(90deg)";
  }, 1100);
  contactIconsBackground.style.transformOrigin = "left";
}
