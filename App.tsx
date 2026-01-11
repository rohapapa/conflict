
import React, { useState, useCallback, useMemo } from 'react';
import { TKI_QUESTIONS, STYLE_DESCRIPTIONS } from './constants';
import { ConflictStyle, DiagnosisResult } from './types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

// --- Sub-components ---

const Progress: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div 
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const QuestionView: React.FC<{ 
  question: typeof TKI_QUESTIONS[0]; 
  onSelect: (style: ConflictStyle) => void;
  index: number;
  total: number;
}> = ({ question, onSelect, index, total }) => {
  return (
    <div className="flex flex-col h-full max-w-lg mx-auto p-4">
      <div className="mb-4">
        <Progress current={index} total={total} />
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
          질문 {index + 1} / {total}
        </span>
        <h2 className="text-xl font-bold text-gray-800 mt-2">
          자신에게 더 가까운 행동 방식을 선택하세요.
        </h2>
      </div>

      <div className="flex-1 flex flex-col gap-4 py-4">
        <button
          onClick={() => onSelect(question.optionA.style)}
          className="flex-1 bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 active:scale-95 transition-all rounded-2xl p-6 text-left shadow-sm flex items-center"
        >
          <span className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
            {question.optionA.text}
          </span>
        </button>

        <div className="relative h-px bg-gray-200 my-2">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 px-3 text-xs text-gray-400 font-bold uppercase">OR</span>
        </div>

        <button
          onClick={() => onSelect(question.optionB.style)}
          className="flex-1 bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 active:scale-95 transition-all rounded-2xl p-6 text-left shadow-sm flex items-center"
        >
          <span className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
            {question.optionB.text}
          </span>
        </button>
      </div>
    </div>
  );
};

const ResultView: React.FC<{ result: DiagnosisResult; onReset: () => void }> = ({ result, onReset }) => {
  const chartData = useMemo(() => {
    return Object.entries(result.scores).map(([name, value]) => ({ name, value }));
  }, [result]);

  const dominantInfo = STYLE_DESCRIPTIONS[result.dominantStyle];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-3xl my-8 animate-in fade-in zoom-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">진단 결과</h1>
        <p className="text-gray-500">당신의 주요 갈등 관리 스타일은 다음과 같습니다.</p>
      </div>

      <div className="mb-10 bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">나의 스타일</span>
        <h2 className="text-4xl font-black text-blue-900 mt-2">{dominantInfo.title}</h2>
        <p className="text-gray-700 mt-4 leading-relaxed">{dominantInfo.description}</p>
      </div>

      <div className="mb-10 h-64 w-full">
        <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">전체 유형별 점수 분포</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 12]} hide />
            <Tooltip 
              cursor={{ fill: '#f1f5f9' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.name === result.dominantStyle ? '#2563eb' : '#94a3b8'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-2 h-6 bg-blue-500 rounded-full mr-2"></span>
            언제 효과적인가요?
          </h3>
          <ul className="space-y-2">
            {dominantInfo.whenToUse.map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-2">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
            <h4 className="font-bold text-green-800 mb-3">장점 (Pros)</h4>
            <ul className="text-sm text-green-700 space-y-1 list-disc list-inside">
              {dominantInfo.pros.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
            <h4 className="font-bold text-red-800 mb-3">주의점 (Cons)</h4>
            <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
              {dominantInfo.cons.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t pt-8 text-center">
        <p className="text-sm text-gray-500 mb-6 font-semibold text-blue-600">
          📍 강사님께 본인의 유형({result.dominantStyle})을 알려주세요!
        </p>
        <button
          onClick={onReset}
          className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all active:scale-95 transform hover:-translate-y-1"
        >
          다시 진단하기
        </button>
      </div>
    </div>
  );
};

const InstructorDashboard: React.FC = () => {
  const [counts, setCounts] = useState<Record<ConflictStyle, number>>({
    [ConflictStyle.COMPETING]: 0,
    [ConflictStyle.COLLABORATING]: 0,
    [ConflictStyle.COMPROMISING]: 0,
    [ConflictStyle.AVOIDING]: 0,
    [ConflictStyle.ACCOMMODATING]: 0,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const totalParticipants = (Object.values(counts) as number[]).reduce((a, b) => (a as number) + (b as number), 0);

  const chartData = useMemo(() => {
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [counts]);

  const COLORS = ['#ef4444', '#22c55e', '#f59e0b', '#64748b', '#8b5cf6'];

  const updateCount = (style: ConflictStyle, delta: number) => {
    setCounts(prev => ({
      ...prev,
      [style]: Math.max(0, prev[style] + delta)
    }));
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10 bg-white shadow-2xl rounded-[2rem] my-8 animate-in fade-in">
      <div className="mb-8 bg-slate-900 text-white p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-inner">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-xs font-black px-2 py-1 rounded uppercase">Link</span>
          <span className="text-sm font-medium opacity-70 truncate max-w-[200px] md:max-w-md">{window.location.href}</span>
        </div>
        <button 
          onClick={copyLink}
          className="bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors flex items-center gap-2"
        >
          {copySuccess ? '✅ 복사 완료' : '📋 진단 주소 복사'}
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b pb-8 gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">강사용 대시보드</h1>
          <p className="text-gray-500 text-lg mt-1">우리 조직의 갈등 관리 지도를 그려보세요.</p>
        </div>
        <div className="bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg flex items-center gap-4">
          <span className="text-sm font-bold opacity-80 uppercase tracking-wider">전체 인원</span>
          <span className="text-4xl font-black">{totalParticipants}</span>
          <span className="font-bold text-xl">명</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="p-2 bg-gray-100 rounded-lg">✍</span> 실시간 인원 집계
          </h3>
          {(Object.keys(counts) as ConflictStyle[]).map((style, idx) => (
            <div key={style} className="flex items-center justify-between bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: COLORS[idx] }}></div>
                <span className="font-bold text-gray-800 text-lg">{style}</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => updateCount(style, -1)}
                  className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-red-50 hover:border-red-200 text-gray-400 hover:text-red-500 transition-all text-2xl font-light"
                >-</button>
                <span className="text-2xl font-black w-10 text-center text-gray-900">{counts[style]}</span>
                <button 
                  onClick={() => updateCount(style, 1)}
                  className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-blue-600 shadow-md transition-all text-2xl"
                >+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[400px] bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 p-6">
           {totalParticipants > 0 ? (
             <div className="w-full h-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-gray-400 mb-4">유형별 분포 비율</h3>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={130}
                        paddingAngle={8}
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1500}
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      />
                      <Legend verticalAlign="bottom" height={36} iconType="circle"/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
             </div>
           ) : (
             <div className="text-center">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-4">
                  <span className="text-4xl grayscale opacity-50">📊</span>
               </div>
               <p className="text-gray-400 font-medium">인원을 입력하면 차트가 활성화됩니다.</p>
             </div>
           )}
        </div>
      </div>
      
      <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
        <p className="text-blue-800 font-bold">
          💡 각 유형별 인원을 집계하여 우리 팀의 갈등 관리 성향을 한눈에 파악해보세요.
        </p>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'result' | 'instructor'>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<ConflictStyle[]>([]);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleStart = () => {
    setStep('quiz');
    setCurrentIdx(0);
    setAnswers([]);
  };

  const handleReset = useCallback(() => {
    setStep('intro');
    setCurrentIdx(0);
    setAnswers([]);
  }, []);

  const handleSelect = useCallback((style: ConflictStyle) => {
    setAnswers(prev => [...prev, style]);
    if (currentIdx < TKI_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setStep('result');
    }
  }, [currentIdx]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const diagnosisResult = useMemo(() => {
    if (step !== 'result') return null;
    
    const initialScores: Record<ConflictStyle, number> = {
      [ConflictStyle.COMPETING]: 0,
      [ConflictStyle.COLLABORATING]: 0,
      [ConflictStyle.COMPROMISING]: 0,
      [ConflictStyle.AVOIDING]: 0,
      [ConflictStyle.ACCOMMODATING]: 0,
    };

    const scores = answers.reduce<Record<ConflictStyle, number>>((acc, style) => {
      acc[style] += 1;
      return acc;
    }, { ...initialScores });

    let dominantStyle = ConflictStyle.COMPETING;
    let maxScore = -1;

    (Object.keys(scores) as ConflictStyle[]).forEach((style) => {
      const score = scores[style];
      if (score > maxScore) {
        maxScore = score;
        dominantStyle = style;
      }
    });

    return { scores, dominantStyle };
  }, [answers, step]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f8fafc] text-slate-900 font-sans">
      <header className="w-full py-5 px-6 flex justify-between items-center border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={handleReset}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:rotate-12 transition-transform">T</div>
          <div>
            <h1 className="text-lg font-black tracking-tighter leading-none">TKI 갈등 진단</h1>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Training Tool</span>
          </div>
        </div>
        <button 
          onClick={() => setStep(step === 'instructor' ? 'intro' : 'instructor')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            step === 'instructor' 
            ? 'bg-slate-900 text-white shadow-lg' 
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {step === 'instructor' ? (
            <><span>🏠</span> 학습자 화면</>
          ) : (
            <><span>📊</span> 강사 대시보드</>
          )}
        </button>
      </header>

      <main className="flex-1 w-full max-w-5xl px-4 py-12">
        {step === 'intro' && (
          <div className="flex flex-col items-center text-center mt-8 px-4 max-w-2xl mx-auto animate-in fade-in">
            <div className="mb-10 p-6 bg-white rounded-[2rem] shadow-2xl shadow-blue-100 relative">
               <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl">
                  ✨
               </div>
              <svg className="w-24 h-24 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              나는 어떤 방식으로<br/><span className="text-blue-600 underline decoration-blue-200 underline-offset-8">갈등을 해결</span>하나요?
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              직장 생활 중 동료와의 의견 차이, 갈등 상황에서<br/>
              내가 무의식적으로 선택하는 5가지 전략을 확인해봅시다.
            </p>
            <div className="w-full max-w-sm space-y-6">
              <button 
                onClick={handleStart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-2xl font-black py-6 rounded-3xl shadow-2xl shadow-blue-200 transition-all active:scale-95 transform hover:-translate-y-1"
              >
                진단 시작하기
              </button>
              
              <button 
                onClick={copyLink}
                className="w-full bg-slate-100 text-slate-500 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
              >
                {copySuccess ? '✅ 주소가 복사되었습니다' : '📋 진단 주소 복사 (강사용)'}
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-400 font-bold text-sm">
                <span className="w-8 h-px bg-slate-200"></span>
                <span>30문항 · 약 5분 소요</span>
                <span className="w-8 h-px bg-slate-200"></span>
              </div>
            </div>
          </div>
        )}

        {step === 'quiz' && (
          <QuestionView 
            question={TKI_QUESTIONS[currentIdx]} 
            onSelect={handleSelect}
            index={currentIdx}
            total={TKI_QUESTIONS.length}
          />
        )}

        {step === 'result' && diagnosisResult && (
          <ResultView result={diagnosisResult} onReset={handleReset} />
        )}

        {step === 'instructor' && (
          <InstructorDashboard />
        )}
      </main>

      <footer className="w-full py-10 text-center text-slate-400 text-xs bg-white border-t mt-12">
        <div className="max-w-md mx-auto px-6">
          <p className="font-bold mb-2 text-slate-500 uppercase tracking-widest">TKI Conflict Management Assessment</p>
          <p className="leading-relaxed opacity-70">
            본 도구는 교육 및 진단용으로 제작되었습니다.<br/>
            모든 데이터는 브라우저 내에서만 처리되며 외부에 저장되지 않습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
