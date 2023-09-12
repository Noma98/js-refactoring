import { Owing, printOwing } from '../6-1';

class Console {
  #content = '';
  constructor() {}
  log(message) {
    this.#content += `${message}\n`;
  }
  get content() {
    return this.#content;
  }
}
class Clock {
  constructor() {}
  get today() {
    return {
      getFullYear() {
        return 2022;
      },
      getMonth() {
        return 0;
      },
      getDate() {
        return 21;
      },
    };
  }
}
/**
 * describe
 *  테스트 그룹화. 테스트하려는 함수, 모듈을 그 안에 작성.
 *  콜백 함수 안에서 it으로 케이스별 테스트 코드 작성
 */
describe('printOwing', () => {
  it('should print owing', () => {
    const invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: '엘리',
    };
    const expected =
      '***********************\n' +
      '**** Customer Owes ****\n' +
      '***********************\n' +
      'name: 엘리\n' +
      'amount: 7\n' +
      'due: 2022. 2. 20.\n';

    const console = new Console();
    const clock = new Clock();

    printOwing(console, new Owing(invoice, clock));
    expect(console.content).toBe(expected);
  });
});
