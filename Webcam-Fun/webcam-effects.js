'use strict';

const webcamEffects = (function() {
    function redEffect(pixels) {
        for (let index = 0; index < pixels.data.length; index += 4) {
            pixels.data[index + 0] = pixels.data[index + 0] + 200; // RED
            pixels.data[index + 1] = pixels.data[index + 1] + 50; // GREEN
            pixels.data[index + 2] = pixels.data[index + 2] + 0.5; // BLUE
        }
        return pixels;
    }

    function greenEffect(pixels, levels = {}) {
        let red, green, blue, alpha;

        for (let index = 0; index < pixels.data.length; index += 4) {
            red = pixels.data[index + 0];
            green = pixels.data[index + 1];
            blue = pixels.data[index + 2];
            alpha = pixels.data[index + 3];

            if (
                red >= levels.redmin &&
                green >= levels.greenmin &&
                blue >= levels.bluemin &&
                red <= levels.redmax &&
                green <= levels.greenmax &&
                blue <= levels.bluemax
            ) {
                pixels.data[index + 3] = 0;
            }
        }

        return pixels;
    }

    function rgbSplit(pixels) {
        for (let index = 0; index < pixels.data.length; index += 4) {
            pixels.data[index - 150] = pixels.data[index + 0]; // RED
            pixels.data[index + 100] = pixels.data[index + 1]; // GREEN
            pixels.data[index - 150] = pixels.data[index + 2]; // BLUE
        }
        return pixels;
    }

    return {
        redEffect,
        rgbSplit,
        greenEffect,
    }
})();
