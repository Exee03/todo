import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  todos = [
    {
      label: 'todo 1',
      check: false,
    },
    {
      label: 'todo 2',
      check: false,
    },
    {
      label: 'todo 3',
      check: false,
    }
  ];

  constructor() { }

  create(todo) {
    return this.todos.push(todo);
  }

  read() {
    return this.todos;
  }

  update() {
    return ;
  }

  delete() {
    return ;
  }
}