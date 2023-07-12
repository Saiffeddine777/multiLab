import sharp from "sharp";

export  const imageTojpeg = async function(path:string){
    try{
    const newPath = path.replace(/\.\w+$/,".jpg")
     await sharp(path)
     .jpeg({quality:90})
     .toFile(newPath)
     return newPath
    }
    catch(err){
        console.log(err)
    }
}

export const imageTopng = async function(path:string){
    try{
     const newPath = path.replace(/\.\w+$/,".png")
     await sharp(path)
      .png({quality:90})
      .toFile(newPath)
      return newPath
    }
    catch(err){
       console.log(err) 
    }
}