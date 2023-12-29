import { Container } from './styles';

const StatusBar = ({ currentQuestion, totalQuestions }) => {
  const fillPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <Container fillPercentage={fillPercentage}>
      <div className="status-bar">
        <div className="status-fill" />
      </div>
      <span className="status-text">
        {currentQuestion}/{totalQuestions}
      </span>
    </Container>
  );
};

export default StatusBar;
