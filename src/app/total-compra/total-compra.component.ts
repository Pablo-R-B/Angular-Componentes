import {Component, OnInit, TrackByFunction} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";

interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-total-compra',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './total-compra.component.html',
  styleUrl: './total-compra.component.css'
})
export class TotalCompraComponent{


  productosLista: Producto[] = [
    { nombre: 'Manzana', precio: 1.20, cantidad: 0 },
    { nombre: 'Pan', precio: 1.50, cantidad: 0 },
    { nombre: 'Leche', precio: 0.99, cantidad: 0 },
    { nombre: 'Huevos', precio: 2.10, cantidad: 0 }
  ];


  agregarArticulo(producto: Producto): void {
    producto.cantidad += 1;
  }

  // Quitar una unidad de un artículo
  quitarArticulo(producto: Producto): void {
    if (producto.cantidad > 0) {
      producto.cantidad -= 1;
    }
  }

  // Calcular el total del ticket


  calcularTotal(): number {
    return this.productosLista.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }

}
