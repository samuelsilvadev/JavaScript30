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
    const $tringuleIcon = doc.querySelector('[data-js="triangule-icon"]');
    const ASC = 'ASC';
    const DESC = 'DESC';

    function insertBandsOnList(bands, $list) {
        $list.innerHTML = bands.map(band => `<li>${band}</li>`).join('');
    }

    function sortAscOrderWithoutArticles(a, b) {
        if (strip(a) > strip(b)) {
            return 1;
        }
        return -1;
    }

    function sortDescOrderWithoutArticles(a, b) {
        if (strip(a) > strip(b)) {
            return -1;
        }
        return 1;
    }

    function strip(bandName) {
        return bandName.replace(/^(a |an | the)/i, '').trim();
    }

    function sortBandNames(bandArr, order) {
        bandArr.sort(!order || order === ASC ? sortAscOrderWithoutArticles : sortDescOrderWithoutArticles);
    }

    function handleClickTrianguleIcon() {
        if (this.classList.contains('triangule-icon--down')) {
            this.classList.add('triangule-icon--up');
            this.classList.remove('triangule-icon--down');
            sortBandNames(bands, ASC);
        } else if (this.classList.contains('triangule-icon--up')) {
            this.classList.add('triangule-icon--down');
            this.classList.remove('triangule-icon--up');
            sortBandNames(bands, DESC);
        }
        insertBandsOnList(bands, $listNames);
    }

    (function makeFirstOrder() {
        sortBandNames(bands);
        insertBandsOnList(bands, $listNames);
    })();

    $tringuleIcon.addEventListener('click', handleClickTrianguleIcon, false);

})(window, document);