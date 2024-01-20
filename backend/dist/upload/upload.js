"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = exports.multerConfig = exports.SUPPORTED_FILES = exports.PATH_DOWNLOADED_FILE = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const multer_1 = require("multer");
const common_1 = require("@nestjs/common");
exports.PATH_DOWNLOADED_FILE = `src/common/utils`;
exports.SUPPORTED_FILES = ['xlsx', 'csv'];
exports.multerConfig = {
    dest: process.env.UPLOAD_LOCATION || './',
};
exports.multerOptions = {
    limits: {
        fileSize: +process.env.MAX_FILE_SIZE || 1024 * 20,
    },
    fileFilter: (req, file, cb) => {
        const ext = file.originalname.split('.').pop() || '';
        if (exports.SUPPORTED_FILES.indexOf(ext.toLowerCase()) !== -1) {
            cb(null, true);
        }
        else {
            cb(new common_1.HttpException(`Unsupported file type ${(0, path_1.extname)(file.originalname)}`, common_1.HttpStatus.BAD_REQUEST), false);
        }
    },
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const uploadPath = exports.multerConfig.dest;
            if (!(0, fs_1.existsSync)(exports.PATH_DOWNLOADED_FILE)) {
                (0, fs_1.mkdirSync)(exports.PATH_DOWNLOADED_FILE);
            }
            cb(null, exports.PATH_DOWNLOADED_FILE);
        },
        filename: (req, file, cb) => {
            cb(null, `${file.originalname}`);
        },
    }),
};
//# sourceMappingURL=upload.js.map