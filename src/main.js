const URL_API = "http://localhost:3000/songs";
const section = document.getElementById("section");

async function getAllSongs() {
    try {
        const response = await fetch(`${URL_API}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al obtener las canciones:", error);
    }
}

async function createSong(newSong) {
    try {
        const response = await fetch(`${URL_API}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newSong)
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("The song could not be created:", error)
    }
}

async function printAllSongs() {
    const songs = await getAllSongs();
    console.log(songs);
    section.innerHTML = "";

    if (songs == "") {
        return (section.innerHTML = `<p>Your library is empty.</p>
        <p>Start adding some songs!</p> `);
    } else {
       
        songs.forEach((song) => {
            console.log("Canción recibida:", song); 
            const article = document.createElement("article");            
            article.innerHTML = `    
                <img class="cover" src='${song.cover}'>
                <div class="song-properties">
                <p>${song.title}</p>
                <p>${song.artist}</p>
                <p>${song.genre}</p>      
                <audio class="controls" src="${song.audio}" controls></audio>    
                </div>     
                `;
                section.appendChild(article);
        })       
    }    
}
printAllSongs();

async function openModal() {
    try {

    } catch (error) {
        console.log("")
    }
}

