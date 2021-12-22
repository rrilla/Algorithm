// // 0 1 1 2 3 5 8 13 21 34 ....
// // n번째 값을 출력하라.

// 반복문 미사용
// const fibonacci = (n) => {
//   const newArr = [0, 1];
//   const fib = (n) => {
//     if (newArr[n] !== undefined) {
//       return newArr[n];
//     }
//     newArr[n] = fib(n - 1) + fib(n - 2);
//     return newArr[n];
//   };

//   console.log(fib(n));
// }

// 반복문 사용
const fibonacci = (n) => {
  const arr = [0, 1];
  if (n <= 2) {
    console.log(arr[n - 1]);
    return;
  }
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr[n - 1]);
};

fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(30);
