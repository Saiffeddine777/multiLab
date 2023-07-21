import { Component,OnInit } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
   reviews :any [] = []
   
   handlleReviewsFetching():void{
     axios.get(`${Address}/api/reviews/all`)
        .then(res=> this.reviews = res.data)
        .catch(err=>console.log(err))
   }

   ngOnInit():void{ 
      this.handlleReviewsFetching()
   }

   handleReviewApproval(id:string):void{
        axios.put(`${Address}/api/reviews/approve/${id}`)
           .then(res=>console.log(res.data))
           .catch(err=>console.log(err))      
   }

   deleteThisReview(id:string):void{
         axios.delete(`${Address}/api/reviews/delete/${id}`)
           .then(res=>console.log(res.data))
           .catch(err=>console.log(err))
   }

}
