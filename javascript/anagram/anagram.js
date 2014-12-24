function anagram(input) {
    var sortedInput = input.toLowerCase().split('').sort().toString();
    function matchWord (word) {
        if (input.toLowerCase() === word.toLowerCase()) {
            return false;
        }
        return word.toLowerCase().split('').sort().toString() === sortedInput;
   }

    return {
        matches :
            function (words) {
                if (typeof(words) === 'string') {
                    words = Array.prototype.slice.call(arguments); 
                }
               return words.filter(matchWord);
            }
    };
}

module.exports = anagram;
