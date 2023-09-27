

export const fileFilter = (req: Request, file: Express.Multer.File, callback: Function) => {


    // this part will only be usefull to check if a file its valid or not
    // to handle the error it must be done in the controller

    if (!file) return  callback(new Error('File is empty'), false)


    const fileExtension = file.mimetype.split('/')[1]
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif']

    if (validExtensions.includes( fileExtension )) {
        return callback(null, true)
    }

    callback(null, false)

}
