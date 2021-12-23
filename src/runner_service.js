class RunnerService{
    constructor(port){
        this.port = port
    }

    getRunners(){
        fetch(`${this.port}/runners`)
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                const r = new Runner(element)
                r.addToDropDown()
            })
        })
    }
}