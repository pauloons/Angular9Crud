import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { FormGroup } from '@angular/forms';
import { Alerta } from '../../alerta/alerta';
import { AlertaComponent } from '../../alerta/alerta.component';
import { MatDialog } from '@angular/material/dialog';

@Component({

  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {
  cliente: Cliente;
  id: number;
  cadastro: FormGroup;

  constructor(public dialog: MatDialog,
    private router: Router,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = this.route.snapshot.params['id'];
    this.clienteService.readById(id).subscribe((cliente) => {
      this.cliente = this.cliente;
    });
  }

  cancel(): void {
    this.router.navigate(["/clients"]);
  };

  deleteCliente(): void {
    const config = {
      data: {
        descricao: 'Deseja excluir um cliente?',
        btnSucesso: 'OK',
        btnCancelar: 'Cancelar',
        corBtnCancelar: 'primary',
        possuiBtnFechar: true,
      } as Alerta
    };
    const dialogRef = this.dialog.open(AlertaComponent, config);
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.clienteService.showMessage("Cliente excluido com sucesso!");
        this.clienteService.delete(this.id)

          .subscribe(() => this.router.navigateByUrl('/clients'));
      } else {
        this.clienteService.showMessage("Cliente não foi excluido !");
      }
    });
  }
}