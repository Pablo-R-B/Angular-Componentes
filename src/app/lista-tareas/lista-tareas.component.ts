import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

interface Task {
  id: number;
  description: string;
}

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})


export class ListaTareasComponent {
  tarea:string='';
  tareasLista:string[] =[];

  agregarTarea(){
    if(this.tarea.trim()){
      this.tareasLista.push(this.tarea.trim());
      this.tarea='';
    }
  }

  // tasks: Task[] = [];
  // newTaskDescription
  //   = '';
  //
  // addTask(description: string) {
  //   const newTask: Task = {
  //     id: this.tasks.length + 1,
  //     description
  //   };
  //   this.tasks.push(newTask);
  // }

}
