import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/components/campos/validar-campos.service'
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.css']
})
export class InputEmailComponent {

  constructor(public validacao: ValidarCamposService) { }

@Input() name:string;
@Input() formGroup:FormGroup;
@Input() controlName:string;



get formControl(): AbstractControl {
  return this.formGroup.controls[this.controlName];
}

}
