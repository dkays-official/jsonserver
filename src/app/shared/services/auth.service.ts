import { Injectable } from '@angular/core';
import { LoggedUserService } from './logged-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _loggedUser: LoggedUserService) {}
  isUserLoggedIn() {
    return !!localStorage.getItem('LoggedUser');
  }
}
