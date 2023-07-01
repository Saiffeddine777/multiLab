import { Service } from "../database";


export const createService = function (title:string,sector:string,category:string,analysis:string,description:string,accredited:boolean){
    return Service.create({
       title: title,
       sector: sector,
       category :category,
       analysis:analysis,
       description:description,
       accredited:accredited
    })
}

export const findAllServices = function(){
    return Service.find()
}

export const findOneService = function(id:string){
    return Service.findById(id)
}
