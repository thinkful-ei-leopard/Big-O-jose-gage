

function reverseString(str) {
  if(str === ''){
    return '';
  }

  const newStr = str[str.length - 1];
  return newStr + reverseString(str.slice(0, -1));
}

console.log(reverseString('hello'));

// O(n)


function revString(str) {
  let newString = '';

  for(let i = 1; i <= str.length; i++) {
    newString += str[str.length - i];
  }

  return newString;
}

console.log(revString('racecar'));

// O(n)