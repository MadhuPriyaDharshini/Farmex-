const recordButton = document.getElementById("button3");
const result = document.querySelector("#form4Example2");

const recordButton1 = document.getElementById("button4");
const result1 = document.querySelector("#form4Example3");

let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition,
  recognition,
  recording = false;

function speechToText() {
  try {
    recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recordButton.classList.add("recording");
    recognition.start();
    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const speechResult = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          result.value += speechResult;
        } else {
          interimTranscript += speechResult;
        }
      }
      result.value = interimTranscript;
    };
    recognition.onspeechend = () => {
      speechToText();
    };
    recognition.onerror = (event) => {
      stopRecording();
      if (event.error === "no-speech") {
        alert("No speech was detected. Stopping...");
      } else if (event.error === "audio-capture") {
        alert(
          "No microphone was found. Ensure that a microphone is installed."
        );
      } else if (event.error === "not-allowed") {
        alert("Permission to use microphone is blocked.");
      } else if (event.error === "aborted") {
        alert("Listening Stopped.");
      } else {
        alert("Error occurred in recognition: " + event.error);
      }
    };
  } catch (error) {
    recording = false;
    console.log(error);
  }
}

function speechToText1() {
  try {
    recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recordButton.classList.add("recording");
    recognition.start();
    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const speechResult = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          result1.value += speechResult;
        } else {
          interimTranscript += speechResult;
        }
      }
      result1.value = interimTranscript;
    };
    recognition.onspeechend = () => {
      speechToText1();
    };
    recognition.onerror = (event) => {
      stopRecording();
      if (event.error === "no-speech") {
        alert("No speech was detected. Stopping...");
      } else if (event.error === "audio-capture") {
        alert(
          "No microphone was found. Ensure that a microphone is installed."
        );
      } else if (event.error === "not-allowed") {
        alert("Permission to use microphone is blocked.");
      } else if (event.error === "aborted") {
        alert("Listening Stopped.");
      } else {
        alert("Error occurred in recognition: " + event.error);
      }
    };
  } catch (error) {
    recording = false;
    console.log(error);
  }
}


let clicked = false
recordButton.addEventListener("click", () => {
  if (!clicked) {
    speechToText();
    recording = true;
  } else {
    stopRecording();
  }
  clicked = !clicked;
});

let clicked1 = false
recordButton1.addEventListener("click", () => {
  if (!clicked1) {
    speechToText1();
    recording = true;
  } else {
    stopRecording();
  }
  clicked1 = !clicked1;
});

function stopRecording() {
  recognition.stop();
  recordButton.classList.remove("recording");
  recording = false;
}


