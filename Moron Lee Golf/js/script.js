const toggle = () => document.body.classList.toggle("darkmode");

const changeIcon = (icon) => {
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
};

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
