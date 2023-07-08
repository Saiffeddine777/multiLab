

import * as fs from 'node:fs/promises'
import * as path from 'node:path'



export const readImage  =  async function(fileName:string):Promise<string>{
    const filePath = path.resolve(__dirname,"..","servicesImages",fileName)
    console.log(filePath)
    try{
      const buffer = await fs.readFile(filePath)
      const string = buffer.toString('base64')
      return string
    }
    catch(err){
       console.log(err)
    }
    return""
}


export const readCertficateFile  =  async function(fileName:string):Promise<string>{
    const filePath = path.resolve(__dirname,"..","certificates",fileName)
    console.log(filePath)
    try{
      const buffer = await fs.readFile(filePath)
      const string = buffer.toString('base64')
      return string
    }
    catch(err){
       console.log(err)
    }
    return""
}

export const readImageTeam  =  async function(fileName:string):Promise<string>{
    const filePath = path.resolve(__dirname,"..","team",fileName)
    console.log(filePath)
    try{
      const buffer = await fs.readFile(filePath)
      const string = buffer.toString('base64')
      return string
    }
    catch(err){
       console.log(err)
    }
    return""
}
