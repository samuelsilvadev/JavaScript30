'use strict';

(function() {
    const $video = document.querySelector('[data-js="video"');

    function init() {
        getVideo();
    }

    function getVideo() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then((localMediaScreen) => {
                try {
                    /**
                     * This is necessary cause older versions of browsers needed it.
                     * In newly versions it is possible to use `srcObject` directly.
                    */
                    $video.src = window.URL.createObjectURL(localMediaScreen);
                } catch(error) {
                    $video.srcObject = localMediaScreen;
                }
                $video.play();
            })
            .catch((error) => {
                console.error('Something went wrong', error);
            });
    }

    init();
})();
