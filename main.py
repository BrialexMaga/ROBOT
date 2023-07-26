# -*- coding: utf-8 -*-
"""
Created on Sun Jul 23 21:39:51 2023

@author: Brialex
"""

import random
import time

def generate_robot_data():
    #declaración de valores iniciales
    battery_level = 100.0
    temperature = 25.0
    sensors = ['Proximity Sensor', 'Temperature Sensor', 'Camera', 'Ultrasonic Sensor']

    #Se repetira 200 veces antes de terminar
    for i in range(200):
        #Generado de datos
        battery_level += random.uniform(-1, 1)
        battery_level = max(0, min(100, battery_level))
        
        sensor_data = {sensor: random.uniform(0, 100) for sensor in sensors}

        temperature += random.uniform(-1, 1)
        temperature = max(20, min(30, temperature))
        
        light_intensity = random.uniform(0, 100)
        humidity = random.uniform(20, 80)
        
        uptime_seconds = random.randint(0, 3600)
        uptime_str = time.strftime("%H:%M:%S", time.gmtime(uptime_seconds))

        #Mostrar los datos generados
        """
        print("Robot Status:")
        print(f"Battery Level = {battery_level:.2f}%")
        print(f"Temperature = {temperature:.2f}°C")
        for sensor, value in sensor_data.items():
            print(f"{sensor}: {value:.2f}")
        print(f"Uptime: {uptime_str}")
        print(f"Light Intensity: {light_intensity:.2f}")
        print(f"Humidity: {humidity:.2f}")
        print("----------------------")
        """

        time.sleep(1) #Espera un segundo antes de repetir

if __name__ == "__main__":
    generate_robot_data()
