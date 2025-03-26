const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsContainer = document.getElementById("buttons");

// Function to stop all sounds
function stopSounds() {
    sounds.forEach((sound) => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}

// Generate buttons dynamically
sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    // Create an audio element
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.id = sound;
    document.body.appendChild(audio);

    // Play sound on click
    btn.addEventListener("click", () => {
        stopSounds();
        audio.play();
    });

    buttonsContainer.appendChild(btn);
});

// Stop Button
const stopBtn = document.createElement("button");
stopBtn.classList.add("btn", "stop");
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopSounds);
buttonsContainer.appendChild(stopBtn);
