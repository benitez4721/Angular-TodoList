import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
              '../auth.css'],
  encapsulation: ViewEncapsulation.None            
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(5)]]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.registerForm.controls);
    
  }

  getEmailerror(){
    return this.registerForm.controls.email.hasError('required') ? 'The email is required' : 'The email is invalid'
  }

  getPassworderror(){
    return this.registerForm.controls.password.hasError('required') ? 'The password is required' : 'The password should have at least 5 characters'
  }

}
