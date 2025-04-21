import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h2`
  font-size: 2.4vh;
  margin: 1rem 0 0.4rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  margin-bottom: 0.4rem;
`;

export const QuestionContainer = styled.div`
  margin-bottom: 0.8rem;

  & > input {
    margin-bottom: 0.4rem;
  }
`;

export const IsCorrectCheckbox = styled.label`
  display: flex;
  gap: 0.5rem;

  input {
    width: 1vw;
    height: 1vh;
    cursor: pointer;
  }
`;