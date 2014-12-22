var Bob = function() {};

Bob.prototype.hey = function(input) {

	input = input.trim();

	if (isYelling(input)) {
		return 'Whoa, chill out!';
	}
	else if (isQuestion(input)) {
		return 'Sure.';
	}
	else if (isSilent(input)) {
		return 'Fine. Be that way!';
	}
	else {
		return 'Whatever.';
	}
};

function isYelling(input) {
	return input.toUpperCase() === input 
		&& input.match('[a-zA-z]+');
}

function isQuestion(input) {
	return input.slice(-1) === '?';
}

function isSilent(input) {
	return input === '';
}

module.exports = Bob;