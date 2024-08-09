import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { IAuth } from '../../../../core/interfaces/auth.interface';
import { selectAuth } from '../../../../core/store/selectors/auth.selectors';
import { logoutUser } from '../../../../core/store/actions/auth.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  user:IAuth= {
    status: 'not-authenticated',
    uid: '',
    userName: '',
    password: ''
  }
  user$: Observable<IAuth> = new Observable();
  private router = inject(Router);

  constructor(private store:Store) {
    this.user$ = this.store.select(selectAuth);
  }

  ngOnInit(): void {
    this.user$.subscribe((user:IAuth) => {
      this.user = user;
    });
  }

  onLogout() {
    this.store.dispatch(logoutUser());
    this.router.navigate(['/auth/login']);
  }
}
