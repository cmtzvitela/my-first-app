// Pet
// - Especie
// - Raza
// - Nombre
// - Dueño
// * alimenta
// * duerme
// * juega
// * hace sus necesidades

class Pet {
	constructor(species, breed, name, owner) {
		this.species = species;
		this.breed = breed;
		this.name = name;
		this.owner = {
			firstName: "Daniel",
			lastName: "Mijangos",
		};
	}

	sleep() {
		return `${this.name} esta durmiendo`;
	}

	eat() {
		return `${this.name} esta comiento`;
	}

	getOwnerFullName() {
		return `${this.owner?.firstName} ${this.owner?.lastName}`;
	}

	get ownerName() {
		return this.getOwnerFullName();
	}

	set setOwnerName(owner) {
		if (typeof owner !== "object") {
			throw new Error("Invalid property.");
		}
		this.owner = owner;
	}
}

class Calculator {
	static resultMessage = "El resultado es:";

	static sum(a, b) {
		return `${this.resultMessage} ${a + b}`;
	}
}

// instance.owner

// class Dog extends Pet {
// 	constructor(breed, name, owner, pedigree) {
// 		super("Canis ..", breed, name, owner);
// 		this.pedigree = pedigree;
// 	}

// 	bark() {
// 		return "guauuu";
// 	}
// }

// Perro
// - HERECIA: Pet
// - pedigree
// - longevidad
// * ladrar
// * comen su popo
// * oler la cola