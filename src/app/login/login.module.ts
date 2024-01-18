import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../shared/services/http.service';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoggedUserService } from '../shared/services/logged-user.service';
import { AppRoutingModule } from '../app-routing.module';
import { InputComponent } from '../shared/component/input/input.component';


@NgModule({
  declarations: [
    LoginComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService, LoggedUserService]
})
export class LoginModule { }
