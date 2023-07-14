import { Component } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-send-review-email',
  templateUrl: './send-review-email.component.html',
  styleUrls: ['./send-review-email.component.css']
})
export class SendReviewEmailComponent {
  email :string =""

  handleEmailChange(e:any){
    this.email = e.target.value
  }

  handleSendingReviewForm(){
      axios.post(`${Address}/api/reviews/sendreviewFrom`,{
        email:this.email
      })
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
  }

}
