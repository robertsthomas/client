import { Action } from "@ngrx/store";
import { Tool } from "../../../store/models/tool.model";

export const ToolActionTypes = {
  GET_ALL_TOOLS: "[TOOLS] Get All Tools",
  GET_ALL_TOOLS_SUCCESS: "[TOOLS] Get All Tools Success",
  GET_ALL_TOOLS_FAILURE: "[TOOLS] Get All Tools Failure",

} as const;

export class GetAllTools implements Action {
  readonly type = ToolActionTypes.GET_ALL_TOOLS;
}

export class GetAllToolsSuccess implements Action {
  readonly type = ToolActionTypes.GET_ALL_TOOLS_SUCCESS;

  constructor(public payload: Tool[]) {}
}

export class GetAllToolsFailure implements Action {
  readonly type = ToolActionTypes.GET_ALL_TOOLS_FAILURE;

  constructor(public error: Error) {}
}

export type ToolsActions =
  | GetAllTools
  | GetAllToolsSuccess
  | GetAllToolsFailure
