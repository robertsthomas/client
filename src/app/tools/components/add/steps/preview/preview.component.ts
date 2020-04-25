import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from '../../../../../tools/services/add/add.service';
import { ToolPreview } from 'src/app/tools/services/add/FormData.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  preview: any; //Switch to ToolPreview type
  form: any;

  constructor(private router: Router, private addService: AddService) { }

  ngOnInit() {
    this.preview = this.addService.getToolPreview();
    console.log('Preview feature loaded.', this.preview)
  }

  uploadImage = () => {
    const fileInput: any = document.getElementById('tool-img-upload');
    fileInput.click();
  }

  imageChange = async(event: any) => {
    event.preventDefault();

    const reader = new FileReader()

    let image = event.target.files[0]
    reader.readAsDataURL(image);
    console.log(image)
    reader.onload = async () => {
      const base64Image: string = reader.result as string;
      this.preview = base64Image;

      console.log(this.preview)

      await this.router.navigate(['/'])
    };
  }

  save(form: any){
    if(!form.valid){
      return false;
    }

    this.addService.setToolPreview(this.preview);
    return true
  }

  goToNext(form:any){
    if(this.save(form)){
      this.router.navigate(['/toolData'])
    }
  }

}
