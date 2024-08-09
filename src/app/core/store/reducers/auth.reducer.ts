import { createReducer, on } from '@ngrx/store';
import { checkingUser, loginUser, logoutUser } from '../actions/auth.actions';
import { IAuth } from '../../interfaces/auth.interface';

export const initialState:IAuth= {
  status: 'not-authenticated',
  uid: '',
  userName: '',
  password: ''
}

export const authReducer = createReducer(
  initialState,

  on(loginUser, (state, {user}) => {
    return {
      ...state,
      uid: user.uid,
      userName: user.userName,
      password: user.password,
      status: 'authenticated',
    }
  }),

  on(logoutUser, (state) => {
    return {
      ...state,
      uid: '',
      userName: '',
      password: '',
      status: 'not-authenticated'
    }
  }),

  on(checkingUser, (state)=> {
    return {
      ...state,
      status: 'checking'
    }
  })
);
