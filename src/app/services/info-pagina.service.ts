import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina, InfoService } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  public info: InfoPagina = {};
  public cargada: boolean = false;
  public equipo: any;

  constructor(public http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http
      .get('https://portafolio-app-4b372-default-rtdb.firebaseio.com/.json')
      .subscribe((resp:any) => {
        this.cargada = true;
        this.equipo = resp.equipo ;
      });
  }
}
