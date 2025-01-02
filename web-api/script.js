document.getElementById("speakButton").addEventListener("click", () => {
  const textToSpeak = "Hello, World!";
  const speech = new SpeechSynthesisUtterance(textToSpeak);
  window.speechSynthesis.speak(speech);
});
