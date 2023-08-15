

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

// Array of image URLs and corresponding descriptions and special moves
const images = [
    {
        url: '/robots/Alexis.png',
        description: "Say everything you need, the voice-activated assistant with a twisted sense of humor! While she might seem like your regular helper at first, her secret specialty is in wreaking havoc on the world's economic order. With a simple command, she can obliterate global currencies, turning every foreign exchange into a giant game of Monopoly. Just don't forget to stock up on canned goods before you ask her to 'activate chaos mode'!",
        specialMove: "Chaos"
    },
    {
        url: '/robots/Gir.png',
        description: "The robot with a flair for self-destruction! Armed with a mischievous grin and an 'Auto-Destroy' button that's always just a finger's twitch away, Gir is here to solve problems the chaotic way. Need a pickle jar opened? Auto-Destroy! Can't decide what to wear? Auto-Destroy! This robot's specialty is turning any mundane task into a hilarious explosion of confetti and chaos. Warning: Keep it away from fragile vases and serious discussions!",
        specialMove: "Destroy"
    },
    {
        url: '/robots/RRRitm0.png',
        description: "Meet the RRR, the dazzling disco darling of the robot world! With moves smoother than butter on a hot pancake, this robot's specialty is busting out dance routines that make even the grooviest humans jealous. From the Electric Slide to the Robot Boogie, RRR is programmed to turn any situation into an impromptu dance-off. Just don't be surprised if it starts doing the moonwalk during a serious business meeting!",
        specialMove: "Dance"
    }
];

// Function to select a random image and update the <img> src, description, and special move
function setRandomImage() {
    const imgElement = document.querySelector('.spritesheet');
    const descElement = document.querySelector('.desc_text');
    const specialBtn = document.querySelector('.specialbtn');
    
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    
    imgElement.src = randomImage.url;
    descElement.textContent = randomImage.description;
    specialBtn.textContent = randomImage.specialMove;
}


// Random Robot Name Generator

const nombres = ["Cybertron", "Opto-X", "Zephyr", "Nexus", "Omega", "Neuro", "Quantum", "Spectron", "Astra", "Xenon", "Orion", "Luna", "Celestia", "Rexis", "Quasar", "Vortex", "Pulsar", "Nebula", "Galactron", "Titanium", "Vesper", "Zion", "Nova", "Luminex", "Infernox", "Ionix", "Astro", "Cypher", "Aether", "Phoenix", "Eclipse", "Sentinel", "Aegis", "Rex", "Nemesis", "Mecha", "Cortex", "Voyager", "Sprocket", "Andromeda", "Xylon", "Exo", "Neptor", "Cosmos", "Galva", "Circuit", "Stellar", "Artemis", "Polaris", "Hyperion", "Quintus", "Helios"];

const complemento = ["Max", "Zeta", "Mk", "Prime", "Alpha", "Delta", "Sigma", "Zeta", "Aurora", "Xenon", "Lunar", "Celestial", "Nova", "Rexis", "Quasar", "Voyager", "Pulsar", "Galactic", "Neptune", "Titan", "Vesper", "Zion", "Nebula", "Luminex", "Inferno", "Ion", "Astro", "Cyper", "Aether", "Phoenix", "Eclipse", "Sentinel", "Aegis", "Rex", "Nemesis", "Mecha", "Cortex", "Voyager", "Sprocket", "Andromeda", "Xylon", "Exo", "Neptor", "Cosmos", "Galva", "Circuit", "Stellar", "Artemis", "Polaris", "Hyperion", "Quintus", "Helios"];

    function getRandomElementFromArray(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
    
    function generateRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 9 + 1) * 1000;
        if(randomNumber == 9000) {  // Microsoft-Apple Upgrade
            return 'X Pro Max'; 
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
    


    const plugButton = document.querySelector('.plug_button');
    const imgOn = document.querySelector('.img_on');
    const imgOff = document.querySelector('.img_off');
    const plugText = document.querySelector('.plug_text');

    plugButton.onclick = function() {
        
        if(plugButton.classList.contains('on')) {
            plugButton.classList.remove('on');
            imgOn.classList.add('hidden');
            imgOff.classList.remove('hidden');
            plugText.textContent = "Disconnected";
        }else{
            plugButton.classList.add('on');
            imgOn.classList.remove('hidden');
            imgOff.classList.add('hidden');
            plugText.textContent = "Connected";
        }

    }



// Call the function when the page loads
window.onload = function() {
    document.getElementById('namerobot').innerText = generateRandomRobotName();
    setRandomImage();
    document.getElementById('batterylevel').innerText = (Math.random() * 80 +20).toFixed(2) + "%";
  };