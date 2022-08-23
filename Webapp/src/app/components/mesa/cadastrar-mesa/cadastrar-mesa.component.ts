import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MesasService } from 'src/shared/services/mesas.service';

@Component({
  selector: 'app-cadastrar-mesa',
  templateUrl: './cadastrar-mesa.component.html',
  styleUrls: ['./cadastrar-mesa.component.scss']
})
export class CadastrarMesaComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    number: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  public horizontalPosition: any = 'center'
  public verticalPosition: any = 'top'

  constructor(
    public dialogRef: MatDialogRef<any>,
    private mesaService: MesasService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  public enviar() {
    this.mesaService.cadastrarMesa(this.form.value).subscribe(
      res => {
        this._snackBar.open('Mesa cadastrada com sucesso !', 'Legal', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.close(true);
      },
      err => {
        this._snackBar.open('Erro ao cadastrar mesa !', 'Que pena', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.close(false);
      }
    )
  }

  public close(data: any) {
    this.dialogRef.close(data);
  }

}
