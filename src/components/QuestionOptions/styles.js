import styled from "styled-components";

export const Container = styled.div`
  max-width: 31.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 2.75rem;
    font-size: ${({ theme }) => `${theme.typography.fontSize * 1.35}rem`};
    font-weight: 700;
  }

  .question-btn {
    width: 27rem;
    min-height: 3.75rem;
    background: ${({ theme }) => theme.typography.fontSizerem};
    border-radius: 0.5rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => `${theme.typography.fontSize}rem`};

    span {
      background: ${({ theme }) => theme.colors.background};
      min-width: 2.3rem;
      height: 2.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1.15rem;
      margin-right: 0.6rem;
      font-weight: 700;
    }

    p {
      max-width: 24rem;
      text-align: start;
    }

    & + button {
      margin-top: 1.88rem;
    }
  }

  @media only screen and (max-width: 425px) {
    h1 {
      margin: 1.5rem 0;
    }

    .question-btn {
      max-width: 18rem;

      p {
        font-size: ${({ theme }) => `${theme.typography.fontSize * 0.9}rem`};
        max-width: 21rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .question-btn {
      width: 21rem;

      p {
        font-size: ${({ theme }) => `${theme.typography.fontSize * 0.9}rem`};
      }
    }
  }

  @media only screen and (min-width: 768px) {
    button:not([disabled]):hover {
      cursor: pointer;
      transition: 0.4s;
      background: ${({ theme }) => theme.colors.secondary};
      opacity: 0.5;
    }

    button[disabled] {
      pointer-events: none;
    }
  }

  .correct {
    background: ${({ theme }) => theme.colors.primary};

    span {
      background: ${({ theme }) => theme.colors.lightFont};
      opacity: 1;
    }
  }

  .incorrect {
    background: red;
    font-weight: 700;
  }
`;

export const ExplicationPar = styled.p`
  margin-top: 16;
  font-size: 14;
  color: ${({ theme }) => theme.colors.primary};
`;
