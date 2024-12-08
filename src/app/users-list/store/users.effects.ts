import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersApiService } from '../../users-api.service';
import { UserActions } from './users.actions';
import { catchError, map, of, switchMap } from 'rxjs';

export const loadUsers = createEffect(
  () => {
    const actions$ = inject(Actions);
    const usersService = inject(UsersApiService);
    return actions$.pipe(
      ofType(UserActions.load),
      switchMap(() =>
        usersService.getUsers().pipe(
          map((users) => UserActions.set({ users })),
          catchError((error) =>
            of(UserActions.loadError({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);
