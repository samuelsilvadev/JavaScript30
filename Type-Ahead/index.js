'use strict';
(function (win, $) {
    let allCities = [];
    let debounceSearchCityState = null;
    const $inputSearchCityState = $.querySelector('[data-js="search-city-state"]');
    const $boxResult = $.querySelector('[data-js="box-result"]');
    $inputSearchCityState.addEventListener('input', searchCityState);

    getAllCitiesAndStates()
        .then(data => allCities = data);

    function searchCityState() {
        clearTimeout(debounceSearchCityState);
        debounceSearchCityState = setTimeout(() => {
            if (isArrayValid(allCities)) {
                const valueToSearch = this.value.toLowerCase() || '';
                if (!valueToSearch) {
                    $boxResult.innerHTML = '';
                    return;
                }
                const result = allCities.filter(obj =>
                    obj.city.toLowerCase().indexOf(valueToSearch) !== -1 ||
                    obj.state.toLowerCase().indexOf(valueToSearch) !== -1
                ).map(data =>
                    `<li class="box-result__item">
                        <span>${data.state}</span>,
                        <span>${data.city}</span>
                    </li>`
                );
                result.length = 10;
                $boxResult.innerHTML = result.join('');
            }
        }, 300);
    }

    function getAllCitiesAndStates() {
        const END_POINT = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
        return win.fetch(END_POINT)
            .then(data => data.json())
            .then(json => json);
    }

    function isArrayValid(arr) {
        return arr && arr.length > 0;
    }
})(window, document);