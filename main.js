function how_to_play(){
window.location="howtoplay.html";
}


function add(){
window.location="add.html";
localStorage.removeItem("add_score");
}
if(localStorage.getItem("f_ad")=="go"){
document.getElementById("ad").innerHTML="<h4>Addition Score : <b id='add_num'>0</b> latest Score</h4>";
}
document.getElementById("add_num").innerHTML=localStorage.getItem("add_score");




function sub(){
window.location="sub.html";
localStorage.removeItem("sub_score");
}
if(localStorage.getItem("f_sub")=="go"){
document.getElementById("sub").innerHTML="<h4>Subtraction Score : <b id='sub_num'>0</b> latest Score</h4>";
}
document.getElementById("sub_num").innerHTML=localStorage.getItem("sub_score");




function mul(){
window.location="mul.html";
localStorage.removeItem("mul_score");
}
if(localStorage.getItem("f_mul")=="go"){
document.getElementById("mul").innerHTML="<h4>Multiply Score : <b id='mul_num'>0</b> latest Score</h4>";
}
document.getElementById("mul_num").innerHTML=localStorage.getItem("mul_score");



function div(){
window.location="div.html";
document.getElementById("s_d").innerHTML='<button id="div_b" onclick="div1()">÷</button>';
localStorage.removeItem("div_score");
}
if(localStorage.getItem("f_div")=="go"){
document.getElementById("div").innerHTML="<h4>Division Score : <b id='div_num'>0</b> latest Score</h4>";
}
div_score=localStorage.getItem("div_score");
document.getElementById("div_num").innerHTML=localStorage.getItem("div_score");



if(localStorage.getItem("f_div")=="go"){
add_score=localStorage.getItem("add_score");
sub_score=localStorage.getItem("sub_score");
mul_score=localStorage.getItem("mul_score");
div_score=localStorage.getItem("div_score");
totel_score=parseInt(add_score)+parseInt(sub_score)+parseInt(mul_score)+parseInt(div_score);
document.getElementById("total_score").innerHTML="<h3>Your World Score : <b>"+totel_score+"</b></h3><h2 id='update'>World Ranking Were Added in Future Updates</h2>";
document.getElementById("at_least").innerHTML="";
}

