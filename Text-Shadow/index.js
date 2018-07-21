'use strict';
(function (win, doc) {
    const $box = doc.querySelector('[data-js="box"]');
    const $boxText = doc.querySelector('[data-js="box-text"]');
    const walk = 20;

    function handleCreateShadow(e) {
        const { offsetWidth: width, offsetHeight: height } = $box;
        let { offsetX: x, offsetY: y } = e;
        if (this !== e.target) {
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }

        const xWalk = Math.round((x / width * walk) - (walk / 2));
        const yWalk = Math.round((y / height * walk) - (walk / 2));

        $boxText.style.textShadow = `
            ${xWalk}px ${yWalk}px 0 red,
            ${xWalk * -1}px ${yWalk}px 0 green,
            ${yWalk}px ${xWalk * -1}px 0 pink,
            ${yWalk * -1}px ${xWalk}px 0 blue
        `;
    }

    $box.addEventListener('mousemove', handleCreateShadow);

})(window, document);