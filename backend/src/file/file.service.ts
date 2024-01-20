import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import * as XLSX from 'xlsx';
import * as csv from 'csv-parser';

@Injectable()
export class FileService {
    async handleFileUpload(file: Express.Multer.File) {
        const buffer = file.buffer;
        const mimetype = file.mimetype;

        if (mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            const workbook = XLSX.read(buffer, { type: 'buffer' });
            // processar workbook aqui
            // Para cada planilha no workbook
            workbook.SheetNames.forEach(sheetName => {
                // Converter a planilha em um array de objetos JSON
                const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                console.log(data);

                // Aqui você pode adicionar a lógica para processar os dados
                // e calcular as métricas necessárias
            });
            return;
        } else if (mimetype === 'text/csv') {
            const results = [];
            csv()
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    // processar results aqui
                });
        }
    }
}

