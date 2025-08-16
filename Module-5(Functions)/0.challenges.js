
/* 1. Function 'maketea' takes a type of tea as a parameter and returns a message like "Making green tea". */
function maketea(typeoftea) {
    return `Making ${typeoftea}`;
}
let Teaorder = maketea("green tea");
console.log(Teaorder); // Output: Making green tea

/* 2. Function 'orderTea' takes a tea type and has a nested function 'ConfirmOrder' that returns a confirmation message. */
function orderTea(teaType) {
    function ConfirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return ConfirmOrder();
}
let orderConfirm = orderTea("chai");
console.log(orderConfirm); // Output: Order confirmed for chai

/* 3. Arrow function 'calculateTotal' takes price and quantity, and returns the total cost. */
const calculateTotal = (price, quantity) => price * quantity;
let totalcost = calculateTotal(499, 100);
console.log(totalcost); // Output: 49900

/* 4. Function 'processedTeaOrder' takes another function as a parameter, calls it with "earl grey", and returns the result. */
function processedTeaOrder(maketea) {
    return maketea("earl grey");
}
function maketeaFunc(typeoftea) {
    return `Making: ${typeoftea}`;
}
let order = processedTeaOrder(maketeaFunc);
console.log(order); // Output: Making: earl grey

/* 5. Function 'createTeaMaker' returns another function that takes a tea type and returns a message including a given name. */
function createTeaMaker(named) {
    return function (teaType) {
        return `Making ${teaType} ${named}`;
    };
}
let teaMaker = createTeaMaker("alpha");
let result = teaMaker("chai");
console.log(result); // Output: Making chai alpha
