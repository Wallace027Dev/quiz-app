import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 3rem 1.25rem;

  img {
    height: 9.45rem;
  }

  h1 {
    font-size: 1.375rem;
    margin: 2.55rem 0 3.6rem 0;
  }
`;

export const QuizResult = styled.div`
  background: var(--light-font);
  border-radius: 0.5rem;
  width: 20rem;
  height: 4.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2rem;
    background: var(--bg-main);
    padding: 0.15rem;
    border-radius: 1rem;
  }

  h1 {
    font-size: 1rem;
    margin: auto;
  }

  span {
    font-size: 1rem;
    font-weight: 700;
  }
`;
