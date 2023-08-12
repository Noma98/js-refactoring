/**
 * 함수 내부적으로 전역변수나 다른 모듈에 있는 특정 객체에 접근하고 있음  → 다른 모듈과 심각하게 커플링
 * 이런 것들은 함수의 매개변수로 전달 받는 것이 이상적.
 * 객체를 다 받아올 필요 없이 사용할 것만 받는 것이 좋음(thermostat->currentTemparature)
 */

targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(aPlan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}
