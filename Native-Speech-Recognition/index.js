'use strict';

(function() {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

    function _handleRecognitionSpeech(event) {
        const results = Array.from(event.results) || [];
        const groupedResults = results.map(result => result[0]);
        const transcript = groupedResults.map(result => result.transcript).join('');
        
        console.log(transcript);
    }

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.addEventListener('result', _handleRecognitionSpeech);
    recognition.addEventListener('end', recognition.start);
    recognition.start();
})();
