import styled from "styled-components";

const Container = styled.button`
  border-radius: 0.47rem;
  background: var(--primary);
  color: var(--light-font);
  font-weight: 700;
  font-size: 1rem;
  border: none;
  height: 2.5rem;
  width: 100%;
  max-width: 20rem;
  transition: all .35s;

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    background: var(--secondary);
  }

  &:disabled {
    background: var(--disabled-color);
  }
`;

export default function Button({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}
