import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  public myForm:FormGroup = this.fb.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  login() {
    const { user, password } = this.myForm.value;

    if (user === 'test01' && password === 'test01') {
      this.router.navigate(['/dashboard']);
    } else {
      console.error('Error: Credenciales incorrectas');
    }
  }
}
