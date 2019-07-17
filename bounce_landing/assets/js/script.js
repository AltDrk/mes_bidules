(function () {
    const myQuestions = [{
        question: "Que signifie HTML ?",
        answers: {
            a: "Hyper Text Markup Language",
            b: "Hyper Transfer Modulated Language",
            c: "Hyper Threaded Modifying Language",
        },
        correctAnswer: "a"
    },
   {
        question: "Qui a crée le Web ?",
        answers: {
            a: "Arthur Dent",
            b: "Tim Berners Lee",
            c: "Steve Wozniak",
        },
        correctAnswer: "b"
    },
        {
            question: "A quoi sert CSS ?",
            answers: {
                a: "A styliser les éléments d’une page Web ",
                b: "A interagir avec une base de données",
                c: "A assurer la sécurité du site",
            },
            correctAnswer: "a"
    },
        {
            question: "Internet et le Web …",
            answers: {
                a: "C'est exactement la même chose",
                b: "Sont deux choses différentes",
            },
            correctAnswer: "b"
    },
        {
            question: "L’ancètre du routeur s’appelait …",
            answers: {
                a: "Internet Message Processor",
                b: "Interface Message Processor",
                c: "Gérard du service courier",
            },
            correctAnswer: "b"
    },
        {
            question: "Et à ce propos que contenait-il ?",
            answers: {
                a: "Un ordinnateur Honeywell",
                b: "Un ordinnateur PDP-11",
                c: "Gérard du service courier",
            },
            correctAnswer: "a"
    },
        {
            question: "Cherchez l’intrus",
            answers: {
                a: "Steve Jobs",
                b: "Bill Gates",
                c: "Richard Stallman",
            },
            correctAnswer: "c"
    },
        {
            question: "Quelle est la devise de la maison Stark ?",
            answers: {
                a: "Winter is coming",
                b: "Don't panic !",
                c: "Think different",
            },
            correctAnswer: "a"
    },
        {
            question: "La qualité première d’un développeur",
            answers: {
                a: "Son calme et sa détermination légendaires",
                b: "Son impressionante dextérité digitale",
                c: "Sa maîtrise de la recherche Google",
            },
            correctAnswer: "c"
        }
    ];

    function buildQuiz() {
        
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="my_slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} bonnes réponses sur ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".my_slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();

// click toggle

function start() {
    var x = document.getElementById("quizz");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

