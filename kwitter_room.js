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

    get_username = localStorage.getItem("giveitem");
    document.getElementById("user_name").innerHTML = "Welcome " + get_username + "!"
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+ room_name +" </div><hr>";
      document.getElementById("output").innerHTML += row;
      });
      });
}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function addroom(){
      console.log("hi");
      room_name = document.getElementById("addroom").value;
      firebase.database().ref("/").child(room_name).update({
            Important:"My website my rooms"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("giveitem");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}