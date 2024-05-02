export declare class ResultDto {
    success: boolean;
    code: number;
    message: string;
    data?: object;
    constructor(success: boolean, code: number, message: string, data?: object);
}
