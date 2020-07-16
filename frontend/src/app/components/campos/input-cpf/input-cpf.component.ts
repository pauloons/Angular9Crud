import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/components/campos/validar-campos.service'

@Component({
  selector: 'app-input-cpf',
  templateUrl: './input-cpf.component.html',
  styleUrls: ['./input-cpf.component.css']
})
export class InputCpfComponent {

  constructor(public validacao: ValidarCamposService) { }

  @Input() nome: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;


get formControl(): AbstractControl {
  return this.formGroup.controls[this.controlName];

}}
