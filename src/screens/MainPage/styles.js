import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  padding: 0 1rem;
  text-align: center;

  
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.48rem;
  color: var(--dark-font);

  span {
    width: 5.2rem;
    height: 2.5rem;
    border-radius: 0.47rem;
    background: var(--secondary);
    padding: 0.16rem 0.68rem;
  }

  p {
    font-size: 1rem;
    margin-top: 1rem;
    opacity: 0.8;
    max-width: 30rem;
  }

  @media screen and (min-width: 1024px) {
    background: var(--secondary);
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    span {
      background: var(--tertiary);
    }
  }
`;

export const Logo = styled.div`
  img {
    margin-bottom: 1rem;
    height: 21rem;
  }

  @media screen and (min-width: 1024px) {  
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 25rem;
    }
  }
`
