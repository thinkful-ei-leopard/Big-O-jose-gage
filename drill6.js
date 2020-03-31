/* eslint-disable strict */
function fibonacci(n, fibSeq = []) {
  if(fibSeq.length === n) {
    return fibSeq;
  }
  if (fibSeq.length < 2) {
    fibSeq.push(1);
    return fibonacci(n, fibSeq);
  }
  fibSeq.push(fibSeq[fibSeq.length -1] + fibSeq[fibSeq.length -2]);
  return fibonacci(n, fibSeq);
}

console.log(fibonacci(7));

function fibo(num) {
  if(num <= 0) {
    return 0;
  }

  if(num <= 1) {
    return 1;
  }

  return fibo(num - 1) + fibo(num - 2);
}

// polynomial O(n^2)

function fiboVer2(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    let fiboNum = 0;
    let numMinus2 = 1;
    let numMinus1 = 1;
    for(let i = 2; i < n; i++) {
      fiboNum = numMinus2 + numMinus1;
      numMinus2 = numMinus1;
      numMinus1 = fiboNum;
    }
    return fiboNum;
  }
}

console.log(fiboVer2(7));

// O(n)