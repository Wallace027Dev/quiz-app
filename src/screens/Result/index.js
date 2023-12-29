import React from 'react';
import { Container, QuizResult } from './styles';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import paroquia from '../../assets/images/icon.svg';
import check from '../../assets/images/check-icon.svg';
import { useQuizContext } from '../../context/QuizContext';

const Result = () => {
  const navigate = useNavigate();
  const { correctAnswer, setCorrectAnswer } = useQuizContext();

  const handleFinishQuiz = () => {
    setCorrectAnswer(0);
    navigate('../');
  };

  const getResultMessage = () => {
    if (correctAnswer === 10) {
      return 'Você foi incrível! Até o doutor angélico teria orgulho de você';
    } else if (correctAnswer >= 8) {
      return 'Parabéns! Você deve estudar bastante o catecismo';
    } else if (correctAnswer >= 5) {
      return 'Você se complicou! Seria interessante estudar um pouquinho mais o catecismo';
    } else if (correctAnswer >= 3) {
      return 'Ave Maria! Depois dessa é até bom se confessar';
    } else {
      return 'Meu irmão! Acho que precisamos falar com o padre';
    }
  };

  return (
    <Container>
      <div>
        <img src={paroquia} alt="Paróquia Nossa Senhora da Glória" />
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
