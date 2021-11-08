function evenNumbers([...a]){
  let amount = 0;
  for (let k = 0; k <=a.length; k++) {
      if (a[k] % 2 !== 0 && Math.sign(a[k]) !== -1 && typeof a[k] === 'number') {
        console.log( a[k]);
        amount++;
      }
  }
  return amount;
}

console.log(evenNumbers([1, 2, '2', 'gf', 7, -2, -3, 4, 5, 6, 7, 8]));

//наступна конструкція не відноситься до реалізації поставленого завдання, це лише "костиль" який я вимушений застосовувати
var module = module || {};
module.exports = evenNumbers;
// export default evenNumbers;