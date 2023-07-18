import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import Address from 'src/Address';
import { createObjectWithVariables } from 'src/helpers/updateObject';



@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent  {
    id : string = ""
    name :string =""
    //from data
    title:string =""
    sector:string =""
    category:string=""
    analysis:string=""
    description:string=""
    accredited:boolean= true
    image:File | null = null

   constructor(private router:ActivatedRoute){}

   ngOnInit():void{
    this.id  = this.router.snapshot.paramMap.get("id") || ""
    this.name = this.router.snapshot.paramMap.get("name") || ""
    console.log(this.id,this.name)
   }
   
   handleTitleChange(e:any):void{
     this.title = e.target.value
     console.log(createObjectWithVariables(this,["id","name","router","__ngContext__"]))
   }

   handleSectorChange(e:any):void{
     this.sector= e.target.value
     console.log(createObjectWithVariables(this,["id","name","router","__ngContext__"]))
   }

   handleCategoryChange(e:any):void{
     this.category = e.target.value
     console.log(createObjectWithVariables(this,["id","name","router","__ngContext__"]))
   }

   handleAnalysisChange(e:any):void{
     this.analysis= e.target.value
     console.log(createObjectWithVariables(this,["id","name","router","__ngContext__"]))
   }

   handleDescriptionChange(e:any):void{
     this.description= e.target.value
     console.log(createObjectWithVariables(this,["id","name","router","__ngContext__"]))
   }

   handleFileChange(e:any):void{
    this.image =  e.target.files[0]
    console.log(createObjectWithVariables(this,["id","name","router","__ngContext__"]))
   }

   handleAccreditedChange(e:any):void{
    if(e.target.value==="accredited"){
      this.accredited = true
    }
    else if(e.target.value==="not accredited"){
      this.accredited=false
    }
    console.log(createObjectWithVariables(this,["id","name","router","__ngContext__"]))
   }

   handleServiceUpdate():void{
      if(this.image){
         const formData = new FormData()
         formData.append("image",this.image)
         axios.post(`${Address}/api/services/image`,formData)
           .then(res=>{
              axios.put(`${Address}/api/services/update/${this.id}`,
              {newData:{imageUrl:res.data,...createObjectWithVariables(this,["id","name","router","__ngContext__"])}})
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err))
           })
           .catch(err=>console.log(err))
      }
      else{
        axios.put(`${Address}/api/services/update/${this.id}`,
              {newData:{...createObjectWithVariables(this,["id","name","router","__ngContext__"])}})
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err))
      }
   }
}
