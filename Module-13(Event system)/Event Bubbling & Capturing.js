<div id="parent">
  <button id="child">Click</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
}, true); // capturing

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
</script>
