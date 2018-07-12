'use strict';
(function (win, doc) {

    const pressedKeys = [];
    const SECRET_KEY = 'ismagic';

    win.addEventListener('keyup', e => {        
        pressedKeys.push(e.key);
        pressedKeys.splice(-SECRET_KEY.length - 1, pressedKeys.length - SECRET_KEY.length);
        if(pressedKeys.join('').indexOf(SECRET_KEY) > -1) {
            console.log('YOU WON');
        }        
    });

})(window, document);
