'use strict';
(function (win, doc) {

    const bands = [
        'The Plot in You',
        'The Devil Wears Prada',
        'Pierce the Veil',
        'Norma Jean',
        'The Bled',
        'Say Anything',
        'The Midway State',
        'We Came as Romans',
        'Counterparts',
        'Oh, Sleeper',
        'A Skylit Drive',
        'Anywhere But Here',
        'An Old Dog'
    ];

    const $listNames = doc.querySelector('[data-js="list-names"]');

    function insertBandsOnList(bands, $list) {
        $list.innerHTML = bands.map(band => `<li>${band}</li>`).join('');
    }

    function sortBandNames(bandArr) {
        bandArr.sort((a, b) => {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        });
    }

    sortBandNames(bands);
    insertBandsOnList(bands, $listNames);

})(window, document);