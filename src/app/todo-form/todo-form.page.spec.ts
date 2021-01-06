import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoFormPage } from './todo-form.page';

describe('TodoFormPage', () => {
  let component: TodoFormPage;
  let fixture: ComponentFixture<TodoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
