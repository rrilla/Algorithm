function solution(numbers) {
  var answer = numbers.map((v) => {
    if (v >= 10) {
      var arr = new Array();
      while (v >= 10) {
        arr.push(v * 0.1);
        v = v * 0.1;
        console.log(v);
      }
      v = arr.sort().reverse().join();
    }
    return v;
  });

  console.log(answer);

  return answer;
}

solution([6, 100, 2]);
