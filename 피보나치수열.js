// // 0 1 1 2 3 5 8 13 21 34 ....
// // n번째 값을 출력하라.

function fibonacci(n) {
  let newArr = [0, 1];
  let fib = (n) => {
    if (newArr[n] !== undefined) {
      return newArr[n];
    }
    newArr[n] = fib(n - 1) + fib(n - 2);
    return newArr[n];
  };

  console.log(fib(n));
}

fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(30);
