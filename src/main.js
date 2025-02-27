const URL_API = "http://localhost:3000/songs";
const section = document.getElementById("section");

async function createSong() {
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const genre = document.getElementById("genre").value;
    const imageFile = document.getElementById("image").files[0];
    const songFile = document.getElementById("song").files[0];

    const imageBase64 = imageFile ? await toBase64(imageFile) : "";
    const songBase64 = songFile ? await toBase64(songFile) : "";

    const newSong = {
        title: title,
        artist: artist,
        genre: genre,
        cover: imageBase64,
        audio: songBase64,
    };

    try {
        console.log("Datos que se enviarán:", newSong);
        const response = await fetch(`${URL_API}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSong),
        });

        alert("Song created succesfully.");
        printAllSongs();
    } catch (error) {
        console.log("The song could not be created:", error);
        alert("the song could not be created.");
    }
}

// Función para convertir archivos a base64 gracias a ChatGPT pero lo entendemos
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

async function getAllSongs() {
    try {
        const response = await fetch(`${URL_API}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al obtener las canciones:", error);
    }
}

async function getOneSong(id) {
    try {
        const response = await fetch(`${URL_API}/${id}`);
        const data = await response.json();
        openModal("modify", data);
    } catch (error) {
        console.log("The song could not be obtained:", error);
    }
}

async function modifySong() { 
  const id = document.getElementById("data-id").value;
  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;
  const genre = document.getElementById("genre").value;
  const imageFile = document.getElementById("image").files[0];
  const songFile = document.getElementById("song").files[0];

  const currentCover = document.getElementById("currentCover").value;
  const currentAudio = document.getElementById("currentAudio").value;

  const imageBase64 = imageFile ? await toBase64(imageFile) : currentCover;
  const songBase64 = songFile ? await toBase64(songFile) : currentAudio;


  const modifiedSong = {
      title,
      artist,
      genre,
      cover: imageBase64,
      audio: songBase64,
  };

  try {
    const response = await fetch(`${URL_API}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(modifiedSong)
    }
  )         
  alert("Song modified succesfully.");
  printAllSongs();
} catch (error) {
  console.log("The song could not be modified:", error);
  alert("The song could not be modified.");
}
}

async function deleteSong(id) {
    try {
        const response = await fetch(`${URL_API}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log("The song could not be delete:", error);
    }
}

async function printAllSongs() {
    const songs = await getAllSongs();
    console.log(songs);
    section.innerHTML = "";

    if (songs == "") {
        return (section.innerHTML = `
            <div class="empty-sentences">
            <p class="empty-library-sentence">Your library is empty.</p>
            <p class="add-songs-sentence">Start adding some songs!</p> 
            </div>`);
    } else {
        songs.innerHTML = "";
        songs.forEach((song) => {
            console.log("Canción recibida:", song);
            const article = document.createElement("article");
            article.style.backgroundImage = `url('${song.cover}')`;
            article.style.backgroundSize = "cover";
            article.innerHTML = `  
                <div class="shadow"></div>  
                <div class="settings">
                    <button  onclick="getOneSong('${song.id}')"><i class="bi bi-pencil-fill"></i></button>
                    <button  onclick="deleteSong('${song.id}')"><i class="bi bi-trash3-fill"></i></button>
                </div>
                <div class="song-properties">
                <p>${song.title}</p>
                <p>${song.artist}</p>
                <p>${song.genre}</p>      
                <audio class="controls" src="${song.audio}" controls></audio>    
                </div>     
                `;
            section.appendChild(article);
        });
    }
}

async function openModal(mode = "create", songData = null) {
    try {
        const modal = document.getElementById("modal");
        const form = document.createElement("form");

        const initialSentence =
            mode === "create" ? "Add new song" : "Modify song";
        const buttonText = mode === "create" ? "Add" : "Modify";
        const buttonAction = mode === "create" ? "createSong()" : "modifySong(`${id}`)";
      
        document.body.style.overflow = "hidden";

        shadowModal.style.display = "block";
        modal.style.display = "block";
        form.innerHTML = `            
        <div class="modal-header">    
            <h4>${initialSentence}</h4> 
            <button class="close-tag" onclick="close()"><i class="bi bi-x-lg"></i></button>
        </div>   
            <input type="hidden" id="data-id" value= "${mode === "modify" && songData ?`${songData.id} ` : "" }" />

            <label for="title">Title:</label> 
            <input type="text" id="title" name="title" value="${mode === "modify" && songData ? songData.title : ""}"> 

            <label for="artist">Artist:</label>
            <input type="text" id="artist" name="artist" value="${mode === "modify" && songData ? songData.artist : ""}">

            <label for="genre">Genre:</label>
            <select id="genre" name="genre">
                <option value="" disabled>--Choose a genre--</option>
                <option value="rock" ${mode === "modify" && songData && songData.genre === "rock" ? "selected" : ""}>Rock</option>
                <option value="hip-hop" ${mode === "modify" && songData && songData.genre === "hip-hop" ? "selected" : ""}>Hip hop</option>
                <option value="pop" ${mode === "modify" && songData && songData.genre === "pop" ? "selected" : ""}>Pop</option>
                <option value="classical" ${mode === "modify" && songData && songData.genre === "classical" ? "selected" : ""}>Classical</option>
                <option value="dance" ${mode === "modify" && songData && songData.genre === "dance" ? "selected" : ""}>Dance</option>
                <option value="latino" ${mode === "modify" && songData && songData.genre === "latino" ? "selected" : ""}>Latino</option>
                </select>

            <label for="image">Upload image:</label>
            <input type="file" id="image" name="image" accept="image/*" value="${mode === "modify" && songData ? songData.cover : ""}">
            <input type="hidden" id="currentCover" value="${mode === "modify" && songData ? songData.cover : ""}">

            <label for="song">Upload song:</label>
            <input type="file" id="song" name="song" accept="audio/*" value="${mode === "modify" && songData ? songData.audio : ""}">
            <input type="hidden" id="currentAudio" value="${mode === "modify" && songData ? songData.audio : ""}">
           

            <button class="btnModal" type="button" onclick="${buttonAction}">${buttonText}</button>
            `;
        modal.appendChild(form);
    } catch (error) {
        console.log("");
    }
}

function close() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    shadowModal.style.display = "none";
    document.body.style.overflow = "auto";
}

printAllSongs();
