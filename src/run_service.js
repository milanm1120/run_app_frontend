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
    }

}