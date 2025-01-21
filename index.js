const hamburguer = document.getElementById("hamburguer");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

hamburguer.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
});
