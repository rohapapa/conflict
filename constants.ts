
import { ConflictStyle, Question, StyleInfo } from './types';

export const TKI_QUESTIONS: Question[] = [
  { id: 1, optionA: { text: "나는 가끔 문제해결의 책임을 상대방이 지도록 내버려 두곤 한다.", style: ConflictStyle.AVOIDING }, optionB: { text: "나는 서로가 동의하지 않는 일들에 대해 협상하기 보다 서로가 동의하는 일들에 대해 강조한다.", style: ConflictStyle.ACCOMMODATING } },
  { id: 2, optionA: { text: "나는 타협적인 문제해결책을 모색하려고 한다.", style: ConflictStyle.COMPROMISING }, optionB: { text: "나는 상대방과 나의 관심사를 모두 충족시키려고 시도한다.", style: ConflictStyle.COLLABORATING } },
  { id: 3, optionA: { text: "나는 대체로 나의 목적을 달성하기 위해 끝까지 밀고 나간다.", style: ConflictStyle.COMPETING }, optionB: { text: "나는 아마 상대방의 감정을 상하지 않게 하고 서로간의 관계를 유지하려고 노력 할 것이다.", style: ConflictStyle.ACCOMMODATING } },
  { id: 4, optionA: { text: "나는 타협적인 해결책을 모색하려고 한다.", style: ConflictStyle.COMPROMISING }, optionB: { text: "나는 때때로 상대방이 바라는 바를 위해서 내 자신이 바라는 바를 희생한다.", style: ConflictStyle.ACCOMMODATING } },
  { id: 5, optionA: { text: "나는 해결책을 찾기 위해 끊임없이 상대방의 도움을 요청한다.", style: ConflictStyle.COLLABORATING }, optionB: { text: "나는 불필요한 긴장을 피하려고 한다.", style: ConflictStyle.AVOIDING } },
  { id: 6, optionA: { text: "나는 나에게 불편한 자리를 회피하려고 한다.", style: ConflictStyle.AVOIDING }, optionB: { text: "나는 나의 입장을 지키려고 애쓴다.", style: ConflictStyle.COMPETING } },
  { id: 7, optionA: { text: "나는 어떤 문제에 대해서 충분히 숙고할 시간이 있을 때까지 그것을 미루어 두려고 한다.", style: ConflictStyle.AVOIDING }, optionB: { text: "나는 어떤 것을 얻은 대가로서 다른 것을 포기한다.", style: ConflictStyle.COMPROMISING } },
  { id: 8, optionA: { text: "나는 대체로 내 목적을 추구함에 있어서 남에게 양보하지 않는 편이다.", style: ConflictStyle.COMPETING }, optionB: { text: "나는 모든 관심사와 문제들을 곧바로 터놓고 이야기 하려고 시도한다.", style: ConflictStyle.COLLABORATING } },
  { id: 9, optionA: { text: "나는 서로간의 견해 차이에 대해서는 고민할 가치가 없다고 느낀다.", style: ConflictStyle.AVOIDING }, optionB: { text: "나는 내 방식대로 일을 처리하기 위해서 어느 정도 노력을 한다.", style: ConflictStyle.COMPETING } },
  { id: 10, optionA: { text: "나는 대체로 내 목적을 달성하기 위해 끝까지 밀고 나간다.", style: ConflictStyle.COMPETING }, optionB: { text: "나는 타협적인 해결책을 모색해 본다.", style: ConflictStyle.COMPROMISING } },
  { id: 11, optionA: { text: "나는 모든 관심사와 문제들을 곧바로 터 놓고 이야기 하려고 시도한다.", style: ConflictStyle.COLLABORATING }, optionB: { text: "나는 아마 상대방의 감정을 상하지 않게 하고 서로간의 관계를 유지하려고 노력할 것이다.", style: ConflictStyle.ACCOMMODATING } },
  { id: 12, optionA: { text: "나는 때때로 논쟁을 야기하게 되는 입장을 취하게 되는 일은 피한다.", style: ConflictStyle.AVOIDING }, optionB: { text: "나는 상대방이 나의 입장을 존중해 준다면 나도 그 사람의 입장을 유지하도록 허용할 것이다.", style: ConflictStyle.ACCOMMODATING } },
  { id: 13, optionA: { text: "나는 중간적인 입장을 제안한다.", style: ConflictStyle.COMPROMISING }, optionB: { text: "나는 내 의견을 관절 시킨다.", style: ConflictStyle.COMPETING } },
  { id: 14, optionA: { text: "나는 상대방에게도 내 생각을 말해 주며 그 사람의 생각도 물어 본다.", style: ConflictStyle.COLLABORATING }, optionB: { text: "나는 상대방에게 내 의견의 논리적 근거와 장점을 설명해 주려고 노력한다.", style: ConflictStyle.COMPETING } },
  { id: 15, optionA: { text: "나는 아마 상대방의 감정을 상하지 않게 하고 서로간의 관계를 유지하려고 노력 할 것이다.", style: ConflictStyle.ACCOMMODATING }, optionB: { text: "나는 불필요한 긴장상태를 피하려고 한다.", style: ConflictStyle.AVOIDING } },
  { id: 16, optionA: { text: "나는 상대방의 감정을 상하지 않게 하려고 노력한다.", style: ConflictStyle.ACCOMMODATING }, optionB: { text: "나는 상대방에게 내 입장의 장점을 설득시키려고 한다.", style: ConflictStyle.COMPETING } },
  { id: 17, optionA: { text: "나는 대체로 내 목적을 달성하기 위해 끝까지 밀고 나간다.", style: ConflictStyle.COMPETING }, optionB: { text: "나는 불필요한 긴장 상태를 피하려고 한다.", style: ConflictStyle.AVOIDING } },
  { id: 18, optionA: { text: "나는 상대방이 자신의 입장을 견지하는 데서 기쁨을 느낀다면 그렇게 하도록 할 것이다.", style: ConflictStyle.ACCOMMODATING }, optionB: { text: "나는 상대방이 나의 입장을 존중해 준다면 나도 그 사람의 입장을 유지하도록 허용할 것이다.", style: ConflictStyle.COMPROMISING } },
  { id: 19, optionA: { text: "나는 모든 관심사와 문제들을 곧바로 터 놓고 이야기 하려고 시도할 것이다.", style: ConflictStyle.COLLABORATING }, optionB: { text: "나는 어떤 문제에 대해서 충분히 숙고할 시간이 있을 때까지 그것을 미루어 두려고 한다.", style: ConflictStyle.AVOIDING } },
  { id: 20, optionA: { text: "나는 서로간의 차이를 해소 시키려고 시도한다.", style: ConflictStyle.COLLABORATING }, optionB: { text: "나는 이해 득실상 양자 모두에게 공정한 입장을 찾으려고 한다.", style: ConflictStyle.COMPROMISING } },
  { id: 21, optionA: { text: "나는 협상해 가는 과정에서 상대방이 바라는 바를 배려해 주고 있다.", style: ConflictStyle.ACCOMMODATING }, optionB: { text: "나는 문제를 항상 직접 터놓고 토론하는 편이다.", style: ConflictStyle.COLLABORATING } },
  { id: 22, optionA: { text: "나는 상대방의 입장과 나의 입장간의 중간지점을 찾으려고 한다.", style: ConflictStyle.COMPROMISING }, optionB: { text: "나는 내가 하고 싶은 바를 주장한다.", style: ConflictStyle.COMPETING } },
  { id: 23, optionA: { text: "나는 우리 모두가 바라는 바를 만족시키는데 항상 관심을 갖는다.", style: ConflictStyle.COLLABORATING }, optionB: { text: "나는 가끔 문제해결의 책임을 상대방이 지도록 내버려 두곤 한다.", style: ConflictStyle.AVOIDING } },
  { id: 24, optionA: { text: "나는 만약 상대방의 입장이 아주 중요하다고 생각되면 나는 그가 하고 싶은 바를 만족시켜 주려고 할 것이다.", style: ConflictStyle.ACCOMMODATING }, optionB: { text: "나는 상대방이 타협적인 안에 만족해 하도록 할 것이다.", style: ConflictStyle.COMPROMISING } },
  { id: 25, optionA: { text: "나는 상대방에게 내 의견의 논리적 근거와 장점을 설명해 주려고 한다.", style: ConflictStyle.COMPETING }, optionB: { text: "나는 협상해 나가는 과정에서 상대방이 바라는 바를 배려해 주려고 한다.", style: ConflictStyle.ACCOMMODATING } },
  { id: 26, optionA: { text: "나는 중간적인 입장을 제안한다.", style: ConflictStyle.COMPROMISING }, optionB: { text: "나는 항상 우리 모두가 바라는 바를 만족시키는데 관심을 갖는다.", style: ConflictStyle.COLLABORATING } },
  { id: 27, optionA: { text: "나는 때때로 논쟁을 야기하게 되는 입장을 취하게 되는 일은 피한다.", style: ConflictStyle.AVOIDING }, optionB: { text: "나는 만약 상대방이 자신의 관점을 견지하는 데서 기쁨을 느낀다면 그렇게 하도록 할 것이다.", style: ConflictStyle.ACCOMMODATING } },
  { id: 28, optionA: { text: "나는 대체로 내 목적을 달성하기 위해 끝까지 밀고 나간다.", style: ConflictStyle.COMPETING }, optionB: { text: "나는 해결책을 찾아내기 위해서 항상 상대방의 도움을 요청한다.", style: ConflictStyle.COLLABORATING } },
  { id: 29, optionA: { text: "나는 중간적인 입장을 제안한다.", style: ConflictStyle.COMPROMISING }, optionB: { text: "나는 서로간의 견해 차이에 대해서는 고민할 가치가 없다고 느낀다.", style: ConflictStyle.AVOIDING } },
  { id: 30, optionA: { text: "나는 상대방의 감정을 상하지 않게 하려고 한다.", style: ConflictStyle.ACCOMMODATING }, optionB: { text: "나는 어떤 문제를 항상 상대방과 의논함으로써 우리가 그 문제를 해결할 수 있도록 한다.", style: ConflictStyle.COLLABORATING } }
];

export const STYLE_DESCRIPTIONS: Record<ConflictStyle, StyleInfo> = {
  [ConflictStyle.COMPETING]: {
    title: "경쟁 (Competing)",
    description: "자신의 목표를 달성하기 위해 권력이나 지위, 논리 등을 사용하여 상대방을 압도하려는 유형입니다.",
    pros: ["신속한 결정 가능", "자신의 이익 보호", "중요하지만 비인기적인 정책 추진 시 유리"],
    cons: ["대인관계 손상", "정보 공유 단절", "상대방의 저항과 불만 초래"],
    whenToUse: ["긴급한 결정이 필요할 때", "비용 절감이나 규율 준수 등 단호한 조치가 필요할 때", "자신에게 매우 중요한 이슈일 때"]
  },
  [ConflictStyle.COLLABORATING]: {
    title: "협력 (Collaborating)",
    description: "양쪽 모두의 욕구를 만족시킬 수 있는 창조적인 대안을 찾기 위해 함께 노력하는 유형입니다.",
    pros: ["Win-Win 결과 도출", "관계 강화 및 신뢰 구축", "근본적인 원인 해결"],
    cons: ["시간과 에너지 소모가 큼", "모든 사안에 적용하기엔 비효율적일 수 있음"],
    whenToUse: ["양측의 관심사가 모두 중요할 때", "학습과 경험 공유가 필요할 때", "서로 다른 견해를 통합해야 할 때"]
  },
  [ConflictStyle.COMPROMISING]: {
    title: "타협 (Compromising)",
    description: "서로 조금씩 양보하여 적절한 중간 지점을 찾아 문제를 신속하게 해결하려는 유형입니다.",
    pros: ["빠른 갈등 해소", "일시적 해결책 마련에 효과적", "협상이 교착 상태일 때 돌파구"],
    cons: ["둘 다 완벽히 만족하지 못함", "근본 원인 해결 미흡", "원칙이 훼손될 수 있음"],
    whenToUse: ["시간 압박이 심할 때", "경쟁이나 협력이 효과가 없을 때", "목표가 적당히 중요할 때"]
  },
  [ConflictStyle.AVOIDING]: {
    title: "회피 (Avoiding)",
    description: "갈등 상황에서 물러나거나 결정을 미룸으로써 갈등 자체를 피하려는 유형입니다.",
    pros: ["불필요한 충돌 방지", "감정이 격앙될 때 냉각기 제공", "중요도가 낮은 사안에 에너지 낭비 방지"],
    cons: ["문제 악화 우려", "의사결정 지연", "무책임한 인상을 줄 수 있음"],
    whenToUse: ["사안이 사소할 때", "당장 해결할 정보가 부족할 때", "감정적 대립이 너무 심할 때"]
  },
  [ConflictStyle.ACCOMMODATING]: {
    title: "양보/수용 (Accommodating)",
    description: "자신의 욕구보다는 상대방의 욕구를 우선시하며 관계를 유지하려는 유형입니다.",
    pros: ["조화와 안정 유지", "상대방의 호의 확보", "자신이 틀렸을 때 손실 최소화"],
    cons: ["자신의 이익 소홀", "권위 약화 우려", "상대방의 의존도 심화"],
    whenToUse: ["관계 유지가 결과보다 중요할 때", "내가 틀렸음을 알았을 때", "상대방에게 훨씬 중요한 사안일 때"]
  }
};
