CommonJS (Node.js)

module.exports / require


// math.js
module.exports.add = (a, b) => a + b;

// main.js
const math = require('./math');
console.log(math.add(2, 3));

CommonJS is dynamic and Node-specific.
