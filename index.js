let countEl = document.getElementById("count-el");
let savedEl = document.getElementById("saved-el");
let count = 0;
let saved = savedEl.innerText + "\n";

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();

function add() {
  count += 1;
  countEl.textContent = count;
  console.log("ADD button clicked: Count = " + count);
}

function save() {
  saved =
    saved +
    count +
    " | " +
    hour +
    ":" +
    minute +
    ", " +
    day +
    "/" +
    month +
    "/" +
    year +
    "\n";
  savedEl.innerText = saved;
  console.log("SAVE button clicked at " + date + ": Count = " + count);
  count = 0;
  countEl.textContent = count;
}

function download() {}
