//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}

	get species(){
		return this._species;
	}

	makeSound(){
		console.log(this._sound);
	}
}

class Dog extends Animal {
	constructor(dog){
		super(dog);
	}
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(cat){
		super(cat);
	}
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
