# Different-Ways-to-Combine-Arrays-in-JavaScript

1. Concat()
The most basic way is by using the concat() method and concating two different arrays.

2. Using … (Spread Operator) in ES6 As Shortcut

3. Merge Arrays With Push
   When you use push, it manipulates or changes the existing array. It does NOT create a new array. So depending on what you're trying to    do. Make sure you keep that in mind.
   Also, when you're trying to push an array to another array. You will need to spread it, otherwise, you will end up getting a nested        array
   
Difference between Spread vs Concat
Spread is fantastic when you know beforehand that you're dealing with arrays. But what happens when the source is something else, like a string. And you want to add that string to the array.
If we spread our string, it will split the word into separate letters. So it doesn't achieve the result we want.
If you know you're dealing with arrays, use spread. But if you might be dealing with the possibility with a non-array, then use concat to merge an array 👍
