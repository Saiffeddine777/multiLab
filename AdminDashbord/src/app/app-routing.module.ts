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
import { UpdateACertificateComponent } from './update-a-certificate/update-a-certificate.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { UpdateTeamMemberComponent } from './update-team-member/update-team-member.component';
import { UpdateClientComponent } from './update-client/update-client.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"addCertificate",component:AddCertificateComponent},
  {path:"addClient",component:AddClientComponent},
  {path:"addTeamMember",component:AddTeamMemberComponent},
  {path:"addService",component:AddServiceComponent},
  {path:"certificates",component:CertificatesComponent},
  {path:"clients",component:ClientsComponent},
  {path:"makeAReview",component:MakeAReviewComponent},
  {path:"messages",component:MessagesComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"sendReviewEmail",component:SendReviewEmailComponent},
  {path:"services",component:ServicesComponent},
  {path:"team",component:TeamComponent},
  {path:"updateCertificate/:id/:name",component:UpdateACertificateComponent},
  {path:"updateService/:id/:name",component:UpdateServiceComponent},
  {path:"updateTeamMember/:id/:name",component:UpdateTeamMemberComponent},
  {path:"updateClient/:id/:name",component:UpdateClientComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
