// const header = document.getElementById("header");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

// // Mobile sidebar functionality
// const mobileMenuBtn = document.getElementById("mobileMenuBtn");
// const sidebarOverlay = document.getElementById("sidebarOverlay");
// const sidebar = document.getElementById("sidebar");
// const closeBtn = document.getElementById("closeBtn");

// mobileMenuBtn.addEventListener("click", () => {
//   sidebar.classList.add("active");
//   sidebarOverlay.classList.add("active");
//   document.body.style.overflow = "hidden";
// });

// closeBtn.addEventListener("click", () => {
//   sidebar.classList.remove("active");
//   sidebarOverlay.classList.remove("active");
//   document.body.style.overflow = "";
// });

// sidebarOverlay.addEventListener("click", () => {
//   sidebar.classList.remove("active");
//   sidebarOverlay.classList.remove("active");
//   document.body.style.overflow = "";
// });

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       window.scrollTo({
//         top: target.offsetTop - 100,
//         behavior: "smooth",
//       });

//       // Close sidebar if open
//       sidebar.classList.remove("active");
//       sidebarOverlay.classList.remove("active");
//       document.body.style.overflow = "";
//     }
//   });
// });

// // Active link highlighting
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-links a, .sidebar-links a");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (window.scrollY >= sectionTop - 150) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === `#${current}`) {
//       link.classList.add("active");
//     }
//   });
// });
