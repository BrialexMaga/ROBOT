function actualizarDatos(){
    $.ajax({
        cache: false,
        async: true,
        url: '../python/main.py', 
        success: function(respuesta) {
            // Parsear la respuesta JSON recibida del servidor
            var data = JSON.parse(respuesta);

            // Mostrar los datos en la página web
            $('#battery_level').text('Battery Level: ' + data.battery_level.toFixed(2) + '%');
            $('#temperature').text('Temperature: ' + data.temperature.toFixed(2) + '°C');

            // Mostrar los datos de sensor_data
            for (var sensor in data.sensor_data) {
                $('#' + sensor).text(sensor + ': ' + data.sensor_data[sensor].toFixed(2));
            }

            $('#light_intensity').text('Light Intensity: ' + data.light_intensity.toFixed(2));
            $('#humidity').text('Humidity: ' + data.humidity.toFixed(2));
            $('#uptime_str').text('Uptime: ' + data.uptime_str);
        }
    });
}

setInterval(function(){
    actualizarDatos();
}, 1000); // Actualizar cada 1 segundo (1000 ms)
