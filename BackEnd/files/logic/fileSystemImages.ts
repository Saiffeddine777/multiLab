
import * as fs from 'node:fs/promises'
import * as path from 'node:path'



export const stringfyFile  =  async function(fileName:string):Promise<string>{
    console.log(fileName)
    try{
      const buffer = await fs.readFile(fileName)
      const string = buffer.toString('base64')
      return string
    }
    catch(err){
       console.log(err)
    }
    return""
}


export const deleteFile = async function(path:string):Promise<any>{
    try{
      const result = await fs.rm(path)
      console.log(result)
    }
    catch(err){
       console.log(err)
    }
}


export const fromPathToServiceImageString = function(array:any[]){
   const newArray = array.map(async(e,i)=>{
    try{
       const imageString = await  stringfyFile(e.imageUrl)
       e.imageUrl = imageString
       return e
    }
    catch(err){
      console.log(err)
    }
    })
    return newArray
  }

  export const fromPathToTeamMemberImagString= function(array:any[]){
    const newArray = array.map(async(e,i)=>{
      try{
        const teamImageString = await  stringfyFile(e.teamMemberPhotoUrl)
        e.teamMemberPhotoUrl = teamImageString
        return e
      }
      catch(err){
        console.log(err)
      }
    })
    return newArray
  }

  export const fromPathToCertFileString = function(array:any[]){
    const newArray = array.map(async(e,i)=>{
      try{
         const fileString = await stringfyFile(e.fileUrl)
         e.fileUrl = fileString
         return e
      }
    catch(err){
          console.log(err)
      }
    })
    return newArray
  }

  export const fromPathToClientImageString = function(array:any[]){
    const newArray = array.map(async(e,i)=>{
      try{
        const clientImage = await stringfyFile(e.clientsLogoUrl)
        e.clientsLogoUrl = clientImage
        return e
      }catch(err){
         console.log(err)
      }
    })
    return newArray
  }