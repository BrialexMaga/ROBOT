# ROBOT

Este proyecto se centra en el desarrollo de un sistema de control para un robot simulado, que incluye una interfaz web en tiempo real para monitorear su estado y un panel de control para enviar comandos. Utiliza el framework Express.js para el backend y tecnologías web modernas para la interfaz de usuario.

## Descarga y Configuración

1. **Clona el Repositorio:**
   Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/BrialexMaga/ROBOT.git

2. **Instala Docker:**
    Si aun no tienes Docker instalado, descargalo e instalalo desde el sitio web oficial: [Docker](https://www.docker.com/get-started/)

## Ejecuta la Aplicación en un Contenedor

1. **Construye la Imagen del Contenedor:**
    Navega a la carpeta del proyecto y ejecuta el siguiente comando para construir la imagen del contenedor:

    ```bash
    docker build -t brialex/robot:0.0.1 .

2. **O puedes descargar la imagen de Docker Hub:**

    ```bash
    docker pull brialex/robot:0.0.1

3. **Ejecuta el Contenedor:**
    Una vez construida/descargada la imagen, inicia el contenedor utilizando el siguiente comando:

    ```bash
    docker run --name robot -d -p 80:80 brialex/robot:0.0.1 

4. **Accede a la Aplicación:**
    Abre tu navegador y visita 'http://localhost' para ver la aplicación en funcionamiento.


## Ejecuta la Aplicación sin Docker
En caso de no querer usar docker, puedes seguir los siguientes pasos.

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/BrialexMaga/ROBOT.git

2. Entra al directorio del proyecto e instala los modulos de Node.js:

    ```bash
    npm i

3. Ejecuta el siguiente comando para iniciar el servidor:

    ```bash
    npm start

4. Abre tu navegador y visita 'http://localhost' para ver la aplicación en funcionamiento.