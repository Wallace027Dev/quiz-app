import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .status-bar {
    min-width: 15rem;
    width: 100%;
    height: 1.2rem;
    background-color: ${({ theme }) => theme.colors.lightFont};
    border: 1px solid ${({ theme }) => theme.colors.disabled};
    border-radius: 1rem;
    margin-right: 0.75rem;

    @media screen and (min-width: 768px) {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }

  .status-fill {
    border-radius: 1rem;
    height: 100%;
    width: ${({ fillPercentage }) => `${fillPercentage}%`};
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.5s ease-in-out;
  }

  .status-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.disabled};
  }
`;
