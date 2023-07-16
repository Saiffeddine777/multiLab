import { Component ,OnInit } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  
  team :any [] =  []

  handleTemMembersFetching():void{
    axios.get(`${Address}/api/teamMembers/all`)
       .then(res=>this.team = res.data)
       .catch(err=>console.log(err))
  }
  
  ngOnInit(){
    this.handleTemMembersFetching()
  }

  getImageSrc(imageString:string){
    return `data:image/type;base64,${imageString}`
  }
}
