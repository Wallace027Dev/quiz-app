const quizQuestions = [
  {
    id: 1,
    name: 'Quiz Católico #1',
    questions: [
      {
        id: 1,
        question: 'Qual o profeta que foi engolido por um grande peixe?',
        explication: 'Jonas. Referência bíblica: Jonas 1:17.',
        answer1: 'Jonas',
        answer2: 'João',
        answer3: 'Isaías',
      },
      {
        id: 2,
        question: 'Quem derrubou a muralha de Jericó?',
        explication: 'Josué. Referência bíblica: Josué 6:1-27.',
        answer1: 'Josué',
        answer2: 'Barnabé',
        answer3: 'José',
      },
      {
        id: 3,
        question:
          'Onde se encontra na Bíblia " O Senhor é meu pastor, nada me faltará"?',
        explication: 'Salmos 23. Referência bíblica: Salmos 23:1.',
        answer1: 'Salmos 23',
        answer2: 'Salmos 90',
        answer3: 'Gênesis 1',
      },
      {
        id: 4,
        question: 'Qual destes nomes não era discípulo de Jesus?',
        explication: 'José.',
        answer1: 'José',
        answer2: 'João',
        answer3: 'Pedro',
      },
      {
        id: 5,
        question: 'Em que fé que nós cremos?',
        explication:
          'Nós cremos na fé dos apóstolos, que foi revelada pelo Cristo.',
        answer1: 'Na fé dos apóstolos',
        answer2: 'Na fé de Jesus Cristo',
        answer3: 'Na fé de Abraão',
      },
      {
        id: 6,
        question: 'Qual é a data mais importante da fé católica?',
        explication:
          'A páscoa, pois foi na cruz que Cristo nos salvou, e ressuscitou.',
        answer1: 'Páscoa',
        answer2: 'Natal',
        answer3: 'Pentecostes',
      },
      {
        id: 7,
        question:
          'Qual livro ficou de fora da bíblia, por não nos auxiliar a entender que Jesus é o Messias?',
        explication:
          'Por ser apócrifo, ou seja, não ter sido reconhecido como um ensinamento de Jesus Cristo.',
        answer1: 'Tomé',
        answer2: 'João',
        answer3: 'Tiago',
      },
      {
        id: 8,
        question:
          'Embora Jesus seja Deus, sua alma é comum, como a minha e a sua.',
        explication: 'Sim. Mas a alma de Jesus é imaculada do pecado original.',
        answer1: 'Sim. A alma de Jesus faz parte de sua natureza humana',
        answer2: 'Sim, mas Jesus tem duas almas, uma divina e outra humana',
        answer3: 'Não, JEsus não tem alma',
      },
      {
        id: 9,
        question:
          'O sacratíssimo corpo de Jesus ascendeu ao céu pois portava dentro de si o espírito de Cristo, ou seja, o próprio Deus',
        explication:
          'Falso. Pois o corpo de Jesus não porta o próprio Deus, mas é o próprio Deus encarnado.',
        answer1: 'Falso. A afirmação é incorreta, pois Jesus é o próprio Deus',
        answer2:
          'Verdadeiro. Pois o corpo de Jesus é apenas um portador do espírito de Cristo',
        answer3: 'O corpo de Jesus não ascendeu aos céus, só sua alma',
      },
      {
        id: 10,
        question: 'Seria Cristo, outro Deus além do pai?',
        explication:
          'Cristo não é outro Deus além do Pai. O conceito central da Trindade ensina que o Pai, o Filho (Cristo) e o Espírito Santo são uma única e indivisível essência divina, compartilhando a mesma divindade.',
        answer1:
          'Não, Cristo é parte da Trindade e compartilha a mesma divindade com o Pai',
        answer2: 'Sim, Cristo é outro Deus além do Pai',
        answer3:
          'Na verdade, Cristo e o Pai são entidades completamente distintas, cada um sendo seu próprio Deus',
      },
    ],
  },
  {
    id: 2,
    name: 'Quiz Católico #2',
    questions: [
      {
        id: 1,
        question: 'O que significa a Transubstanciação na fé católica?',
        explication:
          'Na fé católica, a Transubstanciação é o momento durante a Missa em que o pão e o vinho se transformam no corpo e no sangue de Cristo.',
        answer1:
          'A Transubstanciação é o momento em que o pão e o vinho se transformam no corpo e no sangue de Cristo',
        answer2:
          'A Transubstanciação não tem significado específico na fé católica',
        answer3:
          'A Transubstanciação refere-se à transformação simbólica dos elementos na Eucaristia',
      },
      {
        id: '2',
        question: 'O que é o dogma da Imaculada Conceição?',
        explication:
          'O dogma da Imaculada Conceição afirma que Maria, mãe de Jesus, foi concebida sem o pecado original.',
        answer1:
          'O dogma da Imaculada Conceição afirma que Maria foi concebida sem o pecado original',
        answer2:
          'A Imaculada Conceição se refere à concepção virginal de Jesus',
        answer3: 'O dogma da Imaculada Conceição é uma ideia sem maldade',
      },
      {
        id: '3',
        question:
          'Qual é o Sacramento que perdoa os pecados na tradição católica?',
        explication:
          'O Sacramento da Reconciliação, também conhecido como Confissão, é o sacramento que perdoa os pecados na tradição católica.',
        answer1:
          'O Sacramento da Reconciliação, ou Confissão, é o sacramento que perdoa os pecados',
        answer2:
          'O Sacramento da Unção dos Enfermos perdoa os pecados na tradição católica',
        answer3:
          'Na tradição católica, os pecados são perdoados automaticamente sem a necessidade de sacramentos',
      },
      {
        id: '4',
        question: 'O que significa a palavra "Catecismo" na fé católica?',
        explication:
          'O Catecismo é um compêndio que resume os princípios da fé católica em forma sistemática.',
        answer1: 'O Catecismo é um resumo dos princípios da fé católica',
        answer2:
          'A palavra "Catecismo" não tem significado específico na fé católica',
        answer3: 'O Catecismo é um ritual específico na liturgia católica',
      },
      {
        id: '5',
        question: 'O que é a Assunção de Maria?',
        explication:
          'A Assunção de Maria é o dogma que afirma que Maria foi levada ao céu, corpo e alma, após o fim de sua vida terrena.',
        answer1:
          'A Assunção de Maria é o dogma que afirma que Maria foi levada ao céu, corpo e alma',
        answer2:
          'A Assunção refere-se à ascensão de Maria ao céu apenas espiritualmente',
        answer3: 'A Assunção é um dogma que Maria ascendeu, sozinha, ao céu',
      },
      {
        id: '6',
        question:
          'O que representa a vela acesa durante o batismo na fé católica?',
        explication:
          'A vela acesa durante o batismo simboliza a luz de Cristo e a entrada na vida da graça.',
        answer1:
          'A vela acesa simboliza a luz de Cristo e a entrada na vida da graça durante o batismo',
        answer2: 'A vela no batismo representa o Espírito Santo',
        answer3:
          'A vela representa a purificação do pecado no batismo católico',
      },
      {
        id: '7',
        question: 'O que é a Quaresma na tradição católica?',
        explication:
          ' O período de 40 dias é simbólico e é encontrado em eventos como os 40 dias de jejum de Jesus no deserto',
        answer1:
          'A Quaresma é um período de 40 dias de penitência, reflexão e jejum que antecede a celebração da Páscoa',
        answer2: 'A Quaresma é um tempo de festividades na tradição católica',
        answer3:
          'A Quaresma é um período de celebração exclusiva da ressurreição de Cristo',
      },
      {
        id: '8',
        question: 'O que é a Eucaristia na fé católica?',
        explication:
          'A Eucaristia é o sacramento no qual o pão e o vinho se tornam o corpo e o sangue de Cristo durante a Missa.',
        answer1: 'A Eucaristia é o corpo e o sangue de Cristo',
        answer2: 'A Eucaristia é apenas um símbolo na tradição católica',
        answer3:
          'A Eucaristia é um sacramento criado recentemente, como símbolo',
      },
      {
        id: '9',
        question:
          'O que são os Mandamentos da Lei de Deus na tradição católica?',
        explication:
          'Os Mandamentos da Lei de Deus são um conjunto de normas morais dados por Deus para guiar a conduta humana, e foram dados a Moisés no Monte Sinai.',
        answer1:
          'Os Mandamentos da Lei de Deus são um conjunto de normas morais dados por Deus para guiar a conduta humana',
        answer2: 'Os Mandamentos são uma invenção recente na tradição católica',
        answer3:
          'Os Mandamentos da Lei de Deus não têm relevância na fé católica',
      },
      {
        id: '10',
        question:
          'Qual é o sacramento que confere o Espírito Santo na tradição católica?',
        explication:
          'O Crisma. Geralmente é administrado por um bispo e envolve a imposição das mãos, juntamente com a unção com óleo sagrado',
        answer1:
          'O Sacramento da Confirmação, ou Crisma, confere o Espírito Santo aos fiéis',
        answer2:
          'O Batismo é o sacramento que confere o Espírito Santo na tradição católica',
        answer3:
          'O Espírito Santo é conferido automaticamente a todos os católicos no momento do nascimento',
      },
    ],
  },
];

export default quizQuestions;
