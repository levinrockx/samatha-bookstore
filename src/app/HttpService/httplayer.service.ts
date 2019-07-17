import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttplayerService {

  constructor(
    private http: HttpClient,
  ) { }

  public get(url): Observable<any> {
    return this.http.get(url);
  }

  public post(url, body): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    };
    return this.http.post(url, body, httpOptions);
  }

}
