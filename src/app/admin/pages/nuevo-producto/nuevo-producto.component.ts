import { Component, Input, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { ProductosService } from '../../../tienda/services/productos.service';
import { NuevoProducto, Productos } from '../../../shared/interfaces/aproductos-response.interface';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [
    BreadcrumbComponent, ReactiveFormsModule, JsonPipe, TitleCasePipe, CurrencyPipe
  ],
  templateUrl: './nuevo-producto.component.html',
})
export class NuevoProductoComponent implements OnInit{
  
  private servicioProductos = inject(ProductosService);
  private toastService = inject(ToastrService);
  private router = inject(Router);

  @Input() id?: string;

  public categorias = this.servicioProductos.listadoCategorias;
  public marcas = this.servicioProductos.listadoMarcas;
  public producto: Productos = {} as Productos;

  protected fb = new FormBuilder();

  productForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    precio: [0, [Validators.required, Validators.min(50)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    categoria_id: ['', [Validators.required, Validators.minLength(1)]],
    marca_id: ['', [Validators.required, Validators.minLength(1)]],
    // imagen: [null],
  
  })

 
  ngOnInit() {
    console.log('este es el id: '+this.id);
    if(this.id) {
      // this.cargarInfoProducto();
      this.servicioProductos.obtenerProducto(this.id!)
      .subscribe( producto => {      
       this.agregarInfoaFormulario(producto);
      //  console.log(producto)
    }) 
    
  }
  }
  // cargarInfoProducto(){
  //   this.servicioProductos.obtenerProducto(this.id!)
  //    .subscribe( producto => {
  //     this.agregarInfoaFormulario(producto)
  //     this.producto = producto
      
      
  //   } );
  // }

  agregarInfoaFormulario(producto: Productos){
    console.log('este es el producto: ', producto);
    const productoData = {
      ...producto,
      categoria_id: producto.categoria_id.toString(),
      marca_id: producto.marca_id.toString()
    };

    this.productForm.reset(productoData);
    
  }

  get productoActual(): NuevoProducto{
    const producto = this.productForm.value as NuevoProducto;
    return producto;
  }
  
  
  public guardarProducto() {
   if(this.productForm.invalid) return;

   if(this.id){
    this.servicioProductos.editarProducto(this.productoActual, this.id)
    .subscribe(respuesta => {
      this.toastService.success('Producto Editado correctamente')
      // this.router.navigate(['admin-productos']);
      this.reiniciarValoresForm();
      console.log(respuesta);
      
    })     
   } else {
    this.servicioProductos.crearProducto(this.productoActual)
    .subscribe(respuesta => {
      this.toastService.success('Producto Creado correctamente')
      // this.router.navigate(['admin-productos']);
      this.reiniciarValoresForm();
      console.log(respuesta);
      
    });
   }

    
    

   
    
    
  }

  reiniciarValoresForm(){
    this.productForm.reset();
    this.productForm.markAsPristine();
    this.productForm.markAsUntouched();
    this.productForm.updateValueAndValidity();
  }

}
