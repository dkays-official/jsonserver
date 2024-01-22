import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
   userExists = false;
  checkUser(username: any): boolean { 
    this._httpService.get(this.url + "users").subscribe((data: any) => {
      console.log(data);
      for(let i=0; i<data.length;i++){
        if(username === data[i].username){
          this.userExists = true;
          break;
        }
        else{
          this.userExists= false;
        }
      }
    });
    return this.userExists;
  }
}
