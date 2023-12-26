import { Container } from './styles';

export default function StatusBar({ currentQuestion, totalQuestions }) {
  let fillPercentage = (currentQuestion / totalQuestions) * 100;

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
}
