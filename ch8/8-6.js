// 문장 슬라이드 : 관련 있는 코드들을 한 곳으로 뭉치도록 이동

// 예제 1
// 변수는 쓰이는 곳 가까이에 선언하기
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;

// 예제 2
function someFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
