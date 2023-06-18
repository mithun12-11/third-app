import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 form: FormGroup;
 constructor(){
   this.form= new FormGroup({
     email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$')]),
    Password: new FormControl('',[ Validators.required, Validators.minLength(6), Validators.maxLength(15)]),

   })
 }


 onSubmit(){
   console.log(this.form.value);

 }
}
