/**
 * 긴 함수를 명령 객체(단 하나의 명령을 수행)로 만들어서 필요한 데이터를 영구적으로 보관하면서 필요한 동작을 수행할 수 있도록 변환
 * 커맨드 패턴(Command Pattern)
    - 요청을 호출하는 쪽과 요청을 수행하는 쪽을 분리하는(decoupling) 패턴
    - 요청을 요청에 대한 모든 정보를 포함하는 독립형 객체(stand-alone object)로 변환하는 동작 디자인 패턴
    - 요청을 메서드 인수로 제공하거나 요청 실행을 지연하거나 대기열에 추가하거나 실행 취소 가능한 작업을 지원 가능
 */
export function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).excute();
}
class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate;
    this.medicalExam = medicalExam;
    this.scoringGuide = scoringGuide;
  }
  excute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;
    if (this.medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = 'regular';
    if (
      this.scoringGuide.stateWithLowCertification(this.candidate.originState)
    ) {
      certificationGrade = 'low';
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}
export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}
