// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC7wHQTWI20HzZk_W0DipSiBpMcM9z24JM",
      authDomain: "kwitter-app-a10f1.firebaseapp.com",
      databaseURL: "https://kwitter-app-a10f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-a10f1",
      storageBucket: "kwitter-app-a10f1.appspot.com",
      messagingSenderId: "441694977597",
      appId: "1:441694977597:web:0c55a8fccfa7a3abdc7454"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name" + Room_names);
       row = "<div class='room_name' id=" + Room_names + "onclick='redirect_to_room_name(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirect_to_room_name(name) 
{
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
} 

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
