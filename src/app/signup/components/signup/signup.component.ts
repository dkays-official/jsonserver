import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signUp: FormGroup;
  hide = true;

  constructor(private _httpService: HttpService) {
    this.signUp = new FormGroup({
      username: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  existingUser = false;

  signupUser() {
    debugger;
    let username = this.signUp.controls['username'].value;
    let condition = this._httpService.checkUser(username);
    if (!condition) {
      alert('user exist');
      return;
    }
    this._httpService.createUser(this.signUp.value).subscribe();
  }
}
