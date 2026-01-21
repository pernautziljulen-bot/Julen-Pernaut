import React, { useState } from 'react';
import { CategoryId } from '../types';
import { CATEGORIES } from '../constants';

interface GameSetupProps {
  onStartGame: (selectedCategories: CategoryId[]) => void;
  isGenerating: boolean;
}

export const GameSetup: React.FC<GameSetupProps> = ({ onStartGame, isGenerating }) => {
  const [selected, setSelected] = useState<CategoryId[]>(Object.values(CategoryId));

  const toggleCategory = (id: CategoryId) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

  const handleStart = () => {
    if (selected.length > 0) {
      onStartGame(selected);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Nueva Partida</h2>
        <p className="text-gray-500">Selecciona las categorías para generar tu Trivial personalizado</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {Object.values(CATEGORIES).map((cat) => {
          const isSelected = selected.includes(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`
                relative p-4 rounded-xl transition-all duration-200 flex flex-col items-center justify-center gap-2 border-2
                ${isSelected 
                  ? `${cat.color} text-white border-transparent shadow-md transform scale-105` 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="font-semibold text-sm">{cat.name}</span>
              {isSelected && (
                <div className="absolute top-2 right-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleStart}
          disabled={selected.length === 0 || isGenerating}
          className={`
            w-full md:w-auto px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all
            ${selected.length === 0 || isGenerating
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:scale-105 active:scale-95'
            }
          `}
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generando preguntas...
            </span>
          ) : (
            "Comenzar Juego"
          )}
        </button>
      </div>
      {selected.length === 0 && (
        <p className="text-red-500 text-sm text-center mt-4">Debes seleccionar al menos una categoría.</p>
      )}
    </div>
  );
};