import { Routes } from '@angular/router';
import PrincipalPageComponent from './tienda/pages/principal-page/principal-page.component';
import { LoginComponent } from './autenticacion/pages/login/login.component';
import { ProductsListComponent } from './admin/pages/products-list/products-list.component';
import { RegistroComponent } from './autenticacion/pages/registro/registro.component';
import { NuevoProductoComponent } from './admin/pages/nuevo-producto/nuevo-producto.component';
import { CarritoComponent } from './tienda/pages/carrito/carrito.component';

export const routes: Routes = [

    { path: 'tienda', title: 'Sachi Pet  - Pagina Principal', component: PrincipalPageComponent },
    { path: 'carrito', title: 'Carrito', component: CarritoComponent},

    { path: 'login', title: 'Inicio de Sesion', component: LoginComponent},
    { path: 'registro', title: 'Registro', component: RegistroComponent },

    { path: 'admin-productos', title: 'Listado Productos', component: ProductsListComponent },
    { path: 'nuevo-producto', title: 'Nuevo Producto', component: NuevoProductoComponent},
    { path: 'editar-producto/:id', title: 'Editar Productos', component: NuevoProductoComponent }, 

    { path: '', redirectTo: 'tienda', pathMatch: 'full' },
    { path: '**', redirectTo: 'tienda', pathMatch: 'full' },


];
