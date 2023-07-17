#! /bin/bash

names=("Manolo" "Byte" "Megatron" "Techtron" "Optimus" "Circuit" "Nano" "PowerDrive" "Titan" "RoboMax" "Cell" "TechWiz" "DataGenius" "InfoSeeker" "CodeWhiz" "BrainWave" "TaskMaster" "Helper" "SmartGenie" "DigitalSage" "Analytica" "Insight" "Prodigy" "SkillCraft")
alias=("cabeza de huevo" "el robot" "Bot" "Guru" "Assistant" "Pro" "Buddy" "Companion" "Wizard" "Expert" "Sidekick" "Advisor")

random_name=${names[$RANDOM % ${#names[@]} ]}
random_alias=${alias[$RANDOM % ${#alias[@]} ]}

finalName="${random_name} ${random_alias}"
echo "Nombre del robot: $finalName"
