/*
1. Declare an array named "teaFlavours" that contains the strings "green tea", "black tea" and "Oolong tea".
   Access the first element of the array and store it in a variable named "firstTea".
*/

let teaFlavours = ["green tea", "black tea", "Oolong tea"];
let firstTea = teaFlavours[0];
console.log(firstTea); // green tea

/*
2. Declare an array named "cities" containing "London", "Tokyo", "Paris", and "New York".
   Access the third element in the array and store it in the variable named "favouriteCity".
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
let favouriteCity = cities[2];
console.log(favouriteCity); // Paris

/*
3. You have an array named "teaTypes" containing "herbal tea", "white tea", and "masala chai".
   Change the second element of the array to "Jasmine Tea".
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "Jasmine Tea";
console.log(teaTypes); // ["herbal tea", "Jasmine Tea", "masala chai"]

/*
4. Declare an array named "citiesVisited" containing "Mumbai" and "Sydney". Add "Berlin" to the array using the push method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited); // ["Mumbai", "Sydney", "Berlin"]

/*
5. You have an array named "teaOrders" with "chai", "iced tea", "matcha", and "Earl Grey".
   Remove the last element of the array using the pop method and store it in a variable named "lastOrder".
*/

let teaOrders = ["chai", "iced tea", "matcha", "Earl Grey"];
let lastOrder = teaOrders.pop();
console.log(lastOrder); // Earl Grey
console.log(teaOrders); // ["chai", "iced tea", "matcha"]

/*
6. You have an array named "popularTea" containing "green tea", "oolong tea", and "chai".
   Create a soft copy of this array named "softCopyTea".
*/

let popularTea = ["green tea", "oolong tea", "chai"];
let softCopyTea = popularTea; // soft copy (reference)
console.log(softCopyTea);

/*
7. You have an array named "topCities" containing "Berlin", "Singapore", and "New York".
   Create a hard copy of this array named "hardCopyCities".
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = topCities.slice(); // hard copy
console.log(hardCopyCities);

/*
8. You have two arrays: "europeanCities" containing "Paris" and "Rome" 
   and "asianCities" containing "Tokyo" and "Bangkok".
   Merge these two arrays into a new array named "worldCities".
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities); // ["Paris", "Rome", "Tokyo", "Bangkok"]

/*
9. You have an array named "teaMenu" containing "masala chai", "oolong chai", "earl grey".
   Find the length of the array and store it in a variable named "menuLength".
*/

let teaMenu = ["masala chai", "oolong chai", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength); // 3

/*
10. You have an array named "cityBucketList" containing "Kyoto", "London", "Cape Town", and "Vancouver".
    Check if "London" is in the array and store the result in a variable named "isLondonInList".
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList); // true
