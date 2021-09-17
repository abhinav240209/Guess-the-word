question_turn="player1";
answer_turn="player2";
player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
document.getElementById("player1_name").innerHTML=player1_name + ":" ;
document.getElementById("player2_name").innerHTML=player2_name + ":" ;
player1_score=0;
player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;

function send() {
    get_word=document.getElementById("word").value;
    converted_word=get_word.toLowerCase();
    console.log("coneverted_word in lower case  " + converted_word);
    first_letter=converted_word.charAt(1);
    console.log(first_letter);
    middle_letter_number=converted_word.length/2;
    middle_letter_whole_number=Math.floor(middle_letter_number);
    middle_letter=converted_word.charAt(middle_letter_whole_number);
    console.log(middle_letter);
    last_letter_number=converted_word.length-1;
    last_letter=converted_word.charAt(last_letter_number);
    console.log(last_letter);
    remove_first_letter_word=converted_word.replace(first_letter,"_");
    remove_middle_letter_word=remove_first_letter_word.replace(middle_letter,"_");
    remove_last_letter_word=remove_middle_letter_word.replace(last_letter,"_");
    question_word=remove_last_letter_word;
    console.log(question_word);
    question_statement="<h4 id='word_display'> Question : " + question_word + "</h4>";
    answer_statement="<br> <label> Answer : </label> <input type='text' id='answer_word' class='form-control' placeholder='enter your answer' >";
    check_button="<br> <button class='btn btn-primary' onclick='check_answer()'> Check </button>";
    document.getElementById("output").innerHTML=question_statement + answer_statement + check_button;
    document.getElementById("word").value="";
}


function check_answer() {
    answer=document.getElementById("answer_word").value;
    answer_lower=answer.toLowerCase();
    console.log("Answer in lower case" + answer_lower);
    if (answer_lower==converted_word) {
        if (answer_turn=="player1") {
            player1_score=player1_score + 1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }

    else {
        player2_score=player2_score + 1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
    }

    if (answer_turn=="player1") {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;
    }
    else {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn - " + player1_name;
    }

    if (question_turn=="player1") {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn -" + player2_name;
    }
    else {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn -" + player1_name;
    }
    
}
 

