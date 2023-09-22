import { Logger } from "./Logger";

type animals = "elephant" | "tiger" | "zebra";

export class Zookeeper {
    private timeNow: Date = new Date();

    feed(animal: animals): void {
        const logger = Logger.getInstance();
        logger.log(`${animal} was fed at ${this.getTime(this.timeNow)}`);
    }

    private getTime(timeNow: Date): string {
        const hours = timeNow.getHours();
        const minutes = timeNow.getMinutes();
        const seconds = timeNow.getSeconds();

        return `time: ${hours}:${minutes}:${seconds}`;
    }
}
