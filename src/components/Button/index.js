import { Container } from './styles';

const Button = ({ children, onClick, isDisabled }) => (
  <Container type="button" onClick={onClick} disabled={isDisabled}>
    {children}
  </Container>
);

export default Button;
