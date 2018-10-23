alert("I'm learning JavaScript");
alert("and it's LIT!!!");
document.getElementById("btn").onclick=function changText(){ document.getElementById("demo").innerHTML ="🖕 OFF FOR YOU 🖕";
document.getElementById("btn").onclick=function changText() 
{
    document.getElementById("gif").style.display = "block";
    document.getElementById("btn").style.display = "none";
    document.getElementById("gif").style.margin = "auto";
    document.getElementById("gif").style.marginTop = "23vh";
}
document.getElementById("btn").style.animation = "translateY(3px)";
document.getElementById("btn").style.fontSize ="50px";
document.getElementById("demo").style.fontSize ="50px";
document.getElementById("demo").style.textAlign = "center";
document.getElementById("demo").style.fontFamily = "'Press Start 2P', cursive";
document.getElementById("demo").style.textShadow = "2px 2px 2px red";
document.getElementById("btn").style.display = "block";
document.getElementById("btn").style.margin = "auto";
}
