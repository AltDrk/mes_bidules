(function () {
    const myQuestions = [{
        question: "A quoi sert CSS ?",
            answers: {
                a: "A styliser les éléments d’une page Web ",
                b: "A interagir avec une base de données",
                c: "A assurer la sécurité du site",
                d: "A rien, c'est une légende urbaine",
            },
            correctAnswer: "a"
    },
   {
        question: "Quelle est la signification de l'acronyme CSS ?",
        answers: {
            a: "Cascading Style Sheets",
            b: "Consortium for Styling Stuff",
            c: "Calvados Suze Salers"
        },
        correctAnswer: "a"
    },
        {
            question: "A votre avis, en CSS, l'attribut d'un élément est appellé...",
            answers: {
                a: "Une régle",
                b: "Un attribut",
                c: "Une propriété",
                d: "Un sélecteur"
            },
            correctAnswer: "a"
    },
        {
            question: "Que ne permet *pas* de faire CSS ?",
            answers: {
                a: "Attribuer une couleur, une taille",
                b: "Stocker des informatios",
                c: "Positionner des éléments",
                d: "Animer des éléments",
            },
            correctAnswer: "b"
    },

    {
            question: "Quelle syntaxe vous semble correcte ?",
            answers: {
                a: "h4 {text-align: center;}",
                b: "h4 [text-align: center;]",
                c: "h4 = text-align: center;",
                d: "Met ce #$%@$§ de titre au centre !",
            },
            correctAnswer: "a"
},

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

