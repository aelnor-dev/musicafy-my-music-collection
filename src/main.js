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
const modal = document.getElementById("modal");
const form = document.createElement("form");
form.innerHTML = `
<p>Modify song</p>

<label for="title">Title:</label> <br>
<input type="text" id="title" name="title"> 

<label for="artist">Artist:</label> <br>
<input type="text" id="artist" name="artist">

<label for="genre">Genre:</label><br>
<select multiple id="genre" name="genre">
    <option value="rock">Rock</option>
    <option value="hip-hop">Hip hop</option>
    <option value="pop">Pop</option>
    <option value="classical">Classical</option>
    <option value="dance">Dance</option>
    <option value="latino">Latino</option>
</select>

<label for="image">Upload image:</label> <br>
<input type="file" id="image" name="image" accept="image/*">


<label for="song">Upload song:</label> <br>
<input type="file" id="song" name="song" accept="audio/*">

<button type="submit">Modify</button>
`

    } catch (error) {
        console.log("")
    }
}

