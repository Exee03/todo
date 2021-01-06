import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoFormPageRoutingModule } from './todo-form-routing.module';

import { TodoFormPage } from './todo-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoFormPageRoutingModule
  ],
  declarations: [TodoFormPage]
})
export class TodoFormPageModule {}
