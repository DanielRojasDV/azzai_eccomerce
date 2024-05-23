import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ProductosService } from '../../../tienda/services/productos.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    BreadcrumbComponent, CurrencyPipe, RouterLink
  ],
  templateUrl: './products-list.component.html',
  styles: [
    `
      .icon-borrar:hover {        
        stroke: rgba(255, 255, 255);
      }
    `
  ]
})
export class ProductsListComponent { 

  private productosService = inject(ProductosService);

  public productos = this.productosService.listadoProductos;

  constructor(){
    console.log(this.productos());
    
  }
}
