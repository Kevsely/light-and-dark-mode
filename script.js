let themeSwitchButton = document.querySelector("[type=checkbox]");

// Change root custom attribute 'data-theme'
function changeTheme(event) {
    console.log(event.target.checked);
    if(event.target.checked)
        document.documentElement.setAttribute("data-theme", "dark");
    else
        document.documentElement.setAttribute("data-theme", "light");
}

// Event listener
themeSwitchButton.addEventListener("change", changeTheme)