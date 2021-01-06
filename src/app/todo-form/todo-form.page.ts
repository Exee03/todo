import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  styleUrls: ['./todo-form.page.scss'],
})
export class TodoFormPage implements OnInit {

  label = '';
  file: File;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  submit() {
    return this.modalController.dismiss(this.label);
  }
  
  changeListener(event) {
    console.log(event);
    this.file = event.target.files[0];
    console.log(this.file);
    
  }

  close() {
    return this.modalController.dismiss();
  }

}
