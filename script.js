// ================================
// Part 2: JavaScript Functions
// ================================

// Global variable (scope demo)
let globalCount = 0;

// Reusable function with parameters & return
function addNumbers(a, b) {
  return a + b;
}

// Function demonstrating local scope
function incrementGlobal() {
  let localVar = 1; // only accessible here
  globalCount += localVar;
  return globalCount;
}

// Event listener for calculation
document.getElementById("calcBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = addNumbers(num1, num2); // function with return value
  document.getElementById("result").textContent = 
    `Sum: ${result} | Global Counter: ${incrementGlobal()}`;
});

// ================================
// Part 3: CSS + JS Animation Combo
// ================================

// Animate box on button click
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", () => {
  box.classList.toggle("animate"); // toggle animation class
});

// Modal functionality
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("closeModal");

// Open modal
modalBtn.addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hide");
  setTimeout(() => modal.classList.remove("show"), 500); // wait for fadeOut
});
