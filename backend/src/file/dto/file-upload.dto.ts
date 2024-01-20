import { IsNotEmpty, IsString } from 'class-validator';

export class FileUploadDto {
    @IsNotEmpty()
    @IsString()
    readonly fieldname: string;

    @IsNotEmpty()
    @IsString()
    readonly originalname: string;

    @IsNotEmpty()
    @IsString()
    readonly encoding: string;

    @IsNotEmpty()
    @IsString()
    readonly mimetype: string;

    @IsNotEmpty()
    readonly buffer: Buffer;

    @IsNotEmpty()
    readonly size: number;
}
