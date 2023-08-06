import random
import time
import json
import logging

# Set the desired log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)
logging.basicConfig(level=logging.DEBUG, filename='app_activity.log', filemode='a', format='%(asctime)s - %(levelname)s - %(message)s')

def generate_robot_data():
    try:
        # Declarate initial values
        battery_level = 100.0
        temperature = 25.0
        sensors = ['BatteryLevel', 'Temperature', 'ProximitySensor', 'Camera', 'UltrasonicSensor', 'LightIntensity', 'Humidity', 'Uptime']

        # Data generation
        sensor_data = {sensor: round(random.uniform(0, 100),2) for sensor in sensors}

        battery_level += random.uniform(-1, 1)
        battery_level = max(0, min(100, battery_level))
        sensor_data['BatteryLevel'] = round(battery_level,2) #Replace the value of the key 'BatteryLevel' with the new value

        temperature += random.uniform(-1, 1)
        temperature = max(20, min(30, temperature))
        sensor_data['Temperature'] = round(temperature,2) #Replace the value of the key 'Temperature' with the new value

        humidity = random.uniform(20, 80)
        sensor_data['Humidity'] = round(humidity,2) #Replace the value of the key 'Humidity' with the new value

        uptime_seconds = random.randint(0, 604800)
        uptime_str = time.strftime("%H:%M:%S", time.gmtime(uptime_seconds))
        sensor_data['Uptime'] = uptime_str #Replace the value of the key 'Uptime' with the new value
    
        logging.info("Robot data was generated successfully.")

        return sensor_data  # Return the dictionary with the new values
    except Exception as e:
        # Handle exceptions, log the error and continue or take some specific action
        logging.error(f"Robot data generation error: {e}")
        return None

if __name__ == "__main__":
    # We call the function and display the generated data in the console
    data = generate_robot_data()
    if data:
        print(json.dumps(data))  # Convert the dictionary to a string in JSON format
    else:
        print("Robot data generation failed. See 'app_activity.log' file for details.")