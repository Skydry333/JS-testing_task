function squareRoot(n) {
    const sum = [];
    for (let x = 1; x <= Math.sqrt(n); x++) {
        for (let y = 1; y <= Math.sqrt(n); y++) {
            for (let z = 1; z <= Math.sqrt(n); z++) {
                if (x ** 2 + y ** 2 + z ** 2 === n) {
                    sum.push([x, y, z]);
                }
            }
        }
    }
    return sum;
}

console.log(squareRoot(9));

var module = module || {};
module.exports = squareRoot;