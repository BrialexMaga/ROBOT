#! /bin/bash

names=("R2-D2" "BB-8" "C-3PO" "Bender" "Wall-E" "Eva" "Mazinger Z" "AstroBoy" "Robocop" "Optimus Prime" "Bumblebee" "Baymax" "T-800" "T1000" "Sonny" )

robot_name=${names[$RANDOM % ${#names[@]} ]}

echo "Nombre del robot: $robot_name"
