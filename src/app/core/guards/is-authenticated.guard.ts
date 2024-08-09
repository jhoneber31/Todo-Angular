import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, tap } from "rxjs";
import { selectAuth } from "../store/selectors/auth.selectors";

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const store = inject(Store);
  // const router = inject(Router);

  // return store.select(selectAuth).pipe(
  //   map(authState => authState.status === 'authenticated'),
  //   tap(isAuthenticated => {
  //     if (!isAuthenticated) {
  //       router.navigate(['/login']);
  //     }
  //   })
  // );
  return true;
};
