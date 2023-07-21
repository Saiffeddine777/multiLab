import { Component,OnInit } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages :any[] = []
  
  handleMessagesFetching():void{
    axios.get(`${Address}/api/messages/all`)
      .then(res=>this.messages =res.data)
      .catch(err=>console.log(err))
  }

  ngOnInit():void{
    this.handleMessagesFetching()
  }
  
  handleAddresedMessage(id:string):void{
    axios.put(`${Address}/api/messages/messageaddressed/${id}`)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))

  }

  handleDeleteMessage(id:string):void{
     axios.delete(`${Address}/api/messages/delete/${id}`)
       .then(res=>console.log(res.data))
       .catch(err=>console.log(err))
  }

  handleDeleteAddressedMessages():void{
     axios.delete(`${Address}/api/messages/deleteAdressed`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err ))    

  } 

}
