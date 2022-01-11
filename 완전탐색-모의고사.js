// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
// 입출력 예
// answers	    return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]
// 입출력 예 설명
// 입출력 예 #1

// 수포자 1은 모든 문제를 맞혔습니다.
// 수포자 2는 모든 문제를 틀렸습니다.
// 수포자 3은 모든 문제를 틀렸습니다.
// 따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

// 입출력 예 #2

// 모든 사람이 2문제씩을 맞췄습니다.

// 출처 프로그래머스

function solution(answers) {
  let answer = [];

  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // filter = 주어진 배열의 값들을 오름차순으로 접근해 callbackfn을 통해 true를 반환하는 요소를 기준으로 신규 배열을 만들어 반환
  const p1a = answers.filter((v, i) => v === p1[i % p1.length]).length;
  const p2a = answers.filter((v, i) => v === p2[i % p2.length]).length;
  const p3a = answers.filter((v, i) => v === p3[i % p3.length]).length;

  const max = Math.max(p1a, p2a, p3a);

  if (max === p1a) answer.push(1);

  if (max === p2a) answer.push(2);

  if (max === p3a) answer.push(3);

  console.log(p1a);
  console.log(p2a);
  console.log(p3a);
  console.log(answer);

  return answer;
}

solution([1, 3, 2, 4, 2]);
