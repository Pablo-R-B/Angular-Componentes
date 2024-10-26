import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

import {FormsModule} from "@angular/forms";
import {AppModule} from "../app.component";
import {CommonModule, NgIf} from "@angular/common";








@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [DatePipe,  FormsModule,CommonModule, NgIf,
    AppModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})

export class ContadorComponent  {
  private intervalo: any;
  formatoHora: string = '';
  estaActivo: boolean = true;

  private inciar() {
    // Update time immediately
    this.actualizar();
    // Set interval to update time every second
    this.intervalo = setInterval(() => {
      this.actualizar();
    }, 1000);
  }

  private detener() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }

  private actualizar() {
    const horaActual = new Date();
    const horas = this.formatearHora(horaActual.getHours());
    const minutos = this.formatearHora(horaActual.getMinutes());
    const segundos = this.formatearHora(horaActual.getSeconds());
    this.formatoHora = `${horas}:${minutos}:${segundos}`;
  }

  private formatearHora(num: number): string {
    return num.toString().padStart(2, '0');
  }

  cambiar() {
    if (this.estaActivo) {
      this.detener();
    } else {
      this.inciar();
    }
    this.estaActivo = !this.estaActivo;
  }


}
