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

async function printAllSongs() {
  const songs = await getAllSongs();
  console.log(songs);
  if (songs == "") {
    return (section.innerHTML = `<p>Your library is empty.</p>
        <p>Start adding some songs!</p> `);
  } else {
    const article = document.createElement("article");
    
    songs.forEach((song) => {
      section.appendChild(article);
      article.innerHTML = `    
            <img class="cover" src='${song.cover}'>
            <div class="song-properties">
            <p>${song.title}</p>
            <p>${song.artist}</p>
            <p>${song.genre}</p>      
            <audio class="controls" src="${song.audio}" controls></audio>    
            </div>
            `;
    });
  }
}


printAllSongs();
