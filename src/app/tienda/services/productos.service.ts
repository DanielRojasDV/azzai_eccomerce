import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NuevoProducto, Productos, RespuestaProductos, respuestaProduct } from '../../shared/interfaces/aproductos-response.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Categorias, Marcas } from '../../shared/interfaces/categorias.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private readonly apiUrl = 'http://localhost:8000/api';

  private http = inject(HttpClient);

  private productos$: Observable<Productos[]> = this.http.get<RespuestaProductos>(`${this.apiUrl}/productos`)
  .pipe(
    map((respuesta: RespuestaProductos) => {
      return respuesta.data;
    }),
   
    catchError((error: any) => {
      console.log(error);
      return of([]);
    })
  );

  obtenerProducto(productoId: string): Observable<Productos>{
    return this.http.get<respuestaProduct>(`${this.apiUrl}/productos/${productoId}`)
    .pipe(
      map( resp => {
        const productoData : Productos = {
              ...resp.data,              
        }

        return productoData
      }),
      tap(producto => console.log(producto))
    );
  }

  public readonly listadoProductos = toSignal(this.productos$, { initialValue: [] as Productos[]});

  private categorias$: Observable<Categorias[]> = this.http.get<Categorias[]>(`${this.apiUrl}/categorias`)
  .pipe(
    catchError((error: any) => {
      console.log(error);
      return of([]);
    })
  );
   
    
  public readonly listadoCategorias = toSignal(this.categorias$, { initialValue: [] as Categorias[] });

  private marcas$: Observable<Marcas[]> = this.http.get<Marcas[]>(`${this.apiUrl}/marcas`)
  .pipe(
    catchError((error: any) => {
      console.log(error);
      return of([]);
    })
  );

  public readonly listadoMarcas = toSignal(this.marcas$, { initialValue: [] as Marcas[] });
  
  
  constructor() {
    
   }

   crearProducto(producto: NuevoProducto){
      return this.http.post<NuevoProducto>(`${this.apiUrl}/productos`, producto);
   }

   editarProducto(producto: NuevoProducto, id:string){
      return this.http.put<NuevoProducto>(`${this.apiUrl}/productos/${id}`, producto);
   }
}
