import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.page.html',
  styleUrls: ['./add-tool.page.scss'],
})
export class AddToolPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadImage = () => {
    const fileInput: any = document.getElementById('tool-img-upload');
    fileInput.click();
  }

  imageChange = async(event: any) => {
    event.preventDefault();

    const formData = new FormData();
    const reader = new FileReader()

    let image = event.target.files[0]
    reader.readAsDataURL(image);
    console.log(image)
    reader.onload = async () => {
      const base64Image = reader.result as string;
      formData.set('file', base64Image)

      console.log(base64Image)
    }
  }

}
