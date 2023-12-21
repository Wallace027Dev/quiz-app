import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./screens/MainPage";
import Questions from "./screens/Questions";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  )
}
