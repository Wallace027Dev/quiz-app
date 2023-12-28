import { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function useQuizContext() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [quizes, setQuizes] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const updatePoints = (updatedPoints) => {
    setCorrectAnswer(correctAnswer + updatedPoints);
  };

  const updateQuiz = (updatedQuiz) => {
    // Lógica para atualizar o array de quizes
    setQuizes(updatedQuiz);
  };

  return (
    <QuizContext.Provider value={{ quizes, updatePoints, updateQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}
