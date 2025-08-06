// Toggle mobile menu
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Toggle dropdowns in mobile menu
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    this.classList.toggle("active");
    const dropdown = this.parentElement.nextElementSibling;
    dropdown.classList.toggle("active");
  });
});

// Header scroll effect
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileToggle.contains(event.target)
  ) {
    mobileMenu.classList.remove("active");
  }
});
