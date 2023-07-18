import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (private router:Router){

  }

  navigatestoCertificates():void{
    this.router.navigate(["/certificates"]) 
  }

  navigateToServices():void{
    this.router.navigate(["/services"])
  }

  navigateToClients():void{
    this.router.navigate(["/clients"])
  }

  navigateToTeam():void{
    this.router.navigate(["/team"])
  }
  
}
