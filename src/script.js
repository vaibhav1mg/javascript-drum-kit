addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.btn[id="${e.keyCode}"]`);
    key.classList.add('playing');
}
);

