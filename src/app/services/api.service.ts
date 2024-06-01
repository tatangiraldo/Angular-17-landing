import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/Iproduct.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private _http = inject(HttpClient)
  private baseUrl: string = 'https://fakestoreapi.com/products'

  getProds(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.baseUrl)
  }

  getProd(id: number): Observable<IProduct>{
    return this._http.get<IProduct>(`${this.baseUrl}/${id}`)
  }
}
