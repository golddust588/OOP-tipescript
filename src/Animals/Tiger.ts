import { Animal } from "../Animal";
import { SwimHunt } from "../interfaces/SwimHunt";

export class Tiger extends Animal implements SwimHunt {
    wasOutside: boolean;

    constructor(name: string, age: number, wasOutside: boolean) {
        super(name, age);
        this.wasOutside = wasOutside;
    }

    makeSound(): void {}

    swim(): void {}
    hunt(): void {}
}
