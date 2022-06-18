a=0;
function P(){
    a=a+1;
    document.getElementById("s").innerHTML="score: "+a;
}
function c(){
    localStorage.setItem("sc",a);
}
function N(){
    window.location="index1.html";
}