class RunService {                              //Also known as Adapters
    constructor(port){
        this.port = port
    }

    fetchRuns(){
        fetch(this.port + `/runs`)              //fetch request makes a promise to the server to grab the requested data
        .then(response => response.json())      //.then runs the coded event after the server requested is completed
        .then(data => {                         //.then return value is still a promise of the "body" of the original API data. 
            for(const run of data){             //"for/of" loop iterating through the values of an iterable object "data" which is an array of objects
                let r = new Run(run)
                r.attachToDom()                 //display each individual object on page. "attachToDom()" defined in run.js line 45
            }
            console.log("Respose is fullfilled")
        })
        // .catch() 
    }

    createRuns(){
        const runInfo = {
            run: {
               run_type: runTypeValue.value,
               run_date: runDateValue.value,
               time: runTimeValue.value,
               distance: runDistanceValue.value,      //All Values defined as constaints in index.js.
               comments: runCommentsValue.value,
               runner_id: dropDown.value
            }
        }
        const configObject = {                      //3 things needed for a create: method, heaader and body
            method: 'POST',
            headers: {
                "Content-Type": "application/json",   //"Content-Type" is sending the information to json. "Content-Type" is in quotes because of the dash(-)
                Accept: "application/json"              //Accept is receiving data from json.
            },
            body: JSON.stringify(runInfo)           //changing the JSON data to string, the JSON body info defined in runInfo
        }

        fetch(this.port + `/runs`, configObject)    //
        .then(response => response.json())          //'runs' returned jsonified
        .then(data => {
            const r = new Run(data)
            r.attachToDom()
        })
    }

    // updateRun(run){
        
    // }

    deleteRun(e){
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(`${this.port}/runs/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert("Delete Successful"))
    }
}

