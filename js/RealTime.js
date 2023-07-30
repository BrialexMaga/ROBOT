function getRobotData() {
    // Creating a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configurar la solicitud
    xhr.open('GET', '/robot-data', true);

    // Response Event Listener
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);

                // Display the data
                document.getElementById('batteryLevel').innerText = `Battery Level: ${data.BatteryLevel}%`;
                document.getElementById('temperature').innerText = `Temperature: ${data.Temperature}°C`;
                document.getElementById('proximitySensor').innerText = `Proximity Sensor: ${data.ProximitySensor}`;
                document.getElementById('camera').innerText = `Camera: ${data.Camera}`;
                document.getElementById('ultrasonicsensor').innerText = `Camera: ${data.UltrasonicSensor}`;
                document.getElementById('lightintensity').innerText = `Camera: ${data.LightIntensity}`;
                document.getElementById('humidity').innerText = `Camera: ${data.Humidity}`;
                document.getElementById('uptime').innerText = `Camera: ${data.Uptime}`;

            } else {
                console.error('Error al obtener los datos del robot:', xhr.status, xhr.statusText);
            }
        }
    };

    // Send the request to the server
    xhr.send();
}

// fist call to the function
getRobotData();

// loop the function
setInterval(getRobotData, 1000);