import { GoogleGenAI, Type } from "@google/genai";
import { CategoryId, Question, GameMode } from '../types';
import { LOCAL_QUESTIONS } from '../data/localQuestions';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const fetchQuestions = async (categories: CategoryId[], count: number = 10, gameMode: GameMode = GameMode.NORMAL): Promise<Question[]> => {
  let selectedLocalQuestions: Question[] = [];
  let remainingCount = count;

  // 1. Logic for Local Questions
  // Always try to use local questions first, regardless of GameMode
  const localMatches = LOCAL_QUESTIONS.filter(q => categories.includes(q.category));
  
  // Shuffle local questions
  const shuffledLocal = localMatches.sort(() => 0.5 - Math.random());
  
  // Take as many as needed or available
  const localToTake = Math.min(shuffledLocal.length, count);
  selectedLocalQuestions = shuffledLocal.slice(0, localToTake);
  remainingCount = count - localToTake;

  let apiQuestions: Question[] = [];

  // 2. Fetch remaining from API if needed (Only if we run out of local questions)
  if (remainingCount > 0) {
     if (!apiKey) {
        console.warn("API Key missing, returning only local questions available.");
        return selectedLocalQuestions;
     }

     const model = "gemini-3-flash-preview";
     
     // Generic prompt for filling gaps
     const categoryNames = categories.map(c => c).join(", ");
     const prompt = `Genera ${remainingCount} preguntas de trivia tipo Trivial Pursuit para las siguientes categorías: ${categoryNames}.
     IMPORTANTE: Las preguntas deben tener una dificultad ALEATORIA y MEZCLADA (fácil, media, difícil).
     El idioma debe ser Español.
     Asegúrate de que la respuesta correcta sea clara y verificable.`;

     try {
       const response = await ai.models.generateContent({
         model,
         contents: prompt,
         config: {
           responseMimeType: "application/json",
           responseSchema: {
             type: Type.ARRAY,
             items: {
               type: Type.OBJECT,
               properties: {
                 questionText: {
                   type: Type.STRING,
                   description: "El texto de la pregunta."
                 },
                 options: {
                   type: Type.ARRAY,
                   items: { type: Type.STRING },
                   description: "4 opciones de respuesta posibles."
                 },
                 correctAnswerIndex: {
                   type: Type.INTEGER,
                   description: "El índice (0-3) de la respuesta correcta en el array de opciones."
                 },
                 explanation: {
                   type: Type.STRING,
                   description: "Una breve explicación divertida o curiosa."
                 },
                 category: {
                   type: Type.STRING,
                   enum: Object.values(CategoryId),
                   description: "La categoría a la que pertenece la pregunta."
                 },
                 difficulty: {
                   type: Type.STRING,
                   enum: ['easy', 'medium', 'hard'],
                   description: "Nivel de dificultad."
                 }
               },
               required: ["questionText", "options", "correctAnswerIndex", "explanation", "category", "difficulty"]
             }
           }
         }
       });

       const text = response.text;
       if (text) {
           apiQuestions = JSON.parse(text) as Question[];
       }

     } catch (error) {
       console.error("Error fetching questions from Gemini:", error);
       // If AI fails, return whatever local questions we have
       if (selectedLocalQuestions.length === 0) throw error;
     }
  }

  // Combine and shuffle final result
  const finalQuestions = [...selectedLocalQuestions, ...apiQuestions];
  return finalQuestions.sort(() => 0.5 - Math.random());
};