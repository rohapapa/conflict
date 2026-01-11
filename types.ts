
export enum ConflictStyle {
  COMPETING = '경쟁',
  COLLABORATING = '협력',
  COMPROMISING = '타협',
  AVOIDING = '회피',
  ACCOMMODATING = '양보'
}

export interface Question {
  id: number;
  optionA: {
    text: string;
    style: ConflictStyle;
  };
  optionB: {
    text: string;
    style: ConflictStyle;
  };
}

export interface DiagnosisResult {
  scores: Record<ConflictStyle, number>;
  dominantStyle: ConflictStyle;
}

export interface StyleInfo {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  whenToUse: string[];
}
