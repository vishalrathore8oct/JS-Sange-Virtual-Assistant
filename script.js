const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

// Speech Recoginition Set up

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

// Speech Recoginition Start

recognition.onstart = function() {
    console.log("Virtual Assistant Activate !");
}

// Speech Recoginition Stop
recognition.onend = function() {
    console.log("Virtual Assistant Deactivate !");
}

// Speech Recogniton Continuous listening

recognition.continuous = true;

startBtn.addEventListener("click", () => {
    recognition.start()
})

stopBtn.addEventListener("click", () => {
    recognition.stop()
})

