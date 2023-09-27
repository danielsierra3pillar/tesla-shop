import { v4 as uuid } from 'uuid'

export const fileNamer = (req: Express.Request, file: Express.Multer.File, callback: Function) => {


    // this part will only be usefull to check if a file its valid or not
    // to handle the error it must be done in the controller

    if (!file) return  callback(new Error('File is empty'), false)


    const fileExtension = file.mimetype.split('/')[1]

    const fileName = `${ uuid() }.${ fileExtension }`

    callback(null, fileName)

}

