# -*- coding: utf-8 -*-
"""
Created on Wed Jul 26 18:56:58 2023
@author: DanEC1211
based on: main.py by @Brialex 
"""

import random
import time
import json

def generate_robot_data():
    # Declarate initial values
    battery_level = 100.0
    temperature = 25.0
    sensors = ['BatteryLevel', 'Temperature', 'ProximitySensor', 'Camera', 'UltrasonicSensor', 'LightIntensity', 'Humidity', 'Uptime']

    # Data generation
    sensor_data = {sensor: random.uniform(0, 100) for sensor in sensors}

    battery_level += random.uniform(-1, 1)
    battery_level = max(0, min(100, battery_level))
    sensor_data['BatteryLevel'] = battery_level #Replace the value of the key 'BatteryLevel' with the new value

    temperature += random.uniform(-1, 1)
    temperature = max(20, min(30, temperature))
    sensor_data['Temperature'] = temperature #Replace the value of the key 'Temperature' with the new value

    humidity = random.uniform(20, 80)
    sensor_data['Humidity'] = humidity #Replace the value of the key 'Humidity' with the new value

    uptime_seconds = random.randint(0, 604800)
    uptime_str = time.strftime("%H:%M:%S", time.gmtime(uptime_seconds))
    sensor_data['Uptime'] = uptime_str #Replace the value of the key 'Uptime' with the new value

    return sensor_data #Return the dictionary with the new values


if __name__ == "__main__":
    # Llamamos a la función y mostramos los datos generados en la consola
    data = generate_robot_data()
    print(json.dumps(data)) #Convertimos el diccionario a un string en formato JSON