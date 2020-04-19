export interface Tool {
    name: string;
}

export interface ToolState {
    loadingTools: boolean;
    tools: Tool[];
    error: undefined;
}