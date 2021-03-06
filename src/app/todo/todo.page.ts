import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
import { TodoFormPage } from '../todo-form/todo-form.page';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  todos = [];
  filterTodo = [];
  segment = 'uncheck';

  constructor(
    private modalController: ModalController,
    private dbService: DatabaseService,
  ) { }

  async ngOnInit() {
    await this.getTodos();
    await this.refeshTodo();
  }

  async getTodos() {
    this.todos = await this.dbService.read();
  }

  checked(todo) {
    console.log(todo);
    // this.todos = this.dbService.todos.map((t) => {
    //   if (t.label == todo.label) {
    //     t.check = !t.check;
    //     // t.check = true;
    //     return t;
    //   }
    //   return t;
    // });
    this.dbService.update(todo);
    this.refeshTodo();
  }

  segmentChanged(event) {
    this.segment = event.detail.value;
    this.refeshTodo();
  }

  async refeshTodo() {
    await this.getTodos();
    if (this.todos != null) {
      this.filterTodo = this.todos.filter((t) => {
        if (this.segment == "uncheck") {
          return t.check == false;
        }
        return t.check == true;
      });
    }
  }

  async addTodo() {
    const modal = await this.modalController.create({
      component: TodoFormPage,
    });

    await modal.present();

    const result = await modal.onDidDismiss();

    console.log(result);

    if (result.data != "") {
      const todo = {
        label: result.data,
        check: false,
      }
      this.dbService.create(todo);
      // this.todos.push(todo);
      this.refeshTodo();
    }

  }

  deleteTodo(todo) {
    console.log(todo);
    this.dbService.delete(todo);
    this.refeshTodo();
  }

  // async editTodo(todo) {
  //   console.log(todo);

  //   const modal = await this.modalController.create({
  //     component: TodoFormPage,
  //     componentProps: { label: todo.label },
  //   });

  //   await modal.present();

  //   const result = await modal.onDidDismiss();

  //   console.log(result);

  //   if(result.data != '') {
  //     const t = {
  //       label: result.data,
  //       check: todo.check,
  //     };

  //     this.dbService.update(t);
  //     this.refeshTodo();
  //   }

  // }

}
