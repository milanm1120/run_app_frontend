class Runner {
    constructor({name, id}){            //constructors create and initialize an object instance of the class
        // debugger
        this.name = name                
        this.id = id
    }

    addToDropDown(){                      //adds runners to dropdown menu
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        dropDown.appendChild(option)
    }
}

setActiveRunner = (e) => {
    let filteredRunner
    Runner.all.forEach(r =>{
        if(r.element === this.element){
            r.element.classList.add 
        }
    })
}