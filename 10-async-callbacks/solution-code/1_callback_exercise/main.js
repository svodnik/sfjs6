/*

- Your goal in this exercise is for the last line of code in this file to return the number of odd numbers in the array that's being passed in. Below are the steps that you will likely want to take in order to get there.

- Write a function, 'makeCountingFunction()', that accepts a function as an argument (the "predicate function") and also returns a function. The function that is returned should be able to iterate through an array, apply the predicate function to each item in that array, increment a counter based on the result of applying the predicate function to that item (i.e. does it match what we're looking for?), and lastly, return the final count.

- The predicate function 'isOdd()' should accept an individual number as a parameter and evalute whether or not that number is odd. This function will also need to return something (hint: think boolean values...).

*/

function makeCountingFunction(predicate) {
    return function(numbers) {
        var i;
        var count = 0;
        for (i = 0; i < numbers.length; i++) {
            if (predicate(numbers[i])) {
               count++;
            }
        }
        return count;
    };
}

function isOdd(number) {
    return (number % 2) === 1;
}

function isEven(number) {
    return (number % 2) === 0;
}

/* Once you've filled in the two function definitions above, the line below should package up 'makeCountingFunction()' and 'isOdd()' into a single function that accepts an array of items as a parameter, iterates through it and returns a count of how many of those items are odd numbers. This new function is being assigned to the variable 'countTheOdds'. */

var countTheOdds = makeCountingFunction(isOdd);

/*  The final line below calls our new 'countTheOdds()' function and passes in an array of numbers. Once your code is working, the line below should return the number 4. */

console.log(countTheOdds([1, 2, 3, 4, 5, 6, 7]));


/* BONUS: Create a second predicate function called 'isEven()' that checks whether a number is even. Verify that it returns a value of 3 using the same array in the previous line. */

var countTheEvens = makeCountingFunction(isEven);

console.log(countTheEvens([1,2,3,4,5,6,7]));