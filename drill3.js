'use strict';

function reverseString(str) {
  if(str === ''){
    return '';
  }

  const newStr = str[str.length - 1];
  return newStr + reverseString(str.slice(0, -1));
}

console.log(reverseString('hello'));

<<<<<<< HEAD
// O(n)
=======
//Complexity: O(n)
>>>>>>> 2ecfb705d162d2cb169c31410f162788c9288caa
