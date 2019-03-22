'use strict';

(function() {
    const $compass = document.querySelector('[data-js="compass"]');
    const $compassSpeedValue = document.querySelector('[data-js="compass-speed-value"]');

    window.navigator.geolocation.watchPosition(_handleWatchPosition);

    function _handleWatchPosition(data) {
        const hasSpeed = !!data.coords.speed;

        $compassSpeedValue.textContent = hasSpeed ? data.coords.speed : '0';
        $compass.style.transform = `rotate(${data.coords.heading}deg)`;
    }
})();
