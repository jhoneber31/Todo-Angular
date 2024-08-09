import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ITodo } from '../../interfaces/todo.interface';

export const selectTodo = createFeatureSelector<ITodo[]>('todo');
