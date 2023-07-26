# -*- coding: utf-8 -*-
"""
Created on Sun Jul 23 21:39:51 2023
@author: Brialex
@coauthor: DanEC1211
"""

import random
import time
import json

def generate_robot_data():
    # Declaración de valores iniciales
    battery_level = 100.0
    temperature = 25.0
    sensors = ['Proximity Sensor', 'Temperature Sensor', 'Camera', 'Ultrasonic Sensor']

    # Generado de datos
    battery_level += random.uniform(-1, 1)
    battery_level = max(0, min(100, battery_level))

    sensor_data = {sensor: random.uniform(0, 100) for sensor in sensors}

    temperature += random.uniform(-1, 1)
    temperature = max(20, min(30, temperature))

    light_intensity = random.uniform(0, 100)
    humidity = random.uniform(20, 80)

    uptime_seconds = random.randint(0, 3600)
    uptime_str = time.strftime("%H:%M:%S", time.gmtime(uptime_seconds))

    # Crear un diccionario con los datos generados
    robot_data = {
        "battery_level": battery_level,
        "temperature": temperature,
        "sensor_data": sensor_data,
        "light_intensity": light_intensity,
        "humidity": humidity,
        "uptime_str": uptime_str
    }

    # Devolver los datos como un objeto JSON
    return json.dumps(robot_data)

if __name__ == "__main__":
    # Llamamos a la función y mostramos los datos generados en la consola
    data = generate_robot_data()
    print(data)
