import { createAction, props } from '@ngrx/store';
import { IAuth } from '../../interfaces/auth.interface';

export const loginUser = createAction(
  '[Auth] Login User',
  props<{user: IAuth}>()
);

export const logoutUser = createAction(
  '[Auth] Logout User',
);

export const checkingUser = createAction(
  '[Auth] Checking User',
);
