import { Service } from "../database";
import { deleteFile } from "../files/logic/fileSystemImages";

export const createService = function (
  title: string,
  sector: string,
  category: string,
  analysis: string,
  description: string,
  imageUrl:string,
  accredited:boolean
) {
  return Service.create({
    title: title,
    sector: sector,
    category: category,
    analysis: analysis,
    description: description,
    imageUrl:imageUrl,
    accredited: accredited
  });
};

export const findAllServices = function () {
  return Service.find();
};

export const findOneService = function (id: string) {
  return Service.findById(id);
};

export const updateOneService = async function (id: string, newData: any){
  if (newData.imageUrl){
    const document:any= await Service.findById(id)
    const deleteImage = await deleteFile(document.imageUrl)
  }
  return Service.findByIdAndUpdate(id, newData, {
    new: true,
  });
};

export const destoryAService = function (id: string) {
  return Service.findByIdAndRemove(id);
};
