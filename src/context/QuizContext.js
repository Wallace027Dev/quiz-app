import { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function useQuizContext() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [quizes, setQuizes] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const updatePoints = (updatedPoints) => {
    setCorrectAnswer((prevPoints) => prevPoints + updatedPoints);
  };

  const updateQuiz = (updatedQuiz) => {
    setQuizes(updatedQuiz);
  };

  const contextValue = {
    quizes,
    correctAnswer,
    setCorrectAnswer,
    updatePoints,
    updateQuiz,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
}
