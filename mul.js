player1_name="Score";
document.getElementById("player1_name").innerHTML=player1_name+" = ";

score=0;



//document.getElementById("score").innerHTML=score;

number1=Math.floor(Math.random()*21);
number2=Math.floor(Math.random()*21);


function send(){
    number1=Math.floor(Math.random()*21);
    number2=Math.floor(Math.random()*21);


actual_answer=parseInt(number1)*parseInt(number2);

question_number="<br><br> <h4 id='num'>"+number1+" X "+number2+"</h4>";
input_box="<br> Answer : <input type='text' id='input_check_box'> ";
check_button="<br><br> <button class='btn btn-info' onclick='check()' id='check'>Check</button>";
chance="<h3>  Chances Left - <b id='chance'> 2 </b></h3>";
row=question_number+input_box+check_button+chance;
document.getElementById("output").innerHTML=row;

document.getElementById("but").innerHTML="";



chance=2;
}

Answer_turn="player1";
function check(){
    
    
Answer=document.getElementById("input_check_box").value;
if(Answer==actual_answer){
if(Answer_turn=="player1"){
score=score+1;
document.getElementById("score").innerHTML=score;
localStorage.setItem("mul_score",score);
}
document.getElementById("output").innerHTML="";
send();
}
else{

chance=chance-1;
document.getElementById("chance").innerHTML=chance;
}
if(chance==0){
document.getElementById("output").innerHTML="<br><h3 class='wrong'> Opps wrong answer</h3>";

setTimeout(function(){
window.location="main.html";
f_mul="go";
localStorage.setItem("f_mul",f_mul);
localStorage.setItem("mul_score",score);
},2000
    
);

}
if(score==0){
document.getElementById("but_d").innerHTML="";
}
else{
document.getElementById("but_d").innerHTML="<button onclick='back()' id='b'>Back</button>";
}



}

function back(){
window.location="main.html";
f_mul="go";
localStorage.setItem("f_mul",f_mul);
localStorage.setItem("mul_score",score);
}


document.getElementById("but_d").innerHTML="<button onclick='back()' id='b'>Back</button>";

if(localStorage.getItem("f_mul")=="go"){
document.getElementById("score").innerHTML=localStorage.getItem("mul_score");
}

