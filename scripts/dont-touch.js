var items = ['cheese', 'milk', 'eggs']
var result = makeArray(items[0], items[1], items[2]);
var list = document.getElementById('list');

//Testing makeArray
if (
  result && result.length && items.length === result.length &&
  items.every(function(item) {
    return result.indexOf(item) > -1;
  })) {
    console.log('SUCCESS: `makeArray` works!');
    clearList();
    renderList(result);
  } else {
    console.error('FAILURE: `makeArray` is not working');
  }

//Testing addToArray
var newItems = ['bananas', 'ice cream', 'candy', 'apples', 'potatoes']

var addButton = document.getElementById('add');
addButton.addEventListener('click', function() {
  var randomValue = newItems[Math.floor(newItems.length * Math.random())];
  var current = getCurrentList()
  var copy = getCurrentList()
  var result2 = addToArray(current, randomValue);

  if (result2 && result2.length && result2.length > copy.length) {
    console.log('SUCCESS: `makeArray` works!')
    //clear list
    clearList();
    //readd the new list
    renderList(result2);
  } else {
    console.error('FAILURE: `addToArray` is not working')
  }
})

//Testing deleteFromArray
var deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function() {
  var currentList = getCurrentList()
  var copy = getCurrentList()
  var newList = deleteFromArray(currentList)
  console.log('newList', newList)
  console.log('newList length', newList.length);
  console.log('copy length', copy.length);
  if (newList && newList.length && newList.length === copy.length - 1) {
    console.log('SUCCESS: `deleteFromArray` works!')
    clearList();
    renderList(newList);
  } else {
    console.error('FAILURE: `deleteFromArray` is not working')
  }
})

//Testing length button
var lengthButton = document.getElementById('length');
lengthButton.addEventListener('click', function() {
  var currentList = getCurrentList();
  var listLength = getLength(currentList);
  if (listLength === currentList.length) {
    console.log('SUCCESS: `getLength` works!')
    clearDisplay();
    renderDisplay('Length', listLength);
  } else {
    console.error('FAILURE: `getLength` is not working')
  }
})

//testing getFirstItem
var firstButton = document.getElementById('first-item');
firstButton.addEventListener('click', function() {
  var currentList = getCurrentList();
  var firstItem = getFirstItem(currentList)
  if (firstItem === currentList[0]) {
    console.log('SUCCESS: `getFirstItem` works!')
    clearDisplay();
    renderDisplay('First item', firstItem);
  } else {
    console.error('FAILURE: `getFirstItem` is not working')
  }
})

//testing getLastItem
var lastButton = document.getElementById('last-item');
lastButton.addEventListener('click', function() {
  var currentList = getCurrentList();
  var lastItem = getLastItem(currentList)
  if (lastItem === currentList[currentList.length - 1]) {
    console.log('SUCCESS: `getLastItem` works!')
    clearDisplay();
    renderDisplay('Last item', lastItem);
  } else {
    console.error('FAILURE: `getLastItem` is not working')
  }
})

//testing makeExciting
var excitingButton = document.getElementById('exciting');
excitingButton.addEventListener('click', function() {
  var currentList = getCurrentList();
  var excitingList = makeExciting(currentList);
  if (excitingList && excitingList.length && excitingList.length === currentList.length) {
    console.log('SUCCESS: `makeExciting` works!');
    clearList();
    renderList(excitingList);
  } else {
    console.error('FAILURE: `makeExciting` is not working')
  }
})

//reset button
var reset = document.getElementById('reset')
reset.addEventListener('click', function() {
  clearList();
  renderList(items);
})

//Utilities
function clearList() {
  var currentList = document.getElementById('list')
  while (currentList.firstChild) {
    currentList.removeChild(currentList.firstChild);
  }
}

function renderList(arraylist) {
  arraylist.forEach(function(food) {
    var listItem = document.createElement('li');
    listItem.className += "list-group-item"
    listItem.textContent = food
    list.appendChild(listItem)
  })
}

function getCurrentList() {
  var currentList = []
  document.querySelectorAll('#list > li').forEach(function(item) {
    currentList.push(item.textContent)
  })
  return currentList
}

function clearDisplay() {
  var display = document.getElementById('display');
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
}

function renderDisplay(text, value) {
  var display = document.getElementById('display');
  display.textContent = text + ': ' + value;
}
