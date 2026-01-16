// Set footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Highlight active nav link based on current path
(() => {
  const path = location.pathname.replace(/\/+$/, "");
  const links = document.querySelectorAll(".nav a");
  links.forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;

    // Make relative links comparable (works for simple static hosting)
    const temp = document.createElement("a");
    temp.href = href;
    const hrefPath = temp.pathname.replace(/\/+$/, "");

    if (hrefPath && path.endsWith(hrefPath)) {
      a.classList.add("active");
    }
  });
})();
