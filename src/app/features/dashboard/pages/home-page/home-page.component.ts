import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITodo } from '../../../../core/interfaces/todo.interface';
import { selectTodo } from '../../../../core/store/selectors/todo.selectors';
import { deleteTodo, toggleTodo } from '../../../../core/store/actions/todo.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent implements OnInit, OnDestroy {

  todos$: Observable<ITodo[]>;
  todos: ITodo[] = [];
  private todosSubscription: Subscription | null = null;
  valueTodo: boolean = false;

  constructor(private store:Store) {
    this.todos$ = this.store.select(selectTodo);
  }

  ngOnInit() {
    this.todosSubscription = this.todos$.subscribe(todos => {
      this.todos = todos;
    });
  }

  onToggleTask(id: string): void {
    this.store.dispatch(toggleTodo({id}))
  }

  onDeleteTask(id: string): void {
    this.store.dispatch(deleteTodo({id}))
  }

  ngOnDestroy(): void {
    if (this.todosSubscription) {
      this.todosSubscription.unsubscribe();
    }
  }
}
