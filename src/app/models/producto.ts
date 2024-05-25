export interface Producto {
  _id:            string;
  nombre:         string;
  descripcion:    string;
  marca:          string;
  categoria:      string[];
  imageUrl:       string[];
  precio_venta:   number;
  precio_regular: number;
  slug?:           string;
  created_at:     Date;
  update_at?:     Date;
}
