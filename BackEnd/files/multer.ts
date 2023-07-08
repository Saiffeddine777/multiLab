import multer from "multer"


const storageServices = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"services")
    },
    filename:(req,file,cb)=>{
       cb(null ,file.fieldname)
    }
})

const upload = multer({storage:storageServices})
