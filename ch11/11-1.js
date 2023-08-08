// 예제 1 - and로 묶어 2가지 일 하지 말고 하나에 하나만 하도록 분리
function getTotalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}
function sendBill() {
  //bill 보내기..
}

// 예제 2 - 부수적인 효과는 없지만 악당 찾기, 알람 울리기 총 2가지 일을 하고 있음 -> 분리해주기
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}
function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}
function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
