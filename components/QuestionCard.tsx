import React, { useState, useEffect } from 'react';
import { Question, Team, GameMode } from '../types';
import { CATEGORIES, DIFFICULTY_POINTS } from '../constants';
import { AvatarDisplay } from './AvatarDisplay';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  currentTeam: Team;
  currentRound: number;
  totalRounds: number;
  onAnswer: (isCorrect: boolean) => void;
  gameMode: GameMode;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  currentTeam,
  currentRound,
  totalRounds,
  onAnswer,
  gameMode
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const category = CATEGORIES[question.category];
  const isDrinking = gameMode === GameMode.DRINKING;
  const points = DIFFICULTY_POINTS[question.difficulty] || 100;

  // --- THEME CONFIGURATION ---
  const containerClass = isDrinking 
    ? "bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-[0_0_30px_rgba(236,72,153,0.15)]" 
    : "bg-white border border-gray-100 shadow-xl";

  const questionTextClass = isDrinking 
    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200 drop-shadow-sm" 
    : "text-gray-800";

  const timerClass = isDrinking
    ? "bg-slate-800 text-pink-400 border border-slate-600"
    : "bg-blue-50 text-blue-600 border border-blue-100";

  const pointsBadgeClass = isDrinking
    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/30"
    : "bg-gray-900 text-white shadow-lg";

  useEffect(() => {
    setSelectedOption(null);
    setIsRevealed(false);
    setTimeLeft(30);
  }, [question]);

  useEffect(() => {
    if (isRevealed) return;
    
    if (timeLeft === 0) {
      handleOptionClick(-1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isRevealed]);

  const handleOptionClick = (index: number) => {
    if (isRevealed) return;

    setSelectedOption(index);
    setIsRevealed(true);

    const isCorrect = index === question.correctAnswerIndex;
    
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 2500);
  };

  const getOptionClass = (index: number) => {
    const baseClass = "w-full p-3 md:p-5 rounded-xl text-left transition-all border-2 text-sm md:text-lg font-bold relative overflow-hidden group";
    
    // Revealed State
    if (isRevealed) {
        if (index === question.correctAnswerIndex) {
            return `${baseClass} bg-green-500 text-white border-green-600 shadow-lg scale-[1.01] z-10`;
        }
        if (index === selectedOption) {
            return `${baseClass} bg-red-500 text-white border-red-600 shadow-lg`;
        }
        return `${baseClass} border-transparent ${isDrinking ? 'bg-slate-800/50 text-slate-600' : 'bg-gray-100 text-gray-300'} opacity-40 grayscale`;
    }

    // Normal State (Hover effects)
    if (isDrinking) {
        return `${baseClass} border-slate-700 bg-slate-800/50 text-slate-200 hover:border-pink-500 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:scale-[1.01] active:scale-95`;
    }
    
    return `${baseClass} border-gray-100 bg-white text-gray-700 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-900 hover:shadow-md hover:scale-[1.01] active:scale-95`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-1 animate-fade-in-up pb-6">
      
      {/* 1. Header Information Bar */}
      <div className="flex items-end justify-between mb-4">
         <div className="flex items-center gap-2 md:gap-3">
             {/* Category Icon */}
             <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl shadow-lg ${category.color} text-white`}>
                 {category.icon}
             </div>
             
             <div className="flex flex-col">
                 <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest ${isDrinking ? 'text-slate-400' : 'text-gray-400'}`}>Categoría</span>
                 <h2 className={`text-lg md:text-2xl font-black uppercase leading-none ${category.textColor}`}>{category.name}</h2>
             </div>
         </div>

         <div className={`px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl font-mono text-lg md:text-2xl font-black tracking-widest ${timerClass} flex items-center gap-2`}>
            <span>⏰</span>
            <span>{timeLeft.toString().padStart(2, '0')}</span>
         </div>
      </div>

      {/* 2. Main Question Card */}
      <div className={`rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative ${containerClass}`}>
        
        {/* Progress Bar Top */}
        <div className={`w-full h-1.5 md:h-2 ${isDrinking ? 'bg-slate-800' : 'bg-gray-100'}`}>
          <div 
            className={`h-full ${category.color} transition-all duration-1000 ease-out`} 
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>

        <div className="p-4 md:p-10">
          
          {/* Metadata Row */}
          <div className="flex justify-between items-center mb-4 md:mb-8">
             <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-1 md:px-3 rounded-full ${isDrinking ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500'}`}>
               Pregunta {questionNumber} / {totalQuestions}
             </span>
             
             {/* Points Badge */}
             <span className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-wide cursor-default ${pointsBadgeClass}`}>
               ★ {points}
             </span>
          </div>

          {/* Question Text */}
          <h3 className={`text-lg md:text-4xl font-black mb-6 md:mb-10 leading-snug md:leading-tight ${questionTextClass}`}>
            {question.questionText}
          </h3>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={getOptionClass(idx)}
                disabled={isRevealed}
              >
                 <div className="flex items-center justify-between w-full">
                   <span className="leading-tight">{option}</span>
                   {/* Option Letter Indicator */}
                   {!isRevealed && (
                      <span className={`text-[10px] md:text-xs font-black opacity-30 ml-2 ${isDrinking ? 'text-white' : 'text-black'}`}>
                         {String.fromCharCode(65 + idx)}
                      </span>
                   )}
                 </div>
              </button>
            ))}
          </div>

          {/* Explanation Reveal */}
          {isRevealed && (
            <div className={`animate-fade-in p-4 md:p-6 rounded-xl md:rounded-2xl border-l-4 md:border-l-8 ${selectedOption === question.correctAnswerIndex ? 'border-green-500 bg-green-500/10' : 'border-indigo-500 bg-indigo-500/10'}`}>
               <h4 className={`font-black text-sm md:text-lg mb-1 md:mb-2 ${isDrinking ? 'text-white' : 'text-gray-900'}`}>
                 {selectedOption === question.correctAnswerIndex ? '¡Respuesta Correcta!' : '¡Fallaste!'}
               </h4>
               <p className={`text-xs md:text-base leading-relaxed ${isDrinking ? 'text-slate-300' : 'text-gray-700'}`}>
                 {question.explanation}
               </p>
            </div>
          )}
        </div>

        {/* 3. Team Footer (Inside Card) */}
        <div className={`p-4 md:p-6 border-t ${isDrinking ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-50 border-gray-100'} flex items-center justify-between`}>
             <div className="flex items-center gap-2 md:gap-4">
                 <div className="transform transition-transform">
                     <AvatarDisplay avatar={currentTeam.avatar} size="md" />
                 </div>
                 <div className="flex flex-col">
                     <span className={`text-[10px] md:text-xs font-bold uppercase ${isDrinking ? 'text-slate-400' : 'text-gray-400'}`}>Turno Actual</span>
                     <span className={`text-base md:text-xl font-black ${currentTeam.color}`}>{currentTeam.name}</span>
                 </div>
             </div>
             <div className="text-right">
                 <span className={`block text-[10px] md:text-xs font-bold uppercase ${isDrinking ? 'text-slate-400' : 'text-gray-400'}`}>Total</span>
                 <span className={`block text-xl md:text-3xl font-black ${isDrinking ? 'text-white' : 'text-gray-800'}`}>{currentTeam.score}</span>
             </div>
        </div>

      </div>
    </div>
  );
};