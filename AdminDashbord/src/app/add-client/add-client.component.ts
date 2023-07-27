import { Component } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  clientName:string=""
  project:string=""
  file:File|null = null
  constructor(private router:Router){}

  handleClientNameChange(e:any){
     this.clientName= e.target.value
  }
  handleProjectChange(e:any){
     this.project = e.target.value
  }
  handleImageChange(e:any){
    this.file = e.target.files[0]
  }
  handleClientInsertion(){
    const formData= new FormData()
    if (this.file){
       formData.append("logo",this.file)
    }
    axios.post(`${Address}/api/clients/logo`,formData)
        .then(res=>{
          axios.post(`${Address}/api/clients/create`,{
            clientName:this.clientName,
            project:this.project,
            clientsLogoUrl:res.data 
          })
          .then(res=>{  
            console.log("Client inserted",res)
            this.router.navigate([`clients`])
          })
          .catch(err=>{
            console.log("error inserting client",err)
          })
     })
     .catch(err=>{
      console.log("error inserting the image",err)
     })
  }
  
}
