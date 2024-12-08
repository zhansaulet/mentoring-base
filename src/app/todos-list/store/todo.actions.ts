import { createActionGroup, props } from '@ngrx/store';
import { ITodo } from '../../interfaces/todo.interface';

export const TodoActions = createActionGroup({
  source: 'Todos',
  events: {
    set: props<{ todos: ITodo[] }>(),
    edit: props<{ todo: ITodo }>(),
    create: props<{ todo: ITodo }>(),
    delete: props<{ id: number }>(),
    load: props<{ todos: ITodo[] }>(),
    loadError: props<{ error: string }>(),
  },
});
