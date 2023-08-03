/**
 * 등급을 계산할때 반복적으로 나타나는 조건문이 있음
   - 중국을 거치는지, history 안에 중국이 있는지에 따라 계산하는 로직이 조금씩 달라짐
 * 그래서 Rating이라는 클래스를 만들어서 여기서 관련된 voyage와 history로 점수를 만들고, 
   중국과 관련된 위험 부담이 있는 클래스(ExperiencedChinaRating)를 따로 만들어서
   다른 rating을 계산하도록 만들면 다형성을 극대화할 수 있음
 * 상속이라는 것이 새, 동물, 사람과 같은 물질적인 것들 뿐만 아니라 점수, 등급과 같은 것들도 
   클래스로 만들어서 서로 공통되는 부분은 하나의 추상 클래스, 부모 클래스로 묶어 두고
   다른 부분만 따로 빼 오버라이딩하면서 다른 계산을 하도록 만들면!
   조건문을 굳이 사용하지 않아도 다형성만으로도 깔끔하게 만들 수 있음
 */

export function rating(voyage, history) {
  if (this.voyage.zone === 'china' && history.some((v) => 'china' === v.zone)) {
    return new ExperiencedChinaRating(voyage, history).value;
  }
  return new Rating(voyage, history).value;
}
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }
  get value() {
    const profit = this.voyageProfitFactor;
    const risk = this.voyageRisk;
    const historyRisk = this.captainHistoryRisk;
    return profit * 3 > risk + historyRisk * 2 ? 'A' : 'B';
  }
  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (['china', 'east-indies'].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;

    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === 'china') result += 1;
    if (this.voyage.zone === 'east-indies') result += 1;
    result += this.voyageHistoryAndLengthFactor;
    return result;
  }
  get voyageHistoryAndLengthFactor() {
    let result = 0;
    if (this.history.length > 8) result += 1;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }
}
class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }
  get voyageHistoryAndLengthFactor() {
    let result = 3;
    if (this.history.length > 10) result += 1;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }
}
const voyage = { zone: 'west-indies', length: 10 };
const history = [
  { zone: 'east-indies', profit: 5 },
  { zone: 'west-indies', profit: 15 },
  { zone: 'china', profit: -2 },
  { zone: 'west-africa', profit: 7 },
];

const rate = rating(voyage, history);
console.log(rate);
