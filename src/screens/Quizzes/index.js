import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuizContext } from "../../context/QuizContext";
import { Container, Aside, Quizes, Title } from "./styles";
import { texts } from "../../design/texts";
import Button from "../../components/Button";

export default function Quizzes({ quizes }) {
  const { updateQuiz } = useQuizContext();
  const { journeyId } = useParams();
  const filtered = quizes.filter((quiz) => quiz.journeyId === Number(journeyId));

  useEffect(() => {
    updateQuiz(filtered);
  }, [journeyId]);

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

      <Aside>
        <Link to="/">Voltar</Link>
        <Quizes>
          {filtered?.length > 0 ? (
            filtered.map((quiz) => (
              <Link to="/questions" key={quiz.id}>
                <Button onClick={() => updateQuiz(quiz)}>{quiz.name}</Button>
              </Link>
            ))
          ) : (
            <h1>Algo de errado aconteceu!</h1>
          )}
        </Quizes>
      </Aside>
    </Container>
  );
}
