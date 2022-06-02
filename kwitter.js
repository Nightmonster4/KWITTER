function login(){
  storename = document.getElementById("loginid").value;
  localStorage.setItem("giveitem", storename);

  window.location = "kwitter_room.html";
}