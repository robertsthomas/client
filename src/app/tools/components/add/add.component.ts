import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  slide: number = 1;

  constructor() {}

  ngOnInit() {
    console.log(this.slide);
  }

  goToNext(slide: number) {
    if (slide) {
      this.slide = slide;
    }
  }
}
