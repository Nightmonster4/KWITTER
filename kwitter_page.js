var firebaseConfig = { apiKey: "AIzaSyBFjZirMagJY_ypLLg0HLwnVlO9PmhhEF4", 
authDomain: "pushpali.firebaseapp.com", 
databaseURL: "https://pushpali.firebaseio.com", 
projectId: "pushpali", 
storageBucket: "pushpali.appspot.com", 
messagingSenderId: "384756082835", 
appId: "1:384756082835:web:14b804867acb47c3ecc566", 
measurementId: "G-000F2Q8097" }; 
// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("giveitem");
room_name = localStorage.getItem("room_name");

function sendmsg(){
      getmsg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
      
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         name = message_data["name"];
         like = message_data["like"];
         message = message_data["message"];

      frow = "<h2>"+ name + " <img src = 'tick.png' class='user_tick'></h2>";
      Srow = "<h2 class='message_h4'>" + message + "</h2>";

      like_button ="<button class='btn btn-warning' id="+ firebase_message_id +" value="+ like + " onclick='updateLike(this.id)'>"
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like + "</span></button><hr>";
      row = frow + Srow + like_button + span_with_tag;

      document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout(){
      localStorage.removeItem("giveitem");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}