import { Link } from 'react-router-dom';
import { useQuizContext } from '../../context/QuizContext';

import { Container, Logo, Quizes, Title } from './styles';
import Button from '../../components/Button';

import logoVertical from '../../assets/images/logo-vertical.svg';
import { useEffect } from 'react';

export default function MainPage({ quizes }) {
  const { updateQuiz } = useQuizContext();

  useEffect(() => {
    // Atualiza o estado no contexto quando necessário
    updateQuiz(quizes);
  }, [quizes, updateQuiz]);

  return (
    <Container>
      <Title>
        <h1>
          <span>Quiz</span> Católico
        </h1>
        <p>
          Antes de começar, recorra à 'santíssima' ajuda! Peça a intercessão de
          seu Santo de devoção para iluminar sua mente e acertar em cheio.
        </p>
        <br />
        <b>Que a sabedoria divina guie suas respostas!</b>
      </Title>

      <Logo>
        <img src={logoVertical} alt="Paróquia Nossa Senhora da Glória" />

        <Quizes>
          {quizes?.length > 0 ? (
            quizes.map((quiz) => (
              <Link to="/questions" key={quiz.id}>
                <Button onClick={() => updateQuiz(quiz)}>{quiz.name}</Button>
              </Link>
            ))
          ) : (
            <h1>Algo de errado aconteceu!</h1>
          )}
        </Quizes>
      </Logo>
    </Container>
  );
}
