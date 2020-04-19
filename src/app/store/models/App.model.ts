import { ToolState } from './tool.model';

export interface AppState {
    readonly tools: ToolState;
}