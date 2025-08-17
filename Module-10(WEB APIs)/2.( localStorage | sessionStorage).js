/*2. localStorage / sessionStorage

Store data in the browser. */

//LocalStorage Example

localStorage.setItem("username", "ng24");  // store
console.log(localStorage.getItem("username"));  // retrieve
localStorage.removeItem("username");  // remove

//SessionStorage Example

sessionStorage.setItem("token", "123abc");
console.log(sessionStorage.getItem("token"));
sessionStorage.clear();  // removes all session storage items
