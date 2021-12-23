class RunnerService{
    constructor(port){
        this.port = port
    }

    getRunners(){
        fetch(`${this.port}/runners`)
        .then(response => response.json())
        .then(json => {
            debugger
        })
    }
}