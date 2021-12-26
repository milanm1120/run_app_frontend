class RunService {
    constructor(port){
        this.port = port
    }

    getRuns(){
        fetch(this.port + `/runs`)
        .then(response => response.json())
        .then(data => {
            for(const run of data){
                let r = new Run(run)
                r.attachToDom()
            }
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

    // updateRun(run){
    //     const {run_type, distance, time, comments, id} = run
    //     const runInfo = {
    //         run_type,
    //         distance,
    //         time,
    //         comments
    //     }

    //     const configObject = {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify(runInfo)
    //     }

    //     fetch(`${this.port}/runs/${id}`, configObject)
    //     .then(response => response.json())
    //     .then(data => {
    //         // const r = new Run(data)
    //         run.render()
    //     })
    // }

    deleteRun(e){
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(`${this.port}/runs/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    }
}

