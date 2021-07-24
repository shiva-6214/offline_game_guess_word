var player1_name = localStorage.getItem("first_name");
var player2_name = localStorage.getItem("last_name");

var player1_score = 0;
var player2_score = 0;

var question_turn = 'player1';
var answer_turn = 'player2';

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    text_box_value_answer = document.getElementById("word").value;
    word = text_box_value_answer.toLowerCase();

    charAt1 = word.charAt(1);

    middleChar = Math.floor(word.length / 2);

    charAt2 = word.charAt(middleChar);

    lastChar = word.length - 1;

    charAt3 = word.charAt(lastChar);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");

    question_word = "<h4 id='version'>Q. " + removeCharAt3 + "</h4>";
    input_box = "Answer: <input id='input_check_box' class='form-control' type='text'>";
    check_button = "<br><button class='btn btn-primary' onclick='check();'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check() {
    var answer = document.getElementById("input_check_box").value;
    answer = answer.toLowerCase();
    if (word == answer) {
        if (answer_turn == 'player1') {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    else {
        $("#exampleModal").modal();
    }

    if (question_turn == 'player1') {
        question_turn = 'player2';
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
        question_turn = 'player1';
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1") {
        answer_turn = 'player2';
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }

    else {
        answer_turn = 'player1';
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("input_check_box").innerHTML = "";
    document.getElementById("output").innerHTML = "";
}