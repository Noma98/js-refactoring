//100% 정해진 건 없기 때문에 딱 봤을 때 불필요해 보이면 인라인 해주면 됨
export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
