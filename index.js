const quizData = [
  {
    question: "What temperature does water boil at?",
    optionA: "50 degrees Celcius",
    optionB: "25 degrees Celcius",
    optionC: "100 degrees Celcius",
    optionD: "150 degrees Celcius",
    correct: "100 degrees Celcius",
  },

  {
    question: "Who wrote Julius Caesar, Macbeth and Hamlet?",
    optionA: "Wole Soyinka",
    optionB: "William Shakespeare",
    optionC: "Ngozi Chimamanda Adichie",
    optionD: "Dan Brown",
    correct: "William Shakespeare",
  },

  {
    question: "What did the crocodile swallow in Peter Pan?",
    optionA: "A Book",
    optionB: "A Computer",
    optionC: "A pair of shoes",
    optionD: "Alarm Clock",
    correct: "Alarm Clock",
  },

  {
    question: "Which is the only mammal that can’t jump?",
    optionA: "Dog",
    optionB: "Elephant",
    optionC: "Goat",
    optionD: "Lion",
    correct: "Elephant",
  },

  {
    question: "Who lived at 221B, Baker Street, London?",
    optionA: "Tony Stark",
    optionB: "Morgan Freeman",
    optionC: "Sherlock Holmes",
    optionD: "Samuel L. Jackson",
    correct: "Sherlock Holmes",
  },

  {
    question: "What colour is a panda?",
    optionA: "Green and Yellow",
    optionB: "Blue and Red",
    optionC: "Green and White",
    optionD: "Black and White",
    correct: "Black and White",
  },

  {
    question: "Where is the smallest bone in the human body?",
    optionA: "The Chest",
    optionB: "The Ear",
    optionC: "The Legs",
    optionD: "The Hands",
    correct: "The Ear",
  },

  {
    question: "What does the roman numeral C represent?",
    optionA: "100",
    optionB: "10",
    optionC: "10,000",
    optionD: "1,000,000",
    correct: "100",
  },

  {
    question: "What takes place in Hong Kong's Happy Valley?",
    optionA: "Chicken Wrestling",
    optionB: "Horse racing",
    optionC: "Street Racing",
    optionD: "Arm Wrestling",
    correct: "Horse racing",
  },

  {
    question: "Who painted the Mona Lisa?",
    optionA: "Alexander Graham Bell",
    optionB: "Sir Isaac Newton",
    optionC: "Leonardo Da Vinci",
    optionD: "Albert Einstein",
    correct: "Leonardo Da Vinci",
  },

  {
    question: "What’s the most important book in the Moslem religion?",
    optionA: "The Koran",
    optionB: "The Dictionary",
    optionC: "The Bible",
    optionD: "The Chemistry text Book",
    correct: "The Koran",
  },

  {
    question: "What’s the capital of Ethiopia?",
    optionA: "Cape Town",
    optionB: "San Francisco",
    optionC: "Abuja",
    optionD: "Syndey",
    correct: "Addis Ababa",
  },

  {
    question: "How many squares are there on a chess board?",
    optionA: "128",
    optionB: "64",
    optionC: "32",
    optionD: "256",
    correct: "64",
  },

  {
    question: "Who invented the electric light bulb?",
    optionA: "Tom Cruise",
    optionB: "Barack Obama",
    optionC: "Wole Soyinka",
    optionD: "Thomas Edison",
    correct: "Thomas Edison",
  },

  {
    question: "What are the first three words of the bible?",
    optionA: "be with everyone",
    optionB: "Again Jesus asked",
    optionC: "In the beginning",
    optionD: "At that time",
    correct: "In the beginning",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.optionA;
  b_text.innerText = currentQuizData.optionB;
  c_text.innerText = currentQuizData.optionC;
  d_text.innerText = currentQuizData.optionD;
}

function deSelectAnswer() {
  answersEls.forEach((ans) => (ans.checked = false));
}

function getSelected() {
  let answer;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", (e) => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions </h2>

        <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});
