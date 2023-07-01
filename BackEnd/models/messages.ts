import { Message } from "../database";

export const createAMessage = function (
  firstName: string,
  lastName: string,
  title: string,
  message: string,
  phoneNumber: string,
  email: string,
  adress: string,
  adressed: boolean
) {
  return Message.create({
    firstName: firstName,
    lastName: lastName,
    title: title,
    message: message,
    phoneNumber: phoneNumber,
    email: email,
    adress: adress,
    adressed: adressed
  });
};


export const findAllMessages = function (){
  return Message.find()
}

export const findOneMessage = function(id:string){
  return Message.findById(id)
}

export const destroyMessage =  function(id:string){
  return Message.findByIdAndRemove(id)
}