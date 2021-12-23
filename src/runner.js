class Runner {
    constructor({name, age, gender, height, weight, id}){
        this.name = name
        this.age = age
        this.gender = gender
        this.height = height
        this.weight = weight
        this.id = id
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.name
        dropDown.appendChild(option)
    }
}