import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor() { }

  setLoggedUser( loggedUser : string ){
    window.localStorage.setItem("LoggedUser", JSON.stringify(loggedUser))
  }
  getLoggedUser(LoggedUser: string){
    window.localStorage.getItem(LoggedUser)
  }

  removeLoggedUser(){
    window.localStorage.removeItem("LoggedUser")
  }
}
