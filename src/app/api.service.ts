import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  apiURL: string = 'http://167.86.74.159/InningsClient/InningsClient.svc/Login';
  router: any;

  constructor(private httpClient: HttpClient) { }

  login(data): Observable<any> {
    return this.httpClient.post(`${this.apiURL}`, data);
  }

  Logout(): Observable<any> {
    return this.httpClient.post('http://167.86.74.159/InningsClient/InningsClient.svc/Logout', {});
  }
  changePassword(data):Observable<any> {
    return this.httpClient.post('http://167.86.74.159/InningsClient/InningsClient.svc/ChangePwd',data)
  }

}
