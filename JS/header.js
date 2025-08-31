const header = document.getElementById("header");
header.innerHTML = `
    <header class="header">
      <div>
        <h3 class="text-logo">Malahim Bin Haroon</h3>
      </div>
      
      <button class="mobile-menu-toggle" id="mobileMenuToggle">
        <i class="fas fa-bars"></i>
      </button>
      
      <div class="menu-overlay" id="menuOverlay"></div>
      
      <div>
        <nav class="menu" id="mobileMenu"> 
          <ul class="menu-list">
            <li class="menu-list-item"><a href="#about">About</a></li>
            <li class="menu-list-item"><a href="#services">Services</a></li>
            <li class="menu-list-item"><a href="#portfolio">Portfolio</a></li>
            <li class="menu-list-item"><a href="#hire">Hire Me</a></li>
            <li class="menu-list-item"><a href="#blogs">Blogs</a></li>
          </ul>
        </nav>
      </div>
      
      <div>
          <button class="global-btn">
            Connect With Us
          
          </button>
      </div>
    </header>`;

// Mobile menu toggle functionality
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function toggleMenu() {
  mobileMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "";

  // Change hamburger icon to X when menu is open
  const icon = mobileMenuToggle.querySelector("i");
  if (mobileMenu.classList.contains("active")) {
    icon.className = "fas fa-times";
  } else {
    icon.className = "fas fa-bars";
  }
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "";
  const icon = mobileMenuToggle.querySelector("i");
  icon.className = "fas fa-bars";
}

mobileMenuToggle.addEventListener("click", toggleMenu);

// Close menu when clicking on overlay
menuOverlay.addEventListener("click", closeMenu);

// Close menu when clicking on a menu item (mobile)
const menuItems = document.querySelectorAll(".menu-list-item a");
menuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

// Close menu with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
    closeMenu();
  }
});

// Prevent scroll when menu is open
document.addEventListener(
  "touchmove",
  (e) => {
    if (mobileMenu.classList.contains("active")) {
      e.preventDefault();
    }
  },
  { passive: false }
);
