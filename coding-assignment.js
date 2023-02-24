

//All questions should be printed to your Browser’s console using console.log()//

//1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.//
//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array. //  
//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).//
//1c. Use a loop to iterate through the array and calculate the average age. //
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
 console.log("Q1A:",ages[ages.length -1] - ages[0]);
 ages.push(22)
 console.log("Q1BCA:", ages[ages.length -1] - ages[0]);

//2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.//
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. //
//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. //

   namesArray =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
   let lengths = namesArray.map(function(element){
    return element.length;
});
    console.log(lengths);
    let sum = lengths.reduce(function(accummulator, currentValue){
        return accummulator + currentValue;
    });
    console.log("Q2A:", sum);
     
    

//3.  How do you access the last element of any array?//
console.log("Q3A: namesArray.length-1");

//4.  How do you access the first element of any array?//
console.log("Q4A: namesArray[0]");
//5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.//

//For example://

//let names = ["Kelly", "Sam", "Kate"]; //   // starting with this array
//let nameLengths = [5, 3, 4]; //            // create a new array//

//6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. //


//7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).//
function twoParameters(word, n);

//8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.//
function createFullName(firstName, lastName){
   return firstName + ' ' + lastName;
}
let fullName = createFullName('Jorge', 'Rivera'); //can also be used as console.log(createFullName('Jorge', 'Rivera')\\
console.log("Q8A:",fullName)


//9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.//
let numbers = [15, 20, 25, 30, 35, 40];
let sumOfAll = 0 
function arrayOfNumbers (numbers){
    for (let i=0; i< numbers.length; i++){
        sumOfAll += numbers[i];
        console.log(sumOfAll)
    }
    if (sumOfAll>100)
    return true;
}
console.log("Q9A:", arrayOfNumbers(numbers))
//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.//
let scores = [ 50, 60, 70, 80, 90];

function findAverage (arrayOfNumbers){
    let sumOfScores = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++){
        sumOfScores += arrayOfNumbers[i];
    }
    return sumOfScores / arrayOfNumbers.length;
}
    console.log("Q10A:", findAverage (scores));

//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.//
function largerAverage(array1,array2) {
if (findAverage(array1) > findAverage(array2)) {
    return true;
} else{
    return false;
}
}
console.log("Q11A:", largerAverage(scores, arrayOfNumbers.length));



//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.//
willBuyDrink(true, 13);
function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.50) {
        console.log("Q12A:", true);
    
    }
} 


//13.  Create a function of your own that solves a problem. //

