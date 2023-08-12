/**
 * 특정 함수에서 예외사항이 발생할 때는 알 수 없는 상수값을 리턴하지 말고,
 * 언어마다 제공해주는 에러 클래스를 사용하여 표현하자.
 * 좀더 의미를 부여하고 싶으면 Error를 상속하는 클래스를 만들어 사용하면 됨
 */

function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  // else return -23;
  else throw new OrderProcessingError(-23);
}
class OrderProcessingError extends Error {
  constructor(errorCode) {
    super();
    this.errorCode = errorCode;
  }
}
try {
  const result = localShippingRules();
} catch (error) {
  if (error instanceof OrderProcessingError) {
    console.log(error);
  }
}
