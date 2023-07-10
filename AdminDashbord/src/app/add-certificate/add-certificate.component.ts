import { Component } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent {
   name : string = ""
   reference : string = ""
   description :string = ""
   file : File | null = null

   handleNameChange(e:any){
       this.name = e.target.value
   }

   handleReferenceChange(e:any){
       this.reference = e.target.value
   }

   handleDescriptionChange(e:any){
       this.description = e.target.value
   }

   handleFileChange(e:any){
       this.file = e.target.files[0]
   }

   handleCertificateInsertion(){
     const formData = new FormData()
     if(this.file){
      formData.append("certificate",this.file)
     }
      axios.post(`${Address}/api/certificates/certificate`,formData)
          .then(res=>{
            axios.post(`${Address}/api/certificates/create`,{
              name: this.name,
              reference : this.reference,
              description : this.description,
              fileUrl :res.data
            }).then(res=>{
              console.log('Form inserted',res.data)
            }).catch(err=>{
              console.log("error inserted",err)
            })
         })
         .catch(err=>{
          console.log("error inserting image",err)
         })
         
   }
}
