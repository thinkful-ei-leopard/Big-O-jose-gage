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
      return 0
  }

  if(num <= 1) {
      return 1
  }

  return fibo(num - 1) + fibo(num - 2)
}

// polynomial O(n^2)