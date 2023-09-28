import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {

  getStaticProductImage(imageName: string) {

    const path = join(__dirname, '../../static/produts', imageName)

    console.log('path', path)

    console.log('existsSync(path)', !existsSync(path))

    if ( existsSync(path) )
        throw new BadRequestException(`No product found with image ${imageName}`)

    return path

  }
  
}
