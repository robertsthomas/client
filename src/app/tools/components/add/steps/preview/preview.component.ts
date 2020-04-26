import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { AddService } from "../../../../../tools/services/add/add.service";
import { ToolPreview } from "../../../../../tools/services/add/FormData.model";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"]
})
export class PreviewComponent implements OnInit {
  preview: any; //Switch to ToolPreview type
  form: any;
  @Output() goToNext: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private addService: AddService) {}

  ngOnInit() {
    this.preview = this.addService.getToolPreview();
    console.log("Preview feature loaded.", this.preview);
  }

  uploadImage = () => {
    const fileInput: any = document.getElementById("tool-img-upload");
    fileInput.click();
  };

  imageChange = async (event: any) => {
    event.preventDefault();

    const reader = new FileReader();

    let image = event.target.files[0];
    reader.readAsDataURL(image);
    console.log(image);
    reader.onload = async () => {
      const base64Image: string = reader.result as string;
      this.preview = base64Image;

      console.log(this.preview);
    };
    this.onGoToNext();
  };

  save(form: any) {
    if (!form.valid) {
      return false;
    }

    this.addService.setToolPreview(this.preview);
    return true;
  }

  onGoToNext() {
    // if (this.save(form)) {
    //   this.router.navigate(["/toolData"]);
    // }
    this.goToNext.emit(2);
  }
}
