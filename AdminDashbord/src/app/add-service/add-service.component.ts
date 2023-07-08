import { Component } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  title: string =""
  sector:string =""
  category:string=""
  analysis: string= ""
  description:string=""
  file :any = {}
  
 handleServiceInsertion(){
  const formData = new FormData()
  formData.append("title",this.title)
  formData.append("sector",this.sector)
  formData.append("category",this.category)
  formData.append("analysis",this.analysis)
  formData.append("description",this.description)
  formData.append("file",this.file)
  axios.post(`${Address}/api/services/create`,formData)
     .then(res=>console.log(res))
     .catch(err=>console.log(err))
 }

}
