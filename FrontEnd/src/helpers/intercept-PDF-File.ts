export const stringToPdf = function(pdfString:string):string{
    const binaryData = atob(pdfString)
    const byteArray = new Uint8Array(binaryData.length)
    for (let i = 0;i<byteArray.length;i++){
          byteArray[i]= binaryData.charCodeAt(i)
    }
    const pdfBlob = new Blob([byteArray],{type:"application/pdf"})
    const pdfUrl = URL.createObjectURL(pdfBlob)
    return pdfUrl
}