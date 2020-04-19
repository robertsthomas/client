import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../../../store/models/App.model";
import { Tool } from "../../../store/models/tool.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GetAllTools, GetAllToolsSuccess } from "../../store/tool.actions";

@Component({
  selector: "app-tools",
  templateUrl: "./tools.component.html",
  styleUrls: ["./tools.component.css"],
})
export class ToolsComponent implements OnInit {
  tools$: Observable<Tool[]>;
  loadingTools$: Observable<Boolean>;
  error$: Observable<Error>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.tools$ = this.store.select((store) => store.tools.tools);
    this.loadingTools$ = this.store.select((store) => store.tools.loadingTools);
    this.error$ = this.store.select((store) => store.tools.error);


    this.store.dispatch(new GetAllTools());
  }
}
