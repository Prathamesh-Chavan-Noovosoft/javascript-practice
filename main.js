import "./css/style.css";
import { setupCounter } from "./js/counter.js";

// const paragraphs = document.querySelectorAll("p");
// alert(paragraphs[0].textContent);

// Handle Button Clicks
const btn = document.querySelector(".press-me");
btn.addEventListener("click", () => {
    console.log("pressed");
    alert("Button was pressed");
});

// Adding Content with buttons
const story = document.body.querySelector(".story");
const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
    story.textContent = "It was a dark and stormy night...";
});
const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
    story.textContent = "";
});

// Add HTML Through DOM
document.querySelector("#app").innerHTML = `
  <div class="app-items">
    <h1>Hello World!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;
// Using counter
setupCounter(document.querySelector("#counter"));

// Add child through DOM
const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
    // Only add a child if we don't already have one
    // in addition to the text node "parent"

    // if (parent.childNodes.length > 1) {
    //     return;
    // }
    const child = document.createElement("div");
    child.classList.add("child");
    child.textContent = "child div";
    parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
    const child = document.body.querySelector(".child");
    parent.removeChild(child);
});
