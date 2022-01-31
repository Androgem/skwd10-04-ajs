function countDigits(num) {
    return Math.abs(num).toString().length; // - (num < 0);
}

function evenOdd(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}

function positiveNegative(num) {
    if (num > 0) {
        return 'positive';
    }
    if (num < 0) {
        return 'negative';
    }
    return '0';
}

function getNumberStats(num) {
    console.log(`${countDigits(num)} Digits, ${evenOdd(num)}, ${positiveNegative(num)}`);
}

getNumberStats(-25);