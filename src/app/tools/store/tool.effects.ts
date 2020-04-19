import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  ToolActionTypes,
  GetAllTools,
  GetAllToolsSuccess,
  GetAllToolsFailure,
} from "./tool.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ToolService } from "../service/tool.service";
import { of } from "rxjs";

@Injectable()
export class ToolEffects {

  @Effect() getAllTools$ = this.actions$.pipe(
    ofType<GetAllTools>(ToolActionTypes.GET_ALL_TOOLS),
    mergeMap(() =>
      this.toolService.getAllTools().pipe(
        map((data) => new GetAllToolsSuccess(data)),
        catchError((error) => of(new GetAllToolsFailure(error)))
      )
    )
  );

  constructor(private actions$: Actions, private toolService: ToolService) {}
}
