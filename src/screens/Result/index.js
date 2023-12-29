import { Container, QuizResult } from './styles';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import paroquia from '../../assets/images/icon.svg';
import check from '../../assets/images/check-icon.svg';
import { useQuizContext } from '../../context/QuizContext';

export default function Result() {
  const navigate = useNavigate();
  const { correctAnswer, setCorrectAnswer } = useQuizContext();

  function handleFinishQuiz() {
    setCorrectAnswer(0);
    navigate('../');
  }

  return (
    <Container>
      <div>
        <img src={paroquia} alt="Paróquia Nossa Senhora da Glória" />
        <h1>Resultado do Quiz #156</h1>
        <QuizResult>
          <img src={check} alt="Ícone de Correto" />
          <h1>Questões Corretas</h1>
          <span>{correctAnswer}</span>
        </QuizResult>

        {correctAnswer === 10 ? (
          <p>Você foi incrível! Até o doutor angélico teria orgulho de você</p>
        ) : correctAnswer >= 8 ? (
          <p>Parabéns! Você deve estudar bastante o catecismo</p>
        ) : correctAnswer >= 5 ? (
          <p>
            Você se complicou! Seria interessante estudar um pouquinho mais o
            catecismo
          </p>
        ) : correctAnswer >= 3 ? (
          <p>Ave Maria! Depois dessa é até bom se confessar</p>
        ) : (
          <p>Meu irmão! Acho que precisamos falar com o padre</p>
        )}
      </div>

      <Button onClick={handleFinishQuiz}>FINALIZAR</Button>
    </Container>
  );
}
