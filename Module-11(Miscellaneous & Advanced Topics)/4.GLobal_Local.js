let globalVar = "Global";

function test() {
  let localVar = "Local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}
test();
// console.log(localVar); ❌ Error
