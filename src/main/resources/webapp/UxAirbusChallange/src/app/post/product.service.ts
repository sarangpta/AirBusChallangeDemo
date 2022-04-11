import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';
import { environment } from 'src/environments/environment';
    

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productData: BehaviorSubject<Product> = new BehaviorSubject<Product>(null);

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     

  getProductData(): Observable<any>{
    return this.productData.asObservable();
  }

  setProductData(product: Product){
    return this.productData.next(product);
  }

  getAll(): Observable<any>{
    return this.httpClient.get( environment.BASE_URL + '/').pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(product:Product): Observable<any> {
    return this.httpClient.post(environment.BASE_URL + '/addProduct', product).pipe(
      catchError(this.errorHandler)
    );
  }  
     
  update(product:Product): Observable<any> {
    return this.httpClient.put(environment.BASE_URL + '/updateProduct' , product).pipe(
      catchError(this.errorHandler)
    );
  }    
    
  getByCategory(category: string): Observable<any>{
    return this.httpClient.post(environment.BASE_URL + '/getProductByCategory',category).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
 
}
