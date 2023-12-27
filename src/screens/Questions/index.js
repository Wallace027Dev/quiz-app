import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuizContext } from '../../context/QuizContext';
import { useState, useEffect } from 'react';

import { Container, PcStatusBar, Status } from './styles';
import StatusBar from '../../components/StatusBar';
import QuestionOptions from '../../components/QuestionOptions';
import Button from '../../components/Button';
import close from '../../assets/images/close-icon.svg';
import icon from '../../assets/images/icon.svg';

export default function Questions() {
  const navigate = useNavigate();
  const { quizes } = useQuizContext();
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [buttonData, setButtonData] = useState('');

  const isDisabled = !buttonData;

  useEffect(() => {
    if (quizes && quizes.length === 1) {
      const [singleQuiz] = quizes;
      setCurrentQuiz(singleQuiz);
    } else {
      // Se houver um problema com os dados, redirecione ou manipule conforme necessário
      //navigate('/error');
    }
  }, [quizes, navigate]);

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
          <h1>{quizes.name}</h1>
          <Link to="../">
            <img src={close} alt="Fechar Página" />
          </Link>
        </div>

        <div className="phone-status-bar">
          <StatusBar
            totalQuestions={quizes.questions.length}
            currentQuestion={currentQuestion}
          />
        </div>
      </Status>

      <QuestionOptions
        handleButtonData={handleButtonData}
        questions={quizes.questions}
        currentQuestion={currentQuestion}
      />

      <PcStatusBar>
        <Status className="pc-status-bar">
          <StatusBar
            totalQuestions={quizes.questions.length}
            currentQuestion={currentQuestion}
          />
        </Status>

        <Button
          isDisabled={isDisabled}
          onClick={
            currentQuestion === quizes.questions.length
              ? handleFinishQuiz
              : handleNextQuestion
          }
        >
          {currentQuestion === quizes.questions.length
            ? 'CONCLUIR'
            : 'CONTINUE'}
        </Button>
      </PcStatusBar>
    </Container>
  );
}
