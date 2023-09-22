export class Logger {
    private static instance: Logger;
    messages: string[];

    private constructor() {
        this.messages = [];
    }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(messege: string): void {
        console.log(messege);
        this.messages.push(messege);
        console.log(this.messages); // for testing
    }
}
