import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 1.25rem;
`;

export const Status = styled.div`
  .question-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.25rem;

    span {
      background: var(--light-font);
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      font-weight: 700;
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
`

export const Question = styled.div``;

