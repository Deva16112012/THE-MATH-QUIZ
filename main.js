function addUser(){
    pl1=document.getElementById("un-1").value;
    pl2=document.getElementById("un-2").value;
    localStorage.setItem("pls",pl1);
    localStorage.setItem("pls1",pl2);
    window.location="quiz_game_page.html";
}