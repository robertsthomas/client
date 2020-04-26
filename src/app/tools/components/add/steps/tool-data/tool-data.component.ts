import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tool-data",
  templateUrl: "./tool-data.component.html",
  styleUrls: ["./tool-data.component.css"]
})
export class ToolDataComponent implements OnInit {
  @Input() slide: number;

  constructor() {}

  ngOnInit() {}
}
