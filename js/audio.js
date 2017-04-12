//JS - Audio
// From https://code.tutsplus.com/tutorials/the-web-audio-api-what-is-it--cms-23735

function playAudio(){
  // Create the audio context
  var context = new AudioContext();
  var request = new XMLHttpRequest();
  // Create the AudioBufferSourceNode
  var sourceBuffer = context.createBufferSource();

  request.open('GET', 'test.mp3', true);
  request.responseType = 'arraybuffer';

  request.onload = function() {

    var undecodedAudio = request.response;

    context.decodeAudioData(undecodedAudio, function(buffer) {
      // The contents of our mp3 is now an AudioBuffer
      console.log(buffer);

      // Tell the AudioBufferSourceNode to use this AudioBuffer
      sourceBuffer.buffer = buffer;
      // Connect buffer to speakers
      sourceBuffer.connect(context.destination);
      sourceBuffer.start(context.currentTime);
    });
  };

  request.send();
};
