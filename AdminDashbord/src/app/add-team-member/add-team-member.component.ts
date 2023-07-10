import { Component } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.css']
})
export class AddTeamMemberComponent {
  teamMember: string = ""
  teamMemberRole:string=""
  teamMemberDescription:string=""
  teamMemberEmail:string =""
  teamMemberImage: File | null = null
  
  handleTeamMemberChange(e:any){
    this.teamMember = e.target.value
  }
  handleTeamMemberRoleChange(e:any){
    this.teamMemberRole = e.target.value
  }
  handleTeamMemberDescriptionChange(e:any){
    this.teamMemberDescription= e.target.value
  }
  handleTeamMemberEmailChange(e:any){
    this.teamMemberEmail= e.target.value
  }
  handleTeamMemberImageChange(e:any){
    this.teamMemberImage= e.target.files[0]
  }
  handleTeamMemberInsertion(){
    const formData = new FormData()
    if(this.teamMemberImage){
      formData.append("teamImage",this.teamMemberImage)
    }
    axios.post(`${Address}/api/teamMembers/Image`,formData)
        .then(res=>axios.post(`${Address}/api/teamMembers/create`,{
           teamMember:this.teamMember,
           teamMemberRole:this.teamMemberRole ,
           teamMemberDescription:this.teamMemberDescription,
           teamMemberEmail: this.teamMemberEmail,
           teamMemberPhotoUrl:res.data
        }).then(res=>{
          console.log(res.data)
          })
          .catch(err=>{
          console.log("team member insertion error ",err)
        }))
        .catch(error=>{
          console.log("image insertion error",error)
        })
  }
}
