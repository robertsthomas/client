import { Tool } from "./Tool.interface";

export interface User {
  token: string;
  authenticated: boolean;
  tutorialComplete: boolean;
  loading: boolean;
  credentials: object;
  tools: Tool[];
}
