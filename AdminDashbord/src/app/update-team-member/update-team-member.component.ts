import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import Address from 'src/Address';
import { createObjectWithVariables } from 'src/helpers/updateObject';

@Component({
  selector: 'app-update-team-member',
  templateUrl: './update-team-member.component.html',
  styleUrls: ['./update-team-member.component.css']
})
export class UpdateTeamMemberComponent {
   id :string= ""
   name:string = ""
   //formdata
   teamMember:string = ""
   teamMemberRole:string=""
   teamMemberDescription:string=""
   teamMemberEmail:string=""
   file : File | null = null
   
   constructor(private router: ActivatedRoute){}
  
   ngOnInit():void{
    this.id = this.router.snapshot.paramMap.get("id") || ""
    this.name = this.router.snapshot.paramMap.get("name") || ""
    console.log(this.id,this.name)
   }

   handleTeamMemberChange(e:any):void{
    this.teamMember = e.target.value
   } 

   handleTeamMemberRoleChange(e:any):void{
    this.teamMemberRole = e.target.value
   }

   handleTeamMemberDescriptionChange(e:any):void{
    this.teamMemberDescription = e.target.value
   }

   handleTeamMemberEmailChange(e:any):void{
    this.teamMemberEmail = e.target.value
   }

   handleTeamMemberImageChange(e:any):void{
    this.file = e.target.files[0]
   }

   handleTeamMemberUpdate():void{
      if(this.file){
        const formData = new FormData()
        formData.append("teamImage",this.file)
       axios.post(`${Address}/api/teamMembers/image`,formData)
          .then(res=>{
            axios.put(`${Address}/api/teamMembers/update/${this.id}`,
            {newData:{teamMemberPhotoUrl:res.data,...createObjectWithVariables(this,["id","name","__ngContext__","router"])}})
              .then(res=>console.log(res.data))
              .catch(err=>console.log(err))
          })
          .catch(err=>console.log(err))
      }
      else{
        axios.put(`${Address}/api/teamMembers/update/${this.id}`,
        {newData:{...createObjectWithVariables(this,["id","name","__ngContext__","router"])}})
              .then(res=>console.log(res.data))
              .catch(err=>console.log(err ))
      }

   }
  
  }
