// function bestTrapSinger(singer) {
//     return new Promise((resolve, reject) => {
//         if(singer == "LilTjay") {
//             resolve({
//                 success: true,
//                 singerName: singer,
//                 message: singer + "is the bast singer ever"
//             })
//         } else {
//             reject({
//                 success: false,
//                 message: "I\'m not so sure!"
//             })
//         }
//     })
// }

// function bestTrapSong(response) {
//     return new Promise((resolve, reject) => {
//         if(response.success) {
//             resolve("F.N by " + response.singerName);
//         } else {
//             reject("Do you know LilTjay?");
//         }
//     })
// }

// async function doTheJob() {
//     try {
//         const bestTrapSingerResponse = await bestTrapSinger('Polo G');
//         console.log(bestTrapSingerResponse)
//         const bestTrapSongResponse = await bestTrapSong(bestTrapSingerResponse)
//         console.log(bestTrapSongResponse)
//     } catch (err) { 
//         console.log(err.message)
//     }
    
// }

// doTheJob()


// =====================================================================================================================


function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', e => {
    e.preventDefault();
    doSubmit();
})

async function doSubmit() {
    const lyrics = document.querySelector('#lyrics');
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song');

    lyrics.innerHTML = '<div><span>Carregando</span></div>';
    
    try {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        if(data.lyrics) {
            lyrics.innerHTML = data.lyrics;
        } else {
            lyrics.innerHTML = data.error;
        }
    }catch(err) {
        console.log(err)
    }
    
}
