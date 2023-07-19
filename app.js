let questionCounter = 0;
let usersAnswers = [];
let quiz_div = document.getElementById("q");
let nextButton_div = document.getElementById("next");
let prevButton_div = document.getElementById("prev");
let startButton_div = document.getElementById("start");
const questions = [
    {
    question: "BM",
    choices: [
        "bad mouthed",
        "bad manners",
        "bad match",
        "bad mic",
        "bed manners"],
    correctAnswer: 1
    },
    {
        question: "GLHF",
    choices: [
        "get loot, haul fast",
        "good luck having friends",
        "good luck, have fun",
        "get loot here, free",
        "got last, hate first"],
    correctAnswer: 2
    },
    {
    question: "NPC",
    choices: [
        "not playable character",
        "new playable character",
        "non play character",
        "non playable character",
        "non player character"],
    correctAnswer: 4
    },
    {
    question: "OP",
    choices: [
        "overpowered",
        "overpick",
        "off path",
        "other player",
        "on point"],
    correctAnswer: 0
    },
    {
    question: "DC",
    choices: [
        "discord",
        "discrete",
        "discuss",
        "disconnect",
        "discount"],
    correctAnswer: 3
    },]

displayNext()

function createQuestionElement(index) {
    let qElem = $('<div>', { id: 'question'});

    let header = $('<p>').append(questions[index].question);
    qElem.append(header);

    let radioButtons = createRadios(index);
    qElem.append(radioButtons);

    return qElem;
}
function createRadios(index) {
    let radioList = $('<ul>');
    let item;
    let input = '';

    for (let i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
    }
    return radioList
}

function displayNext() {
    let next = nextButton_div.style.visibility;
    let prev = prevButton_div.style.visibility;
    let start = startButton_div.style.visibility;

    $('quiz')(function() {
        $('#question').remove();

        if (questionCounter < questions.length) {
            let nextQ = createQuestionElement(questionCounter);
            quiz_div.append(nextQ)
        }

        if (questionCounter === 0) {
            next = "visible"
            prev = "hidden"
            start = "hidden"
        } else if (questionCounter > 0) {
            next = "visible"
            prev = "visible"
            start = "hidden"
        } else {
            next = "hidden"
            prev = "hidden"
            start = "visible"
        }
    })
}
