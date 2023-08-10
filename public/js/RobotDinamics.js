

const action_dinamic = document.querySelector('.spritesheet');
const rightbtn = document.querySelector('.rightbtn');
const leftbtn = document.querySelector('.leftbtn');
const upbtn = document.querySelector('.upbtn');
const downbtn = document.querySelector('.downbtn');
const hibtn = document.querySelector('.hibtn');
const yesbtn = document.querySelector('.yesbtn');
const nobtn = document.querySelector('.nobtn');
const specialbtn = document.querySelector('.specialbtn');

rightbtn.onclick = function() {
    action_dinamic.classList.remove('moveleft');
    action_dinamic.classList.remove('moveup');
    action_dinamic.classList.remove('movedown');
    action_dinamic.classList.remove('greet');
    action_dinamic.classList.remove('yes');
    action_dinamic.classList.remove('not');
    action_dinamic.classList.remove('special');
    action_dinamic.classList.add('moveright');
}

leftbtn.onclick = function() {
    action_dinamic.classList.remove('moveright');
    action_dinamic.classList.remove('moveup');
    action_dinamic.classList.remove('movedown');
    action_dinamic.classList.remove('greet');
    action_dinamic.classList.remove('yes');
    action_dinamic.classList.remove('not');
    action_dinamic.classList.remove('special');
    action_dinamic.classList.add('moveleft');
}

upbtn.onclick = function() {
    action_dinamic.classList.remove('moveright');
    action_dinamic.classList.remove('moveleft');
    action_dinamic.classList.remove('movedown');
    action_dinamic.classList.remove('greet');
    action_dinamic.classList.remove('yes');
    action_dinamic.classList.remove('not');
    action_dinamic.classList.remove('special');
    action_dinamic.classList.add('moveup');
}

downbtn.onclick = function() {
    action_dinamic.classList.remove('moveright');
    action_dinamic.classList.remove('moveleft');
    action_dinamic.classList.remove('moveup');
    action_dinamic.classList.remove('greet');
    action_dinamic.classList.remove('yes');
    action_dinamic.classList.remove('not');
    action_dinamic.classList.remove('special');
    action_dinamic.classList.add('movedown');
}

hibtn.onclick = function() {
    action_dinamic.classList.remove('moveright');
    action_dinamic.classList.remove('moveleft');
    action_dinamic.classList.remove('moveup');
    action_dinamic.classList.remove('movedown');
    action_dinamic.classList.remove('yes');
    action_dinamic.classList.remove('not');
    action_dinamic.classList.remove('special');
    action_dinamic.classList.add('greet');
}

yesbtn.onclick = function() {
    action_dinamic.classList.remove('moveright');
    action_dinamic.classList.remove('moveleft');
    action_dinamic.classList.remove('moveup');
    action_dinamic.classList.remove('movedown');
    action_dinamic.classList.remove('greet');
    action_dinamic.classList.remove('not');
    action_dinamic.classList.remove('special');
    action_dinamic.classList.add('yes');
}

nobtn.onclick = function() {
    action_dinamic.classList.remove('moveright');
    action_dinamic.classList.remove('moveleft');
    action_dinamic.classList.remove('moveup');
    action_dinamic.classList.remove('movedown');
    action_dinamic.classList.remove('greet');
    action_dinamic.classList.remove('yes');
    action_dinamic.classList.remove('special');
    action_dinamic.classList.add('not');
}

specialbtn.onclick = function() {
    action_dinamic.classList.remove('moveright');
    action_dinamic.classList.remove('moveleft');
    action_dinamic.classList.remove('moveup');
    action_dinamic.classList.remove('movedown');
    action_dinamic.classList.remove('greet');
    action_dinamic.classList.remove('yes');
    action_dinamic.classList.remove('not');
    action_dinamic.classList.add('special');
}

const images = [
    '/robots/Alexis.png',
    '/robots/Gir.png',
    '/robots/RRRitm0.png'
];

// Function to select a random image and update the <img> src
function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageURL = images[randomIndex];
    action_dinamic.src = randomImageURL;
}


// Random Robot Name Generator

const nombres = [
    "Manolo", "Byte", "Megatron", "Techtron", "Optimus", "Circuit", "Nano", "PowerDrive", 
    "Titan", "RoboMax", "Cell", "TechWiz", "DataGenius", "InfoSeeker", "CodeWhiz", "BrainWave", 
    "TaskMaster", "Helper", "SmartGenie", "DigitalSage", "Analytica", "Insight", "Prodigy", "SkillCraft"
    ];
    
    const complemento = [
    "cabeza de huevo", "el robot", "Bot", "Guru", "Assistant", "Pro", "Buddy", "Companion", 
    "Wizard", "Expert", "Sidekick", "Advisor"
    ];
    
    function getRandomElementFromArray(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
    
    function generateRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 9 + 1) * 1000;
        if(randomNumber == 9000) {  // Microsoft-Apple Upgrade
            return 10000; 
        }
      return randomNumber;
    }
    
    function generateRandomRobotName() {
      const randomNombre = getRandomNombre();
      const randomComplemento = getRandomComplemento();
      const randomNumero = generateRandomNumber();
      return `${randomNombre} ${randomComplemento} ${randomNumero}`;
    }
    
    function getRandomNombre() {
      return getRandomElementFromArray(nombres);
    }
    
    function getRandomComplemento() {
      return getRandomElementFromArray(complemento);
    }
    
    


// Call the function when the page loads
window.onload = function() {
    document.getElementById('namerobot').innerText = generateRandomRobotName();
    setRandomImage();
  };