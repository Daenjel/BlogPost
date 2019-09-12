$(document).ready(function(){
    //initiate firebase
    var config = {
        apiKey: "AIzaSyC7reL53IQC2stfUI8_31Oxb-R_W2d4NHY",
        authDomain: "forevertrendy.firebaseapp.com",
        databaseURL: "https://forevertrendy.firebaseio.com",
        projectId: "forevertrendy",
        storageBucket: "forevertrendy.appspot.com",
        messagingSenderId: "326076939838"
      };
      firebase.initializeApp(config);
    $('#google').click( function(){
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().languageCode = 'pt';
        // To apply the default browser preference instead of explicitly setting it.
        // firebase.auth().useDeviceLanguage();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            console.log(token);
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            var email = error.email;
            console.log(email);
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

        firebase.auth().signInWithRedirect(provider);

        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              // ...
            }
            // The signed-in user info.
            var user = result.user;
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    });
});