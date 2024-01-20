/// <reference types="multer" />
export declare const PATH_DOWNLOADED_FILE = "src/common/utils";
export declare const SUPPORTED_FILES: string[];
export declare const multerConfig: {
    dest: string;
};
export declare const multerOptions: {
    limits: {
        fileSize: number;
    };
    fileFilter: (req: any, file: any, cb: any) => void;
    storage: import("multer").StorageEngine;
};
