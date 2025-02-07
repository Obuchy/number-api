function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

function isArmstrong(num) {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}

function getProperties(num) {
    let properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    if (num % 2 === 0) properties.push("even");
    else properties.push("odd");
    return properties;
}

function getDigitSum(num) {
    return `${num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)} // sum of its digits`;
}

function getFunFact(num) {
    if (isArmstrong(num)) {
        return `${num} is an Armstrong number because ${num.toString().split('').map(d => `${d}^${num.toString().length}`).join(' + ')} = ${num}`;
    }
    return `Did you know? ${num} is a number!`;
}

function getDetailedDigitSum(num) {
    return `sum of its digits: ${getDigitSum(num)}`;
}

module.exports = { isPrime, isPerfect, getProperties, getDigitSum, getFunFact, getDetailedDigitSum };