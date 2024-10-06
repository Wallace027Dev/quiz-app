const quizQuestions = [
  {
    id: 1,
    name: "JavaScript Básico Quiz",
    questions: [
      {
        id: 1,
        question:
          "Qual das opções é usada para declarar uma variável em JavaScript?",
        explication:
          "A palavra-chave correta para declarar variáveis em JavaScript é `let`, `const` ou `var`.",
        answers: [
          { id: 1, text: "var", correct: true },
          { id: 2, text: "let", correct: true },
          { id: 3, text: "def", correct: false }
        ]
      },
      {
        id: 2,
        question: "O que o método `Array.map()` faz?",
        explication:
          "O `map()` cria um novo array com os resultados da função aplicada em cada elemento do array original.",
        answers: [
          { id: 1, text: "Modifica o array original", correct: false },
          { id: 2, text: "Retorna um novo array", correct: true },
          { id: 3, text: "Filtra os valores do array", correct: false }
        ]
      },
      {
        id: 3,
        question: "Como você converte uma string para um número em JavaScript?",
        explication:
          "Funções como `Number()`, `parseInt()`, ou `parseFloat()` podem ser usadas para converter uma string para número.",
        answers: [
          { id: 1, text: "Number()", correct: true },
          { id: 2, text: "toString()", correct: false },
          { id: 3, text: "parseInt()", correct: true }
        ]
      },
      {
        id: 4,
        question: "O que `NaN` significa em JavaScript?",
        explication:
          '`NaN` significa "Not-a-Number" e é retornado quando uma operação não retorna um número válido.',
        answers: [
          { id: 1, text: "Novo Array Numérico", correct: false },
          { id: 2, text: "Not-a-Number", correct: true },
          { id: 3, text: "Nome de uma variável inválida", correct: false }
        ]
      },
      {
        id: 5,
        question: "Qual é o valor de `typeof null` em JavaScript?",
        explication:
          'O valor de `typeof null` é um bug histórico, retornando "object".',
        answers: [
          { id: 1, text: "null", correct: false },
          { id: 2, text: "undefined", correct: false },
          { id: 3, text: "object", correct: true }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "HTML Básico",
    questions: [
      {
        id: 1,
        question: "Qual é o propósito da tag `<title>` no HTML?",
        explication:
          "A tag `<title>` define o título da página, que aparece na aba do navegador.",
        answers: [
          { id: 1, text: "Exibe o título no corpo da página", correct: false },
          {
            id: 2,
            text: "Define o título exibido na aba do navegador",
            correct: true
          },
          { id: 3, text: "Define o título de um parágrafo", correct: false }
        ]
      },
      {
        id: 2,
        question: "Qual tag é usada para adicionar uma imagem em HTML?",
        explication: "A tag `<img>` é usada para incorporar imagens no HTML.",
        answers: [
          { id: 1, text: "<image>", correct: false },
          { id: 2, text: "<img>", correct: true },
          { id: 3, text: "<src>", correct: false }
        ]
      },
      {
        id: 3,
        question: "Qual atributo HTML é usado para definir um link?",
        explication:
          "O atributo `href` é utilizado na tag `<a>` para definir o destino do link.",
        answers: [
          { id: 1, text: "src", correct: false },
          { id: 2, text: "href", correct: true },
          { id: 3, text: "link", correct: false }
        ]
      },
      {
        id: 4,
        question: "Qual é o elemento HTML correto para criar um parágrafo?",
        explication:
          "O elemento `<p>` é utilizado para definir parágrafos em HTML.",
        answers: [
          { id: 1, text: "<p>", correct: true },
          { id: 2, text: "<div>", correct: false },
          { id: 3, text: "<span>", correct: false }
        ]
      },
      {
        id: 5,
        question:
          "Qual das opções NÃO é um tipo de input em um formulário HTML?",
        explication: "`heading` não é um tipo de input válido em HTML.",
        answers: [
          { id: 1, text: "text", correct: false },
          { id: 2, text: "radio", correct: false },
          { id: 3, text: "heading", correct: true }
        ]
      },
      {
        id: 6,
        question: "Qual tag HTML é usada para criar um botão?",
        explication:
          "A tag `<button>` é usada para criar botões interativos em HTML.",
        answers: [
          { id: 1, text: "<btn>", correct: false },
          { id: 2, text: "<button>", correct: true },
          { id: 3, text: "<input>", correct: false }
        ]
      },
      {
        id: 7,
        question: "Qual elemento HTML define a maior hierarquia de títulos?",
        explication:
          "O elemento `<h1>` é o título de maior hierarquia em HTML.",
        answers: [
          { id: 1, text: "<h1>", correct: true },
          { id: 2, text: "<header>", correct: false },
          { id: 3, text: "<title>", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "CSS Básico",
    questions: [
      {
        id: 1,
        question:
          "Qual é a sintaxe correta para adicionar uma cor de fundo em CSS?",
        explication:
          "O `background-color` define a cor de fundo de um elemento.",
        answers: [
          { id: 1, text: "color-background: blue;", correct: false },
          { id: 2, text: "background-color: blue;", correct: true },
          { id: 3, text: "background: blue;", correct: true }
        ]
      },
      {
        id: 2,
        question: "Qual propriedade CSS é usada para alterar a cor do texto?",
        explication:
          "A propriedade `color` altera a cor do texto em um elemento.",
        answers: [
          { id: 1, text: "font-color", correct: false },
          { id: 2, text: "text-color", correct: false },
          { id: 3, text: "color", correct: true }
        ]
      },
      {
        id: 3,
        question:
          "Qual propriedade CSS é usada para controlar o espaçamento entre linhas?",
        explication:
          "A propriedade `line-height` ajusta o espaçamento vertical entre as linhas de texto.",
        answers: [
          { id: 1, text: "letter-spacing", correct: false },
          { id: 2, text: "line-height", correct: true },
          { id: 3, text: "text-spacing", correct: false }
        ]
      },
      {
        id: 4,
        question:
          "Qual propriedade CSS é usada para esconder um elemento da página, mas manter seu espaço reservado?",
        explication:
          "`visibility: hidden` esconde o elemento, mas mantém o espaço que ele ocupa na página.",
        answers: [
          { id: 1, text: "display: none", correct: false },
          { id: 2, text: "visibility: hidden", correct: true },
          { id: 3, text: "opacity: 0", correct: false }
        ]
      },
      {
        id: 5,
        question:
          "Qual unidade de medida é relativa ao tamanho da fonte do elemento pai em CSS?",
        explication:
          "A unidade `em` é relativa ao tamanho da fonte do elemento pai.",
        answers: [
          { id: 1, text: "px", correct: false },
          { id: 2, text: "em", correct: true },
          { id: 3, text: "%", correct: false }
        ]
      },
      {
        id: 6,
        question:
          "Qual propriedade CSS é usada para criar espaço interno dentro de um elemento?",
        explication:
          "A propriedade `padding` cria espaço interno entre o conteúdo de um elemento e suas bordas.",
        answers: [
          { id: 1, text: "margin", correct: false },
          { id: 2, text: "padding", correct: true },
          { id: 3, text: "border-spacing", correct: false }
        ]
      },
      {
        id: 7,
        question:
          "Qual regra CSS pode ser usada para adicionar fontes externas ao documento?",
        explication:
          "A regra `@font-face` permite incluir fontes externas no documento CSS.",
        answers: [
          { id: 1, text: "@import", correct: false },
          { id: 2, text: "@font-face", correct: true },
          { id: 3, text: "@media", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "JavaScript Functions",
    questions: [
      {
        id: 1,
        question: "O que faz a palavra-chave `return` em uma função?",
        explication:
          "A palavra-chave `return` encerra a execução de uma função e especifica o valor a ser retornado para o local onde a função foi chamada.",
        answers: [
          {
            id: 1,
            text: "Encerra a função sem retornar valor",
            correct: false
          },
          { id: 2, text: "Retorna um valor e encerra a função", correct: true },
          { id: 3, text: "Inicia a função", correct: false }
        ]
      },
      {
        id: 2,
        question: "Qual é a forma correta de definir uma função em JavaScript?",
        explication:
          "Em JavaScript, você pode definir uma função usando a palavra-chave `function`, seguida do nome da função e parênteses.",
        answers: [
          { id: 1, text: "function minhaFuncao {}", correct: true },
          { id: 2, text: "define minhaFuncao() {}", correct: false },
          { id: 3, text: "func minhaFuncao() {}", correct: false }
        ]
      },
      {
        id: 3,
        question:
          "O que acontece se você tentar acessar uma variável não definida dentro de uma função?",
        explication:
          "Se você tentar acessar uma variável não definida dentro de uma função, isso resultará em um erro de referência (ReferenceError).",
        answers: [
          { id: 1, text: "Retorna undefined", correct: false },
          { id: 2, text: "Gera um erro de referência", correct: true },
          { id: 3, text: "Retorna null", correct: false }
        ]
      },
      {
        id: 4,
        question:
          "Qual é a diferença entre funções declarativas e funções expressas?",
        explication:
          "Funções declarativas são definidas usando a palavra-chave `function`, enquanto funções expressas são atribuídas a variáveis.",
        answers: [
          { id: 1, text: "Nenhuma diferença", correct: false },
          {
            id: 2,
            text: "Funções declarativas podem ser chamadas antes de serem definidas",
            correct: true
          },
          {
            id: 3,
            text: "Funções expressas não podem ser chamadas",
            correct: false
          }
        ]
      },
      {
        id: 5,
        question: "O que é uma função anônima?",
        explication:
          "Uma função anônima é uma função que não tem nome e é geralmente usada como um argumento em outra função.",
        answers: [
          { id: 1, text: "Uma função que não retorna valores", correct: false },
          { id: 2, text: "Uma função sem nome", correct: true },
          { id: 3, text: "Uma função que é sempre chamada", correct: false }
        ]
      }
    ]
  }
];

export default quizQuestions;
