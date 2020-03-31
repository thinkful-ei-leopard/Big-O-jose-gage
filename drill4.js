function nthTriangularNumber(n) {
  if (n === 1) {
    return 1;
  }
  return n + nthTriangularNumber(n - 1);
}

console.log(nthTriangularNumber(4));

//Complexity: O(n)

function nthTriangularNumberIter(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

console.log(nthTriangularNumberIter(4));

// O(n)