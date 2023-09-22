export abstract class Animal {
    name: string;
    age: number;

    abstract makeSound(): void;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
