const event = new CustomEvent("greet", { detail: "Hello!" });
document.addEventListener("greet", e => console.log(e.detail));
document.dispatchEvent(event);
