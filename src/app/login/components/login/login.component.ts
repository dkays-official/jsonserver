import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private _httpServices: HttpService,
    private _router: Router,
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    return this._httpServices.getUsers().subscribe((data) => {
      let formInput = this.loginForm.value;
      data.forEach((user: any) => {
        if (
          this.loginForm.valid &&
          formInput.username == user.username &&
          formInput.password == user.password
        ) {
          localStorage.setItem('LoggedUser', user);
          this._router.navigateByUrl('/mynotes');
        }
      });
    });
  }
}
