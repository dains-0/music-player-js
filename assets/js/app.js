import { getTagsFrom } from './music.js';
const $ = (el) => document.querySelector(el);
const $$ = (el) => document.createElement(el);

const playButton = $('play-icon');
const stopButton = $('stop-icon');
const songAudio = $('#song-audio');

/** Play the music and change the style from the play/stop button */
function play() {
  songAudio.play();
  playButton.style.display = 'none';
  stopButton.style.display = 'block';
}
/** Pause the music and change the style from the play/stop button */
function stop() {
  songAudio.pause();
  playButton.style.display = 'block';
  stopButton.style.display = 'none';
}
const inputSong = $('#input-file');
const songTitle = $('#song-title');
const songArtist = $('#song-artist');
const songImage = $('#song-image');
const LOADED_SONGS = [];

inputSong.addEventListener('change', (e) => {
  const [file] = e.target.files;

  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', async function () {
      songAudio.src = reader.result;
      try {
        const songTags = await getTagsFrom(file);

        songTitle.textContent = songTags.title;
        songArtist.textContent = songTags.artist;
        songImage.src = songTags.image;

        const addSongToList = {
          artist: songTags.artist,
          image: songTags.image,
          songURL: reader.result,
          title: songTags.title,
        };

        LOADED_SONGS.push(addSongToList);
        play();
      } catch (error) {
        console.log(error);
      }
    });
    reader.readAsDataURL(file);
  }
});

const playListButton = $('#playlist-btn');
const playList = $('#playlist');
const ul = $('#song-list');

playListButton.addEventListener('click', () => {
  playList.classList.toggle('active');

  if (playList.classList.contains('active')) {
    ul.innerHTML = '';
    LOADED_SONGS.forEach((song, index) => {
      const li = $$('li');
      const button = $$('button');
      const img = $$('img');
      const spanTitle = $$('span');
      const br = $$('br');
      const spanArtist = $$('span');

      img.src = song.image;
      spanTitle.textContent = song.title;
      spanTitle.id = 'playlist-title';

      spanArtist.textContent = song.artist;
      spanArtist.id = 'playlist-artist';

      button.appendChild(img);
      button.appendChild(spanTitle);
      button.appendChild(br);
      button.appendChild(spanArtist);

      button.dataset.songImage = song.image;

      button.dataset.songTitle = song.title;
      button.dataset.songArtist = song.artist;
      button.dataset.songUrl = song.songURL;

      li.addEventListener('click', () => {
        currentSongIndex = index;

        songAudio.src = button.dataset.songUrl;
        songImage.src = button.dataset.songImage;
        songTitle.textContent = button.dataset.songTitle;
        songArtist.textContent = button.dataset.songArtist;
        if (songAudio.paused) {
          play();
        } else {
          stop();
        }
      });

      li.appendChild(button);

      ul.appendChild(li);
    });
  }
});
/*If the user does click in any part of the document, close the playlist */
document.addEventListener('click', (e) => {
  if (!playListButton.contains(e.target) && !playList.contains(e.target)) {
    playList.classList.remove('active');
  }
});

const durationAudio = $('#duration-time');

songAudio.addEventListener('loadedmetadata', () => {
  const durationMinutes = Math.floor(songAudio.duration / 60);
  const durationSeconds = Math.floor(songAudio.duration % 60);
  durationAudio.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
});

const songTimeRange = $('#song-time-range');
songTimeRange.addEventListener('input', (e) => {
  songAudio.currentTime = (e.target.value * songAudio.duration) / 100;
});

const currentAudio = $('#current-time');
songAudio.addEventListener('timeupdate', () => {
  const currentMinutes = Math.floor(songAudio.currentTime / 60);
  const currentSeconds = Math.floor(songAudio.currentTime % 60);
  const durationMinutes = Math.floor(songAudio.duration / 60);
  const durationSeconds = Math.floor(songAudio.duration % 60);
  currentAudio.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;

  durationAudio.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;

  songTimeRange.value = (songAudio.currentTime / songAudio.duration) * 100;
  songTimeRange.style.background = `linear-gradient(to right, #a12ecf ${songTimeRange.value}%, #ddd ${songTimeRange.value}%)`;
});

let currentSongIndex = 0;
const loadSong = (index) => {
  const song = LOADED_SONGS[index];
  songAudio.src = song.songURL;
  songImage.src = song.image;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
};

const backButton = $('#back-btn');
backButton.addEventListener('click', () => {
  currentSongIndex =
    (currentSongIndex - 1 + LOADED_SONGS.length) % LOADED_SONGS.length;
  loadSong(currentSongIndex);
  play();
});
const skipButton = $('#skip-btn');
skipButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % LOADED_SONGS.length;
  loadSong(currentSongIndex);
  play();
});

const playStopButtons = $('#play-stop-btns');
playStopButtons.addEventListener('click', () => {
  if (songAudio.paused) {
    play();
  } else {
    stop();
  }
});
