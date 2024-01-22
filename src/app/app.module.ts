import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { NotesModule } from './notes/notes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';
import { httpheaderInterceptor } from './shared/services/httpheader.interceptor';
import { errorhandlerInterceptor } from './shared/services/errorhandler.interceptor';
@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NotesModule,
    LoginModule,
    SignupModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptors([httpheaderInterceptor, errorhandlerInterceptor])
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
