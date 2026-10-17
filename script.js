const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";

  themeToggle.setAttribute(
    "aria-pressed",
    String(isDark)
  );
});
