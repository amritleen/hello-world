$(document).ready(function () {
  //  if(jQuery(window).width() < 770)
  //      showLegend = false;    
  console.log("im in js file");
});
function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  console.log('ID TOKEN : ' + id_token);
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}
