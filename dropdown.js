const bars = document.querySelector(".bars");
const dropdown = document.querySelector(".dropdown-bars");
bars.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});
