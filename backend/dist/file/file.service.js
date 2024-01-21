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
const fastcsv = require("fast-csv");
const stream_1 = require("stream");
let FileService = class FileService {
    calculateMRR(data) {
        return data.reduce((acc, item) => {
            if (item.status === 'Ativa') {
                let valor = Number(item.valor);
                if (isNaN(valor)) {
                    valor = Number(item.valor.replace(',', '.'));
                }
                const dias = Number(item['cobrada a cada X dias']);
                if (!isNaN(valor) && !isNaN(dias) && dias !== 0) {
                    const monthlyValue = valor / dias * 30;
                    acc += monthlyValue;
                }
            }
            return acc;
        }, 0);
    }
    calculateChurnRate(data) {
        const activeStart = data.filter(item => item.status === 'Ativa').length;
        const cancelled = data.filter(item => item.status === 'Cancelada').length;
        return activeStart > 0 ? cancelled / activeStart : 0;
    }
    excelDateToJSDate(serial) {
        const utc_days = Math.floor(serial - 25569);
        const utc_value = utc_days * 86400;
        const date_info = new Date(utc_value * 1000);
        const fractional_day = serial - Math.floor(serial) + 0.0000001;
        let total_seconds = Math.floor(86400 * fractional_day);
        const seconds = total_seconds % 60;
        total_seconds -= seconds;
        const hours = Math.floor(total_seconds / (60 * 60));
        const minutes = Math.floor(total_seconds / 60) % 60;
        return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
    }
    getDate(item, key) {
        const value = item[key];
        if (typeof value === 'number') {
            return this.excelDateToJSDate(value).toISOString().slice(0, 7);
        }
        else {
            const date = new Date(value);
            return date.toISOString().slice(0, 7);
        }
    }
    async handleFileUpload(file) {
        const buffer = file.buffer;
        const mimetype = file.mimetype;
        let data;
        if (mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            const workbook = XLSX.read(buffer, { type: 'buffer' });
            data = [];
            workbook.SheetNames.forEach(sheetName => {
                const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                data.push(...sheetData);
            });
        }
        else if (mimetype === 'text/csv') {
            const records = [];
            const readableStream = new stream_1.Readable();
            readableStream.push(buffer);
            readableStream.push(null);
            await new Promise((resolve, reject) => {
                fastcsv.parseStream(readableStream, { headers: true })
                    .on('data', (data) => records.push(data))
                    .on('end', resolve)
                    .on('error', reject);
            });
            data = records;
        }
        const groupedData = data.reduce((acc, item) => {
            const month = this.getDate(item, 'data início');
            if (!acc[month]) {
                acc[month] = [];
            }
            acc[month].push(item);
            return acc;
        }, {});
        const metricsByMonth = {};
        for (const month in groupedData) {
            metricsByMonth[month] = {
                mrr: this.calculateMRR(groupedData[month]),
                churnRate: this.calculateChurnRate(groupedData[month])
            };
        }
        const orderedMetricsByMonth = Object.keys(metricsByMonth)
            .sort()
            .reduce((obj, key) => {
            obj[key] = metricsByMonth[key];
            return obj;
        }, {});
        return orderedMetricsByMonth;
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.service.js.map