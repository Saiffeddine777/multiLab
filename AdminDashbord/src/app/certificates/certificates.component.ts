import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Address from 'src/Address';
import { stringToPdf } from 'src/helpers/fromStringtoPdt';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates: any[] = []

  constructor(private router : Router){}

  navigateToAddCertificates():void{
    this.router.navigate(["/addCertificate"])
  }

  navigateToUpdateCertificate(id:string,name:string):void{
    this.router.navigate([`/updateCertificate/${id}/${name}`])
  }
  
  deleteCertificate(id:string){
    console.log(id)
      axios.delete(`${Address}/api/certificates/delete/${id}`)
          .then(res=>console.log(res.data))
          .catch(err=>console.log(err))
  }

  handleCertificatesFetching():void{
    axios.get(`${Address}/api/certificates/all`)
       .then(res=>this.certificates=res.data)
       .catch(err=>console.log(err))
  }

  ngOnInit():void{
    this.handleCertificatesFetching()
  }
  getPdfUrl(stringPdf:string):string{
    return stringToPdf(stringPdf)
  }
}
