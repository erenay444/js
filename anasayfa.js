const questions = [
    {
        question: "Erenayın En Sevdiği Yemek Nedir?",
        answers: ["Izgara tavuk köfte ve pirinç pilavı", "Mantı", "Pizza", "Hamburger Double BigMac Menü", "Brokoli :D"],
        correct: 0
    },
    {
        question: "Erenay'ın Hayalindeki Araba Nedir?",
        answers: ["Audi TT", "Chevrolet Camaro SS", "Tesla S Plaid (elektrikli süpürge)", "Mercedes G40", "BMW M5"],
        correct: 4
    },
    {
        question: "Erenay İçin Dünyanın En Güzel Şeyi Nedir?",
        answers: ["Ö", "F", "T", "C", "B"],
        correct: 2
    },
    {
        question: "Erenay'ın Çok Önem Verdiği Bir Şey",
        answers: ["Bilgisayar Sistemi", "Kariyer", "Web Site Kodlamak", "Oyun oynamak", "Para"],
        correct: 4
    },
    {
        question: "Erenay'ın Lisede Tanıştığı Çocuğun Adı Nedir",
        answers: ["Cumhur", "Basri", "Ömer", "Furkan", "Yunus"],
        correct: 4
    },
    {
        question: "Erenayın Eskiden Sürmeyi En Sevdiği Araç Nedir?",
        answers: ["Araba", "Bisiklet", "Motor", "Yürüyen Uçak", "Çocuk Scooterı"],
        correct: 1
    },
    {
        question: "Erenay'ın Dinlemeyi En Sevdiği Şarkı Nedir?",
        answers: ["Kuty - AILE", "Tolga Kahraman - Omuzumda Ağlayan Bir Sen", "DJ GUDOG - BEAT MAGİCO QUE", "Lia Shine - Ben Gibi Bakmaz", "Ati242 - 25"],
        correct: 3
    },
    {
        question: "Aşağıdaki Plakalardan Hangisi Doğrudur",
        answers: ["34 ED 017", "17 ED 17", "34 HOP 704", "34 GZ 1453", "34 FG 8611"],
        correct: 2
    },
    {
        question: "Erenayın Eskiden Hayalinde Olan Fakat Tutturamadığı  Meslek Hangisidir?",
        answers: ["Bilgisayar Mühendisliği", "Ticaret", "Discord Bot Developerliği", "Discord Moderatörlüğü", "Yazılım Mühendisliği"],
        correct: 4
    },
    {
        question: "Erenay'ın En Sevdiği Tarih Hangisidir?",
        answers: ["19.07.2004", "??.11.2020", "29.10.2004", "12.10.2004", "11.10.2004"],
        correct: 1
    }

];



let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question")
    const answersContainer = document.getElementById("answers")
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {

        const button = answersContainer.children[index];
        button.innerText = answer;
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
    });
}




function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer")

    answerButtons.forEach(button => button.disabled = true);

    if (selectedIndex === currentQuestion.correct) {

        answerButtons[selectedIndex].classList.add("correct");
        score += 20;
    } else {

        answerButtons[selectedIndex].classList.add("incorrect");
        answerButtons[currentQuestion.correct].classList.add("correct")
    }


    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {

        setTimeout(loadQuestion, 1000);
    } else {
        setTimeout(showResult, 1000);
    }

}

function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    const resultContainer = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Toplam Puan: ${score}`;
    resultContainer.classList.remove("hidden");


}

loadQuestion()