import React from 'react';
import { Container, QuizResult } from './styles';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import check from '../../assets/check-icon.svg';
import { useQuizContext } from '../../context/QuizContext';
import { texts } from '../../design/texts';
import { images } from '../../design/images';

const Result = () => {
  const navigate = useNavigate();
  const { correctAnswer, setCorrectAnswer } = useQuizContext();

  const handleFinishQuiz = () => {
    setCorrectAnswer(0);
    navigate('../');
  };

  const getResultMessage = () => {
    if (correctAnswer === 10) {
      return texts.results.if10;
    } else if (correctAnswer > 8) {
      return texts.results.greaterThan8;
    } else if (correctAnswer > 5) {
      return texts.results.greaterThan5;
    } else if (correctAnswer > 3) {
      return texts.results.greaterThan3;
    } else {
      return texts.results.lessThanOrEqualTo3;
    }
  };

  return (
    <Container>
      <div>
        <img src={images.logo} alt="Paróquia Nossa Senhora da Glória" />
        <h1>Resultado do Quiz</h1>
        <QuizResult>
          <img src={check} alt="Ícone de Correto" />
          <h1>Pontuação final</h1>
          <span>{correctAnswer}0%</span>
        </QuizResult>

        <p>{getResultMessage()}</p>
      </div>

      <Button onClick={handleFinishQuiz}>FINALIZAR</Button>
    </Container>
  );
};

export default Result;
