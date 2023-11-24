import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {

  form!: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })

    this.form.valueChanges.subscribe(res => {
      console.warn('FORM LOGIN: ', res)
    })
  }

  handlerRegister() {
    this.router.navigate([''])
  }
}
