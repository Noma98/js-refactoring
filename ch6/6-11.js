//일단은 주어진 함수에서 여러 함수로 쪼깨기 작업을 했지만,
//인자를 반복적으로 전달하고 있어서 Order라는 클래스로 공통적인 데이터를 묶어 연산해주는 것이 좋음

export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = calculateDiscountedPrice(product, quantity);
  const shippingCost = calculateShippingCost(
    basePrice,
    shippingMethod,
    quantity
  );
  return basePrice - discount + shippingCost;
}
function calculateDiscountedPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}
function calculateShippingCost(basePrice, shippingMethod, quantity) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
