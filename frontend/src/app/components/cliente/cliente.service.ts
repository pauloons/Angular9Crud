import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

const url='http://localhost:3001/clients';
@Injectable({
  providedIn: 'root'
})


export class ClienteService {

  constructor(private http:HttpClient) { }

  salvar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(url, cliente);

  }

  editar(){}

  excluit(){}

  mostrar(){}
}
