import { Action } from "@ngrx/store";
import { Tool } from "../../../store/models/tool.model";

export const AddToolActionTypes = {
  ADD_TOOL: "[TOOLS] Add Tool",
  ADD_TOOL_SUCCESS: "[TOOL] Add Tool Success",
  ADD_TOOL_FAILURE: "[TOOL] Add Tool Failure",
} as const;

export class AddTool implements Action {
  readonly type = AddToolActionTypes.ADD_TOOL;

  constructor() {}
}

export class AddToolSuccess implements Action {
  readonly type = AddToolActionTypes.ADD_TOOL_SUCCESS;

  constructor(public payload: Tool) {}
}

export class AddToolFailure implements Action {
  readonly type = AddToolActionTypes.ADD_TOOL_FAILURE;

  constructor(public error: Error) {}
}

export type AddToolActions = AddTool | AddToolSuccess | AddToolFailure;
