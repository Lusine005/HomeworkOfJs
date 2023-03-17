const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN];

const numbersOnly = arr.filter((item) => typeof item === 'number' && !isNaN(item));

console.log(numbersOnly); // [1, 2, 55, 166]