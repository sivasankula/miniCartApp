import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServService {

  constructor(public httpClent:HttpClient) { }

  getCartDetails():Observable<any> {
    return this.httpClent.get('https://dnc0cmt2n557n.cloudfront.net/products.json')
  }
}
