export class FormData {
    preview: string = '';
    toolName: string = ''

    clear() {
        this.preview = '';
        this.toolName = ''
    }
}

export class ToolPreview {
    preview: string = '';
}

export class ToolData {
    toolName: string = ''
}