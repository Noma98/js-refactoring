import { acquireReading, enrichReading } from './6-10.js';
//enrich + ... : 받아온 데이터에 좀더 계산된 새로운 데이터를 덧붙여서 리턴하는 함수

const rawReading = acquireReading();
const reading = enrichReading(rawReading);

console.log(reading.baseCharge);
console.log(reading.taxableCharge);
