let showTech = document.getElementById('tech');
let downArrow = document.getElementById('dropdown');
let upArrow = document.getElementById('hide');

const showMe = () => {
    showTech.style.display = 'block';
    downArrow.style.display = 'none';
    upArrow.style.display = 'flex';
}

downArrow.onclick = showMe;

const hideMe = () => {
    showTech.style.display = 'none';
    downArrow.style.display = 'flex';
    upArrow.style.display = 'none';
}

upArrow.onclick = hideMe;