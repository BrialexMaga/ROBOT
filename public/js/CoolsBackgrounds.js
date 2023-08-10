// Generate random degree between 0 and 360
const degree = Math.floor(Math.random() * 360);

// Generate random hex color values
const color1 = getRandomHexColor();
const color2 = getRandomHexColor();

// Function to generate a random hex color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get the HTML element
const element = document.querySelector('html');
const presentation = document.querySelector('#presentation');

// Apply the gradient background using the generated values to the HTML element
element.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})`;

// Apply the gradient background and additional properties to the #presentation element
presentation.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
presentation.style.webkitBackgroundClip = 'text';
presentation.style.webkitTextFillColor = 'transparent';
