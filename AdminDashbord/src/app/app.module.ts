import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { FormsModule } from '@angular/forms';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { AddTeamMemberComponent } from './add-team-member/add-team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    AddServiceComponent,
    AddCertificateComponent,
    AddTeamMemberComponent
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
