import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../../context/QuizContext";
import { Container, ExplicationPar } from "./styles";
import check from "../../assets/check-icon.svg";
import incorrect from "../../assets/incorrect-icon.svg";

export default function QuestionOptions({
  questions,
  currentQuestion,
  onIsAnswerSelectedChange
}) {
  const navigate = useNavigate();
  const { updatePoints } = useQuizContext();
  const [answerSelected, setAnswerSelected] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [explication, setExplication] = useState("");
  const buttonRefs = useRef(Array.from({ length: 3 }));

  const question = questions ? questions[currentQuestion - 1] : null;

  useEffect(() => {
    setExplication("");
  }, [currentQuestion, questions]);

  useEffect(() => {
    try {
      const shuffled = shuffleArray(question?.answers || []);
      setShuffledAnswers(shuffled);
      setIsAnswerSelected(false);
    } catch (error) {
      console.error("Ocorreu um erro:", error);
      navigate("../");
    }
  }, [questions, currentQuestion, navigate]);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i]
      ];
    }
    return shuffledArray;
  };

  const handleAnswerSelected = (answerIndex) => {
    if (isAnswerSelected) {
      return;
    }

    const currentButton = buttonRefs.current[answerIndex];

    const isCorrect = question.answers[answerIndex].correct;

    const imageSrc = isCorrect ? check : incorrect;
    const buttonClass = isCorrect ? "correct" : "incorrect";
    const buttonText = question.answers[answerIndex].text;

    isCorrect && updatePoints(1);

    currentButton.classList.add(buttonClass);
    currentButton.innerHTML = `<span><img src=${imageSrc} /></span><p>${buttonText}</p>`;

    setAnswerSelected(answerIndex);
    setIsAnswerSelected(true);
    setExplication(question.explication);
    onIsAnswerSelectedChange(true);
  };

  return (
    <>
      {questions && questions?.length > 0 ? (
        <Container
          key={
            (questions &&
              questions.length > 0 &&
              questions[currentQuestion - 1]?.id) ||
            currentQuestion
          }
        >
          <h1>{question?.question}</h1>

          {shuffledAnswers.map((answer, index) => (
            <button
              key={`button-${index}`}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => handleAnswerSelected(index)}
              className="question-btn"
              disabled={isAnswerSelected}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              <p>{answer.text}</p>
            </button>
          ))}

          {answerSelected !== null && (
            <ExplicationPar>{explication}</ExplicationPar>
          )}
        </Container>
      ) : (
        navigate("../")
      )}
    </>
  );
}
