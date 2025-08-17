//4. IntersectionObserver

//Detect when an element enters the viewport (useful for lazy-loading).

const box = document.querySelector(".box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Box is visible on screen!");
    }
  });
});

observer.observe(box);
