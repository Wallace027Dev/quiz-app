import styled from 'styled-components';

export const Container = styled.div`
  max-width: 40rem;

  h1 {
    margin: 2.75rem 0 4rem 0;
    font-size: 1.375rem;
    font-weight: 700;
  }

  .question-btn {
    width: 100%;
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
      width: 2.3rem;
      height: 2.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1.15rem;
      margin-right: 0.6rem;
      font-weight: 700;
    }

    &:hover {
      cursor: pointer;
      transition: 0.4s;
      background: var(--secondary);
      opacity: 0.5;
    }

    & + button {
      margin-top: 1.88rem;
    }
  }

  .active {
    background: var(--primary);

    span {
      background: var(--light-font);
      opacity: 1;
    }
  }
`;
