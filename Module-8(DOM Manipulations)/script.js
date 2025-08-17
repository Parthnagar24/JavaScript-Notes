/* Example 1: Accessing and Modifying DOM Elements */

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").textContent =
      "The text has after the button was clicked! and this is Example 1-Access DOM Elements";
  });

/* Example 2: Travesal DOM*/

document
  .getElementById("highlightFirstCity") // ✅ Correct ID
  .addEventListener("click", function () {
    const firstCity = document.querySelector("#citiesList li");
    firstCity.classList.add("highlight");
  });

/* Example 3: Manipulating DOM Elements */

document.getElementById("changeOrder").addEventListener("click", function () {
  document.getElementById("coffeeType").textContent = "Espresso";
  coffeeType.style.backgroundColor = "red";
  coffeeType.style.color = "white";
  coffeeType.style.fontWeight = "bold";
});

/* Example 4: Creating and inserting new elements */

document
  .getElementById("addNewItem")
  .addEventListener("mouseover", function () {
    document
      .getElementById("shoppingList")
      .appendChild(document.createElement("li")).textContent = "Egg";
  });

/* Example 5:  removing classes */

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.querySelector("#taskList li:last-child").remove();
  });

/* Example 6: Event handling */

document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("Button clicked!");
  });

/* Example 7 : Event delegation */

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("highlight");
  }
});

/* Example 8: Form handling        ---- */
// example -8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Thank you! Your feedback: "${feedback}" has been submitted.`;
  });

// example -9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

/// example -10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    // Toggle the highlight class on the paragraph
    document.getElementById("descriptionText").classList.toggle("highlight");
  });
