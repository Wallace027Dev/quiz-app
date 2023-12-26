import { Link } from 'react-router-dom';

import { Container, Status } from './styles';

import StatusBar from '../../components/StatusBar';
import QuestionOptions from '../../components/QuestionOptions';
import Button from '../../components/Button';

import close from '../../assets/images/close-icon.svg';
import icon from '../../assets/images/icon.svg';

export default function Questions() {
  let totalQuestions = 10;
  let currentQuestion = 10;

  return (
    <Container>
      <div>
        <Status>
          <div className="question-title">
            <div>
              <img src={icon} alt="Paróquia Nossa Senhora da Glória" />
              <span>200</span>
            </div>
            <h1>Quiz Católico #156</h1>
            <Link to="../">
              <img src={close} alt="Fechar Página" />
            </Link>
          </div>

          <StatusBar
            totalQuestions={totalQuestions}
            currentQuestion={currentQuestion}
          />
        </Status>

        <QuestionOptions />
      </div>

      <Button>
        {currentQuestion === totalQuestions ? 'CONCLUIR' : 'CONTINUE'}
      </Button>
    </Container>
  );
}
