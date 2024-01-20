/// <reference types="multer" />
export declare class FileService {
    handleFileUpload(file: Express.Multer.File): Promise<void>;
}
