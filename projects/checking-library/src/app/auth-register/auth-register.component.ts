import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent {
  form!: FormGroup

  isChangeRegister = false

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })

    this.form.valueChanges.subscribe(res => {
      console.warn('FORM REGISTER: ', res)
    })
  }

  handlerLogin() {
    this.router.navigate(['/login'])
  }

  register() { 
    this.isChangeRegister = true
  }
}
