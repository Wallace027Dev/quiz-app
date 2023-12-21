import { Link } from "react-router-dom";

import { Container, Logo, Title } from "./styles";
import Button from "../../components/Button";

import logo from '../../assets/images/logo-vertical.svg'

export default function MainPage() {
  return (
    <Container>
      <Title>
        <h1><span>Quiz</span> Católico</h1>
        <p>
          Antes de começar, recorra à 'santíssima' ajuda! Peça a intercessão de seu Santo de devoção para iluminar sua mente e acertar em cheio.
        </p>
        <br />
        <b>
          Que a sabedoria divina guie suas respostas!
        </b>
      </Title>

      <Logo>
        <img src={logo} alt="Paróquia Nossa Senhora da Glória" />
        <Link to="/questions">
          <Button>
            COMEÇAR
          </Button>
        </Link>
      </Logo>
    </Container>
  )
}
