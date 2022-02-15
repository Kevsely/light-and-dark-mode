const themeSwitchButton = document.querySelector("[type=checkbox]");

const themeText = document.getElementById("toggle-text");
const themeLogo = document.getElementsByClassName("fas")[0];
const navbar = document.getElementById("nav");
const textbox = document.getElementById("text-box");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

function setTheme (isDark) {
    themeText.textContent = (isDark ? "Dark" : "Light") + " Mode";
    themeLogo.classList.toggle("fa-moon");
    themeLogo.classList.toggle("fa-sun");
    navbar.style.backgroundColor = isDark ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
    textbox.style.backgroundColor = isDark ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
    image1.src = `img/undraw_proud_coder_${isDark ? "dark" : "light"}.svg`;
    image2.src = `img/undraw_feeling_proud_${isDark ? "dark" : "light"}.svg`;
    image3.src = `img/undraw_conceptual_idea_${isDark ? "dark" : "light"}.svg`;
}

// Change root custom attribute 'data-theme'
function changeTheme(event) {
    document.documentElement.setAttribute("data-theme", event.target.checked ? "dark" : "light");
    setTheme(event.target.checked);
    localStorage.setItem("theme", event.target.checked ? "dark" : "light");
}

// Event listener
themeSwitchButton.addEventListener("change", changeTheme)

//Checking the past theme by the user
currentTheme = localStorage.getItem("theme");
if(currentTheme === "dark")
    document.documentElement.setAttribute("data-theme", "dark");
else
    document.documentElement.setAttribute("data-theme", "light");
