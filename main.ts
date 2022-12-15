function lastarray<V>(a: V[]) {
  return a[a.length - 1];
}

function push<T, V>(a: T[], b: V) {
  return Array.prototype.unshift.apply(a, b);
}

// 현재까지 배운 것을 토대로, 두 함수에 대한 구현과 함께 호출 시그니처(call signatures) 를 작성해주세요
// last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
// prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.

// 호출 시그니쳐에 대한 정의 및 예시 (https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures)
// last(arr) 함수는 배열인 arr를 파라미터로 받으며 배열 arr의 마지막 요소를 최종적으로 return해야 합니다. - 자바스크립트에서 배열의 인덱스를 알면 Array[index] 형태로 값에 접근할 수 있습니다. - 자바스크립트에서 배열의 마지막 요소의 인덱스는 어떻게 알 수 있을까요? 배열의 크기를 숫자형으로 반환해주는 length를 활용해보시기 바랍니다. (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
// prepend(arr, item) 함수는 배열인 arr과 넣을 아이템인 item을 파라미터로 받으며 item이 arr의 맨 앞에 넣어진 후 만들어진 새로운 배열을 return해야 합니다. - 자바스크립트에서 배열의 맨 첫번째 원소의 인덱스는 0입니다. - 구조 분해 할당과 전개 구문 (Spread Operator)를 함께 사용하여 배열의 맨 앞에 원소를 넣은 후 바뀐 배열을 반환하는 방법을 생각해보세요. (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
