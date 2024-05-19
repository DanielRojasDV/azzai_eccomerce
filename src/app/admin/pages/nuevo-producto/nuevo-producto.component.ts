import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [
    BreadcrumbComponent
  ],
  templateUrl: './nuevo-producto.component.html',
})
export class NuevoProductoComponent { }
