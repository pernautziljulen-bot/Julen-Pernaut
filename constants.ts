import { Category, CategoryId } from './types';

export const CATEGORIES: Record<CategoryId, Category> = {
  [CategoryId.GEOGRAPHY]: {
    id: CategoryId.GEOGRAPHY,
    name: 'Geografía',
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    icon: '🌍'
  },
  [CategoryId.ENTERTAINMENT]: {
    id: CategoryId.ENTERTAINMENT,
    name: 'Entretenimiento',
    color: 'bg-pink-500',
    textColor: 'text-pink-600',
    icon: '🎭'
  },
  [CategoryId.HISTORY]: {
    id: CategoryId.HISTORY,
    name: 'Historia',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    icon: '📜'
  },
  [CategoryId.ART]: {
    id: CategoryId.ART,
    name: 'Arte y Literatura',
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
    icon: '🎨'
  },
  [CategoryId.SCIENCE]: {
    id: CategoryId.SCIENCE,
    name: 'Ciencias y Naturaleza',
    color: 'bg-green-500',
    textColor: 'text-green-600',
    icon: '🔬'
  },
  [CategoryId.SPORTS]: {
    id: CategoryId.SPORTS,
    name: 'Deportes y Pasatiempos',
    color: 'bg-orange-500',
    textColor: 'text-orange-600',
    icon: '⚽'
  }
};

// Game Configuration
export const TOTAL_ROUNDS = 5;
// Each team answers 1 question per round * Total Rounds
export const QUESTIONS_PER_TEAM = TOTAL_ROUNDS;

// Puntos por dificultad
export const DIFFICULTY_POINTS = {
  'easy': 100,
  'medium': 200,
  'hard': 300
};

export const TEAM_COLORS = [
  'text-red-500',
  'text-blue-500',
  'text-green-500',
  'text-yellow-500',
  'text-purple-500',
  'text-pink-500',
  'text-indigo-500',
  'text-orange-500',
  'text-teal-500',
  'text-gray-600'
];

export const AVATAR_BASES = [
  '🐶', '🐱', '🦊', '🦁', '🐸', '🐨', '🐯', '🐙', '🦄', '🐼', 
  '🐵', '🐷', '🐹', '🐰', '🐻', '🐔', '🐧', '🦖', '👽', '🤖',
  '💀', '🤡', '🤠', '👻', '💩', '🎃', '😈', '👶', '👵', '👮'
];