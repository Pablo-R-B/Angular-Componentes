import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SaldoComponent} from "./saldo/saldo.component";

import {ContadorComponent} from "./contador/contador.component";
import {ListaTareasComponent} from "./lista-tareas/lista-tareas.component";
import {CompentariosComponent} from "./compentarios/compentarios.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";

import {TarjetaProductoComponent} from "./tarjeta-producto/tarjeta-producto.component";
import {CalculadoraComponent} from "./calculadora/calculadora.component";
import {TotalCompraComponent} from "./total-compra/total-compra.component";
import {TemporizadorComponent} from "./temporizador/temporizador.component";


export const AppModule = [
  FormsModule,
  CommonModule,
]


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaldoComponent,
    ContadorComponent, ListaTareasComponent,
    CompentariosComponent, FormsModule, NgIf,
    TarjetaProductoComponent, CalculadoraComponent, TotalCompraComponent, TemporizadorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nombrePersona: string = 'Juan';

  // comentariosRecibidos: string[] = []; // Almacena comentarios enviados desde el componente hijo
  //
  // // Método que maneja el comentario enviado desde el componente hijo
  // onComentarioEnviado(comentario: string) {
  //   console.log('Comentario recibido:', comentario);
  //   this.comentariosRecibidos.push(comentario); // Puedes hacer algo con el comentario, como guardarlo o mostrarlo
  // }



}
