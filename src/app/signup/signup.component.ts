import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordMatch } from '../validator/passwordmatch';
import {  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form: FormGroup;

  constructor(){
    this.form= new FormGroup({
      name: new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$')]),
      password: new FormControl('',[ Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      conf_password: new FormControl('',[ Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    })


  }
 
  register(){


  }

}
