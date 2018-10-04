 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD9wOmVJG5v_4MSElMia0aabAIwaiez2KA",
    authDomain: "updatedportfolio-d4677.firebaseapp.com",
    databaseURL: "https://updatedportfolio-d4677.firebaseio.com",
    projectId: "updatedportfolio-d4677",
    storageBucket: "",
    messagingSenderId: "146707291858"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#submitButton").on("click", function(){
    var subject = $("#subject").val().trim();
    var userContact=$("#userContact").val().trim();
    var userInput = $("#formBody").val().trim();

    database.ref().push({subject: subject, userContact: userContact, userInput: userInput})
})