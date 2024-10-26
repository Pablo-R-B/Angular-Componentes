import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {
  tiempoRestante: number = 0;
  intervalo: any;

  empezarCuentaAtras(segundos: number) {
    this.tiempoRestante = segundos;
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        clearInterval(this.intervalo);
      }
    }, 1000);
  }

  detenerCuentaAtras() {
    clearInterval(this.intervalo);
  }

}
