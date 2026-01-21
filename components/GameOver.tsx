import React from 'react';
import { Team, GameMode } from '../types';
import { AvatarDisplay } from './AvatarDisplay';

interface GameOverProps {
  teams: Team[];
  gameMode: GameMode;
  onRestart: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ teams, gameMode, onRestart }) => {
  const isDrinkingMode = gameMode === GameMode.DRINKING;

  // Calculate Ranks with Ties
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
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

  const winners = rankedTeams.filter(t => t.rank === 1);
  const isDraw = winners.length > 1;

  const containerClass = isDrinkingMode 
    ? "bg-slate-900/90 border border-slate-700 shadow-[0_0_80px_rgba(236,72,153,0.3)]" 
    : "bg-white border border-white shadow-2xl";

  const textGradient = isDrinkingMode
    ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
    : "text-gray-900";

  return (
    <div className={`w-full max-w-2xl mx-auto p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] mt-6 md:mt-10 animate-fade-in-up backdrop-blur-xl ${containerClass}`}>
      
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <div className="text-6xl md:text-8xl mb-4 md:mb-6 animate-bounce filter drop-shadow-xl">
            {isDraw ? '🤜🤛' : '🏆'}
        </div>
        <h2 className={`text-3xl md:text-5xl font-black mb-2 md:mb-4 ${textGradient} uppercase tracking-tight leading-none`}>
            {isDraw ? 'EMPATE ABSOLUTO' : 'TENEMOS CAMPEÓN'}
        </h2>
        <div className={`text-lg md:text-2xl font-medium ${isDrinkingMode ? 'text-slate-300' : 'text-gray-500'}`}>
          {isDraw 
             ? `¡${winners.map(w => w.name).join(' y ')} comparten la gloria!` 
             : `¡Enhorabuena, ${winners[0].name}!`}
        </div>
      </div>

      {/* Loser Penalty Section - Only in Drinking Mode */}
      {isDrinkingMode && (
        <div className="mb-8 md:mb-12 relative overflow-hidden bg-red-950/40 rounded-2xl md:rounded-3xl border border-red-500/30 p-6 md:p-8 text-center group">
            <div className="absolute inset-0 bg-red-600/10 blur-xl group-hover:bg-red-600/20 transition-all duration-1000 animate-pulse"></div>
            <div className="relative z-10">
                <h3 className="text-red-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4">La Sentencia Final</h3>
                
                <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
                    <span className="text-2xl md:text-4xl">💀</span>
                    <span className="text-sm md:text-xl text-white font-bold">CASTIGO PERDEDORES</span>
                    <span className="text-2xl md:text-4xl">💀</span>
                </div>

                {(() => {
                    const lastRank = rankedTeams[rankedTeams.length - 1].rank;
                    const losers = rankedTeams.filter(t => t.rank === lastRank);
                    return (
                        <div className="bg-black/40 rounded-xl p-3 md:p-4 inline-block w-full">
                             <p className="text-red-200 text-xs mb-1 uppercase font-bold">Víctimas</p>
                             <p className="text-lg md:text-2xl font-black text-white">{losers.map(l => l.name).join(' & ')}</p>
                             <div className="mt-3 pt-3 md:mt-4 md:pt-4 border-t border-red-500/30">
                                <p className="text-2xl md:text-4xl font-black text-red-500 uppercase tracking-tighter animate-pulse">
                                    FONDO BLANCO
                                </p>
                             </div>
                        </div>
                    );
                })()}
            </div>
        </div>
      )}

      {/* Ranking List */}
      <div className="space-y-3 mb-8 md:mb-12">
        {rankedTeams.map((team) => {
          const rank = team.rank;
          
          let bgStyle = '';

          if (isDrinkingMode) {
              bgStyle = 'bg-slate-800/60 border-slate-700';
              if (rank === 1) bgStyle = 'bg-gradient-to-r from-yellow-600/20 to-yellow-900/20 border-yellow-500/50';
          } else {
              bgStyle = 'bg-gray-50 border-gray-100';
              if (rank === 1) bgStyle = 'bg-yellow-50 border-yellow-200 shadow-lg scale-105 z-10';
          }

          let icon = <span className={`text-base md:text-xl font-bold ${isDrinkingMode ? 'text-slate-600' : 'text-gray-300'}`}>#{rank}</span>;
          if (rank === 1) icon = '🥇';
          if (rank === 2) icon = '🥈';
          if (rank === 3) icon = '🥉';

          return (
            <div key={team.id} className={`flex items-center justify-between p-3 md:p-5 rounded-xl md:rounded-2xl border transition-all ${bgStyle}`}>
              <div className="flex items-center gap-3 md:gap-5">
                <span className="text-2xl md:text-3xl w-6 md:w-8 text-center">{icon}</span>
                <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                   <AvatarDisplay avatar={team.avatar} size="md" />
                </div>
                <div className="flex flex-col">
                    <span className={`font-black text-base md:text-xl ${isDrinkingMode ? 'text-white' : 'text-gray-800'}`}>{team.name}</span>
                    {rank === 1 && <span className="text-[10px] uppercase font-bold text-yellow-500 tracking-wider">Campeón</span>}
                </div>
              </div>
              <span className={`text-xl md:text-3xl font-black ${isDrinkingMode ? 'text-purple-400' : 'text-indigo-600'}`}>{team.score}</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={onRestart}
        className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]
            ${isDrinkingMode 
                ? 'bg-white text-slate-900 hover:bg-slate-200' 
                : 'bg-gray-900 text-white hover:bg-black'}`}
      >
        Jugar Nueva Partida
      </button>
    </div>
  );
};