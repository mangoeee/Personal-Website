/* Goal of this .js file is to open a nav menu for mobile devices */

let dropMenu = document.getElementById("open"); // get hamburger icon
let closeMenu = document.getElementById("close"); // get up arrow
let menu = document.getElementById("breadcrumb"); // get nav list

const showMenu = () => {
    dropMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    menu.style.display = 'block';
}

dropMenu.onclick = showMenu;

const hideMenu = () => {
    dropMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    menu.style.display = 'none';
}

closeMenu.onclick = hideMenu;