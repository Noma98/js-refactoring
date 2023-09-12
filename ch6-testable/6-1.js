export function printOwing(invoice, console, clock) {
  /**
   * testable하게 바꾸면서 디펜던시(console,clock)들을 주입받음
   * 기능 단위로 함수를 쪼개다보니, 필요한 디펜던시들을 일일이 전달해야함 -> 번거로움
   * -> 클래스로 만들어서 필요한 디펜던시들을 생성자에서 딱 한번 받아오고, 내부에서 필요한 console과 clock을 질의함수 형태로 접근하는 것이 좋음
   */
  printBanner(console);
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice, clock);
  printDetails(console, invoice, outstanding);
}
function printBanner(console) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}
function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}
function recordDueDate(invoice, clock) {
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}
function printDetails(console, invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

class Clock {
  constructor() {}
  get today() {
    return new Date();
  }
}

printOwing(invoice, console, new Clock());
