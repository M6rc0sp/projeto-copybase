import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { HttpException, HttpStatus } from '@nestjs/common';

export const PATH_DOWNLOADED_FILE = `src/common/utils`;
export const SUPPORTED_FILES = ['xlsx', 'csv'];

export const multerConfig = {
    dest: process.env.UPLOAD_LOCATION || './',
};

export const multerOptions = {
    limits: {
        fileSize: +process.env.MAX_FILE_SIZE || 1024 * 20,
    },
    fileFilter: (req: any, file: any, cb: any) => {
        const ext: string = file.originalname.split('.').pop() || '';
        if (SUPPORTED_FILES.indexOf(ext.toLowerCase()) !== -1) {
            cb(null, true);
        } else {
            cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
        }
    },
    storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
            const uploadPath = multerConfig.dest;
            if (!existsSync(PATH_DOWNLOADED_FILE)) {
                mkdirSync(PATH_DOWNLOADED_FILE);
            }
            cb(null, PATH_DOWNLOADED_FILE);
        },
        filename: (req: any, file: any, cb: any) => {
            cb(null, `${file.originalname}`);
        },
    }),
};
