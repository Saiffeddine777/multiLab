import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { FormsModule } from '@angular/forms';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { AddTeamMemberComponent } from './add-team-member/add-team-member.component';
import { AddClientComponent } from './add-client/add-client.component';
import { MakeAReviewComponent } from './make-a-review/make-a-review.component';
import { SendReviewEmailComponent } from './send-review-email/send-review-email.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { HomeComponent } from './home/home.component';
import { UpdateACertificateComponent } from './update-a-certificate/update-a-certificate.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { UpdateTeamMemberComponent } from './update-team-member/update-team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    AddServiceComponent,
    AddCertificateComponent,
    AddTeamMemberComponent,
    AddClientComponent,
    MakeAReviewComponent,
    SendReviewEmailComponent,
    ClientsComponent,
    TeamComponent,
    ServicesComponent,
    ReviewsComponent,
    CertificatesComponent,
    HomeComponent,
    UpdateACertificateComponent,
    UpdateClientComponent,
    UpdateServiceComponent,
    UpdateTeamMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
