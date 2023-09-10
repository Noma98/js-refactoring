class Performance {
  #audience;
  #play;
  constructor(audience, play) {
    this.#audience = audience;
    this.#play = play;
  }
  get play() {
    return this.#play;
  }
  get audience() {
    return this.#audience;
  }
  static create(audience, play) {
    switch (play.type) {
      case 'tragedy':
        return new Tragedy(audience, play);
      case 'comedy':
        return new Comedy(audience, play);
      default:
        throw new Error(`알 수 없는 타입: ${play.type}`);
      //원하는 바가 기본값을 리턴하게 하는 거면 DefaultPerformance 같은 클래스를 만들어 리턴하게 해도 되고,
      //아니면 엄격하게 에러를 리턴해도 됨. 원하는 대로 처리
    }
  }
}
class Tragedy extends Performance {
  get amount() {
    const base = 40000;
    return base + (this.audience > 30 ? 1000 * (this.audience - 30) : 0);
  }
  get credits() {
    return Math.max(this.audience - 30, 0);
  }
}
class Comedy extends Performance {
  get amount() {
    let result = 30000;
    if (this.audience > 20) {
      result += 10000 + 500 * (this.audience - 20);
    }
    result += 300 * this.audience;
    return result;
  }
  get credits() {
    return Math.max(this.audience - 30, 0) + Math.floor(this.audience / 5);
  }
}
class Statement {
  #customer;
  #performances;
  constructor(invoice, plays) {
    this.#customer = invoice.customer;
    this.#performances = invoice.performances.map((p) =>
      Performance.create(p.audience, plays[p.playID])
    );
  }
  get customer() {
    return this.#customer;
  }
  get performances() {
    return this.#performances;
    //배열은 바로 리턴하면 외부에서 수정이 가능해져서 [...배열] 같이 복사해서 리턴해줘야하지만,
    //클래스 내부에서 performances의 setter를 만들어 놓지 않음으로써 불변성을 유지할 수 있게 해뒀기 때문에 그냥 리턴해도 됨
  }
  get totalAmount() {
    return this.#performances.reduce((sum, p) => (sum += p.amount), 0);
  }
  get totalCredits() {
    return this.#performances.reduce((sum, p) => (sum += p.credits), 0);
  }
}
export function createStatement(invoice, plays) {
  return new Statement(invoice, plays);
}
