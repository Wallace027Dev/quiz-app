import styled from 'styled-components';

export const Container = styled.div`
  max-width: 31.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 2.75rem;
    font-size: 1.375rem;
    font-weight: 700;
  }

  .question-btn {
    width: 100%;
    max-width: 28rem;
    height: 3.75rem;
    background: var(--light-font);
    border-radius: 0.5rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.75rem 1rem;
    font-size: 1rem;

    span {
      background: var(--bg-main);
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
      height: 4rem;
      p {
        font-size: 14px;
        max-width: 21rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    button:not([disabled]):hover {
      cursor: pointer;
      transition: 0.4s;
      background: var(--secondary);
      opacity: 0.5;
    }

    button[disabled] {
      pointer-events: none;
    }
  }

  .correct {
    background: var(--primary);

    span {
      background: var(--light-font);
      opacity: 1;
    }
  }

  .incorrect {
    background: red;
    font-weight: 700;
  }
`;
