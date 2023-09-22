import { Animal } from "../Animal";
import { SleepWalk } from "../interfaces/SleepWalk";

export class Elephant extends Animal implements SleepWalk {
    weight: number;

    constructor(name: string, age: number, weight: number) {
        super(name, age);
        this.weight = weight;
    }

    makeSound(): void {}

    sleep(): void {}
    walk(): void {}
}
