import { Injectable } from '@angular/core';
import { STEPS } from './workflow.model';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  private workflow = [
    { step: STEPS.preview, valid: false},
    {step: STEPS.toolData, valid: false}
  ]


  validateStep(step: string) {
    let found = false
    for(let i = 0; i < this.workflow.length && !found; i++) {
      if(this.workflow[i].step === step){
        found = this.workflow[i].valid = true
      }
    }
  }

  resetSteps() {
    this.workflow.forEach(element => {
      element.valid = false;
    })
  }

  
}
