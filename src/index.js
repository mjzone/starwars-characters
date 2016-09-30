var uniqueRandomArray = require('unique-random-array');
var starWarsCharacters = require('./starwars-chracters');

module.exports = {
    all: starWarsCharacters,
    random: uniqueRandomArray(starWarsCharacters)
};
