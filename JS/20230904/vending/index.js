import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator;
await colaGenerator.setup(); // setup이 완료될 때까지 기다리도록 await 작성
// console.log(await colaGenerator.loadData());
// async 없이 사용할 수 있는 await을 Top-level await 이라고 한다.
// 모듈화의 장점은 엄청나게 많아진 js 파일을 index.js에 모아주는 것이다. 

const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();