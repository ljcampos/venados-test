import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Accept':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private API: string = 'http://localhost:4200/api';

  constructor(private _http: HttpClient) { }

  getGames(): Observable<any> {
    return this._http.get<any>(`${this.API}/games`, httpOptions);
  }

  getStatistics(): Observable<any> {
    return this._http.get<any>(`${this.API}/statistics`, httpOptions);
  }

  getPlayers() : Observable<any> {
    return this._http.get<any>(`${this.API}/players`, httpOptions);
  }

  getSponsors(): Observable<any> {
    return this._http.get<any>(`${this.API}/sponsors`, httpOptions);
  }

  getNotifications(): Observable<any> {
    return this._http.get<any>(`${this.API}/notifications`, httpOptions);
  }
}
