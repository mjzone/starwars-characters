var uniqueRandomArray = require('unique-random-array');
var starWarsCharacters = require('./starwars-chracters');

module.exports = {
    getAll: starWarsCharacters,
    randomName: uniqueRandomArray(starWarsCharacters)
};
