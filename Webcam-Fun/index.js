'use strict';

(function() {
    const EFFECTS = {
        NONE: 0,
        RED_EFFECT: 1,
        RGB_SPLIT: 2,
        GREEN_EFFECT: 3,
    };
    const $canvas = document.querySelector('[data-js="canvas"]');
    const $video = document.querySelector('[data-js="video"]');
    const $strip = document.querySelector('[data-js="strip"]');
    const $btnTakeAPhoto = document.querySelector('[data-js="btn-take-a-photo"]');
    const $btnGreenEffect = document.querySelector('[data-js="btn-green-effect"]');
    const $btnRedEffect = document.querySelector('[data-js="btn-red-effect"]');
    const $btnRgbSplitEffect = document.querySelector('[data-js="btn-rgb-split-effect"]');
    const $formGreenEffect = document.querySelector('[data-js="green-effect-form"]');
    const canvasContext = $canvas.getContext('2d');
    let currentEffect = EFFECTS.NONE;

    function init() {
        $video.addEventListener('canplay', paintToCanvas);
        $btnTakeAPhoto.addEventListener('click', takeAPhoto);
        $btnGreenEffect.addEventListener('click', changeEffect(EFFECTS.GREEN_EFFECT));
        $btnRedEffect.addEventListener('click', changeEffect(EFFECTS.RED_EFFECT));
        $btnRgbSplitEffect.addEventListener('click', changeEffect(EFFECTS.RGB_SPLIT));

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

            let pixels = canvasContext.getImageData(0, 0, videoWidth, videoHeight);
            
            switch(currentEffect) {
                case EFFECTS.RED_EFFECT:
                    pixels = webcamEffects.redEffect(pixels);
                    break;
                case EFFECTS.RGB_SPLIT:
                    pixels = webcamEffects.rgbSplit(pixels);
                    break;
                case EFFECTS.GREEN_EFFECT:
                    const levels = generateLevels();
                    pixels = webcamEffects.greenEffect(pixels, levels);
                    break;
                default:
                    break;
            }

            canvasContext.putImageData(pixels, 0, 0);
        }, 16);

        return intervalId;
    }

    function takeAPhoto() {
        const data = $canvas.toDataURL('image/jpeg');
        const $link = document.createElement('a');
        
        $link.href = data;
        $link.textContent = 'Download Image';
        $link.innerHTML = createThumb(data);

        $strip.insertBefore($link, $strip.firstChild);
    }

    function generateLevels() {
        const levels = Array.from($formGreenEffect.elements)
            .reduce((levels, current) => {
                if (current.id) {
                    levels[current.name] = parseInt(current.value);
                }

                return levels;
            }, {});

        return levels;
    }

    function createThumb(src) {
        return `
            <img class="thumb-image" src="${src}" />
        `;
    }

    function changeEffect(effect) {
        return function () {
            currentEffect = effect;    
        }
    }

    init();
})();
