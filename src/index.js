module.exports = function reverse (n) {
    let positiveNumber = Math.abs(n);

    let reverseString = String(positiveNumber).split("").reverse().join("");

    return Number(reverseString);
}
