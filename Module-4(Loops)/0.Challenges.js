/* 
1. Write a while loop that calculates the sum of all numbers from 1 to 5 
   and stores the result in a variable named sum 
*/
let sum = 0;
let number = 1;
while (number <= 5) {
  sum += number; 
  number++; 
}
console.log("1:", sum); // 15

/* 
2. Write a while loop that counts down from five to 1 
   and stores the number in an array named countdown 
*/
let i = 5;
let countdown = [];
while (i >= 1) {
  countdown.push(i);
  i--;
}
console.log("2:", countdown);

/* 
3. Write a do while loop that prompts a user to enter their favourite tea type 
   until they enter "stop". Store each tea type in an array named teaCollection 
   (prompt disabled for Node.js, just a sample logic) 
*/
let teaCollection = [];
let favouriteTeaType;
do {
  // favouriteTeaType = prompt("Enter your favourite tea (type 'stop' to finish)");
  favouriteTeaType = "stop"; // placeholder for demo
  if (favouriteTeaType !== "stop") {
    teaCollection.push(favouriteTeaType);
  }
} while (favouriteTeaType !== "stop");
console.log("3:", teaCollection);

/* 
4. Write a do while loop that adds numbers from 1 to 3 
   and stores the result in a variable named total 
*/
let number2 = 1;
let total = 0;
do {
  total += number2;
  number2++;
} while (number2 <= 3);
console.log("4:", total);

/* 
5. Write a for loop that multiplies each element in an array [2,4,6] by 2 
   and stores the result in a new array named multipliedNumbers 
*/
let array = [2, 4, 6];
let multipliedNumbers = [];
for (let index = 0; index < array.length; index++) {
  multipliedNumbers.push(array[index] * 2);
}
console.log("5:", multipliedNumbers);

/* 
6. Write a for loop that lists all the cities in the array 
   and stores them in a new array named cityList 
*/
let cities = ["Paris", "New York", "Berlin"];
let cityList = [];
for (let c = 0; c < cities.length; c++) {
  cityList.push(cities[c]);
}
console.log("6:", cityList);

/* 
7. Write a for loop that loops through the array ["green tea","black tea","chai","oolong tea"] 
   and stops the loop when it finds "chai". Store all teas before chai in selectedTeas 
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let index = 0; index < teas.length; index++) {
  if (teas[index] === "chai") {
    break;
  }
  selectedTeas.push(teas[index]);
}
console.log("7:", selectedTeas);

/* 
8. Write a for loop that looks through the array ["London","New York","Paris","Berlin"] 
   and skips "Paris". Store the other cities in visitedCities 
*/
let cities2 = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let index = 0; index < cities2.length; index++) {
  if (cities2[index] === "Paris") {
    continue;
  }
  visitedCities.push(cities2[index]);
}
console.log("8:", visitedCities);

/* 
9. Use a for..of loop to iterate through the array [1,2,3,4,5] 
   and stop when the number 4 is found. Store numbers before 4 in smallNumbers 
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log("9:", smallNumbers);

/* 
10. Use a for..of loop to iterate through the array ["chai","green tea","herbal tea","black tea"] 
    and skip "herbal tea". Store the others in PreferredTea 
*/
let tea = ["chai", "green tea", "herbal tea", "black tea"];
let PreferredTea = [];
for (const chah of tea) {
  if (chah === "herbal tea") {
    continue;
  }
  PreferredTea.push(chah);
}
console.log("10:", PreferredTea);

/* 
11. Use a for..in loop to loop through an object of city populations. 
    Stop when Berlin is found. Store previous ones in cityPopulations 
*/
let cityPopulation = {
  london: 890000,
  new_york: 840000,
  paris: 220000,
  berlin: 350000,
};
let city1 = {};
for (let city in cityPopulation) {
  if (city === "berlin") {
    break;
  }
  city1[city] = cityPopulation[city];
}
console.log("11:", city1);

/* 
12. Use a for..in loop to loop through worldCities and 
    skip any city with population below 3 million. Store the rest in largeCities 
*/
let worldCities = {
  sydney: 5000000,
  tokyo: 9000000,
  berlin: 35000000,
  paris: 22000000,
};
let largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log("12:", largeCities);

/* 
13. Write a forEach loop that iterates through ["earl grey","green tea","chai","oolong tea"]. 
    Stop when "chai" is found and store all previous tea types in availableTeas 
    (Note: forEach cannot be broken, so use every/some instead for real stopping) 
*/
let TEAcollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
for (let t of TEAcollection) {
  if (t === "chai") break;
  availableTeas.push(t);
}
console.log("13:", availableTeas);

/* 
14. Write a forEach loop that iterates through ["Berlin","Tokyo","Sydney","Paris"], 
    skip "Sydney" and store others in traveledCities 
*/
let worldCity = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
worldCity.forEach((city) => {
  if (city === "Sydney") return;
  traveledCities.push(city);
});
console.log("14:", traveledCities);

/* 
15. Write a for loop that iterates through [2,5,7,9], 
    skip 7 and multiply the rest by 2. Store results in doubledNumbers 
*/
let number1 = [2, 5, 7, 9];
let doubledNumbers = [];
for (let index = 0; index < number1.length; index++) {
  if (number1[index] === 7) {
    continue;
  }
  doubledNumbers.push(number1[index] * 2);
}
console.log("15:", doubledNumbers);

/* 
16. Use a for..of loop to iterate through ["chai","green tea","black tea","jasmine tea","herbal tea"]. 
    Stop when the current tea name length is greater than 10. Store previous teas in shortTeas 
*/
let chaah = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const t of chaah) {
  if (t.length > 10) {
    break;
  }
  shortTeas.push(t);
}
console.log("16:", shortTeas);
