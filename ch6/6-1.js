export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}
//보통 내부에서 호출되는 함수들을 바로 밑에 순서대로 이어서 작성
function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}
function calculateOutstanding(invoice) {
  //반복문을 파이프라인으로 바꿔 간결하게 표현
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
  // let result = 0;
  // for (const o of invoice.orders) {
  //   result += o.amount;
  // }
  // return result; //값을 반환하는 경우 보통 result로 많이 사용함
}
function recordDueDate(invocie) {
  const today = new Date();
  invoice.dueDate = new Date( //직접 객체를 수정하고 있음 -> 불변성을 지켜주는 게 좋음(후반부 강의에서 진행)
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}
function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
