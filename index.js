const port = `http://localhost:3000`;
const runCall = new RunService(port);
const form = document.getElementById("run-form");
const dropDown = document.getElementById("runner-dropdown");
const runTypeValue = document.getElementById("run-type");
const runTimeValue = document.getElementById("run-time");
const runDistanceValue = document.getElementById("run-distance");
const runCommentsValue = document.getElementById("run-comments");
//const runnerIdValue = document.getElementById("run-comments");

runCall.getRuns('run-tracker-')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    runCall.createRuns()
}