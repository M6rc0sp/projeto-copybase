"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const XLSX = require("xlsx");
const csv = require("csv-parser");
let FileService = class FileService {
    async handleFileUpload(file) {
        const buffer = file.buffer;
        const mimetype = file.mimetype;
        if (mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            const workbook = XLSX.read(buffer, { type: 'buffer' });
            workbook.SheetNames.forEach(sheetName => {
                const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                console.log(data);
            });
            return;
        }
        else if (mimetype === 'text/csv') {
            const results = [];
            csv()
                .on('data', (data) => results.push(data))
                .on('end', () => {
            });
        }
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.service.js.map