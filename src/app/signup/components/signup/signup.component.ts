import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
signUp : FormGroup;
hide = true;
// formControls = [
//   {
//     type: 'text',
//     formControlName: 'name',
//     placeholder: 'Enter Name',
//     validators: [Validators.required],
//   },
//   {
//     type: 'password',
//     formControlName: 'password',
//     placeholder: 'Enter a valid password',
//     validators: [Validators.required],
//   },
// ];
// newControls: any = [];
constructor(private _httpService : HttpService){
  this.signUp = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
}

existingUser = false;
// next() {
//   if (!this.newControls.length) {
//     this.newControls.push(this.formControls[0]);
//     this.signUp.addControl(this.formControls[0].formControlName, new FormControl("Deepak"));
//   }
//   else{
//     this.newControls.push(this.formControls[this.newControls.length]);
//     this.signUp.addControl(this.formControls[this.newControls.length].formControlName, new FormControl(""))
//   }
// }

signupUser(){ 
this._httpService.getUsers().subscribe((existingUsers)=>{
  existingUsers.forEach((user: any) => {
  const username = this.signUp.get("username")   
    //debugger
    if(user.username === username?.value)
    {
      this.existingUser = true;
      alert("already")
      return;
    }
    else{
      this.existingUser = false;
    }
  });  
   if(!this.existingUser && this.signUp.valid){    
      this._httpService.createUser(this.signUp.value).subscribe((data)=>{
        alert("Welcome  " + data.name);    
      })
      
  }

}) 
} 
// signupUser() {
//   this._httpService.getUsers().subscribe((existingUsers) => {
//     const username = this.signUp.get("username")?.value;
//     let duplicateUserFound = false;

//     existingUsers.forEach((user: any) => {
//       if (user.username === username) {
//         duplicateUserFound = true;
//         return; // Exit the loop as soon as a duplicate is found
//       }
//     });

//     if(duplicateUserFound){
//       alert("User already exist")
//     }

//     if (!duplicateUserFound && this.signUp.valid) {
//       this._httpService.createUser(this.signUp.value).subscribe((data) => {
//         alert("Welcome " + data.name);
//       });
//     } else if (!this.signUp.valid) {
//       alert("Please fill the details properly");
//     }
//   });
// }
}

