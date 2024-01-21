/// <reference types="multer" />
export declare class FileService {
    calculateMRR(data: any[]): number;
    calculateChurnRate(data: any[]): number;
    excelDateToJSDate(serial: number): Date;
    getDate(item: any, key: string): string;
    handleFileUpload(file: Express.Multer.File): Promise<{}>;
}
