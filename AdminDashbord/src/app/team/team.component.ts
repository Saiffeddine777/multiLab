import { Component ,OnInit } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';
import{Router} from "@angular/router"

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  
  team :any [] =  []

  constructor(private router:Router){}

  handleTemMembersFetching():void{
    axios.get(`${Address}/api/teamMembers/all`)
       .then(res=>this.team = res.data)
       .catch(err=>console.log(err))
  }
  
  ngOnInit(){
    this.handleTemMembersFetching()
  }

  navigateToUpdateTeamMember(id:string,name:string):void{
    this.router.navigate([`/updateTeamMember/${id}/${name}`])
  }

  handleDeleteTeamMember(id:string):void{
    axios.delete(`${Address}/api/teamMembers/delete/${id}`)
       .then(res=>console.log(res.data))
       .catch(err=>console.log(err))
  }

  getImageSrc(imageString:string){
    return `data:image/type;base64,${imageString}`
  }
}
