import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .status-bar {
    min-width: 15rem;
    max-width: 20.935rem;
    width: 100%;
    height: 1.2rem;
    background-color: var(--light-font);
    border: 1px solid var(--disabled);
    border-radius: 1rem;
    margin-right: 0.75rem;

    @media screen and (min-width: 768px) {
      background-color: var(--bg-main);
    }
  }

  .status-fill {
    border-radius: 1rem;
    height: 100%;
    width: ${(props) => props.fillPercentage}%;
    background-color: var(--primary);
    transition: width 0.5s ease-in-out;
  }

  .status-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--gray);
  }
`;
