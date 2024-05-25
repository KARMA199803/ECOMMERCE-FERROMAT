import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { apiServer } from '../apiServer';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private ApiUrl: string = apiServer.serverUrl

  constructor(private http: HttpClient) { }
  getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.ApiUrl}`);
  }
}
