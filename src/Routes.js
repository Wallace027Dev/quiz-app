import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import MainPage from './screens/MainPage';
import Questions from './screens/Questions';
import Result from './screens/Result';
import quizes from './mocks/quizQuestions';

function AppRoutes() {
  return (
    <Router>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<MainPage quizes={quizes} />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </QuizProvider>
    </Router>
  );
}

export default AppRoutes;
