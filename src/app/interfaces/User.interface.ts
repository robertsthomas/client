import { Tool } from "./Tool.interface";

export interface User {
  authenticated: boolean;
  tutorialComplete: boolean;
  loading: boolean;
  credentials: object;
  tools: Tool[];
}
