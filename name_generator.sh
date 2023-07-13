#! /bin/bash

names=("Manolo" "Byte" "Megatron" "Techtron" "Optimus" "Circuit" "Nano" "PowerDrive" "Titan" "RoboMax" "Cell")
alias=("cabeza de huevo metalico" "el robot" "Bot" "Mecanico" "de metal")

random_name=${names[$RANDOM % ${#names[@]} ]}
random_alias=${alias[$RANDOM % ${#alias[@]} ]}

finalName="${random_name} ${random_alias}"
echo "Nombre del robot: $finalName"
