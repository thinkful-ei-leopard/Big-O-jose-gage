function stringSplitter(str, separator='/') {
  if(str.length === 0){
    return [''];
  }

  const char = str[0];
  if(char === separator){
    return ['', ...stringSplitter(str.slice(1))];
  }
  const newArray = stringSplitter(str.slice(1));
  newArray[0] = char + newArray[0];
  return newArray;
}

// console.log(stringSplitter('02/20/2020'));

//Complexity: O(n)

function stringSplitter2ElectricBugaloo(str) {
  return str.split('/')
}

// console.log(stringSplitter2ElectricBugaloo('02/20/2020'))


function stringSplitter3(str) {
  let newArr = []
  let string = ''

  for(let i = 0; i < str.length; i++) {
    if(str[i] !== '/') {
      string += str[i]
    } else if(str[i] === '/' || i === str.length - 1) {
      newArr.push(string)
      string = ''
    }
  }
  newArr.push(string)

  return newArr
}

// O(n)

console.log(stringSplitter3('02/20/2020'))