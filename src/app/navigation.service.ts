import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  // apiURL: string = '';

  constructor(private httpClient: HttpClient) { }

  getsportsList():Observable<any> {
    return this.httpClient.get('http://167.86.74.159/InningsClient/InningsClient.svc/Navigation/SportsList')
  }

  gettournamentList(id):Observable<any> {
    return this.httpClient.get('http://167.86.74.159/InningsClient/InningsClient.svc/Navigation/TournamentList?id='+id)
  }

  getmatchList(id,mid):Observable<any> {
    return this.httpClient.get(`http://167.86.74.159/InningsClient/InningsClient.svc/Navigation/MatchList?id=${id}&tourid=${mid}`)
  }

  getmarketList(id):Observable<any> {
    return this.httpClient.get('http://167.86.74.159/InningsClient/InningsClient.svc/Navigation/MarketList?mtid='+id)
  }

  getInplay():Observable<any> {
    return this.httpClient.get('http://167.86.74.159/InningsClient/InningsClient.svc/Data/Inplay')
  }




}
