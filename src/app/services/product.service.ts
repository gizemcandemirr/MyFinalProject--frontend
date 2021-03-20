import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from "../models/listResponseModel";
import { Product } from "../models/product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44305/api/products/getall";


  constructor(private HttpClient:HttpClient) { }

 
  getProducts():Observable<ListResponseModel<Product>>{
    return this.HttpClient.get<ListResponseModel<Product>>(this.apiUrl);
      }
}


