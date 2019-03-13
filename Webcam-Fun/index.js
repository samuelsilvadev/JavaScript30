'use strict';

(function() {
    const $canvas = document.querySelector('[data-js="canvas"');
    const $video = document.querySelector('[data-js="video"');
    const canvasContext = $canvas.getContext('2d');

    function init() {
        getVideo()
            .then(paintToCanvas);
    }

    function getVideo() {
        return navigator.mediaDevices.getUserMedia({ video: true, audio: false })
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
                return $video.play();
            })
            .catch((error) => {
                console.error('Something went wrong', error);
            });
    }

    function paintToCanvas() {
        const { videoWidth, videoHeight } = $video;
		
        $canvas.width = videoWidth;
        $canvas.height = videoHeight;

        const intervalId = setInterval(() => {
            canvasContext.drawImage($video, 0, 0, videoWidth, videoHeight);
        }, 16);

        return intervalId;
    }

    init();
})();
