import { Component,OnInit } from '@angular/core';
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
