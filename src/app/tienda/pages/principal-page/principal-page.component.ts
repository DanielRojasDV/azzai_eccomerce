import { Component, Signal, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { JsonPipe } from '@angular/common';
import { Productos } from '../../../shared/interfaces/aproductos-response.interface';

@Component({
  selector: 'app-principal-page',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './principal-page.component.html',  
})
export default class PrincipalPageComponent { 

  private servicioProductos = inject(ProductosService);

  public productos : Signal<Productos[]> = this.servicioProductos.listadoProductos;


}
