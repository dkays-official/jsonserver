import { Component } from '@angular/core';
import { LoggedUserService } from '../../../shared/services/logged-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private _localStorage : LoggedUserService, private _router : Router){}
  logout(){
    this._localStorage.removeLoggedUser()
    this._router.navigateByUrl('/login')
  }  

}
