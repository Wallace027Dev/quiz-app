import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Container, PcStatusBar, Status } from './styles';

import StatusBar from '../../components/StatusBar';
import QuestionOptions from '../../components/QuestionOptions';
import Button from '../../components/Button';

import close from '../../assets/images/close-icon.svg';
import icon from '../../assets/images/icon.svg';

export default function Questions() {
  const [buttonData, setButtonData] = useState('');

  const isDisabled = !buttonData;

  function handleButtonData(buttonData) {
    setButtonData(buttonData);
  }

  function handleClick() {
    alert(buttonData);
  }

  let totalQuestions = 10;
  let currentQuestion = 8;

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

          <div className="phone-status-bar">
            <StatusBar
              totalQuestions={totalQuestions}
              currentQuestion={currentQuestion}
            />
          </div>
        </Status>

        <QuestionOptions handleButtonData={handleButtonData} />
      </div>

      <PcStatusBar>
        <Status className="pc-status-bar">
          <StatusBar
            totalQuestions={totalQuestions}
            currentQuestion={currentQuestion}
          />
        </Status>

        <Button onClick={handleClick} isDisabled={isDisabled}>
          {currentQuestion === totalQuestions ? 'CONCLUIR' : 'CONTINUE'}
        </Button>
      </PcStatusBar>
    </Container>
  );
}
