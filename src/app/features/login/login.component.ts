import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { checkingUser, loginUser, logoutUser } from '../../core/store/actions/auth.actions';
import { IAuth } from '../../core/interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  public alert: boolean = false;

  public myForm:FormGroup = this.fb.group({
    user: ['admin', [Validators.required]],
    password: ['admin', [Validators.required]]
  })

  constructor(private store: Store) {}

  ngOnInit(): void {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      const authUser:IAuth = JSON.parse(savedAuth);
      this.store.dispatch(loginUser({user: authUser}));
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    const { user:userName, password } = this.myForm.value;

    this.alert = false;

    this.store.dispatch(checkingUser());

    if (userName === 'admin' && password === 'admin') {
      const authUser: IAuth = {
        userName,
        password,
        uid: '72094320',
        status: 'authenticated'
      };
      this.store.dispatch(loginUser({user: authUser}));
      localStorage.setItem('auth', JSON.stringify(authUser));
      this.router.navigate(['/dashboard']);
    } else {
      this.store.dispatch(logoutUser());
      localStorage.removeItem('auth');
      this.alert = true;
    }
  }
}
