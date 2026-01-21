import React from 'react';
import { GameMode } from '../types';

interface MainMenuProps {
  onSelectMode: (mode: GameMode) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onSelectMode }) => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center min-h-[70vh] py-4 md:py-8">
      
      {/* Dynamic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[-5%] right-[-5%] w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-5%] left-[20%] w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-12 animate-fade-in-down">
          <div className="inline-flex items-center justify-center mb-3 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/60">
            <span className="text-[9px] md:text-xs font-bold text-indigo-900 tracking-widest uppercase">
              Dos Caras, Un Solo Destino
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-gray-800 to-indigo-900 mb-2 md:mb-4 drop-shadow-sm tracking-tight leading-none">
            SOL Y <span className="text-indigo-600">SOMBRA</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-600 font-light max-w-xl mx-auto leading-relaxed px-2">
            Elige tu camino. Brilla bajo el Sol o piérdete en la Sombra.
          </p>
        </div>

        {/* Game Mode Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          
          {/* Desafío Maestro (SOL) */}
          <button
            onClick={() => onSelectMode(GameMode.NORMAL)}
            className="group relative flex flex-col text-left h-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-[1.5rem] md:rounded-[2rem] blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/50 rounded-[1.2rem] md:rounded-[1.5rem] p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col overflow-hidden">
               <div className="absolute -right-6 -top-6 w-32 h-32 bg-orange-50 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
               
               <div className="relative z-10">
                 <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center text-2xl md:text-3xl shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
                    ☀️
                 </div>
                 
                 <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                   Desafío al Sol
                 </h2>
                 
                 <div className="flex gap-1.5 mb-3">
                    <span className="bg-orange-100 text-orange-700 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Cultura
                    </span>
                    <span className="bg-yellow-100 text-yellow-700 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Maestría
                    </span>
                 </div>

                 <p className="text-gray-600 text-xs md:text-base mb-4 leading-snug">
                   Preguntas clásicas de sabiduría. Demuestra quién brilla más con conocimientos puros.
                 </p>
                 
                 <div className="mt-auto flex items-center font-bold text-orange-600 text-sm md:text-base group-hover:translate-x-1 transition-transform">
                    Comenzar <svg className="w-3 h-3 md:w-4 md:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                 </div>
               </div>
            </div>
          </button>

          {/* Noche de Copas (SOMBRA) */}
          <button
            onClick={() => onSelectMode(GameMode.DRINKING)}
            className="group relative flex flex-col text-left h-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-800 rounded-[1.5rem] md:rounded-[2rem] blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative h-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-[1.2rem] md:rounded-[1.5rem] p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col overflow-hidden">
               <div className="absolute -right-6 -top-6 w-32 h-32 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-2xl opacity-30"></div>
               
               <div className="relative z-10">
                 <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-purple-900 rounded-xl flex items-center justify-center text-2xl md:text-3xl shadow-md mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
                    🌑
                 </div>
                 
                 <h2 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">
                   Ruta en la Sombra
                 </h2>

                 <div className="flex gap-1.5 mb-3">
                    <span className="bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Fiesta
                    </span>
                    <span className="bg-purple-900/50 text-purple-300 border border-purple-500/30 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Copas
                    </span>
                 </div>

                 <p className="text-slate-300 text-xs md:text-base mb-4 leading-snug">
                   La cara oscura. Reggaeton y preguntas para la previa. Si fallas, la sombra castiga.
                 </p>
                 
                 <div className="mt-auto flex items-center font-bold text-indigo-400 text-sm md:text-base group-hover:translate-x-1 transition-transform">
                    Entrar <svg className="w-3 h-3 md:w-4 md:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                 </div>
               </div>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};
