export const stringToPdf = function(pdfString:string):string{
    const arrayOfData = atob(pdfString)
    const arrayOfNums = new Uint8Array(pdfString.length)
    for(let i = 0 ; i<arrayOfNums.length;i++){
        arrayOfNums[i]=arrayOfData.charCodeAt(i)
    }
    const pdfBlob = new Blob([arrayOfNums],{type:"application/pdf"})
    const pdfUrl = URL.createObjectURL(pdfBlob)

    return pdfUrl
}
