import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import Address from 'src/Address';
import { createObjectWithVariables } from 'src/helpers/updateObject';

@Component({
  selector: 'app-update-a-certificate',
  templateUrl: './update-a-certificate.component.html',
  styleUrls: ['./update-a-certificate.component.css']
})
export class UpdateACertificateComponent implements OnInit {
   id :string = ""
   toUpdate:string = "" 
   name :string =""
   reference : string =""
   description :string=""
   file : File| null = null

   constructor(private router : ActivatedRoute ){}
   
   ngOnInit():void{
    this.id = this.router.snapshot.paramMap.get("id") || ""
    this.toUpdate = this.router.snapshot.paramMap.get("name") || ""
   }

   

   handleNameChange(e:any):void{
      this.name = e.target.value
      console.log(createObjectWithVariables(this,["router","__ngContext__","id"]))
   }
   handleReferenceChange(e:any):void{
      this.reference = e.target.value
      console.log(createObjectWithVariables(this,["router","__ngContext__","id"]))
   }

   handleDescriptionChange(e:any):void {
      this.description = e.target.value
      console.log(createObjectWithVariables(this,["router","__ngContext__","id"]))
   }

   handleFileChange(e:any):void{
      this.file = e.target.files[0]
      console.log(createObjectWithVariables(this,["router","__ngContext__","id"]))
   } 

   handleCertificateUpdate():void{
      if(this.file){
        const formData = new FormData()
        formData.append("certificate",this.file)
        axios.post(`${Address}/api/certificates/certificate`,formData)
           .then(res=>{
              axios.put(`${Address}/api/certificates/update/${this.id}`,{
                newData:{fileUrl:res.data,...createObjectWithVariables(this,["router","__ngContext__","id"])}
              }).then(res=>console.log(res.data))
                .catch(err=>console.log(err))
           }).catch(err=>{console.log(err)})
      }
      else{
            axios.put(`${Address}/api/certificates/update/${this.id}`,
              {newData:{...createObjectWithVariables(this,["router","__ngContext__","id"])}})
              .then(res=>console.log(res.data))
              .catch(err=>console.log(err))
          }
      
   }

}
