// Initialize Firebase
var config = {
    apiKey: "AIzaSyByltC3JIKFE7DP4GaRikdXUx3nrauJCrY",
    authDomain: "new-secret-app.firebaseapp.com",
    databaseURL: "https://new-secret-app.firebaseio.com",
    storageBucket: "new-secret-app.appspot.com",
    messagingSenderId: "465362591766"
};
firebase.initializeApp(config);

// https://firebase.google.com/docs/reference/js/firebase.database
var messageAppReference = firebase.database();

$(document).ready(function() {
    $('#message-form').submit(function (event) {
        // by default a form submit reloads the DOM which will subsequently reload all our JS
        // to avoid this we preventDefault()
        event.preventDefault()

        // grab user message input
        var message = $('#message').val()

        // clear message input (for UX purposes)
        $('#message').val('')

        // create a section for messages data in your db
        var messagesReference = messageAppReference.ref('messages');

        // use the push method to save data to the messages
        messagesReference.push({
            message: message,
            votes: 0
        });
        console.log(messagesReference);
    });
});


