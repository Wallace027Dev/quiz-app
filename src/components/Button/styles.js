import styled from "styled-components";

export const Container = styled.button`
  border-radius: 0.47rem;
  background: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colors.disabled : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightFont};
  font-weight: 700;
  font-size: ${({ theme }) => `${theme.typography.fontSize}rem`};
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
    background: ${({ theme }) => theme.colors.primary};
  }
`;
