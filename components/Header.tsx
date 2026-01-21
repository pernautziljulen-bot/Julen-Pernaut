
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 via-yellow-500 to-indigo-900 flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">Sol y <span className="text-indigo-600">Sombra</span></h1>
        </div>
        <div className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
          Trivia Edition
        </div>
      </div>
    </header>
  );
};
