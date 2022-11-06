import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public cargando: boolean = true;
  public productos: Producto[] = [];
  public productosFiltrados: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(
          'https://portafolio-app-4b372-default-rtdb.firebaseio.com/productos_idx.json'
        )
        .subscribe((resp: any) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  public getProducto(id: string) {
    return this.http.get(
      `https://portafolio-app-4b372-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  public buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // al obtener los productos, aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // aplciar filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrados = [];

    termino = termino.toLowerCase();

    this.productos.forEach((prod) => {
      const tituloLower = prod.titulo.toLowerCase();
      if (
        prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this.productosFiltrados.push(prod);
      }
    });
  }
}
