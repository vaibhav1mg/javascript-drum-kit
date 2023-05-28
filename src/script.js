function playSound(e) {
    const audio = document.querySelector(`audio[id="${e.keyCode || e.target.id}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.btn[id="${e.keyCode || e.target.id}"]`);
    key.classList.add('ty');
}



function removeTransition(e) {

    this.classList.remove('ty');
}

const keys = document.querySelectorAll('.btn');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

addEventListener('keydown', playSound);
addEventListener('click', playSound);