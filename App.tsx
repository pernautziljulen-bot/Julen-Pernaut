import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { GameSetup } from './components/GameSetup';
import { TeamSetup } from './components/TeamSetup';
import { QuestionCard } from './components/QuestionCard';
import { GameOver } from './components/GameOver';
import { RoundSummary } from './components/RoundSummary';
import { MainMenu } from './components/MainMenu';
import { fetchQuestions } from './services/geminiService';
import { CategoryId, GameState, GameStatus, Team, GameMode } from './types';
import { TOTAL_ROUNDS, DIFFICULTY_POINTS } from './constants';

const initialState: GameState = {
  status: GameStatus.MENU,
  mode: GameMode.NORMAL,
  teams: [],
  currentTeamIndex: 0,
  questions: [],
  currentQuestionIndex: 0,
  selectedCategories: [],
  currentRound: 1,
  loadingMessage: ''
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const handleModeSelect = (mode: GameMode) => {
    setGameState(prev => ({
      ...prev,
      mode: mode,
      status: GameStatus.TEAM_SETUP
    }));
  };

  // Helper function to start game logic to avoid code duplication
  const launchGame = async (teams: Team[], categories: CategoryId[], mode: GameMode) => {
    const totalQuestionsNeeded = teams.length * TOTAL_ROUNDS;

    setGameState(prev => ({
      ...prev,
      teams: teams,
      status: GameStatus.LOADING,
      loadingMessage: mode === GameMode.DRINKING 
        ? 'Mezclando preguntas de reggaeton, salseo y cultura pop...' 
        : `Generando ${totalQuestionsNeeded} preguntas para ${TOTAL_ROUNDS} rondas...`,
      selectedCategories: categories
    }));

    try {
      // Updated: Passing 'mode' as the third argument
      const questions = await fetchQuestions(categories, totalQuestionsNeeded, mode);
      
      setGameState(prev => ({
        ...prev,
        status: GameStatus.PLAYING,
        questions: questions,
        currentQuestionIndex: 0,
        currentTeamIndex: 0,
        currentRound: 1,
        loadingMessage: ''
      }));
    } catch (error) {
      console.error(error);
      setGameState(prev => ({
        ...prev,
        status: GameStatus.ERROR,
        loadingMessage: 'Hubo un error al generar las preguntas. Por favor intenta de nuevo.'
      }));
    }
  };

  const handleTeamsConfirmed = (teams: Team[]) => {
    if (gameState.mode === GameMode.DRINKING) {
      // Party Mode: Skip category selection, use ALL categories
      const allCategories = Object.values(CategoryId);
      launchGame(teams, allCategories, GameMode.DRINKING);
    } else {
      // Normal Mode: Proceed to category selection
      setGameState(prev => ({
        ...prev,
        teams: teams,
        status: GameStatus.CATEGORY_SETUP
      }));
    }
  };

  const handleStartGameNormal = (categories: CategoryId[]) => {
    launchGame(gameState.teams, categories, GameMode.NORMAL);
  };

  const handleAnswer = useCallback((isCorrect: boolean) => {
    setGameState(prev => {
      // 1. Calculate Score based on Difficulty
      const currentQuestion = prev.questions[prev.currentQuestionIndex];
      const points = DIFFICULTY_POINTS[currentQuestion.difficulty] || 100;

      const currentTeam = prev.teams[prev.currentTeamIndex];
      const updatedTeams = [...prev.teams];
      
      if (isCorrect) {
        updatedTeams[prev.currentTeamIndex] = {
          ...currentTeam,
          score: currentTeam.score + points
        };
      }

      // 2. Determine Next Turn Logic
      const nextQuestionIndex = prev.currentQuestionIndex + 1;
      
      // Calculate next team index
      let nextTeamIndex = prev.currentTeamIndex + 1;
      let nextStatus = GameStatus.PLAYING;
      let nextRound = prev.currentRound;

      // Check if we finished a "Rotation" (all teams answered once in this round)
      if (nextTeamIndex >= prev.teams.length) {
        // End of rotation
        nextTeamIndex = 0; // Reset to first team
        
        // Show Round Summary
        nextStatus = GameStatus.ROUND_SUMMARY;
      }
      
      // Check if we ran out of questions (End of Game check)
      if (nextQuestionIndex >= prev.questions.length) {
        nextStatus = GameStatus.FINISHED;
      }

      return {
        ...prev,
        teams: updatedTeams,
        currentQuestionIndex: nextQuestionIndex, // Pre-increment index for next render when returning to PLAYING
        currentTeamIndex: nextTeamIndex,
        currentRound: nextRound,
        status: nextStatus
      };
    });
  }, []);

  const handleNextRound = () => {
    setGameState(prev => {
      const nextRound = prev.currentRound + 1;
      
      if (nextRound > TOTAL_ROUNDS) {
         return {
             ...prev,
             status: GameStatus.FINISHED
         };
      }

      return {
        ...prev,
        currentRound: nextRound,
        status: GameStatus.PLAYING
      };
    });
  };

  const handleRestart = () => {
    setGameState(initialState);
  };

  // Dynamic Background based on Mode
  const getBackgroundClass = () => {
    if (gameState.status === GameStatus.MENU) {
      return "bg-gradient-to-br from-indigo-50 via-white to-purple-50";
    }
    if (gameState.mode === GameMode.DRINKING) {
      return "bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black text-white";
    }
    return "bg-[#f8fafc] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-gray-50 text-gray-900";
  };

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-700 ${getBackgroundClass()}`}>
      <Header />
      
      {/* Reduced padding on mobile for better fit */}
      <main className="flex-grow flex flex-col items-center justify-start p-2 md:p-6 relative z-10 w-full overflow-x-hidden">
        
        {gameState.status === GameStatus.MENU && (
          <MainMenu onSelectMode={handleModeSelect} />
        )}

        {gameState.status === GameStatus.TEAM_SETUP && (
          <TeamSetup onTeamsConfirmed={handleTeamsConfirmed} />
        )}

        {gameState.status === GameStatus.CATEGORY_SETUP && (
           <GameSetup 
             onStartGame={handleStartGameNormal} 
             isGenerating={false} 
           />
        )}

        {gameState.status === GameStatus.LOADING && (
          <div className="mt-20 flex flex-col items-center justify-center text-center animate-fade-in px-4">
             <div className={`w-16 h-16 md:w-20 md:h-20 border-4 rounded-full animate-spin mb-8 ${gameState.mode === GameMode.DRINKING ? 'border-pink-500 border-t-transparent' : 'border-indigo-600 border-t-transparent'}`}></div>
             <h3 className={`text-xl md:text-2xl font-bold mb-2 ${gameState.mode === GameMode.DRINKING ? 'text-white' : 'text-gray-800'}`}>{gameState.loadingMessage}</h3>
             <p className={`${gameState.mode === GameMode.DRINKING ? 'text-slate-400' : 'text-gray-500'}`}>La IA está preparando el tablero...</p>
          </div>
        )}

        {gameState.status === GameStatus.ERROR && (
           <div className="mt-20 text-center max-w-md bg-white p-6 rounded-3xl shadow-xl border-l-8 border-red-500 mx-4">
             <div className="text-red-500 text-5xl md:text-6xl mb-4">⚠️</div>
             <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Error de Conexión</h3>
             <p className="text-gray-600 mb-6 text-sm md:text-base">No pudimos conectar con la IA. Verifica tu API Key o intenta más tarde.</p>
             <button 
               onClick={handleRestart}
               className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-600 transition shadow-lg hover:shadow-red-500/30"
             >
               Volver al Inicio
             </button>
           </div>
        )}

        {gameState.status === GameStatus.PLAYING && gameState.questions[gameState.currentQuestionIndex] && (
          <QuestionCard
            question={gameState.questions[gameState.currentQuestionIndex]}
            questionNumber={gameState.currentQuestionIndex + 1}
            totalQuestions={gameState.questions.length}
            currentTeam={gameState.teams[gameState.currentTeamIndex]}
            currentRound={gameState.currentRound}
            totalRounds={TOTAL_ROUNDS}
            onAnswer={handleAnswer}
            gameMode={gameState.mode}
          />
        )}

        {gameState.status === GameStatus.ROUND_SUMMARY && (
            <RoundSummary 
                teams={gameState.teams}
                round={gameState.currentRound}
                totalRounds={TOTAL_ROUNDS}
                gameMode={gameState.mode}
                onNextRound={handleNextRound}
            />
        )}

        {gameState.status === GameStatus.FINISHED && (
          <GameOver
            teams={gameState.teams}
            gameMode={gameState.mode}
            onRestart={handleRestart}
          />
        )}
      </main>

      <footer className={`py-4 md:py-6 text-center text-[10px] md:text-xs opacity-60 ${gameState.mode === GameMode.DRINKING ? 'text-slate-500' : 'text-gray-400'}`}>
        <p>&copy; {new Date().getFullYear()} Trivial AI. Powered by Google Gemini.</p>
      </footer>
    </div>
  );
};

export default App;