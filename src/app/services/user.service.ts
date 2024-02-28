import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // Add other headers if needed
  });
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

    withCredentials: true,
    observe: 'response' as 'response'
  };
  constructor(private http: HttpClient) { }


  getEmployees(): Observable<any> {
    return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/users/employees?sortBy=name&sortOrder=-1', this.httpOptions);
  }

  newUser({ formData }: { formData: FormData; }): Observable<any> {
    return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/auth/register', formData);
  }

  login({ data }: { data: any; }): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

      withCredentials: true,
      observe: 'response' as 'response'
    };
    return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/auth/login', data, httpOptions);
  }

  test(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

      withCredentials: true,
      observe: 'response' as 'response'
    };
    return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/protected', httpOptions);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('uToken');
    if (!token) return false;

    return true;
  }

  logout(): Observable<any> {
    return this.http.post('https://m1p11mean-aro-kenny-1.onrender.com/auth/logout', null, this.httpOptions);
  }
  myProfile(): Observable<any> {
    return this.http.get('https://m1p11mean-aro-kenny-1.onrender.com/users/emp/profile', this.httpOptions);
  }
}
