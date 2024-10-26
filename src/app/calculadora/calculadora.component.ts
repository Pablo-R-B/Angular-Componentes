import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number =0;
  mensaje:string='';
  operacion: string = 'suma';

  calculadora() {
    switch (this.operacion) {
      case 'suma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'resta':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacion':
        this.resultado = this.num1 * this.num2;
        break;
      case 'division':
        if (this.num2 !== 0) {
          this.resultado = this.num1 / this.num2;
        } else {
          this.mensaje = "Error: División por 0";
        }
        break;
      case 'raiz':
        if (this.num1 >= 0) {
          this.resultado = Math.sqrt(this.num1);
        } else {
          this.mensaje = "Error: Raíz de número negativo";
        }
        break;
      default:
        this.resultado = 0;

    }
  }

}



