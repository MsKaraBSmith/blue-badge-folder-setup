//Create a function that will take an ARRAY of numbers and will return the average.

function averageNumbers(arrayOfNumbers) {
    // Have a loop run through the array.
    // Everytime it goes through the array we need to keep track of a total and add the current array value.
    let total = 0;
    arrayOfNumbers.forEach(number => (total = total + number ));

    const average = total/arrayOfNumbers.length;

    return average;


};

let testArrayOfNumbers = [5, 5, 5, 5];

// console.log(averageNumbers(testArrayOfNumbers));

let people = [
    { name: "John", age: 29 },
    { name: "Ginger", age: 38 },
];

let justNames = people.map((person) => person.name);

// console.log(justNames);

let justAge = people.map((person) => person.age);

const { get } = require("../../server-challenge/controllers/animal-controller");
// console.log(justAge);

// console.log(averageNumbers(justAge));

const weather = require("./json/weather.json")

// console.log(weather.week[0].day);

// console.log(weather.week[0].high);
// console.log(weather.week[1].high);
// console.log(weather.week[2].high);
// console.log(weather.week[3].high);
// console.log(weather.week[4].high);

// Use a for loop and go through all the highs
for( let i = 0; i<weather.week.length; i++) {
    console.log(weather.week[i].high);
}

// Create a function that will grab all the highs and return the highs in an array

function getHighs(){
    const highs = weather.week.map(day => day.high);
    // console.log(highs);
    return highs;
}
// Console.log the average temp of highs from the wetather obj
// getHighs();
const highArray = getHighs();
console.log(averageNumbers(highArray));
console.log(averageNumbers(getHighs()));

// Create a function that will grab all the lows and return the lows in an array
function getLows(){
    const lows = weather.week.map(day => day.low);
    return lows;
}
console.log(getLows());

function getCloudCover() {
    const getCloudCover = weather.week.map((day) => day["cloud-cover"]);
    return getCloudCover;
}
console.log(getCloudCover());