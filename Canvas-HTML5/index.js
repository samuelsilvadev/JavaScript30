'use strict';
(function (win, $) {
    const $canvas = $.querySelector('[data-js="canvas"]');
    const ctx = $canvas.getContext('2d');
    $canvas.width = win.innerWidth - 20;
    $canvas.height = win.innerHeight - 20;
    ctx.strokeStyle = '#c2c2c2';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 30;
    let isDrawing = false;
    let x = 0;
    let y = 0;
    let degColor = 0;
    $canvas.addEventListener('mousemove', function draw(e) {
        if (isDrawing) {
            console.log(e);
            ctx.strokeStyle = `hsl(${degColor}, 100%, 50%)`;
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
    $canvas.addEventListener('mouseup', () => isDrawing = false);
    $canvas.addEventListener('mouseout', () => isDrawing = false);
})(window, document);