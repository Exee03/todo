import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

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

  filterTodo = [];

  segment = 'uncheck';

  constructor() { }

  ngOnInit() {
    this.refeshTodo();
  }

  checked(todo) {
    console.log(todo);
    this.todos = this.todos.map((t) => {
      if(t.label == todo.label) {
        t.check = !t.check;
        // t.check = true;
        return t;
      }
      return t;
    });
    this.refeshTodo();
  }

  segmentChanged(event) {
    this.segment = event.detail.value;
    this.refeshTodo();
  }

  refeshTodo() {
    this.filterTodo = this.todos.filter((t) => {
      if (this.segment == "uncheck"){
        return t.check == false;
      }
      return t.check == true;
    });
  }

}
