const themeSwitchButton = document.querySelector("[type=checkbox]");

const navbar = document.getElementById("nav");
const image1 = document.getElementById("image1");
const image1 = document.getElementById("image2");
const image1 = document.getElementById("image3");
const textbox = document.getElementById("text-box");
const themeText = document.getElementById("toggle-text");

function setToDark() {

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