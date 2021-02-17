function addUser(){
    window.location="lets_chat_room.html";
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
}