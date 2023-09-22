import { Animal } from "../Animal";
import { JumpRun } from "../interfaces/JumpRun";

export class Zebra extends Animal implements JumpRun {
    maxSpeed: number;
    origin: string;

    constructor(name: string, age: number, maxSpeed: number, origin: string) {
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }

    makeSound(): void {}

    jump(): void {}
    run(): void {}
}
