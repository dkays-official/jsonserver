import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggedUserService {
  constructor() {}

  setLoggedUser(key: string, loggedUser: string) {
    window.localStorage.setItem(key, JSON.stringify(loggedUser));
  }
  getLoggedUser(LoggedUser: string) {
    window.localStorage.getItem(LoggedUser);
  }

  removeLoggedUser() {
    window.localStorage.removeItem('LoggedUser');
  }
}
