import { useState, useRef, useEffect } from 'react';
import { Container } from './styles';
import check from '../../assets/images/check-icon.svg';
import incorrect from '../../assets/images/incorrect-icon.svg';

export default function QuestionOptions({ questions, currentQuestion }) {
  const [answerSelected, setAnswerSelected] = useState(null);
  const [shuffledButtonTextArray, setShuffledButtonTextArray] = useState([]);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const question = questions[currentQuestion - 1];
  const buttonRefs = useRef(Array.from({ length: 3 }));

  useEffect(() => {
    const shuffledAnswers = shuffleArray([
      question.answer1,
      question.answer2,
      question.answer3,
    ]);
    setShuffledButtonTextArray(shuffledAnswers);
    setIsAnswerSelected(false); // Redefinir o estado ao mudar a pergunta
  }, [questions, currentQuestion]);

  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  function handleAnswerSelected(answerIndex) {
    if (isAnswerSelected) {
      // Se uma resposta já foi selecionada (certa ou errada), não faz nada
      return;
    }

    const buttonText = getButtonText(answerIndex);
    const currentButton = buttonRefs.current[answerIndex];

    const imageSrc = buttonText === question.answer1 ? check : incorrect;
    const buttonClass =
      buttonText === question.answer1 ? 'correct' : 'incorrect';

    currentButton.classList.add(buttonClass);
    currentButton.innerHTML = `<span><img src=${imageSrc} /></span><p>${buttonText}</p>`;
    setAnswerSelected(answerIndex);
    setIsAnswerSelected(true); // Define que uma resposta foi selecionada
  }

  function getButtonText(index) {
    return shuffledButtonTextArray[index];
  }

  return (
    <>
      {questions && questions.length > 0 && (
        <Container key={(question.id = currentQuestion)}>
          <h1>{question.question}</h1>

          {shuffledButtonTextArray.map((buttonText, index) => (
            <button
              key={`button-${index}`}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => handleAnswerSelected(index)}
              className="question-btn"
              disabled={isAnswerSelected} // Desativa todos os botões se uma resposta foi selecionada
            >
              <span>{String.fromCharCode(65 + index)}</span>
              <p>{buttonText}</p>
            </button>
          ))}

          {answerSelected !== null && (
            <p
              style={{
                marginTop: 16,
                opacity: 0.5,
                fontSize: 14,
                color: '#31cd63',
              }}
            >
              {question.explication}
            </p>
          )}
        </Container>
      )}
    </>
  );
}
