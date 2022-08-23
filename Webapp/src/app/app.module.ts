import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MesaComponent } from './components/mesa/mesa.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CadastrarMesaComponent } from './components/mesa/cadastrar-mesa/cadastrar-mesa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { ConvidadoComponent } from './components/convidado/convidado.component';
import { CadastrarConvidadoComponent } from './components/convidado/cadastrar-convidado/cadastrar-convidado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MesaComponent,
    CadastrarMesaComponent,
    ConvidadoComponent,
    CadastrarConvidadoComponent
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
