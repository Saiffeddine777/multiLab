import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients :any [] = []

  constructor(private cdRef: ChangeDetectorRef ){
    
  }
  
  handleClientsFetching(){
     axios.get(`${Address}/api/clients/all`)
       .then(res=>{
        this.clients = res.data
        console.log(this.clients)
      })
       .catch(err=>console.log(err))
  }

  ngOnInit():void{
     this.handleClientsFetching()
  }

    handleDelete(id:string):void{
      axios.delete(`${Address}/api/clients/delete/${id}`)
          .then(res=>{
            console.log(res.data)
            this.cdRef.detectChanges()
          })
          .catch(err=>console.log(err))
    }
    
  getImageSrc(imageString:string){
    return `data:image/type;base64,${imageString}`
  }

}
