import "./style.css";
import { setupCounter } from "./js/counter.js";

document.querySelector("#app").innerHTML = `
  <div class="app-items">
    <h1>Hello World!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
