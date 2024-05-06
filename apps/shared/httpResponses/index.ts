export class HttpResponse {
    constructor(public statusCode: number, public data: any) {}

    public static ok(data: unknown): HttpResponse {
        return {
            statusCode: 200,
            data,
        }
    }

    public static created(data: unknown): HttpResponse {
        return {
            statusCode: 201,
            data,
        }
    }
}
