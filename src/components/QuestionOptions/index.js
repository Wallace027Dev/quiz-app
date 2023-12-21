import { useState } from 'react';

import { Container } from './styles';

import check from '../../assets/images/check-icon.svg';

export default function QuestionOptions() {
  const [answerSelected, setAnswerSelected] = useState(null);

  function handleAnswerSelected(answerIndex) {
    // Desativa o botão anterior
    if (answerSelected !== null) {
      const prevButton = document.getElementById(`button-${answerSelected}`);
      prevButton.classList.remove('active');
      prevButton.innerHTML = `<span>${String.fromCharCode(
        65 + answerSelected
      )}</span><p>${getButtonText(answerSelected)}</p>`;
    }

    // Ativa o botão atual
    setAnswerSelected(answerIndex);
    const currentButton = document.getElementById(`button-${answerIndex}`);
    currentButton.classList.add('active');
    currentButton.innerHTML = `<span><img src=${check} /></span><p>${getButtonText(
      answerIndex
    )}</p>`;
  }

  // Função para obter o texto original do botão com base no índice
  function getButtonText(index) {
    const buttonTextArray = ['NIFTY50', 'NIFTYNEXT50', 'NIFTYBANK'];
    return buttonTextArray[index];
  }

  return (
    <Container>
      <h1>PREDICT THE TOP LOSER (for tomorrow) across these indices</h1>

      <button
        id="button-0"
        onClick={() => handleAnswerSelected(0)}
        className={`question-btn ${answerSelected === 0 ? 'active' : ''}`}
      >
        <span>A</span>
        <p>NIFTY50</p>
      </button>
      <button
        id="button-1"
        onClick={() => handleAnswerSelected(1)}
        className={`question-btn ${answerSelected === 1 ? 'active' : ''}`}
      >
        <span>B</span>
        <p>NIFTYNEXT50</p>
      </button>
      <button
        id="button-2"
        onClick={() => handleAnswerSelected(2)}
        className={`question-btn ${answerSelected === 2 ? 'active' : ''}`}
      >
        <span>C</span>
        <p>NIFTYBANK</p>
      </button>
      {answerSelected !== null && (
        <p style={{ marginTop: 16, opacity: 0.5, fontSize: 12 }}>
          Tem certeza? Ao prosseguir <u>não poderá</u> mudar sua resposta!
        </p>
      )}
    </Container>
  );
}
