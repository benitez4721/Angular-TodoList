import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
              '../auth.css'],
  // encapsulation: ViewEncapsulation.None            
})
export class RegisterComponent implements OnInit {

  loading = false;
  registerForm = this.fb.group({
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(5)]]
  });
  emailExistmessage = false;
  constructor(private fb: FormBuilder, private user_s: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.loading = true
      this.user_s.register(this.registerForm.value).subscribe( 
            resp => {this.router.navigateByUrl('login')}, 
            error => { console.log(error);
                      this.loading = false
                      this.registerForm.controls.email.setErrors({notUnique: true})
                      })

    }    
    
  }

  getEmailerror(){

    if(this.registerForm.controls.email.hasError('required')){
      return 'The email is required'
    }

    if(this.registerForm.controls.email.hasError('notUnique')){
      return 'The email already exist'
    }
    return 'The email is invalid'
    // return this.registerForm.controls.email.hasError('required') ? 'The email is required' : 'The email is invalid'
  }

  getPassworderror(){
    return this.registerForm.controls.password.hasError('required') ? 'The password is required' : 'The password should have at least 5 characters'
  }

}
