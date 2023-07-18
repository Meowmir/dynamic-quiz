let questionCounter = 0;
let usersAnswers = [];
let quiz_div = document.getElementById("quiz");
let next_div = document.getElementById("next");
let prev_div = document.getElementById("prev");
let start_div = document.getElementById("start");
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
    }, {
    question: "GLHF",
    choices: [
        "get loot, haul fast",
        "good luck having friends",
        "good luck, have fun",
        "get loot here, free",
        "got last, hate first"],
    correctAnswer: 2
    }, {
    question: "NPC",
    choices: [
        "not playable character",
        "new playable character",
        "non play character",
        "non playable character",
        "non player character"],
    correctAnswer: 4
    }, {
    question: "OP",
    choices: [
        "overpowered",
        "overpick",
        "off path",
        "other player",
        "on point"],
    correctAnswer: 0
    }, {
    question: "DC",
    choices: [
        "discord",
        "discrete",
        "discuss",
        "disconnect",
        "discount"],
    correctAnswer: 3
    },
]
