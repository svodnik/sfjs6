function addToList($list, item) {
  var $itemLi = $('<li>').text(item);
  $list.append($itemLi);
  addCompleteLinks($itemLi);
}

function addCompleteLinks($lis) {
  var $completedLink = $('<span>').html(' complete task').addClass('complete-task');
  // $lis is a collection, and the following command
  // acts on each instance in the collection
  $lis.append($completedLink);

  $('.complete-task').on('click', function(event) {
    // We don't need `event.preventDefault()` here
    // because there is no weird default action
    // when clicking on a `span` element.
    $(this).parent().addClass('completed');
  });
}

var $todoList = $('#todo-list');
var $button = $('#new-item-button');
var $newItemInput = $('#new-item');

// The following statement results in a collection
var $todoListItems = $('#todo-list .todo-item');
addCompleteLinks($todoListItems);

$button.on('click', function(event) {
  event.preventDefault();
  var newItem = $newItemInput.val();
  if (newItem === '') {
    alert('You must type in a value!');
  } else {
    addToList($todoList, newItem);
    $newItemInput.val('');
  }
});

var $todoList = $('#todo-list');

$todoList.on('mouseenter mouseleave', 'li', function(event) {
  if (event.type === 'mouseenter') {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  } else if (event.type === 'mouseleave') {
    $(this).siblings().removeClass('inactive');
  }
});

