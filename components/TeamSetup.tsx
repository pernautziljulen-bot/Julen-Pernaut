import React, { useState } from 'react';
import { Team } from '../types';
import { TEAM_COLORS, AVATAR_BASES } from '../constants';
import { AvatarDisplay } from './AvatarDisplay';

interface TeamSetupProps {
  onTeamsConfirmed: (teams: Team[]) => void;
}

interface TempTeam {
  name: string;
  avatar: string;
  color: string;
}

export const TeamSetup: React.FC<TeamSetupProps> = ({ onTeamsConfirmed }) => {
  const [teamCount, setTeamCount] = useState<number>(2);
  const [teams, setTeams] = useState<TempTeam[]>(
    Array.from({ length: 10 }, (_, i) => ({
      name: `Equipo ${i + 1}`,
      avatar: AVATAR_BASES[i % AVATAR_BASES.length],
      // Change: Store the full tailwind text class
      color: TEAM_COLORS[i % TEAM_COLORS.length] 
    }))
  );

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleCountChange = (delta: number) => {
    setTeamCount(prev => Math.max(2, Math.min(10, prev + delta)));
  };

  const handleNameChange = (index: number, name: string) => {
    const newTeams = [...teams];
    newTeams[index] = { ...newTeams[index], name };
    setTeams(newTeams);
  };

  const handleAvatarChange = (index: number, avatar: string) => {
    const newTeams = [...teams];
    newTeams[index] = { ...newTeams[index], avatar };
    setTeams(newTeams);
  };

  const handleConfirm = () => {
    const finalTeams: Team[] = teams.slice(0, teamCount).map((t, i) => ({
      id: i,
      name: t.name || `Equipo ${i + 1}`,
      score: 0,
      color: t.color,
      avatar: t.avatar
    }));
    onTeamsConfirmed(finalTeams);
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in-up relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">Configuración de Equipos</h2>
        <p className="text-gray-500 text-lg">Personaliza quiénes van a competir hoy</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
        
        {/* Controls */}
        <div className="flex flex-col items-center justify-center mb-10">
          <label className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Número de Equipos</label>
          <div className="flex items-center gap-8 bg-gray-50 p-2 rounded-full shadow-inner">
            <button 
              onClick={() => handleCountChange(-1)}
              disabled={teamCount <= 2}
              className="w-14 h-14 rounded-full bg-white text-gray-800 shadow-md hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-2xl font-bold disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed text-blue-600"
            >
              −
            </button>
            <span className="text-5xl font-black text-gray-800 w-16 text-center tabular-nums">{teamCount}</span>
            <button 
              onClick={() => handleCountChange(1)}
              disabled={teamCount >= 10}
              className="w-14 h-14 rounded-full bg-white text-gray-800 shadow-md hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-2xl font-bold disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed text-blue-600"
            >
              +
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {teams.slice(0, teamCount).map((team, idx) => (
            <div key={idx} className="group relative bg-gray-50 p-4 rounded-2xl border-2 border-transparent hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                {/* Avatar Button - Now Transparent with color text */}
                <button 
                  onClick={() => setEditingIndex(idx)}
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer overflow-visible border-2 border-dashed border-gray-300 hover:border-blue-400`}
                >
                  <AvatarDisplay avatar={team.avatar} size="lg" />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-1.5 shadow-sm border border-white">
                     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                  </div>
                </button>
                
                <div className="flex-1">
                  <label className={`text-xs font-bold uppercase tracking-wider block mb-1 ${team.color}`}>Nombre del Equipo</label>
                  <input
                    type="text"
                    value={team.name}
                    onChange={(e) => handleNameChange(idx, e.target.value)}
                    className={`w-full bg-transparent border-b-2 border-gray-200 focus:border-current outline-none font-bold text-xl placeholder-gray-300 transition-colors pb-1 ${team.color}`}
                    placeholder={`Equipo ${idx + 1}`}
                    maxLength={15}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            className="w-full md:w-auto px-12 py-5 bg-gray-900 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
          >
            <span>Siguiente</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </div>

      {/* Avatar Editor Modal */}
      {editingIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
            <div className="p-6 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">Elige tu Avatar</h3>
              <button onClick={() => setEditingIndex(null)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-center mb-8">
                 <div className={`w-32 h-32 flex items-center justify-center animate-bounce`}>
                    <AvatarDisplay 
                       avatar={teams[editingIndex].avatar} 
                       size="xl" 
                    />
                 </div>
              </div>

              <div className="h-64 overflow-y-auto grid grid-cols-5 gap-3 p-2">
                  {AVATAR_BASES.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => handleAvatarChange(editingIndex, emoji)}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl hover:bg-gray-100 transition-transform hover:scale-110 ${teams[editingIndex].avatar === emoji ? 'bg-blue-100 scale-110' : ''}`}
                    >
                      {emoji}
                    </button>
                  ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-100">
               <button 
                 onClick={() => setEditingIndex(null)}
                 className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-black transition-all"
               >
                 Confirmar Avatar
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};