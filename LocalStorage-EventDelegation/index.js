'use strict';
(function (win, doc) {

    const foods = [];
    const $formAddFood = doc.querySelector('[data-js="form-add-food"]');
    const $listFoods = doc.querySelector('[data-js="list-foods"]');

    function addFood(e) {
        e.preventDefault();
        const food = {
            name: (this.querySelector('[data-js="input-food"]')).value,
            selected: false,
        };
        foods.push(food);
        this.reset();
    }

    function populateList(foods = [], $list) {
        $list.innerHTML = foods.map((food, i) => (
            `
            <li>
                <input id="${i}" type="checkbox" ${food.selected ? 'checked' : ''}">
                <label for="${i}">${food.name}</label>
            </li>
            `
        )).join('');
    }

    function loadFoodsFromStorage() {
        setTimeout(() => {
            const foodsStorage = JSON.parse(win.localStorage.getItem('foods'));
            foods.push(...foodsStorage);
            populateList(foods, $listFoods);
        }, 500);
    }

    $formAddFood.addEventListener('submit', function (e) {
        addFood.bind(this)(e);
        populateList(foods, $listFoods);
        win.localStorage.setItem('foods', JSON.stringify(foods));
    });

    doc.addEventListener('DOMContentLoaded', loadFoodsFromStorage);

})(window, document);