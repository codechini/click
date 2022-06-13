//spaces
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; // Without this it would not play until it finished playing for the first time
    audio.play();
    key.classList.add("playing");
    setTimeout(function() {
        key.classList.remove("playing");
    }, 100);
});

window.onload = function() {
    let iterable = [65, 83, 68, 70, 71, 72, 74, 75, 76];
    for (let value of iterable) {
        document.querySelector(`.key[data-key="${value}"]`).addEventListener('click', function() {
            const audio = document.querySelector(`audio[data-key="${value}"]`);
            if (!audio) return;
            audio.currentTime = 0;
            audio.play();
            document.querySelector(`.key[data-key="${value}"]`).classList.add("playing");
            setTimeout(function() {
                document.querySelector(`.key[data-key="${value}"]`).classList.remove("playing");
            }, 100);
        });
    }
}