/*
export function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

함수에서 필요한 것은 state인데 그것을 포함한 전체 객체를 받고 있음
이렇게 작성하면 오히려 state라는 정보만 있을 경우 재사용이 어려워짐
-> 따라서 함수 안에선 꼭 필요한 정보만 받는 것이 중요
*/
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
