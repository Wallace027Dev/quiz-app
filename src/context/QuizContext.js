import { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function useQuizContext() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [quizes, setQuizes] = useState([]);

  const updateQuiz = (updatedQuiz) => {
    // Lógica para atualizar o array de quizes
    setQuizes(updatedQuiz);
  };

  return (
    <QuizContext.Provider value={{ quizes, updateQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}
