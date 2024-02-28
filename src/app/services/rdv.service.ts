import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

    withCredentials: true,
    observe: 'response' as 'response'
  };
  constructor(private http: HttpClient) { }
  newRdv({ data }: { data: any; }): Observable<any> {
    return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/rdv/new', data, this.httpOptions);
  }
  getRdv({ dateInit, dateFin, limit, page, dateSort }: { dateInit: string, dateFin: string, limit: number, page: number, dateSort: number }): Observable<any> {
    return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/rdv/' + dateInit + '/' + dateFin + '/' + limit + '/' + page + '/' + dateSort, this.httpOptions);
  }

  get({ id }: { id: string }): Observable<any> {
    return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/rdv/' + id, this.httpOptions);
  }

  delete(id: string): Observable<any> {
    return this.http.delete('https://m1p11mean-aro-kenny-1.onrender.com/rdv/rdvs/' + id, this.httpOptions);
  }
}
