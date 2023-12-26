import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 3rem 1.25rem;

  .phone-status-bar {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

export const PcStatusBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 13rem;

  @media screen and (max-width: 1024px) {
    width: 20rem;

    .pc-status-bar {
      display: none;
    }
  }
`;

export const Status = styled.div`
  .question-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.25rem;

    div {
      background: var(--light-font);
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      display: flex;
      align-items: center;

      img {
        height: 1.5rem;
        margin-right: 0.25rem;
      }

      span {
        font-size: 0.875rem;
        font-weight: 700;
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

export const Question = styled.div``;
