import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { AddClientComponent } from './add-client/add-client.component';
import {AddTeamMemberComponent} from './add-team-member/add-team-member.component'
import {AddServiceComponent} from './add-service/add-service.component'
import { CertificatesComponent } from './certificates/certificates.component';
import { ClientsComponent } from './clients/clients.component';
import {HomeComponent} from "./home/home.component"
import {MakeAReviewComponent} from './make-a-review/make-a-review.component'
import { MessagesComponent } from './messages/messages.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SendReviewEmailComponent } from './send-review-email/send-review-email.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"",component:AddCertificateComponent},
  {path:"",component:AddClientComponent},
  {path:"",component:AddTeamMemberComponent},
  {path:"",component:AddServiceComponent},
  {path:"",component:CertificatesComponent},
  {path:"",component:ClientsComponent},
  {path:"",component:MakeAReviewComponent},
  {path:"",component:MessagesComponent},
  {path:"",component:ReviewsComponent},
  {path:"",component:SendReviewEmailComponent},
  {path:"",component:ServicesComponent},
  {path:"",component:TeamComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
