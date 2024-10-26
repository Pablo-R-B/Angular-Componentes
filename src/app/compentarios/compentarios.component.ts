import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AppModule} from "../app.component";


// import EventEmitter from "node:events";
interface OnInit {
  ngOnInit():void;
}




@Component({
  selector: 'app-compentarios',
  standalone: true,
  imports: [
    FormsModule,
    AppModule
  ],
  templateUrl: './compentarios.component.html',
  styleUrl: './compentarios.component.css'
})

//implements OnInit
export class CompentariosComponent {

  comentario: string = '';
  comentarios: string[] = [];

  @Output() comentarioEnviado = new EventEmitter<string>();

  enviarComentario() {
    if (this.comentario.trim()) {
      this.comentarios.push(this.comentario);
      this.comentarioEnviado.emit(this.comentario); // Notifica al componente padre
      this.comentario = '';
    }
  }
}
