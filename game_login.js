var first_name;
var last_name;

function addUser() {
    first_name = document.getElementById("txt_userName1").value;
    last_name = document.getElementById("txt_userName2").value;

    localStorage.setItem("first_name", first_name);
    localStorage.setItem("last_name", last_name);

    window.location = "game.html";
}