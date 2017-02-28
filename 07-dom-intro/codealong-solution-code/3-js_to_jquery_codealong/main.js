// Convert favorites list to jQuery:

$(document).ready(function() {
//  var button = document.getElementById('new-thing-button');
  var $button = $('#new-thing-button');
//  var thingList = document.getElementById('fav-list');
  var $thingList = $('#fav-list');
//  var newThingInput = document.getElementById('new-thing');
  var $newThingInput = $('#new-thing');

//  button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault(); // no change
//    var newThing = newThingInput.value;
    var newThing = $newThingInput.val();
//    var newThingLi = document.createElement('li');
    var $newThingLi = $('<li>');
//    var newThingText = document.createTextNode(newThing);
//    newThingLi.appendChild(newThingText);
    $newThingLi.text(newThing); // combines two JS statements into one!
//    thingList.appendChild(newThingLi);
    $thingList.append($newThingLi);
//    newThingInput.value = "";
    $newThingInput.val('');
//  }
  }); // close parameter list for on() method above
});