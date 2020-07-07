import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api = "http://localhost:4000/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //private REST_API_SERVER = "http://localhost:4000/expenses/";

  constructor(private httpClient: HttpClient) { } 

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api+ 'expenses/');
  }

  sendPostRequest(data: any): Observable<any> {
    return this.httpClient.post<any>(this.api+ 'expenses/add', data);
}
}
