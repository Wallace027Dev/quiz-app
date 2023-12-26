import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 0.47rem;
  background: var(--secondary);
  color: var(--light-font);
  font-weight: 700;
  font-size: 1rem;
  border: none;
  height: 2.5rem;
  width: 100%;
  min-width: 15rem;
  max-width: 20rem;
  transition: all 0.35s;

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    background: var(--primary);
  }

  &:disabled {
    background: var(--gray);
    opacity: 0.5;
  }
`;
