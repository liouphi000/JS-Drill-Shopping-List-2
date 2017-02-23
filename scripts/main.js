function makeArray(item1, item2, item3) {
  return [item1, item2, item3]
}

function addToArray(list, item) {
  list.push(item)
  return list
}

function deleteFromArray(list) {
  list.pop()
  return list
}

function getLength(list) {
  return list.length
}

function getFirstItem(list) {
  return list[0]
}

function getLastItem(list){
  return list[list.length - 1]
}

function makeExciting(list) {
  var exciting = list.map(function(item) {
    return item.toUpperCase() + '!!!'
  })
  return exciting
}
