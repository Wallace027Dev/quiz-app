import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import Button from "../../components/Button";
import { texts } from "../../design/texts";
import { Aside, Quizes, Title } from "../Quizzes/styles";

const journeys = [
  { id: 1, name: "Fundamentos de Programação" },
  { id: 2, name: "Entendendo o Frontend" },
  { id: 3, name: "Entendendo o Backend" },
  { id: 4, name: "Design UI/UX" },
  { id: 5, name: "Tipagem com TypeScript" },
  { id: 6, name: "Desenvolvimento Fullstack" },
  { id: 7, name: "Modelagem de Banco de Dados" },
  { id: 8, name: "Desenvolvedor no Mercado" },
  { id: 9, name: "Extra: Entendendo a área da tecnologia" }
];

export default function Journeys() {
  const navigate = useNavigate();

  const handleClick = (journeyId) => {
    navigate(`/quizzes/${journeyId}`);
  };

  return (
    <Container>
      <Title>
        <h1>
          Escolha sua <span>Jornada</span>
        </h1>
        <p>{texts.descriptions.aboutUs}</p>
        <br />
        <b>{texts.descriptions.goodLucky}</b>
      </Title>
      <Aside>
        <Quizes>
          {journeys.map((j) => (
            <Button key={j.id} onClick={() => handleClick(j.id)}>
              {j.name}
            </Button>
          ))}
        </Quizes>
      </Aside>
    </Container>
  );
}
