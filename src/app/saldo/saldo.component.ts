import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-saldo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css'
})
export class SaldoComponent {


  @Input() nombre:string ='';
  // nombrePersona: string = 'Juan';



}
