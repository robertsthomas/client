import { Injectable } from "@angular/core";
import { FormData, ToolPreview, ToolData } from "./FormData.model";
import { WorkflowService } from "../workflow/workflow.service";

@Injectable()
export class AddService {
  private formData: FormData = new FormData();
  private isToolPreviewValid: boolean = false;
  private isToolDataValid: boolean = false;

  constructor(private workflowService: WorkflowService) {}

  getToolPreview(): ToolPreview {
    let toolImage: ToolPreview = {
      preview: this.formData.preview,
    };

    return toolImage;
  }

  setToolPreview(data: ToolPreview) {
    this.isToolPreviewValid = true;
    this.formData.preview = data.preview;

    // TODO: Add workflow step validation.
  }

  getToolData(): ToolData {
    let toolData: ToolData = {
      toolName: this.formData.toolName,
    };

    return toolData;
  }

  setToolData(data: ToolData) {
    this.isToolDataValid = true;
    this.formData.toolName = data.toolName;

    // TODO: Add workflow step validation.
  }

  resetFormData(): FormData {
    // TODO: Add workflow steps reset.

    this.formData.clear();
    this.isToolPreviewValid = this.isToolDataValid = false;

    return this.formData;
  }

  isFormValid() {
    return this.isToolPreviewValid && this.isToolDataValid;
  }
}
