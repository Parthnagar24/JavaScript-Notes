document.getElementById("parent").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
});
