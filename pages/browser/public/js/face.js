let forwardTimes = []
  let withBoxes = true

  function onChangeHideBoundingBoxes(e) {
    withBoxes = !$(e.target).prop('checked')
  }

  function updateTimeStats(timeInMs) {
    forwardTimes = [timeInMs].concat(forwardTimes).slice(0, 30)
    const avgTimeInMs = forwardTimes.reduce((total, t) => total + t) / forwardTimes.length
    $('#time').val(`${Math.round(avgTimeInMs)} ms`)
    $('#fps').val(`${faceapi.utils.round(1000 / avgTimeInMs)}`)
  }

  async function onPlay() {
    const videoEl = $('#inputVideo').get(0);

    if (videoEl.paused || videoEl.ended || !isFaceDetectionModelLoaded())
      return setTimeout(() => onPlay());

    const options = getFaceDetectorOptions();
    const ts = Date.now();

    const result = await faceapi.detectSingleFace(videoEl, options).withFaceExpressions();

    updateTimeStats(Date.now() - ts);

    if (result) {
      const canvas = $('#overlay').get(0);
      const dims = faceapi.matchDimensions(canvas, videoEl, true);

      const resizedResult = faceapi.resizeResults(result, dims);
      const minConfidence = 0.05;

      if (withBoxes) {
        faceapi.draw.drawDetections(canvas, resizedResult);
      }
      faceapi.draw.drawFaceExpressions(canvas, resizedResult, minConfidence);

      const expressions = result.expressions;
      const maxExpression = Object.keys(expressions).reduce((a, b) =>
        expressions[a] > expressions[b] ? a : b
      );

      document.getElementById("expression-result").innerText = `${maxExpression}`;

      if (maxExpression === "happy") {
        document.getElementById("expression-result").innerText = "Que sorrisão!";
        setTimeout(() => {
          window.location.href = "/word";
        }, 2000);
      } else if (maxExpression === "sad") {
        document.getElementById("expression-result").innerText = "Sorria mané!";
      } else if (maxExpression === "angry") {
        document.getElementById("expression-result").innerText = "Sorria mané!";
      } else if (maxExpression === "neutral") {
        document.getElementById("expression-result").innerText = "Sorria mané!";
      } else if (maxExpression === "surprised") {
        document.getElementById("expression-result").innerText = "Sorria mané!";
      } else if (maxExpression === "disgusted") {
        document.getElementById("expression-result").innerText = "Sorria mané!";
      } else {
        document.getElementById("expression-result").innerText = "Expressão desconhecida!";
      }

    }

    setTimeout(() => onPlay());
  }

  async function run() {
    await changeFaceDetector(TINY_FACE_DETECTOR)
    await faceapi.loadFaceExpressionModel('/')
    changeInputSize(224)

    const stream = await navigator.mediaDevices.getUserMedia({ video: {} })
    const videoEl = $('#inputVideo').get(0)
    videoEl.srcObject = stream
  }

  function updateResults() { }

  $(document).ready(function () {
    initFaceDetectionControls()
    run()
  })