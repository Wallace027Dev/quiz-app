import styled from "styled-components";

export const Container = styled.button`
  border-radius: 0.47rem;
  border: none;
  background: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colors.disabled : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightFont};
  font-weight: 600;
  font-size: ${({ theme }) => `${theme.typography.fontSize}rem`};
  height: 3.75rem !important;
  max-width: 20rem;
  min-width: 16rem !important;
  transition: all 0.35s;
  text-transform: uppercase;
  text-align: center;
  width: 100%;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
