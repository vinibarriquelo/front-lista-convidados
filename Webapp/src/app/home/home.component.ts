import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConvidadoModel } from 'src/shared/interfaces/convidado.model';
import { MesaModel } from 'src/shared/interfaces/mesa.model';
import { ConvidadosService } from 'src/shared/services/convidados.service';
import { MesasService } from 'src/shared/services/mesas.service';
import { CadastrarMesaComponent } from '../components/mesa/cadastrar-mesa/cadastrar-mesa.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public mesas: MesaModel[] = [];
  public convidados: ConvidadoModel[] = [];

  constructor(
    private mesasService: MesasService,
    private convidadoService: ConvidadosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarMesas();
    this.listarConvidados();
  }

  public listarMesas() {
    this.mesasService.recuperarMesas().subscribe(
      res => {
        this.mesas = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  public modalMesa() {
    const dialogRef = this.dialog.open(CadastrarMesaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result === true) {
        this.listarMesas();
      }
    });
  }

  public listarConvidados() {
    this.convidadoService.listarConvidados().subscribe(
      res => {
        this.convidados = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  public filterConvidados(convidados: ConvidadoModel[], idMesa: string) {
    return convidados.filter(convidado => convidado.idMesa == idMesa);
  }

  public countConfirmado(convidado: ConvidadoModel[]) {
    return this.convidados.filter(c => c.status).length;
  }

}
