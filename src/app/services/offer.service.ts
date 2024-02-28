import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }


  getOffers({ date }: { date: string }): Observable<any> {
    return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/offer/offers/' + date);
  }
}
