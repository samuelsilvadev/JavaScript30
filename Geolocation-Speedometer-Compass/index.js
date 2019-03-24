'use strict';

(function() {
    const ERROR_CLASSNAME = 'visible';
    const $compass = document.querySelector('[data-js="compass"]');
    const $error = document.querySelector('[data-js="error"]');
    const $errorMessage = document.querySelector('[data-js="error-message"]');
    const $compassSpeedValue = document.querySelector('[data-js="compass-speed-value"]');

    window.navigator.geolocation.watchPosition(_handleWatchPosition, _handleWatchPositionError);

    function _handleWatchPosition(data) {
        const hasSpeed = !!data.coords.speed;

        $compassSpeedValue.textContent = hasSpeed ? data.coords.speed : '0';
        $compass.style.transform = `rotate(${data.coords.heading}deg)`;
    }

    function _handleWatchPositionError(err) {
        console.error('TCL: watchPosition -> err', err);

        const hasError = err && err.message;

        if (hasError) {
            $error.classList.add(ERROR_CLASSNAME);
            $errorMessage.textContent = err.message;
        } else {
            $error.classList.remove(ERROR_CLASSNAME);
        }
    }
})();
