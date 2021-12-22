class Run {
    static all = [];
    constructor({id, time, distance, run_type, comments, runner_id, runner}){
        this.id = id
        this.time = time
        this.distance = distance
        this.run_type = run_type
        this.comments = comments
        this.runner_id = runner_id
        this.runner = runner
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `run-${id}`;
        Run.all.push(this)
    }

    render(){
        return this.element.innerHTML = `
        <div data-id="${this.id}">
            <h3 class= "run type">${this.run_type}</h3>
            <h2 class= "distance">${this.distance}</h2>
            <h2 class= "time">${this.time}</h2>
            <p class= "comments">${this.comments}</p>
        </div>
        `
    }

}