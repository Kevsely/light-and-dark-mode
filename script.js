const themeSwitchButton = document.querySelector("[type=checkbox]");

const navbar = document.getElementById("nav");
const image1 = document.getElementById("image1");
const image1 = document.getElementById("image2");
const image1 = document.getElementById("image3");
const textbox = document.getElementById("text-box");

// Change root custom attribute 'data-theme'
function changeTheme(event) {
    console.log(event.target.checked);
    if(event.target.checked)
    {
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else
    {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

// Event listener
themeSwitchButton.addEventListener("change", changeTheme)