import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    BreadcrumbComponent
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
export class ProductsListComponent { }
