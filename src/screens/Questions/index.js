import { Link } from "react-router-dom";

import { Container, Status } from "./styles";
import StatusBar from "../../components/StatusBar";

import close from '../../assets/images/close-icon.svg'

export default function Questions() {
  return (
    <Container>
      <Status>
        <div className="question-title">
          <span>200</span>
          <h1>Quiz Católico #156</h1>
          <Link to="../">
            <img src={close} alt="Fechar Página" />
          </Link>
        </div>

        <StatusBar />
      </Status>
    </Container>
  )
}
