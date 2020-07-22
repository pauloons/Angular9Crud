import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidarCamposService } from 'src/app/components/campos/validar-campos.service';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { MatDialog } from '@angular/material/dialog';
import { AlertaComponent } from '../../alerta/alerta.component';
import { Alerta } from '../../alerta/alerta';



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
    private clienteService:ClienteService,
    public dialog: MatDialog
  
    ) { }
    


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
     
      const config ={
      data:{
       btnSucesso:'Ir para página de Clietes',
       btnCancelar: 'Cadastrar outro Clientes',
       corBtnCancelar: 'primary',
       possuiBtnFechar: true,
      } as Alerta
      };
      const dialogRef = this.dialog.open(AlertaComponent, config);
      dialogRef.afterClosed().subscribe((opcao: boolean) => {
        if (opcao) {
          this.router.navigateByUrl('clients');
        } else {
          this.reiniciarForm();
        }
      });
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao salvar o registro!',
          descricao: 'Não conseguimos salvar seu registro, favor tentar novamente mais tarde',
          corBtnSucesso: 'warn',
          btnSucesso: 'Fechar'
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
    });
  }}


