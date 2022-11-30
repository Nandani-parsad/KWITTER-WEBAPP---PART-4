//YOUR FIREBASE LINKS
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


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}