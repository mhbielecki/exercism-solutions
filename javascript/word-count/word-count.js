var words = function (input) {
    var wordDictionary = {};
    var wordList = input.split(/\s+/);
    wordList.map(addWordToDict);
    return wordDictionary;

    function addWordToDict(word) {
        if (wordExists(wordDictionary[word])) {
            wordDictionary[word] = ++wordDictionary[word];
        }
        else {
            wordDictionary[word] = 1;
        }
    }
}

function wordExists(num) {
    return !isNaN(num);
}

module.exports = words;
