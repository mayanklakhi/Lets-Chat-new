//YOUR FIREBASE LINKS
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


    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value; 
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+name +"<img class ='user_tick' src = 'tick.png'></h4> ";
    message_with_tag = "<h4 class = 'message_h4'>" + message +"</h4>";
    like_button = "<button class = 'btn btn-warning'id ="+firebase_message_id+" value ="+like+" onclick = 'updateLike(this.id)'>";
    span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'>Like: "+like+ "</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function updateLike(message_id)
{
      console.log("cilckedd on like button - " + message_id);
      likes = document.getElementById(message_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}