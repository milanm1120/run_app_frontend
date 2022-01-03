class Runner {
    constructor({name, id}){            //constructors create and initialize and object instance of the class
        this.name = name                
        this.id = id
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        dropDown.appendChild(option)
    }
}