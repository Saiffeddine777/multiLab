import { Client } from "../database";

export const createClient = function (
  clientName: string,
  project: string,
  projectPhotoUrl: string,
  clientsLogoUrl: string
) {
  return Client.create({
    clientName: clientName,
    project: project,
    projectPhotoUrl: projectPhotoUrl,
    clientsLogoUrl: clientsLogoUrl,
  });
};

export const findAllClients = function(){
    return Client.find()
}

export const findOneClient = function(id:string){
    return Client.findById(id) 
}

export  const updateOneClient = function(id:string,newData:any){
    return Client.findByIdAndUpdate(id,newData,
        {new:true}
        )
}

export const deleteAClient= function (id :string){
    return Client.findByIdAndDelete(id)
}


