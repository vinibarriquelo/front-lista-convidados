import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MesaModel } from '../interfaces/mesa.model';

@Injectable({
  providedIn: 'root'
})

export class MesasService {
  constructor(
    private http: HttpClient
  ) { }

  public recuperarMesas(): Observable<MesaModel[]> {
    return this.http.get<MesaModel[]>(`${environment.apiUrl}/tables`);
  }

  public cadastrarMesa(mesa: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/tables`, mesa);
  }

  public excluirMesa(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/tables/${id}`);
  }
}
