var firebaseConfig = {
    apiKey: "AIzaSyCb7vLi_57BoDlQFn2ti3ixwS3Q3wvF0sk",
    authDomain: "chatgerman-8b6b6.firebaseapp.com",
    databaseURL: "https://chatgerman-8b6b6-default-rtdb.firebaseio.com",
    projectId: "chatgerman-8b6b6",
    storageBucket: "chatgerman-8b6b6.appspot.com",
    messagingSenderId: "410743321995",
    appId: "1:410743321995:web:5ffbbadbcc52d054af2b8e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



function add()
{
    username=document.getElementById("gh").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding_user"
    });
localStorage.set("user", username);
    
}