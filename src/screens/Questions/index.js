import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuizContext } from '../../context/QuizContext';
import { Container, PcStatusBar, Status } from './styles';
import StatusBar from '../../components/StatusBar';
import QuestionOptions from '../../components/QuestionOptions';
import Button from '../../components/Button';
import close from '../../assets/close-icon.svg';
import correct from '../../assets/check-icon.svg';
import { images } from '../../design/images';

export default function Questions() {
  const navigate = useNavigate();
  const { quizes, correctAnswer } = useQuizContext();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const currentQuiz = quizes;

  useEffect(() => {
    if (!quizes || !currentQuestion) {
      navigate('../');
    }
  }, [quizes, currentQuestion, navigate]);

  const handleIsAnswerSelectedChange = (value) => setIsAnswerSelected(value);

  const handleNextQuestion = () =>
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

  const handleFinishQuiz = () => navigate('/result');

  return (
    <Container>
      <Status>
        <div className="question-title">
          <div>
            <img src={images.logo} alt="Ícone do site" />
            <span>
              {correctAnswer}0 <img src={correct} alt="Respostas corretas" />
            </span>
          </div>
          <h1>{currentQuiz.name}</h1>
          <Link to="../">
            <img src={close} alt="Fechar Página" />
          </Link>
        </div>

        <div className="phone-status-bar">
          <StatusBar
            totalQuestions={currentQuiz.questions?.length}
            currentQuestion={currentQuestion}
          />
        </div>
      </Status>

      <QuestionOptions
        onIsAnswerSelectedChange={handleIsAnswerSelectedChange}
        questions={currentQuiz.questions}
        currentQuestion={currentQuestion}
      />

      <PcStatusBar>
        <Status className="pc-status-bar">
          <StatusBar
            totalQuestions={currentQuiz.questions?.length}
            currentQuestion={currentQuestion}
          />
        </Status>

        <Button
          isDisabled={!isAnswerSelected}
          onClick={
            currentQuestion === currentQuiz.questions?.length
              ? handleFinishQuiz
              : handleNextQuestion
          }
        >
          {currentQuestion === currentQuiz.questions?.length
            ? 'CONCLUIR'
            : 'CONTINUE'}
        </Button>
      </PcStatusBar>
    </Container>
  );
}
