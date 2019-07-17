(function () {
    const myQuestions = [{
        question: "Que signifie HTML ?",
        answers: {
            a: "HyperText Markup Language",
            b: "Hyper Transfer Modulated Language",
            c: "Hot Teen Milf Latina",
	        d: "Hyper Transfer Modifying Language"
        },
        correctAnswer: "a"
    },
   {
        question: "A quoi sert le langage HTML ?",
        answers: {
            a: "A styliser une page web",
            b: "A structurer une page web",
            c: "A transférer des données",
            d: "A échanger des photos de chatons"
        },
        correctAnswer: "b"
    },
        {
            question: "En quelle année le langage HTML est-il apparu ?",
            answers: {
                a: "2001",
                b: "1998",
                c: "1993",
                d: "2019"
            },
            correctAnswer: "b"
    },
        {
            question: "Qu'est-ce qu'une balise HTML ?",
            answers: {
                a: "Un point de repère dans le code",
                b: "Un outil de géolocalisation des utilisateurs",
                c: "Un marqueur permettant de structurer ou identifier le contenu d'une page web",
                
            },
            correctAnswer: "c"
    },
        {
            question: "Comment insert-on une \"balise\" (strong, p, div...) dans du code HTML",
            answers: {
                a: "*strong*",
                b: ":strong:",
                c: "&ltstrong>",
                d: "Au marteau"
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

