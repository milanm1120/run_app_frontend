class RunService {
    constructor(port){
        this.port = port
    }

    getRuns(){
        fetch(this.port + `/runs`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

}