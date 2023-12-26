import { Container, QuizResult } from './styles';

import Button from '../../components/Button';

import paroquia from '../../assets/images/icon.svg';
import check from '../../assets/images/check-icon.svg';

export default function Result() {
  return (
    <Container>
      <div>
        <img src={paroquia} alt="Paróquia Nossa Senhora da Glória" />
        <h1>Resultado do Quiz #156</h1>

        <QuizResult>
          <img src={check} alt="Ícone de Correto" />
          <h1>Questões Corretas</h1>
          <span>4</span>
        </QuizResult>
      </div>

      <Button>FINALIZAR</Button>
    </Container>
  );
}
