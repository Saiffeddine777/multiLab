import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';
import {map} from 'rxjs/operators' 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services : any [] = []

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
  getImageSrc(imageUrl:string):string{
    return `data:image/type;base64,${imageUrl}`
  }

}
