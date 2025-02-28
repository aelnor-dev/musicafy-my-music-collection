<h1>🎵 Musicafy: My Music Collection</h1>

Descripción en español abajo ⬇️

Welcome to Musicafy! This is a simple web application for managing your favorite songs. 🎶 It allows users to Create, Read, Update, and Delete (CRUD) songs from their collection. The app uses a JSON server to simulate a backend API. 🚀

📂 Project Structure

🏠 index.html - The main HTML file for the application.

📦 package.json - Contains project metadata and dependencies.

📄 database.json - Stores the music collection data for the JSON server.

🎨 style.css - Styles for the application.

🎼 main.js - Core JavaScript logic for the app.

🖼️ musicafy-logo.png - The application logo.

🚀 Getting Started

✅ Prerequisites

Make sure you have Node.js and npm installed on your machine. 🖥️

📥 Installation

Clone the repository:

git clone https://github.com/aelnor-dev/music-collection.git <br>
cd music-collection

Install the dependencies:

npm install

Start the JSON server:

npm run api

Open index.html in your browser to use the application. 🌐

🎧 Usage

🎤 Creating a Song

After clicking "Add song", fill in the song details (Title, Artist, Genre) in the form.

Upload an image for the cover and an audio file for the song.

Click the "Add" button to add the song to the collection. 🎶

📜 Viewing All Songs

The application automatically displays all songs in the collection when it loads. 🎼

✏️ Modifying a Song

Click the pencil icon for the song you want to edit.

Update the song details and/or files.

Click "Modify" to update the song. ✅

🗑️ Deleting a Song

Click the trash can button for the song you want to remove.

Confirm the deletion in the popup. ⚠️

📱 Responsive Design

This application is responsive and adapts to a variety of screen sizes, ensuring a smooth user experience on many desktops, tablets, and mobile devices. 💻📱

⚙️ Functions

createSong() - Creates a new song and sends it to the server.

toBase64(file) - Converts a file to a base64 string.

getAllSongs() - Fetches all songs from the server.

getOneSong(id) - Fetches a single song by its ID.

modifySong() - Updates an existing song and sends the modified data to the server.

deleteSong(id) - Deletes a song from the collection.

printAllSongs() - Displays all songs on the page.

openModal(mode, songData) - Opens a modal for creating or editing a song.

openPopUp(id) - Opens a pop-up to confirm deletion.

closeModal() - Closes the modal and the pop-up.

okAction(id) - Confirms the deletion in the pop-up.

📜 License

This project does not have a license. ⚠️ Feel free to modify and use it as you wish! 😃

<p align="center"> ----------------------------------------------------------------------------------------</p>

🎵 Musicafy: Mi Colección de Música

¡Bienvenido a Musicafy! Esta es una aplicación web sencilla para gestionar tus canciones favoritas. 🎶 Permite a los usuarios Crear, Leer, Actualizar y Eliminar (CRUD) canciones de su colección. La aplicación utiliza un servidor JSON para simular una API de backend. 🚀

📂 Estructura del Proyecto

🏠 index.html - El archivo HTML principal de la aplicación.

📦 package.json - Contiene los metadatos y dependencias del proyecto.

📄 database.json - Almacena los datos de la colección de música para el servidor JSON.

🎨 style.css - Estilos para la aplicación.

🎼 main.js - Lógica principal en JavaScript de la aplicación.

🖼️ musicafy-logo.png - El logo de la aplicación.

🚀 Comenzando

✅ Requisitos Previos

Asegúrate de tener Node.js y npm instalados en tu ordenador. 🖥️

📥 Instalación

Clona el repositorio:

git clone https://github.com/aelnor-dev/music-collection.git <br>
cd music-collection

Instala las dependencias:

npm install

Inicia el servidor JSON:

npm run api

Abre index.html en tu navegador para usar la aplicación. 🌐

🎧 Uso

🎤 Crear una Canción

Después de hacer clic en "Add song", rellena los detalles de la canción (Título, Artista, Género) en el formulario.

Sube una imagen para la portada y un archivo de audio para la canción.

Haz clic en el botón "Add" para añadir la canción a la colección. 🎶

📜 Ver Todas las Canciones

La aplicación muestra automáticamente todas las canciones de la colección al cargarse. 🎼

✏️ Modificar una Canción

Haz clic en el icono del lápiz en la canción que deseas editar.

Actualiza los detalles y/o los archivos de la canción.

Haz clic en "Modify" para actualizar la canción. ✅

🗑️ Eliminar una Canción

Haz clic en el icono de la papelera en la canción que deseas eliminar.

Confirma la eliminación en la ventana emergente. ⚠️

📱 Diseño Responsivo

Esta aplicación es responsiva y se adapta a una variedad de tamaños de pantalla, asegurando una experiencia fluida en muchos ordenadores, tabletas y dispositivos móviles. 💻📱

📜 Licencia

Este proyecto no tiene licencia. ⚠️ ¡Siéntete libre de modificarlo y usarlo como quieras! 😃
