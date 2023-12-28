import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuizContext } from '../../context/QuizContext';
import { useState } from 'react';

import { Container, PcStatusBar, Status } from './styles';

import StatusBar from '../../components/StatusBar';
import QuestionOptions from '../../components/QuestionOptions';
import Button from '../../components/Button';

import close from '../../assets/images/close-icon.svg';
import icon from '../../assets/images/icon.svg';

export default function Questions() {
  const navigate = useNavigate();
  const { quizes } = useQuizContext();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [buttonData, setButtonData] = useState('');

  const isDisabled = !buttonData;
  const currentQuiz = quizes;

  function handleButtonData(data) {
    setButtonData(data);
  }

  function handleNextQuestion() {
    // Lógica para avançar para a próxima pergunta
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  }

  function handleFinishQuiz() {
    // Lógica para concluir o quiz
    // Redireciona ou executa ação conforme necessário
    navigate('/result');
  }

  if (!quizes) {
    return <h1>Erro na página</h1>;
  }

  return (
    <Container>
      <Status>
        <div className="question-title">
          <div>
            <img src={icon} alt="Paróquia Nossa Senhora da Glória" />
            <span>200</span>
          </div>
          <h1>{currentQuiz.name}</h1>
          <Link to="../">
            <img src={close} alt="Fechar Página" />
          </Link>
        </div>

        <div className="phone-status-bar">
          <StatusBar
            totalQuestions={currentQuiz.questions.length}
            currentQuestion={currentQuestion}
          />
        </div>
      </Status>

      <QuestionOptions
        handleButtonData={handleButtonData}
        questions={currentQuiz.questions}
        currentQuestion={currentQuestion}
      />

      <PcStatusBar>
        <Status className="pc-status-bar">
          <StatusBar
            totalQuestions={currentQuiz.questions.length}
            currentQuestion={currentQuestion}
          />
        </Status>

        <Button
          isDisabled={isDisabled}
          onClick={
            currentQuestion === currentQuiz.questions.length
              ? handleFinishQuiz
              : handleNextQuestion
          }
        >
          {currentQuestion === currentQuiz.questions.length
            ? 'CONCLUIR'
            : 'CONTINUE'}
        </Button>
      </PcStatusBar>
    </Container>
  );
}
