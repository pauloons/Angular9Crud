import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ClienteService } from 'src/app/components/cliente/cliente.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  cliente: Cliente;

  constructor(
    private matCardModule: MatCardModule,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.clienteService.readById(id).subscribe((product) => {
      this.cliente = product;
    });
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.clienteService.showMessage("Cliente atualizado com sucesso!");
      this.router.navigate(["/clients"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/clients"]);
  }
}
