export enum CategoryId {
  GEOGRAPHY = 'geography',
  ENTERTAINMENT = 'entertainment',
  HISTORY = 'history',
  ART = 'art',
  SCIENCE = 'science',
  SPORTS = 'sports'
}

export interface Category {
  id: CategoryId;
  name: string;
  color: string;
  icon: string;
  textColor: string;
}

export interface Team {
  id: number;
  name: string;
  score: number;
  color: string; // Tailwind class
  avatar: string; // Base emoji
}

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: CategoryId;
  difficulty: 'easy' | 'medium' | 'hard';
}

export enum GameMode {
  NORMAL = 'NORMAL',
  DRINKING = 'DRINKING'
}

export enum GameStatus {
  MENU = 'MENU', // New initial status
  TEAM_SETUP = 'TEAM_SETUP',
  CATEGORY_SETUP = 'CATEGORY_SETUP',
  LOADING = 'LOADING',
  PLAYING = 'PLAYING',
  ROUND_SUMMARY = 'ROUND_SUMMARY',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR'
}

export interface GameState {
  status: GameStatus;
  mode: GameMode; // Track selected mode
  teams: Team[];
  currentTeamIndex: number;
  questions: Question[];
  currentQuestionIndex: number;
  selectedCategories: CategoryId[];
  currentRound: number; // 1 to 5
  loadingMessage?: string;
}