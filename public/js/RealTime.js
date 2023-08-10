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
                document.getElementById('batterylevel').innerText = `${data.BatteryLevel}%`;
                document.getElementById('temperature').innerText = `${data.Temperature}°C`;
                document.getElementById('proximitysensor').innerText = `${data.ProximitySensor}`;
                document.getElementById('camera').innerText = `${data.Camera}`;
                document.getElementById('ultrasonicsensor').innerText = `${data.UltrasonicSensor}`;
                document.getElementById('lightintensity').innerText = `${data.LightIntensity}`;
                document.getElementById('humidity').innerText = `${data.Humidity}`;
                document.getElementById('uptime').innerText = `${data.Uptime}`;

            } else {
                console.error('Error al obtener los datos del robot:', xhr.status, xhr.statusText);
            }
        }
    };

    // Send the request to the server
    xhr.send();
}

// loop the function
$( document ).ready(function() {
    setInterval(getRobotData, 1000);
});


