import { Container, IsCorrectCheckbox, QuestionContainer, SubTitle, TextArea } from "./style";

export default function NewQuestionForm({ qIdx, r }) {
  return (
    <Container>
      <SubTitle>Pergunta {qIdx + 1}</SubTitle>

      <TextArea
        placeholder="Enunciado da pergunta"
        {...r(`questions.${qIdx}.question`, {
          required: true
        })}
      />

      <TextArea
        placeholder="Explicação da resposta"
        {...r(`questions.${qIdx}.explication`)}
      />

      {[0, 1, 2].map((aIdx) => (
        <QuestionContainer key={aIdx}>
          <input
            placeholder={`Resposta ${aIdx + 1}`}
            {...r(`questions.${qIdx}.answers.${aIdx}.text`, {
              required: true
            })}
          />
          <IsCorrectCheckbox>
            <input
              type="checkbox"
              {...r(`questions.${qIdx}.answers.${aIdx}.correct`)}
            />
            Correta?
          </IsCorrectCheckbox>
        </QuestionContainer>
      ))}
    </Container>
  );
}
