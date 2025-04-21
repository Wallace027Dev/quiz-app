import styled from "styled-components";

export const Container = styled.main`
  padding: 2rem 1rem;
  place-items: center;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 4vh;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0.4rem 1rem;
    border-radius: 1rem;
  }

  form {
    width: 100%;
    max-width: 800px;
    text-align: left;

    & > label {
      font-size: 2.8vh;
      font-weight: 600;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  & > button:first-of-type {
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
