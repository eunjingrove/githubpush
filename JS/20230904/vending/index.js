import ColaGenerator from "./js/colaGenerator.js";

const colaGenerator = new ColaGenerator;
colaGenerator.setup();
// console.log(await colaGenerator.loadData());
// async 없이 사용할 수 있는 await을 Top-level await 이라고 한다.
// 모듈화의 장점은 엄청나게 많아진 js 파일을 index.js에 모아주는 것이다. 