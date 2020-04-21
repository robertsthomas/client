import { Tool } from "../../../store/models/tool.model";

export interface AddToolState {
  tool: Tool;
  loadingTool: boolean;
  error: any;
}
