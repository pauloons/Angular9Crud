import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Alerta } from './alerta';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  alerta = {
  cliente :'Sucesso',
  descricao : 'Seu registro foi cadastrado com sucesso',
  btnSucesso : 'ok',
  btnCancelar : 'cancelar',
  corBtn : 'primary',
  corBtnSucesso: 'accent',
  corBtnCancelar: 'warn',
  possuiBtnFechar : false,
  } as Alerta;

  constructor(public dialogRef: MatDialogRef<AlertaComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Alerta) { }
  
  ngOnInit() {
    if (this.data) {
      this.alerta.cliente = this.data.cliente ||this.alerta.cliente;
      this.alerta.descricao = this.data.descricao ||this.alerta.descricao;
      this.alerta.btnSucesso = this.data.btnSucesso ||this.alerta.btnSucesso;
      this.alerta.btnCancelar = this.data.btnCancelar ||this.alerta.btnCancelar;
      this.alerta.corBtn = this.data.corBtn ||this.alerta.corBtn;
      this.alerta.possuiBtnFechar = this.data.possuiBtnFechar ||this.alerta.possuiBtnFechar;
    }
  }

}
