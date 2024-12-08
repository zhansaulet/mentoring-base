import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoActions } from './todo.actions';
import { inject } from '@angular/core';
import { TodosApiService } from '../../todos-api.service';
import { catchError, map, of, switchMap } from 'rxjs';

export const loadTodos = createEffect(
  () => {
    const actions$ = inject(Actions);
    const todosService = inject(TodosApiService);
    return actions$.pipe(
      ofType(TodoActions.load),
      switchMap(() =>
        todosService.getTodosList().pipe(
          map((todos) => TodoActions.set({ todos })),
          catchError((error) =>
            of(TodoActions.loadError({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);
