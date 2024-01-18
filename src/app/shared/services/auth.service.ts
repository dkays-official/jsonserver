import { Injectable } from '@angular/core';
import { LoggedUserService } from './logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _loggedUser : LoggedUserService) { 
  }
  isUserLoggedIn(){
   // return this._loggedUser.getLoggedUser(" LoggedUser")
    return !!localStorage.getItem("LoggedUser")
  }
}
