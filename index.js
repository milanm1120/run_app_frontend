const port = `http://localhost:3000`;
const runCall = new RunService(port);
const form = document.getElementById("run-form");
const dropDown = document.getElementById("runner-dropdown");

runCall.getRuns('run-tracker-')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    debugger
}