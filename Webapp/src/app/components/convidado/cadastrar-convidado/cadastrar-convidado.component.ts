import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConvidadosService } from 'src/shared/services/convidados.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CadastroConvidadoModel } from 'src/shared/interfaces/convidado.model';


@Component({
  selector: 'app-cadastrar-convidado',
  templateUrl: './cadastrar-convidado.component.html',
  styleUrls: ['./cadastrar-convidado.component.scss']
})
export class CadastrarConvidadoComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    name: new FormControl(),
  })

  public horizontalPosition: any = 'center'
  public verticalPosition: any = 'top'

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    private _snackBar: MatSnackBar,
    private _convidadoService: ConvidadosService
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  public enviar() {
    const convidado: CadastroConvidadoModel = {
      idMesa: this.data.idMesa,
      name: this.form.get('name')?.value,
      status: false
    }

    this._convidadoService.cadastrarConvidado(convidado).subscribe(
      res => {
        this._snackBar.open('Convidado cadastrado com sucesso !', 'Legal', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.close(true);
      },
      err => {
        this._snackBar.open('Erro ao cadastrar convidado', 'Opss', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });

        this.close(false)
      }
    )

  }

  public close(data: any) {
    this.dialogRef.close(data);
  }

}
