
const firebaseConfig = {
      apiKey: "AIzaSyCYOLTU5EDmyJmGd5I-jlzFsxaivStyyc8",
      authDomain: "kwitter-f88ae.firebaseapp.com",
      databaseURL: "https://kwitter-f88ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-f88ae",
      storageBucket: "kwitter-f88ae.appspot.com",
      messagingSenderId: "219673816594",
      appId: "1:219673816594:web:69a186787a59a61210b2cb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =
"Welcome " + user_name + "!";
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}