const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

// Route to get the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..','index.html'));
});

// setting the function to get the data from the python script
app.get('/robot-data', (req, res) => {
    // building the path to the python script
    const pythonScriptPath = path.join(__dirname, '..', '..', 'python', 'robot_data_generator.py');

    exec(`python3 ${pythonScriptPath}`, (error, stdout) => {
        if (error) {
            console.error('Error al ejecutar el script de Python:', error);
            res.status(500).json({ error: 'Error al generar los datos del robot' });
            return; 
        }

        const robotData = JSON.parse(stdout); //parsing the data to JSON
        res.json(robotData); //sending the data to the client
    });
});

app.listen(port, () => {
    console.log(`Servidor web escuchando en http://localhost:${port}`); //printing the port at the console
});
