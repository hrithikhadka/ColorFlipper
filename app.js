const button = document.getElementById('flip');
const colorChange = document.querySelector('.color-flipper');

button.addEventListener('click', function() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    colorChange.style.background = `rgb(${red}, ${green}, ${blue})`;
})