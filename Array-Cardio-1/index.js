const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

console.log('List of inventors for those who were born in the 1500\'s');
const inventors1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599);
console.table(inventors1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log('\n An array of the inventors\' first and last names');
const inventorsFirstLastName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(inventorsFirstLastName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('Sort the inventors by birthdate, oldest to youngest');
const arrInventorToSort = [].concat(inventors);
arrInventorToSort.sort((itemA, itemB) => {
    const x = itemA.year;
    const y = itemB.year;
    return itemA.year > itemB.year ? 1 : -1;
});
console.table(arrInventorToSort);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log('How many years did all the inventors live?');
const totalyears = inventors.reduce((total, b) => {
    return total + (b.passed - b.year);
}, 0);
console.log(totalyears);

// 5. Sort the inventors by years lived
console.log(' Sort the inventors by years lived');
const arrInventorToSortByYears = [].concat(inventors).map(a => {
    a.lived = a.passed - a.year;
    return a;
});
arrInventorToSortByYears.sort((itemA, itemB) => {
    const x = itemA.passed - itemA.year;
    const y = itemB.passed - itemB.year;
    return x < y ? 1 : -1;
});
console.table(arrInventorToSortByYears);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// IT CAN BE TESTED ON THE ABOVE PAGE
// const $links = document.querySelectorAll('.mw-category a');
// const arrTextLinks = Array.from($links).map(link => link.textContent);
// const filteredValues = arrTextLinks.filter(text => text.indexOf('de') !== -1);

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log('Sort the people alphabetically by last name');
const arrPeopleSortedLastName = [].concat(people);
arrPeopleSortedLastName.sort((peopleA, peopleB) => {
    const [lastA, firstA] = peopleA.split(',')
    const [lastB, firstB] = peopleB.split(',')
    return lastA > lastB ? 1 : -1;
});
console.table(arrPeopleSortedLastName);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const instancesTransportation = [].concat(data);
const resultInstances = instancesTransportation.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++
    return obj;
}, {});
console.log(resultInstances);
