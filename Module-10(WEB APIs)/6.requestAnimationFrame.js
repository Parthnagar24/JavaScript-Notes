/*6. requestAnimationFrame()

Create smooth animations in the browser.*/

const box = document.querySelector(".box");
let pos = 0;

function animate() {
  pos += 2;
  box.style.left = pos + "px";

  if (pos < 300) {
    requestAnimationFrame(animate);  // call animate again
  }
}

animate();
