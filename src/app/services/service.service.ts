import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
  getServices(): Observable<any> {
    console.log('getting services')
    return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/service/services');
  }
}
