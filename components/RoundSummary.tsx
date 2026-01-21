import React from 'react';
import { Team, GameMode } from '../types';
import { AvatarDisplay } from './AvatarDisplay';

interface RoundSummaryProps {
  teams: Team[];
  round: number;
  totalRounds: number;
  gameMode: GameMode;
  onNextRound: () => void;
}

export const RoundSummary: React.FC<RoundSummaryProps> = ({ teams, round, totalRounds, gameMode, onNextRound }) => {
  const isDrinkingMode = gameMode === GameMode.DRINKING;
  
  // Sort teams for leaderboard
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

  // Calculate Ranks with Ties
  let currentRank = 0;
  let lastScore = -1;

  const rankedTeams = sortedTeams.map((team, index) => {
    if (team.score !== lastScore) {
        currentRank = index + 1;
    } else if (index > 0 && team.score === sortedTeams[index - 1].score) {
        currentRank = sortedTeams[index - 1].rank; 
    } else {
        currentRank = index + 1;
    }
    lastScore = team.score;
    return { ...team, rank: currentRank };
  });

  const containerClass = isDrinkingMode 
    ? "bg-slate-900/90 border border-slate-700 shadow-[0_0_60px_rgba(124,58,237,0.2)]" 
    : "bg-white border border-white shadow-2xl";
    
  const titleColor = isDrinkingMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300' : 'text-gray-900';

  return (
    <div className={`w-full max-w-3xl mx-auto p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] mt-4 md:mt-8 animate-fade-in-up backdrop-blur-md ${containerClass}`}>
      <div className="text-center mb-6 md:mb-10">
        <h2 className={`text-3xl md:text-5xl font-black mb-2 md:mb-3 ${titleColor}`}>
             {isDrinkingMode ? "LA BARRA" : `RONDA ${round}`}
        </h2>
        <p className={`text-sm md:text-lg font-medium ${isDrinkingMode ? 'text-slate-400' : 'text-gray-500'}`}>
            {isDrinkingMode ? "Estado etílico actual" : "Clasificación Provisional"}
        </p>
      </div>

      {isDrinkingMode && (
        <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/40 rounded-xl md:rounded-2xl p-3 md:p-4 mb-6 md:mb-8 border border-pink-500/20 flex items-center justify-center gap-3 md:gap-4">
           <span className="text-xl md:text-3xl">🍻</span>
           <div className="text-center">
              <h3 className="font-bold text-pink-300 uppercase tracking-widest text-[10px] md:text-xs mb-1">Regla de Oro</h3>
              <p className="text-white text-xs md:text-base font-bold">Misma Puntuación = Mismos Tragos</p>
           </div>
           <span className="text-xl md:text-3xl">🍻</span>
        </div>
      )}

      <div className="space-y-3 mb-8 md:mb-12">
        {rankedTeams.map((team) => {
          const rank = team.rank;
          const sips = rank; 
          
          let rankDisplay;
          if (rank === 1) rankDisplay = <span className="text-xl md:text-3xl drop-shadow-md">👑</span>;
          else if (rank === teams.length) rankDisplay = <span className="text-xl md:text-3xl drop-shadow-md">🐢</span>;
          else rankDisplay = <span className={`text-base md:text-xl font-black ${isDrinkingMode ? 'text-slate-600' : 'text-gray-300'}`}>#{rank}</span>;

          const rowBg = isDrinkingMode 
            ? 'bg-slate-800/50 hover:bg-slate-800 border-slate-700' 
            : 'bg-gray-50 hover:bg-white border-gray-100 hover:shadow-lg';
            
          const nameColor = isDrinkingMode ? 'text-white' : 'text-gray-800';

          return (
            <div key={team.id} className={`flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all duration-300 ${rowBg}`}>
              <div className="flex items-center gap-3 md:gap-6">
                <div className="w-6 md:w-10 text-center flex justify-center">{rankDisplay}</div>
                
                <div className="transform hover:scale-110 transition-transform">
                  <AvatarDisplay avatar={team.avatar} size="md" />
                </div>
                
                <div>
                    <div className={`font-black text-sm md:text-xl ${nameColor}`}>{team.name}</div>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                 <span className={`text-lg md:text-2xl font-black ${isDrinkingMode ? 'text-purple-400' : 'text-indigo-600'}`}>{team.score}</span>
                 {isDrinkingMode ? (
                     <span className="text-[10px] md:text-xs font-bold text-pink-400 uppercase tracking-wide">{sips} Tragos</span>
                 ) : (
                     <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wide">Puntos</span>
                 )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onNextRound}
        className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all
            ${isDrinkingMode 
                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-pink-900/20' 
                : 'bg-gray-900 text-white shadow-gray-400/20'
            }`}
      >
        {round >= totalRounds ? "Ver Podio Final" : `Siguiente Ronda →`}
      </button>
    </div>
  );
};