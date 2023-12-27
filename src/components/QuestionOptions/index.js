import { useState } from 'react';

import { Container } from './styles';

import check from '../../assets/images/check-icon.svg';

export default function QuestionOptions({ questions, currentQuestion }) {
  const [answerSelected, setAnswerSelected] = useState(null);
  const question = questions[currentQuestion];

  function handleAnswerSelected(answerIndex) {
    if (answerSelected !== null) {
      const prevButton = document.getElementById(`button-${answerSelected}`);
      prevButton.classList.remove('active');
      prevButton.innerHTML = `
        <span>${String.fromCharCode(65 + answerSelected)}</span>
        <p>${getButtonText(answerSelected)}</p>
      `;
    }

    //setButtonData(getButtonText(answerIndex));
    setAnswerSelected(answerIndex);

    const currentButton = document.getElementById(`button-${answerIndex}`);
    currentButton.classList.add('active');
    currentButton.innerHTML = `<span><img src=${check} /></span><p>${getButtonText(
      answerIndex
    )}</p>`;
  }

  function getButtonText(index) {
    const buttonTextArray = [
      question.answer1,
      question.answer2,
      question.answer3,
    ];
    return buttonTextArray[index];
  }

  console.log(questions[currentQuestion]);

  return (
    <>
      {questions && questions.length > 0 && (
        <Container key={(question.id = currentQuestion)}>
          <h1>{question.question}</h1>

          <button
            id="button-0"
            onClick={() => handleAnswerSelected(0)}
            className={`question-btn ${answerSelected === 0 ? 'active' : ''}`}
          >
            <span>A</span>
            <p>{question.answer1}</p>
          </button>
          <button
            id="button-1"
            onClick={() => handleAnswerSelected(1)}
            className={`question-btn ${answerSelected === 1 ? 'active' : ''}`}
          >
            <span>B</span>
            <p>{question.answer2}</p>
          </button>
          <button
            id="button-2"
            onClick={() => handleAnswerSelected(2)}
            className={`question-btn ${answerSelected === 2 ? 'active' : ''}`}
          >
            <span>C</span>
            <p>{question.answer3}</p>
          </button>
          {answerSelected !== null && (
            <p style={{ marginTop: 16, opacity: 0.5, fontSize: 12 }}>
              Tem certeza? Ao prosseguir <u>não poderá</u> mudar sua resposta!
            </p>
          )}
        </Container>
      )}
    </>
  );
}
