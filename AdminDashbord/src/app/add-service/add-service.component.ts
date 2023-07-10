import { Component } from '@angular/core';
import axios from 'axios';
import Address from 'src/Address';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  title: string = '';
  sector: string = '';
  category: string = '';
  analysis: string = '';
  description: string = '';
  file: File | null = null;
  accredited :boolean = false;

  handleTitleChange(event: any) {
    this.title = event.target.value;
  }

  handleSectorChange(event: any) {
    this.sector = event.target.value;
  }

  handleCategoryChange(event: any) {
    this.category = event.target.value;
  }

  handleAnalysisChange(event: any) {
    this.analysis = event.target.value;
  }

  handleDescriptionChange(event: any) {
    this.description = event.target.value;
  }

  handleFileChange(event: any) {
    this.file = event.target.files[0];
  }

  handleAccreditedChange(event:any){
    if(event.target.value==="accredited"){
      this.accredited = true
    }
    else if(event.target.value==="not accredited") {
      this.accredited = false
    }
    console.log(this.accredited)
  }
  
  handleServiceInsertion() {
    const formData = new FormData();
    if (this.file) {
      formData.append('image', this.file);
    }

    console.log(formData.has('image'));

    axios.post(`${Address}/api/services/image`, formData)
      .then((res) => {
        axios
          .post(`${Address}/api/services/create`, {
            title: this.title,
            sector: this.sector,
            category: this.category,
            analysis: this.analysis,
            description: this.description,
            accredited :this.accredited,
            imageUrl: res.data,
          })
          .then((res) => {
            console.log('Form Inserted', res.data);
          })
          .catch((error) => {
            console.log('Form Error', error);
          });
        console.log('Image Inserted');
      })
      .catch((err) => {
        console.log('image insertion error',err);
      });
  }
}
