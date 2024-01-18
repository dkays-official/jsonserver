import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _httpService : HttpClient) { }
  url = 'http://localhost:3000/';
  createUser(user: any): Observable <any>{
    return this._httpService.post(this.url+"users", user);
  }
  getUsers(): Observable <any>{
    return this._httpService.get(this.url+"users");
  }
}
