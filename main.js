$(document).ready(init);
var fb = new Firebase('https://rickydaddychat.firebaseio.com');
var $joinBtn = $('#join');
var $sendBtn = $('#send');

function init(){
  var messagesRef = fb.child('messages')
  var usersRef = fb.child('users');
  $joinBtn.on('click', userJoins);
  $sendBtn.on('click', sendMessage);

}

function userJoins(){
  $joinBtn.hide();
  $sendBtn.show();
  var userName = $('#inputBox').val();
  fb.child('users').push(userName);
  fb.child('users').on('child_added', function(snapshot){
    console.log(snapshot.val())
    // debugger;
  })
  fb.on('value', function(snapshot){
    console.log(snapshot.val())
  })
}

function sendMessage(){

}