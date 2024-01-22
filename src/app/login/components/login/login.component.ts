import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http.service';
import { LoggedUserService } from '../../../shared/services/logged-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;

  constructor(private _httpServices: HttpService, private _router: Router, private _loggedUser: LoggedUserService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    return this._httpServices.getUsers().subscribe((data) => {
      let formInput = this.loginForm.value;
      data.forEach((user: any) => {
        if (formInput.username == user.username && formInput.password == user.password && this.loginForm.valid) {
          this._loggedUser.setLoggedUser("LoggedUser", user)
          this._router.navigateByUrl('/mynotes')
        }
      });
    })
  }
  check() {
    console.log(this.loginForm)
  }

} 
