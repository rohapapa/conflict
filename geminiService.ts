
import { GoogleGenAI } from "@google/genai";
import { ConflictStyle } from "./types";

export const getDeeperAnalysis = async (scores: Record<ConflictStyle, number>) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const scoreText = Object.entries(scores)
    .map(([style, score]) => `${style}: ${score}점`)
    .join(", ");

  const prompt = `
    TKI 갈등 관리 진단 결과 분석 요청:
    학습자의 점수 결과: ${scoreText} (각 항목 만점은 12점 근처)
    
    위 점수 분포를 바탕으로 다음 내용을 포함하여 전문적인 갈등 관리 조언을 작성해줘.
    1. 현재 갈등 관리 스타일의 특징 (가장 높은 점수와 가장 낮은 점수를 중심으로)
    2. 직장 생활에서 나타날 수 있는 장점과 주의점
    3. 더 나은 갈등 해결을 위한 구체적인 액션 플랜 2가지
    
    답변은 한국어로, 정중하고 통찰력 있게 작성해줘. 마크다운 형식을 사용해.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini analysis error:", error);
    return null;
  }
};

export const getGroupCultureAnalysis = async (groupData: Record<ConflictStyle, number>) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const distributionText = Object.entries(groupData)
    .map(([style, count]) => `${style}: ${count}명`)
    .join(", ");

  const prompt = `
    TKI 갈등 관리 그룹 통계 분석 요청:
    전체 그룹의 유형 분포: ${distributionText}
    
    이 데이터는 같은 회사/팀에 근무하는 동료들의 진단 결과입니다. 이 분포를 바탕으로 다음 내용을 분석해줘.
    1. 이 팀의 전반적인 '갈등 해결 문화'의 특징 (어떤 유형이 지배적인가?)
    2. 이러한 분포를 가진 팀이 업무 협업 시 겪을 수 있는 잠재적 위험 요소나 사각지대
    3. 팀 시너지를 높이기 위해 리더와 구성원들이 일상에서 실천해야 할 '갈등 대화 룰' 제안
    
    답변은 한국어로, 기업 교육 강사가 수강생들에게 브리핑하는 듯한 신뢰감 있고 전문적인 톤으로 작성해줘. 마크다운 형식을 사용해.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini group analysis error:", error);
    return null;
  }
};
