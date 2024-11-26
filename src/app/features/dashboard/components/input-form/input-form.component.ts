import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from '../../../../core/store/actions/todo.actions';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
})
export class InputFormComponent {
  private fb = inject(FormBuilder);


  public myForm: FormGroup = this.fb.group({
    titleTask: ['', [Validators.required]],
  });

  constructor(private store: Store) {}

  addTask() {
    const { titleTask } = this.myForm.value;
    const id = Date.now().toString();
    this.store.dispatch(addTodo({todo: {title: titleTask, id, active: false}}));
    this.myForm.reset();
  }
}
