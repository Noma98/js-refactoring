//때때로 함수 본문이 함수의 이름만큼 명확하게 리팩토링될 때가 있음
//이럴 때는 그 함수를 제거한다. 간접 호출은 유용할 수도 있지만 쓸데없는 간접 호출은 거슬릴 뿐임

// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}
