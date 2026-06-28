(function () {
  var audio = document.querySelector("[data-audio]");
  var control = document.querySelector("[data-listen]");

  if (!audio || !control) {
    return;
  }

  function setListening(isListening) {
    control.textContent = isListening ? "listening" : "listen";
    control.setAttribute("aria-pressed", isListening ? "true" : "false");
  }

  function playAudio() {
    var attempt = audio.play();

    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(function () {
        setListening(false);
      });
    }
  }

  control.addEventListener("click", function () {
    if (audio.paused) {
      playAudio();
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", function () {
    setListening(true);
  });

  audio.addEventListener("pause", function () {
    setListening(false);
  });

  audio.addEventListener("ended", function () {
    setListening(false);
  });

  window.addEventListener("DOMContentLoaded", function () {
    playAudio();
  });
}());
