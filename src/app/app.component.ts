import { Component, NgModule } from '@angular/core';
import { HistoriaImagen } from './modelos/historia-imagen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elementosGuardados: Array<HistoriaImagen> = [];
  public nuevoHistorial: HistoriaImagen = {
    nombre: '',
    detalle: '',
    imagen: ''
  }
  public imagen: string = 'https://univia.info/wp-content/uploads/2015/09/33.jpg';
  public imagen2: string = 'https://static9.depositphotos.com/94920/1090/i/450/depositphotos_10907008-stock-photo-siberian-cat-sitting-in-front.jpg';
  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
  }
  public cambiarDetalle(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.detalle = elemento.value;
  }
  public cambiarImagen(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.imagen = elemento.value;
  }

  public guardarHistorial(): void {
    // 1 nivel
    const copia: HistoriaImagen = {
      ...this.nuevoHistorial
    }
    copia.id = this.elementosGuardados.length + 1;
    this.elementosGuardados.push(copia);
    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.detalle = '';
    this.nuevoHistorial.imagen = '';
  }

}
