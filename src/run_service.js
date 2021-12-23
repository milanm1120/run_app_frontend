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
        const RunInfo = {
            run: {
               run_type: RunTypeValue.value,
               time: RunTimeValue.value,
               distance: RunDistanceValue.value,
               comments: RunCommentsValue.value,
               runner_id: dropDown.value
            }
        }
        fetch(this.port + `/runs`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

}