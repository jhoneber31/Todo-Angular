import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo, toggleTodo } from '../actions/todo.actions';
import { ITodo } from '../../interfaces/todo.interface';


export const initialState:ReadonlyArray<ITodo>= []

export const todoReducer = createReducer(
  initialState,

  on(addTodo, (state, {todo}) => {
    return [...state, todo]
  }),

  on(deleteTodo, (state, {id}) => {
    return state.filter(todo => todo.id !== id)
  }),

  on(toggleTodo, (state, {id}) => {
    return state.map(todo =>
      todo.id === id
      ? {...todo, active: !todo.active}
      : todo
    )
  }),
);
