export const createObjectWithVariables =  (context:any,exclude:string[]):any=>{
   const result:any ={}
   const entries = Object.entries(context)
   for (const [key,value] of entries){
    if(value!==undefined && value!==null && value!=="" && !exclude.includes(key)){
        result[key]= value
    }
   }
   return result
}   