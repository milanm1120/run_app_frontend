class Runner {
    constructor({name, id}){
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