const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() 
const isAdult = people.some(p => (new Date().getFullYear() - p.year) >= 19);
console.log('is at least one person 19 or older?', { isAdult });

// Array.prototype.every()
const allAreAdults = people.every(p => (new Date().getFullYear() - p.year) >= 19);
console.log('is everyone 19 or older?', { allAreAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const specificComment = comments.find(p => p.id === 823423);
console.log('find the comment with the ID of 823423', specificComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const specificCommentIndex = comments.findIndex(p => p.id === 823423);
console.log(specificCommentIndex);

// way 1
const newComments1 = comments.filter(comment => comment.id !== comments[specificCommentIndex].id);

// way 2
const newComments2 = [
    ...comments.slice(0, specificCommentIndex),
    ...comments.slice(specificCommentIndex + 1)
];

console.log(newComments1, newComments2);

