import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services : any [] = []

  constructor (private router:Router) {}

  handleServicesfetching():void{
    axios.get(`${Address}/api/services/all`)
      .then(res=>{
        this.services = res.data
        console.log(this.services)
      })
      .catch(err=>console.log(err))
  }

  ngOnInit():void{
    this.handleServicesfetching()
  }
   
  handleDeleteService(id:string):void{
    axios.delete(`${Address}/api/services/delete/${id}`)
       .then(res=>console.log(res.data))
       .catch(err=>console.log(err))
  }

  getImageSrc(imageUrl:string):string{
    return `data:image/type;base64,${imageUrl}`
  }

  navigateToUpdate(id:string,name:string):void{
    this.router.navigate([`updateService/${id}/${name}`])
  }

}
