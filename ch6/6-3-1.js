//긴 표현식을 중간중간 잘라 의미있는 이름을 붙여주면 가독성이 올라감

//quantityDiscount -> discount
//shippingCost -> shipping
//부가적인 설명인 도움이 된다면 추가해도 되지만, 짧아도 충분히 문맥상 이해가 간다면 짧은게 더 보기 간결함

export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - discount + shipping;
}
