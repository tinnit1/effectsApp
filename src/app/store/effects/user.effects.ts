import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as usersActions from '../actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UserService} from '../../services/user.service';
import {of} from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  loadUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersActions.loadUser),
      mergeMap(
        (action) => this.userService.getUserById(action.id)
          .pipe(
            map(user => usersActions.loadUserSuccess({user})),
            catchError(err => of(usersActions.loadUserError({payload: err})))
          )
      )
    )
  );
}
