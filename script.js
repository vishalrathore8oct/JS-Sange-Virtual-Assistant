const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const speakOutBtn = document.querySelector("#speak-out")

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

// for Sange Virtual Assistant speech

function readOut(massege) {
    const speech = new SpeechSynthesisUtterance()
    // const allVoices = speechSynthesis.getVoices()
    // speech.voice = allVoices[10]
    speech.text = massege
    speech.volume = 1
    // speech.lang = "en-US";
    speech.lang = "hi-IN";
    window.speechSynthesis.speak(speech)
    console.log("Speaking Out");
}

speakOutBtn.addEventListener("click", () => {
    readOut("hello namaste aap kesse ho.")
    // readOut("Hi mister sange you are the best I have ever seen, the most handsome and intelligent.")
    // readOut("Hello mister Vishal Rathore, How are you. and you are better than above on sange")
})