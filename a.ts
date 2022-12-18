const add = (a: number, b: number) => a + b;

// 나만의 타입 만들기 => call signature

type Add = (a: number, b: number) => number;
// 이게 바로 call signature

const sigAdd: Add = (a, b) => a + b;
//  call signature 적용

type Add2 = {
  (c: number, d: number): number;
  (c: number, d: string): number;
};

const add2: Add2 = (c, d) => {
  if (typeof d === "string") return c;
  return c + d;
};
// call signature의 overloading 방법, 함수가 서로다른 여러개의 call signatures를 가지고 있을때 발생

// For example
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (obj: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

// 이런식으로 overloading을 통해 string 혹은 object로 보낼 수 있게 된다

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c?: number): number;
};

const add3: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// 다른 개수의 파라미터를 가지게 되면 나머지 파라미터도 타입을 지정해줘야 함

type OldSuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
};
// number boolean string , , , => concrete type
// 모든 경우의 수를 계산하기엔 벅참

type SuperPrintGenericNotConcreteType = {
  <Placeholder>(arr: Placeholder[]): Placeholder;
  // typeScript가 generic을 통해 유추할수있음
  // generic 이란 type의 placeholder 같은것이다
  // cosnt superPrint에서 첫번째 인수를 가져와야(return) 하니 void가 아닌 placeholder를 쓴다
  // 함수가 placeholder의 배열 array를 받고 placeholder중 하나를 return 함
};

const superPrint: SuperPrintGenericNotConcreteType = (arr) => arr[0];
const a = superPrint([true, 1, "string"]);

console.log(a);
// superPrint(arr: (string | number | boolean)[]): void
// const superPrint: <string | number | boolean>(arr: (string | number | boolean)[]) => void

type SuperPrintShortCut = {
  <T>(arr: T[]): T;
  // 요약 : TypeScript에게 Concrete Type을 유추하게 함으로서 Programming을 쉽게 한다
};
