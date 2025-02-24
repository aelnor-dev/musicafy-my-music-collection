const URL_API = "http://localhost:3000/songs";
const section = document.getElementById("section");
const songs = [];

function printStart() {
    if(songs == "") {       
       return  section.innerHTML =              
        `<p>Your library is empty.</p>
        <p>Start adding some songs!</p> `      
    }
}

printStart();

async function getAllSongs() {
    try {
        const response = await fetch("URL_API")
        const data = await response.json();        
        return data;

    }catch (error) {
        console.log("Error al optener las canciones:", error)
    }
}