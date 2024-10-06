import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../../context/QuizContext";
import { Container, ExplicationPar } from "./styles";
import check from "../../assets/check-icon.svg";
import incorrect from "../../assets/incorrect-icon.svg";

// Componente que renderiza as opções de resposta da pergunta
export default function QuestionOptions({
  questions, // Lista de perguntas
  currentQuestion, // Índice da pergunta atual
  onIsAnswerSelectedChange // Função callback para notificar a seleção de resposta
}) {
  const navigate = useNavigate();
  const { updatePoints } = useQuizContext(); // Função para atualizar os pontos no contexto do quiz
  const [answerSelected, setAnswerSelected] = useState(null); // Armazena o índice da resposta selecionada
  const [shuffledAnswers, setShuffledAnswers] = useState([]); // Armazena as respostas embaralhadas
  const [isAnswerSelected, setIsAnswerSelected] = useState(false); // Indica se uma resposta foi selecionada
  const [explication, setExplication] = useState(""); // Explicação da resposta correta
  const buttonRefs = useRef(Array.from({ length: 3 })); // Referências para os botões das respostas

  // Obtém a pergunta atual com base no índice
  const question = questions ? questions[currentQuestion - 1] : null;

  // Reseta a explicação quando a pergunta atual ou a lista de perguntas muda
  useEffect(() => {
    setExplication("");
  }, [currentQuestion, questions]);

  // Embaralha as respostas toda vez que a pergunta atual ou as perguntas mudam
  useEffect(() => {
    try {
      const shuffled = shuffleArray(question?.answers || []); // Embaralha as respostas
      setShuffledAnswers(shuffled); // Atualiza o estado com as respostas embaralhadas
      setIsAnswerSelected(false); // Reseta o estado de seleção de resposta
    } catch (error) {
      console.error("Ocorreu um erro:", error);
      navigate("../");
    }
  }, [questions, currentQuestion, navigate]);

  // Função para embaralhar um array usando o algoritmo de Fisher-Yates
  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Seleciona um índice aleatório
      // Troca os elementos na posição i e j
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i]
      ];
    }
    return shuffledArray;
  };

  // Função que lida com a seleção de uma resposta pelo usuário
  const handleAnswerSelected = (answerIndex) => {
    if (isAnswerSelected) { // Se uma resposta já foi selecionada, não faz nada
      return;
    }

    const currentButton = buttonRefs.current[answerIndex]; // Referência ao botão clicado

    // Verifica se a resposta selecionada é correta
    const isCorrect = shuffledAnswers[answerIndex].correct; // Usa o índice da resposta embaralhada

    const imageSrc = isCorrect ? check : incorrect; // Define a imagem a ser exibida
    const buttonClass = isCorrect ? "correct" : "incorrect"; // Define a classe CSS do botão
    const buttonText = shuffledAnswers[answerIndex].text; // Obtém o texto da resposta

    // Se a resposta estiver correta, atualiza os pontos
    isCorrect && updatePoints(1);

    // Adiciona a classe ao botão e define o conteúdo do botão
    currentButton.classList.add(buttonClass);
    currentButton.innerHTML = `<span><img src=${imageSrc} /></span><p>${buttonText}</p>`;

    setAnswerSelected(answerIndex); // Armazena a resposta selecionada
    setIsAnswerSelected(true); // Indica que uma resposta foi selecionada
    setExplication(question.explication); // Define a explicação da resposta
    onIsAnswerSelectedChange(true); // Notifica que uma resposta foi selecionada
  };

  return (
    <>
      {questions && questions?.length > 0 ? ( // Verifica se existem perguntas
        <Container
          key={
            (questions &&
              questions.length > 0 &&
              questions[currentQuestion - 1]?.id) ||
            currentQuestion
          }
        >
          <h1>{question?.question}</h1> {/* Exibe a pergunta atual */}

          {/* Mapeia as respostas embaralhadas e cria um botão para cada uma */}
          {shuffledAnswers.map((answer, index) => (
            <button
              key={`button-${index}`}
              ref={(el) => (buttonRefs.current[index] = el)} // Atribui a referência do botão
              onClick={() => handleAnswerSelected(index)} // Adiciona um manipulador de clique
              className="question-btn"
              disabled={isAnswerSelected} // Desabilita o botão se uma resposta foi selecionada
            >
              <span>{String.fromCharCode(65 + index)}</span> {/* Exibe a letra da resposta (A, B, C, ...) */}
              <p>{answer.text}</p>
            </button>
          ))}

          {/* Se uma resposta foi selecionada, exibe a explicação */}
          {answerSelected !== null && (
            <ExplicationPar>{explication}</ExplicationPar>
          )}
        </Container>
      ) : (
        navigate("../") // Se não houver perguntas, redireciona para a página anterior
      )}
    </>
  );
}
