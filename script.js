document.addEventListener("DOMContentLoaded", function() {
    const songs = [
        { title: "Song 1", url: "song1.mp3" },
        { title: "Song 2", url: "song2.mp3" },
        { title: "Song 3", url: "song3.mp3" },
    ];

    const songList = document.getElementById('song-list');
    const nowPlaying = document.getElementById('now-playing');
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');

    songs.forEach((song, index) => {
        let li = document.createElement('li');
        li.textContent = song.title;
        li.addEventListener('click', () => {
            playSong(song);
        });
        songList.appendChild(li);
    });

    function playSong(song) {
        nowPlaying.innerHTML = <p>Playing: ${song.title}</p>;
        audioSource.src = song.url;
        audioPlayer.load();
        audioPlayer.play();
    }
});