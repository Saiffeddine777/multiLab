import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import axios from 'axios';
import Address from 'src/Address';
import { createObjectWithVariables } from 'src/helpers/updateObject';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent {

  id:string= ""
  name :string = ""
   
  clientName:string= ""
  project:string =""
  file :File | null = null

  constructor(private router:ActivatedRoute){}

  ngOnInit():void{
    this.id = this.router.snapshot.paramMap.get("id") || ""
    this.name = this.router.snapshot.paramMap.get("name") || ""
    console.log(this.id, this.name)
  }

  handleClientNameChange(e:any):void{
     this.clientName= e.target.value
     console.log(createObjectWithVariables(this,["router","__ngContext__","id","name"]))
  }
  
  handleProjectChange(e:any):void{
     this.project = e.target.value
  }

  handleImageChange(e:any):void{
     this.file = e.target.files[0]
  }

  handleClientUpdate():void{
    if (this.file){
      const formData = new FormData()
      formData.append("logo",this.file)
      axios.post(`${Address}/api/clients/logo`,formData)
          .then(res=>{
            axios.put(`${Address}/api/clients/update/${this.id}`,{
              newData:{clientsLogoUrl:res.data,...createObjectWithVariables(this,["router","__ng,context__","id","name"])}
            }).then(res=>console.log(res.data))
            .catch(err=>console.log(err))
          })
          .catch(err=>console.log(err))

    }else{
      axios.put(`${Address}/api/clients/update`,
      {newData:{...createObjectWithVariables(this,["router","__ng,context","id","name"])}})
         .then(res=>console.log(res.data))
         .catch(err=>console.log(err))
    }
  }
   
}
