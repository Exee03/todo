import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

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

  constructor(
    private storage: Storage,
  ) { }

  create(todo) {
    this.todos.push(todo);
    this.storage.set('todos', this.todos);
  }

  async read() {
    this.todos = await this.storage.get('todos');
    return this.todos;
  }

  update(todo) {
    this.todos = this.todos.map((t) => {
      if (t.label == todo.label) {
        t.check = !t.check;
        return t;
      } else {
        return t;
      }
    });
    this.storage.set('todos', this.todos);
  }

  delete(todo) {
    this.todos = this.todos.filter((t) => {
      if(t.label == todo.label){
        return false;
      } else {
        return true;
      }
    })
    
    this.storage.set('todos', this.todos);
  }
}
