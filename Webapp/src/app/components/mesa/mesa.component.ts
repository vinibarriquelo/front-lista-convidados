import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConvidadoModel } from 'src/shared/interfaces/convidado.model';
import { MesaModel } from 'src/shared/interfaces/mesa.model';
import { ConvidadosService } from 'src/shared/services/convidados.service';
import { MesasService } from 'src/shared/services/mesas.service';
import { CadastrarConvidadoComponent } from '../convidado/cadastrar-convidado/cadastrar-convidado.component';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit, OnChanges {

  @Input() mesa: MesaModel;
  @Input() convidados: ConvidadoModel[];

  @Output() relistarMesas: EventEmitter<any> = new EventEmitter();
  @Output() relistarConvidados: EventEmitter<any> = new EventEmitter();

  public horizontalPosition: any = 'center'
  public verticalPosition: any = 'top'

  constructor(
    private mesaService: MesasService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private convidadosService: ConvidadosService
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

  public excluirMesa(id: string) {
    this.mesaService.excluirMesa(id).subscribe(
      res => {
        this._snackBar.open('Mesa excluida !', 'Ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.relistarMesas.emit();
      },
      err => {
        this._snackBar.open('Erro ao excluir a mesa !', 'Ops', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    )
  }

  public adicionarConvidado() {
    const dialogRef = this.dialog.open(CadastrarConvidadoComponent, {
      data: { idMesa: this.mesa._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.relistarConvidados.emit();
      }
    });

  }

  public deletarConvidado(id: string) {
    this.convidadosService.deletarConvidado(id).subscribe(
      res => {
        this.relistarConvidados.emit();
      },
      err => {
        console.log(err);
      }
    )
  }

  public statusConvidado(convidado: ConvidadoModel) {
    this.convidadosService.editarConvidado(convidado).subscribe(
      res => {
        this.relistarConvidados.emit();
      },
      err => {
        console.log(err);
      }
    )
  }

  public countConfirmado(convidado: ConvidadoModel[]) {
    return this.convidados.filter(c => c.status).length;
  }
}
