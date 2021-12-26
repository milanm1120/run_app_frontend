const port = `http://localhost:3000`;
const runCall = new RunService(port);
const runnerCall = new RunnerService(port);
const form = document.getElementById("run-form");
const dropDown = document.getElementById("runner-dropdown");
const runTypeValue = document.getElementById("run-type");
const runTimeValue = document.getElementById("run-time");
const runDistanceValue = document.getElementById("run-distance");
const runCommentsValue = document.getElementById("run-comments");
//const runnerIdValue = document.getElementById("run-comments");

runCall.getRuns()
runnerCall.getRunners()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    runCall.createRuns()
}

// Get the modal
let modal = document.getElementById("AddRunModal");

// Get the button that opens the modal
let btn = document.getElementById("AddRunButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("RunClose")[0];

let submit = document.getElementById("Submit");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the submit button, close modal
submit.onclick = function() {
      modal.style.display = "none";
  }