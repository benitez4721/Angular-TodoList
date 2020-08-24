import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
              '../auth.css'],
  // encapsulation: ViewEncapsulation.None              
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })
  loading = false;
  constructor(private fb: FormBuilder, private user_s: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.loading = true
      this.user_s.login(this.loginForm.value).subscribe( resp => {this.router.navigateByUrl('/dashboard')},
                                                         error => {
                                                           this.loginForm.controls.password.setErrors({
                                                           incorrect: true
                                                         })
                                                         this.loading = false
                                                        } 
      )
    
    }
    
    
  }

  getEmailerror(){
    return this.loginForm.controls.email.hasError('required') ? 'The email is required' : 'The email is invalid'
  }

  getPassworderror(){
    let loginControl = this.loginForm.controls.password

    if(loginControl.hasError('required')){
      return 'The password is required'
    }
    else if(loginControl.hasError('incorrect')){
      return 'The password or email are incorrect'
    }
    return 'The password should have at least 5 characters'
  }

}
