window.addEventListener('keydown', sound);

function sound(key) {
    const audioSound = document.querySelector(`audio[id="${key.keyCode}"]`);
    const keyBoard = document.querySelector(`.key[id="${key.keyCode}"]`);

    if (!audioSound) return;
    audioSound.currentTime = 0;
    audioSound.play();

    const currentPlayingKey = document.querySelector('.key.play');
    if (currentPlayingKey) {
        currentPlayingKey.classList.remove('play');
    }

    keyBoard.classList.add('play');
}
