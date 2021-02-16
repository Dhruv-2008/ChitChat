function addUser(){
    window.location="lets_chat_reoom.html";
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
}