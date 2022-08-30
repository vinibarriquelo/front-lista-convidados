import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MesaModel } from '../interfaces/mesa.model';
import { CadastroConvidadoModel, ConvidadoModel } from '../interfaces/convidado.model';

@Injectable({
  providedIn: 'root'
})

export class ConvidadosService {
  constructor(
    private http: HttpClient
  ) { }

  public cadastrarConvidado(convidado: CadastroConvidadoModel): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/guest`, convidado);
  }

  public listarConvidados(): Observable<ConvidadoModel[]> {
    return this.http.get<ConvidadoModel[]>(`${environment.apiUrl}/guest`);
  }

  public deletarConvidado(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/guest/${id}`);
  }

  public editarConvidado(convidado: ConvidadoModel): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/guest/${convidado._id}`, {
      name: convidado.name,
      idMesa: convidado.idMesa,
      status: !convidado.status
    });
  }
}
