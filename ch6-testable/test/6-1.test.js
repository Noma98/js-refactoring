import { printOwing } from '../6-1';

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
      'due: 2/20/2022\n';
    expect(printOwing(invoice)).toBe(expected);
  });
});
