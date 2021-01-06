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

  update(todo) {
    return this.todos.map((t) => {
      if (t.label == todo.label) {
        t.check = !t.check;
        return t;
      } else {
        return t;
      }
    });
  }

  delete(todo) {
    return;
  }
}
