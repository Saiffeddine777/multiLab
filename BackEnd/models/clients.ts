import { Client } from "../database";
import { deleteFile } from "../files/logic/fileSystemImages";

export const createClient = function (
  clientName: string,
  project: string,
  clientsLogoUrl: string
) {
  return Client.create({
    clientName: clientName,
    project: project,
    clientsLogoUrl: clientsLogoUrl,
  });
};

export const findAllClients = function(){
    return Client.find()
}

export const findOneClient = function(id:string){
    return Client.findById(id) 
}

export  const updateOneClient = async function(id:string,newData:any){
     if(newData.clientsLogoUrl){
      const client:any = await Client.findById(id)
      const clientImageToDelete = await deleteFile(client.clientsLogoUrl)
     }
     
    return Client.findByIdAndUpdate(id,newData,
        {new:true}
        )
}

export const deleteAClient= function (id :string){
    return Client.findByIdAndDelete(id)
}


