import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { InputComponent } from '../shared/component/input/input.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpService } from '../shared/services/http.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent, InputComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
})
export class LoginModule {}
