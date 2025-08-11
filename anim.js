// Typing Animation for Header
var typed = new Typed(".typing", {
  strings: ["a Developer.", "a Problem Solver.", "a Tech Enthusiast."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Programming Code Animation
const codeLines = `function greet() {
console.log("Hello, World!");
}

function add(a, b) {
return a + b;
}

greet();
console.log("Sum:", add(5, 3));
console.log("Learning to code...");
for (let i = 0; i < 5; i++) {
console.log("Line number", i + 1);
}`.split("\n");

const codeContainer = document.getElementById("code-animation");
let lineIndex = 0;

function typeCode() {
  if (lineIndex < codeLines.length) {
    codeContainer.innerHTML += codeLines[lineIndex] + "<br>";
    lineIndex++;
    setTimeout(typeCode, 200);
  } else {
    lineIndex = 0;
    codeContainer.innerHTML = "";
    setTimeout(typeCode, 1000); // Restart after delay
  }
}

typeCode();
