import { Injectable } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

@Injectable()
export class FileService {
    handleFileUpload(file: MulterModule) {
        console.log(file);
        // Aqui você pode adicionar a lógica para salvar o arquivo no banco de dados, no sistema de arquivos, etc.
    }
}