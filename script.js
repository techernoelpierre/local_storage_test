// localStorage - variableDeclaration
const body = document.querySelector("body")
const getTheme = localStorage.getItem("myTheme");
const convertGetTheme = JSON.parse(getTheme);
let theme;

// localStorage - script

if (getTheme) {
    theme = convertGetTheme;
    changeTheme();
} else {
    theme = true;
    changeTheme();
}


function changeTheme() {
    if (theme === true) {
        body.classList.remove("darkTheme");
        body.classList.add("whiteTheme")
    } else if (theme === false) {
        body.classList.remove("whiteTheme")
        body.classList.add("darkTheme");
    }
}


function getDarkTheme() {
    theme = false;
    localStorage.setItem("myTheme", theme)
    changeTheme();
}
function getWhiteTheme() {
    theme = true;
    localStorage.setItem("myTheme", theme)
    changeTheme();
}