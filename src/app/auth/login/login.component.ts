import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
              '../auth.css'],
  encapsulation: ViewEncapsulation.None              
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    
  }

  getEmailerror(){
    return this.loginForm.controls.email.hasError('required') ? 'The email is required' : 'The email is invalid'
  }

  getPassworderror(){
    return this.loginForm.controls.password.hasError('required') ? 'The password is required' : 'The password should have at least 5 characters'
  }

}
