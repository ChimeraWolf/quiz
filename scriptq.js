const $startGameButton = document.querySelector(".start-quiz");
const $nextQuestionButton = document.querySelector(".next-question");
const $questionsContainer = document.querySelector(".questions-container");
const $questionText = document.querySelector(".question");
const $answersContainer = document.querySelector(".answers-container");
const $answers = document.querySelectorAll(".answer");
const $logoutButton = document.querySelector(".logout-button");



let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
  }

function displayNextQuestion() {
resetState()
  
    if (questions.length === currentQuestionIndex) {
      return finishGame()
    }
    
    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
      const newAsnwer = document.createElement("button")
      newAsnwer.classList.add("button", "answer")
      newAsnwer.textContent = answer.text
      if (answer.correct) {
        newAsnwer.dataset.correct = answer.correct
      }
      $answersContainer.appendChild(newAsnwer)
  
      newAsnwer.addEventListener("click", selectAnswer)
    })
  }
  
  function resetState() {
    while($answersContainer.firstChild) {
      $answersContainer.removeChild($answersContainer.firstChild)
    }
  
    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
  }
  
  function selectAnswer(event) {
    const answerClicked = event.target
  
    if (answerClicked.dataset.correct) {
      document.body.classList.add("correct")
      totalCorrect++
  
  
    }
  
    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
  }
  
  function finishGame() {
    const totalQuestions = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
    let message = "Obrigado(a) por responder ao meu quiz"
    switch (true) {
        case (performance >= 90):
            message = "Obrigado(a) por responder ao meu quiz"
            break
    }
  
    $questionsContainer.innerHTML = 
    `
      <p class="final-message">
        <span>Resultado: ${message}</span>
      </p>
      <button 
        onclick=window.location.reload() 
        class="button"
      >
      Refazer o teste
      </button>
    `
  }    

  $logoutButton.addEventListener('click', function() {
    window.location.href = 'index.html'; 
});



  const questions = [
    {
        question: "Você está namorando?",
        answers: [
            {text: "Sim", correct: true},
            {text: "Não", correct: true},
            
        ]
    },

    {
      question:"O que você acha mais importante: amor romântico, amor familiar ou amor próprio? ",
      answers: [
          {text:"Amor romântico", correct: true},
          {text:"Amor familiar", correct: true},
          {text:"Amor próprio", correct: true}
      ]
    },

    {
        question: "Foi algo que você cativou bastante ou apenas gostou?",
        answers: [
            {text: "cativei um pouco", correct: true},
            {text: "Cativei bastante", correct: true},
            {text: "Apenas gostei", correct: true},
            {text: "Não sei dizer", correct: true}
        ]
    },

    {
      question:"Você acredita que é possível gostar de alguém mesmo quando há diferenças significativas entre vocês? ",
      answers: [
          {text:"Acredito", correct: true},
          {text:"Não acredito", correct: true}
      ]
    },

    {
        question: "Há quantos anos você gosta dessa pessoa?",
        answers: [
            {text: "1 ano", correct: true},
            {text: "1 ano e 10 meses", correct: true},
            {text: "2 à 1 mês", correct: true},
            {text: "Nenhum ano ou mês", correct: true}
            
        ]
    },

    {
      question: "Você gosta de viajar?",
      answers: [
          {text: "Gosto", correct: true},
          {text: "Não gosto", correct: true},
          {text: "Em certos lugares áte que vou", correct: true}
          
      ]
  },

    {
        question: "Você gostou ou amou?",
        answers: [
            {text: "Gostei", correct: true},
            {text: "Amei", correct: true},
            {text: "Não sei dizer", correct: true}
        ]
    },

    {
      question: "Você tem irmões?",
      answers: [
          {text: "Tenho", correct: true},
          {text: "Não tenho", correct: true},
          
      ]
  },

    {
        question: "Você colocou muita esperança e se arrependeu?",
        answers: [
            {text:"Sim coloquei esperança e arrependi", correct: true},
            {text:"Não coloquei esperança e não arrependi", correct: true}
        ]
    },

    {
      question: "Quantos anos você tem?",
      answers: [
          {text:"15", correct: true},
          {text:"16", correct: true},
          {text:"17", correct: true},
          {text:"18", correct: true},
      ]
  },

    {
        question: "Quando foi dormir você não conseguia parar de pensar naquela pessoa?",
        answers: [
            {text:"Eu consegui dormir sem pensar", correct: true},
            {text:"Eu não consegui dormir sem pensar", correct: true}
        ]
    },

    {
      question: "Você gosta de tirar foto?",
      answers: [
          {text:"Gosto", correct: true},
          {text:"De vez em quando", correct: true},
          {text:"Não", correct: true},
          {text:"Só com as amigas"}
      ]
  },

    {
        question: "Se essa pessoa te mandar uma mensagem querendo começar do zero com você?",
        answers: [
            {text:"Aceitaria", correct: true},
            {text:"Não aceitaria", correct: true},

        ]
    },

    {
        question: "você flertou, olhou e essa pessoa pareceu responder aos seus flertes?",
        answers: [
            {text:"Sim pareceu", correct: true},
            {text:"Não pareceu", correct: true}
        ]
    },

    {
        question: "Você se esqueceu dessa pessoa ou ainda pensa nela?",
        answers: [
            {text:"Eu já esquece", correct: true},
            {text:"Não esquece", correct: true}
        ]
    },

    {
        question:"Você gosta da pessoa pela personalidade dela ou pelo que ela tem?",
        answers: [
            {text:"Eu gosto do que ela tem", correct: true},
            {text:"Eu gosto da sua personalidade", correct: true},
            {text:"Eu gosto da sua personalidade e pelo o que tem", correct: true},
            {text:"Nenhuma dessas alternativas", correct: true}
        ]
    },

    {
      question:"Você acredita que é possível gostar de alguém mesmo quando há diferenças significativas entre vocês? ",
      answers: [
          {text:"Acredito", correct: true},
          {text:"Não acredito", correct: true}
      ]
    }
]
