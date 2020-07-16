import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidarCamposService } from 'src/app/components/campos/validar-campos.service';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';



@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cadastro:FormGroup;

  constructor(
    public validacao:ValidarCamposService,
    private router:Router,
    private fb: FormBuilder,
    private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      nome: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(256)]],
      cpf: ['',[Validators.required,Validators.minLength(11),Validators.maxLength(13)]],
      dtNasc: [''],
      tel:  [''],
      email:  ['', Validators.compose([Validators.email])],
    });
  }
get f(){
  return this.cadastro.controls;
}
  submit():void{
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid){
      return;
    }
const cliente = this.cadastro.getRawValue() as Cliente;
this.salvar(cliente);
  }
  deleteCliente(){

  }
  updateCliente(){

  }
  cancel(){
   this.router.navigate(['./clients'])

  }  
  reiniciarForm(): void {
    this.cadastro.reset();
  }
  private salvar(cliente:Cliente):void{
    this.clienteService.salvar(cliente).subscribe(() => {
      alert('salvando');
    },
    ()=>{
      alert('nao salvou');
    }
   );
  }
}


