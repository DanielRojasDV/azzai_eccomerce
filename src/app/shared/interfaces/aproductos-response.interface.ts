export interface RespuestaProductos{
    data:   Productos[];
    status: number;
}

export interface Productos {
    id:           number;
    nombre:       string;
    descripcion:  string;
    precio:       number;
    stock:        number;
    imagen?:      string;
    categoria:    string;
    categoria_id: number|string;
    marca:        string;
    marca_id:     number|string;
    estado:       number;
}

export interface NuevoProducto{
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    categoria_id: number|string;
    marca_id: number|string
}


export interface respuestaProduct{   
    data: Productos;            
}