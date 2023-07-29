#!/bin/bash

nombres=(
  "Luke" "Leia" "Han" "Solo" "Darth" "Mace" "Windu" "Babu" 
  "Yoda" "Chewbacca" "Rey" "Kylo" "Ren"  "Finn" "Poe" "Dameron" 
  "Anakin" "Padmé" "Amidala" "Lando" "Calrissian" "Vader" 
  "Obi-Wan" "Kenobi" 
)

complemento=(
  "Jedi" "Sith" "Wookiee" "Droid" "Skywalker" 
  "Force" "Falcon" "Star" "Destroyer" "Lightsaber" 
  "Hoth" "Endor" "Frik" "X-wing" "Death" "Star" 
  "Millennium"  "Tatooine" 
)

echo "La fuerza ha hablado y el nombre de tu robot es... "
  random_nombre=${nombres[$RANDOM % ${#nombres[@]}]}
  random_complemento=${complemento[$RANDOM % ${#complemento[@]}]}
  random_numero=$(( (RANDOM % 9 + 1) * 1000 ))
  echo "$random_nombre $random_complemento $random_numero"