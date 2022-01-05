const port = `http://localhost:3000`;
const runCall = new RunService(port);         //instanciates a new RunService object used in the constructor on line 2 of run_servies.js
const runnerCall = new RunnerService(port);   
const form = document.getElementById("run-form");   //Setting "run-form" (found in index.html line 29) to a constant "form". 
const newRunner = document.getElementById("runner-name");
const dropDown = document.getElementById("runner-dropdown");
const runTypeValue = document.getElementById("run-type");
const runDateValue = document.getElementById("run-date");
const runTimeValue = document.getElementById("run-time");
const runDistanceValue = document.getElementById("run-distance");
const runCommentsValue = document.getElementById("run-comments");

runCall.fetchRuns()         //fetchRuns() defined in run_services
runnerCall.fetchRunners()   //fetchRunners()) defined in runner_services

// To 'Submit' to form ---------------------------------------
form.addEventListener('submit', handleSubmit)   //adding an eventListener to the variable "form"(defined above, line 4) listending for a form 'submit' to execute handleSubmit function(CALLBACK function).

function handleSubmit(e){     //used as a callback funciton in the .addEventListener on line 16
  alert('A New Run Was Added')
  console.log("A New Run Form Was Submitted", e.target)       //target tells us where the event occured
  e.preventDefault();                                          //prevents page refresh
    runCall.createRuns()
    document.getElementById("run-form").reset();              //resets the form after submission
}
// ----------------------------------------------------------

// Get the modal
let modal = document.getElementById("AddModal");

// Get the button that opens the modal
let btn = document.getElementById("AddRunButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

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


  