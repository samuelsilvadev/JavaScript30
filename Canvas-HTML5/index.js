'use strict';
(function (win, $) {
    const $canvas = $.querySelector('[data-js="canvas"]');
    const $colorPincel = $.querySelector('[data-js="color-pincel"]');
    const $colorPincelColoful = $.querySelector('[data-js="color-pincel-colorful"]');
    const $widthPincel = $.querySelector('[data-js="width-pincel"]');
    const $pallete = $.querySelector('[data-js="pallete"]');
    const ctx = $canvas.getContext('2d');
    let isDrawing = false;
    let x = 0;
    let y = 0;
    let degColor = 0;
    let colorful = $colorPincelColoful.checked;

    function initDefaultValues() {
        $canvas.width = win.innerWidth - 20;
        $canvas.height = win.innerHeight - 20;
        ctx.strokeStyle = '#c2c2c2';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 30;
    }

    function initEvents() {

        $canvas.addEventListener('mousemove', function draw(e) {
            if (isDrawing) {
                hidePallete();
                if (colorful) {
                    ctx.strokeStyle = `hsl(${degColor}, 100%, 50%)`;
                }
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
                [x, y] = [e.offsetX, e.offsetY];
                degColor++;
            }
        });

        $canvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            [x, y] = [e.offsetX, e.offsetY];
        });

        $canvas.addEventListener('mouseup', () => {
            isDrawing = false;
            showPallete();
        });

        $canvas.addEventListener('mouseout', () => {
            isDrawing = false;
            showPallete();
        });

        $colorPincel.addEventListener('change', (e) => {
            ctx.strokeStyle = e.target.value;
            colorful = false;
        });

        $colorPincelColoful.addEventListener('click', (e) => colorful = $colorPincelColoful.checked);
        $widthPincel.addEventListener('change', (e) => ctx.lineWidth = e.target.value);
        $.addEventListener('DOMContentLoaded', () => ctx.strokeStyle = $colorPincel.value);
    }

    function hidePallete() {
        $pallete.style.opacity = 0;
        $pallete.style.display = 'none';
    }

    function showPallete() {
        $pallete.style.display = 'block';
        $pallete.style.opacity = 1;
    }

    initDefaultValues();
    initEvents();
})(window, document);