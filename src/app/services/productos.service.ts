import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public cargando: boolean = true;
  public productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http
      .get(
        'https://portafolio-app-4b372-default-rtdb.firebaseio.com/productos_idx.json'
      )
      .subscribe((resp: any) => {
        this.productos = resp;
        this.cargando = false;
      });
  }
}
