import { Container, Status } from "./styles";

import close from '../../assets/images/close-icon.svg'

export default function Questions() {
  return (
    <Container>
      <Status>
        <span>200</span>
        <h1>Quiz Católico #156</h1>
        <img src={close} alt="Fechar Página" />

        <div class="status-bar-container">
          <div id="status-bar"></div>
          <span id="status-text">Questão 1 de 10</span>
        </div>
      </Status>
    </Container>
  )
}
