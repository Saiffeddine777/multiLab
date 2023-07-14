import { Component } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-make-a-review',
  templateUrl: './make-a-review.component.html',
  styleUrls: ['./make-a-review.component.css']
})
export class MakeAReviewComponent {
  reviewerName:string =""
  email:string =""
  text:string=""
  rating:number =0

  handleReviewerNameChange(e:any){
      this.reviewerName = e.target.value
  }
  handleEmailChange(e:any){
      this.email = e.target.value
  }
  handleReviewerTextChange(e:any){
      this.text = e.target.value
  }
  handleRatingChange(e:any){
      this.rating = Number(e.target.value)
      console.log(this.rating)
  }
  
  handleReviewSending(){
     axios.post(`${Address}/api/reviews/create`,{
      reviewerName: this.reviewerName ,
      email:this.email,
      text:this.text,
      rating :this.rating
     })
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
  }

}
