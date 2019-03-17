'use strict';

(function() {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

    const recognition = new SpeechRecognition();

    const $wordsContainer = document.querySelector('[data-js="words"]');
    let $p = createParagraghAndAttachInContainer();
    
    recognition.interimResults = true;
    recognition.addEventListener('result', _handleRecognitionSpeech);
    recognition.addEventListener('end', recognition.start);
    recognition.start();

    function _handleRecognitionSpeech(event) {
        const results = Array.from(event.results) || [];
        const { isFinal } = results[0];
        const groupedResults = results.map(result => result[0]);
        const transcript = groupedResults.map(result => result.transcript).join('');
        
        $p.textContent = transcript;

        if (isFinal) {
            $p = createParagraghAndAttachInContainer();
        }
    }

    function createParagraghAndAttachInContainer() {
        let $p = document.createElement('p');
        $p.setAttribute('class', 'notes__line');
        $wordsContainer.appendChild($p);

        return $p;
    }
})();
