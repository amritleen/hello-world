$(document).ready(function () {
  //  if(jQuery(window).width() < 770)
  //      showLegend = false;    
  console.log("im in js file");
});
      function onSignIn(googleUser) {
        
        alert('in onSignIn');
        debugger;  
        console.log('Logged in as: ' + googleUser.getBasicProfile().getEmail());
    }
