import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuizContext } from '../../context/QuizContext';

import { Container } from './styles';

import check from '../../assets/images/check-icon.svg';
import incorrect from '../../assets/images/incorrect-icon.svg';

export default function QuestionOptions({
  questions,
  currentQuestion,
  onIsAnswerSelectedChange,
}) {
  const navigate = useNavigate();
  const { updatePoints } = useQuizContext();
  const [answerSelected, setAnswerSelected] = useState(null);
  const [shuffledButtonTextArray, setShuffledButtonTextArray] = useState([]);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [explication, setExplication] = useState('');
  const buttonRefs = useRef(Array.from({ length: 3 }));

  const question = questions ? questions[currentQuestion - 1] : null;

  onIsAnswerSelectedChange(isAnswerSelected);

  useEffect(() => {
    setExplication('');
  }, [currentQuestion, questions]);

  useEffect(() => {
    try {
      const shuffledAnswers = shuffleArray([
        question?.answer1,
        question?.answer2,
        question?.answer3,
      ]);
      setShuffledButtonTextArray(shuffledAnswers);
      setIsAnswerSelected(false);
    } catch (error) {
      console.error('Ocorreu um erro:', error);
      navigate('../');
    }
  }, [questions, currentQuestion, navigate]);

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
      return;
    }

    const buttonText = getButtonText(answerIndex);
    const currentButton = buttonRefs.current[answerIndex];

    const imageSrc = buttonText === question.answer1 ? check : incorrect;
    const buttonClass =
      buttonText === question.answer1 ? 'correct' : 'incorrect';

    buttonText === question.answer1 && updatePoints(1);

    currentButton.classList.add(buttonClass);
    currentButton.innerHTML = `<span><img src=${imageSrc} /></span><p>${buttonText}</p>`;
    setAnswerSelected(answerIndex);
    setIsAnswerSelected(true);
    setExplication(question.explication);
  }

  function getButtonText(index) {
    return shuffledButtonTextArray[index];
  }

  return (
    <>
      {questions && questions?.length > 0 ? (
        <Container
          key={
            (questions &&
              questions.length > 0 &&
              questions[currentQuestion - 1]?.id) ||
            currentQuestion
          }
        >
          <h1>{question?.question}</h1>

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
              {explication}
            </p>
          )}
        </Container>
      ) : (
        navigate('../')
      )}
    </>
  );
}
