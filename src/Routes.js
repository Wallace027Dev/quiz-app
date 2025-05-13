import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import Quizzes from "./screens/Quizzes";
import Questions from "./screens/Questions";
import Journeys from "./screens/Journeys";
import Result from "./screens/Result";
import NewQuiz from "./screens/NewQuiz";
import quizes from "./mocks/quizQuestions.json";

function AppRoutes() {
  return (
    <Router>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<Journeys />} />
          <Route
            path="/quizzes/:journeyId"
            element={<Quizzes quizes={quizes} />}
          />
          <Route path="/questions" element={<Questions />} />
          <Route path="/result" element={<Result />} />
          <Route path="/new-quiz" element={<NewQuiz />} />
        </Routes>
      </QuizProvider>
    </Router>
  );
}

export default AppRoutes;
