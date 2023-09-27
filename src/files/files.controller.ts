import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from './helpers/fileNamer.helper';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('product')
  @UseInterceptors( FileInterceptor('file', 
  { 
    fileFilter: fileFilter,
    storage: diskStorage({
      destination: './static/products',
      filename: fileNamer,
    })
  }))
  uploadFile(
    @UploadedFile() 
    file: Express.Multer.File 
    ) {


      if (!file) {

        throw new BadRequestException('Make sure that the file is in the accepted extentions')

      }

      const secureUrl = `${ file.filename }`

    return {
      secureUrl
    }
  }

}
