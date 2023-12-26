import { Container } from './styles';

export default function Button({ children, onClick, isDisabled }) {
  return (
    <Container type="button" onClick={onClick} disabled={isDisabled}>
      {children}
    </Container>
  );
}
