import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/components/campos/validar-campos.service'

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent  {

  constructor(public validacao: ValidarCamposService) { }

@Input() name:string;
@Input() formGroup:FormGroup;
@Input() controlName:string;

get formControl(): AbstractControl {
  return this.formGroup.controls[this.controlName];
}
}
