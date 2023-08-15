function getRobotData() {
    // Creating a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    const plugbotton = document.querySelector('.plug_button');
    var charge;
    var horas;
    var minutos;
    var segundos;


    // Configurar la solicitud
    xhr.open('GET', '/robot-data', true);

    // Response Event Listener
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                // Display the data
                if(plugbotton.classList.contains('on')) {
                    charge = parseFloat(document.querySelector('#batterylevel').innerHTML.replace('%',''))+(.001*(Math.random()*8-1));
                    if(charge>100){
                        document.getElementById('batterylevel').innerText = `100%`;
                    } else{
                        document.getElementById('batterylevel').innerText = `${charge.toFixed(2)}%`;
                    }
                }else{
                    charge = parseFloat(document.querySelector('#batterylevel').innerHTML.replace('%',''))-(.018*(Math.random()*8-1));
                    if(charge<0){
                        document.getElementById('batterylevel').innerText = `0%`;
                    } else{
                        document.getElementById('batterylevel').innerText = `${charge.toFixed(2)}%`;
                    }
                }   
                document.getElementById('temperature').innerText = `${data.Temperature}°C`;
                document.getElementById('proximitysensor').innerText = `${data.ProximitySensor}`;
                document.getElementById('camera').innerText = `${data.Camera}`;
                document.getElementById('ultrasonicsensor').innerText = `${data.UltrasonicSensor}`;
                document.getElementById('lightintensity').innerText = `${data.LightIntensity}`;
                document.getElementById('humidity').innerText = `${data.Humidity}`;
                
                horas=parseInt(document.querySelector('#hours').innerHTML);
                minutos=parseInt(document.querySelector('#minutes').innerHTML);
                segundos=parseInt(document.querySelector('#seconds').innerHTML);
                segundos++;
                console.log(segundos);
                if(segundos == 60) {
                    segundos = 0;
                    minutos++;
                    if(minutos == 60) {
                        minutos = 0;
                        horas++;
                    }
                }

                if(horas < 10) { horas = '0' + horas; }
                if(minutos < 10) { minutos = '0' + minutos; }
                if(segundos < 10) { segundos = '0' + segundos; }
                document.getElementById('hours').innerText = `${horas}`;
                document.getElementById('minutes').innerText = `${minutos}`;
                document.getElementById('seconds').innerText = `${segundos}`;

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


