function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));

//Complexity: O(n)

function factorial2ElectricBugaloo(num) {
  if(num === 1) {
    return 1
  }

  let count = 1
  for(let i = 1; i <= num; i++) {
    count *= i 
  }

  return count
}

console.log(factorial2ElectricBugaloo(5))

//Complexity: O(n)