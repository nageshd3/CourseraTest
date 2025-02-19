// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Completed
// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function () {

  // STEP 7: Completed
  // Create an object, called 'byeSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 8: Completed
  // Rewrite the 'speak' function such that it is attached to the
  // byeSpeaker object instead of being a standalone function.
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  // STEP 9: Completed
  // Expose the 'byeSpeaker' object to the global scope. Name it
  // 'byeSpeaker' on the global scope as well.
  window.byeSpeaker = byeSpeaker;

})();