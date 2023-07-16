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
}
