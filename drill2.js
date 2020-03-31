function powerCalculator(base, exp) {
  if (exp < 0) {
    return "Exponent should be greater than 0";
  }
  if (base === 1) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  return base * powerCalculator(base, exp - 1);
}

//console.log(powerCalculator(10, 4));

// O(n)

function powerCalcIter(base, exp) {
  let product = base;
  for (let i = 1; i < exp; i++) {
    product *= base;
  }
  return product;
}

console.log(powerCalcIter(3, 3));

// O(n)
