'use strict';

(function() {
    const $canvas = document.querySelector('[data-js="canvas"');
    const $video = document.querySelector('[data-js="video"');
    const $strip = document.querySelector('[data-js="strip"');
    const $btnTakeAPhoto = document.querySelector('[data-js="btn-take-a-photo"');
    const canvasContext = $canvas.getContext('2d');

    function init() {
        $video.addEventListener('canplay', paintToCanvas);
        $btnTakeAPhoto.addEventListener('click', takeAPhoto);

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

    function paintToCanvas() {
        const { videoWidth, videoHeight } = $video;
		
        $canvas.width = videoWidth;
        $canvas.height = videoHeight;

        const intervalId = setInterval(() => {
            canvasContext.drawImage($video, 0, 0, videoWidth, videoHeight);
        }, 16);

        return intervalId;
    }

    function takeAPhoto() {
        const data = $canvas.toDataURL('image/jpeg');
        const $link = document.createElement('a');
        
        $link.href = data;
        $link.textContent = 'Download Image';

        $strip.insertBefore($link, $strip.firstChild);
    }

    init();
})();
