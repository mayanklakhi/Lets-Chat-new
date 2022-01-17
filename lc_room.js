var firebaseConfig = {
      apiKey: "AIzaSyA-UmoCsf-PvK10bW2zLNHiW2wW7L-8L0U",
      authDomain: "lets-chat-7aa10.firebaseapp.com",
      databaseURL: "https://lets-chat-7aa10-default-rtdb.firebaseio.com",
      projectId: "lets-chat-7aa10",
      storageBucket: "lets-chat-7aa10.appspot.com",
      messagingSenderId: "1024392248998",
      appId: "1:1024392248998:web:b04b3907fb51a1ba233e67"
    };
    
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name + "!"; 

function addroom(){
room_name = document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose : "add room name"
});
localStorage.setItem("room_name",room_name);
window.location  = "lc_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Roomname- "+ Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' > #" +Room_names+"</div></hr>";
       document.getElementById("output").innerHTML += row;     
        //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lc_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}