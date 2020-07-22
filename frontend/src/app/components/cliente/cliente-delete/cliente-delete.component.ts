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
  cliente:Cliente;
  id:number;
  cadastro:FormGroup;

  constructor(public dialog:MatDialog,
                      private router: Router,
                      private clienteService:ClienteService,
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
      
      deleteCliente1(): void {
        const config = {
          data: {
            titulo: 'Você tem certeza que deseja excluir?',
            descricao: 'Caso você tenha certceza que deseja excluir, clique no botão OK',
            corBtnCancelar: 'primary',
            corBtnSucesso: 'warn',
            possuirBtnFechar: true
          } as Alerta
        };
        const dialogRef = this.dialog.open(AlertaComponent, config);
        dialogRef.afterClosed().subscribe((opcao: boolean) => {
          if (opcao) {
            this.clienteService.excluir(this.id)
            .subscribe(() => this.router.navigateByUrl('/clients'));
          }
        });
      }
      deleteCliente(): void {
        this.clienteService.excluir(this.cliente.id)
        .subscribe(() => {
          this.clienteService.showMessage("Cliente excluido com sucesso!");
          this.router.navigateByUrl('/client');
        });
}}
