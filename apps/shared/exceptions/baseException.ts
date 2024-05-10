export class BaseException extends Error {
    constructor(readonly message: string, readonly statusCode: number) {
        super(message);
        this.name = 'BaseException';
        this.statusCode = statusCode;
    }
}
