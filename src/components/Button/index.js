import { Container } from "./styles";

export default function Button({children}) {
  return (
    <Container type="button">
      {children}
    </Container>
  )
}
