function sum(...current) {
    return current.reduce((sum, crnt) => sum + crnt, 0);
}

console.log(sum(1, 2)); // prints 3
console.log(sum(1, 2, 3)); // prints 6

