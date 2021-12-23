const port = `http://localhost:3000`;
const runCall = new RunService(port);
const form = document.getElementById("run-form");
const dropDown = document.getElementById("runner-dropdown");
const RunTypeValue = document.getElementById("run-type");
const RunTimeValue = document.getElementById("run-time");
const RunDistanceValue = document.getElementById("run-distance");
const RunCommentValue = document.getElementById("run-comments");

runCall.getRuns('run-tracker-')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    runCall.createRuns()
}