import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.types';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo, UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  todo = input.required<Todo>();

  todoToggle = output<Todo>();

  todoClicked(){
    this.todoToggle.emit(this.todo());
  }
}
