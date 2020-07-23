import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "src/app/components/cliente/cliente";
import { MatSnackBar } from "@angular/material/snack-bar";


const url = "http://localhost:3001/clients/";
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl = "http://localhost:3001/clients/";
  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(url, cliente);
  }
  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(url)
  }
  visualizar(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(url + id);
  }
  readById(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url)
  }
  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente)
  }

  delete(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cliente>(url)
  }
 /*  delete(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  } */
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}

