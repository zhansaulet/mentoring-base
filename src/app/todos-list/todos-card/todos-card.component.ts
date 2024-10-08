import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todos-card',
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
  standalone: true,
  imports: [],
})
export class TodosCardComponent {
  @Input()
  todo!: ITodo;

  @Output()
  deleteTodos = new EventEmitter();

  onDeleteTodos(id: number) {
    this.deleteTodos.emit(id);
  }
}
