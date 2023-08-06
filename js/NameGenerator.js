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
        Number = Math.floor(Math.random() * 9 + 1) * 1000;
        if(Number == 9000) {  // Microsoft-Apple Upgrade
            Number = 10000; 
        }
      return Number;
    }
    
    function generateRandomRobotName() {
      const randomNombre = getRandomElementFromArray(nombres);
      const randomComplemento = getRandomElementFromArray(complemento);
      const randomNumero = generateRandomNumber();
      return `${randomNombre} ${randomComplemento} ${randomNumero}`;
    }