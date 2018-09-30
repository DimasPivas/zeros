module.exports = function getZerosCount(number) {
  let amountZeroes = 0;
  let i = 5;
  while( (number / i) >= 1) {
    amountZeroes += Math.floor(number / i);
    i = i * 5;
  }
  return amountZeroes;
}
