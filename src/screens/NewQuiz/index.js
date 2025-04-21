import { useFieldArray, useForm } from "react-hook-form";
import NewQuestionForm from "../../components/NewQuestionForm";
import { ButtonContainer, Container } from "./style";
import Button from "../../components/Button";

export default function NewQuiz() {
  const { register, handleSubmit, reset, watch, control } = useForm({
    defaultValues: {
      id: "",
      name: "",
      questions: [
        {
          question: "",
          explication: "",
          answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
          ]
        }
      ]
    }
  });

  const { fields: questionFields, append: addQuestion } = useFieldArray({
    control,
    name: "questions"
  });

  const onSubmit = (data) => console.log("Quiz final:", data);

  return (
    <Container>
      <h1>Novo quiz</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome do Quiz</label>
        <input
          type="text"
          placeholder="Ex: Fundamentos JS"
          {...register("name", { required: true, minLength: 3 })}
        />

        {questionFields.map((question, questionIndex) => (
          <NewQuestionForm
            key={question.id}
            qIdx={questionIndex}
            r={register}
          />
        ))}

        <ButtonContainer>
          <button
            type="button"
            onClick={() =>
              addQuestion({
                question: "",
                explication: "",
                answers: [
                  { text: "", correct: false },
                  { text: "", correct: false },
                  { text: "", correct: false }
                ]
              })
            }
          >
            Adicionar pergunta
          </button>

          <Button type="submit">Salvar Quiz</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
}
