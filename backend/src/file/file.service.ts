import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import * as fastcsv from 'fast-csv';
import { Readable } from 'stream';

@Injectable()
export class FileService {
    // função que recebe os dados e retorna o MRR
    calculateMRR(data: any[]): number {
        return data.reduce((acc: number, item: any) => {
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

    // função que recebe os dados e retorna o churn rate
    calculateChurnRate(data: any[]): number {
        const activeStart = data.filter(item => item.status === 'Ativa').length;
        const cancelled = data.filter(item => item.status === 'Cancelada').length;
        return activeStart > 0 ? cancelled / activeStart : 0;
    }

    // função que recebe um número e retorna uma data
    excelDateToJSDate(serial: number): Date {
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

    // função que recebe o item e a chave e retorna a data
    getDate(item: any, key: string): string {
        const value = item[key];
        if (typeof value === 'number') {
            return this.excelDateToJSDate(value).toISOString().slice(0, 7);
        } else {
            const date = new Date(value);
            return date.toISOString().slice(0, 7);
        }
    }

    // função que recebe o arquivo e retorna os dados
    async handleFileUpload(file: Express.Multer.File) {
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
        } else if (mimetype === 'text/csv') {
            const records: any[] = [];
            const readableStream = new Readable();
            readableStream.push(buffer);
            readableStream.push(null); // Indica o fim do stream
            await new Promise((resolve, reject) => {
                fastcsv.parseStream(readableStream, { headers: true })
                    .on('data', (data) => records.push(data))
                    .on('end', resolve)
                    .on('error', reject);
            });
            data = records;
        }

        // Agrupar os dados por mês
        const groupedData = data.reduce((acc, item) => {
            const month = this.getDate(item, 'data início');
            if (!acc[month]) {
                acc[month] = [];
            }
            acc[month].push(item);
            return acc;
        }, {});

        // Calcular as métricas para cada mês
        const metricsByMonth = {};
        for (const month in groupedData) {
            metricsByMonth[month] = {
                mrr: this.calculateMRR(groupedData[month]),
                churnRate: this.calculateChurnRate(groupedData[month])
            };
        }

        // Ordenar as métricas por mês
        const orderedMetricsByMonth = Object.keys(metricsByMonth)
            .sort()
            .reduce((obj, key) => {
                obj[key] = metricsByMonth[key];
                return obj;
            }, {});

        return orderedMetricsByMonth;
    }
}
