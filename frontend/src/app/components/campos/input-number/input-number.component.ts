import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/components/campos/validar-campos.service'

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent  {

  constructor(public validacao: ValidarCamposService) { }

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;


get formControl(): AbstractControl {
  return this.formGroup.controls[this.controlName];
}
}
