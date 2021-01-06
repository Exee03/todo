import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  styleUrls: ['./todo-form.page.scss'],
})
export class TodoFormPage implements OnInit {

  label = '';
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  submit() {
    return this.modalController.dismiss(this.label);
  }

  close() {
    return this.modalController.dismiss();
  }

}
