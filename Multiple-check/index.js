'use strict';
(function (window, document) {

    const $checkboxes = document.querySelectorAll('[data-js="box-todo-item"]');
    const arrayChecks = Array.from($checkboxes);
    let firstClick = null;
    let lastClick = null;
    let shiftIsPressed = false;

    arrayChecks.forEach((check, index) => {
        check.addEventListener('click', e => {
            handleCheck(e, index);
        });
    });

    document.addEventListener('keydown', e => {
        if (e.shiftKey) {
            shiftIsPressed = true;
        }
    });

    function isNotNull(value) {
        return value !== null;
    }

    function handleCheck(event, index) {
        if (shiftIsPressed) {
            lastClick = index;
        } else {
            firstClick = index;
        }

        if (isNotNull(firstClick) && isNotNull(lastClick) && firstClick !== lastClick) {

            const one = firstClick > lastClick ? lastClick : firstClick;
            const last = lastClick > firstClick ? lastClick : firstClick;

            arrayChecks.slice(one, last).forEach(c => c.checked = true);
            shiftIsPressed = false;
            firstClick = null;
            lastClick = null;
        }
    }

})(window, document);