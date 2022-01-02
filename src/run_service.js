class RunService {
    constructor(port){
        this.port = port
    }

    getRuns(){
        fetch(this.port + `/runs`)              //fetch request makes a promise to the server to grab the requested data
        .then(response => response.json())      //.then runs the coded event after the server requested is completed
        .then(data => {                         //.then return value is still a promise of the "body" of the original API data. 
            for(const run of data){
                let r = new Run(run)
                r.attachToDom()
            }
            console.log("Respose is fullfilled")
        })
        .catch() 
    }

    createRuns(){
        const runInfo = {
            run: {
               run_type: runTypeValue.value,
               time: runTimeValue.value,
               distance: runDistanceValue.value,
               comments: runCommentsValue.value,
               runner_id: dropDown.value
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(runInfo)
        }

        fetch(this.port + `/runs`, configObject)
        .then(response => response.json())
        .then(data => {
            const r = new Run(data)
            r.attachToDom()
        })
    }

    deleteRun(e){
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(`${this.port}/runs/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert("Delete Successful"))
    }
}

