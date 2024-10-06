import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 3rem 1.25rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightFont};

  h1 {
    margin-bottom: 2rem;
  }

  span {
    width: 5.2rem;
    height: 2.5rem;
    border-radius: 0.47rem;
    background: ${({ theme }) => theme.colors.secondary};
    padding: 0.16rem 0.68rem;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    opacity: 0.8;
    max-width: 30rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.48rem;
    background: ${({ theme }) => theme.colors.secondary};
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.background};

    span {
      background: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;


export const Logo = styled.div`
  img {
    margin-bottom: 3rem;
    height: 18rem;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;

    img {
      height: 25rem;
    }
  }
`;

export const Quizes = styled.div`
  display: flex;
  flex-direction: column;

  a {
    flex-grow: 1;
    margin: 0 0.25rem 1rem 0.25rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    a {
      flex-basis: calc(50% - 0.5rem);
    }
  }
`;
