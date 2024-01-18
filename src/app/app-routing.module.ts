import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { SignupComponent } from './signup/components/signup/signup.component';
import { NotesComponent } from './notes/components/notes/notes.component';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';
import { authGuard } from './shared/auth.guard';
import { unauthGuard } from './shared/services/unauth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [unauthGuard] },
  {path: 'login', component: LoginComponent, canActivate: [unauthGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [unauthGuard]},
  {path: 'mynotes', component: NotesComponent, canActivate: [authGuard]},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
