import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuizContext } from '../../context/QuizContext';
import { Container, Logo, Quizes, Title } from './styles';
import Button from '../../components/Button';
import { texts } from '../../design/texts';
import { images } from '../../design/images';

export default function MainPage({ quizes }) {
  const { updateQuiz } = useQuizContext();

  useEffect(() => {
    updateQuiz(quizes);
  }, [quizes, updateQuiz]);

  return (
    <Container>
      <Title>
        <h1>
          <span>Quiz</span> {texts.headings.title}
        </h1>
        <p>{texts.descriptions.aboutUs}</p>
        <br />
        <b>{texts.descriptions.goodLucky}</b>
      </Title>

      <Logo>
        <img src={images.logo} alt="Ícone do site" />

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
