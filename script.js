const themeSwitchButton = document.querySelector("[type=checkbox]");

const themeText = document.getElementById("toggle-text");
const themeLogo = document.getElementsByClassName("fas")[0];
const navbar = document.getElementById("nav");
const textbox = document.getElementById("text-box");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

function setToDark() {
    themeText.textContent = "Dark Mode";
    themeLogo.classList.replace("fa-sun", "fa-moon");
    navbar.style.backgroundColor = "rgb(0 0 0 / 50%)";
    textbox.style.backgroundColor = "rgb(255 255 255 / 50%)";
    image1.src = "img/undraw_proud_coder_dark.svg";
    image2.src = "img/undraw_feeling_proud_dark.svg";
    image3.src = "img/undraw_conceptual_idea_dark.svg";
}

function setToLight() {
    
}

// Change root custom attribute 'data-theme'
function changeTheme(event) {
    console.log(event.target.checked);
    if(event.target.checked)
    {
        document.documentElement.setAttribute("data-theme", "dark");
        setToDark();
    }
    else
    {
        document.documentElement.setAttribute("data-theme", "light");
        setToLight();
    }
}

// Event listener
themeSwitchButton.addEventListener("change", changeTheme)