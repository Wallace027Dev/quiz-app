import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
    padding: 3rem 1.25rem;

    .phone-status-bar {
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;

    > div {
      padding-top: 1rem;
    }

    .phone-status-bar {
      display: none;
    }
  }
`;

export const Status = styled.div`
  width: 100%;
  max-width: 28rem;

  .question-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    div {
      background: var(--light-font);
      border-radius: 0.25rem;
      padding: 0.25rem 0.35rem;
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        height: 1.6rem;
        margin-right: 0.25rem;
      }

      span {
        font-size: 0.875rem;
        font-weight: 700;
        display: flex;
        align-items: center;

        img {
          height: 1.2rem;
          margin: 0;
        }
      }
    }

    h1 {
      font-size: 1.125rem;
      font-weight: 700;
    }

    a {
      img {
        height: 2.25rem;
      }
    }
  }
`;

export const PcStatusBar = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    background: var(--light-font);
    width: 100%;
    height: 6.25rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .pc-status-bar {
      display: none;
    }
  }
`;
