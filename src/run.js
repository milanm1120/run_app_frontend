class Run {
    static all = [];
    static container = document.getElementById("runs-container")
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
        this.element.addEventListener('click', this.handleClick)
        Run.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
            <h3 class= "run type">${this.run_type}</h3>
            <h2 class= "distance">${this.distance} Miles</h2>
            <h2 class= "time">${this.time} Minutes</h2>
            <p class= "comments">${this.comments}</p>
        </div>
            <button class="edit" data-id=${this.id}>Edit Run</button>
            <button class="delete" data-id=${this.id}>Delete Run</button>
        `
        return this.element
    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit Run"){
            console.log(e.target)
            this.createEditForm()
        }else if(e.target.innerText === "Delete Run"){
            console.log(e.target)
        }else if(e.target.innerText === "Save Run"){
            console.log(e.target)
        }
    }

    createEditForm(){
        const div = this.element.querySelector('div');
        for(const element of div.children){
            let inputValue = element.innerText;
            let name = element.classList[0];
            element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
        }
        //debugger
    }

    attachToDom(){
        Run.container.appendChild(this.render())
    }

}