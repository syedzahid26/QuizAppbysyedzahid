const start = document.querySelector('.start')
const quizWrapper = document.querySelector('.quizWrapper')

const quizQuestions = [
    {
        que: "1: What is the capital of France",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        ans: "option3"
    },
    {
        que: "2: which of the following is  treding language in 2023",
        a: "python",
        b: "react",
        c: "javascipt",
        d: "c++",
        ans: "option1"
    },
    {
        que: "3: what is full form of DBMS",
        a: "digital banking management system",
        b: "designed bussiness making System",
        c: "data base management system",
        d: "none of the above",
        ans: "option3"
    },
    {
        que: "4: What is the boiling point of water in Celsius?",
        a: "0°C",
        b: "100°C",
        c: "50°C",
        d: "25°C",
        ans: "option2"
    },
    {
        que: "5: What is the largest planet in our solar system?",
        a: "Earth",
        b: "Venus",
        c: "Mars",
        d: "Jupiter",
        ans: "option4"
    },
    {
        que: "6: Which of the following is a popular front-end framework?",
        a: "Java",
        b: "Python",
        c: "React",
        d: "C++",
        ans: "option3"
    }
]
let questionCount = 0;
let time = 10;
const timeleft = () => {
    clearInterval(myInterval)
    if (time > 0) {
        timer.innerText = time--;

    }
    else {
        timer.innerText = "Time up"
        submitAns()
    }
}
let myInterval = setInterval(timeleft, 1000)




const rules = document.querySelector('.rules')
const question = document.querySelector('.que')
const option1 = document.querySelector('#ans1')
const option2 = document.querySelector('#ans2')
const option3 = document.querySelector('#ans3')
const option4 = document.querySelector('#ans4')
const alloptions = document.querySelectorAll('.options')
const totalscore = document.querySelector('.score')
const timer = document.querySelector('.timer')

const startQuiz = () => {
    quizWrapper.style.display = "block"
    totalscore.style.display = "none"
    rules.style.display = 'none'

    start.innerHTML = "Exit"
    start.addEventListener('click', function () {
        location.reload()
    })
    loadQuestion()
    setInterval(timeleft, 1000)

}

const loadQuestion = () => {

    const questionlist = quizQuestions[questionCount]
    question.innerText = questionlist.que
    option1.innerText = questionlist.a
    option2.innerText = questionlist.b
    option3.innerText = questionlist.c
    option4.innerText = questionlist.d

}

//to select the answer

let usersans = () => {
    let mark;
    alloptions.forEach((currentOption) => {
        if (currentOption.checked) {
            mark = currentOption.id;
            console.log(mark);
        }
    })
    return mark;

}

let score = 0;

let submitAns = () => {
    let getanswer = usersans()
    if (getanswer == quizQuestions[questionCount].ans) {

        score++;
        console.log(getanswer + "is the right answer");
    }

    questionCount++
    clearInterval(timeleft, 1000)
    deselectAll()
    if (questionCount < quizQuestions.length) {
        loadQuestion()
        time = 10
    }
    else {
        quizWrapper.style.display = 'none'
        totalscore.style.display = "block"
        start.innerHTML = "Play Again"
        start.addEventListener('click', function () {
            loadQuestion()
        })
        totalscore.innerText = `your total score is ${score}/${quizQuestions.length}`
        questionCount = 0;
    }
    // start.addEventListener('click', function () {
    //     startQuiz()
    // })
}


//deselect the checked radio button
const deselectAll = () => {
    alloptions.forEach((e) => e.checked = false)
}


