import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 0.47rem;
  background: ${({ isDisabled }) =>
    isDisabled ? 'var(--gray)' : 'var(--secondary)'};
  color: var(--light-font);
  font-weight: 700;
  font-size: 1rem;
  border: none;
  height: 3.75rem !important;
  width: 100%;
  min-width: 15rem !important;
  max-width: 20rem;
  transition: all 0.35s;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    background: var(--primary);
  }
`;
