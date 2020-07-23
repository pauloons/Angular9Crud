import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[]
  displayedColumns = ['id', 'nome', 'cpf', 'dtNasc', 'tel', 'email', 'action']
  filtrosListagem: FormGroup;

  constructor(private clienteService: ClienteService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe((clientes: Cliente[]) =>
      this.clientes = clientes);
  }
}
