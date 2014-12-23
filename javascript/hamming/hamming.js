function compute(seq1, seq2) {
    if(!sequencesHaveEqualLength(seq1, seq2)) {
        throw new Error('DNA strands must be of equal length.');
    }

    return calculateHammingDistance(seq1, seq2, 0);
}

function calculateHammingDistance(seq1, seq2, sum) {
    if (!seq1) {
        return sum;
    }

    var seqTail1 = seq1.slice(1),
        seqTail2 = seq2.slice(1);

    return equalCharacter(seq1, seq2) ?
        calculateHammingDistance(seqTail1, seqTail2, sum) :
        calculateHammingDistance(seqTail1, seqTail2, ++sum);

    function equalCharacter(seq1, seq2) {
        return seq1[0] === seq2[0];
    }
}

function sequencesHaveEqualLength(seq1, seq2) {
    return seq1.length === seq2.length;
}

module.exports.compute = compute;
