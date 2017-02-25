# JS-Drill-Shopping-List-2
Time to create a shopping list! You'll be learning about arrays in this exercise.

## Learn

### Arrays
In this drill, you'll be learning about a new type in Javascript: arrays. You can think of an array as a list of stuff. 

For example, here's how we'd represent the three members of the rap group Migos as an array
```javascript
var migos = ["Takeoff", "Quavo", "Offset"]
```

#### Defining an array
As you can see, defining an array is basically just defining a variable, but with square brackets around the items ([]).
We created an array of strings, but we can also create an array of numbers:
```javascript
var evenNumbers = [2, 4, 6, 8]
```
or any data type really. Even other arrays! We call arrays with other arrays inside them nested arrays.
```javascript
var nestedArray = [ [], ["nested", "array"], [true] ]
```
Arrays are special in JavaScript because they have _order_ and _length_.

To get the length of an array we simply use `.length`. For example:
```javascript
var evenNumbers = [2, 4, 6, 8]
console.log(evenNumbers.length) //4
```

#### Referring to array elements
The first element of an array can be accessed at index 0. For example:
```javascript
var migos = ["Takeoff", "Quavo", "Offset"]
console.log(migos[0]) //"Takeoff"
```
Notice the use of square brackets to access array items. To get the 3rd item in this array, we would use index 2.
```javascript
console.log(migos[2]) //"Offset
```
To always get the last item of an array, no matter how long it is, we can use `.length`.
```javascript
var migos = ["Takeoff", "Quavo", "Offset"]
console.log(migos[migos.length]) //"undefined"
```
Whoops! We need to remember that `migos.length` gives us 3...but we actually want 2,
since that's the final index of the array. So we should use `.length - 1` if we always want the last item.
```javascript
var migos = ["Takeoff", "Quavo", "Offset"]
console.log(migos[migos.length - 1]) //"Offset"
```

#### Adding to an array
To add an element to an array, we use the `.push()` method.
Example:
```javascript
var beatles = ["John", "Ringo", "Paul"]
beatles.push("George")
console.log(beatles) //"John", "Ringo", "Paul", "George"
```
As you can see, `push` always adds to the end of the array.

#### Removing from an array
To remove an element from an array, we use the `.pop()` method.
Example:
```javascript
var beatles = ["John", "Ringo", "Paul", "George"]
beatles.pop()
console.log(beatles) //"John", "Ringo", "Paul"
```
Sorry, George. As you can see, `pop()` only removes from the end of an array. To remove from somewhere else in the array, see this thread: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript

#### Looping through an array
To loop through an array, we can use a for loop.
Let's say we want to loop through the migos array, and print out a message for each migos.
```javascript
var migos = ["Takeoff", "Quavo", "Offset"]
for (var i = 0; i < migos.length; i++) { //notice how we use migos.length
  console.log(migos[i] + " is a member of the Migos!") //notice how we use migos[i] to access each item in the array
}
//Takeoff is a member of the Migos!
//Quavo is a member of the Migos!
//Offset is a member of the Migos!
```

## Exercise
1. Fork and clone the exercise onto your local computer
2. Open `index.html` in the browser. Your task it to make all the buttons work (the reset button is already done for you).
3. Open `scripts/main.js` and start filling out the functions!

