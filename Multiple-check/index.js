'use strict';
(function () {

    const $checkboxes = document.querySelectorAll('[data-js="box-todo-item"]');
    const arrayChecks = Array.from($checkboxes);
    let firstClick = 0;
    let lastClick = 0
    let shiftIsPressed = false;

    arrayChecks.forEach((check, index) => {
        check.addEventListener('click', e => {
            if (shiftIsPressed) {
                lastClick = index;
            } else {
                firstClick = index;
            }
            if (firstClick >= 0 && lastClick > 0) {
                arrayChecks.slice(firstClick, lastClick).forEach(c => c.checked = true);
                shiftIsPressed = false;
            }
        });
    });

    document.addEventListener('keydown', e => {
        if (e.shiftKey) {
            shiftIsPressed = true;
        }
    });

})();