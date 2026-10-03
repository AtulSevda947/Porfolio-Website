document.addEventListener("DOMContentLoaded", () => {
  // Mobile Hamburger Toggle
  const hamburger = document.querySelector(".hamb");
  const navList = document.querySelector(".nav-list ul");
  const navLinks = document.querySelectorAll(".nav-list ul a");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navList.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  }

  // Theme Mode Switch (Light / Dark)
  const themeToggle = document.querySelector("#theme-toggle");
  const root = document.documentElement;

  const currentTheme = localStorage.getItem("user-theme") || "dark";
  root.setAttribute("data-theme", currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = root.getAttribute("data-theme");
      const targetTheme = activeTheme === "dark" ? "light" : "dark";

      root.setAttribute("data-theme", targetTheme);
      localStorage.setItem("user-theme", targetTheme);
    });
  }
});
