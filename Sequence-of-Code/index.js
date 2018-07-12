'use strict';
(function (win, doc) {

    const $boxToText = doc.querySelector('[data-js="box-typing"]');
    const pressedKeys = [];
    const SECRET_KEY = 'ismagic';

    function setTextinBox() {
        $boxToText.textContent = pressedKeys.join('');
    }

    win.addEventListener('keyup', e => {
        pressedKeys.push(e.key);
        pressedKeys.splice(-SECRET_KEY.length - 1, pressedKeys.length - SECRET_KEY.length);
        setTextinBox();
        if (pressedKeys.join('').indexOf(SECRET_KEY) > -1) {
            console.log('YOU WON');
        }
    });



})(window, document);
