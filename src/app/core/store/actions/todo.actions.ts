import { createAction, props } from '@ngrx/store';
import { ITodo } from '../../interfaces/todo.interface';

export const addTodo = createAction(
  '[Todo] Create Todo',
  props<{todo: ITodo}>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{id: string}>()
);

export const toggleTodo = createAction(
  '[TODO] Toggle Todo',
  props<{id: string}>()
);
